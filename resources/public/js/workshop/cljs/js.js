// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.js');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.env');
goog.require('cljs.spec.alpha');
goog.require('cljs.analyzer');
goog.require('cljs.compiler');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tagged_literals');
goog.require('goog.crypt.base64');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___7415 = arguments.length;
var i__4642__auto___7416 = (0);
while(true){
if((i__4642__auto___7416 < len__4641__auto___7415)){
args__4647__auto__.push((arguments[i__4642__auto___7416]));

var G__7417 = (i__4642__auto___7416 + (1));
i__4642__auto___7416 = G__7417;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR__orig_val__7413 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__7414 = cljs.core._STAR_print_err_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7414;

try{return cljs.core.apply.call(null,cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7413;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.js.debug_prn.cljs$lang$applyTo = (function (seq7412){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7412));
});

/**
 * Given a namespace as a symbol return the relative path sans extension
 */
cljs.js.ns__GT_relpath = (function cljs$js$ns__GT_relpath(ns_sym){
return clojure.string.replace.call(null,cljs.analyzer.munge_path.call(null,ns_sym),".","/");
});
cljs.js.file__GT_ns = (function cljs$js$file__GT_ns(file){
var lib_name = cljs.core.subs.call(null,clojure.string.replace.call(null,file,"/","."),(0),(cljs.core.count.call(null,file) - (5)));
return cljs.core.symbol.call(null,cljs.core.demunge.call(null,lib_name));
});
cljs.js.drop_macros_suffix = (function cljs$js$drop_macros_suffix(ns_name){
if(cljs.core.truth_(ns_name)){
if(clojure.string.ends_with_QMARK_.call(null,ns_name,"$macros")){
return cljs.core.subs.call(null,ns_name,(0),(cljs.core.count.call(null,ns_name) - (7)));
} else {
return ns_name;
}
} else {
return null;
}
});
cljs.js.elide_macros_suffix = (function cljs$js$elide_macros_suffix(sym){
return cljs.core.symbol.call(null,cljs.js.drop_macros_suffix.call(null,cljs.core.namespace.call(null,sym)),cljs.core.name.call(null,sym));
});
cljs.js.resolve_symbol = (function cljs$js$resolve_symbol(sym){
if(clojure.string.starts_with_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),".")){
return sym;
} else {
return cljs.js.elide_macros_suffix.call(null,cljs.analyzer.resolve_symbol.call(null,sym));
}
});
cljs.js.read = (function cljs$js$read(eof,rdr){
var _STAR_ns_STAR__orig_val__7418 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__7419 = cljs.core.symbol.call(null,cljs.js.drop_macros_suffix.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)));
cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__7419;

try{return cljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr);
}finally {cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__7418;
}});
cljs.js.atom_QMARK_ = (function cljs$js$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
cljs.js.valid_name_QMARK_ = (function cljs$js$valid_name_QMARK_(x){
return (((x == null)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string'));
});
cljs.js.valid_opts_QMARK_ = (function cljs$js$valid_opts_QMARK_(x){
return (((x == null)) || (cljs.core.map_QMARK_.call(null,x)));
});
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_load_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides a different way to load a library.
 *   Whatever function *load-fn* is bound to will be passed two arguments - a
 *   map and a callback function: The map will have the following keys:
 * 
 *   :name   - the name of the library (a symbol)
 *   :macros - modifier signaling a macros namespace load
 *   :path   - munged relative library path (a string)
 * 
 *   It is up to the implementor to correctly resolve the corresponding .cljs,
 *   .cljc, or .js resource (the order must be respected). If :macros is true
 *   resolution should only consider .clj or .cljc resources (the order must be
 *   respected). Upon resolution the callback should be invoked with a map
 *   containing the following keys:
 * 
 *   :lang       - the language, :clj or :js
 *   :source     - the source of the library (a string)
 *   :file       - optional, the file path, it will be added to AST's :file keyword
 *              (but not in :meta)
 *   :cache      - optional, if a :clj namespace has been precompiled to :js, can
 *              give an analysis cache for faster loads.
 *   :source-map - optional, if a :clj namespace has been precompiled to :js, can
 *              give a V3 source map JSON
 * 
 *   If the resource could not be resolved, the callback should be invoked with
 *   nil.
 */
cljs.js._STAR_load_fn_STAR_ = (function cljs$js$_STAR_load_fn_STAR_(m,cb){
throw (new Error("No *load-fn* set"));
});
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js._STAR_eval_fn_STAR_ !== 'undefined')){
} else {
/**
 * Each runtime environment provides various ways to eval JavaScript
 *   source. Whatever function *eval-fn* is bound to will be passed a map
 *   containing the following keys:
 * 
 *   :source - the source of the library (string)
 *   :name   - used to unique identify the script (symbol)
 *   :cache  - if the source was originally ClojureScript, will be given the
 *          analysis cache.
 * 
 *   The result of evaluation should be the return value.
 */
cljs.js._STAR_eval_fn_STAR_ = (function cljs$js$_STAR_eval_fn_STAR_(m){
throw (new Error("No *eval-fn* set"));
});
}
/**
 * A default JavaScript evaluation function.
 */
cljs.js.js_eval = (function cljs$js$js_eval(p__7420){
var map__7421 = p__7420;
var map__7421__$1 = (((((!((map__7421 == null))))?(((((map__7421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7421):map__7421);
var resource = map__7421__$1;
var source = cljs.core.get.call(null,map__7421__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return eval(source);
});
cljs.js.wrap_error = (function cljs$js$wrap_error(ex){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),ex], null);
});
/**
 * Construct an empty compiler state. Required to invoke analyze, compile,
 * eval and eval-str.
 */
cljs.js.empty_state = (function cljs$js$empty_state(var_args){
var G__7424 = arguments.length;
switch (G__7424) {
case 0:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__7425 = cljs.env.default_compiler_env.call(null);
cljs.core.swap_BANG_.call(null,G__7425,((function (G__7425){
return (function (state){
});})(G__7425))
);

return G__7425;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__7426 = cljs.js.empty_state.call(null);
cljs.core.swap_BANG_.call(null,G__7426,init);

return G__7426;
});

cljs.js.empty_state.cljs$lang$maxFixedArity = 1;

cljs.js.load_analysis_cache_BANG_ = (function cljs$js$load_analysis_cache_BANG_(state,ns,cache){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null),cache);
});
cljs.js.load_source_map_BANG_ = (function cljs$js$load_source_map_BANG_(state,ns,sm_json){
var sm = cljs.source_map.decode.call(null,JSON.parse(sm_json));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),ns], null),sm);
});
cljs.js.sm_data = (function cljs$js$sm_data(){
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),cljs.core.sorted_map.call(null),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0),new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(0)], null));
});
cljs.js.prefix = (function cljs$js$prefix(s,pre){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
});
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__7428){
var map__7429 = p__7428;
var map__7429__$1 = (((((!((map__7429 == null))))?(((((map__7429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7429):map__7429);
var opts = map__7429__$1;
var output_dir = cljs.core.get.call(null,map__7429__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var asset_path = cljs.core.get.call(null,map__7429__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var source_map_timestamp = cljs.core.get.call(null,map__7429__$1,new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633));
var t = (new Date()).valueOf();
var mn = (cljs.core.truth_(name)?cljs.core.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)):["cljs-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
var smn = (function (){var G__7431 = mn;
if(cljs.core.truth_(name)){
return clojure.string.replace.call(null,G__7431,".","/");
} else {
return G__7431;
}
})();
var ts = (new Date()).valueOf();
var out = (function (){var or__4047__auto__ = output_dir;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return asset_path;
}
})();
var src = (function (){var G__7432 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".cljs"].join('');
var G__7432__$1 = ((source_map_timestamp === true)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7432),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__7432);
if(cljs.core.truth_(out)){
return cljs.js.prefix.call(null,G__7432__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__7432__$1;
}
})();
var file = (function (){var G__7433 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(smn),".js"].join('');
var G__7433__$1 = ((source_map_timestamp === true)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7433),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''):G__7433);
if(cljs.core.truth_(out)){
return cljs.js.prefix.call(null,G__7433__$1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(out),"/"].join(''));
} else {
return G__7433__$1;
}
})();
var json = cljs.source_map.encode.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([src,new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lines","lines",-700165781),(new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,json);
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),cljs.core.symbol.call(null,mn)], null),cljs.source_map.invert_reverse_map.call(null,new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append(["\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"\n//# sourceMappingURL=data:application/json;base64,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.crypt.base64.encodeString(clojure.string.replace.call(null,encodeURIComponent(json),/%([0-9A-F]{2})/,((function (t,mn,smn,ts,out,src,file,json,map__7429,map__7429__$1,opts,output_dir,asset_path,source_map_timestamp){
return (function (p__7434){
var vec__7435 = p__7434;
var _ = cljs.core.nth.call(null,vec__7435,(0),null);
var match = cljs.core.nth.call(null,vec__7435,(1),null);
return String.fromCharCode(["0x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''));
});})(t,mn,smn,ts,out,src,file,json,map__7429,map__7429__$1,opts,output_dir,asset_path,source_map_timestamp))
)))].join(''));
});
cljs.js.alias_map = (function cljs$js$alias_map(compiler,cljs_ns){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__7438){
var vec__7439 = p__7438;
var k = cljs.core.nth.call(null,vec__7439,(0),null);
var v = cljs.core.nth.call(null,vec__7439,(1),null);
return cljs.core.symbol_identical_QMARK_.call(null,k,v);
}),cljs.core.merge.call(null,cljs.core.get_in.call(null,compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs_ns,new cljs.core.Keyword(null,"requires","requires",-1201390927)], null)),cljs.core.get_in.call(null,compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs_ns,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null)))));
});
cljs.js._STAR_loaded_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
/**
 * Like cljs.core/run!, but for an async procedure, and with the
 *   ability to break prior to processing the entire collection.
 * 
 *   Chains successive calls to the supplied procedure for items in
 *   the collection. The procedure should accept an item from the
 *   collection and a callback of one argument. If the break? predicate,
 *   when applied to the procedure callback value, yields a truthy
 *   result, terminates early calling the supplied cb with the callback
 *   value. Otherwise, when complete, calls cb with nil.
 */
cljs.js.run_async_BANG_ = (function cljs$js$run_async_BANG_(proc,coll,break_QMARK_,cb){
if(cljs.core.seq.call(null,coll)){
return proc.call(null,cljs.core.first.call(null,coll),(function (res){
if(cljs.core.truth_(break_QMARK_.call(null,res))){
return cb.call(null,res);
} else {
return cljs.js.run_async_BANG_.call(null,proc,cljs.core.rest.call(null,coll),break_QMARK_,cb);
}
}));
} else {
return cb.call(null,null);
}
});
cljs.js.process_deps = (function cljs$js$process_deps(bound_vars,names,opts,cb){
return cljs.js.run_async_BANG_.call(null,(function (name,cb__$1){
return cljs.js.require.call(null,bound_vars,name,null,opts,cb__$1);
}),names,new cljs.core.Keyword(null,"error","error",-978969032),cb);
});
cljs.js.process_macros_deps = (function cljs$js$process_macros_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps.call(null,bound_vars,cljs.core.distinct.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(cache))),cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933),true),new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518)),cb);
});
cljs.js.process_libs_deps = (function cljs$js$process_libs_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps.call(null,bound_vars,cljs.core.distinct.call(null,cljs.core.concat.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(cache)),cljs.core.vals.call(null,new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(cache)))),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),cb);
});
cljs.js.pre_file_side_effects = (function cljs$js$pre_file_side_effects(st,name,file,opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Pre-file side-effects",file);
} else {
}

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,st),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"defs","defs",1398449717)], null));
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null),"null",new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),"null"], null), null).call(null,name));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.swap_BANG_.call(null,st,cljs.core.update,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.dissoc,name);
} else {
return null;
}
});
cljs.js.post_file_side_effects = (function cljs$js$post_file_side_effects(file,opts){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Post-file side-effects",file);
} else {
}

return cljs.core._STAR_unchecked_arrays_STAR_ = false;;
});
cljs.js.require = (function cljs$js$require(var_args){
var G__7443 = arguments.length;
switch (G__7443) {
case 2:
return cljs.js.require.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.require.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.require.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.require.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.require.cljs$core$IFn$_invoke$arity$2 = (function (name,cb){
return cljs.js.require.call(null,name,null,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$3 = (function (name,opts,cb){
return cljs.js.require.call(null,null,name,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$4 = (function (bound_vars,name,opts,cb){
return cljs.js.require.call(null,bound_vars,name,null,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,name,reload,opts,cb){
var bound_vars__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env.default_compiler_env.call(null),new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),bound_vars);
var aname = (function (){var G__7444 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name.call(null,G__7444);
} else {
return G__7444;
}
})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reload","reload",863702807),reload)){
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.disj,aname);
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload)){
cljs.core.reset_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.PersistentHashSet.EMPTY);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,["Loading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?" macros":null))," namespace"].join(''));
} else {
}

if((!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,cljs.js._STAR_loaded_STAR_),aname)))){
var env = new cljs.core.Keyword(null,"*env*","*env*",1860548436).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
try{return new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"macros","macros",811339431),new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath.call(null,name)], null),((function (env,bound_vars__$1,aname){
return (function (resource){
if(((cljs.core.map_QMARK_.call(null,resource)) || ((resource == null)))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.truth_(resource)){
var map__7446 = resource;
var map__7446__$1 = (((((!((map__7446 == null))))?(((((map__7446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7446):map__7446);
var lang = cljs.core.get.call(null,map__7446__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.call(null,map__7446__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var cache = cljs.core.get.call(null,map__7446__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var source_map = cljs.core.get.call(null,map__7446__$1,new cljs.core.Keyword(null,"source-map","source-map",1706252311));
var file = cljs.core.get.call(null,map__7446__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__7448 = cljs.core.keyword_identical_QMARK_;
var expr__7449 = lang;
if(cljs.core.truth_(pred__7448.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428),expr__7449))){
cljs.js.pre_file_side_effects.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,file,opts);

return cljs.js.eval_str_STAR_.call(null,bound_vars__$1,source,name,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__7448,expr__7449,map__7446,map__7446__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname){
return (function (res){
cljs.js.post_file_side_effects.call(null,file,opts);

if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
}
});})(pred__7448,expr__7449,map__7446,map__7446__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname))
);
} else {
if(cljs.core.truth_(pred__7448.call(null,new cljs.core.Keyword(null,"js","js",1768080579),expr__7449))){
return cljs.js.process_macros_deps.call(null,bound_vars__$1,cache,opts,((function (pred__7448,expr__7449,map__7446,map__7446__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
return cljs.js.process_libs_deps.call(null,bound_vars__$1,cache,opts,((function (pred__7448,expr__7449,map__7446,map__7446__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var res__$2 = (function (){try{new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,resource);

if(cljs.core.truth_(cache)){
cljs.js.load_analysis_cache_BANG_.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,cache);

cljs.analyzer.register_specs.call(null,cache);
} else {
}

if(cljs.core.truth_(source_map)){
return cljs.js.load_source_map_BANG_.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),aname,source_map);
} else {
return null;
}
}catch (e7451){var cause = e7451;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,aname);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
}
}
});})(pred__7448,expr__7449,map__7446,map__7446__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname))
);
}
});})(pred__7448,expr__7449,map__7446,map__7446__$1,lang,source,cache,source_map,file,env,bound_vars__$1,aname))
);
} else {
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join(''))));
}
}
} else {
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.Keyword(null,"undeclared-macros-ns","undeclared-macros-ns",-438029430):new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),name,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,name)], null)))));
}
});})(env,bound_vars__$1,aname))
);
}catch (e7445){var cause = e7445;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause)));
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
}
});

cljs.js.require.cljs$lang$maxFixedArity = 5;

cljs.js.patch_alias_map = (function cljs$js$patch_alias_map(compiler,in$,from,to){
var patch = (function (k,add_if_present_QMARK_){
return cljs.core.swap_BANG_.call(null,compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),in$,k], null),(function (m){
var replaced = clojure.walk.postwalk_replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([from,to]),m);
if(cljs.core.truth_((function (){var and__4036__auto__ = add_if_present_QMARK_;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([to]),cljs.core.vals.call(null,replaced));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,replaced,from,to);
} else {
return replaced;
}
}));
});
var patch_renames = ((function (patch){
return (function (k){
return cljs.core.swap_BANG_.call(null,compiler,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),in$,k], null),((function (patch){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.call(null,((function (patch){
return (function (acc,p__7453){
var vec__7454 = p__7453;
var renamed = cljs.core.nth.call(null,vec__7454,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__7454,(1),null);
var entry = vec__7454;
if(cljs.core._EQ_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(from),cljs.core.namespace.call(null,qualified_sym))){
return cljs.core.assoc.call(null,acc,renamed,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name.call(null,qualified_sym)));
} else {
return cljs.core.merge.call(null,acc,entry);
}
});})(patch))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(patch))
);
});})(patch))
;
patch.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927),true);

patch.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),true);

patch.call(null,new cljs.core.Keyword(null,"uses","uses",232664692),false);

patch.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),false);

patch_renames.call(null,new cljs.core.Keyword(null,"renames","renames",343278368));

return patch_renames.call(null,new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512));
});
cljs.js.self_require_QMARK_ = (function cljs$js$self_require_QMARK_(deps,opts){
var and__4036__auto__ = new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts) === true;
if(and__4036__auto__){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.analyzer._STAR_cljs_ns_STAR_]),deps);
} else {
return and__4036__auto__;
}
});
cljs.js.load_deps = (function cljs$js$load_deps(var_args){
var G__7459 = arguments.length;
switch (G__7459) {
case 5:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.load_deps.call(null,bound_vars,ana_env,lib,deps,null,null,cb);
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$7 = (function (bound_vars,ana_env,lib,deps,reload,opts,cb){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Loading dependencies for",lib);
} else {
}

var _STAR_cljs_dep_set_STAR__orig_val__7460 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__7461 = (function (){var lib__$1 = (cljs.core.truth_(cljs.js.self_require_QMARK_.call(null,deps,opts))?new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null):lib);
return cljs.core.vary_meta.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib__$1),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib__$1);
})();
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__7461;

try{var bound_vars__$1 = cljs.core.assoc.call(null,bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_.call(null,((function (bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__7460,_STAR_cljs_dep_set_STAR__temp_val__7461){
return (function (p1__7457_SHARP_){
return (!(cljs.core.contains_QMARK_.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__7457_SHARP_)));
});})(bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__7460,_STAR_cljs_dep_set_STAR__temp_val__7461))
,deps)))){
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," -> ",cljs.core.conj.call(null,new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join(''))));
} else {
if(cljs.core.seq.call(null,deps)){
var dep = cljs.core.first.call(null,deps);
var opts_SINGLEQUOTE_ = cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320)),new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.js.require.call(null,bound_vars__$1,dep,reload,opts_SINGLEQUOTE_,((function (dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__7460,_STAR_cljs_dep_set_STAR__temp_val__7461){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Loading result:",res);
} else {
}

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.next.call(null,deps),null,opts,cb);
} else {
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns.call(null,dep);
return cljs.core.get.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
return cljs.js.require.call(null,bound_vars__$1,cljs_dep,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__7460,_STAR_cljs_dep_set_STAR__temp_val__7461){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
cljs.js.patch_alias_map.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.load_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.next.call(null,deps),null,opts,((function (cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__7460,_STAR_cljs_dep_set_STAR__temp_val__7461){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
return cb.call(null,cljs.core.update.call(null,res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep));
}
});})(cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__7460,_STAR_cljs_dep_set_STAR__temp_val__7461))
);
}
});})(cljs_dep,temp__5733__auto__,dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__7460,_STAR_cljs_dep_set_STAR__temp_val__7461))
);
} else {
return cb.call(null,res);
}
}
});})(dep,opts_SINGLEQUOTE_,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__7460,_STAR_cljs_dep_set_STAR__temp_val__7461))
);
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__7460;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 7;

cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var G__7465 = arguments.length;
switch (G__7465) {
case 5:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.call(null,bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
var _STAR_cljs_dep_set_STAR__orig_val__7466 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
var _STAR_cljs_dep_set_STAR__temp_val__7467 = cljs.core.vary_meta.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);
cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__temp_val__7467;

try{var compiler = cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var bound_vars__$1 = cljs.core.assoc.call(null,bound_vars,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_);
if((!(cljs.core.every_QMARK_.call(null,((function (compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__7466,_STAR_cljs_dep_set_STAR__temp_val__7467){
return (function (p1__7463_SHARP_){
return (!(cljs.core.contains_QMARK_.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__7463_SHARP_)));
});})(compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__7466,_STAR_cljs_dep_set_STAR__temp_val__7467))
,deps)))){
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Circular dependency detected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," -> ",cljs.core.conj.call(null,new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_)),cljs.core.some.call(null,cljs.analyzer._STAR_cljs_dep_set_STAR_,deps)))))].join(''))));
} else {
if(cljs.core.seq.call(null,deps)){
var dep = cljs.core.first.call(null,deps);
try{return new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),dep,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath.call(null,dep)], null),((function (dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__7466,_STAR_cljs_dep_set_STAR__temp_val__7467){
return (function (resource){
if(((cljs.core.map_QMARK_.call(null,resource)) || ((resource == null)))){
} else {
throw (new Error(["Assert failed: ","*load-fn* may only return a map or nil","\n","(or (map? resource) (nil? resource))"].join('')));
}

if(cljs.core.not.call(null,resource)){
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns.call(null,dep);
return cljs.core.get.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([dep,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
cljs.js.patch_alias_map.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),lib,dep,cljs_dep);

return cljs.js.analyze_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.cons.call(null,cljs_dep,cljs.core.next.call(null,deps)),opts,((function (cljs_dep,temp__5733__auto__,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__7466,_STAR_cljs_dep_set_STAR__temp_val__7467){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
return cb.call(null,cljs.core.update.call(null,res,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,dep,cljs_dep));
}
});})(cljs_dep,temp__5733__auto__,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__7466,_STAR_cljs_dep_set_STAR__temp_val__7467))
);
} else {
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,dep)], null)))));
}
} else {
var map__7469 = resource;
var map__7469__$1 = (((((!((map__7469 == null))))?(((((map__7469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7469):map__7469);
var name = cljs.core.get.call(null,map__7469__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var lang = cljs.core.get.call(null,map__7469__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.call(null,map__7469__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var file = cljs.core.get.call(null,map__7469__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pred__7471 = cljs.core.keyword_identical_QMARK_;
var expr__7472 = lang;
if(cljs.core.truth_(pred__7471.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428),expr__7472))){
cljs.js.pre_file_side_effects.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name,file,opts);

return cljs.js.analyze_str_STAR_.call(null,bound_vars__$1,source,name,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049),file),((function (pred__7471,expr__7472,map__7469,map__7469__$1,name,lang,source,file,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__7466,_STAR_cljs_dep_set_STAR__temp_val__7467){
return (function (res){
cljs.js.post_file_side_effects.call(null,file,opts);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.next.call(null,deps),opts,cb);
} else {
return cb.call(null,res);
}
});})(pred__7471,expr__7472,map__7469,map__7469__$1,name,lang,source,file,dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__7466,_STAR_cljs_dep_set_STAR__temp_val__7467))
);
} else {
if(cljs.core.truth_(pred__7471.call(null,new cljs.core.Keyword(null,"js","js",1768080579),expr__7472))){
return cljs.js.analyze_deps.call(null,bound_vars__$1,ana_env,lib,cljs.core.next.call(null,deps),opts,cb);
} else {
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Invalid :lang specified ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),", only :clj or :js allowed"].join('')));
}
}
}
});})(dep,compiler,bound_vars__$1,_STAR_cljs_dep_set_STAR__orig_val__7466,_STAR_cljs_dep_set_STAR__temp_val__7467))
);
}catch (e7468){var cause = e7468;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Could not analyze dep ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep)].join(''),cause)));
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR__orig_val__7466;
}});

cljs.js.analyze_deps.cljs$lang$maxFixedArity = 6;

cljs.js.load_macros = (function cljs$js$load_macros(bound_vars,k,macros,lib,reload,reloads,opts,cb){
if(cljs.core.seq.call(null,macros)){
var nsym = cljs.core.first.call(null,cljs.core.vals.call(null,macros));
var k__$1 = (function (){var or__4047__auto__ = reload.call(null,k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = cljs.core.get_in.call(null,reloads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nsym], null));
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = (function (){var and__4036__auto__ = cljs.core._EQ_.call(null,nsym,cljs.core.name);
if(and__4036__auto__){
var and__4036__auto____$1 = new cljs.core.Keyword(null,"*reload-macros*","*reload-macros*",-820635806).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4036__auto____$1)){
return new cljs.core.Keyword(null,"reload","reload",863702807);
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return null;
}
}
}
})();
var opts_SINGLEQUOTE_ = cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933),true),new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320)),new cljs.core.Keyword(null,"ns","ns",441598760)),new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518));
return cljs.js.require.call(null,bound_vars,nsym,k__$1,opts_SINGLEQUOTE_,((function (nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_macros.call(null,bound_vars,k__$1,cljs.core.next.call(null,macros),lib,reload,reloads,opts,cb);
} else {
var temp__5733__auto__ = (function (){var cljs_ns = cljs.analyzer.clj_ns__GT_cljs_ns.call(null,nsym);
return cljs.core.get.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([nsym,null]),cljs_ns,cljs_ns);
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cljs_dep = temp__5733__auto__;
return cljs.js.require.call(null,bound_vars,cljs_dep,k__$1,opts_SINGLEQUOTE_,((function (cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
cljs.js.patch_alias_map.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars),lib,nsym,cljs_dep);

return cljs.js.load_macros.call(null,bound_vars,k__$1,cljs.core.next.call(null,macros),lib,reload,reloads,opts,((function (cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
return cb.call(null,cljs.core.update.call(null,res__$2,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766),cljs.core.assoc,nsym,cljs_dep));
}
});})(cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
);
}
});})(cljs_dep,temp__5733__auto__,nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
return cb.call(null,res);
}
}
});})(nsym,k__$1,opts_SINGLEQUOTE_))
);
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
});
cljs.js.rewrite_ns_ast = (function cljs$js$rewrite_ns_ast(var_args){
var G__7478 = arguments.length;
switch (G__7478) {
case 2:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$2 = (function (ast,smap){
return cljs.js.rewrite_ns_ast.call(null,ast,smap,false);
});

cljs.js.rewrite_ns_ast.cljs$core$IFn$_invoke$arity$3 = (function (ast,smap,macros_QMARK_){
var vec__7479 = (cljs.core.truth_(macros_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"rename-macros","rename-macros",1076432512)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"renames","renames",343278368)], null));
var uk = cljs.core.nth.call(null,vec__7479,(0),null);
var rk = cljs.core.nth.call(null,vec__7479,(1),null);
var renk = cljs.core.nth.call(null,vec__7479,(2),null);
var rewrite_renames = ((function (vec__7479,uk,rk,renk){
return (function (m){
if(cljs.core.truth_(m)){
return cljs.core.reduce.call(null,((function (vec__7479,uk,rk,renk){
return (function (acc,p__7482){
var vec__7483 = p__7482;
var renamed = cljs.core.nth.call(null,vec__7483,(0),null);
var qualified_sym = cljs.core.nth.call(null,vec__7483,(1),null);
var entry = vec__7483;
var from = cljs.core.symbol.call(null,cljs.core.namespace.call(null,qualified_sym));
var to = cljs.core.get.call(null,smap,from);
if((!((to == null)))){
return cljs.core.assoc.call(null,acc,renamed,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.name.call(null,qualified_sym)));
} else {
return cljs.core.merge.call(null,acc,entry);
}
});})(vec__7479,uk,rk,renk))
,cljs.core.PersistentArrayMap.EMPTY,m);
} else {
return null;
}
});})(vec__7479,uk,rk,renk))
;
var rewrite_deps = ((function (vec__7479,uk,rk,renk,rewrite_renames){
return (function (deps){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (vec__7479,uk,rk,renk,rewrite_renames){
return (function (dep){
var temp__5733__auto__ = cljs.core.get.call(null,smap,dep);
if(cljs.core.truth_(temp__5733__auto__)){
var new_dep = temp__5733__auto__;
return new_dep;
} else {
return dep;
}
});})(vec__7479,uk,rk,renk,rewrite_renames))
),deps);
});})(vec__7479,uk,rk,renk,rewrite_renames))
;
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,ast,uk,((function (vec__7479,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__7475_SHARP_){
return clojure.walk.postwalk_replace.call(null,smap,p1__7475_SHARP_);
});})(vec__7479,uk,rk,renk,rewrite_renames,rewrite_deps))
),rk,((function (vec__7479,uk,rk,renk,rewrite_renames,rewrite_deps){
return (function (p1__7476_SHARP_){
return cljs.core.merge.call(null,smap,clojure.walk.postwalk_replace.call(null,smap,p1__7476_SHARP_));
});})(vec__7479,uk,rk,renk,rewrite_renames,rewrite_deps))
),renk,rewrite_renames),new cljs.core.Keyword(null,"deps","deps",1883360319),rewrite_deps);
});

cljs.js.rewrite_ns_ast.cljs$lang$maxFixedArity = 3;

cljs.js.check_macro_autoload_inferring_missing = (function cljs$js$check_macro_autoload_inferring_missing(p__7487,cenv){
var map__7488 = p__7487;
var map__7488__$1 = (((((!((map__7488 == null))))?(((((map__7488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7488):map__7488);
var ast = map__7488__$1;
var requires = cljs.core.get.call(null,map__7488__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var name = cljs.core.get.call(null,map__7488__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var namespaces = new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cenv));
var missing_require_macros = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (namespaces,map__7488,map__7488__$1,ast,requires,name){
return (function (p__7490){
var vec__7491 = p__7490;
var _ = cljs.core.nth.call(null,vec__7491,(0),null);
var full_ns = cljs.core.nth.call(null,vec__7491,(1),null);
var map__7494 = cljs.core.get.call(null,namespaces,full_ns);
var map__7494__$1 = (((((!((map__7494 == null))))?(((((map__7494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7494):map__7494);
var use_macros = cljs.core.get.call(null,map__7494__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.call(null,map__7494__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var or__4047__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals.call(null,use_macros));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([full_ns]),cljs.core.vals.call(null,require_macros));
}
});})(namespaces,map__7488,map__7488__$1,ast,requires,name))
),requires);
var ast_SINGLEQUOTE_ = cljs.core.update_in.call(null,ast,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,missing_require_macros);
cljs.core.swap_BANG_.call(null,cenv,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.merge,missing_require_macros);

return ast_SINGLEQUOTE_;
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var G__7499 = arguments.length;
switch (G__7499) {
case 5:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,ast,opts,cb){
return cljs.js.ns_side_effects.call(null,false,bound_vars,ana_env,ast,opts,cb);
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__7500,opts,cb){
var map__7501 = p__7500;
var map__7501__$1 = (((((!((map__7501 == null))))?(((((map__7501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7501):map__7501);
var ast = map__7501__$1;
var op = cljs.core.get.call(null,map__7501__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Namespace side effects for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,op))){
var check_uses_and_load_macros = ((function (map__7501,map__7501__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res,rewritten_ast){
var env = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
var map__7520 = rewritten_ast;
var map__7520__$1 = (((((!((map__7520 == null))))?(((((map__7520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7520):map__7520);
var uses = cljs.core.get.call(null,map__7520__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var use_macros = cljs.core.get.call(null,map__7520__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var reload = cljs.core.get.call(null,map__7520__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reloads = cljs.core.get.call(null,map__7520__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var name = cljs.core.get.call(null,map__7520__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006).cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Processing :use-macros for",name);
} else {
}

return cljs.js.load_macros.call(null,bound_vars,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),use_macros,name,reload,reloads,opts,((function (env,map__7520,map__7520__$1,uses,use_macros,reload,reloads,name,map__7501,map__7501__$1,ast,op){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var map__7522 = cljs.js.rewrite_ns_ast.call(null,rewritten_ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__7522__$1 = (((((!((map__7522 == null))))?(((((map__7522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7522):map__7522);
var rewritten_ast__$1 = map__7522__$1;
var require_macros = cljs.core.get.call(null,map__7522__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Processing :require-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

return cljs.js.load_macros.call(null,bound_vars,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),require_macros,name,reload,reloads,opts,((function (map__7522,map__7522__$1,rewritten_ast__$1,require_macros,env,map__7520,map__7520__$1,uses,use_macros,reload,reloads,name,map__7501,map__7501__$1,ast,op){
return (function (res_SINGLEQUOTE_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE_))){
return cb.call(null,res_SINGLEQUOTE_);
} else {
var map__7524 = cljs.js.rewrite_ns_ast.call(null,rewritten_ast__$1,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(res__$1),true);
var map__7524__$1 = (((((!((map__7524 == null))))?(((((map__7524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7524):map__7524);
var rewritten_ast__$2 = map__7524__$1;
var use_macros__$1 = cljs.core.get.call(null,map__7524__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var res_SINGLEQUOTE___$1 = (function (){try{if(cljs.core.seq.call(null,use_macros__$1)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Checking :use-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

var _STAR_analyze_deps_STAR__orig_val__7527_7540 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__7528_7541 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__7529_7542 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__7530_7543 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__7529_7542;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__7530_7543;

try{cljs.analyzer.check_use_macros.call(null,use_macros__$1,env);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__7528_7541;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__7527_7540;
}} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}catch (e7526){var cause = e7526;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res_SINGLEQUOTE___$1))){
return cb.call(null,res_SINGLEQUOTE___$1);
} else {
try{var _STAR_analyze_deps_STAR__orig_val__7532 = cljs.analyzer._STAR_analyze_deps_STAR_;
var _STAR_compiler_STAR__orig_val__7533 = cljs.env._STAR_compiler_STAR_;
var _STAR_analyze_deps_STAR__temp_val__7534 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
var _STAR_compiler_STAR__temp_val__7535 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__temp_val__7534;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__7535;

try{var ast_SINGLEQUOTE_ = cljs.js.check_macro_autoload_inferring_missing.call(null,cljs.analyzer.check_rename_macros_inferring_missing.call(null,cljs.analyzer.check_use_macros_inferring_missing.call(null,rewritten_ast__$2,env),env),env);
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast_SINGLEQUOTE_], null));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__7533;

cljs.analyzer._STAR_analyze_deps_STAR_ = _STAR_analyze_deps_STAR__orig_val__7532;
}}catch (e7531){var cause = e7531;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause)));
}}
}
});})(map__7522,map__7522__$1,rewritten_ast__$1,require_macros,env,map__7520,map__7520__$1,uses,use_macros,reload,reloads,name,map__7501,map__7501__$1,ast,op))
);
}
});})(env,map__7520,map__7520__$1,uses,use_macros,reload,reloads,name,map__7501,map__7501__$1,ast,op))
);
} else {
try{if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Checking uses");
} else {
}

cljs.analyzer.check_uses.call(null,(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.seq.call(null,uses);
} else {
return and__4036__auto__;
}
})())?cljs.analyzer.missing_uses.call(null,uses,env):null),env);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null));
}catch (e7536){var cause = e7536;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,["Could not parse ns form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause)));
}}
}
});})(map__7501,map__7501__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__4036__auto__ = load;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4036__auto__;
}
})())){
var map__7537 = ast;
var map__7537__$1 = (((((!((map__7537 == null))))?(((((map__7537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7537):map__7537);
var reload = cljs.core.get.call(null,map__7537__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var name = cljs.core.get.call(null,map__7537__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var deps = cljs.core.get.call(null,map__7537__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
return cljs.js.load_deps.call(null,bound_vars,ana_env,name,deps,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reload);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reload);
}
})(),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__7537,map__7537__$1,reload,name,deps,map__7501,map__7501__$1,ast,op){
return (function (p1__7496_SHARP_){
return check_uses_and_load_macros.call(null,p1__7496_SHARP_,cljs.js.rewrite_ns_ast.call(null,ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__7496_SHARP_)));
});})(map__7537,map__7537__$1,reload,name,deps,map__7501,map__7501__$1,ast,op))
);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.not.call(null,load);
if(and__4036__auto__){
var and__4036__auto____$1 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4036__auto____$1)){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
return cljs.js.analyze_deps.call(null,bound_vars,ana_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),((function (map__7501,map__7501__$1,ast,op){
return (function (p1__7497_SHARP_){
return check_uses_and_load_macros.call(null,p1__7497_SHARP_,cljs.js.rewrite_ns_ast.call(null,ast,new cljs.core.Keyword(null,"aliased-loads","aliased-loads",220995766).cljs$core$IFn$_invoke$arity$1(p1__7497_SHARP_)));
});})(map__7501,map__7501__$1,ast,op))
);
} else {
return check_uses_and_load_macros.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),ast);

}
}
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;

cljs.js.node_side_effects = (function cljs$js$node_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var seq__7544_7556 = cljs.core.seq.call(null,deps);
var chunk__7545_7557 = null;
var count__7546_7558 = (0);
var i__7547_7559 = (0);
while(true){
if((i__7547_7559 < count__7546_7558)){
var dep_7560 = cljs.core._nth.call(null,chunk__7545_7557,i__7547_7559);
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7548_7561 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7549_7562 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7550_7563 = true;
var _STAR_print_fn_STAR__temp_val__7551_7564 = ((function (seq__7544_7556,chunk__7545_7557,count__7546_7558,i__7547_7559,_STAR_print_newline_STAR__orig_val__7548_7561,_STAR_print_fn_STAR__orig_val__7549_7562,_STAR_print_newline_STAR__temp_val__7550_7563,sb__4572__auto__,dep_7560){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(seq__7544_7556,chunk__7545_7557,count__7546_7558,i__7547_7559,_STAR_print_newline_STAR__orig_val__7548_7561,_STAR_print_fn_STAR__orig_val__7549_7562,_STAR_print_newline_STAR__temp_val__7550_7563,sb__4572__auto__,dep_7560))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7550_7563;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7551_7564;

try{cljs.compiler.emitln.call(null,cljs.core.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,dep_7560)," = require('",dep_7560,"');");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7549_7562;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7548_7561;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());


var G__7565 = seq__7544_7556;
var G__7566 = chunk__7545_7557;
var G__7567 = count__7546_7558;
var G__7568 = (i__7547_7559 + (1));
seq__7544_7556 = G__7565;
chunk__7545_7557 = G__7566;
count__7546_7558 = G__7567;
i__7547_7559 = G__7568;
continue;
} else {
var temp__5735__auto___7569 = cljs.core.seq.call(null,seq__7544_7556);
if(temp__5735__auto___7569){
var seq__7544_7570__$1 = temp__5735__auto___7569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7544_7570__$1)){
var c__4461__auto___7571 = cljs.core.chunk_first.call(null,seq__7544_7570__$1);
var G__7572 = cljs.core.chunk_rest.call(null,seq__7544_7570__$1);
var G__7573 = c__4461__auto___7571;
var G__7574 = cljs.core.count.call(null,c__4461__auto___7571);
var G__7575 = (0);
seq__7544_7556 = G__7572;
chunk__7545_7557 = G__7573;
count__7546_7558 = G__7574;
i__7547_7559 = G__7575;
continue;
} else {
var dep_7576 = cljs.core.first.call(null,seq__7544_7570__$1);
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7552_7577 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7553_7578 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7554_7579 = true;
var _STAR_print_fn_STAR__temp_val__7555_7580 = ((function (seq__7544_7556,chunk__7545_7557,count__7546_7558,i__7547_7559,_STAR_print_newline_STAR__orig_val__7552_7577,_STAR_print_fn_STAR__orig_val__7553_7578,_STAR_print_newline_STAR__temp_val__7554_7579,sb__4572__auto__,dep_7576,seq__7544_7570__$1,temp__5735__auto___7569){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(seq__7544_7556,chunk__7545_7557,count__7546_7558,i__7547_7559,_STAR_print_newline_STAR__orig_val__7552_7577,_STAR_print_fn_STAR__orig_val__7553_7578,_STAR_print_newline_STAR__temp_val__7554_7579,sb__4572__auto__,dep_7576,seq__7544_7570__$1,temp__5735__auto___7569))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7554_7579;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7555_7580;

try{cljs.compiler.emitln.call(null,cljs.core.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,dep_7576)," = require('",dep_7576,"');");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7553_7578;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7552_7577;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());


var G__7581 = cljs.core.next.call(null,seq__7544_7570__$1);
var G__7582 = null;
var G__7583 = (0);
var G__7584 = (0);
seq__7544_7556 = G__7581;
chunk__7545_7557 = G__7582;
count__7546_7558 = G__7583;
i__7547_7559 = G__7584;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.seq.call(null,deps);
if(and__4036__auto__){
return emit_nil_result_QMARK_;
} else {
return and__4036__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
cljs.js.global_exports_side_effects = (function cljs$js$global_exports_side_effects(bound_vars,sb,deps,ns_name,emit_nil_result_QMARK_){
var map__7585 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var map__7585__$1 = (((((!((map__7585 == null))))?(((((map__7585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7585):map__7585);
var js_dependency_index = cljs.core.get.call(null,map__7585__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var seq__7587_7603 = cljs.core.seq.call(null,deps);
var chunk__7588_7604 = null;
var count__7589_7605 = (0);
var i__7590_7606 = (0);
while(true){
if((i__7590_7606 < count__7589_7605)){
var dep_7607 = cljs.core._nth.call(null,chunk__7588_7604,i__7590_7606);
var map__7591_7608 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,dep_7607));
var map__7591_7609__$1 = (((((!((map__7591_7608 == null))))?(((((map__7591_7608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7591_7608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7591_7608):map__7591_7608);
var global_exports_7610 = cljs.core.get.call(null,map__7591_7609__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7593_7611 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7594_7612 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7595_7613 = true;
var _STAR_print_fn_STAR__temp_val__7596_7614 = ((function (seq__7587_7603,chunk__7588_7604,count__7589_7605,i__7590_7606,_STAR_print_newline_STAR__orig_val__7593_7611,_STAR_print_fn_STAR__orig_val__7594_7612,_STAR_print_newline_STAR__temp_val__7595_7613,sb__4572__auto__,map__7591_7608,map__7591_7609__$1,global_exports_7610,dep_7607,map__7585,map__7585__$1,js_dependency_index){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(seq__7587_7603,chunk__7588_7604,count__7589_7605,i__7590_7606,_STAR_print_newline_STAR__orig_val__7593_7611,_STAR_print_fn_STAR__orig_val__7594_7612,_STAR_print_newline_STAR__temp_val__7595_7613,sb__4572__auto__,map__7591_7608,map__7591_7609__$1,global_exports_7610,dep_7607,map__7585,map__7585__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7595_7613;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7596_7614;

try{cljs.compiler.emit_global_export.call(null,ns_name,global_exports_7610,dep_7607);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7594_7612;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7593_7611;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());


var G__7615 = seq__7587_7603;
var G__7616 = chunk__7588_7604;
var G__7617 = count__7589_7605;
var G__7618 = (i__7590_7606 + (1));
seq__7587_7603 = G__7615;
chunk__7588_7604 = G__7616;
count__7589_7605 = G__7617;
i__7590_7606 = G__7618;
continue;
} else {
var temp__5735__auto___7619 = cljs.core.seq.call(null,seq__7587_7603);
if(temp__5735__auto___7619){
var seq__7587_7620__$1 = temp__5735__auto___7619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7587_7620__$1)){
var c__4461__auto___7621 = cljs.core.chunk_first.call(null,seq__7587_7620__$1);
var G__7622 = cljs.core.chunk_rest.call(null,seq__7587_7620__$1);
var G__7623 = c__4461__auto___7621;
var G__7624 = cljs.core.count.call(null,c__4461__auto___7621);
var G__7625 = (0);
seq__7587_7603 = G__7622;
chunk__7588_7604 = G__7623;
count__7589_7605 = G__7624;
i__7590_7606 = G__7625;
continue;
} else {
var dep_7626 = cljs.core.first.call(null,seq__7587_7620__$1);
var map__7597_7627 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,dep_7626));
var map__7597_7628__$1 = (((((!((map__7597_7627 == null))))?(((((map__7597_7627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7597_7627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7597_7627):map__7597_7627);
var global_exports_7629 = cljs.core.get.call(null,map__7597_7628__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7599_7630 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7600_7631 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7601_7632 = true;
var _STAR_print_fn_STAR__temp_val__7602_7633 = ((function (seq__7587_7603,chunk__7588_7604,count__7589_7605,i__7590_7606,_STAR_print_newline_STAR__orig_val__7599_7630,_STAR_print_fn_STAR__orig_val__7600_7631,_STAR_print_newline_STAR__temp_val__7601_7632,sb__4572__auto__,map__7597_7627,map__7597_7628__$1,global_exports_7629,dep_7626,seq__7587_7620__$1,temp__5735__auto___7619,map__7585,map__7585__$1,js_dependency_index){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(seq__7587_7603,chunk__7588_7604,count__7589_7605,i__7590_7606,_STAR_print_newline_STAR__orig_val__7599_7630,_STAR_print_fn_STAR__orig_val__7600_7631,_STAR_print_newline_STAR__temp_val__7601_7632,sb__4572__auto__,map__7597_7627,map__7597_7628__$1,global_exports_7629,dep_7626,seq__7587_7620__$1,temp__5735__auto___7619,map__7585,map__7585__$1,js_dependency_index))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7601_7632;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7602_7633;

try{cljs.compiler.emit_global_export.call(null,ns_name,global_exports_7629,dep_7626);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7600_7631;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7599_7630;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());


var G__7634 = cljs.core.next.call(null,seq__7587_7620__$1);
var G__7635 = null;
var G__7636 = (0);
var G__7637 = (0);
seq__7587_7603 = G__7634;
chunk__7588_7604 = G__7635;
count__7589_7605 = G__7636;
i__7590_7606 = G__7637;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.seq.call(null,deps);
if(and__4036__auto__){
return emit_nil_result_QMARK_;
} else {
return and__4036__auto__;
}
})())){
return sb.append("null;");
} else {
return null;
}
});
/**
 * Returns a new function that calls f but discards any return value,
 *   returning nil instead, thus avoiding any inadvertent trampoline continuation
 *   if a function happens to be returned.
 */
cljs.js.trampoline_safe = (function cljs$js$trampoline_safe(f){
return cljs.core.comp.call(null,cljs.core.constantly.call(null,null),f);
});
cljs.js.analyze_str_STAR_ = (function cljs$js$analyze_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,source,(1),name);
var cb__$1 = cljs.js.trampoline_safe.call(null,cb);
var eof = {};
var aenv = cljs.analyzer.empty_env.call(null);
var the_ns = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__7640 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__7640,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__7640;
}
})();
return cljs.core.trampoline.call(null,((function (rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
var _STAR_compiler_STAR__orig_val__7641 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR__orig_val__7642 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__7643 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__7644 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__7645 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__7646 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR__orig_val__7647 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_alias_map_STAR__orig_val__7648 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__7649 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__7650 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__7651 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__7652 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__7653 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__7654 = ns;
var _STAR_checked_arrays_STAR__temp_val__7655 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__7656 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__7657 = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4036__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4036__auto__;
}
})();
var _STAR_ns_STAR__temp_val__7658 = cljs.core.create_ns.call(null,ns);
var _STAR_passes_STAR__temp_val__7659 = new cljs.core.Keyword(null,"*passes*","*passes*",1335562782).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_alias_map_STAR__temp_val__7660 = cljs.js.alias_map.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__7661 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__7662 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__7663 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__7664 = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__7653;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__7654;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__7655;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__7656;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__7657;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__7658;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__temp_val__7659;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__7660;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__7661;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__7662;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__7663;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__7664;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read.call(null,eof,rdr)], null);
}catch (e7665){var cause = e7665;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb__$1.call(null,res);
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__7666 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var G__7666__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__7666,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__7666);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__7666__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__7666__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e7667){var cause = e7667;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,["Could not analyze ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb__$1.call(null,res__$1);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.js.trampoline_safe.call(null,cljs.js.ns_side_effects).call(null,bound_vars__$1,aenv__$1,ast,opts,((function (ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7641,_STAR_cljs_ns_STAR__orig_val__7642,_STAR_checked_arrays_STAR__orig_val__7643,_STAR_cljs_static_fns_STAR__orig_val__7644,_STAR_fn_invoke_direct_STAR__orig_val__7645,_STAR_ns_STAR__orig_val__7646,_STAR_passes_STAR__orig_val__7647,_STAR_alias_map_STAR__orig_val__7648,_STAR_data_readers_STAR__orig_val__7649,resolve_symbol_orig_val__7650,_STAR_source_map_data_STAR__orig_val__7651,_STAR_cljs_file_STAR__orig_val__7652,_STAR_compiler_STAR__temp_val__7653,_STAR_cljs_ns_STAR__temp_val__7654,_STAR_checked_arrays_STAR__temp_val__7655,_STAR_cljs_static_fns_STAR__temp_val__7656,_STAR_fn_invoke_direct_STAR__temp_val__7657,_STAR_ns_STAR__temp_val__7658,_STAR_passes_STAR__temp_val__7659,_STAR_alias_map_STAR__temp_val__7660,_STAR_data_readers_STAR__temp_val__7661,resolve_symbol_temp_val__7662,_STAR_source_map_data_STAR__temp_val__7663,_STAR_cljs_file_STAR__temp_val__7664,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb__$1.call(null,res__$2);
} else {
return cljs.core.trampoline.call(null,cljs$js$analyze_str_STAR__$_analyze_loop,ast,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
}
});})(ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7641,_STAR_cljs_ns_STAR__orig_val__7642,_STAR_checked_arrays_STAR__orig_val__7643,_STAR_cljs_static_fns_STAR__orig_val__7644,_STAR_fn_invoke_direct_STAR__orig_val__7645,_STAR_ns_STAR__orig_val__7646,_STAR_passes_STAR__orig_val__7647,_STAR_alias_map_STAR__orig_val__7648,_STAR_data_readers_STAR__orig_val__7649,resolve_symbol_orig_val__7650,_STAR_source_map_data_STAR__orig_val__7651,_STAR_cljs_file_STAR__orig_val__7652,_STAR_compiler_STAR__temp_val__7653,_STAR_cljs_ns_STAR__temp_val__7654,_STAR_checked_arrays_STAR__temp_val__7655,_STAR_cljs_static_fns_STAR__temp_val__7656,_STAR_fn_invoke_direct_STAR__temp_val__7657,_STAR_ns_STAR__temp_val__7658,_STAR_passes_STAR__temp_val__7659,_STAR_alias_map_STAR__temp_val__7660,_STAR_data_readers_STAR__temp_val__7661,resolve_symbol_temp_val__7662,_STAR_source_map_data_STAR__temp_val__7663,_STAR_cljs_file_STAR__temp_val__7664,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
);
} else {
return ((function (ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7641,_STAR_cljs_ns_STAR__orig_val__7642,_STAR_checked_arrays_STAR__orig_val__7643,_STAR_cljs_static_fns_STAR__orig_val__7644,_STAR_fn_invoke_direct_STAR__orig_val__7645,_STAR_ns_STAR__orig_val__7646,_STAR_passes_STAR__orig_val__7647,_STAR_alias_map_STAR__orig_val__7648,_STAR_data_readers_STAR__orig_val__7649,resolve_symbol_orig_val__7650,_STAR_source_map_data_STAR__orig_val__7651,_STAR_cljs_file_STAR__orig_val__7652,_STAR_compiler_STAR__temp_val__7653,_STAR_cljs_ns_STAR__temp_val__7654,_STAR_checked_arrays_STAR__temp_val__7655,_STAR_cljs_static_fns_STAR__temp_val__7656,_STAR_fn_invoke_direct_STAR__temp_val__7657,_STAR_ns_STAR__temp_val__7658,_STAR_passes_STAR__temp_val__7659,_STAR_alias_map_STAR__temp_val__7660,_STAR_data_readers_STAR__temp_val__7661,resolve_symbol_temp_val__7662,_STAR_source_map_data_STAR__temp_val__7663,_STAR_cljs_file_STAR__temp_val__7664,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1){
return (function (){
return cljs$js$analyze_str_STAR__$_analyze_loop.call(null,ast,ns);
});
;})(ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7641,_STAR_cljs_ns_STAR__orig_val__7642,_STAR_checked_arrays_STAR__orig_val__7643,_STAR_cljs_static_fns_STAR__orig_val__7644,_STAR_fn_invoke_direct_STAR__orig_val__7645,_STAR_ns_STAR__orig_val__7646,_STAR_passes_STAR__orig_val__7647,_STAR_alias_map_STAR__orig_val__7648,_STAR_data_readers_STAR__orig_val__7649,resolve_symbol_orig_val__7650,_STAR_source_map_data_STAR__orig_val__7651,_STAR_cljs_file_STAR__orig_val__7652,_STAR_compiler_STAR__temp_val__7653,_STAR_cljs_ns_STAR__temp_val__7654,_STAR_checked_arrays_STAR__temp_val__7655,_STAR_cljs_static_fns_STAR__temp_val__7656,_STAR_fn_invoke_direct_STAR__temp_val__7657,_STAR_ns_STAR__temp_val__7658,_STAR_passes_STAR__temp_val__7659,_STAR_alias_map_STAR__temp_val__7660,_STAR_data_readers_STAR__temp_val__7661,resolve_symbol_temp_val__7662,_STAR_source_map_data_STAR__temp_val__7663,_STAR_cljs_file_STAR__temp_val__7664,rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
}
}
} else {
return cb__$1.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),last_ast], null));
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__7652;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__7651;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__7650;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__7649;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__7648;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR__orig_val__7647;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__7646;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__7645;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__7644;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__7643;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__7642;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__7641;
}});})(rdr,cb__$1,eof,aenv,the_ns,bound_vars__$1))
,null,the_ns);
});
/**
 * Analyze ClojureScript source. The compiler state will be populated with
 * the results of analyzes. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false).
 *                        Defaults to false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value, the actual value is not meaningful. If unsuccessful the
 *   map will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.analyze_str = (function cljs$js$analyze_str(var_args){
var G__7669 = arguments.length;
switch (G__7669) {
case 3:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.analyze_str.call(null,state,source,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.analyze_str.call(null,state,source,name,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.js.atom_QMARK_.call(null,state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_.call(null,name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_.call(null,cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.analyze_str_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*passes*","*passes*",1335562782),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"passes","passes",-2141861841).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.analyzer._STAR_passes_STAR_;
}
})(),new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.analyze_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_STAR_ = (function cljs$js$eval_STAR_(bound_vars,form,opts,cb){
var the_ns = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__7671 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__7671,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__7671;
}
})();
cljs.js.clear_fns_BANG_.call(null);

var _STAR_compiler_STAR__orig_val__7672 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__7673 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__7674 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__7675 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__7676 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__7677 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__7678 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__7679 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__7680 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__7681 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__7682 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__7683 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__7684 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__7685 = new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_checked_arrays_STAR__temp_val__7686 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__7687 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__7688 = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4036__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4036__auto__;
}
})();
var _STAR_ns_STAR__temp_val__7689 = cljs.core.create_ns.call(null,new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_alias_map_STAR__temp_val__7690 = cljs.js.alias_map.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
var _STAR_data_readers_STAR__temp_val__7691 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__7692 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__7693 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__7683;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__7684;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__7685;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__7686;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__7687;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__7688;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__7689;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__7690;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__7691;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__7692;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__7693;

try{var aenv = cljs.analyzer.empty_env.call(null);
var aenv__$1 = (function (){var G__7694 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var G__7694__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__7694,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__7694);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__7694__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__7694__$1;
}
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e7695){var cause = e7695;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
var vec__7696 = ((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__7699 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__7699__$1 = (((((!((map__7699 == null))))?(((((map__7699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7699):map__7699);
var node_libs = cljs.core.get.call(null,map__7699__$1,true);
var libs_to_load = cljs.core.get.call(null,map__7699__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.call(null,vec__7696,(0),null);
var ast__$1 = cljs.core.nth.call(null,vec__7696,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1)))){
return cljs.js.ns_side_effects.call(null,true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,vec__7696,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__7672,_STAR_eval_fn_STAR__orig_val__7673,_STAR_cljs_ns_STAR__orig_val__7674,_STAR_checked_arrays_STAR__orig_val__7675,_STAR_cljs_static_fns_STAR__orig_val__7676,_STAR_fn_invoke_direct_STAR__orig_val__7677,_STAR_ns_STAR__orig_val__7678,_STAR_alias_map_STAR__orig_val__7679,_STAR_data_readers_STAR__orig_val__7680,resolve_symbol_orig_val__7681,_STAR_source_map_data_STAR__orig_val__7682,_STAR_compiler_STAR__temp_val__7683,_STAR_eval_fn_STAR__temp_val__7684,_STAR_cljs_ns_STAR__temp_val__7685,_STAR_checked_arrays_STAR__temp_val__7686,_STAR_cljs_static_fns_STAR__temp_val__7687,_STAR_fn_invoke_direct_STAR__temp_val__7688,_STAR_ns_STAR__temp_val__7689,_STAR_alias_map_STAR__temp_val__7690,_STAR_data_readers_STAR__temp_val__7691,resolve_symbol_temp_val__7692,_STAR_source_map_data_STAR__temp_val__7693,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
var sb = (new goog.string.StringBuffer());
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7701_7709 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7702_7710 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7703_7711 = true;
var _STAR_print_fn_STAR__temp_val__7704_7712 = ((function (_STAR_print_newline_STAR__orig_val__7701_7709,_STAR_print_fn_STAR__orig_val__7702_7710,_STAR_print_newline_STAR__temp_val__7703_7711,sb__4572__auto__,ns_name,sb,ast,vec__7696,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__7672,_STAR_eval_fn_STAR__orig_val__7673,_STAR_cljs_ns_STAR__orig_val__7674,_STAR_checked_arrays_STAR__orig_val__7675,_STAR_cljs_static_fns_STAR__orig_val__7676,_STAR_fn_invoke_direct_STAR__orig_val__7677,_STAR_ns_STAR__orig_val__7678,_STAR_alias_map_STAR__orig_val__7679,_STAR_data_readers_STAR__orig_val__7680,resolve_symbol_orig_val__7681,_STAR_source_map_data_STAR__orig_val__7682,_STAR_compiler_STAR__temp_val__7683,_STAR_eval_fn_STAR__temp_val__7684,_STAR_cljs_ns_STAR__temp_val__7685,_STAR_checked_arrays_STAR__temp_val__7686,_STAR_cljs_static_fns_STAR__temp_val__7687,_STAR_fn_invoke_direct_STAR__temp_val__7688,_STAR_ns_STAR__temp_val__7689,_STAR_alias_map_STAR__temp_val__7690,_STAR_data_readers_STAR__temp_val__7691,resolve_symbol_temp_val__7692,_STAR_source_map_data_STAR__temp_val__7693,the_ns,bound_vars__$1){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__7701_7709,_STAR_print_fn_STAR__orig_val__7702_7710,_STAR_print_newline_STAR__temp_val__7703_7711,sb__4572__auto__,ns_name,sb,ast,vec__7696,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__7672,_STAR_eval_fn_STAR__orig_val__7673,_STAR_cljs_ns_STAR__orig_val__7674,_STAR_checked_arrays_STAR__orig_val__7675,_STAR_cljs_static_fns_STAR__orig_val__7676,_STAR_fn_invoke_direct_STAR__orig_val__7677,_STAR_ns_STAR__orig_val__7678,_STAR_alias_map_STAR__orig_val__7679,_STAR_data_readers_STAR__orig_val__7680,resolve_symbol_orig_val__7681,_STAR_source_map_data_STAR__orig_val__7682,_STAR_compiler_STAR__temp_val__7683,_STAR_eval_fn_STAR__temp_val__7684,_STAR_cljs_ns_STAR__temp_val__7685,_STAR_checked_arrays_STAR__temp_val__7686,_STAR_cljs_static_fns_STAR__temp_val__7687,_STAR_fn_invoke_direct_STAR__temp_val__7688,_STAR_ns_STAR__temp_val__7689,_STAR_alias_map_STAR__temp_val__7690,_STAR_data_readers_STAR__temp_val__7691,resolve_symbol_temp_val__7692,_STAR_source_map_data_STAR__temp_val__7693,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7703_7711;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7704_7712;

try{cljs.compiler.emitln.call(null,["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,ns_name)),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7702_7710;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7701_7709;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects.call(null,bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects.call(null,bound_vars__$1,sb,cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),sb.toString()], null))], null));
}
});})(ast,vec__7696,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__7672,_STAR_eval_fn_STAR__orig_val__7673,_STAR_cljs_ns_STAR__orig_val__7674,_STAR_checked_arrays_STAR__orig_val__7675,_STAR_cljs_static_fns_STAR__orig_val__7676,_STAR_fn_invoke_direct_STAR__orig_val__7677,_STAR_ns_STAR__orig_val__7678,_STAR_alias_map_STAR__orig_val__7679,_STAR_data_readers_STAR__orig_val__7680,resolve_symbol_orig_val__7681,_STAR_source_map_data_STAR__orig_val__7682,_STAR_compiler_STAR__temp_val__7683,_STAR_eval_fn_STAR__temp_val__7684,_STAR_cljs_ns_STAR__temp_val__7685,_STAR_checked_arrays_STAR__temp_val__7686,_STAR_cljs_static_fns_STAR__temp_val__7687,_STAR_fn_invoke_direct_STAR__temp_val__7688,_STAR_ns_STAR__temp_val__7689,_STAR_alias_map_STAR__temp_val__7690,_STAR_data_readers_STAR__temp_val__7691,resolve_symbol_temp_val__7692,_STAR_source_map_data_STAR__temp_val__7693,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7705_7713 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7706_7714 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7707_7715 = true;
var _STAR_print_fn_STAR__temp_val__7708_7716 = ((function (_STAR_print_newline_STAR__orig_val__7705_7713,_STAR_print_fn_STAR__orig_val__7706_7714,_STAR_print_newline_STAR__temp_val__7707_7715,sb__4572__auto__,ast,vec__7696,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__7672,_STAR_eval_fn_STAR__orig_val__7673,_STAR_cljs_ns_STAR__orig_val__7674,_STAR_checked_arrays_STAR__orig_val__7675,_STAR_cljs_static_fns_STAR__orig_val__7676,_STAR_fn_invoke_direct_STAR__orig_val__7677,_STAR_ns_STAR__orig_val__7678,_STAR_alias_map_STAR__orig_val__7679,_STAR_data_readers_STAR__orig_val__7680,resolve_symbol_orig_val__7681,_STAR_source_map_data_STAR__orig_val__7682,_STAR_compiler_STAR__temp_val__7683,_STAR_eval_fn_STAR__temp_val__7684,_STAR_cljs_ns_STAR__temp_val__7685,_STAR_checked_arrays_STAR__temp_val__7686,_STAR_cljs_static_fns_STAR__temp_val__7687,_STAR_fn_invoke_direct_STAR__temp_val__7688,_STAR_ns_STAR__temp_val__7689,_STAR_alias_map_STAR__temp_val__7690,_STAR_data_readers_STAR__temp_val__7691,resolve_symbol_temp_val__7692,_STAR_source_map_data_STAR__temp_val__7693,the_ns,bound_vars__$1){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__7705_7713,_STAR_print_fn_STAR__orig_val__7706_7714,_STAR_print_newline_STAR__temp_val__7707_7715,sb__4572__auto__,ast,vec__7696,node_deps,ast__$1,aenv,aenv__$1,res,_STAR_compiler_STAR__orig_val__7672,_STAR_eval_fn_STAR__orig_val__7673,_STAR_cljs_ns_STAR__orig_val__7674,_STAR_checked_arrays_STAR__orig_val__7675,_STAR_cljs_static_fns_STAR__orig_val__7676,_STAR_fn_invoke_direct_STAR__orig_val__7677,_STAR_ns_STAR__orig_val__7678,_STAR_alias_map_STAR__orig_val__7679,_STAR_data_readers_STAR__orig_val__7680,resolve_symbol_orig_val__7681,_STAR_source_map_data_STAR__orig_val__7682,_STAR_compiler_STAR__temp_val__7683,_STAR_eval_fn_STAR__temp_val__7684,_STAR_cljs_ns_STAR__temp_val__7685,_STAR_checked_arrays_STAR__temp_val__7686,_STAR_cljs_static_fns_STAR__temp_val__7687,_STAR_fn_invoke_direct_STAR__temp_val__7688,_STAR_ns_STAR__temp_val__7689,_STAR_alias_map_STAR__temp_val__7690,_STAR_data_readers_STAR__temp_val__7691,resolve_symbol_temp_val__7692,_STAR_source_map_data_STAR__temp_val__7693,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7707_7715;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7708_7716;

try{cljs.compiler.emit.call(null,ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7706_7714;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7705_7713;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})();
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null))], null));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__7682;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__7681;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__7680;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__7679;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__7678;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__7677;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__7676;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__7675;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__7674;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__7673;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__7672;
}});
/**
 * Evaluate a single ClojureScript form. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * form (s-expr)
 *   the ClojureScript source
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the result of evalution. If unsuccessful the map will
 *   contain a key :error with an ex-info instance describing the cause of
 *   failure.
 */
cljs.js.eval = (function cljs$js$eval(var_args){
var G__7718 = arguments.length;
switch (G__7718) {
case 3:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$3 = (function (state,form,cb){
return cljs.js.eval.call(null,state,form,null,cb);
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$4 = (function (state,form,opts,cb){
return cljs.js.eval_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),form,opts,cb);
});

cljs.js.eval.cljs$lang$maxFixedArity = 4;

cljs.js.compile_str_STAR_ = (function cljs$js$compile_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,source,(1),name);
var cb__$1 = cljs.js.trampoline_safe.call(null,cb);
var eof = {};
var aenv = cljs.analyzer.empty_env.call(null);
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__7722 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__7722,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__7722;
}
})();
return cljs.core.trampoline.call(null,((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__7723 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__7724 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__7725 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__7726 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__7727 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__7728 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__7729 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__7730 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__7731 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__7732 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__7733 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_compiler_STAR__temp_val__7734 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__7735 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__7736 = ns;
var _STAR_checked_arrays_STAR__temp_val__7737 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__7738 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__7739 = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4036__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4036__auto__;
}
})();
var _STAR_ns_STAR__temp_val__7740 = cljs.core.create_ns.call(null,ns);
var _STAR_alias_map_STAR__temp_val__7741 = cljs.js.alias_map.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__7742 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__7743 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__7744 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__7734;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__7735;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__7736;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__7737;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__7738;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__7739;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__7740;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__7741;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__7742;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__7743;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__7744;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read.call(null,eof,rdr)], null);
}catch (e7745){var cause = e7745;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb__$1.call(null,res);
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__7746 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var G__7746__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__7746,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__7746);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__7746__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__7746__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e7747){var cause = e7747;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,["Could not compile ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb__$1.call(null,res__$1);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var vec__7748 = ((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__7751 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__7751__$1 = (((((!((map__7751 == null))))?(((((map__7751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7751):map__7751);
var node_libs = cljs.core.get.call(null,map__7751__$1,true);
var libs_to_load = cljs.core.get.call(null,map__7751__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.call(null,vec__7748,(0),null);
var ast__$1 = cljs.core.nth.call(null,vec__7748,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1)))){
return cljs.js.trampoline_safe.call(null,cljs.js.ns_side_effects).call(null,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,vec__7748,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7723,_STAR_eval_fn_STAR__orig_val__7724,_STAR_cljs_ns_STAR__orig_val__7725,_STAR_checked_arrays_STAR__orig_val__7726,_STAR_cljs_static_fns_STAR__orig_val__7727,_STAR_fn_invoke_direct_STAR__orig_val__7728,_STAR_ns_STAR__orig_val__7729,_STAR_alias_map_STAR__orig_val__7730,_STAR_data_readers_STAR__orig_val__7731,resolve_symbol_orig_val__7732,_STAR_source_map_data_STAR__orig_val__7733,_STAR_compiler_STAR__temp_val__7734,_STAR_eval_fn_STAR__temp_val__7735,_STAR_cljs_ns_STAR__temp_val__7736,_STAR_checked_arrays_STAR__temp_val__7737,_STAR_cljs_static_fns_STAR__temp_val__7738,_STAR_fn_invoke_direct_STAR__temp_val__7739,_STAR_ns_STAR__temp_val__7740,_STAR_alias_map_STAR__temp_val__7741,_STAR_data_readers_STAR__temp_val__7742,resolve_symbol_temp_val__7743,_STAR_source_map_data_STAR__temp_val__7744,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb__$1.call(null,res__$2);
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7753_7761 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7754_7762 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7755_7763 = true;
var _STAR_print_fn_STAR__temp_val__7756_7764 = ((function (_STAR_print_newline_STAR__orig_val__7753_7761,_STAR_print_fn_STAR__orig_val__7754_7762,_STAR_print_newline_STAR__temp_val__7755_7763,sb__4572__auto__,ns_name,ast,vec__7748,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7723,_STAR_eval_fn_STAR__orig_val__7724,_STAR_cljs_ns_STAR__orig_val__7725,_STAR_checked_arrays_STAR__orig_val__7726,_STAR_cljs_static_fns_STAR__orig_val__7727,_STAR_fn_invoke_direct_STAR__orig_val__7728,_STAR_ns_STAR__orig_val__7729,_STAR_alias_map_STAR__orig_val__7730,_STAR_data_readers_STAR__orig_val__7731,resolve_symbol_orig_val__7732,_STAR_source_map_data_STAR__orig_val__7733,_STAR_compiler_STAR__temp_val__7734,_STAR_eval_fn_STAR__temp_val__7735,_STAR_cljs_ns_STAR__temp_val__7736,_STAR_checked_arrays_STAR__temp_val__7737,_STAR_cljs_static_fns_STAR__temp_val__7738,_STAR_fn_invoke_direct_STAR__temp_val__7739,_STAR_ns_STAR__temp_val__7740,_STAR_alias_map_STAR__temp_val__7741,_STAR_data_readers_STAR__temp_val__7742,resolve_symbol_temp_val__7743,_STAR_source_map_data_STAR__temp_val__7744,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__7753_7761,_STAR_print_fn_STAR__orig_val__7754_7762,_STAR_print_newline_STAR__temp_val__7755_7763,sb__4572__auto__,ns_name,ast,vec__7748,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7723,_STAR_eval_fn_STAR__orig_val__7724,_STAR_cljs_ns_STAR__orig_val__7725,_STAR_checked_arrays_STAR__orig_val__7726,_STAR_cljs_static_fns_STAR__orig_val__7727,_STAR_fn_invoke_direct_STAR__orig_val__7728,_STAR_ns_STAR__orig_val__7729,_STAR_alias_map_STAR__orig_val__7730,_STAR_data_readers_STAR__orig_val__7731,resolve_symbol_orig_val__7732,_STAR_source_map_data_STAR__orig_val__7733,_STAR_compiler_STAR__temp_val__7734,_STAR_eval_fn_STAR__temp_val__7735,_STAR_cljs_ns_STAR__temp_val__7736,_STAR_checked_arrays_STAR__temp_val__7737,_STAR_cljs_static_fns_STAR__temp_val__7738,_STAR_fn_invoke_direct_STAR__temp_val__7739,_STAR_ns_STAR__temp_val__7740,_STAR_alias_map_STAR__temp_val__7741,_STAR_data_readers_STAR__temp_val__7742,resolve_symbol_temp_val__7743,_STAR_source_map_data_STAR__temp_val__7744,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7755_7763;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7756_7764;

try{cljs.compiler.emit.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$2));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7754_7762;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7753_7761;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());

if((node_deps == null)){
} else {
cljs.js.node_side_effects.call(null,bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

return cljs.core.trampoline.call(null,cljs$js$compile_str_STAR__$_compile_loop,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1));
}
});})(ast,vec__7748,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7723,_STAR_eval_fn_STAR__orig_val__7724,_STAR_cljs_ns_STAR__orig_val__7725,_STAR_checked_arrays_STAR__orig_val__7726,_STAR_cljs_static_fns_STAR__orig_val__7727,_STAR_fn_invoke_direct_STAR__orig_val__7728,_STAR_ns_STAR__orig_val__7729,_STAR_alias_map_STAR__orig_val__7730,_STAR_data_readers_STAR__orig_val__7731,resolve_symbol_orig_val__7732,_STAR_source_map_data_STAR__orig_val__7733,_STAR_compiler_STAR__temp_val__7734,_STAR_eval_fn_STAR__temp_val__7735,_STAR_cljs_ns_STAR__temp_val__7736,_STAR_checked_arrays_STAR__temp_val__7737,_STAR_cljs_static_fns_STAR__temp_val__7738,_STAR_fn_invoke_direct_STAR__temp_val__7739,_STAR_ns_STAR__temp_val__7740,_STAR_alias_map_STAR__temp_val__7741,_STAR_data_readers_STAR__temp_val__7742,resolve_symbol_temp_val__7743,_STAR_source_map_data_STAR__temp_val__7744,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
);
} else {
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7757_7765 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7758_7766 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7759_7767 = true;
var _STAR_print_fn_STAR__temp_val__7760_7768 = ((function (_STAR_print_newline_STAR__orig_val__7757_7765,_STAR_print_fn_STAR__orig_val__7758_7766,_STAR_print_newline_STAR__temp_val__7759_7767,sb__4572__auto__,ast,vec__7748,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7723,_STAR_eval_fn_STAR__orig_val__7724,_STAR_cljs_ns_STAR__orig_val__7725,_STAR_checked_arrays_STAR__orig_val__7726,_STAR_cljs_static_fns_STAR__orig_val__7727,_STAR_fn_invoke_direct_STAR__orig_val__7728,_STAR_ns_STAR__orig_val__7729,_STAR_alias_map_STAR__orig_val__7730,_STAR_data_readers_STAR__orig_val__7731,resolve_symbol_orig_val__7732,_STAR_source_map_data_STAR__orig_val__7733,_STAR_compiler_STAR__temp_val__7734,_STAR_eval_fn_STAR__temp_val__7735,_STAR_cljs_ns_STAR__temp_val__7736,_STAR_checked_arrays_STAR__temp_val__7737,_STAR_cljs_static_fns_STAR__temp_val__7738,_STAR_fn_invoke_direct_STAR__temp_val__7739,_STAR_ns_STAR__temp_val__7740,_STAR_alias_map_STAR__temp_val__7741,_STAR_data_readers_STAR__temp_val__7742,resolve_symbol_temp_val__7743,_STAR_source_map_data_STAR__temp_val__7744,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__7757_7765,_STAR_print_fn_STAR__orig_val__7758_7766,_STAR_print_newline_STAR__temp_val__7759_7767,sb__4572__auto__,ast,vec__7748,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7723,_STAR_eval_fn_STAR__orig_val__7724,_STAR_cljs_ns_STAR__orig_val__7725,_STAR_checked_arrays_STAR__orig_val__7726,_STAR_cljs_static_fns_STAR__orig_val__7727,_STAR_fn_invoke_direct_STAR__orig_val__7728,_STAR_ns_STAR__orig_val__7729,_STAR_alias_map_STAR__orig_val__7730,_STAR_data_readers_STAR__orig_val__7731,resolve_symbol_orig_val__7732,_STAR_source_map_data_STAR__orig_val__7733,_STAR_compiler_STAR__temp_val__7734,_STAR_eval_fn_STAR__temp_val__7735,_STAR_cljs_ns_STAR__temp_val__7736,_STAR_checked_arrays_STAR__temp_val__7737,_STAR_cljs_static_fns_STAR__temp_val__7738,_STAR_fn_invoke_direct_STAR__temp_val__7739,_STAR_ns_STAR__temp_val__7740,_STAR_alias_map_STAR__temp_val__7741,_STAR_data_readers_STAR__temp_val__7742,resolve_symbol_temp_val__7743,_STAR_source_map_data_STAR__temp_val__7744,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7759_7767;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7760_7768;

try{cljs.compiler.emit.call(null,ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7758_7766;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7757_7765;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());

return ((function (ast,vec__7748,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7723,_STAR_eval_fn_STAR__orig_val__7724,_STAR_cljs_ns_STAR__orig_val__7725,_STAR_checked_arrays_STAR__orig_val__7726,_STAR_cljs_static_fns_STAR__orig_val__7727,_STAR_fn_invoke_direct_STAR__orig_val__7728,_STAR_ns_STAR__orig_val__7729,_STAR_alias_map_STAR__orig_val__7730,_STAR_data_readers_STAR__orig_val__7731,resolve_symbol_orig_val__7732,_STAR_source_map_data_STAR__orig_val__7733,_STAR_compiler_STAR__temp_val__7734,_STAR_eval_fn_STAR__temp_val__7735,_STAR_cljs_ns_STAR__temp_val__7736,_STAR_checked_arrays_STAR__temp_val__7737,_STAR_cljs_static_fns_STAR__temp_val__7738,_STAR_fn_invoke_direct_STAR__temp_val__7739,_STAR_ns_STAR__temp_val__7740,_STAR_alias_map_STAR__temp_val__7741,_STAR_data_readers_STAR__temp_val__7742,resolve_symbol_temp_val__7743,_STAR_source_map_data_STAR__temp_val__7744,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (){
return cljs$js$compile_str_STAR__$_compile_loop.call(null,ns);
});
;})(ast,vec__7748,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7723,_STAR_eval_fn_STAR__orig_val__7724,_STAR_cljs_ns_STAR__orig_val__7725,_STAR_checked_arrays_STAR__orig_val__7726,_STAR_cljs_static_fns_STAR__orig_val__7727,_STAR_fn_invoke_direct_STAR__orig_val__7728,_STAR_ns_STAR__orig_val__7729,_STAR_alias_map_STAR__orig_val__7730,_STAR_data_readers_STAR__orig_val__7731,resolve_symbol_orig_val__7732,_STAR_source_map_data_STAR__orig_val__7733,_STAR_compiler_STAR__temp_val__7734,_STAR_eval_fn_STAR__temp_val__7735,_STAR_cljs_ns_STAR__temp_val__7736,_STAR_checked_arrays_STAR__temp_val__7737,_STAR_cljs_static_fns_STAR__temp_val__7738,_STAR_fn_invoke_direct_STAR__temp_val__7739,_STAR_ns_STAR__temp_val__7740,_STAR_alias_map_STAR__temp_val__7741,_STAR_data_readers_STAR__temp_val__7742,resolve_symbol_temp_val__7743,_STAR_source_map_data_STAR__temp_val__7744,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map.call(null,cljs.env._STAR_compiler_STAR_,name,source,sb,cljs.core.deref.call(null,cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

return cb__$1.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),sb.toString()], null));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__7733;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__7732;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__7731;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__7730;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__7729;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__7728;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__7727;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__7726;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__7725;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__7724;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__7723;
}});})(rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1))
,the_ns);
});
/**
 * Compile ClojureScript source into JavaScript. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol or string)
 *   optional, the name of the source - used as key in :source-maps
 * 
 * opts (map)
 *   compilation options.
 * 
 *    :eval             - eval function to invoke, see *eval-fn*
 *    :load             - library resolution function, see *load-fn*
 *    :source-map       - set to true to generate inline source map information
 *    :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                        (if set to true) or the def init value (if false). Default
 *                        is false.
 *    :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                        to aget/aset. Logs for incorrect values if :warn, throws if
 *                        :error. Defaults to false.
 *    :static-fns       - employ static dispatch to specific function arities in
 *                        emitted JavaScript, as opposed to making use of the
 *                        `call` construct. Defaults to false.
 *    :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                        unknown functions, but instead direct invokes via
 *                        `f(a0,a1...)`. Defaults to `false`.
 *    :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                        at the moment.
 *    :ns               - optional, the namespace in which to evaluate the source.
 *    :verbose          - optional, emit details from compiler activity. Defaults to
 *                        false.
 *    :context          - optional, sets the context for the source. Possible values
 *                        are `:expr`, `:statement` and `:return`. Defaults to
 *                        `:expr`.
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the compilation result (string). If unsuccessful the map
 *   will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.compile_str = (function cljs$js$compile_str(var_args){
var G__7770 = arguments.length;
switch (G__7770) {
case 3:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.compile_str.call(null,state,source,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.compile_str.call(null,state,source,name,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.js.atom_QMARK_.call(null,state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_.call(null,name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_.call(null,cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.compile_str_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))?cljs.js.sm_data.call(null):null)], null),source,name,opts,cb);
});

cljs.js.compile_str.cljs$lang$maxFixedArity = 5;

cljs.js.eval_str_STAR_ = (function cljs$js$eval_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,source,(1),name);
var cb__$1 = cljs.js.trampoline_safe.call(null,cb);
var eof = {};
var aenv = cljs.analyzer.empty_env.call(null);
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4047__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__7774 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__7774,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null));
} else {
return G__7774;
}
})();
var aname = (function (){var G__7775 = name;
if(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.analyzer.macro_ns_name.call(null,G__7775);
} else {
return G__7775;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Evaluating",name);
} else {
}

cljs.js.clear_fns_BANG_.call(null);

return cljs.core.trampoline.call(null,((function (rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
var _STAR_compiler_STAR__orig_val__7776 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR__orig_val__7777 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR__orig_val__7778 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_checked_arrays_STAR__orig_val__7779 = cljs.analyzer._STAR_checked_arrays_STAR_;
var _STAR_cljs_static_fns_STAR__orig_val__7780 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_fn_invoke_direct_STAR__orig_val__7781 = cljs.analyzer._STAR_fn_invoke_direct_STAR_;
var _STAR_ns_STAR__orig_val__7782 = cljs.core._STAR_ns_STAR_;
var _STAR_alias_map_STAR__orig_val__7783 = cljs.tools.reader._STAR_alias_map_STAR_;
var _STAR_data_readers_STAR__orig_val__7784 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol_orig_val__7785 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR__orig_val__7786 = cljs.compiler._STAR_source_map_data_STAR_;
var _STAR_cljs_file_STAR__orig_val__7787 = cljs.analyzer._STAR_cljs_file_STAR_;
var _STAR_compiler_STAR__temp_val__7788 = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_eval_fn_STAR__temp_val__7789 = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_ns_STAR__temp_val__7790 = ns;
var _STAR_checked_arrays_STAR__temp_val__7791 = new cljs.core.Keyword(null,"checked-arrays","checked-arrays",-139154445).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_cljs_static_fns_STAR__temp_val__7792 = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
var _STAR_fn_invoke_direct_STAR__temp_val__7793 = (function (){var and__4036__auto__ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__4036__auto__)){
return new cljs.core.Keyword(null,"fn-invoke-direct","fn-invoke-direct",-1537311210).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4036__auto__;
}
})();
var _STAR_ns_STAR__temp_val__7794 = cljs.core.create_ns.call(null,ns);
var _STAR_alias_map_STAR__temp_val__7795 = cljs.js.alias_map.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),ns);
var _STAR_data_readers_STAR__temp_val__7796 = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var resolve_symbol_temp_val__7797 = cljs.js.resolve_symbol;
var _STAR_source_map_data_STAR__temp_val__7798 = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
var _STAR_cljs_file_STAR__temp_val__7799 = new cljs.core.Keyword(null,"cljs-file","cljs-file",-1499001049).cljs$core$IFn$_invoke$arity$1(opts);
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__7788;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__temp_val__7789;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__temp_val__7790;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__temp_val__7791;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__temp_val__7792;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__temp_val__7793;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__7794;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__temp_val__7795;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__temp_val__7796;

cljs.tools.reader.resolve_symbol = resolve_symbol_temp_val__7797;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__temp_val__7798;

cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__temp_val__7799;

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.js.read.call(null,eof,rdr)], null);
}catch (e7800){var cause = e7800;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb__$1.call(null,res);
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if((!((eof === form)))){
var aenv__$1 = (function (){var G__7801 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,ns));
var G__7801__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__7801,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__7801);
if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.assoc.call(null,G__7801__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true);
} else {
return G__7801__$1;
}
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e7802){var cause = e7802;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,["Could not eval ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb__$1.call(null,res__$1);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
var vec__7803 = ((cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"nodejs","nodejs",321212524)))?(function (){var map__7806 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast));
var map__7806__$1 = (((((!((map__7806 == null))))?(((((map__7806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7806):map__7806);
var node_libs = cljs.core.get.call(null,map__7806__$1,true);
var libs_to_load = cljs.core.get.call(null,map__7806__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"deps","deps",1883360319),libs_to_load)], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ast], null));
var node_deps = cljs.core.nth.call(null,vec__7803,(0),null);
var ast__$1 = cljs.core.nth.call(null,vec__7803,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns*","ns*",200417856),null,new cljs.core.Keyword(null,"ns","ns",441598760),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast__$1)))){
sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7808_7819 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7809_7820 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7810_7821 = true;
var _STAR_print_fn_STAR__temp_val__7811_7822 = ((function (_STAR_print_newline_STAR__orig_val__7808_7819,_STAR_print_fn_STAR__orig_val__7809_7820,_STAR_print_newline_STAR__temp_val__7810_7821,sb__4572__auto__,ast,ns_SINGLEQUOTE_,vec__7803,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7776,_STAR_eval_fn_STAR__orig_val__7777,_STAR_cljs_ns_STAR__orig_val__7778,_STAR_checked_arrays_STAR__orig_val__7779,_STAR_cljs_static_fns_STAR__orig_val__7780,_STAR_fn_invoke_direct_STAR__orig_val__7781,_STAR_ns_STAR__orig_val__7782,_STAR_alias_map_STAR__orig_val__7783,_STAR_data_readers_STAR__orig_val__7784,resolve_symbol_orig_val__7785,_STAR_source_map_data_STAR__orig_val__7786,_STAR_cljs_file_STAR__orig_val__7787,_STAR_compiler_STAR__temp_val__7788,_STAR_eval_fn_STAR__temp_val__7789,_STAR_cljs_ns_STAR__temp_val__7790,_STAR_checked_arrays_STAR__temp_val__7791,_STAR_cljs_static_fns_STAR__temp_val__7792,_STAR_fn_invoke_direct_STAR__temp_val__7793,_STAR_ns_STAR__temp_val__7794,_STAR_alias_map_STAR__temp_val__7795,_STAR_data_readers_STAR__temp_val__7796,resolve_symbol_temp_val__7797,_STAR_source_map_data_STAR__temp_val__7798,_STAR_cljs_file_STAR__temp_val__7799,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__7808_7819,_STAR_print_fn_STAR__orig_val__7809_7820,_STAR_print_newline_STAR__temp_val__7810_7821,sb__4572__auto__,ast,ns_SINGLEQUOTE_,vec__7803,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7776,_STAR_eval_fn_STAR__orig_val__7777,_STAR_cljs_ns_STAR__orig_val__7778,_STAR_checked_arrays_STAR__orig_val__7779,_STAR_cljs_static_fns_STAR__orig_val__7780,_STAR_fn_invoke_direct_STAR__orig_val__7781,_STAR_ns_STAR__orig_val__7782,_STAR_alias_map_STAR__orig_val__7783,_STAR_data_readers_STAR__orig_val__7784,resolve_symbol_orig_val__7785,_STAR_source_map_data_STAR__orig_val__7786,_STAR_cljs_file_STAR__orig_val__7787,_STAR_compiler_STAR__temp_val__7788,_STAR_eval_fn_STAR__temp_val__7789,_STAR_cljs_ns_STAR__temp_val__7790,_STAR_checked_arrays_STAR__temp_val__7791,_STAR_cljs_static_fns_STAR__temp_val__7792,_STAR_fn_invoke_direct_STAR__temp_val__7793,_STAR_ns_STAR__temp_val__7794,_STAR_alias_map_STAR__temp_val__7795,_STAR_data_readers_STAR__temp_val__7796,resolve_symbol_temp_val__7797,_STAR_source_map_data_STAR__temp_val__7798,_STAR_cljs_file_STAR__temp_val__7799,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7810_7821;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7811_7822;

try{cljs.compiler.emitln.call(null,["goog.provide(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1))),"\");"].join(''));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7809_7820;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7808_7819;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());

return cljs.js.trampoline_safe.call(null,cljs.js.ns_side_effects).call(null,true,bound_vars__$1,aenv__$1,ast__$1,opts,((function (ast,ns_SINGLEQUOTE_,vec__7803,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7776,_STAR_eval_fn_STAR__orig_val__7777,_STAR_cljs_ns_STAR__orig_val__7778,_STAR_checked_arrays_STAR__orig_val__7779,_STAR_cljs_static_fns_STAR__orig_val__7780,_STAR_fn_invoke_direct_STAR__orig_val__7781,_STAR_ns_STAR__orig_val__7782,_STAR_alias_map_STAR__orig_val__7783,_STAR_data_readers_STAR__orig_val__7784,resolve_symbol_orig_val__7785,_STAR_source_map_data_STAR__orig_val__7786,_STAR_cljs_file_STAR__orig_val__7787,_STAR_compiler_STAR__temp_val__7788,_STAR_eval_fn_STAR__temp_val__7789,_STAR_cljs_ns_STAR__temp_val__7790,_STAR_checked_arrays_STAR__temp_val__7791,_STAR_cljs_static_fns_STAR__temp_val__7792,_STAR_fn_invoke_direct_STAR__temp_val__7793,_STAR_ns_STAR__temp_val__7794,_STAR_alias_map_STAR__temp_val__7795,_STAR_data_readers_STAR__temp_val__7796,resolve_symbol_temp_val__7797,_STAR_source_map_data_STAR__temp_val__7798,_STAR_cljs_file_STAR__temp_val__7799,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb__$1.call(null,res__$2);
} else {
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast__$1);
if((node_deps == null)){
} else {
cljs.js.node_side_effects.call(null,bound_vars__$1,sb,node_deps,ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));
}

cljs.js.global_exports_side_effects.call(null,bound_vars__$1,sb,cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(ast__$1)),ns_name,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts));

return cljs.core.trampoline.call(null,cljs$js$eval_str_STAR__$_compile_loop,ns_SINGLEQUOTE_);
}
});})(ast,ns_SINGLEQUOTE_,vec__7803,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7776,_STAR_eval_fn_STAR__orig_val__7777,_STAR_cljs_ns_STAR__orig_val__7778,_STAR_checked_arrays_STAR__orig_val__7779,_STAR_cljs_static_fns_STAR__orig_val__7780,_STAR_fn_invoke_direct_STAR__orig_val__7781,_STAR_ns_STAR__orig_val__7782,_STAR_alias_map_STAR__orig_val__7783,_STAR_data_readers_STAR__orig_val__7784,resolve_symbol_orig_val__7785,_STAR_source_map_data_STAR__orig_val__7786,_STAR_cljs_file_STAR__orig_val__7787,_STAR_compiler_STAR__temp_val__7788,_STAR_eval_fn_STAR__temp_val__7789,_STAR_cljs_ns_STAR__temp_val__7790,_STAR_checked_arrays_STAR__temp_val__7791,_STAR_cljs_static_fns_STAR__temp_val__7792,_STAR_fn_invoke_direct_STAR__temp_val__7793,_STAR_ns_STAR__temp_val__7794,_STAR_alias_map_STAR__temp_val__7795,_STAR_data_readers_STAR__temp_val__7796,resolve_symbol_temp_val__7797,_STAR_source_map_data_STAR__temp_val__7798,_STAR_cljs_file_STAR__temp_val__7799,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
);
} else {
var env__1444__auto___7823 = cljs.core.assoc.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1)),new cljs.core.Keyword(null,"options","options",99638489),opts);
var env__1444__auto___7824__$1 = ((cljs.core.map_QMARK_.call(null,env__1444__auto___7823))?cljs.core.atom.call(null,env__1444__auto___7823):(((((env__1444__auto___7823 instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_.call(null,cljs.core.deref.call(null,env__1444__auto___7823)))))?env__1444__auto___7823:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,env__1444__auto___7823))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__7812_7825 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__7813_7826 = env__1444__auto___7824__$1;
cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__7813_7826;

try{sb.append((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7814_7827 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7815_7828 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7816_7829 = true;
var _STAR_print_fn_STAR__temp_val__7817_7830 = ((function (_STAR_print_newline_STAR__orig_val__7814_7827,_STAR_print_fn_STAR__orig_val__7815_7828,_STAR_print_newline_STAR__temp_val__7816_7829,sb__4572__auto__,_STAR_compiler_STAR__orig_val__7812_7825,_STAR_compiler_STAR__temp_val__7813_7826,env__1444__auto___7823,env__1444__auto___7824__$1,ast,ns_SINGLEQUOTE_,vec__7803,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7776,_STAR_eval_fn_STAR__orig_val__7777,_STAR_cljs_ns_STAR__orig_val__7778,_STAR_checked_arrays_STAR__orig_val__7779,_STAR_cljs_static_fns_STAR__orig_val__7780,_STAR_fn_invoke_direct_STAR__orig_val__7781,_STAR_ns_STAR__orig_val__7782,_STAR_alias_map_STAR__orig_val__7783,_STAR_data_readers_STAR__orig_val__7784,resolve_symbol_orig_val__7785,_STAR_source_map_data_STAR__orig_val__7786,_STAR_cljs_file_STAR__orig_val__7787,_STAR_compiler_STAR__temp_val__7788,_STAR_eval_fn_STAR__temp_val__7789,_STAR_cljs_ns_STAR__temp_val__7790,_STAR_checked_arrays_STAR__temp_val__7791,_STAR_cljs_static_fns_STAR__temp_val__7792,_STAR_fn_invoke_direct_STAR__temp_val__7793,_STAR_ns_STAR__temp_val__7794,_STAR_alias_map_STAR__temp_val__7795,_STAR_data_readers_STAR__temp_val__7796,resolve_symbol_temp_val__7797,_STAR_source_map_data_STAR__temp_val__7798,_STAR_cljs_file_STAR__temp_val__7799,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__7814_7827,_STAR_print_fn_STAR__orig_val__7815_7828,_STAR_print_newline_STAR__temp_val__7816_7829,sb__4572__auto__,_STAR_compiler_STAR__orig_val__7812_7825,_STAR_compiler_STAR__temp_val__7813_7826,env__1444__auto___7823,env__1444__auto___7824__$1,ast,ns_SINGLEQUOTE_,vec__7803,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7776,_STAR_eval_fn_STAR__orig_val__7777,_STAR_cljs_ns_STAR__orig_val__7778,_STAR_checked_arrays_STAR__orig_val__7779,_STAR_cljs_static_fns_STAR__orig_val__7780,_STAR_fn_invoke_direct_STAR__orig_val__7781,_STAR_ns_STAR__orig_val__7782,_STAR_alias_map_STAR__orig_val__7783,_STAR_data_readers_STAR__orig_val__7784,resolve_symbol_orig_val__7785,_STAR_source_map_data_STAR__orig_val__7786,_STAR_cljs_file_STAR__orig_val__7787,_STAR_compiler_STAR__temp_val__7788,_STAR_eval_fn_STAR__temp_val__7789,_STAR_cljs_ns_STAR__temp_val__7790,_STAR_checked_arrays_STAR__temp_val__7791,_STAR_cljs_static_fns_STAR__temp_val__7792,_STAR_fn_invoke_direct_STAR__temp_val__7793,_STAR_ns_STAR__temp_val__7794,_STAR_alias_map_STAR__temp_val__7795,_STAR_data_readers_STAR__temp_val__7796,resolve_symbol_temp_val__7797,_STAR_source_map_data_STAR__temp_val__7798,_STAR_cljs_file_STAR__temp_val__7799,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7816_7829;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7817_7830;

try{cljs.compiler.emit.call(null,ast__$1);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7815_7828;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7814_7827;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__7812_7825;
}
return ((function (ast,ns_SINGLEQUOTE_,vec__7803,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7776,_STAR_eval_fn_STAR__orig_val__7777,_STAR_cljs_ns_STAR__orig_val__7778,_STAR_checked_arrays_STAR__orig_val__7779,_STAR_cljs_static_fns_STAR__orig_val__7780,_STAR_fn_invoke_direct_STAR__orig_val__7781,_STAR_ns_STAR__orig_val__7782,_STAR_alias_map_STAR__orig_val__7783,_STAR_data_readers_STAR__orig_val__7784,resolve_symbol_orig_val__7785,_STAR_source_map_data_STAR__orig_val__7786,_STAR_cljs_file_STAR__orig_val__7787,_STAR_compiler_STAR__temp_val__7788,_STAR_eval_fn_STAR__temp_val__7789,_STAR_cljs_ns_STAR__temp_val__7790,_STAR_checked_arrays_STAR__temp_val__7791,_STAR_cljs_static_fns_STAR__temp_val__7792,_STAR_fn_invoke_direct_STAR__temp_val__7793,_STAR_ns_STAR__temp_val__7794,_STAR_alias_map_STAR__temp_val__7795,_STAR_data_readers_STAR__temp_val__7796,resolve_symbol_temp_val__7797,_STAR_source_map_data_STAR__temp_val__7798,_STAR_cljs_file_STAR__temp_val__7799,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (){
return cljs$js$eval_str_STAR__$_compile_loop.call(null,ns_SINGLEQUOTE_);
});
;})(ast,ns_SINGLEQUOTE_,vec__7803,node_deps,ast__$1,aenv__$1,res__$1,form,res,_STAR_compiler_STAR__orig_val__7776,_STAR_eval_fn_STAR__orig_val__7777,_STAR_cljs_ns_STAR__orig_val__7778,_STAR_checked_arrays_STAR__orig_val__7779,_STAR_cljs_static_fns_STAR__orig_val__7780,_STAR_fn_invoke_direct_STAR__orig_val__7781,_STAR_ns_STAR__orig_val__7782,_STAR_alias_map_STAR__orig_val__7783,_STAR_data_readers_STAR__orig_val__7784,resolve_symbol_orig_val__7785,_STAR_source_map_data_STAR__orig_val__7786,_STAR_cljs_file_STAR__orig_val__7787,_STAR_compiler_STAR__temp_val__7788,_STAR_eval_fn_STAR__temp_val__7789,_STAR_cljs_ns_STAR__temp_val__7790,_STAR_checked_arrays_STAR__temp_val__7791,_STAR_cljs_static_fns_STAR__temp_val__7792,_STAR_fn_invoke_direct_STAR__temp_val__7793,_STAR_ns_STAR__temp_val__7794,_STAR_alias_map_STAR__temp_val__7795,_STAR_data_readers_STAR__temp_val__7796,resolve_symbol_temp_val__7797,_STAR_source_map_data_STAR__temp_val__7798,_STAR_cljs_file_STAR__temp_val__7799,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map.call(null,cljs.env._STAR_compiler_STAR_,aname,source,sb,cljs.core.deref.call(null,cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

if((aname instanceof cljs.core.Symbol)){
cljs.analyzer.dump_specs.call(null,aname);
} else {
}

var js_source = sb.toString();
var evalm = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath.call(null,name),new cljs.core.Keyword(null,"source","source",-433931539),js_source,new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),aname], null))], null);
var complete = ((function (js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__7776,_STAR_eval_fn_STAR__orig_val__7777,_STAR_cljs_ns_STAR__orig_val__7778,_STAR_checked_arrays_STAR__orig_val__7779,_STAR_cljs_static_fns_STAR__orig_val__7780,_STAR_fn_invoke_direct_STAR__orig_val__7781,_STAR_ns_STAR__orig_val__7782,_STAR_alias_map_STAR__orig_val__7783,_STAR_data_readers_STAR__orig_val__7784,resolve_symbol_orig_val__7785,_STAR_source_map_data_STAR__orig_val__7786,_STAR_cljs_file_STAR__orig_val__7787,_STAR_compiler_STAR__temp_val__7788,_STAR_eval_fn_STAR__temp_val__7789,_STAR_cljs_ns_STAR__temp_val__7790,_STAR_checked_arrays_STAR__temp_val__7791,_STAR_cljs_static_fns_STAR__temp_val__7792,_STAR_fn_invoke_direct_STAR__temp_val__7793,_STAR_ns_STAR__temp_val__7794,_STAR_alias_map_STAR__temp_val__7795,_STAR_data_readers_STAR__temp_val__7796,resolve_symbol_temp_val__7797,_STAR_source_map_data_STAR__temp_val__7798,_STAR_cljs_file_STAR__temp_val__7799,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb__$1.call(null,res__$1);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,js_source);
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"value","value",305978217),cljs.js._STAR_eval_fn_STAR_.call(null,evalm)], null);
}catch (e7818){var cause = e7818;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,"ERROR",cause));
}})();
return cb__$1.call(null,res__$2);
}
});})(js_source,evalm,form,res,_STAR_compiler_STAR__orig_val__7776,_STAR_eval_fn_STAR__orig_val__7777,_STAR_cljs_ns_STAR__orig_val__7778,_STAR_checked_arrays_STAR__orig_val__7779,_STAR_cljs_static_fns_STAR__orig_val__7780,_STAR_fn_invoke_direct_STAR__orig_val__7781,_STAR_ns_STAR__orig_val__7782,_STAR_alias_map_STAR__orig_val__7783,_STAR_data_readers_STAR__orig_val__7784,resolve_symbol_orig_val__7785,_STAR_source_map_data_STAR__orig_val__7786,_STAR_cljs_file_STAR__orig_val__7787,_STAR_compiler_STAR__temp_val__7788,_STAR_eval_fn_STAR__temp_val__7789,_STAR_cljs_ns_STAR__temp_val__7790,_STAR_checked_arrays_STAR__temp_val__7791,_STAR_cljs_static_fns_STAR__temp_val__7792,_STAR_fn_invoke_direct_STAR__temp_val__7793,_STAR_ns_STAR__temp_val__7794,_STAR_alias_map_STAR__temp_val__7795,_STAR_data_readers_STAR__temp_val__7796,resolve_symbol_temp_val__7797,_STAR_source_map_data_STAR__temp_val__7798,_STAR_cljs_file_STAR__temp_val__7799,rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
;
var temp__5733__auto__ = new cljs.core.Keyword(null,"cache-source","cache-source",-190922003).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return cljs.js.trampoline_safe.call(null,f).call(null,evalm,complete);
} else {
return complete.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}
}finally {cljs.analyzer._STAR_cljs_file_STAR_ = _STAR_cljs_file_STAR__orig_val__7787;

cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR__orig_val__7786;

cljs.tools.reader.resolve_symbol = resolve_symbol_orig_val__7785;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR__orig_val__7784;

cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR__orig_val__7783;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__7782;

cljs.analyzer._STAR_fn_invoke_direct_STAR_ = _STAR_fn_invoke_direct_STAR__orig_val__7781;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR__orig_val__7780;

cljs.analyzer._STAR_checked_arrays_STAR_ = _STAR_checked_arrays_STAR__orig_val__7779;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR__orig_val__7778;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR__orig_val__7777;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__7776;
}});})(rdr,cb__$1,eof,aenv,sb,the_ns,bound_vars__$1,aname))
,new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
});
/**
 * Evalute ClojureScript source given as a string. The parameters:
 * 
 *   state (atom)
 *  the compiler state
 * 
 *   source (string)
 *  the ClojureScript source
 * 
 *   name (symbol or string)
 *  optional, the name of the source - used as key in :source-maps
 * 
 *   opts (map)
 *  compilation options.
 * 
 *  :eval             - eval function to invoke, see *eval-fn*
 *  :load             - library resolution function, see *load-fn*
 *  :source-map       - set to true to generate inline source map information
 *  :cache-source     - optional, a function to run side-effects with the
 *                      compilation result prior to actual evalution. This function
 *                      takes two arguments, the first is the eval map, the source
 *                      will be under :source. The second argument is a callback of
 *                      one argument. If an error occurs an :error key should be
 *                      supplied.
 *  :def-emits-var    - sets whether def (and derived) forms return either a Var
 *                      (if set to true) or the def init value (if false). Default
 *                      is false.
 *  :checked-arrays   - if :warn or :error, checks inferred types and values passed
 *                      to aget/aset. Logs for incorrect values if :warn, throws if
 *                      :error. Defaults to false.
 *  :static-fns       - employ static dispatch to specific function arities in
 *                      emitted JavaScript, as opposed to making use of the
 *                      `call` construct. Defaults to false.
 *  :fn-invoke-direct - if `true`, does not generate `.call(null...)` calls for
 *                      unknown functions, but instead direct invokes via
 *                      `f(a0,a1...)`. Defaults to `false`.
 *  :target           - use `:nodejs` if targeting Node.js. Takes no other options
 *                      at the moment.
 *  :ns               - optional, the namespace in which to evaluate the source.
 *  :verbose          - optional, emit details from compiler activity. Defaults to
 *                      false.
 *  :context          - optional, sets the context for the source. Possible values
 *                   are `:expr`, `:statement` and `:return`. Defaults to
 *                    `:expr`.
 * 
 *   cb (function)
 *  callback, will be invoked with a map. If succesful the map will contain
 *  a :value key with the result of evaluation and :ns the current namespace.
 *  If unsuccessful will contain a :error key with an ex-info instance describing
 *  the cause of failure.
 */
cljs.js.eval_str = (function cljs$js$eval_str(var_args){
var G__7832 = arguments.length;
switch (G__7832) {
case 3:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.eval_str.call(null,state,source,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.eval_str.call(null,state,source,name,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.js.atom_QMARK_.call(null,state)){
} else {
throw (new Error("Assert failed: (atom? state)"));
}

if(typeof source === 'string'){
} else {
throw (new Error("Assert failed: (string? source)"));
}

if(cljs.js.valid_name_QMARK_.call(null,name)){
} else {
throw (new Error("Assert failed: (valid-name? name)"));
}

if(cljs.js.valid_opts_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (valid-opts? opts)"));
}

if(cljs.core.fn_QMARK_.call(null,cb)){
} else {
throw (new Error("Assert failed: (fn? cb)"));
}

return cljs.js.eval_str_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),cljs.analyzer._STAR_cljs_dep_set_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$2(opts,true),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.eval_str.cljs$lang$maxFixedArity = 5;

if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js.fn_index !== 'undefined')){
} else {
cljs.js.fn_index = cljs.core.volatile_BANG_.call(null,(0));
}
if((typeof cljs !== 'undefined') && (typeof cljs.js !== 'undefined') && (typeof cljs.js.fn_refs !== 'undefined')){
} else {
cljs.js.fn_refs = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Clears saved functions.
 */
cljs.js.clear_fns_BANG_ = (function cljs$js$clear_fns_BANG_(){
return cljs.core.vreset_BANG_.call(null,cljs.js.fn_refs,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Saves a function, returning a numeric representation.
 */
cljs.js.put_fn = (function cljs$js$put_fn(f){
var n = cljs.core._vreset_BANG_.call(null,cljs.js.fn_index,(cljs.core._deref.call(null,cljs.js.fn_index) + (1)));
cljs.core._vreset_BANG_.call(null,cljs.js.fn_refs,cljs.core.assoc.call(null,cljs.core._deref.call(null,cljs.js.fn_refs),n,f));

return n;
});
/**
 * Gets a function, given its numeric representation.
 */
cljs.js.get_fn = (function cljs$js$get_fn(n){
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.js.fn_refs),n);
});
cljs.js.emit_fn = (function cljs$js$emit_fn(f){
return cljs.core.print.call(null,"cljs.js.get_fn(",cljs.js.put_fn.call(null,f),")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Function,(function (f){
return cljs.js.emit_fn.call(null,f);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Var,(function (f){
return cljs.js.emit_fn.call(null,f);
}));
cljs.js.eval_impl = (function cljs$js$eval_impl(var_args){
var G__7835 = arguments.length;
switch (G__7835) {
case 1:
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$1 = (function (form){
return cljs.js.eval_impl.call(null,form,cljs.core._STAR_ns_STAR_.name);
});

cljs.js.eval_impl.cljs$core$IFn$_invoke$arity$2 = (function (form,ns){
var result = cljs.core.atom.call(null,null);
var st_7840 = cljs.env._STAR_compiler_STAR_;
cljs.js.eval.call(null,st_7840,form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null),((function (st_7840,result){
return (function (p__7836){
var map__7837 = p__7836;
var map__7837__$1 = (((((!((map__7837 == null))))?(((((map__7837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7837):map__7837);
var value = cljs.core.get.call(null,map__7837__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__7837__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
throw error;
} else {
return cljs.core.reset_BANG_.call(null,result,value);
}
});})(st_7840,result))
);

return cljs.core.deref.call(null,result);
});

cljs.js.eval_impl.cljs$lang$maxFixedArity = 2;

cljs.core._STAR_eval_STAR_ = cljs.js.eval_impl;

//# sourceMappingURL=js.js.map