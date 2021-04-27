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
var map__3124 = s;
var map__3124__$1 = (((((!((map__3124 == null))))?(((((map__3124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3124):map__3124);
var name = cljs.core.get.call(null,map__3124__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__3124__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__3127 = info;
var map__3128 = G__3127;
var map__3128__$1 = (((((!((map__3128 == null))))?(((((map__3128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3128):map__3128);
var shadow = cljs.core.get.call(null,map__3128__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__3127__$1 = G__3127;
while(true){
var d__$2 = d__$1;
var map__3130 = G__3127__$1;
var map__3130__$1 = (((((!((map__3130 == null))))?(((((map__3130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3130):map__3130);
var shadow__$1 = cljs.core.get.call(null,map__3130__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__3132 = (d__$2 + (1));
var G__3133 = shadow__$1;
d__$1 = G__3132;
G__3127__$1 = G__3133;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__3134){
var map__3135 = p__3134;
var map__3135__$1 = (((((!((map__3135 == null))))?(((((map__3135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3135):map__3135);
var name_var = map__3135__$1;
var name = cljs.core.get.call(null,map__3135__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__3135__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__3137 = info;
var map__3137__$1 = (((((!((map__3137 == null))))?(((((map__3137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3137):map__3137);
var ns = cljs.core.get.call(null,map__3137__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__3137__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__3140 = arguments.length;
switch (G__3140) {
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
var G__3142 = cp;
switch (G__3142) {
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
var seq__3144_3148 = cljs.core.seq.call(null,s);
var chunk__3145_3149 = null;
var count__3146_3150 = (0);
var i__3147_3151 = (0);
while(true){
if((i__3147_3151 < count__3146_3150)){
var c_3152 = cljs.core._nth.call(null,chunk__3145_3149,i__3147_3151);
sb.append(cljs.compiler.escape_char.call(null,c_3152));


var G__3153 = seq__3144_3148;
var G__3154 = chunk__3145_3149;
var G__3155 = count__3146_3150;
var G__3156 = (i__3147_3151 + (1));
seq__3144_3148 = G__3153;
chunk__3145_3149 = G__3154;
count__3146_3150 = G__3155;
i__3147_3151 = G__3156;
continue;
} else {
var temp__5735__auto___3157 = cljs.core.seq.call(null,seq__3144_3148);
if(temp__5735__auto___3157){
var seq__3144_3158__$1 = temp__5735__auto___3157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3144_3158__$1)){
var c__4461__auto___3159 = cljs.core.chunk_first.call(null,seq__3144_3158__$1);
var G__3160 = cljs.core.chunk_rest.call(null,seq__3144_3158__$1);
var G__3161 = c__4461__auto___3159;
var G__3162 = cljs.core.count.call(null,c__4461__auto___3159);
var G__3163 = (0);
seq__3144_3148 = G__3160;
chunk__3145_3149 = G__3161;
count__3146_3150 = G__3162;
i__3147_3151 = G__3163;
continue;
} else {
var c_3164 = cljs.core.first.call(null,seq__3144_3158__$1);
sb.append(cljs.compiler.escape_char.call(null,c_3164));


var G__3165 = cljs.core.next.call(null,seq__3144_3158__$1);
var G__3166 = null;
var G__3167 = (0);
var G__3168 = (0);
seq__3144_3148 = G__3165;
chunk__3145_3149 = G__3166;
count__3146_3150 = G__3167;
i__3147_3151 = G__3168;
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
var map__3169_3174 = ast;
var map__3169_3175__$1 = (((((!((map__3169_3174 == null))))?(((((map__3169_3174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3169_3174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3169_3174):map__3169_3174);
var env_3176 = cljs.core.get.call(null,map__3169_3175__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_3176))){
var map__3171_3177 = env_3176;
var map__3171_3178__$1 = (((((!((map__3171_3177 == null))))?(((((map__3171_3177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3171_3177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3171_3177):map__3171_3177);
var line_3179 = cljs.core.get.call(null,map__3171_3178__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_3180 = cljs.core.get.call(null,map__3171_3178__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__3171_3177,map__3171_3178__$1,line_3179,column_3180,map__3169_3174,map__3169_3175__$1,env_3176){
return (function (m){
var minfo = (function (){var G__3173 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__3173,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__3173;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_3179 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__3171_3177,map__3171_3178__$1,line_3179,column_3180,map__3169_3174,map__3169_3175__$1,env_3176){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_3180)?(column_3180 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__3171_3177,map__3171_3178__$1,line_3179,column_3180,map__3169_3174,map__3169_3175__$1,env_3176){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__3171_3177,map__3171_3178__$1,line_3179,column_3180,map__3169_3174,map__3169_3175__$1,env_3176))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__3171_3177,map__3171_3178__$1,line_3179,column_3180,map__3169_3174,map__3169_3175__$1,env_3176))
,cljs.core.sorted_map.call(null)));
});})(map__3171_3177,map__3171_3178__$1,line_3179,column_3180,map__3169_3174,map__3169_3175__$1,env_3176))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__3189 = arguments.length;
switch (G__3189) {
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
var len__4641__auto___3196 = arguments.length;
var i__4642__auto___3197 = (0);
while(true){
if((i__4642__auto___3197 < len__4641__auto___3196)){
args_arr__4662__auto__.push((arguments[i__4642__auto___3197]));

var G__3198 = (i__4642__auto___3197 + (1));
i__4642__auto___3197 = G__3198;
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
var s_3199 = (function (){var G__3190 = a;
if((!(typeof a === 'string'))){
return G__3190.toString();
} else {
return G__3190;
}
})();
var temp__5739__auto___3200 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___3200 == null)){
} else {
var sm_data_3201 = temp__5739__auto___3200;
cljs.core.swap_BANG_.call(null,sm_data_3201,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),((function (sm_data_3201,temp__5739__auto___3200,s_3199){
return (function (p1__3181_SHARP_){
return (p1__3181_SHARP_ + s_3199.length);
});})(sm_data_3201,temp__5739__auto___3200,s_3199))
);
}

cljs.core.print.call(null,s_3199);

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

var seq__3191 = cljs.core.seq.call(null,xs);
var chunk__3192 = null;
var count__3193 = (0);
var i__3194 = (0);
while(true){
if((i__3194 < count__3193)){
var x = cljs.core._nth.call(null,chunk__3192,i__3194);
cljs.compiler.emits.call(null,x);


var G__3202 = seq__3191;
var G__3203 = chunk__3192;
var G__3204 = count__3193;
var G__3205 = (i__3194 + (1));
seq__3191 = G__3202;
chunk__3192 = G__3203;
count__3193 = G__3204;
i__3194 = G__3205;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__3191);
if(temp__5735__auto__){
var seq__3191__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3191__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__3191__$1);
var G__3206 = cljs.core.chunk_rest.call(null,seq__3191__$1);
var G__3207 = c__4461__auto__;
var G__3208 = cljs.core.count.call(null,c__4461__auto__);
var G__3209 = (0);
seq__3191 = G__3206;
chunk__3192 = G__3207;
count__3193 = G__3208;
i__3194 = G__3209;
continue;
} else {
var x = cljs.core.first.call(null,seq__3191__$1);
cljs.compiler.emits.call(null,x);


var G__3210 = cljs.core.next.call(null,seq__3191__$1);
var G__3211 = null;
var G__3212 = (0);
var G__3213 = (0);
seq__3191 = G__3210;
chunk__3192 = G__3211;
count__3193 = G__3212;
i__3194 = G__3213;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq3183){
var G__3184 = cljs.core.first.call(null,seq3183);
var seq3183__$1 = cljs.core.next.call(null,seq3183);
var G__3185 = cljs.core.first.call(null,seq3183__$1);
var seq3183__$2 = cljs.core.next.call(null,seq3183__$1);
var G__3186 = cljs.core.first.call(null,seq3183__$2);
var seq3183__$3 = cljs.core.next.call(null,seq3183__$2);
var G__3187 = cljs.core.first.call(null,seq3183__$3);
var seq3183__$4 = cljs.core.next.call(null,seq3183__$3);
var G__3188 = cljs.core.first.call(null,seq3183__$4);
var seq3183__$5 = cljs.core.next.call(null,seq3183__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3184,G__3185,G__3186,G__3187,G__3188,seq3183__$5);
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (5);

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__3214){
var map__3215 = p__3214;
var map__3215__$1 = (((((!((map__3215 == null))))?(((((map__3215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3215):map__3215);
var m = map__3215__$1;
var gen_line = cljs.core.get.call(null,map__3215__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__3224 = arguments.length;
switch (G__3224) {
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
var len__4641__auto___3230 = arguments.length;
var i__4642__auto___3231 = (0);
while(true){
if((i__4642__auto___3231 < len__4641__auto___3230)){
args_arr__4662__auto__.push((arguments[i__4642__auto___3231]));

var G__3232 = (i__4642__auto___3231 + (1));
i__4642__auto___3231 = G__3232;
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

var seq__3225_3233 = cljs.core.seq.call(null,xs);
var chunk__3226_3234 = null;
var count__3227_3235 = (0);
var i__3228_3236 = (0);
while(true){
if((i__3228_3236 < count__3227_3235)){
var x_3237 = cljs.core._nth.call(null,chunk__3226_3234,i__3228_3236);
cljs.compiler.emits.call(null,x_3237);


var G__3238 = seq__3225_3233;
var G__3239 = chunk__3226_3234;
var G__3240 = count__3227_3235;
var G__3241 = (i__3228_3236 + (1));
seq__3225_3233 = G__3238;
chunk__3226_3234 = G__3239;
count__3227_3235 = G__3240;
i__3228_3236 = G__3241;
continue;
} else {
var temp__5735__auto___3242 = cljs.core.seq.call(null,seq__3225_3233);
if(temp__5735__auto___3242){
var seq__3225_3243__$1 = temp__5735__auto___3242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3225_3243__$1)){
var c__4461__auto___3244 = cljs.core.chunk_first.call(null,seq__3225_3243__$1);
var G__3245 = cljs.core.chunk_rest.call(null,seq__3225_3243__$1);
var G__3246 = c__4461__auto___3244;
var G__3247 = cljs.core.count.call(null,c__4461__auto___3244);
var G__3248 = (0);
seq__3225_3233 = G__3245;
chunk__3226_3234 = G__3246;
count__3227_3235 = G__3247;
i__3228_3236 = G__3248;
continue;
} else {
var x_3249 = cljs.core.first.call(null,seq__3225_3243__$1);
cljs.compiler.emits.call(null,x_3249);


var G__3250 = cljs.core.next.call(null,seq__3225_3243__$1);
var G__3251 = null;
var G__3252 = (0);
var G__3253 = (0);
seq__3225_3233 = G__3250;
chunk__3226_3234 = G__3251;
count__3227_3235 = G__3252;
i__3228_3236 = G__3253;
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
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq3218){
var G__3219 = cljs.core.first.call(null,seq3218);
var seq3218__$1 = cljs.core.next.call(null,seq3218);
var G__3220 = cljs.core.first.call(null,seq3218__$1);
var seq3218__$2 = cljs.core.next.call(null,seq3218__$1);
var G__3221 = cljs.core.first.call(null,seq3218__$2);
var seq3218__$3 = cljs.core.next.call(null,seq3218__$2);
var G__3222 = cljs.core.first.call(null,seq3218__$3);
var seq3218__$4 = cljs.core.next.call(null,seq3218__$3);
var G__3223 = cljs.core.first.call(null,seq3218__$4);
var seq3218__$5 = cljs.core.next.call(null,seq3218__$4);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3219,G__3220,G__3221,G__3222,G__3223,seq3218__$5);
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (5);

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__3254_3258 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__3255_3259 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__3256_3260 = true;
var _STAR_print_fn_STAR__temp_val__3257_3261 = ((function (_STAR_print_newline_STAR__orig_val__3254_3258,_STAR_print_fn_STAR__orig_val__3255_3259,_STAR_print_newline_STAR__temp_val__3256_3260,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__3254_3258,_STAR_print_fn_STAR__orig_val__3255_3259,_STAR_print_newline_STAR__temp_val__3256_3260,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__3256_3260;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__3257_3261;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__3255_3259;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__3254_3258;
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
var vec__3262 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__3262,(0),null);
var name = cljs.core.nth.call(null,vec__3262,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,((function (vec__3262,ns,name){
return (function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
});})(vec__3262,ns,name))
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
var vec__3265 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__3265,(0),null);
var flags = cljs.core.nth.call(null,vec__3265,(1),null);
var pattern = cljs.core.nth.call(null,vec__3265,(2),null);
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
return (function (p1__3268_SHARP_){
return ((function (items){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__3268_SHARP_);
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
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__3270){
var map__3271 = p__3270;
var map__3271__$1 = (((((!((map__3271 == null))))?(((((map__3271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3271):map__3271);
var ast = map__3271__$1;
var info = cljs.core.get.call(null,map__3271__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__3271__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__3271__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__3273 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__3273__$1 = (((((!((map__3273 == null))))?(((((map__3273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3273):map__3273);
var cenv = map__3273__$1;
var options = cljs.core.get.call(null,map__3273__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__3275 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4036__auto__;
}
})())){
return clojure.set.difference.call(null,G__3275,cljs.analyzer.es5_allowed);
} else {
return G__3275;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4047__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__3276 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__3276,reserved);
} else {
return G__3276;
}
})();
var env__3116__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__3277_3278 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__3277_3279__$1 = (((G__3277_3278 instanceof cljs.core.Keyword))?G__3277_3278.fqn:null);
switch (G__3277_3279__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__3281){
var map__3282 = p__3281;
var map__3282__$1 = (((((!((map__3282 == null))))?(((((map__3282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3282):map__3282);
var arg = map__3282__$1;
var env = cljs.core.get.call(null,map__3282__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__3282__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__3282__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__3282__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__3284 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__3284__$1 = (((((!((map__3284 == null))))?(((((map__3284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3284):map__3284);
var name = cljs.core.get.call(null,map__3284__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__3116__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__3286){
var map__3287 = p__3286;
var map__3287__$1 = (((((!((map__3287 == null))))?(((((map__3287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3287):map__3287);
var expr = cljs.core.get.call(null,map__3287__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__3287__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__3287__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3116__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,((function (keys__$1){
return (function (p1__3289_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__3289_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__3290){
var map__3291 = p__3290;
var map__3291__$1 = (((((!((map__3291 == null))))?(((((map__3291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3291):map__3291);
var env = cljs.core.get.call(null,map__3291__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__3291__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__3291__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__3116__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__3293){
var map__3294 = p__3293;
var map__3294__$1 = (((((!((map__3294 == null))))?(((((map__3294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3294):map__3294);
var items = cljs.core.get.call(null,map__3294__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__3294__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3116__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,((function (items__$1){
return (function (p1__3296_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__3296_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__3297){
var map__3298 = p__3297;
var map__3298__$1 = (((((!((map__3298 == null))))?(((((map__3298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3298):map__3298);
var items = cljs.core.get.call(null,map__3298__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__3298__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3116__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5735__auto___3316 = cljs.core.seq.call(null,items);
if(temp__5735__auto___3316){
var items_3317__$1 = temp__5735__auto___3316;
var vec__3300_3318 = items_3317__$1;
var seq__3301_3319 = cljs.core.seq.call(null,vec__3300_3318);
var first__3302_3320 = cljs.core.first.call(null,seq__3301_3319);
var seq__3301_3321__$1 = cljs.core.next.call(null,seq__3301_3319);
var vec__3303_3322 = first__3302_3320;
var k_3323 = cljs.core.nth.call(null,vec__3303_3322,(0),null);
var v_3324 = cljs.core.nth.call(null,vec__3303_3322,(1),null);
var r_3325 = seq__3301_3321__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_3323),"\": ",emit_js_object_val.call(null,v_3324));

var seq__3306_3326 = cljs.core.seq.call(null,r_3325);
var chunk__3307_3327 = null;
var count__3308_3328 = (0);
var i__3309_3329 = (0);
while(true){
if((i__3309_3329 < count__3308_3328)){
var vec__3310_3330 = cljs.core._nth.call(null,chunk__3307_3327,i__3309_3329);
var k_3331__$1 = cljs.core.nth.call(null,vec__3310_3330,(0),null);
var v_3332__$1 = cljs.core.nth.call(null,vec__3310_3330,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_3331__$1),"\": ",emit_js_object_val.call(null,v_3332__$1));


var G__3333 = seq__3306_3326;
var G__3334 = chunk__3307_3327;
var G__3335 = count__3308_3328;
var G__3336 = (i__3309_3329 + (1));
seq__3306_3326 = G__3333;
chunk__3307_3327 = G__3334;
count__3308_3328 = G__3335;
i__3309_3329 = G__3336;
continue;
} else {
var temp__5735__auto___3337__$1 = cljs.core.seq.call(null,seq__3306_3326);
if(temp__5735__auto___3337__$1){
var seq__3306_3338__$1 = temp__5735__auto___3337__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3306_3338__$1)){
var c__4461__auto___3339 = cljs.core.chunk_first.call(null,seq__3306_3338__$1);
var G__3340 = cljs.core.chunk_rest.call(null,seq__3306_3338__$1);
var G__3341 = c__4461__auto___3339;
var G__3342 = cljs.core.count.call(null,c__4461__auto___3339);
var G__3343 = (0);
seq__3306_3326 = G__3340;
chunk__3307_3327 = G__3341;
count__3308_3328 = G__3342;
i__3309_3329 = G__3343;
continue;
} else {
var vec__3313_3344 = cljs.core.first.call(null,seq__3306_3338__$1);
var k_3345__$1 = cljs.core.nth.call(null,vec__3313_3344,(0),null);
var v_3346__$1 = cljs.core.nth.call(null,vec__3313_3344,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_3345__$1),"\": ",emit_js_object_val.call(null,v_3346__$1));


var G__3347 = cljs.core.next.call(null,seq__3306_3338__$1);
var G__3348 = null;
var G__3349 = (0);
var G__3350 = (0);
seq__3306_3326 = G__3347;
chunk__3307_3327 = G__3348;
count__3308_3328 = G__3349;
i__3309_3329 = G__3350;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__3351){
var map__3352 = p__3351;
var map__3352__$1 = (((((!((map__3352 == null))))?(((((map__3352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3352):map__3352);
var keys = cljs.core.get.call(null,map__3352__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__3352__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__3352__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3116__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__3354){
var map__3355 = p__3354;
var map__3355__$1 = (((((!((map__3355 == null))))?(((((map__3355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3355):map__3355);
var items = cljs.core.get.call(null,map__3355__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__3355__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3116__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__3357){
var map__3358 = p__3357;
var map__3358__$1 = (((((!((map__3358 == null))))?(((((map__3358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3358):map__3358);
var expr = cljs.core.get.call(null,map__3358__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__3360){
var map__3361 = p__3360;
var map__3361__$1 = (((((!((map__3361 == null))))?(((((map__3361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3361):map__3361);
var form = cljs.core.get.call(null,map__3361__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__3361__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__3116__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__3363 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__3363__$1 = (((((!((map__3363 == null))))?(((((map__3363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3363):map__3363);
var op = cljs.core.get.call(null,map__3363__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__3363__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__3363__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__3365 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__3365__$1 = (((((!((map__3365 == null))))?(((((map__3365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3365):map__3365);
var op = cljs.core.get.call(null,map__3365__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__3365__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__3365__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__3367){
var map__3368 = p__3367;
var map__3368__$1 = (((((!((map__3368 == null))))?(((((map__3368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3368):map__3368);
var test = cljs.core.get.call(null,map__3368__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__3368__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__3368__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__3368__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__3368__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__3370){
var map__3371 = p__3370;
var map__3371__$1 = (((((!((map__3371 == null))))?(((((map__3371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3371):map__3371);
var v = cljs.core.get.call(null,map__3371__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__3371__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__3371__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__3371__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__3373_3393 = cljs.core.seq.call(null,nodes);
var chunk__3374_3394 = null;
var count__3375_3395 = (0);
var i__3376_3396 = (0);
while(true){
if((i__3376_3396 < count__3375_3395)){
var map__3377_3397 = cljs.core._nth.call(null,chunk__3374_3394,i__3376_3396);
var map__3377_3398__$1 = (((((!((map__3377_3397 == null))))?(((((map__3377_3397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3377_3397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3377_3397):map__3377_3397);
var ts_3399 = cljs.core.get.call(null,map__3377_3398__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__3378_3400 = cljs.core.get.call(null,map__3377_3398__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__3378_3401__$1 = (((((!((map__3378_3400 == null))))?(((((map__3378_3400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3378_3400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3378_3400):map__3378_3400);
var then_3402 = cljs.core.get.call(null,map__3378_3401__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__3381_3403 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_3399));
var chunk__3382_3404 = null;
var count__3383_3405 = (0);
var i__3384_3406 = (0);
while(true){
if((i__3384_3406 < count__3383_3405)){
var test_3407 = cljs.core._nth.call(null,chunk__3382_3404,i__3384_3406);
cljs.compiler.emitln.call(null,"case ",test_3407,":");


var G__3408 = seq__3381_3403;
var G__3409 = chunk__3382_3404;
var G__3410 = count__3383_3405;
var G__3411 = (i__3384_3406 + (1));
seq__3381_3403 = G__3408;
chunk__3382_3404 = G__3409;
count__3383_3405 = G__3410;
i__3384_3406 = G__3411;
continue;
} else {
var temp__5735__auto___3412 = cljs.core.seq.call(null,seq__3381_3403);
if(temp__5735__auto___3412){
var seq__3381_3413__$1 = temp__5735__auto___3412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3381_3413__$1)){
var c__4461__auto___3414 = cljs.core.chunk_first.call(null,seq__3381_3413__$1);
var G__3415 = cljs.core.chunk_rest.call(null,seq__3381_3413__$1);
var G__3416 = c__4461__auto___3414;
var G__3417 = cljs.core.count.call(null,c__4461__auto___3414);
var G__3418 = (0);
seq__3381_3403 = G__3415;
chunk__3382_3404 = G__3416;
count__3383_3405 = G__3417;
i__3384_3406 = G__3418;
continue;
} else {
var test_3419 = cljs.core.first.call(null,seq__3381_3413__$1);
cljs.compiler.emitln.call(null,"case ",test_3419,":");


var G__3420 = cljs.core.next.call(null,seq__3381_3413__$1);
var G__3421 = null;
var G__3422 = (0);
var G__3423 = (0);
seq__3381_3403 = G__3420;
chunk__3382_3404 = G__3421;
count__3383_3405 = G__3422;
i__3384_3406 = G__3423;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_3402);
} else {
cljs.compiler.emitln.call(null,then_3402);
}

cljs.compiler.emitln.call(null,"break;");


var G__3424 = seq__3373_3393;
var G__3425 = chunk__3374_3394;
var G__3426 = count__3375_3395;
var G__3427 = (i__3376_3396 + (1));
seq__3373_3393 = G__3424;
chunk__3374_3394 = G__3425;
count__3375_3395 = G__3426;
i__3376_3396 = G__3427;
continue;
} else {
var temp__5735__auto___3428 = cljs.core.seq.call(null,seq__3373_3393);
if(temp__5735__auto___3428){
var seq__3373_3429__$1 = temp__5735__auto___3428;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3373_3429__$1)){
var c__4461__auto___3430 = cljs.core.chunk_first.call(null,seq__3373_3429__$1);
var G__3431 = cljs.core.chunk_rest.call(null,seq__3373_3429__$1);
var G__3432 = c__4461__auto___3430;
var G__3433 = cljs.core.count.call(null,c__4461__auto___3430);
var G__3434 = (0);
seq__3373_3393 = G__3431;
chunk__3374_3394 = G__3432;
count__3375_3395 = G__3433;
i__3376_3396 = G__3434;
continue;
} else {
var map__3385_3435 = cljs.core.first.call(null,seq__3373_3429__$1);
var map__3385_3436__$1 = (((((!((map__3385_3435 == null))))?(((((map__3385_3435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3385_3435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3385_3435):map__3385_3435);
var ts_3437 = cljs.core.get.call(null,map__3385_3436__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__3386_3438 = cljs.core.get.call(null,map__3385_3436__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__3386_3439__$1 = (((((!((map__3386_3438 == null))))?(((((map__3386_3438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3386_3438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3386_3438):map__3386_3438);
var then_3440 = cljs.core.get.call(null,map__3386_3439__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__3389_3441 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_3437));
var chunk__3390_3442 = null;
var count__3391_3443 = (0);
var i__3392_3444 = (0);
while(true){
if((i__3392_3444 < count__3391_3443)){
var test_3445 = cljs.core._nth.call(null,chunk__3390_3442,i__3392_3444);
cljs.compiler.emitln.call(null,"case ",test_3445,":");


var G__3446 = seq__3389_3441;
var G__3447 = chunk__3390_3442;
var G__3448 = count__3391_3443;
var G__3449 = (i__3392_3444 + (1));
seq__3389_3441 = G__3446;
chunk__3390_3442 = G__3447;
count__3391_3443 = G__3448;
i__3392_3444 = G__3449;
continue;
} else {
var temp__5735__auto___3450__$1 = cljs.core.seq.call(null,seq__3389_3441);
if(temp__5735__auto___3450__$1){
var seq__3389_3451__$1 = temp__5735__auto___3450__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3389_3451__$1)){
var c__4461__auto___3452 = cljs.core.chunk_first.call(null,seq__3389_3451__$1);
var G__3453 = cljs.core.chunk_rest.call(null,seq__3389_3451__$1);
var G__3454 = c__4461__auto___3452;
var G__3455 = cljs.core.count.call(null,c__4461__auto___3452);
var G__3456 = (0);
seq__3389_3441 = G__3453;
chunk__3390_3442 = G__3454;
count__3391_3443 = G__3455;
i__3392_3444 = G__3456;
continue;
} else {
var test_3457 = cljs.core.first.call(null,seq__3389_3451__$1);
cljs.compiler.emitln.call(null,"case ",test_3457,":");


var G__3458 = cljs.core.next.call(null,seq__3389_3451__$1);
var G__3459 = null;
var G__3460 = (0);
var G__3461 = (0);
seq__3389_3441 = G__3458;
chunk__3390_3442 = G__3459;
count__3391_3443 = G__3460;
i__3392_3444 = G__3461;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_3440);
} else {
cljs.compiler.emitln.call(null,then_3440);
}

cljs.compiler.emitln.call(null,"break;");


var G__3462 = cljs.core.next.call(null,seq__3373_3429__$1);
var G__3463 = null;
var G__3464 = (0);
var G__3465 = (0);
seq__3373_3393 = G__3462;
chunk__3374_3394 = G__3463;
count__3375_3395 = G__3464;
i__3376_3396 = G__3465;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__3466){
var map__3467 = p__3466;
var map__3467__$1 = (((((!((map__3467 == null))))?(((((map__3467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3467):map__3467);
var throw$ = cljs.core.get.call(null,map__3467__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__3467__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__3470 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__3470,(0),null);
var rstr = cljs.core.nth.call(null,vec__3470,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__3470,fstr,rstr,ret_t,axstr){
return (function (p1__3469_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__3469_SHARP_);
});})(idx,vec__3470,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__3473 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3473),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__3473;
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
return (function (p1__3474_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__3474_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__3475 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__3476 = cljs.core.seq.call(null,vec__3475);
var first__3477 = cljs.core.first.call(null,seq__3476);
var seq__3476__$1 = cljs.core.next.call(null,seq__3476);
var p = first__3477;
var first__3477__$1 = cljs.core.first.call(null,seq__3476__$1);
var seq__3476__$2 = cljs.core.next.call(null,seq__3476__$1);
var ts = first__3477__$1;
var first__3477__$2 = cljs.core.first.call(null,seq__3476__$2);
var seq__3476__$3 = cljs.core.next.call(null,seq__3476__$2);
var n = first__3477__$2;
var xs = seq__3476__$3;
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
var vec__3478 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__3479 = cljs.core.seq.call(null,vec__3478);
var first__3480 = cljs.core.first.call(null,seq__3479);
var seq__3479__$1 = cljs.core.next.call(null,seq__3479);
var p = first__3480;
var first__3480__$1 = cljs.core.first.call(null,seq__3479__$1);
var seq__3479__$2 = cljs.core.next.call(null,seq__3479__$1);
var ts = first__3480__$1;
var xs = seq__3479__$2;
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
var G__3483 = arguments.length;
switch (G__3483) {
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
var vec__3491 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__3481_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__3481_SHARP_);
} else {
return p1__3481_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__3492 = cljs.core.seq.call(null,vec__3491);
var first__3493 = cljs.core.first.call(null,seq__3492);
var seq__3492__$1 = cljs.core.next.call(null,seq__3492);
var x = first__3493;
var ys = seq__3492__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__3494 = cljs.core.seq.call(null,ys);
var chunk__3495 = null;
var count__3496 = (0);
var i__3497 = (0);
while(true){
if((i__3497 < count__3496)){
var next_line = cljs.core._nth.call(null,chunk__3495,i__3497);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__3503 = seq__3494;
var G__3504 = chunk__3495;
var G__3505 = count__3496;
var G__3506 = (i__3497 + (1));
seq__3494 = G__3503;
chunk__3495 = G__3504;
count__3496 = G__3505;
i__3497 = G__3506;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__3494);
if(temp__5735__auto__){
var seq__3494__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3494__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__3494__$1);
var G__3507 = cljs.core.chunk_rest.call(null,seq__3494__$1);
var G__3508 = c__4461__auto__;
var G__3509 = cljs.core.count.call(null,c__4461__auto__);
var G__3510 = (0);
seq__3494 = G__3507;
chunk__3495 = G__3508;
count__3496 = G__3509;
i__3497 = G__3510;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__3494__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__3511 = cljs.core.next.call(null,seq__3494__$1);
var G__3512 = null;
var G__3513 = (0);
var G__3514 = (0);
seq__3494 = G__3511;
chunk__3495 = G__3512;
count__3496 = G__3513;
i__3497 = G__3514;
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

var seq__3498_3515 = cljs.core.seq.call(null,docs__$2);
var chunk__3499_3516 = null;
var count__3500_3517 = (0);
var i__3501_3518 = (0);
while(true){
if((i__3501_3518 < count__3500_3517)){
var e_3519 = cljs.core._nth.call(null,chunk__3499_3516,i__3501_3518);
if(cljs.core.truth_(e_3519)){
print_comment_lines.call(null,e_3519);
} else {
}


var G__3520 = seq__3498_3515;
var G__3521 = chunk__3499_3516;
var G__3522 = count__3500_3517;
var G__3523 = (i__3501_3518 + (1));
seq__3498_3515 = G__3520;
chunk__3499_3516 = G__3521;
count__3500_3517 = G__3522;
i__3501_3518 = G__3523;
continue;
} else {
var temp__5735__auto___3524 = cljs.core.seq.call(null,seq__3498_3515);
if(temp__5735__auto___3524){
var seq__3498_3525__$1 = temp__5735__auto___3524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3498_3525__$1)){
var c__4461__auto___3526 = cljs.core.chunk_first.call(null,seq__3498_3525__$1);
var G__3527 = cljs.core.chunk_rest.call(null,seq__3498_3525__$1);
var G__3528 = c__4461__auto___3526;
var G__3529 = cljs.core.count.call(null,c__4461__auto___3526);
var G__3530 = (0);
seq__3498_3515 = G__3527;
chunk__3499_3516 = G__3528;
count__3500_3517 = G__3529;
i__3501_3518 = G__3530;
continue;
} else {
var e_3531 = cljs.core.first.call(null,seq__3498_3525__$1);
if(cljs.core.truth_(e_3531)){
print_comment_lines.call(null,e_3531);
} else {
}


var G__3532 = cljs.core.next.call(null,seq__3498_3525__$1);
var G__3533 = null;
var G__3534 = (0);
var G__3535 = (0);
seq__3498_3515 = G__3532;
chunk__3499_3516 = G__3533;
count__3500_3517 = G__3534;
i__3501_3518 = G__3535;
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
return (function (p1__3537_SHARP_){
return goog.string.startsWith(p1__3537_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__3538){
var map__3539 = p__3538;
var map__3539__$1 = (((((!((map__3539 == null))))?(((((map__3539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3539):map__3539);
var doc = cljs.core.get.call(null,map__3539__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__3539__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__3539__$1,new cljs.core.Keyword(null,"test","test",577538877));
var init = cljs.core.get.call(null,map__3539__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__3539__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__3539__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__3539__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__3539__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__3539__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__3541){
var map__3542 = p__3541;
var map__3542__$1 = (((((!((map__3542 == null))))?(((((map__3542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3542):map__3542);
var name = cljs.core.get.call(null,map__3542__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__3542__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__3542__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__3544_3562 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__3545_3563 = null;
var count__3546_3564 = (0);
var i__3547_3565 = (0);
while(true){
if((i__3547_3565 < count__3546_3564)){
var vec__3548_3566 = cljs.core._nth.call(null,chunk__3545_3563,i__3547_3565);
var i_3567 = cljs.core.nth.call(null,vec__3548_3566,(0),null);
var param_3568 = cljs.core.nth.call(null,vec__3548_3566,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_3568);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__3569 = seq__3544_3562;
var G__3570 = chunk__3545_3563;
var G__3571 = count__3546_3564;
var G__3572 = (i__3547_3565 + (1));
seq__3544_3562 = G__3569;
chunk__3545_3563 = G__3570;
count__3546_3564 = G__3571;
i__3547_3565 = G__3572;
continue;
} else {
var temp__5735__auto___3573 = cljs.core.seq.call(null,seq__3544_3562);
if(temp__5735__auto___3573){
var seq__3544_3574__$1 = temp__5735__auto___3573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3544_3574__$1)){
var c__4461__auto___3575 = cljs.core.chunk_first.call(null,seq__3544_3574__$1);
var G__3576 = cljs.core.chunk_rest.call(null,seq__3544_3574__$1);
var G__3577 = c__4461__auto___3575;
var G__3578 = cljs.core.count.call(null,c__4461__auto___3575);
var G__3579 = (0);
seq__3544_3562 = G__3576;
chunk__3545_3563 = G__3577;
count__3546_3564 = G__3578;
i__3547_3565 = G__3579;
continue;
} else {
var vec__3551_3580 = cljs.core.first.call(null,seq__3544_3574__$1);
var i_3581 = cljs.core.nth.call(null,vec__3551_3580,(0),null);
var param_3582 = cljs.core.nth.call(null,vec__3551_3580,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_3582);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__3583 = cljs.core.next.call(null,seq__3544_3574__$1);
var G__3584 = null;
var G__3585 = (0);
var G__3586 = (0);
seq__3544_3562 = G__3583;
chunk__3545_3563 = G__3584;
count__3546_3564 = G__3585;
i__3547_3565 = G__3586;
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

var seq__3554_3587 = cljs.core.seq.call(null,params);
var chunk__3555_3588 = null;
var count__3556_3589 = (0);
var i__3557_3590 = (0);
while(true){
if((i__3557_3590 < count__3556_3589)){
var param_3591 = cljs.core._nth.call(null,chunk__3555_3588,i__3557_3590);
cljs.compiler.emit.call(null,param_3591);

if(cljs.core._EQ_.call(null,param_3591,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3592 = seq__3554_3587;
var G__3593 = chunk__3555_3588;
var G__3594 = count__3556_3589;
var G__3595 = (i__3557_3590 + (1));
seq__3554_3587 = G__3592;
chunk__3555_3588 = G__3593;
count__3556_3589 = G__3594;
i__3557_3590 = G__3595;
continue;
} else {
var temp__5735__auto___3596 = cljs.core.seq.call(null,seq__3554_3587);
if(temp__5735__auto___3596){
var seq__3554_3597__$1 = temp__5735__auto___3596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3554_3597__$1)){
var c__4461__auto___3598 = cljs.core.chunk_first.call(null,seq__3554_3597__$1);
var G__3599 = cljs.core.chunk_rest.call(null,seq__3554_3597__$1);
var G__3600 = c__4461__auto___3598;
var G__3601 = cljs.core.count.call(null,c__4461__auto___3598);
var G__3602 = (0);
seq__3554_3587 = G__3599;
chunk__3555_3588 = G__3600;
count__3556_3589 = G__3601;
i__3557_3590 = G__3602;
continue;
} else {
var param_3603 = cljs.core.first.call(null,seq__3554_3597__$1);
cljs.compiler.emit.call(null,param_3603);

if(cljs.core._EQ_.call(null,param_3603,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3604 = cljs.core.next.call(null,seq__3554_3597__$1);
var G__3605 = null;
var G__3606 = (0);
var G__3607 = (0);
seq__3554_3587 = G__3604;
chunk__3555_3588 = G__3605;
count__3556_3589 = G__3606;
i__3557_3590 = G__3607;
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

var seq__3558_3608 = cljs.core.seq.call(null,params);
var chunk__3559_3609 = null;
var count__3560_3610 = (0);
var i__3561_3611 = (0);
while(true){
if((i__3561_3611 < count__3560_3610)){
var param_3612 = cljs.core._nth.call(null,chunk__3559_3609,i__3561_3611);
cljs.compiler.emit.call(null,param_3612);

if(cljs.core._EQ_.call(null,param_3612,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3613 = seq__3558_3608;
var G__3614 = chunk__3559_3609;
var G__3615 = count__3560_3610;
var G__3616 = (i__3561_3611 + (1));
seq__3558_3608 = G__3613;
chunk__3559_3609 = G__3614;
count__3560_3610 = G__3615;
i__3561_3611 = G__3616;
continue;
} else {
var temp__5735__auto___3617 = cljs.core.seq.call(null,seq__3558_3608);
if(temp__5735__auto___3617){
var seq__3558_3618__$1 = temp__5735__auto___3617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3558_3618__$1)){
var c__4461__auto___3619 = cljs.core.chunk_first.call(null,seq__3558_3618__$1);
var G__3620 = cljs.core.chunk_rest.call(null,seq__3558_3618__$1);
var G__3621 = c__4461__auto___3619;
var G__3622 = cljs.core.count.call(null,c__4461__auto___3619);
var G__3623 = (0);
seq__3558_3608 = G__3620;
chunk__3559_3609 = G__3621;
count__3560_3610 = G__3622;
i__3561_3611 = G__3623;
continue;
} else {
var param_3624 = cljs.core.first.call(null,seq__3558_3618__$1);
cljs.compiler.emit.call(null,param_3624);

if(cljs.core._EQ_.call(null,param_3624,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3625 = cljs.core.next.call(null,seq__3558_3618__$1);
var G__3626 = null;
var G__3627 = (0);
var G__3628 = (0);
seq__3558_3608 = G__3625;
chunk__3559_3609 = G__3626;
count__3560_3610 = G__3627;
i__3561_3611 = G__3628;
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
var seq__3629 = cljs.core.seq.call(null,params);
var chunk__3630 = null;
var count__3631 = (0);
var i__3632 = (0);
while(true){
if((i__3632 < count__3631)){
var param = cljs.core._nth.call(null,chunk__3630,i__3632);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3633 = seq__3629;
var G__3634 = chunk__3630;
var G__3635 = count__3631;
var G__3636 = (i__3632 + (1));
seq__3629 = G__3633;
chunk__3630 = G__3634;
count__3631 = G__3635;
i__3632 = G__3636;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__3629);
if(temp__5735__auto__){
var seq__3629__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3629__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__3629__$1);
var G__3637 = cljs.core.chunk_rest.call(null,seq__3629__$1);
var G__3638 = c__4461__auto__;
var G__3639 = cljs.core.count.call(null,c__4461__auto__);
var G__3640 = (0);
seq__3629 = G__3637;
chunk__3630 = G__3638;
count__3631 = G__3639;
i__3632 = G__3640;
continue;
} else {
var param = cljs.core.first.call(null,seq__3629__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3641 = cljs.core.next.call(null,seq__3629__$1);
var G__3642 = null;
var G__3643 = (0);
var G__3644 = (0);
seq__3629 = G__3641;
chunk__3630 = G__3642;
count__3631 = G__3643;
i__3632 = G__3644;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__3645){
var map__3646 = p__3645;
var map__3646__$1 = (((((!((map__3646 == null))))?(((((map__3646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3646):map__3646);
var expr = cljs.core.get.call(null,map__3646__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__3646__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__3646__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__3646__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__3646__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__3646__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__3116__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__3648){
var map__3649 = p__3648;
var map__3649__$1 = (((((!((map__3649 == null))))?(((((map__3649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3649):map__3649);
var f = map__3649__$1;
var expr = cljs.core.get.call(null,map__3649__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__3649__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__3649__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__3649__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__3649__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__3649__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__3649__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__3649__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__3116__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_3659__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_3660 = cljs.compiler.munge.call(null,name_3659__$1);
var delegate_name_3661 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_3660),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_3661," = function (");

var seq__3651_3662 = cljs.core.seq.call(null,params);
var chunk__3652_3663 = null;
var count__3653_3664 = (0);
var i__3654_3665 = (0);
while(true){
if((i__3654_3665 < count__3653_3664)){
var param_3666 = cljs.core._nth.call(null,chunk__3652_3663,i__3654_3665);
cljs.compiler.emit.call(null,param_3666);

if(cljs.core._EQ_.call(null,param_3666,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3667 = seq__3651_3662;
var G__3668 = chunk__3652_3663;
var G__3669 = count__3653_3664;
var G__3670 = (i__3654_3665 + (1));
seq__3651_3662 = G__3667;
chunk__3652_3663 = G__3668;
count__3653_3664 = G__3669;
i__3654_3665 = G__3670;
continue;
} else {
var temp__5735__auto___3671 = cljs.core.seq.call(null,seq__3651_3662);
if(temp__5735__auto___3671){
var seq__3651_3672__$1 = temp__5735__auto___3671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3651_3672__$1)){
var c__4461__auto___3673 = cljs.core.chunk_first.call(null,seq__3651_3672__$1);
var G__3674 = cljs.core.chunk_rest.call(null,seq__3651_3672__$1);
var G__3675 = c__4461__auto___3673;
var G__3676 = cljs.core.count.call(null,c__4461__auto___3673);
var G__3677 = (0);
seq__3651_3662 = G__3674;
chunk__3652_3663 = G__3675;
count__3653_3664 = G__3676;
i__3654_3665 = G__3677;
continue;
} else {
var param_3678 = cljs.core.first.call(null,seq__3651_3672__$1);
cljs.compiler.emit.call(null,param_3678);

if(cljs.core._EQ_.call(null,param_3678,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3679 = cljs.core.next.call(null,seq__3651_3672__$1);
var G__3680 = null;
var G__3681 = (0);
var G__3682 = (0);
seq__3651_3662 = G__3679;
chunk__3652_3663 = G__3680;
count__3653_3664 = G__3681;
i__3654_3665 = G__3682;
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

cljs.compiler.emitln.call(null,"var ",mname_3660," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_3683 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_3683,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_3661,".call(this,");

var seq__3655_3684 = cljs.core.seq.call(null,params);
var chunk__3656_3685 = null;
var count__3657_3686 = (0);
var i__3658_3687 = (0);
while(true){
if((i__3658_3687 < count__3657_3686)){
var param_3688 = cljs.core._nth.call(null,chunk__3656_3685,i__3658_3687);
cljs.compiler.emit.call(null,param_3688);

if(cljs.core._EQ_.call(null,param_3688,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3689 = seq__3655_3684;
var G__3690 = chunk__3656_3685;
var G__3691 = count__3657_3686;
var G__3692 = (i__3658_3687 + (1));
seq__3655_3684 = G__3689;
chunk__3656_3685 = G__3690;
count__3657_3686 = G__3691;
i__3658_3687 = G__3692;
continue;
} else {
var temp__5735__auto___3693 = cljs.core.seq.call(null,seq__3655_3684);
if(temp__5735__auto___3693){
var seq__3655_3694__$1 = temp__5735__auto___3693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3655_3694__$1)){
var c__4461__auto___3695 = cljs.core.chunk_first.call(null,seq__3655_3694__$1);
var G__3696 = cljs.core.chunk_rest.call(null,seq__3655_3694__$1);
var G__3697 = c__4461__auto___3695;
var G__3698 = cljs.core.count.call(null,c__4461__auto___3695);
var G__3699 = (0);
seq__3655_3684 = G__3696;
chunk__3656_3685 = G__3697;
count__3657_3686 = G__3698;
i__3658_3687 = G__3699;
continue;
} else {
var param_3700 = cljs.core.first.call(null,seq__3655_3694__$1);
cljs.compiler.emit.call(null,param_3700);

if(cljs.core._EQ_.call(null,param_3700,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__3701 = cljs.core.next.call(null,seq__3655_3694__$1);
var G__3702 = null;
var G__3703 = (0);
var G__3704 = (0);
seq__3655_3684 = G__3701;
chunk__3656_3685 = G__3702;
count__3657_3686 = G__3703;
i__3658_3687 = G__3704;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_3660,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_3660,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_3659__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_3660,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_3661,";");

cljs.compiler.emitln.call(null,"return ",mname_3660,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__3708){
var map__3709 = p__3708;
var map__3709__$1 = (((((!((map__3709 == null))))?(((((map__3709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3709):map__3709);
var variadic = cljs.core.get.call(null,map__3709__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__3709__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__3709__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__3709__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__3709__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__3709__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__3709__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__3709,map__3709__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__3705_SHARP_){
var and__4036__auto__ = p1__3705_SHARP_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__3705_SHARP_));
} else {
return and__4036__auto__;
}
});})(map__3709,map__3709__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
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
var name_3744__$1 = (function (){var or__4047__auto__ = name;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_3745 = cljs.compiler.munge.call(null,name_3744__$1);
var maxparams_3746 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_3747 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_3744__$1,mname_3745,maxparams_3746,loop_locals,map__3709,map__3709__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_3745),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_3744__$1,mname_3745,maxparams_3746,loop_locals,map__3709,map__3709__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,methods$));
var ms_3748 = cljs.core.sort_by.call(null,((function (name_3744__$1,mname_3745,maxparams_3746,mmap_3747,loop_locals,map__3709,map__3709__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__3706_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__3706_SHARP_)));
});})(name_3744__$1,mname_3745,maxparams_3746,mmap_3747,loop_locals,map__3709,map__3709__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_3747));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_3745," = null;");

var seq__3711_3749 = cljs.core.seq.call(null,ms_3748);
var chunk__3712_3750 = null;
var count__3713_3751 = (0);
var i__3714_3752 = (0);
while(true){
if((i__3714_3752 < count__3713_3751)){
var vec__3715_3753 = cljs.core._nth.call(null,chunk__3712_3750,i__3714_3752);
var n_3754 = cljs.core.nth.call(null,vec__3715_3753,(0),null);
var meth_3755 = cljs.core.nth.call(null,vec__3715_3753,(1),null);
cljs.compiler.emits.call(null,"var ",n_3754," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_3755))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_3755);
} else {
cljs.compiler.emit_fn_method.call(null,meth_3755);
}

cljs.compiler.emitln.call(null,";");


var G__3756 = seq__3711_3749;
var G__3757 = chunk__3712_3750;
var G__3758 = count__3713_3751;
var G__3759 = (i__3714_3752 + (1));
seq__3711_3749 = G__3756;
chunk__3712_3750 = G__3757;
count__3713_3751 = G__3758;
i__3714_3752 = G__3759;
continue;
} else {
var temp__5735__auto___3760 = cljs.core.seq.call(null,seq__3711_3749);
if(temp__5735__auto___3760){
var seq__3711_3761__$1 = temp__5735__auto___3760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3711_3761__$1)){
var c__4461__auto___3762 = cljs.core.chunk_first.call(null,seq__3711_3761__$1);
var G__3763 = cljs.core.chunk_rest.call(null,seq__3711_3761__$1);
var G__3764 = c__4461__auto___3762;
var G__3765 = cljs.core.count.call(null,c__4461__auto___3762);
var G__3766 = (0);
seq__3711_3749 = G__3763;
chunk__3712_3750 = G__3764;
count__3713_3751 = G__3765;
i__3714_3752 = G__3766;
continue;
} else {
var vec__3718_3767 = cljs.core.first.call(null,seq__3711_3761__$1);
var n_3768 = cljs.core.nth.call(null,vec__3718_3767,(0),null);
var meth_3769 = cljs.core.nth.call(null,vec__3718_3767,(1),null);
cljs.compiler.emits.call(null,"var ",n_3768," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_3769))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_3769);
} else {
cljs.compiler.emit_fn_method.call(null,meth_3769);
}

cljs.compiler.emitln.call(null,";");


var G__3770 = cljs.core.next.call(null,seq__3711_3761__$1);
var G__3771 = null;
var G__3772 = (0);
var G__3773 = (0);
seq__3711_3749 = G__3770;
chunk__3712_3750 = G__3771;
count__3713_3751 = G__3772;
i__3714_3752 = G__3773;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_3745," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_3746),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_3746)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_3746));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__3721_3774 = cljs.core.seq.call(null,ms_3748);
var chunk__3722_3775 = null;
var count__3723_3776 = (0);
var i__3724_3777 = (0);
while(true){
if((i__3724_3777 < count__3723_3776)){
var vec__3725_3778 = cljs.core._nth.call(null,chunk__3722_3775,i__3724_3777);
var n_3779 = cljs.core.nth.call(null,vec__3725_3778,(0),null);
var meth_3780 = cljs.core.nth.call(null,vec__3725_3778,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_3780))){
cljs.compiler.emitln.call(null,"default:");

var restarg_3781 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_3781," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_3782 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_3781," = new cljs.core.IndexedSeq(",a_3782,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_3779,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_3746)),(((cljs.core.count.call(null,maxparams_3746) > (1)))?", ":null),restarg_3781,");");
} else {
var pcnt_3783 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_3780));
cljs.compiler.emitln.call(null,"case ",pcnt_3783,":");

cljs.compiler.emitln.call(null,"return ",n_3779,".call(this",(((pcnt_3783 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_3783,maxparams_3746)),null,(1),null)),(2),null))),");");
}


var G__3784 = seq__3721_3774;
var G__3785 = chunk__3722_3775;
var G__3786 = count__3723_3776;
var G__3787 = (i__3724_3777 + (1));
seq__3721_3774 = G__3784;
chunk__3722_3775 = G__3785;
count__3723_3776 = G__3786;
i__3724_3777 = G__3787;
continue;
} else {
var temp__5735__auto___3788 = cljs.core.seq.call(null,seq__3721_3774);
if(temp__5735__auto___3788){
var seq__3721_3789__$1 = temp__5735__auto___3788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3721_3789__$1)){
var c__4461__auto___3790 = cljs.core.chunk_first.call(null,seq__3721_3789__$1);
var G__3791 = cljs.core.chunk_rest.call(null,seq__3721_3789__$1);
var G__3792 = c__4461__auto___3790;
var G__3793 = cljs.core.count.call(null,c__4461__auto___3790);
var G__3794 = (0);
seq__3721_3774 = G__3791;
chunk__3722_3775 = G__3792;
count__3723_3776 = G__3793;
i__3724_3777 = G__3794;
continue;
} else {
var vec__3728_3795 = cljs.core.first.call(null,seq__3721_3789__$1);
var n_3796 = cljs.core.nth.call(null,vec__3728_3795,(0),null);
var meth_3797 = cljs.core.nth.call(null,vec__3728_3795,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_3797))){
cljs.compiler.emitln.call(null,"default:");

var restarg_3798 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_3798," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_3799 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_3798," = new cljs.core.IndexedSeq(",a_3799,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_3796,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_3746)),(((cljs.core.count.call(null,maxparams_3746) > (1)))?", ":null),restarg_3798,");");
} else {
var pcnt_3800 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_3797));
cljs.compiler.emitln.call(null,"case ",pcnt_3800,":");

cljs.compiler.emitln.call(null,"return ",n_3796,".call(this",(((pcnt_3800 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_3800,maxparams_3746)),null,(1),null)),(2),null))),");");
}


var G__3801 = cljs.core.next.call(null,seq__3721_3789__$1);
var G__3802 = null;
var G__3803 = (0);
var G__3804 = (0);
seq__3721_3774 = G__3801;
chunk__3722_3775 = G__3802;
count__3723_3776 = G__3803;
i__3724_3777 = G__3804;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_3805 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_3748)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_3805,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_3745,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_3745,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_3744__$1,mname_3745,maxparams_3746,mmap_3747,ms_3748,loop_locals,map__3709,map__3709__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets){
return (function (p1__3707_SHARP_){
var vec__3731 = p1__3707_SHARP_;
var n = cljs.core.nth.call(null,vec__3731,(0),null);
var m = cljs.core.nth.call(null,vec__3731,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_3744__$1,mname_3745,maxparams_3746,mmap_3747,ms_3748,loop_locals,map__3709,map__3709__$1,variadic,name,env,methods$,max_fixed_arity,recur_frames,loop_lets))
,ms_3748),".cljs$lang$applyTo;");
} else {
}

var seq__3734_3806 = cljs.core.seq.call(null,ms_3748);
var chunk__3735_3807 = null;
var count__3736_3808 = (0);
var i__3737_3809 = (0);
while(true){
if((i__3737_3809 < count__3736_3808)){
var vec__3738_3810 = cljs.core._nth.call(null,chunk__3735_3807,i__3737_3809);
var n_3811 = cljs.core.nth.call(null,vec__3738_3810,(0),null);
var meth_3812 = cljs.core.nth.call(null,vec__3738_3810,(1),null);
var c_3813 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_3812));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_3812))){
cljs.compiler.emitln.call(null,mname_3745,".cljs$core$IFn$_invoke$arity$variadic = ",n_3811,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_3745,".cljs$core$IFn$_invoke$arity$",c_3813," = ",n_3811,";");
}


var G__3814 = seq__3734_3806;
var G__3815 = chunk__3735_3807;
var G__3816 = count__3736_3808;
var G__3817 = (i__3737_3809 + (1));
seq__3734_3806 = G__3814;
chunk__3735_3807 = G__3815;
count__3736_3808 = G__3816;
i__3737_3809 = G__3817;
continue;
} else {
var temp__5735__auto___3818 = cljs.core.seq.call(null,seq__3734_3806);
if(temp__5735__auto___3818){
var seq__3734_3819__$1 = temp__5735__auto___3818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3734_3819__$1)){
var c__4461__auto___3820 = cljs.core.chunk_first.call(null,seq__3734_3819__$1);
var G__3821 = cljs.core.chunk_rest.call(null,seq__3734_3819__$1);
var G__3822 = c__4461__auto___3820;
var G__3823 = cljs.core.count.call(null,c__4461__auto___3820);
var G__3824 = (0);
seq__3734_3806 = G__3821;
chunk__3735_3807 = G__3822;
count__3736_3808 = G__3823;
i__3737_3809 = G__3824;
continue;
} else {
var vec__3741_3825 = cljs.core.first.call(null,seq__3734_3819__$1);
var n_3826 = cljs.core.nth.call(null,vec__3741_3825,(0),null);
var meth_3827 = cljs.core.nth.call(null,vec__3741_3825,(1),null);
var c_3828 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_3827));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_3827))){
cljs.compiler.emitln.call(null,mname_3745,".cljs$core$IFn$_invoke$arity$variadic = ",n_3826,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_3745,".cljs$core$IFn$_invoke$arity$",c_3828," = ",n_3826,";");
}


var G__3829 = cljs.core.next.call(null,seq__3734_3819__$1);
var G__3830 = null;
var G__3831 = (0);
var G__3832 = (0);
seq__3734_3806 = G__3829;
chunk__3735_3807 = G__3830;
count__3736_3808 = G__3831;
i__3737_3809 = G__3832;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_3745,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__3833){
var map__3834 = p__3833;
var map__3834__$1 = (((((!((map__3834 == null))))?(((((map__3834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3834):map__3834);
var statements = cljs.core.get.call(null,map__3834__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__3834__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__3834__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__3836_3840 = cljs.core.seq.call(null,statements);
var chunk__3837_3841 = null;
var count__3838_3842 = (0);
var i__3839_3843 = (0);
while(true){
if((i__3839_3843 < count__3838_3842)){
var s_3844 = cljs.core._nth.call(null,chunk__3837_3841,i__3839_3843);
cljs.compiler.emitln.call(null,s_3844);


var G__3845 = seq__3836_3840;
var G__3846 = chunk__3837_3841;
var G__3847 = count__3838_3842;
var G__3848 = (i__3839_3843 + (1));
seq__3836_3840 = G__3845;
chunk__3837_3841 = G__3846;
count__3838_3842 = G__3847;
i__3839_3843 = G__3848;
continue;
} else {
var temp__5735__auto___3849 = cljs.core.seq.call(null,seq__3836_3840);
if(temp__5735__auto___3849){
var seq__3836_3850__$1 = temp__5735__auto___3849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3836_3850__$1)){
var c__4461__auto___3851 = cljs.core.chunk_first.call(null,seq__3836_3850__$1);
var G__3852 = cljs.core.chunk_rest.call(null,seq__3836_3850__$1);
var G__3853 = c__4461__auto___3851;
var G__3854 = cljs.core.count.call(null,c__4461__auto___3851);
var G__3855 = (0);
seq__3836_3840 = G__3852;
chunk__3837_3841 = G__3853;
count__3838_3842 = G__3854;
i__3839_3843 = G__3855;
continue;
} else {
var s_3856 = cljs.core.first.call(null,seq__3836_3850__$1);
cljs.compiler.emitln.call(null,s_3856);


var G__3857 = cljs.core.next.call(null,seq__3836_3850__$1);
var G__3858 = null;
var G__3859 = (0);
var G__3860 = (0);
seq__3836_3840 = G__3857;
chunk__3837_3841 = G__3858;
count__3838_3842 = G__3859;
i__3839_3843 = G__3860;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__3861){
var map__3862 = p__3861;
var map__3862__$1 = (((((!((map__3862 == null))))?(((((map__3862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3862):map__3862);
var try$ = cljs.core.get.call(null,map__3862__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__3862__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__3862__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__3862__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__3862__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__3864,is_loop){
var map__3865 = p__3864;
var map__3865__$1 = (((((!((map__3865 == null))))?(((((map__3865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3865):map__3865);
var expr = cljs.core.get.call(null,map__3865__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__3865__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__3865__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__3867_3877 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__3868_3878 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR__orig_val__3867_3877,context,map__3865,map__3865__$1,expr,bindings,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR__orig_val__3867_3877,context,map__3865,map__3865__$1,expr,bindings,env))
,bindings):null));
cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__3868_3878;

try{var seq__3869_3879 = cljs.core.seq.call(null,bindings);
var chunk__3870_3880 = null;
var count__3871_3881 = (0);
var i__3872_3882 = (0);
while(true){
if((i__3872_3882 < count__3871_3881)){
var map__3873_3883 = cljs.core._nth.call(null,chunk__3870_3880,i__3872_3882);
var map__3873_3884__$1 = (((((!((map__3873_3883 == null))))?(((((map__3873_3883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3873_3883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3873_3883):map__3873_3883);
var binding_3885 = map__3873_3884__$1;
var init_3886 = cljs.core.get.call(null,map__3873_3884__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_3885);

cljs.compiler.emitln.call(null," = ",init_3886,";");


var G__3887 = seq__3869_3879;
var G__3888 = chunk__3870_3880;
var G__3889 = count__3871_3881;
var G__3890 = (i__3872_3882 + (1));
seq__3869_3879 = G__3887;
chunk__3870_3880 = G__3888;
count__3871_3881 = G__3889;
i__3872_3882 = G__3890;
continue;
} else {
var temp__5735__auto___3891 = cljs.core.seq.call(null,seq__3869_3879);
if(temp__5735__auto___3891){
var seq__3869_3892__$1 = temp__5735__auto___3891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3869_3892__$1)){
var c__4461__auto___3893 = cljs.core.chunk_first.call(null,seq__3869_3892__$1);
var G__3894 = cljs.core.chunk_rest.call(null,seq__3869_3892__$1);
var G__3895 = c__4461__auto___3893;
var G__3896 = cljs.core.count.call(null,c__4461__auto___3893);
var G__3897 = (0);
seq__3869_3879 = G__3894;
chunk__3870_3880 = G__3895;
count__3871_3881 = G__3896;
i__3872_3882 = G__3897;
continue;
} else {
var map__3875_3898 = cljs.core.first.call(null,seq__3869_3892__$1);
var map__3875_3899__$1 = (((((!((map__3875_3898 == null))))?(((((map__3875_3898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3875_3898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3875_3898):map__3875_3898);
var binding_3900 = map__3875_3899__$1;
var init_3901 = cljs.core.get.call(null,map__3875_3899__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_3900);

cljs.compiler.emitln.call(null," = ",init_3901,";");


var G__3902 = cljs.core.next.call(null,seq__3869_3892__$1);
var G__3903 = null;
var G__3904 = (0);
var G__3905 = (0);
seq__3869_3879 = G__3902;
chunk__3870_3880 = G__3903;
count__3871_3881 = G__3904;
i__3872_3882 = G__3905;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__3867_3877;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__3906){
var map__3907 = p__3906;
var map__3907__$1 = (((((!((map__3907 == null))))?(((((map__3907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3907):map__3907);
var frame = cljs.core.get.call(null,map__3907__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__3907__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__3907__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4518__auto___3909 = cljs.core.count.call(null,exprs);
var i_3910 = (0);
while(true){
if((i_3910 < n__4518__auto___3909)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_3910)," = ",exprs.call(null,i_3910),";");

var G__3911 = (i_3910 + (1));
i_3910 = G__3911;
continue;
} else {
}
break;
}

var n__4518__auto___3912 = cljs.core.count.call(null,exprs);
var i_3913 = (0);
while(true){
if((i_3913 < n__4518__auto___3912)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_3913))," = ",temps.call(null,i_3913),";");

var G__3914 = (i_3913 + (1));
i_3913 = G__3914;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__3915){
var map__3916 = p__3915;
var map__3916__$1 = (((((!((map__3916 == null))))?(((((map__3916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3916):map__3916);
var expr = cljs.core.get.call(null,map__3916__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__3916__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__3916__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__3918_3926 = cljs.core.seq.call(null,bindings);
var chunk__3919_3927 = null;
var count__3920_3928 = (0);
var i__3921_3929 = (0);
while(true){
if((i__3921_3929 < count__3920_3928)){
var map__3922_3930 = cljs.core._nth.call(null,chunk__3919_3927,i__3921_3929);
var map__3922_3931__$1 = (((((!((map__3922_3930 == null))))?(((((map__3922_3930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3922_3930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3922_3930):map__3922_3930);
var binding_3932 = map__3922_3931__$1;
var init_3933 = cljs.core.get.call(null,map__3922_3931__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_3932)," = ",init_3933,";");


var G__3934 = seq__3918_3926;
var G__3935 = chunk__3919_3927;
var G__3936 = count__3920_3928;
var G__3937 = (i__3921_3929 + (1));
seq__3918_3926 = G__3934;
chunk__3919_3927 = G__3935;
count__3920_3928 = G__3936;
i__3921_3929 = G__3937;
continue;
} else {
var temp__5735__auto___3938 = cljs.core.seq.call(null,seq__3918_3926);
if(temp__5735__auto___3938){
var seq__3918_3939__$1 = temp__5735__auto___3938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3918_3939__$1)){
var c__4461__auto___3940 = cljs.core.chunk_first.call(null,seq__3918_3939__$1);
var G__3941 = cljs.core.chunk_rest.call(null,seq__3918_3939__$1);
var G__3942 = c__4461__auto___3940;
var G__3943 = cljs.core.count.call(null,c__4461__auto___3940);
var G__3944 = (0);
seq__3918_3926 = G__3941;
chunk__3919_3927 = G__3942;
count__3920_3928 = G__3943;
i__3921_3929 = G__3944;
continue;
} else {
var map__3924_3945 = cljs.core.first.call(null,seq__3918_3939__$1);
var map__3924_3946__$1 = (((((!((map__3924_3945 == null))))?(((((map__3924_3945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3924_3945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3924_3945):map__3924_3945);
var binding_3947 = map__3924_3946__$1;
var init_3948 = cljs.core.get.call(null,map__3924_3946__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_3947)," = ",init_3948,";");


var G__3949 = cljs.core.next.call(null,seq__3918_3939__$1);
var G__3950 = null;
var G__3951 = (0);
var G__3952 = (0);
seq__3918_3926 = G__3949;
chunk__3919_3927 = G__3950;
count__3920_3928 = G__3951;
i__3921_3929 = G__3952;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__3955){
var map__3956 = p__3955;
var map__3956__$1 = (((((!((map__3956 == null))))?(((((map__3956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3956):map__3956);
var expr = map__3956__$1;
var f = cljs.core.get.call(null,map__3956__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__3956__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__3956__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__3958 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__3956,map__3956__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__3956,map__3956__$1,expr,f,args,env){
return (function (p1__3953_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__3953_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__3956,map__3956__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__3956,map__3956__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__3956,map__3956__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__3956,map__3956__$1,expr,f,args,env){
return (function (p1__3954_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__3954_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__3956,map__3956__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__3956,map__3956__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__3958,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__3958,(1),null);
var env__3116__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_3961 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_3961,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_3962 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_3962,args)),(((mfa_3962 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_3962,args)),"], 0))");
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
var fprop_3963 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_3963," ? ",f__$1,fprop_3963,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_3963," ? ",f__$1,fprop_3963,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__3964){
var map__3965 = p__3964;
var map__3965__$1 = (((((!((map__3965 == null))))?(((((map__3965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3965):map__3965);
var ctor = cljs.core.get.call(null,map__3965__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__3965__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__3965__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3116__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__3967){
var map__3968 = p__3967;
var map__3968__$1 = (((((!((map__3968 == null))))?(((((map__3968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3968):map__3968);
var target = cljs.core.get.call(null,map__3968__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__3968__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__3968__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3116__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
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
var map__3970 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__3970__$1 = (((((!((map__3970 == null))))?(((((map__3970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3970):map__3970);
var options = cljs.core.get.call(null,map__3970__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__3970__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__3971 = options;
var map__3971__$1 = (((((!((map__3971 == null))))?(((((map__3971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3971):map__3971);
var target = cljs.core.get.call(null,map__3971__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__3971__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__3972 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__3977 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__3977__$1 = (((((!((map__3977 == null))))?(((((map__3977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3977):map__3977);
var node_libs = cljs.core.get.call(null,map__3977__$1,true);
var libs_to_load = cljs.core.get.call(null,map__3977__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__3972,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__3972,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__3979_3995 = cljs.core.seq.call(null,libs_to_load);
var chunk__3980_3996 = null;
var count__3981_3997 = (0);
var i__3982_3998 = (0);
while(true){
if((i__3982_3998 < count__3981_3997)){
var lib_3999 = cljs.core._nth.call(null,chunk__3980_3996,i__3982_3998);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_3999)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_3999),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_3999),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_3999),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_3999),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_3999,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_3999),"');");
}

}
}
}


var G__4000 = seq__3979_3995;
var G__4001 = chunk__3980_3996;
var G__4002 = count__3981_3997;
var G__4003 = (i__3982_3998 + (1));
seq__3979_3995 = G__4000;
chunk__3980_3996 = G__4001;
count__3981_3997 = G__4002;
i__3982_3998 = G__4003;
continue;
} else {
var temp__5735__auto___4004 = cljs.core.seq.call(null,seq__3979_3995);
if(temp__5735__auto___4004){
var seq__3979_4005__$1 = temp__5735__auto___4004;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3979_4005__$1)){
var c__4461__auto___4006 = cljs.core.chunk_first.call(null,seq__3979_4005__$1);
var G__4007 = cljs.core.chunk_rest.call(null,seq__3979_4005__$1);
var G__4008 = c__4461__auto___4006;
var G__4009 = cljs.core.count.call(null,c__4461__auto___4006);
var G__4010 = (0);
seq__3979_3995 = G__4007;
chunk__3980_3996 = G__4008;
count__3981_3997 = G__4009;
i__3982_3998 = G__4010;
continue;
} else {
var lib_4011 = cljs.core.first.call(null,seq__3979_4005__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_4011)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_4011),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4011),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_4011),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4011),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_4011,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_4011),"');");
}

}
}
}


var G__4012 = cljs.core.next.call(null,seq__3979_4005__$1);
var G__4013 = null;
var G__4014 = (0);
var G__4015 = (0);
seq__3979_3995 = G__4012;
chunk__3980_3996 = G__4013;
count__3981_3997 = G__4014;
i__3982_3998 = G__4015;
continue;
}
} else {
}
}
break;
}

var seq__3983_4016 = cljs.core.seq.call(null,node_libs);
var chunk__3984_4017 = null;
var count__3985_4018 = (0);
var i__3986_4019 = (0);
while(true){
if((i__3986_4019 < count__3985_4018)){
var lib_4020 = cljs.core._nth.call(null,chunk__3984_4017,i__3986_4019);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_4020)," = require('",lib_4020,"');");


var G__4021 = seq__3983_4016;
var G__4022 = chunk__3984_4017;
var G__4023 = count__3985_4018;
var G__4024 = (i__3986_4019 + (1));
seq__3983_4016 = G__4021;
chunk__3984_4017 = G__4022;
count__3985_4018 = G__4023;
i__3986_4019 = G__4024;
continue;
} else {
var temp__5735__auto___4025 = cljs.core.seq.call(null,seq__3983_4016);
if(temp__5735__auto___4025){
var seq__3983_4026__$1 = temp__5735__auto___4025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3983_4026__$1)){
var c__4461__auto___4027 = cljs.core.chunk_first.call(null,seq__3983_4026__$1);
var G__4028 = cljs.core.chunk_rest.call(null,seq__3983_4026__$1);
var G__4029 = c__4461__auto___4027;
var G__4030 = cljs.core.count.call(null,c__4461__auto___4027);
var G__4031 = (0);
seq__3983_4016 = G__4028;
chunk__3984_4017 = G__4029;
count__3985_4018 = G__4030;
i__3986_4019 = G__4031;
continue;
} else {
var lib_4032 = cljs.core.first.call(null,seq__3983_4026__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_4032)," = require('",lib_4032,"');");


var G__4033 = cljs.core.next.call(null,seq__3983_4026__$1);
var G__4034 = null;
var G__4035 = (0);
var G__4036 = (0);
seq__3983_4016 = G__4033;
chunk__3984_4017 = G__4034;
count__3985_4018 = G__4035;
i__3986_4019 = G__4036;
continue;
}
} else {
}
}
break;
}

var seq__3987_4037 = cljs.core.seq.call(null,global_exports_libs);
var chunk__3988_4038 = null;
var count__3989_4039 = (0);
var i__3990_4040 = (0);
while(true){
if((i__3990_4040 < count__3989_4039)){
var lib_4041 = cljs.core._nth.call(null,chunk__3988_4038,i__3990_4040);
var map__3991_4042 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_4041));
var map__3991_4043__$1 = (((((!((map__3991_4042 == null))))?(((((map__3991_4042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3991_4042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3991_4042):map__3991_4042);
var global_exports_4044 = cljs.core.get.call(null,map__3991_4043__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_4044,lib_4041);


var G__4045 = seq__3987_4037;
var G__4046 = chunk__3988_4038;
var G__4047 = count__3989_4039;
var G__4048 = (i__3990_4040 + (1));
seq__3987_4037 = G__4045;
chunk__3988_4038 = G__4046;
count__3989_4039 = G__4047;
i__3990_4040 = G__4048;
continue;
} else {
var temp__5735__auto___4049 = cljs.core.seq.call(null,seq__3987_4037);
if(temp__5735__auto___4049){
var seq__3987_4050__$1 = temp__5735__auto___4049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3987_4050__$1)){
var c__4461__auto___4051 = cljs.core.chunk_first.call(null,seq__3987_4050__$1);
var G__4052 = cljs.core.chunk_rest.call(null,seq__3987_4050__$1);
var G__4053 = c__4461__auto___4051;
var G__4054 = cljs.core.count.call(null,c__4461__auto___4051);
var G__4055 = (0);
seq__3987_4037 = G__4052;
chunk__3988_4038 = G__4053;
count__3989_4039 = G__4054;
i__3990_4040 = G__4055;
continue;
} else {
var lib_4056 = cljs.core.first.call(null,seq__3987_4050__$1);
var map__3993_4057 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_4056));
var map__3993_4058__$1 = (((((!((map__3993_4057 == null))))?(((((map__3993_4057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3993_4057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3993_4057):map__3993_4057);
var global_exports_4059 = cljs.core.get.call(null,map__3993_4058__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_4059,lib_4056);


var G__4060 = cljs.core.next.call(null,seq__3987_4050__$1);
var G__4061 = null;
var G__4062 = (0);
var G__4063 = (0);
seq__3987_4037 = G__4060;
chunk__3988_4038 = G__4061;
count__3989_4039 = G__4062;
i__3990_4040 = G__4063;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__4064){
var map__4065 = p__4064;
var map__4065__$1 = (((((!((map__4065 == null))))?(((((map__4065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4065):map__4065);
var name = cljs.core.get.call(null,map__4065__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__4065__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__4065__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__4065__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__4065__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__4065__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__4065__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__4067){
var map__4068 = p__4067;
var map__4068__$1 = (((((!((map__4068 == null))))?(((((map__4068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4068):map__4068);
var name = cljs.core.get.call(null,map__4068__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__4068__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__4068__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__4068__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__4068__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__4068__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__4068__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__4070){
var map__4071 = p__4070;
var map__4071__$1 = (((((!((map__4071 == null))))?(((((map__4071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4071):map__4071);
var t = cljs.core.get.call(null,map__4071__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__4071__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__4071__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__4071__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__4071__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__4073_4091 = cljs.core.seq.call(null,protocols);
var chunk__4074_4092 = null;
var count__4075_4093 = (0);
var i__4076_4094 = (0);
while(true){
if((i__4076_4094 < count__4075_4093)){
var protocol_4095 = cljs.core._nth.call(null,chunk__4074_4092,i__4076_4094);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_4095)),"}");


var G__4096 = seq__4073_4091;
var G__4097 = chunk__4074_4092;
var G__4098 = count__4075_4093;
var G__4099 = (i__4076_4094 + (1));
seq__4073_4091 = G__4096;
chunk__4074_4092 = G__4097;
count__4075_4093 = G__4098;
i__4076_4094 = G__4099;
continue;
} else {
var temp__5735__auto___4100 = cljs.core.seq.call(null,seq__4073_4091);
if(temp__5735__auto___4100){
var seq__4073_4101__$1 = temp__5735__auto___4100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4073_4101__$1)){
var c__4461__auto___4102 = cljs.core.chunk_first.call(null,seq__4073_4101__$1);
var G__4103 = cljs.core.chunk_rest.call(null,seq__4073_4101__$1);
var G__4104 = c__4461__auto___4102;
var G__4105 = cljs.core.count.call(null,c__4461__auto___4102);
var G__4106 = (0);
seq__4073_4091 = G__4103;
chunk__4074_4092 = G__4104;
count__4075_4093 = G__4105;
i__4076_4094 = G__4106;
continue;
} else {
var protocol_4107 = cljs.core.first.call(null,seq__4073_4101__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_4107)),"}");


var G__4108 = cljs.core.next.call(null,seq__4073_4101__$1);
var G__4109 = null;
var G__4110 = (0);
var G__4111 = (0);
seq__4073_4091 = G__4108;
chunk__4074_4092 = G__4109;
count__4075_4093 = G__4110;
i__4076_4094 = G__4111;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__4077_4112 = cljs.core.seq.call(null,fields__$1);
var chunk__4078_4113 = null;
var count__4079_4114 = (0);
var i__4080_4115 = (0);
while(true){
if((i__4080_4115 < count__4079_4114)){
var fld_4116 = cljs.core._nth.call(null,chunk__4078_4113,i__4080_4115);
cljs.compiler.emitln.call(null,"this.",fld_4116," = ",fld_4116,";");


var G__4117 = seq__4077_4112;
var G__4118 = chunk__4078_4113;
var G__4119 = count__4079_4114;
var G__4120 = (i__4080_4115 + (1));
seq__4077_4112 = G__4117;
chunk__4078_4113 = G__4118;
count__4079_4114 = G__4119;
i__4080_4115 = G__4120;
continue;
} else {
var temp__5735__auto___4121 = cljs.core.seq.call(null,seq__4077_4112);
if(temp__5735__auto___4121){
var seq__4077_4122__$1 = temp__5735__auto___4121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4077_4122__$1)){
var c__4461__auto___4123 = cljs.core.chunk_first.call(null,seq__4077_4122__$1);
var G__4124 = cljs.core.chunk_rest.call(null,seq__4077_4122__$1);
var G__4125 = c__4461__auto___4123;
var G__4126 = cljs.core.count.call(null,c__4461__auto___4123);
var G__4127 = (0);
seq__4077_4112 = G__4124;
chunk__4078_4113 = G__4125;
count__4079_4114 = G__4126;
i__4080_4115 = G__4127;
continue;
} else {
var fld_4128 = cljs.core.first.call(null,seq__4077_4122__$1);
cljs.compiler.emitln.call(null,"this.",fld_4128," = ",fld_4128,";");


var G__4129 = cljs.core.next.call(null,seq__4077_4122__$1);
var G__4130 = null;
var G__4131 = (0);
var G__4132 = (0);
seq__4077_4112 = G__4129;
chunk__4078_4113 = G__4130;
count__4079_4114 = G__4131;
i__4080_4115 = G__4132;
continue;
}
} else {
}
}
break;
}

var seq__4081_4133 = cljs.core.seq.call(null,pmasks);
var chunk__4082_4134 = null;
var count__4083_4135 = (0);
var i__4084_4136 = (0);
while(true){
if((i__4084_4136 < count__4083_4135)){
var vec__4085_4137 = cljs.core._nth.call(null,chunk__4082_4134,i__4084_4136);
var pno_4138 = cljs.core.nth.call(null,vec__4085_4137,(0),null);
var pmask_4139 = cljs.core.nth.call(null,vec__4085_4137,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4138,"$ = ",pmask_4139,";");


var G__4140 = seq__4081_4133;
var G__4141 = chunk__4082_4134;
var G__4142 = count__4083_4135;
var G__4143 = (i__4084_4136 + (1));
seq__4081_4133 = G__4140;
chunk__4082_4134 = G__4141;
count__4083_4135 = G__4142;
i__4084_4136 = G__4143;
continue;
} else {
var temp__5735__auto___4144 = cljs.core.seq.call(null,seq__4081_4133);
if(temp__5735__auto___4144){
var seq__4081_4145__$1 = temp__5735__auto___4144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4081_4145__$1)){
var c__4461__auto___4146 = cljs.core.chunk_first.call(null,seq__4081_4145__$1);
var G__4147 = cljs.core.chunk_rest.call(null,seq__4081_4145__$1);
var G__4148 = c__4461__auto___4146;
var G__4149 = cljs.core.count.call(null,c__4461__auto___4146);
var G__4150 = (0);
seq__4081_4133 = G__4147;
chunk__4082_4134 = G__4148;
count__4083_4135 = G__4149;
i__4084_4136 = G__4150;
continue;
} else {
var vec__4088_4151 = cljs.core.first.call(null,seq__4081_4145__$1);
var pno_4152 = cljs.core.nth.call(null,vec__4088_4151,(0),null);
var pmask_4153 = cljs.core.nth.call(null,vec__4088_4151,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4152,"$ = ",pmask_4153,";");


var G__4154 = cljs.core.next.call(null,seq__4081_4145__$1);
var G__4155 = null;
var G__4156 = (0);
var G__4157 = (0);
seq__4081_4133 = G__4154;
chunk__4082_4134 = G__4155;
count__4083_4135 = G__4156;
i__4084_4136 = G__4157;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__4158){
var map__4159 = p__4158;
var map__4159__$1 = (((((!((map__4159 == null))))?(((((map__4159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4159):map__4159);
var t = cljs.core.get.call(null,map__4159__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__4159__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__4159__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__4159__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__4159__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__4161_4179 = cljs.core.seq.call(null,protocols);
var chunk__4162_4180 = null;
var count__4163_4181 = (0);
var i__4164_4182 = (0);
while(true){
if((i__4164_4182 < count__4163_4181)){
var protocol_4183 = cljs.core._nth.call(null,chunk__4162_4180,i__4164_4182);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_4183)),"}");


var G__4184 = seq__4161_4179;
var G__4185 = chunk__4162_4180;
var G__4186 = count__4163_4181;
var G__4187 = (i__4164_4182 + (1));
seq__4161_4179 = G__4184;
chunk__4162_4180 = G__4185;
count__4163_4181 = G__4186;
i__4164_4182 = G__4187;
continue;
} else {
var temp__5735__auto___4188 = cljs.core.seq.call(null,seq__4161_4179);
if(temp__5735__auto___4188){
var seq__4161_4189__$1 = temp__5735__auto___4188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4161_4189__$1)){
var c__4461__auto___4190 = cljs.core.chunk_first.call(null,seq__4161_4189__$1);
var G__4191 = cljs.core.chunk_rest.call(null,seq__4161_4189__$1);
var G__4192 = c__4461__auto___4190;
var G__4193 = cljs.core.count.call(null,c__4461__auto___4190);
var G__4194 = (0);
seq__4161_4179 = G__4191;
chunk__4162_4180 = G__4192;
count__4163_4181 = G__4193;
i__4164_4182 = G__4194;
continue;
} else {
var protocol_4195 = cljs.core.first.call(null,seq__4161_4189__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_4195)),"}");


var G__4196 = cljs.core.next.call(null,seq__4161_4189__$1);
var G__4197 = null;
var G__4198 = (0);
var G__4199 = (0);
seq__4161_4179 = G__4196;
chunk__4162_4180 = G__4197;
count__4163_4181 = G__4198;
i__4164_4182 = G__4199;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__4165_4200 = cljs.core.seq.call(null,fields__$1);
var chunk__4166_4201 = null;
var count__4167_4202 = (0);
var i__4168_4203 = (0);
while(true){
if((i__4168_4203 < count__4167_4202)){
var fld_4204 = cljs.core._nth.call(null,chunk__4166_4201,i__4168_4203);
cljs.compiler.emitln.call(null,"this.",fld_4204," = ",fld_4204,";");


var G__4205 = seq__4165_4200;
var G__4206 = chunk__4166_4201;
var G__4207 = count__4167_4202;
var G__4208 = (i__4168_4203 + (1));
seq__4165_4200 = G__4205;
chunk__4166_4201 = G__4206;
count__4167_4202 = G__4207;
i__4168_4203 = G__4208;
continue;
} else {
var temp__5735__auto___4209 = cljs.core.seq.call(null,seq__4165_4200);
if(temp__5735__auto___4209){
var seq__4165_4210__$1 = temp__5735__auto___4209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4165_4210__$1)){
var c__4461__auto___4211 = cljs.core.chunk_first.call(null,seq__4165_4210__$1);
var G__4212 = cljs.core.chunk_rest.call(null,seq__4165_4210__$1);
var G__4213 = c__4461__auto___4211;
var G__4214 = cljs.core.count.call(null,c__4461__auto___4211);
var G__4215 = (0);
seq__4165_4200 = G__4212;
chunk__4166_4201 = G__4213;
count__4167_4202 = G__4214;
i__4168_4203 = G__4215;
continue;
} else {
var fld_4216 = cljs.core.first.call(null,seq__4165_4210__$1);
cljs.compiler.emitln.call(null,"this.",fld_4216," = ",fld_4216,";");


var G__4217 = cljs.core.next.call(null,seq__4165_4210__$1);
var G__4218 = null;
var G__4219 = (0);
var G__4220 = (0);
seq__4165_4200 = G__4217;
chunk__4166_4201 = G__4218;
count__4167_4202 = G__4219;
i__4168_4203 = G__4220;
continue;
}
} else {
}
}
break;
}

var seq__4169_4221 = cljs.core.seq.call(null,pmasks);
var chunk__4170_4222 = null;
var count__4171_4223 = (0);
var i__4172_4224 = (0);
while(true){
if((i__4172_4224 < count__4171_4223)){
var vec__4173_4225 = cljs.core._nth.call(null,chunk__4170_4222,i__4172_4224);
var pno_4226 = cljs.core.nth.call(null,vec__4173_4225,(0),null);
var pmask_4227 = cljs.core.nth.call(null,vec__4173_4225,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4226,"$ = ",pmask_4227,";");


var G__4228 = seq__4169_4221;
var G__4229 = chunk__4170_4222;
var G__4230 = count__4171_4223;
var G__4231 = (i__4172_4224 + (1));
seq__4169_4221 = G__4228;
chunk__4170_4222 = G__4229;
count__4171_4223 = G__4230;
i__4172_4224 = G__4231;
continue;
} else {
var temp__5735__auto___4232 = cljs.core.seq.call(null,seq__4169_4221);
if(temp__5735__auto___4232){
var seq__4169_4233__$1 = temp__5735__auto___4232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4169_4233__$1)){
var c__4461__auto___4234 = cljs.core.chunk_first.call(null,seq__4169_4233__$1);
var G__4235 = cljs.core.chunk_rest.call(null,seq__4169_4233__$1);
var G__4236 = c__4461__auto___4234;
var G__4237 = cljs.core.count.call(null,c__4461__auto___4234);
var G__4238 = (0);
seq__4169_4221 = G__4235;
chunk__4170_4222 = G__4236;
count__4171_4223 = G__4237;
i__4172_4224 = G__4238;
continue;
} else {
var vec__4176_4239 = cljs.core.first.call(null,seq__4169_4233__$1);
var pno_4240 = cljs.core.nth.call(null,vec__4176_4239,(0),null);
var pmask_4241 = cljs.core.nth.call(null,vec__4176_4239,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_4240,"$ = ",pmask_4241,";");


var G__4242 = cljs.core.next.call(null,seq__4169_4233__$1);
var G__4243 = null;
var G__4244 = (0);
var G__4245 = (0);
seq__4169_4221 = G__4242;
chunk__4170_4222 = G__4243;
count__4171_4223 = G__4244;
i__4172_4224 = G__4245;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__4246){
var map__4247 = p__4246;
var map__4247__$1 = (((((!((map__4247 == null))))?(((((map__4247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4247):map__4247);
var target = cljs.core.get.call(null,map__4247__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__4247__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__4247__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__4247__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__4247__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__3116__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__4249){
var map__4250 = p__4249;
var map__4250__$1 = (((((!((map__4250 == null))))?(((((map__4250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4250):map__4250);
var op = cljs.core.get.call(null,map__4250__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__4250__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__4250__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__4250__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__4250__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4036__auto__ = code;
if(cljs.core.truth_(and__4036__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4036__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__3116__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__3116__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__4256 = cljs.core.seq.call(null,table);
var chunk__4257 = null;
var count__4258 = (0);
var i__4259 = (0);
while(true){
if((i__4259 < count__4258)){
var vec__4260 = cljs.core._nth.call(null,chunk__4257,i__4259);
var sym = cljs.core.nth.call(null,vec__4260,(0),null);
var value = cljs.core.nth.call(null,vec__4260,(1),null);
var ns_4266 = cljs.core.namespace.call(null,sym);
var name_4267 = cljs.core.name.call(null,sym);
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


var G__4268 = seq__4256;
var G__4269 = chunk__4257;
var G__4270 = count__4258;
var G__4271 = (i__4259 + (1));
seq__4256 = G__4268;
chunk__4257 = G__4269;
count__4258 = G__4270;
i__4259 = G__4271;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__4256);
if(temp__5735__auto__){
var seq__4256__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4256__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__4256__$1);
var G__4272 = cljs.core.chunk_rest.call(null,seq__4256__$1);
var G__4273 = c__4461__auto__;
var G__4274 = cljs.core.count.call(null,c__4461__auto__);
var G__4275 = (0);
seq__4256 = G__4272;
chunk__4257 = G__4273;
count__4258 = G__4274;
i__4259 = G__4275;
continue;
} else {
var vec__4263 = cljs.core.first.call(null,seq__4256__$1);
var sym = cljs.core.nth.call(null,vec__4263,(0),null);
var value = cljs.core.nth.call(null,vec__4263,(1),null);
var ns_4276 = cljs.core.namespace.call(null,sym);
var name_4277 = cljs.core.name.call(null,sym);
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


var G__4278 = cljs.core.next.call(null,seq__4256__$1);
var G__4279 = null;
var G__4280 = (0);
var G__4281 = (0);
seq__4256 = G__4278;
chunk__4257 = G__4279;
count__4258 = G__4280;
i__4259 = G__4281;
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
var G__4283 = arguments.length;
switch (G__4283) {
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
var k_4288 = cljs.core.first.call(null,ks);
var vec__4284_4289 = cljs.core.conj.call(null,prefix,k_4288);
var top_4290 = cljs.core.nth.call(null,vec__4284_4289,(0),null);
var prefix_SINGLEQUOTE__4291 = vec__4284_4289;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_4288)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__4291) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_4290)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_4290)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__4291)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_4290);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__4291)),";");
}
} else {
}

var m_4292 = cljs.core.get.call(null,externs,k_4288);
if(cljs.core.empty_QMARK_.call(null,m_4292)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__4291,m_4292,top_level,known_externs);
}

var G__4293 = cljs.core.next.call(null,ks);
ks = G__4293;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
