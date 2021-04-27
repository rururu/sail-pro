// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.spec.alpha');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.spec.gen.alpha');
goog.require('clojure.string');
cljs.spec.alpha.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec.alpha._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec.alpha._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.alpha.Spec = function(){};

cljs.spec.alpha.conform_STAR_ = (function cljs$spec$alpha$conform_STAR_(spec,x){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__4347__auto__ = (((spec == null))?null:spec);
var m__4348__auto__ = (cljs.spec.alpha.conform_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,spec,x);
} else {
var m__4348__auto____$1 = (cljs.spec.alpha.conform_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.alpha.unform_STAR_ = (function cljs$spec$alpha$unform_STAR_(spec,y){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__4347__auto__ = (((spec == null))?null:spec);
var m__4348__auto__ = (cljs.spec.alpha.unform_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,spec,y);
} else {
var m__4348__auto____$1 = (cljs.spec.alpha.unform_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.alpha.explain_STAR_ = (function cljs$spec$alpha$explain_STAR_(spec,path,via,in$,x){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5 == null)))))){
return spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__4347__auto__ = (((spec == null))?null:spec);
var m__4348__auto__ = (cljs.spec.alpha.explain_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,spec,path,via,in$,x);
} else {
var m__4348__auto____$1 = (cljs.spec.alpha.explain_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.alpha.gen_STAR_ = (function cljs$spec$alpha$gen_STAR_(spec,overrides,path,rmap){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4 == null)))))){
return spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__4347__auto__ = (((spec == null))?null:spec);
var m__4348__auto__ = (cljs.spec.alpha.gen_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__4348__auto____$1 = (cljs.spec.alpha.gen_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.alpha.with_gen_STAR_ = (function cljs$spec$alpha$with_gen_STAR_(spec,gfn){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__4347__auto__ = (((spec == null))?null:spec);
var m__4348__auto__ = (cljs.spec.alpha.with_gen_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,spec,gfn);
} else {
var m__4348__auto____$1 = (cljs.spec.alpha.with_gen_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.alpha.describe_STAR_ = (function cljs$spec$alpha$describe_STAR_(spec){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1 == null)))))){
return spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1(spec);
} else {
var x__4347__auto__ = (((spec == null))?null:spec);
var m__4348__auto__ = (cljs.spec.alpha.describe_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,spec);
} else {
var m__4348__auto____$1 = (cljs.spec.alpha.describe_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.registry_ref !== 'undefined')){
} else {
cljs.spec.alpha.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.deep_resolve = (function cljs$spec$alpha$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_.call(null,spec)){
var G__8959 = cljs.core.get.call(null,reg,spec);
spec = G__8959;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve = (function cljs$spec$alpha$reg_resolve(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var reg = cljs.core.deref.call(null,cljs.spec.alpha.registry_ref);
var spec = cljs.core.get.call(null,reg,k);
if((!(cljs.core.ident_QMARK_.call(null,spec)))){
return spec;
} else {
return cljs.spec.alpha.deep_resolve.call(null,reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve_BANG_ = (function cljs$spec$alpha$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__4047__auto__ = cljs.spec.alpha.reg_resolve.call(null,k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.alpha.spec_QMARK_ = (function cljs$spec$alpha$spec_QMARK_(x){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$alpha$Spec$))))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (cljs.spec.alpha) regex op, else logical false
 */
cljs.spec.alpha.regex_QMARK_ = (function cljs$spec$alpha$regex_QMARK_(x){
var and__4036__auto__ = new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__4036__auto__)){
return x;
} else {
return and__4036__auto__;
}
});
cljs.spec.alpha.with_name = (function cljs$spec$alpha$with_name(spec,name){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec))){
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name));
} else {
return null;
}
}
}
});
cljs.spec.alpha.spec_name = (function cljs$spec$alpha$spec_name(spec){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec))){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.alpha.maybe_spec = (function cljs$spec$alpha$maybe_spec(spec_or_k){
var s = (function (){var or__4047__auto__ = (function (){var and__4036__auto__ = cljs.core.ident_QMARK_.call(null,spec_or_k);
if(and__4036__auto__){
return cljs.spec.alpha.reg_resolve.call(null,spec_or_k);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = cljs.spec.alpha.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = cljs.spec.alpha.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,s))){
return cljs.spec.alpha.with_name.call(null,cljs.spec.alpha.regex_spec_impl.call(null,s,null),cljs.spec.alpha.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.alpha.the_spec = (function cljs$spec$alpha$the_spec(spec_or_k){
var or__4047__auto__ = cljs.spec.alpha.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.ident_QMARK_.call(null,spec_or_k)){
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.alpha.fn_sym = (function cljs$spec$alpha$fn_sym(f_n){
if(clojure.string.blank_QMARK_.call(null,f_n)){
return null;
} else {
var xs = cljs.core.map.call(null,cljs.core.demunge,clojure.string.split.call(null,f_n,"$"));
if(((((2) <= cljs.core.count.call(null,xs))) && (cljs.core.every_QMARK_.call(null,((function (xs){
return (function (p1__8963_SHARP_){
return (!(clojure.string.blank_QMARK_.call(null,p1__8963_SHARP_)));
});})(xs))
,xs)))){
var vec__8964 = cljs.core.juxt.call(null,cljs.core.butlast,cljs.core.last).call(null,xs);
var xs__$1 = cljs.core.nth.call(null,vec__8964,(0),null);
var y = cljs.core.nth.call(null,vec__8964,(1),null);
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",xs__$1)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.alpha.Specize = function(){};

cljs.spec.alpha.specize_STAR_ = (function cljs$spec$alpha$specize_STAR_(var_args){
var G__8968 = arguments.length;
switch (G__8968) {
case 1:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$1 == null)))))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((((!((_ == null)))) && ((!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$2 == null)))))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_,form);
} else {
var m__4348__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_,form);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$lang$maxFixedArity = 2;


cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,s__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,s__$1));
});

cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,s__$1,s__$1,null,null);
});

cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,form){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,form,s__$1,null,null);
});

cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,s__$1,s__$1,null,null);
});

cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,form){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,form,s__$1,null,null);
});

goog.object.set(cljs.spec.alpha.Specize,"_",true);

goog.object.set(cljs.spec.alpha.specize_STAR_,"_",(function() {
var G__8970 = null;
var G__8970__1 = (function (o){
var temp__5733__auto__ = (function (){var and__4036__auto__ = cljs.core.fn_QMARK_.call(null,o);
if(and__4036__auto__){
return cljs.spec.alpha.fn_sym.call(null,o.name);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var f_n = temp__5733__auto__;
return cljs.spec.alpha.spec_impl.call(null,f_n,o,null,null);
} else {
return cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818),o,null,null);
}
});
var G__8970__2 = (function (o,form){
return cljs.spec.alpha.spec_impl.call(null,form,o,null,null);
});
G__8970 = function(o,form){
switch(arguments.length){
case 1:
return G__8970__1.call(this,o);
case 2:
return G__8970__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8970.cljs$core$IFn$_invoke$arity$1 = G__8970__1;
G__8970.cljs$core$IFn$_invoke$arity$2 = G__8970__2;
return G__8970;
})()
);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__8972 = arguments.length;
switch (G__8972) {
case 1:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__4047__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.call(null,s);
}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__4047__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.call(null,s,form);
}
});

cljs.spec.alpha.specize.cljs$lang$maxFixedArity = 2;

/**
 * tests the validity of a conform return value
 */
cljs.spec.alpha.invalid_QMARK_ = (function cljs$spec$alpha$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),ret);
});
/**
 * Given a spec and a value, returns :cljs.spec.alpha/invalid if value does
 *   not match spec, else the (possibly destructured) value.
 */
cljs.spec.alpha.conform = (function cljs$spec$alpha$conform(spec,x){
return cljs.spec.alpha.conform_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.alpha.unform = (function cljs$spec$alpha$unform(spec,x){
return cljs.spec.alpha.unform_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.alpha.form = (function cljs$spec$alpha$form(spec){
return cljs.spec.alpha.describe_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec));
});
cljs.spec.alpha.abbrev = (function cljs$spec$alpha$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__4036__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__4036__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if(((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1))))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = (form instanceof cljs.core.Symbol);
if(and__4036__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.alpha.describe = (function cljs$spec$alpha$describe(spec){
return cljs.spec.alpha.abbrev.call(null,cljs.spec.alpha.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.alpha.with_gen = (function cljs$spec$alpha$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.alpha.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375),gen_fn);
} else {
return cljs.spec.alpha.with_gen_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.alpha.explain_data_STAR_ = (function cljs$spec$alpha$explain_data_STAR_(spec,path,via,in$,x){
var temp__5735__auto__ = cljs.spec.alpha.explain_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__5735__auto__)){
var probs = temp__5735__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),probs,new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",1947137578),spec,new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274),x], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.alpha.explain_data = (function cljs$spec$alpha$explain_data(spec,x){
return cljs.spec.alpha.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5733__auto__ = cljs.spec.alpha.spec_name.call(null,spec);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.alpha.explain_printer = (function cljs$spec$alpha$explain_printer(ed){
if(cljs.core.truth_(ed)){
var problems = cljs.core.sort_by.call(null,(function (p1__8975_SHARP_){
return (- cljs.core.count.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__8975_SHARP_)));
}),cljs.core.sort_by.call(null,(function (p1__8974_SHARP_){
return (- cljs.core.count.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(p1__8974_SHARP_)));
}),new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(ed)));
return cljs.core.print.call(null,(function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8976_9008 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8977_9009 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8978_9010 = true;
var _STAR_print_fn_STAR__temp_val__8979_9011 = ((function (_STAR_print_newline_STAR__orig_val__8976_9008,_STAR_print_fn_STAR__orig_val__8977_9009,_STAR_print_newline_STAR__temp_val__8978_9010,sb__4572__auto__,problems){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__8976_9008,_STAR_print_fn_STAR__orig_val__8977_9009,_STAR_print_newline_STAR__temp_val__8978_9010,sb__4572__auto__,problems))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8978_9010;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8979_9011;

try{var seq__8980_9012 = cljs.core.seq.call(null,problems);
var chunk__8981_9013 = null;
var count__8982_9014 = (0);
var i__8983_9015 = (0);
while(true){
if((i__8983_9015 < count__8982_9014)){
var map__8984_9016 = cljs.core._nth.call(null,chunk__8981_9013,i__8983_9015);
var map__8984_9017__$1 = (((((!((map__8984_9016 == null))))?(((((map__8984_9016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8984_9016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8984_9016):map__8984_9016);
var prob_9018 = map__8984_9017__$1;
var path_9019 = cljs.core.get.call(null,map__8984_9017__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_9020 = cljs.core.get.call(null,map__8984_9017__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_9021 = cljs.core.get.call(null,map__8984_9017__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_9022 = cljs.core.get.call(null,map__8984_9017__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_9023 = cljs.core.get.call(null,map__8984_9017__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_9024 = cljs.core.get.call(null,map__8984_9017__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
cljs.core.pr.call(null,val_9021);

cljs.core.print.call(null," - failed: ");

if(cljs.core.truth_(reason_9022)){
cljs.core.print.call(null,reason_9022);
} else {
cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_9020));
}

if(cljs.core.empty_QMARK_.call(null,in_9024)){
} else {
cljs.core.print.call(null,[" in: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,in_9024))].join(''));
}

if(cljs.core.empty_QMARK_.call(null,path_9019)){
} else {
cljs.core.print.call(null,[" at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,path_9019))].join(''));
}

if(cljs.core.empty_QMARK_.call(null,via_9023)){
} else {
cljs.core.print.call(null,[" spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.last.call(null,via_9023)))].join(''));
}

var seq__8986_9025 = cljs.core.seq.call(null,prob_9018);
var chunk__8987_9026 = null;
var count__8988_9027 = (0);
var i__8989_9028 = (0);
while(true){
if((i__8989_9028 < count__8988_9027)){
var vec__8990_9029 = cljs.core._nth.call(null,chunk__8987_9026,i__8989_9028);
var k_9030 = cljs.core.nth.call(null,vec__8990_9029,(0),null);
var v_9031 = cljs.core.nth.call(null,vec__8990_9029,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_9030))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_9030)," ");

cljs.core.pr.call(null,v_9031);
}


var G__9032 = seq__8986_9025;
var G__9033 = chunk__8987_9026;
var G__9034 = count__8988_9027;
var G__9035 = (i__8989_9028 + (1));
seq__8986_9025 = G__9032;
chunk__8987_9026 = G__9033;
count__8988_9027 = G__9034;
i__8989_9028 = G__9035;
continue;
} else {
var temp__5735__auto___9036 = cljs.core.seq.call(null,seq__8986_9025);
if(temp__5735__auto___9036){
var seq__8986_9037__$1 = temp__5735__auto___9036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8986_9037__$1)){
var c__4461__auto___9038 = cljs.core.chunk_first.call(null,seq__8986_9037__$1);
var G__9039 = cljs.core.chunk_rest.call(null,seq__8986_9037__$1);
var G__9040 = c__4461__auto___9038;
var G__9041 = cljs.core.count.call(null,c__4461__auto___9038);
var G__9042 = (0);
seq__8986_9025 = G__9039;
chunk__8987_9026 = G__9040;
count__8988_9027 = G__9041;
i__8989_9028 = G__9042;
continue;
} else {
var vec__8993_9043 = cljs.core.first.call(null,seq__8986_9037__$1);
var k_9044 = cljs.core.nth.call(null,vec__8993_9043,(0),null);
var v_9045 = cljs.core.nth.call(null,vec__8993_9043,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_9044))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_9044)," ");

cljs.core.pr.call(null,v_9045);
}


var G__9046 = cljs.core.next.call(null,seq__8986_9037__$1);
var G__9047 = null;
var G__9048 = (0);
var G__9049 = (0);
seq__8986_9025 = G__9046;
chunk__8987_9026 = G__9047;
count__8988_9027 = G__9048;
i__8989_9028 = G__9049;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);


var G__9050 = seq__8980_9012;
var G__9051 = chunk__8981_9013;
var G__9052 = count__8982_9014;
var G__9053 = (i__8983_9015 + (1));
seq__8980_9012 = G__9050;
chunk__8981_9013 = G__9051;
count__8982_9014 = G__9052;
i__8983_9015 = G__9053;
continue;
} else {
var temp__5735__auto___9054 = cljs.core.seq.call(null,seq__8980_9012);
if(temp__5735__auto___9054){
var seq__8980_9055__$1 = temp__5735__auto___9054;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8980_9055__$1)){
var c__4461__auto___9056 = cljs.core.chunk_first.call(null,seq__8980_9055__$1);
var G__9057 = cljs.core.chunk_rest.call(null,seq__8980_9055__$1);
var G__9058 = c__4461__auto___9056;
var G__9059 = cljs.core.count.call(null,c__4461__auto___9056);
var G__9060 = (0);
seq__8980_9012 = G__9057;
chunk__8981_9013 = G__9058;
count__8982_9014 = G__9059;
i__8983_9015 = G__9060;
continue;
} else {
var map__8996_9061 = cljs.core.first.call(null,seq__8980_9055__$1);
var map__8996_9062__$1 = (((((!((map__8996_9061 == null))))?(((((map__8996_9061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8996_9061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8996_9061):map__8996_9061);
var prob_9063 = map__8996_9062__$1;
var path_9064 = cljs.core.get.call(null,map__8996_9062__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_9065 = cljs.core.get.call(null,map__8996_9062__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_9066 = cljs.core.get.call(null,map__8996_9062__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_9067 = cljs.core.get.call(null,map__8996_9062__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_9068 = cljs.core.get.call(null,map__8996_9062__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_9069 = cljs.core.get.call(null,map__8996_9062__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
cljs.core.pr.call(null,val_9066);

cljs.core.print.call(null," - failed: ");

if(cljs.core.truth_(reason_9067)){
cljs.core.print.call(null,reason_9067);
} else {
cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_9065));
}

if(cljs.core.empty_QMARK_.call(null,in_9069)){
} else {
cljs.core.print.call(null,[" in: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,in_9069))].join(''));
}

if(cljs.core.empty_QMARK_.call(null,path_9064)){
} else {
cljs.core.print.call(null,[" at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,path_9064))].join(''));
}

if(cljs.core.empty_QMARK_.call(null,via_9068)){
} else {
cljs.core.print.call(null,[" spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.last.call(null,via_9068)))].join(''));
}

var seq__8998_9070 = cljs.core.seq.call(null,prob_9063);
var chunk__8999_9071 = null;
var count__9000_9072 = (0);
var i__9001_9073 = (0);
while(true){
if((i__9001_9073 < count__9000_9072)){
var vec__9002_9074 = cljs.core._nth.call(null,chunk__8999_9071,i__9001_9073);
var k_9075 = cljs.core.nth.call(null,vec__9002_9074,(0),null);
var v_9076 = cljs.core.nth.call(null,vec__9002_9074,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_9075))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_9075)," ");

cljs.core.pr.call(null,v_9076);
}


var G__9077 = seq__8998_9070;
var G__9078 = chunk__8999_9071;
var G__9079 = count__9000_9072;
var G__9080 = (i__9001_9073 + (1));
seq__8998_9070 = G__9077;
chunk__8999_9071 = G__9078;
count__9000_9072 = G__9079;
i__9001_9073 = G__9080;
continue;
} else {
var temp__5735__auto___9081__$1 = cljs.core.seq.call(null,seq__8998_9070);
if(temp__5735__auto___9081__$1){
var seq__8998_9082__$1 = temp__5735__auto___9081__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8998_9082__$1)){
var c__4461__auto___9083 = cljs.core.chunk_first.call(null,seq__8998_9082__$1);
var G__9084 = cljs.core.chunk_rest.call(null,seq__8998_9082__$1);
var G__9085 = c__4461__auto___9083;
var G__9086 = cljs.core.count.call(null,c__4461__auto___9083);
var G__9087 = (0);
seq__8998_9070 = G__9084;
chunk__8999_9071 = G__9085;
count__9000_9072 = G__9086;
i__9001_9073 = G__9087;
continue;
} else {
var vec__9005_9088 = cljs.core.first.call(null,seq__8998_9082__$1);
var k_9089 = cljs.core.nth.call(null,vec__9005_9088,(0),null);
var v_9090 = cljs.core.nth.call(null,vec__9005_9088,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_9089))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_9089)," ");

cljs.core.pr.call(null,v_9090);
}


var G__9091 = cljs.core.next.call(null,seq__8998_9082__$1);
var G__9092 = null;
var G__9093 = (0);
var G__9094 = (0);
seq__8998_9070 = G__9091;
chunk__8999_9071 = G__9092;
count__9000_9072 = G__9093;
i__9001_9073 = G__9094;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);


var G__9095 = cljs.core.next.call(null,seq__8980_9055__$1);
var G__9096 = null;
var G__9097 = (0);
var G__9098 = (0);
seq__8980_9012 = G__9095;
chunk__8981_9013 = G__9096;
count__8982_9014 = G__9097;
i__8983_9015 = G__9098;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8977_9009;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8976_9008;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
cljs.spec.alpha._STAR_explain_out_STAR_ = cljs.spec.alpha.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.alpha.explain_out = (function cljs$spec$alpha$explain_out(ed){
return cljs.spec.alpha._STAR_explain_out_STAR_.call(null,ed);
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.alpha.explain = (function cljs$spec$alpha$explain(spec,x){
return cljs.spec.alpha.explain_out.call(null,cljs.spec.alpha.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.alpha.explain_str = (function cljs$spec$alpha$explain_str(spec,x){
var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9099_9103 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9100_9104 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9101_9105 = true;
var _STAR_print_fn_STAR__temp_val__9102_9106 = ((function (_STAR_print_newline_STAR__orig_val__9099_9103,_STAR_print_fn_STAR__orig_val__9100_9104,_STAR_print_newline_STAR__temp_val__9101_9105,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__9099_9103,_STAR_print_fn_STAR__orig_val__9100_9104,_STAR_print_newline_STAR__temp_val__9101_9105,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9101_9105;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9102_9106;

try{cljs.spec.alpha.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9100_9104;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9099_9103;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
});
cljs.spec.alpha.gensub = (function cljs$spec$alpha$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec);
var temp__5733__auto__ = (function (){var or__4047__auto__ = (function (){var temp__5735__auto__ = (function (){var or__4047__auto__ = cljs.core.get.call(null,overrides,(function (){var or__4047__auto__ = cljs.spec.alpha.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var gfn = temp__5735__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.spec.alpha.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var g = temp__5733__auto__;
return cljs.spec.gen.alpha.such_that.call(null,((function (g,temp__5733__auto__,spec__$1){
return (function (p1__9107_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,p1__9107_SHARP_);
});})(g,temp__5733__auto__,spec__$1))
,g,(100));
} else {
throw (new Error(["Unable to construct gen at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.alpha.gen = (function cljs$spec$alpha$gen(var_args){
var G__9109 = arguments.length;
switch (G__9109) {
case 1:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.gen.call(null,spec,null);
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.alpha.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994),cljs.spec.alpha._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.alpha.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.alpha.def_impl = (function cljs$spec$alpha$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.ident_QMARK_.call(null,k);
if(and__4036__auto__){
return cljs.core.namespace.call(null,k);
} else {
return and__4036__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","k must be namespaced keyword or resolveable symbol","\n","(c/and (ident? k) (namespace k))"].join('')));
}

if((spec == null)){
cljs.core.swap_BANG_.call(null,cljs.spec.alpha.registry_ref,cljs.core.dissoc,k);
} else {
var spec_9111__$1 = (cljs.core.truth_((function (){var or__4047__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = cljs.spec.alpha.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.alpha.registry_ref),spec);
}
}
})())?spec:cljs.spec.alpha.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.alpha.registry_ref,cljs.core.assoc,k,cljs.spec.alpha.with_name.call(null,spec_9111__$1,k));
}

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.alpha.registry = (function cljs$spec$alpha$registry(){
return cljs.core.deref.call(null,cljs.spec.alpha.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha.__GT_sym = (function cljs$spec$alpha$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.alpha.get_spec = (function cljs$spec$alpha$get_spec(k){
return cljs.core.get.call(null,cljs.spec.alpha.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.alpha.__GT_sym.call(null,k)));
});
cljs.spec.alpha.macroexpand_check = (function cljs$spec$alpha$macroexpand_check(v,args){
var specs = cljs.spec.alpha.get_spec.call(null,v);
var temp__5735__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__5735__auto__)){
var arg_spec = temp__5735__auto__;
if(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform.call(null,arg_spec,args))){
var ed = cljs.core.assoc.call(null,cljs.spec.alpha.explain_data_STAR_.call(null,arg_spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5733__auto__ = cljs.spec.alpha.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783),args);
throw cljs.core.ex_info.call(null,["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.__GT_sym.call(null,v))," did not conform to spec."].join(''),ed);
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.alpha.recur_limit_QMARK_ = (function cljs$spec$alpha$recur_limit_QMARK_(rmap,id,path,k){
return (((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k)));
});
cljs.spec.alpha.inck = (function cljs$spec$alpha$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__4047__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.alpha.dt = (function cljs$spec$alpha$dt(var_args){
var G__9113 = arguments.length;
switch (G__9113) {
case 3:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.alpha.dt.call(null,pred,x,form,null);
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__5733__auto__ = cljs.spec.alpha.the_spec.call(null,pred);
if(cljs.core.truth_(temp__5733__auto__)){
var spec = temp__5733__auto__;
return cljs.spec.alpha.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,form))," is not a fn, expected predicate fn"].join('')));
}
}
} else {
return x;
}
});

cljs.spec.alpha.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.valid_QMARK_ = (function cljs$spec$alpha$valid_QMARK_(var_args){
var G__9116 = arguments.length;
switch (G__9116) {
case 2:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec);
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform_STAR_.call(null,spec__$1,x))));
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec,form);
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform_STAR_.call(null,spec__$1,x))));
});

cljs.spec.alpha.valid_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.pvalid_QMARK_ = (function cljs$spec$alpha$pvalid_QMARK_(var_args){
var G__9119 = arguments.length;
switch (G__9119) {
case 2:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,pred,x,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818)))));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,pred,x,form))));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.explain_1 = (function cljs$spec$alpha$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.alpha.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.alpha.explain_STAR_.call(null,pred__$1,path,(function (){var temp__5733__auto__ = cljs.spec.alpha.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),form,new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

/**
 * returns a generator for form f, which can be a keyword or a list
 *   starting with 'or or 'and.
 */
cljs.spec.alpha.k_gen = (function cljs$spec$alpha$k_gen(f){
if((f instanceof cljs.core.Keyword)){
return cljs.spec.gen.alpha.return$.call(null,f);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.first.call(null,f))){
return cljs.spec.alpha.or_k_gen.call(null,(1),cljs.core.rest.call(null,f));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,f))){
return cljs.spec.alpha.and_k_gen.call(null,cljs.core.rest.call(null,f));
} else {
return null;
}
}
}
});
/**
 * returns a tuple generator made up of generators for a random subset
 *   of min-count (default 0) to all elements in s.
 */
cljs.spec.alpha.or_k_gen = (function cljs$spec$alpha$or_k_gen(var_args){
var G__9122 = arguments.length;
switch (G__9122) {
case 1:
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.spec.alpha.or_k_gen.call(null,(0),s);
});

cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2 = (function (min_count,s){
return cljs.spec.gen.alpha.bind.call(null,cljs.spec.gen.alpha.tuple.call(null,cljs.spec.gen.alpha.choose.call(null,min_count,cljs.core.count.call(null,s)),cljs.spec.gen.alpha.shuffle.call(null,cljs.core.map.call(null,cljs.spec.alpha.k_gen,s))),(function (p__9123){
var vec__9124 = p__9123;
var n = cljs.core.nth.call(null,vec__9124,(0),null);
var gens = cljs.core.nth.call(null,vec__9124,(1),null);
return cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.take.call(null,n,gens));
}));
});

cljs.spec.alpha.or_k_gen.cljs$lang$maxFixedArity = 2;

/**
 * returns a tuple generator made up of generators for every element
 *   in s.
 */
cljs.spec.alpha.and_k_gen = (function cljs$spec$alpha$and_k_gen(s){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.map.call(null,cljs.spec.alpha.k_gen,s));
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__9131){
var map__9132 = p__9131;
var map__9132__$1 = (((((!((map__9132 == null))))?(((((map__9132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9132):map__9132);
var argm = map__9132__$1;
var opt = cljs.core.get.call(null,map__9132__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__9132__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__9132__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__9132__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__9132__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var keys_pred = cljs.core.get.call(null,map__9132__$1,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739));
var opt_keys = cljs.core.get.call(null,map__9132__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__9132__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__9132__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__9132__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__9132__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__9132__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__9128_SHARP_){
var or__4047__auto__ = k__GT_s.call(null,p1__9128_SHARP_);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return p1__9128_SHARP_;
}
});})(k__GT_s,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha9134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha9134 = (function (keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,map__9132,opt_keys,req_specs,p__9131,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta9135){
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.map__9132 = map__9132;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.p__9131 = p__9131;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta9135 = meta9135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha9134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_9136,meta9135__$1){
var self__ = this;
var _9136__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha9134(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.map__9132,self__.opt_keys,self__.req_specs,self__.p__9131,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta9135__$1));
});})(k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha9134.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_9136){
var self__ = this;
var _9136__$1 = this;
return self__.meta9135;
});})(k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha9134.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9134.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha9134.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha9134.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9134.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.alpha.registry.call(null);
var ret = m;
var G__9143 = m;
var vec__9144 = G__9143;
var seq__9145 = cljs.core.seq.call(null,vec__9144);
var first__9146 = cljs.core.first.call(null,seq__9145);
var seq__9145__$1 = cljs.core.next.call(null,seq__9145);
var vec__9147 = first__9146;
var k = cljs.core.nth.call(null,vec__9147,(0),null);
var v = cljs.core.nth.call(null,vec__9147,(1),null);
var ks = seq__9145__$1;
var keys = vec__9144;
var ret__$1 = ret;
var G__9143__$1 = G__9143;
while(true){
var ret__$2 = ret__$1;
var vec__9150 = G__9143__$1;
var seq__9151 = cljs.core.seq.call(null,vec__9150);
var first__9152 = cljs.core.first.call(null,seq__9151);
var seq__9151__$1 = cljs.core.next.call(null,seq__9151);
var vec__9153 = first__9152;
var k__$1 = cljs.core.nth.call(null,vec__9153,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__9153,(1),null);
var ks__$1 = seq__9151__$1;
var keys__$1 = vec__9150;
if(cljs.core.truth_(keys__$1)){
var sname = self__.keys__GT_specnames.call(null,k__$1);
var temp__5733__auto__ = cljs.core.get.call(null,reg,sname);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
var cv = cljs.spec.alpha.conform.call(null,s,v__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__9175 = (((cv === v__$1))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__9176 = ks__$1;
ret__$1 = G__9175;
G__9143__$1 = G__9176;
continue;
}
} else {
var G__9177 = ret__$2;
var G__9178 = ks__$1;
ret__$1 = G__9177;
G__9143__$1 = G__9178;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha9134.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.alpha.registry.call(null);
var ret = m;
var G__9159 = cljs.core.keys.call(null,m);
var vec__9160 = G__9159;
var seq__9161 = cljs.core.seq.call(null,vec__9160);
var first__9162 = cljs.core.first.call(null,seq__9161);
var seq__9161__$1 = cljs.core.next.call(null,seq__9161);
var k = first__9162;
var ks = seq__9161__$1;
var keys = vec__9160;
var ret__$1 = ret;
var G__9159__$1 = G__9159;
while(true){
var ret__$2 = ret__$1;
var vec__9163 = G__9159__$1;
var seq__9164 = cljs.core.seq.call(null,vec__9163);
var first__9165 = cljs.core.first.call(null,seq__9164);
var seq__9164__$1 = cljs.core.next.call(null,seq__9164);
var k__$1 = first__9165;
var ks__$1 = seq__9164__$1;
var keys__$1 = vec__9163;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.alpha.unform.call(null,self__.keys__GT_specnames.call(null,k__$1),cv);
var G__9179 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__9180 = ks__$1;
ret__$1 = G__9179;
G__9159__$1 = G__9180;
continue;
} else {
var G__9181 = ret__$2;
var G__9182 = ks__$1;
ret__$1 = G__9181;
G__9159__$1 = G__9182;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha9134.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.map_QMARK_.call(null,x)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.alpha.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__5735__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return form;
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__5735__auto__){
var probs = temp__5735__auto__;
return cljs.core.map.call(null,((function (probs,temp__5735__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__9129_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__9129_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__5735__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__9166){
var vec__9167 = p__9166;
var k = cljs.core.nth.call(null,vec__9167,(0),null);
var v = cljs.core.nth.call(null,vec__9167,(1),null);
if(cljs.core.truth_((function (){var or__4047__auto__ = (!(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.spec.alpha.pvalid_QMARK_.call(null,self__.keys__GT_specnames.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,self__.keys__GT_specnames.call(null,k),self__.keys__GT_specnames.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha9134.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
var rgen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k)], null);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var reqs = cljs.core.map.call(null,rgen,self__.req_keys,self__.req_specs);
var opts = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.second,reqs),cljs.core.map.call(null,cljs.core.second,opts)))){
return cljs.spec.gen.alpha.bind.call(null,cljs.spec.gen.alpha.tuple.call(null,cljs.spec.alpha.and_k_gen.call(null,self__.req),cljs.spec.alpha.or_k_gen.call(null,self__.opt),cljs.spec.alpha.and_k_gen.call(null,self__.req_un),cljs.spec.alpha.or_k_gen.call(null,self__.opt_un)),((function (rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__9170){
var vec__9171 = p__9170;
var req_ks = cljs.core.nth.call(null,vec__9171,(0),null);
var opt_ks = cljs.core.nth.call(null,vec__9171,(1),null);
var req_un_ks = cljs.core.nth.call(null,vec__9171,(2),null);
var opt_un_ks = cljs.core.nth.call(null,vec__9171,(3),null);
var qks = cljs.core.flatten.call(null,cljs.core.concat.call(null,req_ks,opt_ks));
var unqks = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.keyword,cljs.core.name),cljs.core.flatten.call(null,cljs.core.concat.call(null,req_un_ks,opt_un_ks)));
return cljs.core.apply.call(null,cljs.spec.gen.alpha.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,((function (qks,unqks,vec__9171,req_ks,opt_ks,req_un_ks,opt_un_ks,rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__9130_SHARP_){
return cljs.core.set.call(null,cljs.core.concat.call(null,qks,unqks)).call(null,cljs.core.first.call(null,p1__9130_SHARP_));
});})(qks,unqks,vec__9171,req_ks,opt_ks,req_un_ks,opt_un_ks,rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.into.call(null,reqs,opts))));
});})(rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha9134.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha9134.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),(function (){var G__9174 = cljs.core.PersistentVector.EMPTY;
var G__9174__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__9174,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__9174);
var G__9174__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__9174__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__9174__$1);
var G__9174__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__9174__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__9174__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__9174__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__9174__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha9134.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys->specnames","keys->specnames",1791294693,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"map__9132","map__9132",-61570900,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"p__9131","p__9131",-1213263248,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta9135","meta9135",-915726444,null)], null);
});})(k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha9134.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha9134.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha9134";

cljs.spec.alpha.t_cljs$spec$alpha9134.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha9134");
});})(k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha9134.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha9134 = ((function (k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha9134(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,map__9132__$2,opt_keys__$1,req_specs__$1,p__9131__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta9135){
return (new cljs.spec.alpha.t_cljs$spec$alpha9134(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,map__9132__$2,opt_keys__$1,req_specs__$1,p__9131__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta9135));
});})(k__GT_s,keys__GT_specnames,id,map__9132,map__9132__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha9134(keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,map__9132__$1,opt_keys,req_specs,p__9131,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.alpha.spec_impl = (function cljs$spec$alpha$spec_impl(var_args){
var G__9184 = arguments.length;
switch (G__9184) {
case 4:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.alpha.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_.call(null,pred))){
var G__9185 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__9185,gfn);
} else {
return G__9185;
}
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,pred))){
return cljs.spec.alpha.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.ident_QMARK_.call(null,pred)){
var G__9186 = cljs.spec.alpha.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__9186,gfn);
} else {
return G__9186;
}
} else {
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha9187 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha9187 = (function (form,pred,gfn,cpred_QMARK_,unc,meta9188){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta9188 = meta9188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha9187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9189,meta9188__$1){
var self__ = this;
var _9189__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha9187(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta9188__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha9187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9189){
var self__ = this;
var _9189__$1 = this;
return self__.meta9188;
});

cljs.spec.alpha.t_cljs$spec$alpha9187.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9187.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha9187.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha9187.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9187.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = self__.pred.call(null,x);
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
});

cljs.spec.alpha.t_cljs$spec$alpha9187.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.alpha.t_cljs$spec$alpha9187.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.alpha.t_cljs$spec$alpha9187.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.alpha.t_cljs$spec$alpha9187.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.alpha.t_cljs$spec$alpha9187.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.alpha.t_cljs$spec$alpha9187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta9188","meta9188",994164047,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha9187.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha9187.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha9187";

cljs.spec.alpha.t_cljs$spec$alpha9187.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha9187");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha9187.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha9187 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha9187(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta9188){
return (new cljs.spec.alpha.t_cljs$spec$alpha9187(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta9188));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha9187(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.alpha.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.alpha.multi_spec_impl = (function cljs$spec$alpha$multi_spec_impl(var_args){
var G__9197 = arguments.length;
switch (G__9197) {
case 3:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.alpha.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__9191_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__4036__auto__ = cljs.core._get_method.call(null,mm,cljs.core._dispatch_fn.call(null,mm).call(null,p1__9191_SHARP_));
if(cljs.core.truth_(and__4036__auto__)){
return mm.call(null,p1__9191_SHARP_);
} else {
return and__4036__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__9192_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__9192_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__9193_SHARP_,p2__9194_SHARP_){
return cljs.core.assoc.call(null,p1__9193_SHARP_,retag,p2__9194_SHARP_);
});})(id,predx,dval))
:retag);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha9198 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha9198 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta9199){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta9199 = meta9199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha9198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_9200,meta9199__$1){
var self__ = this;
var _9200__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha9198(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta9199__$1));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha9198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_9200){
var self__ = this;
var _9200__$1 = this;
return self__.meta9199;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha9198.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9198.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha9198.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha9198.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9198.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__5733__auto__)){
var pred = temp__5733__auto__;
return cljs.spec.alpha.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha9198.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__5733__auto__)){
var pred = temp__5733__auto__;
return cljs.spec.alpha.unform.call(null,pred,x);
} else {
throw (new Error(["No method of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form)," for dispatch value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha9198.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__5733__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__5733__auto__)){
var pred = temp__5733__auto__;
return cljs.spec.alpha.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha9198.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__9201){
var vec__9202 = p__9201;
var k = cljs.core.nth.call(null,vec__9202,(0),null);
var f = cljs.core.nth.call(null,vec__9202,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k)){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__9202,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.gen.alpha.fmap.call(null,((function (rmap__$1,p,vec__9202,k,f,___$1,id,predx,dval,tag){
return (function (p1__9195_SHARP_){
return self__.tag.call(null,p1__9195_SHARP_,k);
});})(rmap__$1,p,vec__9202,k,f,___$1,id,predx,dval,tag))
,cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,(new cljs.core.List(null,new cljs.core.Symbol(null,"method","method",1696235119,null),(new cljs.core.List(null,self__.form,(new cljs.core.List(null,k,null,(1),null)),(2),null)),(3),null))));
});})(rmap__$1,p,vec__9202,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__9205){
var vec__9206 = p__9205;
var k = cljs.core.nth.call(null,vec__9206,(0),null);
return cljs.spec.alpha.invalid_QMARK_.call(null,k);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.gen.alpha.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha9198.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha9198.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),(new cljs.core.List(null,self__.retag,null,(1),null)))));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha9198.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta9199","meta9199",-1373677753,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha9198.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha9198.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha9198";

cljs.spec.alpha.t_cljs$spec$alpha9198.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha9198");
});})(id,predx,dval,tag))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha9198.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha9198 = ((function (id,predx,dval,tag){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha9198(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta9199){
return (new cljs.spec.alpha.t_cljs$spec$alpha9198(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta9199));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha9198(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.alpha.tuple_impl = (function cljs$spec$alpha$tuple_impl(var_args){
var G__9211 = arguments.length;
switch (G__9211) {
case 2:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.alpha.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
}),null));
var cnt = cljs.core.count.call(null,preds);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha9212 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha9212 = (function (forms,preds,gfn,specs,cnt,meta9213){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta9213 = meta9213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha9212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_9214,meta9213__$1){
var self__ = this;
var _9214__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha9212(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta9213__$1));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha9212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_9214){
var self__ = this;
var _9214__$1 = this;
return self__.meta9213;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha9212.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9212.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha9212.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha9212.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9212.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref.call(null,self__.specs);
if((!(((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),self__.cnt)))))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,self__.cnt)){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,i),v);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__9216 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__9217 = (i + (1));
ret = G__9216;
i = G__9217;
continue;
}
}
break;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha9212.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.alpha.unform.call(null,self__.preds.call(null,i),cv);
var G__9218 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__9219 = (i + (1));
ret = G__9218;
i = G__9219;
continue;
}
break;
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha9212.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.vector_QMARK_.call(null,x)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.count.call(null,self__.preds),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha9212.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha9212.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha9212.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),null,(1),null)),self__.forms)));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha9212.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"meta9213","meta9213",-1084881955,null)], null);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha9212.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha9212.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha9212";

cljs.spec.alpha.t_cljs$spec$alpha9212.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha9212");
});})(specs,cnt))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha9212.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha9212 = ((function (specs,cnt){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha9212(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta9213){
return (new cljs.spec.alpha.t_cljs$spec$alpha9212(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta9213));
});})(specs,cnt))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha9212(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.tagged_ret = (function cljs$spec$alpha$tagged_ret(tag,ret){
return (new cljs.core.MapEntry(tag,ret,null));
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.alpha.or_spec_impl = (function cljs$spec$alpha$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
});})(id,kps))
,null));
var cform = (function (){var G__9220 = cljs.core.count.call(null,preds);
switch (G__9220) {
case (2):
return ((function (G__9220,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(1)),ret__$1);
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(0)),ret);
}
});
;})(G__9220,id,kps,specs))

break;
case (3):
return ((function (G__9220,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
var ret__$2 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(2)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$2)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(2)),ret__$2);
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(1)),ret__$1);
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(0)),ret);
}
});
;})(G__9220,id,kps,specs))

break;
default:
return ((function (G__9220,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var spec = specs__$1.call(null,i);
var ret = cljs.spec.alpha.conform_STAR_.call(null,spec,x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
var G__9229 = (i + (1));
i = G__9229;
continue;
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,i),ret);
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
break;
}
});
;})(G__9220,id,kps,specs))

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha9221 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha9221 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta9222){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta9222 = meta9222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha9221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_9223,meta9222__$1){
var self__ = this;
var _9223__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha9221(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta9222__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_9223){
var self__ = this;
var _9223__$1 = this;
return self__.meta9222;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9221.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9221.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9221.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9221.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9221.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9221.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__9224){
var self__ = this;
var vec__9225 = p__9224;
var k = cljs.core.nth.call(null,vec__9225,(0),null);
var x = cljs.core.nth.call(null,vec__9225,(1),null);
var ___$1 = this;
return cljs.spec.alpha.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9221.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9221.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k)){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.call(null,gs);
}
}
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9221.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9221.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),null,(1),null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9221.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta9222","meta9222",-955408539,null)], null);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9221.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha9221.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha9221";

cljs.spec.alpha.t_cljs$spec$alpha9221.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha9221");
});})(id,kps,specs,cform))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha9221.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha9221 = ((function (id,kps,specs,cform){
return (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha9221(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta9222){
return (new cljs.spec.alpha.t_cljs$spec$alpha9221(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta9222));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha9221(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__9236 = preds;
var vec__9238 = G__9236;
var seq__9239 = cljs.core.seq.call(null,vec__9238);
var first__9240 = cljs.core.first.call(null,seq__9239);
var seq__9239__$1 = cljs.core.next.call(null,seq__9239);
var pred = first__9240;
var preds__$1 = seq__9239__$1;
var G__9237 = forms;
var vec__9241 = G__9237;
var seq__9242 = cljs.core.seq.call(null,vec__9241);
var first__9243 = cljs.core.first.call(null,seq__9242);
var seq__9242__$1 = cljs.core.next.call(null,seq__9242);
var form = first__9243;
var forms__$1 = seq__9242__$1;
var ret__$1 = ret;
var G__9236__$1 = G__9236;
var G__9237__$1 = G__9237;
while(true){
var ret__$2 = ret__$1;
var vec__9244 = G__9236__$1;
var seq__9245 = cljs.core.seq.call(null,vec__9244);
var first__9246 = cljs.core.first.call(null,seq__9245);
var seq__9245__$1 = cljs.core.next.call(null,seq__9245);
var pred__$1 = first__9246;
var preds__$2 = seq__9245__$1;
var vec__9247 = G__9237__$1;
var seq__9248 = cljs.core.seq.call(null,vec__9247);
var first__9249 = cljs.core.first.call(null,seq__9248);
var seq__9248__$1 = cljs.core.next.call(null,seq__9248);
var form__$1 = first__9249;
var forms__$2 = seq__9248__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,nret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__9250 = nret;
var G__9251 = preds__$2;
var G__9252 = forms__$2;
ret__$1 = G__9250;
G__9236__$1 = G__9251;
G__9237__$1 = G__9252;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.alpha.explain_pred_list = (function cljs$spec$alpha$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__9259 = forms;
var vec__9261 = G__9259;
var seq__9262 = cljs.core.seq.call(null,vec__9261);
var first__9263 = cljs.core.first.call(null,seq__9262);
var seq__9262__$1 = cljs.core.next.call(null,seq__9262);
var form = first__9263;
var forms__$1 = seq__9262__$1;
var G__9260 = preds;
var vec__9264 = G__9260;
var seq__9265 = cljs.core.seq.call(null,vec__9264);
var first__9266 = cljs.core.first.call(null,seq__9265);
var seq__9265__$1 = cljs.core.next.call(null,seq__9265);
var pred = first__9266;
var preds__$1 = seq__9265__$1;
var ret__$1 = ret;
var G__9259__$1 = G__9259;
var G__9260__$1 = G__9260;
while(true){
var ret__$2 = ret__$1;
var vec__9267 = G__9259__$1;
var seq__9268 = cljs.core.seq.call(null,vec__9267);
var first__9269 = cljs.core.first.call(null,seq__9268);
var seq__9268__$1 = cljs.core.next.call(null,seq__9268);
var form__$1 = first__9269;
var forms__$2 = seq__9268__$1;
var vec__9270 = G__9260__$1;
var seq__9271 = cljs.core.seq.call(null,vec__9270);
var first__9272 = cljs.core.first.call(null,seq__9271);
var seq__9271__$1 = cljs.core.next.call(null,seq__9271);
var pred__$1 = first__9272;
var preds__$2 = seq__9271__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,nret)){
return cljs.spec.alpha.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__9273 = nret;
var G__9274 = forms__$2;
var G__9275 = preds__$2;
ret__$1 = G__9273;
G__9259__$1 = G__9274;
G__9260__$1 = G__9275;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.alpha.and_spec_impl = (function cljs$spec$alpha$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
}),null));
var cform = (function (){var G__9278 = cljs.core.count.call(null,preds);
switch (G__9278) {
case (2):
return ((function (G__9278,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
}
});
;})(G__9278,specs))

break;
case (3):
return ((function (G__9278,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(2)),ret__$1);
}
}
});
;})(G__9278,specs))

break;
default:
return ((function (G__9278,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var nret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,i),ret);
if(cljs.spec.alpha.invalid_QMARK_.call(null,nret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__9283 = nret;
var G__9284 = (i + (1));
ret = G__9283;
i = G__9284;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__9278,specs))

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha9279 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha9279 = (function (forms,preds,gfn,specs,cform,meta9280){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta9280 = meta9280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha9279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_9281,meta9280__$1){
var self__ = this;
var _9281__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha9279(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta9280__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_9281){
var self__ = this;
var _9281__$1 = this;
return self__.meta9280;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9279.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9279.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9279.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9279.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9279.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9279.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1,specs,cform){
return (function (p1__9277_SHARP_,p2__9276_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__9276_SHARP_,p1__9277_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse.call(null,self__.preds));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9279.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9279.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.alpha.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9279.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9279.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),null,(1),null)),self__.forms)));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9279.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta9280","meta9280",1751599079,null)], null);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha9279.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha9279.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha9279";

cljs.spec.alpha.t_cljs$spec$alpha9279.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha9279");
});})(specs,cform))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha9279.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha9279 = ((function (specs,cform){
return (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha9279(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta9280){
return (new cljs.spec.alpha.t_cljs$spec$alpha9279(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta9280));
});})(specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha9279(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.coll_prob = (function cljs$spec$alpha$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__4047__auto__ = kfn;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__4047__auto__ = kform;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if(cljs.core.not.call(null,cljs.spec.alpha.pvalid_QMARK_.call(null,pred,x))){
return cljs.spec.alpha.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = count;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__4036__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = (function (){var or__4047__auto__ = min_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__4036__auto__)){
return (!(((((function (){var or__4047__auto__ = min_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__4047__auto__ = max_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (9007199254740991);
}
})())))));
} else {
return and__4036__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,(function (){var or__4047__auto__ = min_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})(),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(function (){var or__4047__auto__ = max_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (9007199254740991);
}
})(),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = distinct;
if(cljs.core.truth_(and__4036__auto__)){
return (((!(cljs.core.empty_QMARK_.call(null,x)))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x))));
} else {
return and__4036__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.alpha.merge_spec_impl = (function cljs$spec$alpha$merge_spec_impl(forms,preds,gfn){
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha9293 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha9293 = (function (forms,preds,gfn,meta9294){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta9294 = meta9294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha9293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9295,meta9294__$1){
var self__ = this;
var _9295__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha9293(self__.forms,self__.preds,self__.gfn,meta9294__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha9293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9295){
var self__ = this;
var _9295__$1 = this;
return self__.meta9294;
});

cljs.spec.alpha.t_cljs$spec$alpha9293.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9293.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha9293.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha9293.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9293.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__9285_SHARP_,p2__9286_SHARP_){
return cljs.spec.alpha.dt.call(null,p1__9285_SHARP_,x,p2__9286_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.spec.alpha.invalid_QMARK_,ms))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

cljs.spec.alpha.t_cljs$spec$alpha9293.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__9287_SHARP_){
return cljs.spec.alpha.unform.call(null,p1__9287_SHARP_,x);
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

cljs.spec.alpha.t_cljs$spec$alpha9293.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__9288_SHARP_,p2__9289_SHARP_){
return cljs.spec.alpha.explain_1.call(null,p1__9288_SHARP_,p2__9289_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.alpha.t_cljs$spec$alpha9293.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.fmap.call(null,((function (___$1){
return (function (p1__9290_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__9290_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__9291_SHARP_,p2__9292_SHARP_){
return cljs.spec.alpha.gensub.call(null,p1__9291_SHARP_,overrides,path,rmap,p2__9292_SHARP_);
});})(___$1))
,self__.preds,self__.forms)));
}
});

cljs.spec.alpha.t_cljs$spec$alpha9293.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.alpha.t_cljs$spec$alpha9293.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),null,(1),null)),self__.forms)));
});

cljs.spec.alpha.t_cljs$spec$alpha9293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta9294","meta9294",417797365,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha9293.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha9293.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha9293";

cljs.spec.alpha.t_cljs$spec$alpha9293.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha9293");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha9293.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha9293 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha9293(forms__$1,preds__$1,gfn__$1,meta9294){
return (new cljs.spec.alpha.t_cljs$spec$alpha9293(forms__$1,preds__$1,gfn__$1,meta9294));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha9293(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.empty_coll = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null),cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.alpha.every_impl = (function cljs$spec$alpha$every_impl(var_args){
var G__9301 = arguments.length;
switch (G__9301) {
case 3:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.alpha.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__9302,gfn){
var map__9303 = p__9302;
var map__9303__$1 = (((((!((map__9303 == null))))?(((((map__9303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9303):map__9303);
var opts = map__9303__$1;
var max_count = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kind_form = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697));
var gen_max = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var cpred = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218));
var conform_keys = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var describe_form = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911));
var distinct = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kfn = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897));
var count = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_all = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917));
var conform_into = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword(null,"into","into",-150836029));
var gen_into = (cljs.core.truth_(conform_into)?cljs.core.empty.call(null,conform_into):cljs.core.get.call(null,cljs.spec.alpha.empty_coll,kind_form));
var spec = (new cljs.core.Delay(((function (gen_into,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (){
return cljs.spec.alpha.specize.call(null,pred);
});})(gen_into,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,null));
var check_QMARK_ = ((function (gen_into,spec,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__9296_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,cljs.core.deref.call(null,spec),p1__9296_SHARP_);
});})(gen_into,spec,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;
var kfn__$1 = (function (){var or__4047__auto__ = kfn;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return ((function (or__4047__auto__,gen_into,spec,check_QMARK_,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (i,v){
return i;
});
;})(or__4047__auto__,gen_into,spec,check_QMARK_,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
}
})();
var addcv = ((function (gen_into,spec,check_QMARK_,kfn__$1,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(gen_into,spec,check_QMARK_,kfn__$1,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;
var cfns = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (x){
if(((cljs.core.vector_QMARK_.call(null,x)) && (((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__4036__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__4036__auto__){
var or__4047__auto__ = (function (){var and__4036__auto____$1 = kind;
if(cljs.core.truth_(and__4036__auto____$1)){
return cljs.core.not.call(null,conform_into);
} else {
return and__4036__auto____$1;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
} else {
return and__4036__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (ret,i,v,cv){
if((((v === cv)) && (cljs.core.not.call(null,conform_keys)))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.core.identity], null);
} else {
if(((cljs.core.list_QMARK_.call(null,conform_into)) || (cljs.core.seq_QMARK_.call(null,conform_into)) || (((cljs.core.not.call(null,conform_into)) && (((cljs.core.list_QMARK_.call(null,x)) || (cljs.core.seq_QMARK_.call(null,x)))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__9297_SHARP_){
return cljs.core.empty.call(null,(function (){var or__4047__auto__ = conform_into;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return p1__9297_SHARP_;
}
})());
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,addcv,cljs.core.identity], null);

}
}
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha9305 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha9305 = (function (form,max_count,map__9303,check_QMARK_,gfn,gen_max,pred,cpred,p__9302,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta9306){
this.form = form;
this.max_count = max_count;
this.map__9303 = map__9303;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.cpred = cpred;
this.p__9302 = p__9302;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.describe_form = describe_form;
this.distinct = distinct;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta9306 = meta9306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha9305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_9307,meta9306__$1){
var self__ = this;
var _9307__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha9305(self__.form,self__.max_count,self__.map__9303,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.cpred,self__.p__9302,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.distinct,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta9306__$1));
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha9305.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_9307){
var self__ = this;
var _9307__$1 = this;
return self__.meta9306;
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha9305.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9305.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha9305.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha9305.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9305.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref.call(null,self__.spec);
if(cljs.core.not.call(null,self__.cpred.call(null,x))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__9308 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__9308,(0),null);
var add = cljs.core.nth.call(null,vec__9308,(1),null);
var complete = cljs.core.nth.call(null,vec__9308,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__9314 = cljs.core.seq.call(null,x);
var vec__9315 = G__9314;
var seq__9316 = cljs.core.seq.call(null,vec__9315);
var first__9317 = cljs.core.first.call(null,seq__9316);
var seq__9316__$1 = cljs.core.next.call(null,seq__9316);
var v = first__9317;
var vs = seq__9316__$1;
var vseq = vec__9315;
var ret__$1 = ret;
var i__$1 = i;
var G__9314__$1 = G__9314;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__9318 = G__9314__$1;
var seq__9319 = cljs.core.seq.call(null,vec__9318);
var first__9320 = cljs.core.first.call(null,seq__9319);
var seq__9319__$1 = cljs.core.next.call(null,seq__9319);
var v__$1 = first__9320;
var vs__$1 = seq__9319__$1;
var vseq__$1 = vec__9318;
if(vseq__$1){
var cv = cljs.spec.alpha.conform_STAR_.call(null,spec__$1,v__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__9345 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__9346 = (i__$2 + (1));
var G__9347 = vs__$1;
ret__$1 = G__9345;
i__$1 = G__9346;
G__9314__$1 = G__9347;
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__4135__auto__ = (1);
var y__4136__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec.alpha._STAR_coll_check_limit_STAR_));
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,cljs.core.nth.call(null,x,i)))){
var G__9348 = (i + step);
i = G__9348;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
} else {
var limit = cljs.spec.alpha._STAR_coll_check_limit_STAR_;
var i = (0);
var G__9324 = cljs.core.seq.call(null,x);
var vec__9325 = G__9324;
var seq__9326 = cljs.core.seq.call(null,vec__9325);
var first__9327 = cljs.core.first.call(null,seq__9326);
var seq__9326__$1 = cljs.core.next.call(null,seq__9326);
var v = first__9327;
var vs = seq__9326__$1;
var vseq = vec__9325;
var i__$1 = i;
var G__9324__$1 = G__9324;
while(true){
var i__$2 = i__$1;
var vec__9328 = G__9324__$1;
var seq__9329 = cljs.core.seq.call(null,vec__9328);
var first__9330 = cljs.core.first.call(null,seq__9329);
var seq__9329__$1 = cljs.core.next.call(null,seq__9329);
var v__$1 = first__9330;
var vs__$1 = seq__9329__$1;
var vseq__$1 = vec__9328;
if((((vseq__$1 == null)) || (cljs.core._EQ_.call(null,i__$2,limit)))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,v__$1))){
var G__9349 = (i__$2 + (1));
var G__9350 = vs__$1;
i__$1 = G__9349;
G__9324__$1 = G__9350;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);

}
}
break;
}
}

}
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha9305.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.conform_all)){
var spec__$1 = cljs.core.deref.call(null,self__.spec);
var vec__9331 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__9331,(0),null);
var add = cljs.core.nth.call(null,vec__9331,(1),null);
var complete = cljs.core.nth.call(null,vec__9331,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__9337 = cljs.core.seq.call(null,x);
var vec__9338 = G__9337;
var seq__9339 = cljs.core.seq.call(null,vec__9338);
var first__9340 = cljs.core.first.call(null,seq__9339);
var seq__9339__$1 = cljs.core.next.call(null,seq__9339);
var v = first__9340;
var vs = seq__9339__$1;
var vseq = vec__9338;
var ret__$1 = ret;
var i__$1 = i;
var G__9337__$1 = G__9337;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__9341 = G__9337__$1;
var seq__9342 = cljs.core.seq.call(null,vec__9341);
var first__9343 = cljs.core.first.call(null,seq__9342);
var seq__9342__$1 = cljs.core.next.call(null,seq__9342);
var v__$1 = first__9343;
var vs__$1 = seq__9342__$1;
var vseq__$1 = vec__9341;
if((i__$2 >= cljs.core.count.call(null,x))){
return complete.call(null,ret__$2);
} else {
var G__9351 = add.call(null,ret__$2,i__$2,v__$1,cljs.spec.alpha.unform_STAR_.call(null,spec__$1,v__$1));
var G__9352 = (i__$2 + (1));
var G__9353 = vs__$1;
ret__$1 = G__9351;
i__$1 = G__9352;
G__9337__$1 = G__9353;
continue;
}
break;
}
} else {
return x;
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha9305.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = cljs.spec.alpha.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__4047__auto__,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.alpha.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(or__4047__auto__,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.core.range.call(null),x))));
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha9305.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.alpha.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.gen.alpha.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.call(null,self__.gen_into):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.call(null,((function (pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__9298_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__9298_SHARP_)){
return p1__9298_SHARP_;
} else {
return cljs.core.empty.call(null,p1__9298_SHARP_);
}
});})(pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.spec.alpha.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (init){
return cljs.spec.gen.alpha.fmap.call(null,((function (pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__9299_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__9299_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__9299_SHARP_);
}
});})(pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.gen.alpha.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__4047__auto__ = self__.min_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__4047__auto__ = self__.max_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var x__4135__auto__ = self__.gen_max;
var y__4136__auto__ = ((2) * (function (){var or__4047__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return (0);
}
})());
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__4047__auto__ = self__.min_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.gen.alpha.vector.call(null,pgen,(function (){var or__4047__auto__ = self__.min_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (0);
}
})(),(function (){var or__4047__auto__ = self__.max_count;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var x__4135__auto__ = self__.gen_max;
var y__4136__auto__ = ((2) * (function (){var or__4047__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return (0);
}
})());
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
}
})()):cljs.spec.gen.alpha.vector.call(null,pgen,(0),self__.gen_max)
))));
});})(pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
);
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha9305.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha9305.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = self__.describe_form;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha9305.getBasis = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"map__9303","map__9303",-1721224063,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"cpred","cpred",-540353554,null),new cljs.core.Symbol(null,"p__9302","p__9302",-1083189712,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"describe-form","describe-form",-1410156588,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta9306","meta9306",1003069122,null)], null);
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha9305.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha9305.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha9305";

cljs.spec.alpha.t_cljs$spec$alpha9305.cljs$lang$ctorPrWriter = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha9305");
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha9305.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha9305 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha9305(form__$1,max_count__$1,map__9303__$2,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,p__9302__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta9306){
return (new cljs.spec.alpha.t_cljs$spec$alpha9305(form__$1,max_count__$1,map__9303__$2,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,p__9302__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta9306));
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__9303,map__9303__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha9305(form,max_count,map__9303__$1,check_QMARK_,gfn,gen_max,pred,cpred,p__9302,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.alpha.accept = (function cljs$spec$alpha$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__9354){
var map__9355 = p__9354;
var map__9355__$1 = (((((!((map__9355 == null))))?(((((map__9355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9355):map__9355);
var op = cljs.core.get.call(null,map__9355__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__9357){
var map__9358 = p__9357;
var map__9358__$1 = (((((!((map__9358 == null))))?(((((map__9358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9358):map__9358);
var vec__9359 = cljs.core.get.call(null,map__9358__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__9360 = cljs.core.seq.call(null,vec__9359);
var first__9361 = cljs.core.first.call(null,seq__9360);
var seq__9360__$1 = cljs.core.next.call(null,seq__9360);
var p1 = first__9361;
var pr = seq__9360__$1;
var ps = vec__9359;
var vec__9362 = cljs.core.get.call(null,map__9358__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__9363 = cljs.core.seq.call(null,vec__9362);
var first__9364 = cljs.core.first.call(null,seq__9363);
var seq__9363__$1 = cljs.core.next.call(null,seq__9363);
var k1 = first__9364;
var kr = seq__9363__$1;
var ks = vec__9362;
var vec__9365 = cljs.core.get.call(null,map__9358__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__9366 = cljs.core.seq.call(null,vec__9365);
var first__9367 = cljs.core.first.call(null,seq__9366);
var seq__9366__$1 = cljs.core.next.call(null,seq__9366);
var f1 = first__9367;
var fr = seq__9366__$1;
var forms = vec__9365;
var ret = cljs.core.get.call(null,map__9358__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__9358__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.spec.alpha.accept_QMARK_.call(null,p1)){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.alpha.pcat = (function cljs$spec$alpha$pcat(var_args){
var args__4647__auto__ = [];
var len__4641__auto___9370 = arguments.length;
var i__4642__auto___9371 = (0);
while(true){
if((i__4642__auto___9371 < len__4641__auto___9370)){
args__4647__auto__.push((arguments[i__4642__auto___9371]));

var G__9372 = (i__4642__auto___9371 + (1));
i__4642__auto___9371 = G__9372;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.alpha.pcat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq9369){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9369));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.alpha.cat_impl = (function cljs$spec$alpha$cat_impl(ks,ps,forms){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.alpha.rep_STAR_ = (function cljs$spec$alpha$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.spec.alpha.accept_QMARK_.call(null,p1)){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.alpha.rep_impl = (function cljs$spec$alpha$rep_impl(form,p){
return cljs.spec.alpha.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.alpha.rep_PLUS_impl = (function cljs$spec$alpha$rep_PLUS_impl(form,p){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)))))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.alpha.amp_impl = (function cljs$spec$alpha$amp_impl(re,re_form,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"amp","amp",271690571),re_form,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.alpha.filter_alt = (function cljs$spec$alpha$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__4047__auto__ = ks;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__9373_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__9373_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__4047__auto__ = cljs.core.seq.call(null,ks);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4047__auto__ = cljs.core.seq.call(null,forms);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__9374_SHARP_){
return cljs.core.nth.call(null,p1__9374_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alpha.alt_STAR_ = (function cljs$spec$alpha$alt_STAR_(ps,ks,forms){
var vec__9375 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__9378 = cljs.core.nth.call(null,vec__9375,(0),null);
var seq__9379 = cljs.core.seq.call(null,vec__9378);
var first__9380 = cljs.core.first.call(null,seq__9379);
var seq__9379__$1 = cljs.core.next.call(null,seq__9379);
var p1 = first__9380;
var pr = seq__9379__$1;
var ps__$1 = vec__9378;
var vec__9381 = cljs.core.nth.call(null,vec__9375,(1),null);
var k1 = cljs.core.nth.call(null,vec__9381,(0),null);
var ks__$1 = vec__9381;
var forms__$1 = cljs.core.nth.call(null,vec__9375,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.spec.alpha.accept_QMARK_.call(null,p1)){
return cljs.spec.alpha.accept.call(null,cljs.spec.alpha.tagged_ret.call(null,k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alpha.alts = (function cljs$spec$alpha$alts(var_args){
var args__4647__auto__ = [];
var len__4641__auto___9385 = arguments.length;
var i__4642__auto___9386 = (0);
while(true){
if((i__4642__auto___9386 < len__4641__auto___9385)){
args__4647__auto__.push((arguments[i__4642__auto___9386]));

var G__9387 = (i__4642__auto___9386 + (1));
i__4642__auto___9386 = G__9387;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alpha.alts.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq9384){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9384));
});

cljs.spec.alpha.alt2 = (function cljs$spec$alpha$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__4036__auto__ = p1;
if(cljs.core.truth_(and__4036__auto__)){
return p2;
} else {
return and__4036__auto__;
}
})())){
return cljs.spec.alpha.alts.call(null,p1,p2);
} else {
var or__4047__auto__ = p1;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alpha.alt_impl = (function cljs$spec$alpha$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alpha.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.alpha.maybe_impl = (function cljs$spec$alpha$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alpha.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.accept.call(null,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.alpha.noret_QMARK_ = (function cljs$spec$alpha$noret_QMARK_(p1,pret){
var or__4047__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950));
if(or__4047__auto__){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = (function (){var and__4036__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),null], null), null).call(null,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return null;
}
}
});
cljs.spec.alpha.accept_nil_QMARK_ = (function cljs$spec$alpha$accept_nil_QMARK_(p){
var map__9388 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__9388__$1 = (((((!((map__9388 == null))))?(((((map__9388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9388):map__9388);
var p__$1 = map__9388__$1;
var op = cljs.core.get.call(null,map__9388__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__9388__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__9388__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__9388__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__9388__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__9390 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__9390)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__9390)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__9390)){
var and__4036__auto__ = cljs.spec.alpha.accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__4036__auto__)){
var ret = cljs.spec.alpha.and_preds.call(null,cljs.spec.alpha.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,ret)));
} else {
return and__4036__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__9390)){
var or__4047__auto__ = (p1 === p2);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__9390)){
return cljs.core.every_QMARK_.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__9390)){
return cljs.core.some.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9390)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.preturn = (function cljs$spec$alpha$preturn(p){
var map__9391 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__9391__$1 = (((((!((map__9391 == null))))?(((((map__9391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9391):map__9391);
var p__$1 = map__9391__$1;
var vec__9392 = cljs.core.get.call(null,map__9391__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__9393 = cljs.core.seq.call(null,vec__9392);
var first__9394 = cljs.core.first.call(null,seq__9393);
var seq__9393__$1 = cljs.core.next.call(null,seq__9393);
var p0 = first__9394;
var pr = seq__9393__$1;
var ps = vec__9392;
var vec__9395 = cljs.core.get.call(null,map__9391__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__9395,(0),null);
var ks = vec__9395;
var op = cljs.core.get.call(null,map__9391__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__9391__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__9391__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__9391__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__9399 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__9399)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__9399)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__9399)){
var pret = cljs.spec.alpha.preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.alpha.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950);
} else {
return cljs.spec.alpha.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__9399)){
return cljs.spec.alpha.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__9399)){
return cljs.spec.alpha.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__9399)){
var vec__9400 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__9403 = cljs.core.nth.call(null,vec__9400,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__9403,(0),null);
var vec__9406 = cljs.core.nth.call(null,vec__9400,(1),null);
var k0 = cljs.core.nth.call(null,vec__9406,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950):cljs.spec.alpha.preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.alpha.tagged_ret.call(null,k0,r);
} else {
return r;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9399)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.op_unform = (function cljs$spec$alpha$op_unform(p,x){
var map__9413 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__9413__$1 = (((((!((map__9413 == null))))?(((((map__9413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9413):map__9413);
var p__$1 = map__9413__$1;
var vec__9414 = cljs.core.get.call(null,map__9413__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__9415 = cljs.core.seq.call(null,vec__9414);
var first__9416 = cljs.core.first.call(null,seq__9415);
var seq__9415__$1 = cljs.core.next.call(null,seq__9415);
var p0 = first__9416;
var pr = seq__9415__$1;
var ps = vec__9414;
var vec__9417 = cljs.core.get.call(null,map__9413__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__9417,(0),null);
var ks = vec__9417;
var op = cljs.core.get.call(null,map__9413__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__9413__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__9413__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__9413__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__9413__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__9413__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__9421 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__9421)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__9421)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__9421)){
var px = cljs.core.reduce.call(null,((function (G__9421,map__9413,map__9413__$1,p__$1,vec__9414,seq__9415,first__9416,seq__9415__$1,p0,pr,ps,vec__9417,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__9410_SHARP_,p2__9409_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__9409_SHARP_,p1__9410_SHARP_);
});})(G__9421,map__9413,map__9413__$1,p__$1,vec__9414,seq__9415,first__9416,seq__9415__$1,p0,pr,ps,vec__9417,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs.spec.alpha.op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__9421)){
return cljs.core.mapcat.call(null,((function (G__9421,map__9413,map__9413__$1,p__$1,vec__9414,seq__9415,first__9416,seq__9415__$1,p0,pr,ps,vec__9417,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__9411_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p1,p1__9411_SHARP_);
});})(G__9421,map__9413,map__9413__$1,p__$1,vec__9414,seq__9415,first__9416,seq__9415__$1,p0,pr,ps,vec__9417,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__9421)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__9421,map__9413,map__9413__$1,p__$1,vec__9414,seq__9415,first__9416,seq__9415__$1,p0,pr,ps,vec__9417,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__9412_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p0,p1__9412_SHARP_);
});})(G__9421,map__9413,map__9413__$1,p__$1,vec__9414,seq__9415,first__9416,seq__9415__$1,p0,pr,ps,vec__9417,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__9421,map__9413,map__9413__$1,p__$1,vec__9414,seq__9415,first__9416,seq__9415__$1,p0,pr,ps,vec__9417,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__9421,map__9413,map__9413__$1,p__$1,vec__9414,seq__9415,first__9416,seq__9415__$1,p0,pr,ps,vec__9417,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__9421)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p0,x)], null);
} else {
var vec__9422 = x;
var k__$1 = cljs.core.nth.call(null,vec__9422,(0),null);
var v = cljs.core.nth.call(null,vec__9422,(1),null);
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9421)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.add_ret = (function cljs$spec$alpha$add_ret(p,r,k){
var map__9425 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__9425__$1 = (((((!((map__9425 == null))))?(((((map__9425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9425):map__9425);
var p__$1 = map__9425__$1;
var op = cljs.core.get.call(null,map__9425__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__9425__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__9425__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__9425,map__9425__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
});})(map__9425,map__9425__$1,p__$1,op,ps,splice))
;
var G__9427 = op;
if(cljs.core._EQ_.call(null,null,G__9427)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__9427)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__9427)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__9427)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__9427)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__9427)){
return prop.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9427)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.deriv = (function cljs$spec$alpha$deriv(p,x){
var map__9429 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__9429__$1 = (((((!((map__9429 == null))))?(((((map__9429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9429):map__9429);
var p__$1 = map__9429__$1;
var forms = cljs.core.get.call(null,map__9429__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__9429__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var vec__9430 = cljs.core.get.call(null,map__9429__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__9431 = cljs.core.seq.call(null,vec__9430);
var first__9432 = cljs.core.first.call(null,seq__9431);
var seq__9431__$1 = cljs.core.next.call(null,seq__9431);
var p0 = first__9432;
var pr = seq__9431__$1;
var ps = vec__9430;
var ret = cljs.core.get.call(null,map__9429__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var op = cljs.core.get.call(null,map__9429__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__9429__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var vec__9433 = cljs.core.get.call(null,map__9429__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__9434 = cljs.core.seq.call(null,vec__9433);
var first__9435 = cljs.core.first.call(null,seq__9434);
var seq__9434__$1 = cljs.core.next.call(null,seq__9434);
var k0 = first__9435;
var kr = seq__9434__$1;
var ks = vec__9433;
var amp = cljs.core.get.call(null,map__9429__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var p1 = cljs.core.get.call(null,map__9429__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
if(cljs.core.truth_(p__$1)){
var G__9437 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__9437)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__9437)){
var ret__$1 = cljs.spec.alpha.dt.call(null,p__$1,x,p__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return null;
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__9437)){
var temp__5735__auto__ = cljs.spec.alpha.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__5735__auto__)){
var p1__$1 = temp__5735__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.alpha.and_preds.call(null,cljs.spec.alpha.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return null;
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
return cljs.spec.alpha.amp_impl.call(null,p1__$1,amp,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__9437)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs.spec.alpha.deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p0))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.alpha.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__9437)){
return cljs.spec.alpha.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__9437,map__9429,map__9429__$1,p__$1,forms,p2,vec__9430,seq__9431,first__9432,seq__9431__$1,p0,pr,ps,ret,op,splice,vec__9433,seq__9434,first__9435,seq__9434__$1,k0,kr,ks,amp,p1){
return (function (p1__9428_SHARP_){
return cljs.spec.alpha.deriv.call(null,p1__9428_SHARP_,x);
});})(G__9437,map__9429,map__9429__$1,p__$1,forms,p2,vec__9430,seq__9431,first__9432,seq__9431__$1,p0,pr,ps,ret,op,splice,vec__9433,seq__9434,first__9435,seq__9434__$1,k0,kr,ks,amp,p1))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__9437)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.rep_STAR_.call(null,cljs.spec.alpha.deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p1))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.rep_STAR_.call(null,p2,p2,cljs.spec.alpha.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9437)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_describe = (function cljs$spec$alpha$op_describe(p){
var map__9438 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__9438__$1 = (((((!((map__9438 == null))))?(((((map__9438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9438):map__9438);
var p__$1 = map__9438__$1;
var ps = cljs.core.get.call(null,map__9438__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__9438__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__9438__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var op = cljs.core.get.call(null,map__9438__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__9438__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__9438__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var maybe = cljs.core.get.call(null,map__9438__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var amp = cljs.core.get.call(null,map__9438__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var p1 = cljs.core.get.call(null,map__9438__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
if(cljs.core.truth_(p__$1)){
var G__9440 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__9440)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__9440)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__9440)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.spec.alpha","&","cljs.spec.alpha/&",1635809823,null),amp,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__9440)){
if(cljs.core.truth_(rep_PLUS_)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),(new cljs.core.List(null,rep_PLUS_,null,(1),null)),(2),null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__4047__auto__ = cljs.core.seq.call(null,ks);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__9440)){
if(cljs.core.truth_(maybe)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),(new cljs.core.List(null,maybe,null,(1),null)),(2),null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","alt","cljs.spec.alpha/alt",-2130750332,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__9440)){
return (new cljs.core.List(null,(cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null):new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null)),(new cljs.core.List(null,forms,null,(1),null)),(2),null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9440)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_explain = (function cljs$spec$alpha$op_explain(form,p,path,via,in$,input){
var vec__9441 = input;
var x = cljs.core.nth.call(null,vec__9441,(0),null);
var input__$1 = vec__9441;
var map__9444 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__9444__$1 = (((((!((map__9444 == null))))?(((((map__9444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9444):map__9444);
var p__$1 = map__9444__$1;
var op = cljs.core.get.call(null,map__9444__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__9444__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__9444__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__9444__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__9444__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__9444__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__9444__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__5733__auto__ = cljs.spec.alpha.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__9441,x,input__$1,map__9444,map__9444__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),form__$1,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__9441,x,input__$1,map__9444,map__9444__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__9446 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__9446)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__9446)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.alpha.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__9446)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.alpha.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn.call(null,p1));
} else {
return insufficient.call(null,path,new cljs.core.Keyword(null,"amp","amp",271690571).cljs$core$IFn$_invoke$arity$1(p__$1));
}
} else {
var temp__5733__auto__ = cljs.spec.alpha.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__5733__auto__)){
var p1__$1 = temp__5733__auto__;
return cljs.spec.alpha.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn.call(null,p1__$1));
} else {
return cljs.spec.alpha.op_explain.call(null,new cljs.core.Keyword(null,"amp","amp",271690571).cljs$core$IFn$_invoke$arity$1(p__$1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__9446)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__4047__auto__ = cljs.core.seq.call(null,ks);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4047__auto__ = cljs.core.seq.call(null,forms);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__9447 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__9446,vec__9441,x,input__$1,map__9444,map__9444__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__9450){
var vec__9451 = p__9450;
var p__$2 = cljs.core.nth.call(null,vec__9451,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__9446,vec__9441,x,input__$1,map__9444,map__9444__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__9447,(0),null);
var k = cljs.core.nth.call(null,vec__9447,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__9447,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__4047__auto__ = form__$1;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.spec.alpha.op_describe.call(null,pred);
}
})();
if(((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred)))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs.spec.alpha.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__9446)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.alpha.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__9446,vec__9441,x,input__$1,map__9444,map__9444__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs.spec.alpha.op_explain.call(null,(function (){var or__4047__auto__ = form__$1;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.spec.alpha.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__9446,vec__9441,x,input__$1,map__9444,map__9444__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__4047__auto__ = cljs.core.seq.call(null,ks);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4047__auto__ = cljs.core.seq.call(null,forms);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__9446)){
return cljs.spec.alpha.op_explain.call(null,(((p1 === p2))?forms:cljs.spec.alpha.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9446)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.re_gen = (function cljs$spec$alpha$re_gen(p,overrides,path,rmap,f){
var map__9455 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__9455__$1 = (((((!((map__9455 == null))))?(((((map__9455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9455):map__9455);
var p__$1 = map__9455__$1;
var ps = cljs.core.get.call(null,map__9455__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__9455__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__9455__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__9455__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var gfn = cljs.core.get.call(null,map__9455__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375));
var op = cljs.core.get.call(null,map__9455__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__9455__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__9455__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__9455__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var id = cljs.core.get.call(null,map__9455__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__9455,map__9455__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__9455,map__9455__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__4036__auto__ = rmap__$1;
if(cljs.core.truth_(and__4036__auto__)){
var and__4036__auto____$1 = id;
if(cljs.core.truth_(and__4036__auto____$1)){
var and__4036__auto____$2 = k;
if(cljs.core.truth_(and__4036__auto____$2)){
return cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__4036__auto____$2;
}
} else {
return and__4036__auto____$1;
}
} else {
return and__4036__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (map__9455,map__9455__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (){
return cljs.spec.alpha.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__4047__auto__ = f__$1;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return p__$2;
}
})());
});})(map__9455,map__9455__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
,null)));
} else {
return cljs.spec.alpha.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__4047__auto__ = f__$1;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__9455,map__9455__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__4047__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4047__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__9455,map__9455__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
var or__4047__auto__ = (function (){var temp__5735__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__5735__auto__)){
var g = temp__5735__auto__;
var G__9458 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__9458)){
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__9458)){
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__9459 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__9459)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.gen.alpha.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__9459)){
var temp__5735__auto__ = cljs.spec.alpha.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__5735__auto__)){
var g = temp__5735__auto__;
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__9459)){
return cljs.spec.alpha.re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.alpha.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__9459)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__9459)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__9459)){
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id)){
return cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__5735__auto__ = cljs.spec.alpha.re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__5735__auto__)){
var g = temp__5735__auto__;
return cljs.spec.gen.alpha.fmap.call(null,((function (g,temp__5735__auto__,G__9459,or__4047__auto____$1,or__4047__auto__,map__9455,map__9455__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens){
return (function (p1__9454_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__9454_SHARP_);
});})(g,temp__5735__auto__,G__9459,or__4047__auto____$1,or__4047__auto__,map__9455,map__9455__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens))
,cljs.spec.gen.alpha.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9459)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__9460){
while(true){
var vec__9461 = p__9460;
var seq__9462 = cljs.core.seq.call(null,vec__9461);
var first__9463 = cljs.core.first.call(null,seq__9462);
var seq__9462__$1 = cljs.core.next.call(null,seq__9462);
var x = first__9463;
var xs = seq__9462__$1;
var data = vec__9461;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.alpha.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
var temp__5733__auto__ = cljs.spec.alpha.deriv.call(null,p,x);
if(cljs.core.truth_(temp__5733__auto__)){
var dp = temp__5733__auto__;
var G__9464 = dp;
var G__9465 = xs;
p = G__9464;
p__9460 = G__9465;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
});
cljs.spec.alpha.re_explain = (function cljs$spec$alpha$re_explain(path,via,in$,re,input){
var p = re;
var G__9469 = input;
var vec__9470 = G__9469;
var seq__9471 = cljs.core.seq.call(null,vec__9470);
var first__9472 = cljs.core.first.call(null,seq__9471);
var seq__9471__$1 = cljs.core.next.call(null,seq__9471);
var x = first__9472;
var xs = seq__9471__$1;
var data = vec__9470;
var i = (0);
var p__$1 = p;
var G__9469__$1 = G__9469;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__9473 = G__9469__$1;
var seq__9474 = cljs.core.seq.call(null,vec__9473);
var first__9475 = cljs.core.first.call(null,seq__9474);
var seq__9474__$1 = cljs.core.next.call(null,seq__9474);
var x__$1 = first__9475;
var xs__$1 = seq__9474__$1;
var data__$1 = vec__9473;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__5733__auto__ = cljs.spec.alpha.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var dp = temp__5733__auto__;
var G__9476 = dp;
var G__9477 = xs__$1;
var G__9478 = (i__$2 + (1));
p__$1 = G__9476;
G__9469__$1 = G__9477;
i__$1 = G__9478;
continue;
} else {
if(cljs.spec.alpha.accept_QMARK_.call(null,p__$2)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623))){
return cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe.call(null,re),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__4047__auto__ = cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe.call(null,p__$2),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.alpha.regex_spec_impl = (function cljs$spec$alpha$regex_spec_impl(re,gfn){
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha9479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha9479 = (function (re,gfn,meta9480){
this.re = re;
this.gfn = gfn;
this.meta9480 = meta9480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha9479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9481,meta9480__$1){
var self__ = this;
var _9481__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha9479(self__.re,self__.gfn,meta9480__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha9479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9481){
var self__ = this;
var _9481__$1 = this;
return self__.meta9480;
});

cljs.spec.alpha.t_cljs$spec$alpha9479.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9479.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha9479.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha9479.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9479.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)))){
return cljs.spec.alpha.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});

cljs.spec.alpha.t_cljs$spec$alpha9479.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_unform.call(null,self__.re,x);
});

cljs.spec.alpha.t_cljs$spec$alpha9479.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)))){
return cljs.spec.alpha.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.alpha.t_cljs$spec$alpha9479.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.alpha.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.alpha.op_describe.call(null,self__.re));
}
});

cljs.spec.alpha.t_cljs$spec$alpha9479.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.alpha.t_cljs$spec$alpha9479.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_describe.call(null,self__.re);
});

cljs.spec.alpha.t_cljs$spec$alpha9479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta9480","meta9480",-1214461864,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha9479.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha9479.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha9479";

cljs.spec.alpha.t_cljs$spec$alpha9479.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha9479");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha9479.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha9479 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha9479(re__$1,gfn__$1,meta9480){
return (new cljs.spec.alpha.t_cljs$spec$alpha9479(re__$1,gfn__$1,meta9480));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha9479(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.call_valid_QMARK_ = (function cljs$spec$alpha$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cargs)){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__4036__auto__ = (!(cljs.spec.alpha.invalid_QMARK_.call(null,cret)));
if(and__4036__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.alpha.pvalid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__4036__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.alpha.validate_fn = (function cljs$spec$alpha$validate_fn(f,specs,iters){
var g = cljs.spec.alpha.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.gen.alpha.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__9482_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_.call(null,f,specs,p1__9482_SHARP_);
});})(g))
);
var ret = cljs.spec.gen.alpha.quick_check.call(null,iters,prop);
var temp__5733__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__9483 = temp__5733__auto__;
var smallest = cljs.core.nth.call(null,vec__9483,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.alpha.fspec_impl = (function cljs$spec$alpha$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha9486 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.alpha.t_cljs$spec$alpha9486 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta9487){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta9487 = meta9487;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha9486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_9488,meta9487__$1){
var self__ = this;
var _9488__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha9486(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta9487__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha9486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_9488){
var self__ = this;
var _9488__$1 = this;
return self__.meta9487;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha9486.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha9486.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha9486.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9486.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha9486.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha9486.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9486.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.alpha.validate_fn.call(null,f,self__.specs,cljs.spec.alpha._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha9486.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha9486.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.alpha.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e9489){if((e9489 instanceof Error)){
var t = e9489;
return t;
} else {
throw e9489;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.alpha.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cret)){
return cljs.spec.alpha.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.alpha.conform.call(null,self__.argspec,args);
return cljs.spec.alpha.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha9486.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.return$.call(null,((function (___$3,specs){
return (function() { 
var G__9494__delegate = function (args){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9490_9495 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9491_9496 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9492_9497 = true;
var _STAR_print_fn_STAR__temp_val__9493_9498 = ((function (_STAR_print_newline_STAR__orig_val__9490_9495,_STAR_print_fn_STAR__orig_val__9491_9496,_STAR_print_newline_STAR__temp_val__9492_9497,sb__4572__auto__,___$3,specs){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__9490_9495,_STAR_print_fn_STAR__orig_val__9491_9496,_STAR_print_newline_STAR__temp_val__9492_9497,sb__4572__auto__,___$3,specs))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9492_9497;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9493_9498;

try{cljs.spec.alpha.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9491_9496;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9490_9495;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})()),"\n","(pvalid? argspec args)"].join('')));
}

return cljs.spec.gen.alpha.generate.call(null,cljs.spec.alpha.gen.call(null,self__.retspec,overrides));
};
var G__9494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9499__i = 0, G__9499__a = new Array(arguments.length -  0);
while (G__9499__i < G__9499__a.length) {G__9499__a[G__9499__i] = arguments[G__9499__i + 0]; ++G__9499__i;}
  args = new cljs.core.IndexedSeq(G__9499__a,0,null);
} 
return G__9494__delegate.call(this,args);};
G__9494.cljs$lang$maxFixedArity = 0;
G__9494.cljs$lang$applyTo = (function (arglist__9500){
var args = cljs.core.seq(arglist__9500);
return G__9494__delegate(args);
});
G__9494.cljs$core$IFn$_invoke$arity$variadic = G__9494__delegate;
return G__9494;
})()
;})(___$3,specs))
);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha9486.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha9486.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,self__.aform,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,(1),null)),(new cljs.core.List(null,self__.rform,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,(1),null)),(new cljs.core.List(null,self__.fform,null,(1),null)))));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha9486.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta9487","meta9487",-2093786091,null)], null);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha9486.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha9486.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha9486";

cljs.spec.alpha.t_cljs$spec$alpha9486.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha9486");
});})(specs))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha9486.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha9486 = ((function (specs){
return (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha9486(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta9487){
return (new cljs.spec.alpha.t_cljs$spec$alpha9486(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta9487));
});})(specs))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha9486(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("cljs.spec.alpha","kvs->map","cljs.spec.alpha/kvs->map",579713455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__9501#","p1__9501#",-1725026846,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"p1__9501#","p1__9501#",-1725026846,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"p1__9501#","p1__9501#",-1725026846,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__9502#","p1__9502#",-625346967,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__9502#","p1__9502#",-625346967,null)))),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"%","%",-950237169,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__9501_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),p1__9501_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),p1__9501_SHARP_));
}),null,true,(function (p1__9502_SHARP_){
return cljs.core.map.call(null,(function (p__9503){
var vec__9504 = p__9503;
var k = cljs.core.nth.call(null,vec__9504,(0),null);
var v = cljs.core.nth.call(null,vec__9504,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),k,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),v], null);
}),p1__9502_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.alpha.nonconforming = (function cljs$spec$alpha$nonconforming(spec){
var spec__$1 = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.call(null,spec);
}),null));
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha9507 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha9507 = (function (spec,meta9508){
this.spec = spec;
this.meta9508 = meta9508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha9507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_9509,meta9508__$1){
var self__ = this;
var _9509__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha9507(self__.spec,meta9508__$1));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha9507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_9509){
var self__ = this;
var _9509__$1 = this;
return self__.meta9508;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha9507.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9507.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha9507.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha9507.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9507.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.alpha.conform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return x;
}
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha9507.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha9507.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_.call(null,cljs.core.deref.call(null,self__.spec),path,via,in$,x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha9507.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_.call(null,cljs.core.deref.call(null,self__.spec),overrides,path,rmap);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha9507.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.nonconforming.call(null,cljs.spec.alpha.with_gen_STAR_.call(null,cljs.core.deref.call(null,self__.spec),gfn));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha9507.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nonconforming","cljs.spec.alpha/nonconforming",-1009218508,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha.describe_STAR_.call(null,cljs.core.deref.call(null,self__.spec)),null,(1),null)))));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha9507.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta9508","meta9508",-1308213981,null)], null);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha9507.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha9507.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha9507";

cljs.spec.alpha.t_cljs$spec$alpha9507.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha9507");
});})(spec__$1))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha9507.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha9507 = ((function (spec__$1){
return (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha9507(spec__$2,meta9508){
return (new cljs.spec.alpha.t_cljs$spec$alpha9507(spec__$2,meta9508));
});})(spec__$1))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha9507(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.alpha.nilable_impl = (function cljs$spec$alpha$nilable_impl(form,pred,gfn){
var spec = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.call(null,pred,form);
}),null));
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha9510 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha9510 = (function (form,pred,gfn,spec,meta9511){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta9511 = meta9511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha9510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_9512,meta9511__$1){
var self__ = this;
var _9512__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha9510(self__.form,self__.pred,self__.gfn,self__.spec,meta9511__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha9510.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_9512){
var self__ = this;
var _9512__$1 = this;
return self__.meta9511;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha9510.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9510.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha9510.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha9510.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha9510.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.conform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha9510.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.unform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha9510.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__4047__auto__ = cljs.spec.alpha.pvalid_QMARK_.call(null,cljs.core.deref.call(null,self__.spec),x);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return (x == null);
}
})())){
return null;
} else {
return cljs.core.conj.call(null,cljs.spec.alpha.explain_1.call(null,self__.form,self__.pred,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha9510.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gen.alpha.return$.call(null,null);
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.alpha.gensub.call(null,self__.pred,overrides,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null));
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha9510.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.nilable_impl.call(null,self__.form,self__.pred,gfn__$1);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha9510.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)))));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha9510.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta9511","meta9511",984452031,null)], null);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha9510.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha9510.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha9510";

cljs.spec.alpha.t_cljs$spec$alpha9510.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha9510");
});})(spec))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha9510.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha9510 = ((function (spec){
return (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha9510(form__$1,pred__$1,gfn__$1,spec__$1,meta9511){
return (new cljs.spec.alpha.t_cljs$spec$alpha9510(form__$1,pred__$1,gfn__$1,spec__$1,meta9511));
});})(spec))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha9510(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.alpha.exercise = (function cljs$spec$alpha$exercise(var_args){
var G__9515 = arguments.length;
switch (G__9515) {
case 1:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.exercise.call(null,spec,(10));
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.alpha.exercise.call(null,spec,n,null);
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__9513_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__9513_SHARP_,cljs.spec.alpha.conform.call(null,spec,p1__9513_SHARP_)],null));
}),cljs.spec.gen.alpha.sample.call(null,cljs.spec.alpha.gen.call(null,spec,overrides),n));
});

cljs.spec.alpha.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.alpha.inst_in_range_QMARK_ = (function cljs$spec$alpha$inst_in_range_QMARK_(start,end,inst){
var and__4036__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__4036__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return (((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end))));
} else {
return and__4036__auto__;
}
});
/**
 * Return true if start <= val, val < end and val is a fixed
 *   precision integer.
 */
cljs.spec.alpha.int_in_range_QMARK_ = (function cljs$spec$alpha$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return (((start <= val)) && ((val < end)));
} else {
if((val instanceof goog.math.Long)){
var and__4036__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__4036__auto__)){
return val.lessThan(end);
} else {
return and__4036__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__4036__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__4036__auto__)){
return val.lessThan(end);
} else {
return and__4036__auto__;
}
} else {
return false;

}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha._STAR_compile_asserts_STAR_ !== 'undefined')){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec.alpha._STAR_compile_asserts_STAR_ = true;
}
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha._STAR_runtime_asserts_STAR_ !== 'undefined')){
} else {
cljs.spec.alpha._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.alpha.check_asserts_QMARK_ = (function cljs$spec$alpha$check_asserts_QMARK_(){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec.alpha/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.alpha.check_asserts = (function cljs$spec$alpha$check_asserts(flag){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.alpha.assert_STAR_ = (function cljs$spec$alpha$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,spec,x))){
return x;
} else {
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.alpha.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477)));
throw (new Error(["Spec assertion failed\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9517_9521 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9518_9522 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9519_9523 = true;
var _STAR_print_fn_STAR__temp_val__9520_9524 = ((function (_STAR_print_newline_STAR__orig_val__9517_9521,_STAR_print_fn_STAR__orig_val__9518_9522,_STAR_print_newline_STAR__temp_val__9519_9523,sb__4572__auto__,ed){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__9517_9521,_STAR_print_fn_STAR__orig_val__9518_9522,_STAR_print_newline_STAR__temp_val__9519_9523,sb__4572__auto__,ed))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9519_9523;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9520_9524;

try{cljs.spec.alpha.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9518_9522;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9517_9521;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})())].join('')));
}
});

//# sourceMappingURL=alpha.js.map
