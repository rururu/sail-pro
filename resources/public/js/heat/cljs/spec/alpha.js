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
var G__24871 = cljs.core.get.call(null,reg,spec);
spec = G__24871;
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
return (function (p1__24875_SHARP_){
return (!(clojure.string.blank_QMARK_.call(null,p1__24875_SHARP_)));
});})(xs))
,xs)))){
var vec__24876 = cljs.core.juxt.call(null,cljs.core.butlast,cljs.core.last).call(null,xs);
var xs__$1 = cljs.core.nth.call(null,vec__24876,(0),null);
var y = cljs.core.nth.call(null,vec__24876,(1),null);
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
var G__24880 = arguments.length;
switch (G__24880) {
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
var G__24882 = null;
var G__24882__1 = (function (o){
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
var G__24882__2 = (function (o,form){
return cljs.spec.alpha.spec_impl.call(null,form,o,null,null);
});
G__24882 = function(o,form){
switch(arguments.length){
case 1:
return G__24882__1.call(this,o);
case 2:
return G__24882__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24882.cljs$core$IFn$_invoke$arity$1 = G__24882__1;
G__24882.cljs$core$IFn$_invoke$arity$2 = G__24882__2;
return G__24882;
})()
);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__24884 = arguments.length;
switch (G__24884) {
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
var problems = cljs.core.sort_by.call(null,(function (p1__24887_SHARP_){
return (- cljs.core.count.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__24887_SHARP_)));
}),cljs.core.sort_by.call(null,(function (p1__24886_SHARP_){
return (- cljs.core.count.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(p1__24886_SHARP_)));
}),new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(ed)));
return cljs.core.print.call(null,(function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24888_24920 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24889_24921 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24890_24922 = true;
var _STAR_print_fn_STAR__temp_val__24891_24923 = ((function (_STAR_print_newline_STAR__orig_val__24888_24920,_STAR_print_fn_STAR__orig_val__24889_24921,_STAR_print_newline_STAR__temp_val__24890_24922,sb__4572__auto__,problems){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__24888_24920,_STAR_print_fn_STAR__orig_val__24889_24921,_STAR_print_newline_STAR__temp_val__24890_24922,sb__4572__auto__,problems))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24890_24922;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24891_24923;

try{var seq__24892_24924 = cljs.core.seq.call(null,problems);
var chunk__24893_24925 = null;
var count__24894_24926 = (0);
var i__24895_24927 = (0);
while(true){
if((i__24895_24927 < count__24894_24926)){
var map__24896_24928 = cljs.core._nth.call(null,chunk__24893_24925,i__24895_24927);
var map__24896_24929__$1 = (((((!((map__24896_24928 == null))))?(((((map__24896_24928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24896_24928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24896_24928):map__24896_24928);
var prob_24930 = map__24896_24929__$1;
var path_24931 = cljs.core.get.call(null,map__24896_24929__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_24932 = cljs.core.get.call(null,map__24896_24929__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_24933 = cljs.core.get.call(null,map__24896_24929__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_24934 = cljs.core.get.call(null,map__24896_24929__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_24935 = cljs.core.get.call(null,map__24896_24929__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_24936 = cljs.core.get.call(null,map__24896_24929__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
cljs.core.pr.call(null,val_24933);

cljs.core.print.call(null," - failed: ");

if(cljs.core.truth_(reason_24934)){
cljs.core.print.call(null,reason_24934);
} else {
cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_24932));
}

if(cljs.core.empty_QMARK_.call(null,in_24936)){
} else {
cljs.core.print.call(null,[" in: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,in_24936))].join(''));
}

if(cljs.core.empty_QMARK_.call(null,path_24931)){
} else {
cljs.core.print.call(null,[" at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,path_24931))].join(''));
}

if(cljs.core.empty_QMARK_.call(null,via_24935)){
} else {
cljs.core.print.call(null,[" spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.last.call(null,via_24935)))].join(''));
}

var seq__24898_24937 = cljs.core.seq.call(null,prob_24930);
var chunk__24899_24938 = null;
var count__24900_24939 = (0);
var i__24901_24940 = (0);
while(true){
if((i__24901_24940 < count__24900_24939)){
var vec__24902_24941 = cljs.core._nth.call(null,chunk__24899_24938,i__24901_24940);
var k_24942 = cljs.core.nth.call(null,vec__24902_24941,(0),null);
var v_24943 = cljs.core.nth.call(null,vec__24902_24941,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_24942))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_24942)," ");

cljs.core.pr.call(null,v_24943);
}


var G__24944 = seq__24898_24937;
var G__24945 = chunk__24899_24938;
var G__24946 = count__24900_24939;
var G__24947 = (i__24901_24940 + (1));
seq__24898_24937 = G__24944;
chunk__24899_24938 = G__24945;
count__24900_24939 = G__24946;
i__24901_24940 = G__24947;
continue;
} else {
var temp__5735__auto___24948 = cljs.core.seq.call(null,seq__24898_24937);
if(temp__5735__auto___24948){
var seq__24898_24949__$1 = temp__5735__auto___24948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24898_24949__$1)){
var c__4461__auto___24950 = cljs.core.chunk_first.call(null,seq__24898_24949__$1);
var G__24951 = cljs.core.chunk_rest.call(null,seq__24898_24949__$1);
var G__24952 = c__4461__auto___24950;
var G__24953 = cljs.core.count.call(null,c__4461__auto___24950);
var G__24954 = (0);
seq__24898_24937 = G__24951;
chunk__24899_24938 = G__24952;
count__24900_24939 = G__24953;
i__24901_24940 = G__24954;
continue;
} else {
var vec__24905_24955 = cljs.core.first.call(null,seq__24898_24949__$1);
var k_24956 = cljs.core.nth.call(null,vec__24905_24955,(0),null);
var v_24957 = cljs.core.nth.call(null,vec__24905_24955,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_24956))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_24956)," ");

cljs.core.pr.call(null,v_24957);
}


var G__24958 = cljs.core.next.call(null,seq__24898_24949__$1);
var G__24959 = null;
var G__24960 = (0);
var G__24961 = (0);
seq__24898_24937 = G__24958;
chunk__24899_24938 = G__24959;
count__24900_24939 = G__24960;
i__24901_24940 = G__24961;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);


var G__24962 = seq__24892_24924;
var G__24963 = chunk__24893_24925;
var G__24964 = count__24894_24926;
var G__24965 = (i__24895_24927 + (1));
seq__24892_24924 = G__24962;
chunk__24893_24925 = G__24963;
count__24894_24926 = G__24964;
i__24895_24927 = G__24965;
continue;
} else {
var temp__5735__auto___24966 = cljs.core.seq.call(null,seq__24892_24924);
if(temp__5735__auto___24966){
var seq__24892_24967__$1 = temp__5735__auto___24966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24892_24967__$1)){
var c__4461__auto___24968 = cljs.core.chunk_first.call(null,seq__24892_24967__$1);
var G__24969 = cljs.core.chunk_rest.call(null,seq__24892_24967__$1);
var G__24970 = c__4461__auto___24968;
var G__24971 = cljs.core.count.call(null,c__4461__auto___24968);
var G__24972 = (0);
seq__24892_24924 = G__24969;
chunk__24893_24925 = G__24970;
count__24894_24926 = G__24971;
i__24895_24927 = G__24972;
continue;
} else {
var map__24908_24973 = cljs.core.first.call(null,seq__24892_24967__$1);
var map__24908_24974__$1 = (((((!((map__24908_24973 == null))))?(((((map__24908_24973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24908_24973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24908_24973):map__24908_24973);
var prob_24975 = map__24908_24974__$1;
var path_24976 = cljs.core.get.call(null,map__24908_24974__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_24977 = cljs.core.get.call(null,map__24908_24974__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_24978 = cljs.core.get.call(null,map__24908_24974__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_24979 = cljs.core.get.call(null,map__24908_24974__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_24980 = cljs.core.get.call(null,map__24908_24974__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_24981 = cljs.core.get.call(null,map__24908_24974__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
cljs.core.pr.call(null,val_24978);

cljs.core.print.call(null," - failed: ");

if(cljs.core.truth_(reason_24979)){
cljs.core.print.call(null,reason_24979);
} else {
cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_24977));
}

if(cljs.core.empty_QMARK_.call(null,in_24981)){
} else {
cljs.core.print.call(null,[" in: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,in_24981))].join(''));
}

if(cljs.core.empty_QMARK_.call(null,path_24976)){
} else {
cljs.core.print.call(null,[" at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,path_24976))].join(''));
}

if(cljs.core.empty_QMARK_.call(null,via_24980)){
} else {
cljs.core.print.call(null,[" spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.last.call(null,via_24980)))].join(''));
}

var seq__24910_24982 = cljs.core.seq.call(null,prob_24975);
var chunk__24911_24983 = null;
var count__24912_24984 = (0);
var i__24913_24985 = (0);
while(true){
if((i__24913_24985 < count__24912_24984)){
var vec__24914_24986 = cljs.core._nth.call(null,chunk__24911_24983,i__24913_24985);
var k_24987 = cljs.core.nth.call(null,vec__24914_24986,(0),null);
var v_24988 = cljs.core.nth.call(null,vec__24914_24986,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_24987))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_24987)," ");

cljs.core.pr.call(null,v_24988);
}


var G__24989 = seq__24910_24982;
var G__24990 = chunk__24911_24983;
var G__24991 = count__24912_24984;
var G__24992 = (i__24913_24985 + (1));
seq__24910_24982 = G__24989;
chunk__24911_24983 = G__24990;
count__24912_24984 = G__24991;
i__24913_24985 = G__24992;
continue;
} else {
var temp__5735__auto___24993__$1 = cljs.core.seq.call(null,seq__24910_24982);
if(temp__5735__auto___24993__$1){
var seq__24910_24994__$1 = temp__5735__auto___24993__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24910_24994__$1)){
var c__4461__auto___24995 = cljs.core.chunk_first.call(null,seq__24910_24994__$1);
var G__24996 = cljs.core.chunk_rest.call(null,seq__24910_24994__$1);
var G__24997 = c__4461__auto___24995;
var G__24998 = cljs.core.count.call(null,c__4461__auto___24995);
var G__24999 = (0);
seq__24910_24982 = G__24996;
chunk__24911_24983 = G__24997;
count__24912_24984 = G__24998;
i__24913_24985 = G__24999;
continue;
} else {
var vec__24917_25000 = cljs.core.first.call(null,seq__24910_24994__$1);
var k_25001 = cljs.core.nth.call(null,vec__24917_25000,(0),null);
var v_25002 = cljs.core.nth.call(null,vec__24917_25000,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_25001))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_25001)," ");

cljs.core.pr.call(null,v_25002);
}


var G__25003 = cljs.core.next.call(null,seq__24910_24994__$1);
var G__25004 = null;
var G__25005 = (0);
var G__25006 = (0);
seq__24910_24982 = G__25003;
chunk__24911_24983 = G__25004;
count__24912_24984 = G__25005;
i__24913_24985 = G__25006;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);


var G__25007 = cljs.core.next.call(null,seq__24892_24967__$1);
var G__25008 = null;
var G__25009 = (0);
var G__25010 = (0);
seq__24892_24924 = G__25007;
chunk__24893_24925 = G__25008;
count__24894_24926 = G__25009;
i__24895_24927 = G__25010;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24889_24921;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24888_24920;
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
var _STAR_print_newline_STAR__orig_val__25011_25015 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25012_25016 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25013_25017 = true;
var _STAR_print_fn_STAR__temp_val__25014_25018 = ((function (_STAR_print_newline_STAR__orig_val__25011_25015,_STAR_print_fn_STAR__orig_val__25012_25016,_STAR_print_newline_STAR__temp_val__25013_25017,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__25011_25015,_STAR_print_fn_STAR__orig_val__25012_25016,_STAR_print_newline_STAR__temp_val__25013_25017,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25013_25017;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25014_25018;

try{cljs.spec.alpha.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25012_25016;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25011_25015;
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
return (function (p1__25019_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,p1__25019_SHARP_);
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
var G__25021 = arguments.length;
switch (G__25021) {
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
var spec_25023__$1 = (cljs.core.truth_((function (){var or__4047__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,spec);
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
cljs.core.swap_BANG_.call(null,cljs.spec.alpha.registry_ref,cljs.core.assoc,k,cljs.spec.alpha.with_name.call(null,spec_25023__$1,k));
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
var G__25025 = arguments.length;
switch (G__25025) {
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
var G__25028 = arguments.length;
switch (G__25028) {
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
var G__25031 = arguments.length;
switch (G__25031) {
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
var G__25034 = arguments.length;
switch (G__25034) {
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
return cljs.spec.gen.alpha.bind.call(null,cljs.spec.gen.alpha.tuple.call(null,cljs.spec.gen.alpha.choose.call(null,min_count,cljs.core.count.call(null,s)),cljs.spec.gen.alpha.shuffle.call(null,cljs.core.map.call(null,cljs.spec.alpha.k_gen,s))),(function (p__25035){
var vec__25036 = p__25035;
var n = cljs.core.nth.call(null,vec__25036,(0),null);
var gens = cljs.core.nth.call(null,vec__25036,(1),null);
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
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__25043){
var map__25044 = p__25043;
var map__25044__$1 = (((((!((map__25044 == null))))?(((((map__25044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25044):map__25044);
var argm = map__25044__$1;
var opt = cljs.core.get.call(null,map__25044__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__25044__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__25044__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__25044__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__25044__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var keys_pred = cljs.core.get.call(null,map__25044__$1,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739));
var opt_keys = cljs.core.get.call(null,map__25044__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__25044__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__25044__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__25044__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__25044__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__25044__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__25040_SHARP_){
var or__4047__auto__ = k__GT_s.call(null,p1__25040_SHARP_);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return p1__25040_SHARP_;
}
});})(k__GT_s,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha25046 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha25046 = (function (map__25044,keys__GT_specnames,opt,p__25043,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta25047){
this.map__25044 = map__25044;
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.p__25043 = p__25043;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta25047 = meta25047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha25046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_25048,meta25047__$1){
var self__ = this;
var _25048__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha25046(self__.map__25044,self__.keys__GT_specnames,self__.opt,self__.p__25043,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta25047__$1));
});})(k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha25046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_25048){
var self__ = this;
var _25048__$1 = this;
return self__.meta25047;
});})(k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha25046.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25046.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha25046.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha25046.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25046.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.alpha.registry.call(null);
var ret = m;
var G__25055 = m;
var vec__25056 = G__25055;
var seq__25057 = cljs.core.seq.call(null,vec__25056);
var first__25058 = cljs.core.first.call(null,seq__25057);
var seq__25057__$1 = cljs.core.next.call(null,seq__25057);
var vec__25059 = first__25058;
var k = cljs.core.nth.call(null,vec__25059,(0),null);
var v = cljs.core.nth.call(null,vec__25059,(1),null);
var ks = seq__25057__$1;
var keys = vec__25056;
var ret__$1 = ret;
var G__25055__$1 = G__25055;
while(true){
var ret__$2 = ret__$1;
var vec__25062 = G__25055__$1;
var seq__25063 = cljs.core.seq.call(null,vec__25062);
var first__25064 = cljs.core.first.call(null,seq__25063);
var seq__25063__$1 = cljs.core.next.call(null,seq__25063);
var vec__25065 = first__25064;
var k__$1 = cljs.core.nth.call(null,vec__25065,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__25065,(1),null);
var ks__$1 = seq__25063__$1;
var keys__$1 = vec__25062;
if(cljs.core.truth_(keys__$1)){
var sname = self__.keys__GT_specnames.call(null,k__$1);
var temp__5733__auto__ = cljs.core.get.call(null,reg,sname);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
var cv = cljs.spec.alpha.conform.call(null,s,v__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__25087 = (((cv === v__$1))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__25088 = ks__$1;
ret__$1 = G__25087;
G__25055__$1 = G__25088;
continue;
}
} else {
var G__25089 = ret__$2;
var G__25090 = ks__$1;
ret__$1 = G__25089;
G__25055__$1 = G__25090;
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
});})(k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha25046.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.alpha.registry.call(null);
var ret = m;
var G__25071 = cljs.core.keys.call(null,m);
var vec__25072 = G__25071;
var seq__25073 = cljs.core.seq.call(null,vec__25072);
var first__25074 = cljs.core.first.call(null,seq__25073);
var seq__25073__$1 = cljs.core.next.call(null,seq__25073);
var k = first__25074;
var ks = seq__25073__$1;
var keys = vec__25072;
var ret__$1 = ret;
var G__25071__$1 = G__25071;
while(true){
var ret__$2 = ret__$1;
var vec__25075 = G__25071__$1;
var seq__25076 = cljs.core.seq.call(null,vec__25075);
var first__25077 = cljs.core.first.call(null,seq__25076);
var seq__25076__$1 = cljs.core.next.call(null,seq__25076);
var k__$1 = first__25077;
var ks__$1 = seq__25076__$1;
var keys__$1 = vec__25075;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.alpha.unform.call(null,self__.keys__GT_specnames.call(null,k__$1),cv);
var G__25091 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__25092 = ks__$1;
ret__$1 = G__25091;
G__25071__$1 = G__25092;
continue;
} else {
var G__25093 = ret__$2;
var G__25094 = ks__$1;
ret__$1 = G__25093;
G__25071__$1 = G__25094;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha25046.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.map_QMARK_.call(null,x)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.alpha.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__5735__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return form;
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__5735__auto__){
var probs = temp__5735__auto__;
return cljs.core.map.call(null,((function (probs,temp__5735__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__25041_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__25041_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__5735__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__25078){
var vec__25079 = p__25078;
var k = cljs.core.nth.call(null,vec__25079,(0),null);
var v = cljs.core.nth.call(null,vec__25079,(1),null);
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
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha25046.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
var rgen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k)], null);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,rgen,___$1,k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var reqs = cljs.core.map.call(null,rgen,self__.req_keys,self__.req_specs);
var opts = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.second,reqs),cljs.core.map.call(null,cljs.core.second,opts)))){
return cljs.spec.gen.alpha.bind.call(null,cljs.spec.gen.alpha.tuple.call(null,cljs.spec.alpha.and_k_gen.call(null,self__.req),cljs.spec.alpha.or_k_gen.call(null,self__.opt),cljs.spec.alpha.and_k_gen.call(null,self__.req_un),cljs.spec.alpha.or_k_gen.call(null,self__.opt_un)),((function (rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__25082){
var vec__25083 = p__25082;
var req_ks = cljs.core.nth.call(null,vec__25083,(0),null);
var opt_ks = cljs.core.nth.call(null,vec__25083,(1),null);
var req_un_ks = cljs.core.nth.call(null,vec__25083,(2),null);
var opt_un_ks = cljs.core.nth.call(null,vec__25083,(3),null);
var qks = cljs.core.flatten.call(null,cljs.core.concat.call(null,req_ks,opt_ks));
var unqks = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.keyword,cljs.core.name),cljs.core.flatten.call(null,cljs.core.concat.call(null,req_un_ks,opt_un_ks)));
return cljs.core.apply.call(null,cljs.spec.gen.alpha.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,((function (qks,unqks,vec__25083,req_ks,opt_ks,req_un_ks,opt_un_ks,rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__25042_SHARP_){
return cljs.core.set.call(null,cljs.core.concat.call(null,qks,unqks)).call(null,cljs.core.first.call(null,p1__25042_SHARP_));
});})(qks,unqks,vec__25083,req_ks,opt_ks,req_un_ks,opt_un_ks,rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.into.call(null,reqs,opts))));
});})(rmap__$1,rgen,ogen,reqs,opts,___$1,k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha25046.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha25046.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),(function (){var G__25086 = cljs.core.PersistentVector.EMPTY;
var G__25086__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__25086,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__25086);
var G__25086__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__25086__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__25086__$1);
var G__25086__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__25086__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__25086__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__25086__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__25086__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha25046.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__25044","map__25044",-1547608891,null),new cljs.core.Symbol(null,"keys->specnames","keys->specnames",1791294693,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"p__25043","p__25043",-1229822873,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta25047","meta25047",-1355935652,null)], null);
});})(k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha25046.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha25046.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha25046";

cljs.spec.alpha.t_cljs$spec$alpha25046.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha25046");
});})(k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha25046.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha25046 = ((function (k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha25046(map__25044__$2,keys__GT_specnames__$1,opt__$1,p__25043__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta25047){
return (new cljs.spec.alpha.t_cljs$spec$alpha25046(map__25044__$2,keys__GT_specnames__$1,opt__$1,p__25043__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta25047));
});})(k__GT_s,keys__GT_specnames,id,map__25044,map__25044__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha25046(map__25044__$1,keys__GT_specnames,opt,p__25043,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.alpha.spec_impl = (function cljs$spec$alpha$spec_impl(var_args){
var G__25096 = arguments.length;
switch (G__25096) {
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
var G__25097 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__25097,gfn);
} else {
return G__25097;
}
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,pred))){
return cljs.spec.alpha.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.ident_QMARK_.call(null,pred)){
var G__25098 = cljs.spec.alpha.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__25098,gfn);
} else {
return G__25098;
}
} else {
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha25099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha25099 = (function (form,pred,gfn,cpred_QMARK_,unc,meta25100){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta25100 = meta25100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha25099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25101,meta25100__$1){
var self__ = this;
var _25101__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha25099(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta25100__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha25099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25101){
var self__ = this;
var _25101__$1 = this;
return self__.meta25100;
});

cljs.spec.alpha.t_cljs$spec$alpha25099.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25099.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha25099.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha25099.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25099.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
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

cljs.spec.alpha.t_cljs$spec$alpha25099.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
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

cljs.spec.alpha.t_cljs$spec$alpha25099.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.alpha.t_cljs$spec$alpha25099.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.alpha.t_cljs$spec$alpha25099.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.alpha.t_cljs$spec$alpha25099.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.alpha.t_cljs$spec$alpha25099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta25100","meta25100",-44301169,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha25099.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha25099.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha25099";

cljs.spec.alpha.t_cljs$spec$alpha25099.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha25099");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha25099.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha25099 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha25099(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta25100){
return (new cljs.spec.alpha.t_cljs$spec$alpha25099(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta25100));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha25099(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.alpha.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.alpha.multi_spec_impl = (function cljs$spec$alpha$multi_spec_impl(var_args){
var G__25109 = arguments.length;
switch (G__25109) {
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
return (function (p1__25103_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__4036__auto__ = cljs.core._get_method.call(null,mm,cljs.core._dispatch_fn.call(null,mm).call(null,p1__25103_SHARP_));
if(cljs.core.truth_(and__4036__auto__)){
return mm.call(null,p1__25103_SHARP_);
} else {
return and__4036__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__25104_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__25104_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__25105_SHARP_,p2__25106_SHARP_){
return cljs.core.assoc.call(null,p1__25105_SHARP_,retag,p2__25106_SHARP_);
});})(id,predx,dval))
:retag);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha25110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha25110 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta25111){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta25111 = meta25111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha25110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_25112,meta25111__$1){
var self__ = this;
var _25112__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha25110(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta25111__$1));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha25110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_25112){
var self__ = this;
var _25112__$1 = this;
return self__.meta25111;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha25110.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25110.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha25110.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha25110.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25110.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
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

cljs.spec.alpha.t_cljs$spec$alpha25110.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
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

cljs.spec.alpha.t_cljs$spec$alpha25110.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
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

cljs.spec.alpha.t_cljs$spec$alpha25110.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__25113){
var vec__25114 = p__25113;
var k = cljs.core.nth.call(null,vec__25114,(0),null);
var f = cljs.core.nth.call(null,vec__25114,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k)){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__25114,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.gen.alpha.fmap.call(null,((function (rmap__$1,p,vec__25114,k,f,___$1,id,predx,dval,tag){
return (function (p1__25107_SHARP_){
return self__.tag.call(null,p1__25107_SHARP_,k);
});})(rmap__$1,p,vec__25114,k,f,___$1,id,predx,dval,tag))
,cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,(new cljs.core.List(null,new cljs.core.Symbol(null,"method","method",1696235119,null),(new cljs.core.List(null,self__.form,(new cljs.core.List(null,k,null,(1),null)),(2),null)),(3),null))));
});})(rmap__$1,p,vec__25114,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__25117){
var vec__25118 = p__25117;
var k = cljs.core.nth.call(null,vec__25118,(0),null);
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

cljs.spec.alpha.t_cljs$spec$alpha25110.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha25110.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),(new cljs.core.List(null,self__.retag,null,(1),null)))));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha25110.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta25111","meta25111",-1439093460,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha25110.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha25110.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha25110";

cljs.spec.alpha.t_cljs$spec$alpha25110.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha25110");
});})(id,predx,dval,tag))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha25110.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha25110 = ((function (id,predx,dval,tag){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha25110(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta25111){
return (new cljs.spec.alpha.t_cljs$spec$alpha25110(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta25111));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha25110(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.alpha.tuple_impl = (function cljs$spec$alpha$tuple_impl(var_args){
var G__25123 = arguments.length;
switch (G__25123) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha25124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha25124 = (function (forms,preds,gfn,specs,cnt,meta25125){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta25125 = meta25125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha25124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_25126,meta25125__$1){
var self__ = this;
var _25126__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha25124(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta25125__$1));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha25124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_25126){
var self__ = this;
var _25126__$1 = this;
return self__.meta25125;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha25124.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25124.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha25124.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha25124.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25124.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
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
var G__25128 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__25129 = (i + (1));
ret = G__25128;
i = G__25129;
continue;
}
}
break;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha25124.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
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
var G__25130 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__25131 = (i + (1));
ret = G__25130;
i = G__25131;
continue;
}
break;
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha25124.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
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

cljs.spec.alpha.t_cljs$spec$alpha25124.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
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

cljs.spec.alpha.t_cljs$spec$alpha25124.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha25124.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),null,(1),null)),self__.forms)));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha25124.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"meta25125","meta25125",-371314928,null)], null);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha25124.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha25124.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha25124";

cljs.spec.alpha.t_cljs$spec$alpha25124.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha25124");
});})(specs,cnt))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha25124.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha25124 = ((function (specs,cnt){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha25124(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta25125){
return (new cljs.spec.alpha.t_cljs$spec$alpha25124(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta25125));
});})(specs,cnt))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha25124(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
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
var cform = (function (){var G__25132 = cljs.core.count.call(null,preds);
switch (G__25132) {
case (2):
return ((function (G__25132,id,kps,specs){
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
;})(G__25132,id,kps,specs))

break;
case (3):
return ((function (G__25132,id,kps,specs){
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
;})(G__25132,id,kps,specs))

break;
default:
return ((function (G__25132,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var spec = specs__$1.call(null,i);
var ret = cljs.spec.alpha.conform_STAR_.call(null,spec,x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
var G__25141 = (i + (1));
i = G__25141;
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
;})(G__25132,id,kps,specs))

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha25133 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha25133 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta25134){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta25134 = meta25134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha25133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_25135,meta25134__$1){
var self__ = this;
var _25135__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha25133(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta25134__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25133.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_25135){
var self__ = this;
var _25135__$1 = this;
return self__.meta25134;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25133.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25133.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25133.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25133.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25133.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25133.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__25136){
var self__ = this;
var vec__25137 = p__25136;
var k = cljs.core.nth.call(null,vec__25137,(0),null);
var x = cljs.core.nth.call(null,vec__25137,(1),null);
var ___$1 = this;
return cljs.spec.alpha.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25133.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
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

cljs.spec.alpha.t_cljs$spec$alpha25133.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
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

cljs.spec.alpha.t_cljs$spec$alpha25133.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25133.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),null,(1),null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25133.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta25134","meta25134",336397082,null)], null);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25133.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha25133.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha25133";

cljs.spec.alpha.t_cljs$spec$alpha25133.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha25133");
});})(id,kps,specs,cform))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha25133.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha25133 = ((function (id,kps,specs,cform){
return (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha25133(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta25134){
return (new cljs.spec.alpha.t_cljs$spec$alpha25133(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta25134));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha25133(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__25148 = preds;
var vec__25150 = G__25148;
var seq__25151 = cljs.core.seq.call(null,vec__25150);
var first__25152 = cljs.core.first.call(null,seq__25151);
var seq__25151__$1 = cljs.core.next.call(null,seq__25151);
var pred = first__25152;
var preds__$1 = seq__25151__$1;
var G__25149 = forms;
var vec__25153 = G__25149;
var seq__25154 = cljs.core.seq.call(null,vec__25153);
var first__25155 = cljs.core.first.call(null,seq__25154);
var seq__25154__$1 = cljs.core.next.call(null,seq__25154);
var form = first__25155;
var forms__$1 = seq__25154__$1;
var ret__$1 = ret;
var G__25148__$1 = G__25148;
var G__25149__$1 = G__25149;
while(true){
var ret__$2 = ret__$1;
var vec__25156 = G__25148__$1;
var seq__25157 = cljs.core.seq.call(null,vec__25156);
var first__25158 = cljs.core.first.call(null,seq__25157);
var seq__25157__$1 = cljs.core.next.call(null,seq__25157);
var pred__$1 = first__25158;
var preds__$2 = seq__25157__$1;
var vec__25159 = G__25149__$1;
var seq__25160 = cljs.core.seq.call(null,vec__25159);
var first__25161 = cljs.core.first.call(null,seq__25160);
var seq__25160__$1 = cljs.core.next.call(null,seq__25160);
var form__$1 = first__25161;
var forms__$2 = seq__25160__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,nret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__25162 = nret;
var G__25163 = preds__$2;
var G__25164 = forms__$2;
ret__$1 = G__25162;
G__25148__$1 = G__25163;
G__25149__$1 = G__25164;
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
var G__25171 = forms;
var vec__25173 = G__25171;
var seq__25174 = cljs.core.seq.call(null,vec__25173);
var first__25175 = cljs.core.first.call(null,seq__25174);
var seq__25174__$1 = cljs.core.next.call(null,seq__25174);
var form = first__25175;
var forms__$1 = seq__25174__$1;
var G__25172 = preds;
var vec__25176 = G__25172;
var seq__25177 = cljs.core.seq.call(null,vec__25176);
var first__25178 = cljs.core.first.call(null,seq__25177);
var seq__25177__$1 = cljs.core.next.call(null,seq__25177);
var pred = first__25178;
var preds__$1 = seq__25177__$1;
var ret__$1 = ret;
var G__25171__$1 = G__25171;
var G__25172__$1 = G__25172;
while(true){
var ret__$2 = ret__$1;
var vec__25179 = G__25171__$1;
var seq__25180 = cljs.core.seq.call(null,vec__25179);
var first__25181 = cljs.core.first.call(null,seq__25180);
var seq__25180__$1 = cljs.core.next.call(null,seq__25180);
var form__$1 = first__25181;
var forms__$2 = seq__25180__$1;
var vec__25182 = G__25172__$1;
var seq__25183 = cljs.core.seq.call(null,vec__25182);
var first__25184 = cljs.core.first.call(null,seq__25183);
var seq__25183__$1 = cljs.core.next.call(null,seq__25183);
var pred__$1 = first__25184;
var preds__$2 = seq__25183__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,nret)){
return cljs.spec.alpha.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__25185 = nret;
var G__25186 = forms__$2;
var G__25187 = preds__$2;
ret__$1 = G__25185;
G__25171__$1 = G__25186;
G__25172__$1 = G__25187;
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
var cform = (function (){var G__25190 = cljs.core.count.call(null,preds);
switch (G__25190) {
case (2):
return ((function (G__25190,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
}
});
;})(G__25190,specs))

break;
case (3):
return ((function (G__25190,specs){
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
;})(G__25190,specs))

break;
default:
return ((function (G__25190,specs){
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
var G__25195 = nret;
var G__25196 = (i + (1));
ret = G__25195;
i = G__25196;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__25190,specs))

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha25191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha25191 = (function (forms,preds,gfn,specs,cform,meta25192){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta25192 = meta25192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha25191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_25193,meta25192__$1){
var self__ = this;
var _25193__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha25191(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta25192__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_25193){
var self__ = this;
var _25193__$1 = this;
return self__.meta25192;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25191.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25191.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25191.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25191.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25191.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25191.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1,specs,cform){
return (function (p1__25189_SHARP_,p2__25188_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__25188_SHARP_,p1__25189_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse.call(null,self__.preds));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25191.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25191.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
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

cljs.spec.alpha.t_cljs$spec$alpha25191.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25191.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),null,(1),null)),self__.forms)));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25191.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta25192","meta25192",-1259297386,null)], null);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha25191.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha25191.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha25191";

cljs.spec.alpha.t_cljs$spec$alpha25191.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha25191");
});})(specs,cform))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha25191.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha25191 = ((function (specs,cform){
return (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha25191(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta25192){
return (new cljs.spec.alpha.t_cljs$spec$alpha25191(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta25192));
});})(specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha25191(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
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
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha25205 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha25205 = (function (forms,preds,gfn,meta25206){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta25206 = meta25206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha25205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25207,meta25206__$1){
var self__ = this;
var _25207__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha25205(self__.forms,self__.preds,self__.gfn,meta25206__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha25205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25207){
var self__ = this;
var _25207__$1 = this;
return self__.meta25206;
});

cljs.spec.alpha.t_cljs$spec$alpha25205.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25205.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha25205.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha25205.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25205.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__25197_SHARP_,p2__25198_SHARP_){
return cljs.spec.alpha.dt.call(null,p1__25197_SHARP_,x,p2__25198_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.spec.alpha.invalid_QMARK_,ms))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

cljs.spec.alpha.t_cljs$spec$alpha25205.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__25199_SHARP_){
return cljs.spec.alpha.unform.call(null,p1__25199_SHARP_,x);
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

cljs.spec.alpha.t_cljs$spec$alpha25205.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__25200_SHARP_,p2__25201_SHARP_){
return cljs.spec.alpha.explain_1.call(null,p1__25200_SHARP_,p2__25201_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.alpha.t_cljs$spec$alpha25205.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.fmap.call(null,((function (___$1){
return (function (p1__25202_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__25202_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__25203_SHARP_,p2__25204_SHARP_){
return cljs.spec.alpha.gensub.call(null,p1__25203_SHARP_,overrides,path,rmap,p2__25204_SHARP_);
});})(___$1))
,self__.preds,self__.forms)));
}
});

cljs.spec.alpha.t_cljs$spec$alpha25205.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.alpha.t_cljs$spec$alpha25205.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),null,(1),null)),self__.forms)));
});

cljs.spec.alpha.t_cljs$spec$alpha25205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta25206","meta25206",-361527156,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha25205.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha25205.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha25205";

cljs.spec.alpha.t_cljs$spec$alpha25205.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha25205");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha25205.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha25205 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha25205(forms__$1,preds__$1,gfn__$1,meta25206){
return (new cljs.spec.alpha.t_cljs$spec$alpha25205(forms__$1,preds__$1,gfn__$1,meta25206));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha25205(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.empty_coll = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null),cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.alpha.every_impl = (function cljs$spec$alpha$every_impl(var_args){
var G__25213 = arguments.length;
switch (G__25213) {
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

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__25214,gfn){
var map__25215 = p__25214;
var map__25215__$1 = (((((!((map__25215 == null))))?(((((map__25215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25215):map__25215);
var opts = map__25215__$1;
var max_count = cljs.core.get.call(null,map__25215__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kind_form = cljs.core.get.call(null,map__25215__$1,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697));
var gen_max = cljs.core.get.call(null,map__25215__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var cpred = cljs.core.get.call(null,map__25215__$1,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218));
var conform_keys = cljs.core.get.call(null,map__25215__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var describe_form = cljs.core.get.call(null,map__25215__$1,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911));
var distinct = cljs.core.get.call(null,map__25215__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kfn = cljs.core.get.call(null,map__25215__$1,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897));
var count = cljs.core.get.call(null,map__25215__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__25215__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__25215__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_all = cljs.core.get.call(null,map__25215__$1,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917));
var conform_into = cljs.core.get.call(null,map__25215__$1,new cljs.core.Keyword(null,"into","into",-150836029));
var gen_into = (cljs.core.truth_(conform_into)?cljs.core.empty.call(null,conform_into):cljs.core.get.call(null,cljs.spec.alpha.empty_coll,kind_form));
var spec = (new cljs.core.Delay(((function (gen_into,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (){
return cljs.spec.alpha.specize.call(null,pred);
});})(gen_into,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,null));
var check_QMARK_ = ((function (gen_into,spec,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__25208_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,cljs.core.deref.call(null,spec),p1__25208_SHARP_);
});})(gen_into,spec,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;
var kfn__$1 = (function (){var or__4047__auto__ = kfn;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return ((function (or__4047__auto__,gen_into,spec,check_QMARK_,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (i,v){
return i;
});
;})(or__4047__auto__,gen_into,spec,check_QMARK_,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
}
})();
var addcv = ((function (gen_into,spec,check_QMARK_,kfn__$1,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(gen_into,spec,check_QMARK_,kfn__$1,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;
var cfns = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (x){
if(((cljs.core.vector_QMARK_.call(null,x)) && (((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (ret,i,v,cv){
if((((v === cv)) && (cljs.core.not.call(null,conform_keys)))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.core.identity], null);
} else {
if(((cljs.core.list_QMARK_.call(null,conform_into)) || (cljs.core.seq_QMARK_.call(null,conform_into)) || (((cljs.core.not.call(null,conform_into)) && (((cljs.core.list_QMARK_.call(null,x)) || (cljs.core.seq_QMARK_.call(null,x)))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__25209_SHARP_){
return cljs.core.empty.call(null,(function (){var or__4047__auto__ = conform_into;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return p1__25209_SHARP_;
}
})());
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,addcv,cljs.core.identity], null);

}
}
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha25217 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha25217 = (function (form,max_count,map__25215,check_QMARK_,gfn,gen_max,pred,p__25214,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta25218){
this.form = form;
this.max_count = max_count;
this.map__25215 = map__25215;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.p__25214 = p__25214;
this.cpred = cpred;
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
this.meta25218 = meta25218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha25217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_25219,meta25218__$1){
var self__ = this;
var _25219__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha25217(self__.form,self__.max_count,self__.map__25215,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.p__25214,self__.cpred,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.distinct,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta25218__$1));
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha25217.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_25219){
var self__ = this;
var _25219__$1 = this;
return self__.meta25218;
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha25217.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25217.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha25217.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha25217.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25217.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref.call(null,self__.spec);
if(cljs.core.not.call(null,self__.cpred.call(null,x))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__25220 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__25220,(0),null);
var add = cljs.core.nth.call(null,vec__25220,(1),null);
var complete = cljs.core.nth.call(null,vec__25220,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__25226 = cljs.core.seq.call(null,x);
var vec__25227 = G__25226;
var seq__25228 = cljs.core.seq.call(null,vec__25227);
var first__25229 = cljs.core.first.call(null,seq__25228);
var seq__25228__$1 = cljs.core.next.call(null,seq__25228);
var v = first__25229;
var vs = seq__25228__$1;
var vseq = vec__25227;
var ret__$1 = ret;
var i__$1 = i;
var G__25226__$1 = G__25226;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__25230 = G__25226__$1;
var seq__25231 = cljs.core.seq.call(null,vec__25230);
var first__25232 = cljs.core.first.call(null,seq__25231);
var seq__25231__$1 = cljs.core.next.call(null,seq__25231);
var v__$1 = first__25232;
var vs__$1 = seq__25231__$1;
var vseq__$1 = vec__25230;
if(vseq__$1){
var cv = cljs.spec.alpha.conform_STAR_.call(null,spec__$1,v__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__25257 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__25258 = (i__$2 + (1));
var G__25259 = vs__$1;
ret__$1 = G__25257;
i__$1 = G__25258;
G__25226__$1 = G__25259;
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
var G__25260 = (i + step);
i = G__25260;
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
var G__25236 = cljs.core.seq.call(null,x);
var vec__25237 = G__25236;
var seq__25238 = cljs.core.seq.call(null,vec__25237);
var first__25239 = cljs.core.first.call(null,seq__25238);
var seq__25238__$1 = cljs.core.next.call(null,seq__25238);
var v = first__25239;
var vs = seq__25238__$1;
var vseq = vec__25237;
var i__$1 = i;
var G__25236__$1 = G__25236;
while(true){
var i__$2 = i__$1;
var vec__25240 = G__25236__$1;
var seq__25241 = cljs.core.seq.call(null,vec__25240);
var first__25242 = cljs.core.first.call(null,seq__25241);
var seq__25241__$1 = cljs.core.next.call(null,seq__25241);
var v__$1 = first__25242;
var vs__$1 = seq__25241__$1;
var vseq__$1 = vec__25240;
if((((vseq__$1 == null)) || (cljs.core._EQ_.call(null,i__$2,limit)))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,v__$1))){
var G__25261 = (i__$2 + (1));
var G__25262 = vs__$1;
i__$1 = G__25261;
G__25236__$1 = G__25262;
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
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha25217.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.conform_all)){
var spec__$1 = cljs.core.deref.call(null,self__.spec);
var vec__25243 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__25243,(0),null);
var add = cljs.core.nth.call(null,vec__25243,(1),null);
var complete = cljs.core.nth.call(null,vec__25243,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__25249 = cljs.core.seq.call(null,x);
var vec__25250 = G__25249;
var seq__25251 = cljs.core.seq.call(null,vec__25250);
var first__25252 = cljs.core.first.call(null,seq__25251);
var seq__25251__$1 = cljs.core.next.call(null,seq__25251);
var v = first__25252;
var vs = seq__25251__$1;
var vseq = vec__25250;
var ret__$1 = ret;
var i__$1 = i;
var G__25249__$1 = G__25249;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__25253 = G__25249__$1;
var seq__25254 = cljs.core.seq.call(null,vec__25253);
var first__25255 = cljs.core.first.call(null,seq__25254);
var seq__25254__$1 = cljs.core.next.call(null,seq__25254);
var v__$1 = first__25255;
var vs__$1 = seq__25254__$1;
var vseq__$1 = vec__25253;
if((i__$2 >= cljs.core.count.call(null,x))){
return complete.call(null,ret__$2);
} else {
var G__25263 = add.call(null,ret__$2,i__$2,v__$1,cljs.spec.alpha.unform_STAR_.call(null,spec__$1,v__$1));
var G__25264 = (i__$2 + (1));
var G__25265 = vs__$1;
ret__$1 = G__25263;
i__$1 = G__25264;
G__25249__$1 = G__25265;
continue;
}
break;
}
} else {
return x;
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha25217.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = cljs.spec.alpha.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__4047__auto__,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.alpha.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(or__4047__auto__,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.core.range.call(null),x))));
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha25217.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.alpha.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.gen.alpha.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.call(null,self__.gen_into):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.call(null,((function (pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__25210_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__25210_SHARP_)){
return p1__25210_SHARP_;
} else {
return cljs.core.empty.call(null,p1__25210_SHARP_);
}
});})(pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
,cljs.spec.alpha.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (init){
return cljs.spec.gen.alpha.fmap.call(null,((function (pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (p1__25211_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__25211_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__25211_SHARP_);
}
});})(pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
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
});})(pgen,___$1,gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
);
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha25217.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha25217.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (_){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = self__.describe_form;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
}
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha25217.getBasis = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"map__25215","map__25215",1501835937,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"p__25214","p__25214",41682989,null),new cljs.core.Symbol(null,"cpred","cpred",-540353554,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"describe-form","describe-form",-1410156588,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta25218","meta25218",270174287,null)], null);
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

cljs.spec.alpha.t_cljs$spec$alpha25217.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha25217.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha25217";

cljs.spec.alpha.t_cljs$spec$alpha25217.cljs$lang$ctorPrWriter = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha25217");
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha25217.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha25217 = ((function (gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha25217(form__$1,max_count__$1,map__25215__$2,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,p__25214__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta25218){
return (new cljs.spec.alpha.t_cljs$spec$alpha25217(form__$1,max_count__$1,map__25215__$2,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,p__25214__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta25218));
});})(gen_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__25215,map__25215__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,count,min_count,kind,conform_all,conform_into))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha25217(form,max_count,map__25215__$1,check_QMARK_,gfn,gen_max,pred,p__25214,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.alpha.accept = (function cljs$spec$alpha$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__25266){
var map__25267 = p__25266;
var map__25267__$1 = (((((!((map__25267 == null))))?(((((map__25267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25267):map__25267);
var op = cljs.core.get.call(null,map__25267__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__25269){
var map__25270 = p__25269;
var map__25270__$1 = (((((!((map__25270 == null))))?(((((map__25270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25270):map__25270);
var vec__25271 = cljs.core.get.call(null,map__25270__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__25272 = cljs.core.seq.call(null,vec__25271);
var first__25273 = cljs.core.first.call(null,seq__25272);
var seq__25272__$1 = cljs.core.next.call(null,seq__25272);
var p1 = first__25273;
var pr = seq__25272__$1;
var ps = vec__25271;
var vec__25274 = cljs.core.get.call(null,map__25270__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__25275 = cljs.core.seq.call(null,vec__25274);
var first__25276 = cljs.core.first.call(null,seq__25275);
var seq__25275__$1 = cljs.core.next.call(null,seq__25275);
var k1 = first__25276;
var kr = seq__25275__$1;
var ks = vec__25274;
var vec__25277 = cljs.core.get.call(null,map__25270__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__25278 = cljs.core.seq.call(null,vec__25277);
var first__25279 = cljs.core.first.call(null,seq__25278);
var seq__25278__$1 = cljs.core.next.call(null,seq__25278);
var f1 = first__25279;
var fr = seq__25278__$1;
var forms = vec__25277;
var ret = cljs.core.get.call(null,map__25270__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__25270__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
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
var len__4641__auto___25282 = arguments.length;
var i__4642__auto___25283 = (0);
while(true){
if((i__4642__auto___25283 < len__4641__auto___25282)){
args__4647__auto__.push((arguments[i__4642__auto___25283]));

var G__25284 = (i__4642__auto___25283 + (1));
i__4642__auto___25283 = G__25284;
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
cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq25281){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25281));
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
var pks = cljs.core.filter.call(null,(function (p1__25285_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__25285_SHARP_));
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
return (function (p1__25286_SHARP_){
return cljs.core.nth.call(null,p1__25286_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alpha.alt_STAR_ = (function cljs$spec$alpha$alt_STAR_(ps,ks,forms){
var vec__25287 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__25290 = cljs.core.nth.call(null,vec__25287,(0),null);
var seq__25291 = cljs.core.seq.call(null,vec__25290);
var first__25292 = cljs.core.first.call(null,seq__25291);
var seq__25291__$1 = cljs.core.next.call(null,seq__25291);
var p1 = first__25292;
var pr = seq__25291__$1;
var ps__$1 = vec__25290;
var vec__25293 = cljs.core.nth.call(null,vec__25287,(1),null);
var k1 = cljs.core.nth.call(null,vec__25293,(0),null);
var ks__$1 = vec__25293;
var forms__$1 = cljs.core.nth.call(null,vec__25287,(2),null);
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
var len__4641__auto___25297 = arguments.length;
var i__4642__auto___25298 = (0);
while(true){
if((i__4642__auto___25298 < len__4641__auto___25297)){
args__4647__auto__.push((arguments[i__4642__auto___25298]));

var G__25299 = (i__4642__auto___25298 + (1));
i__4642__auto___25298 = G__25299;
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
cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq25296){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25296));
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
var map__25300 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__25300__$1 = (((((!((map__25300 == null))))?(((((map__25300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25300):map__25300);
var p__$1 = map__25300__$1;
var op = cljs.core.get.call(null,map__25300__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__25300__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__25300__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__25300__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__25300__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__25302 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__25302)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__25302)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__25302)){
var and__4036__auto__ = cljs.spec.alpha.accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__4036__auto__)){
var ret = cljs.spec.alpha.and_preds.call(null,cljs.spec.alpha.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,ret)));
} else {
return and__4036__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__25302)){
var or__4047__auto__ = (p1 === p2);
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__25302)){
return cljs.core.every_QMARK_.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__25302)){
return cljs.core.some.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25302)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.preturn = (function cljs$spec$alpha$preturn(p){
var map__25303 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__25303__$1 = (((((!((map__25303 == null))))?(((((map__25303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25303):map__25303);
var p__$1 = map__25303__$1;
var vec__25304 = cljs.core.get.call(null,map__25303__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__25305 = cljs.core.seq.call(null,vec__25304);
var first__25306 = cljs.core.first.call(null,seq__25305);
var seq__25305__$1 = cljs.core.next.call(null,seq__25305);
var p0 = first__25306;
var pr = seq__25305__$1;
var ps = vec__25304;
var vec__25307 = cljs.core.get.call(null,map__25303__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__25307,(0),null);
var ks = vec__25307;
var op = cljs.core.get.call(null,map__25303__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__25303__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__25303__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__25303__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__25311 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__25311)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__25311)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__25311)){
var pret = cljs.spec.alpha.preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.alpha.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950);
} else {
return cljs.spec.alpha.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__25311)){
return cljs.spec.alpha.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__25311)){
return cljs.spec.alpha.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__25311)){
var vec__25312 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__25315 = cljs.core.nth.call(null,vec__25312,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__25315,(0),null);
var vec__25318 = cljs.core.nth.call(null,vec__25312,(1),null);
var k0 = cljs.core.nth.call(null,vec__25318,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950):cljs.spec.alpha.preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.alpha.tagged_ret.call(null,k0,r);
} else {
return r;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25311)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.op_unform = (function cljs$spec$alpha$op_unform(p,x){
var map__25325 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__25325__$1 = (((((!((map__25325 == null))))?(((((map__25325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25325):map__25325);
var p__$1 = map__25325__$1;
var vec__25326 = cljs.core.get.call(null,map__25325__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__25327 = cljs.core.seq.call(null,vec__25326);
var first__25328 = cljs.core.first.call(null,seq__25327);
var seq__25327__$1 = cljs.core.next.call(null,seq__25327);
var p0 = first__25328;
var pr = seq__25327__$1;
var ps = vec__25326;
var vec__25329 = cljs.core.get.call(null,map__25325__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__25329,(0),null);
var ks = vec__25329;
var op = cljs.core.get.call(null,map__25325__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__25325__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__25325__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__25325__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__25325__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__25325__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__25333 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__25333)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__25333)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__25333)){
var px = cljs.core.reduce.call(null,((function (G__25333,map__25325,map__25325__$1,p__$1,vec__25326,seq__25327,first__25328,seq__25327__$1,p0,pr,ps,vec__25329,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__25322_SHARP_,p2__25321_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__25321_SHARP_,p1__25322_SHARP_);
});})(G__25333,map__25325,map__25325__$1,p__$1,vec__25326,seq__25327,first__25328,seq__25327__$1,p0,pr,ps,vec__25329,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs.spec.alpha.op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__25333)){
return cljs.core.mapcat.call(null,((function (G__25333,map__25325,map__25325__$1,p__$1,vec__25326,seq__25327,first__25328,seq__25327__$1,p0,pr,ps,vec__25329,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__25323_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p1,p1__25323_SHARP_);
});})(G__25333,map__25325,map__25325__$1,p__$1,vec__25326,seq__25327,first__25328,seq__25327__$1,p0,pr,ps,vec__25329,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__25333)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__25333,map__25325,map__25325__$1,p__$1,vec__25326,seq__25327,first__25328,seq__25327__$1,p0,pr,ps,vec__25329,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__25324_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p0,p1__25324_SHARP_);
});})(G__25333,map__25325,map__25325__$1,p__$1,vec__25326,seq__25327,first__25328,seq__25327__$1,p0,pr,ps,vec__25329,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__25333,map__25325,map__25325__$1,p__$1,vec__25326,seq__25327,first__25328,seq__25327__$1,p0,pr,ps,vec__25329,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__25333,map__25325,map__25325__$1,p__$1,vec__25326,seq__25327,first__25328,seq__25327__$1,p0,pr,ps,vec__25329,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__25333)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p0,x)], null);
} else {
var vec__25334 = x;
var k__$1 = cljs.core.nth.call(null,vec__25334,(0),null);
var v = cljs.core.nth.call(null,vec__25334,(1),null);
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25333)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.add_ret = (function cljs$spec$alpha$add_ret(p,r,k){
var map__25337 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__25337__$1 = (((((!((map__25337 == null))))?(((((map__25337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25337):map__25337);
var p__$1 = map__25337__$1;
var op = cljs.core.get.call(null,map__25337__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__25337__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__25337__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__25337,map__25337__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
});})(map__25337,map__25337__$1,p__$1,op,ps,splice))
;
var G__25339 = op;
if(cljs.core._EQ_.call(null,null,G__25339)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__25339)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__25339)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__25339)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__25339)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__25339)){
return prop.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25339)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.deriv = (function cljs$spec$alpha$deriv(p,x){
var map__25341 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__25341__$1 = (((((!((map__25341 == null))))?(((((map__25341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25341):map__25341);
var p__$1 = map__25341__$1;
var forms = cljs.core.get.call(null,map__25341__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__25341__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var vec__25342 = cljs.core.get.call(null,map__25341__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__25343 = cljs.core.seq.call(null,vec__25342);
var first__25344 = cljs.core.first.call(null,seq__25343);
var seq__25343__$1 = cljs.core.next.call(null,seq__25343);
var p0 = first__25344;
var pr = seq__25343__$1;
var ps = vec__25342;
var ret = cljs.core.get.call(null,map__25341__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var op = cljs.core.get.call(null,map__25341__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__25341__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var vec__25345 = cljs.core.get.call(null,map__25341__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__25346 = cljs.core.seq.call(null,vec__25345);
var first__25347 = cljs.core.first.call(null,seq__25346);
var seq__25346__$1 = cljs.core.next.call(null,seq__25346);
var k0 = first__25347;
var kr = seq__25346__$1;
var ks = vec__25345;
var amp = cljs.core.get.call(null,map__25341__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var p1 = cljs.core.get.call(null,map__25341__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
if(cljs.core.truth_(p__$1)){
var G__25349 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__25349)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__25349)){
var ret__$1 = cljs.spec.alpha.dt.call(null,p__$1,x,p__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return null;
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__25349)){
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__25349)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs.spec.alpha.deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p0))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.alpha.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__25349)){
return cljs.spec.alpha.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__25349,map__25341,map__25341__$1,p__$1,forms,p2,vec__25342,seq__25343,first__25344,seq__25343__$1,p0,pr,ps,ret,op,splice,vec__25345,seq__25346,first__25347,seq__25346__$1,k0,kr,ks,amp,p1){
return (function (p1__25340_SHARP_){
return cljs.spec.alpha.deriv.call(null,p1__25340_SHARP_,x);
});})(G__25349,map__25341,map__25341__$1,p__$1,forms,p2,vec__25342,seq__25343,first__25344,seq__25343__$1,p0,pr,ps,ret,op,splice,vec__25345,seq__25346,first__25347,seq__25346__$1,k0,kr,ks,amp,p1))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__25349)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.rep_STAR_.call(null,cljs.spec.alpha.deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p1))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.rep_STAR_.call(null,p2,p2,cljs.spec.alpha.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25349)].join('')));

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
var map__25350 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__25350__$1 = (((((!((map__25350 == null))))?(((((map__25350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25350):map__25350);
var p__$1 = map__25350__$1;
var ps = cljs.core.get.call(null,map__25350__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__25350__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__25350__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var op = cljs.core.get.call(null,map__25350__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__25350__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__25350__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var maybe = cljs.core.get.call(null,map__25350__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var amp = cljs.core.get.call(null,map__25350__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var p1 = cljs.core.get.call(null,map__25350__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
if(cljs.core.truth_(p__$1)){
var G__25352 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__25352)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__25352)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__25352)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.spec.alpha","&","cljs.spec.alpha/&",1635809823,null),amp,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__25352)){
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__25352)){
if(cljs.core.truth_(maybe)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),(new cljs.core.List(null,maybe,null,(1),null)),(2),null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","alt","cljs.spec.alpha/alt",-2130750332,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__25352)){
return (new cljs.core.List(null,(cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null):new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null)),(new cljs.core.List(null,forms,null,(1),null)),(2),null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25352)].join('')));

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
var vec__25353 = input;
var x = cljs.core.nth.call(null,vec__25353,(0),null);
var input__$1 = vec__25353;
var map__25356 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__25356__$1 = (((((!((map__25356 == null))))?(((((map__25356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25356):map__25356);
var p__$1 = map__25356__$1;
var op = cljs.core.get.call(null,map__25356__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__25356__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__25356__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__25356__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__25356__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__25356__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__25356__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__5733__auto__ = cljs.spec.alpha.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__25353,x,input__$1,map__25356,map__25356__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),form__$1,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__25353,x,input__$1,map__25356,map__25356__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__25358 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__25358)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__25358)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.alpha.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__25358)){
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__25358)){
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
var vec__25359 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__25358,vec__25353,x,input__$1,map__25356,map__25356__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__25362){
var vec__25363 = p__25362;
var p__$2 = cljs.core.nth.call(null,vec__25363,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__25358,vec__25353,x,input__$1,map__25356,map__25356__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__25359,(0),null);
var k = cljs.core.nth.call(null,vec__25359,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__25359,(2),null);
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__25358)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.alpha.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__25358,vec__25353,x,input__$1,map__25356,map__25356__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs.spec.alpha.op_explain.call(null,(function (){var or__4047__auto__ = form__$1;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.spec.alpha.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__25358,vec__25353,x,input__$1,map__25356,map__25356__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__25358)){
return cljs.spec.alpha.op_explain.call(null,(((p1 === p2))?forms:cljs.spec.alpha.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25358)].join('')));

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
var map__25367 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__25367__$1 = (((((!((map__25367 == null))))?(((((map__25367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25367):map__25367);
var p__$1 = map__25367__$1;
var ps = cljs.core.get.call(null,map__25367__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__25367__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__25367__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__25367__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var gfn = cljs.core.get.call(null,map__25367__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375));
var op = cljs.core.get.call(null,map__25367__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__25367__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__25367__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__25367__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var id = cljs.core.get.call(null,map__25367__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__25367,map__25367__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__25367,map__25367__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
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
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay(((function (map__25367,map__25367__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (){
return cljs.spec.alpha.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__4047__auto__ = f__$1;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return p__$2;
}
})());
});})(map__25367,map__25367__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
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
});})(map__25367,map__25367__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
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
});})(map__25367,map__25367__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
var or__4047__auto__ = (function (){var temp__5735__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__5735__auto__)){
var g = temp__5735__auto__;
var G__25370 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__25370)){
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__25370)){
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
var G__25371 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__25371)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.gen.alpha.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__25371)){
var temp__5735__auto__ = cljs.spec.alpha.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__5735__auto__)){
var g = temp__5735__auto__;
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__25371)){
return cljs.spec.alpha.re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.alpha.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__25371)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__25371)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__25371)){
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id)){
return cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__5735__auto__ = cljs.spec.alpha.re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__5735__auto__)){
var g = temp__5735__auto__;
return cljs.spec.gen.alpha.fmap.call(null,((function (g,temp__5735__auto__,G__25371,or__4047__auto____$1,or__4047__auto__,map__25367,map__25367__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens){
return (function (p1__25366_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__25366_SHARP_);
});})(g,temp__5735__auto__,G__25371,or__4047__auto____$1,or__4047__auto__,map__25367,map__25367__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens))
,cljs.spec.gen.alpha.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25371)].join('')));

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
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__25372){
while(true){
var vec__25373 = p__25372;
var seq__25374 = cljs.core.seq.call(null,vec__25373);
var first__25375 = cljs.core.first.call(null,seq__25374);
var seq__25374__$1 = cljs.core.next.call(null,seq__25374);
var x = first__25375;
var xs = seq__25374__$1;
var data = vec__25373;
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
var G__25376 = dp;
var G__25377 = xs;
p = G__25376;
p__25372 = G__25377;
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
var G__25381 = input;
var vec__25382 = G__25381;
var seq__25383 = cljs.core.seq.call(null,vec__25382);
var first__25384 = cljs.core.first.call(null,seq__25383);
var seq__25383__$1 = cljs.core.next.call(null,seq__25383);
var x = first__25384;
var xs = seq__25383__$1;
var data = vec__25382;
var i = (0);
var p__$1 = p;
var G__25381__$1 = G__25381;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__25385 = G__25381__$1;
var seq__25386 = cljs.core.seq.call(null,vec__25385);
var first__25387 = cljs.core.first.call(null,seq__25386);
var seq__25386__$1 = cljs.core.next.call(null,seq__25386);
var x__$1 = first__25387;
var xs__$1 = seq__25386__$1;
var data__$1 = vec__25385;
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
var G__25388 = dp;
var G__25389 = xs__$1;
var G__25390 = (i__$2 + (1));
p__$1 = G__25388;
G__25381__$1 = G__25389;
i__$1 = G__25390;
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
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha25391 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha25391 = (function (re,gfn,meta25392){
this.re = re;
this.gfn = gfn;
this.meta25392 = meta25392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha25391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25393,meta25392__$1){
var self__ = this;
var _25393__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha25391(self__.re,self__.gfn,meta25392__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha25391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25393){
var self__ = this;
var _25393__$1 = this;
return self__.meta25392;
});

cljs.spec.alpha.t_cljs$spec$alpha25391.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25391.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha25391.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha25391.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25391.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)))){
return cljs.spec.alpha.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
});

cljs.spec.alpha.t_cljs$spec$alpha25391.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_unform.call(null,self__.re,x);
});

cljs.spec.alpha.t_cljs$spec$alpha25391.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)))){
return cljs.spec.alpha.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.alpha.t_cljs$spec$alpha25391.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.alpha.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.alpha.op_describe.call(null,self__.re));
}
});

cljs.spec.alpha.t_cljs$spec$alpha25391.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.alpha.t_cljs$spec$alpha25391.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_describe.call(null,self__.re);
});

cljs.spec.alpha.t_cljs$spec$alpha25391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta25392","meta25392",-78982569,null)], null);
});

cljs.spec.alpha.t_cljs$spec$alpha25391.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha25391.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha25391";

cljs.spec.alpha.t_cljs$spec$alpha25391.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha25391");
});

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha25391.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha25391 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha25391(re__$1,gfn__$1,meta25392){
return (new cljs.spec.alpha.t_cljs$spec$alpha25391(re__$1,gfn__$1,meta25392));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha25391(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25394_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_.call(null,f,specs,p1__25394_SHARP_);
});})(g))
);
var ret = cljs.spec.gen.alpha.quick_check.call(null,iters,prop);
var temp__5733__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__25395 = temp__5733__auto__;
var smallest = cljs.core.nth.call(null,vec__25395,(0),null);
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
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha25398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.alpha.t_cljs$spec$alpha25398 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta25399){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta25399 = meta25399;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha25398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_25400,meta25399__$1){
var self__ = this;
var _25400__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha25398(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta25399__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25398.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_25400){
var self__ = this;
var _25400__$1 = this;
return self__.meta25399;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25398.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25398.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25398.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25398.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25398.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25398.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25398.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs){
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

cljs.spec.alpha.t_cljs$spec$alpha25398.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25398.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.alpha.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e25401){if((e25401 instanceof Error)){
var t = e25401;
return t;
} else {
throw e25401;

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

cljs.spec.alpha.t_cljs$spec$alpha25398.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.return$.call(null,((function (___$3,specs){
return (function() { 
var G__25406__delegate = function (args){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__25402_25407 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25403_25408 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25404_25409 = true;
var _STAR_print_fn_STAR__temp_val__25405_25410 = ((function (_STAR_print_newline_STAR__orig_val__25402_25407,_STAR_print_fn_STAR__orig_val__25403_25408,_STAR_print_newline_STAR__temp_val__25404_25409,sb__4572__auto__,___$3,specs){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__25402_25407,_STAR_print_fn_STAR__orig_val__25403_25408,_STAR_print_newline_STAR__temp_val__25404_25409,sb__4572__auto__,___$3,specs))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25404_25409;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25405_25410;

try{cljs.spec.alpha.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25403_25408;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25402_25407;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})()),"\n","(pvalid? argspec args)"].join('')));
}

return cljs.spec.gen.alpha.generate.call(null,cljs.spec.alpha.gen.call(null,self__.retspec,overrides));
};
var G__25406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25411__i = 0, G__25411__a = new Array(arguments.length -  0);
while (G__25411__i < G__25411__a.length) {G__25411__a[G__25411__i] = arguments[G__25411__i + 0]; ++G__25411__i;}
  args = new cljs.core.IndexedSeq(G__25411__a,0,null);
} 
return G__25406__delegate.call(this,args);};
G__25406.cljs$lang$maxFixedArity = 0;
G__25406.cljs$lang$applyTo = (function (arglist__25412){
var args = cljs.core.seq(arglist__25412);
return G__25406__delegate(args);
});
G__25406.cljs$core$IFn$_invoke$arity$variadic = G__25406__delegate;
return G__25406;
})()
;})(___$3,specs))
);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25398.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25398.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,self__.aform,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,(1),null)),(new cljs.core.List(null,self__.rform,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,(1),null)),(new cljs.core.List(null,self__.fform,null,(1),null)))));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25398.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta25399","meta25399",772011110,null)], null);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha25398.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha25398.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha25398";

cljs.spec.alpha.t_cljs$spec$alpha25398.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha25398");
});})(specs))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha25398.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha25398 = ((function (specs){
return (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha25398(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta25399){
return (new cljs.spec.alpha.t_cljs$spec$alpha25398(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta25399));
});})(specs))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha25398(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("cljs.spec.alpha","kvs->map","cljs.spec.alpha/kvs->map",579713455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__25413#","p1__25413#",2053851967,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"p1__25413#","p1__25413#",2053851967,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"p1__25413#","p1__25413#",2053851967,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__25414#","p1__25414#",1117075307,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__25414#","p1__25414#",1117075307,null)))),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"%","%",-950237169,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__25413_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),p1__25413_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),p1__25413_SHARP_));
}),null,true,(function (p1__25414_SHARP_){
return cljs.core.map.call(null,(function (p__25415){
var vec__25416 = p__25415;
var k = cljs.core.nth.call(null,vec__25416,(0),null);
var v = cljs.core.nth.call(null,vec__25416,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),k,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),v], null);
}),p1__25414_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.alpha.nonconforming = (function cljs$spec$alpha$nonconforming(spec){
var spec__$1 = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.call(null,spec);
}),null));
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha25419 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha25419 = (function (spec,meta25420){
this.spec = spec;
this.meta25420 = meta25420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha25419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_25421,meta25420__$1){
var self__ = this;
var _25421__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha25419(self__.spec,meta25420__$1));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25419.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_25421){
var self__ = this;
var _25421__$1 = this;
return self__.meta25420;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25419.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25419.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25419.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25419.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25419.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
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

cljs.spec.alpha.t_cljs$spec$alpha25419.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25419.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_.call(null,cljs.core.deref.call(null,self__.spec),path,via,in$,x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25419.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_.call(null,cljs.core.deref.call(null,self__.spec),overrides,path,rmap);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25419.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.nonconforming.call(null,cljs.spec.alpha.with_gen_STAR_.call(null,cljs.core.deref.call(null,self__.spec),gfn));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25419.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nonconforming","cljs.spec.alpha/nonconforming",-1009218508,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha.describe_STAR_.call(null,cljs.core.deref.call(null,self__.spec)),null,(1),null)))));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25419.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta25420","meta25420",-1605182175,null)], null);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha25419.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha25419.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha25419";

cljs.spec.alpha.t_cljs$spec$alpha25419.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha25419");
});})(spec__$1))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha25419.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha25419 = ((function (spec__$1){
return (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha25419(spec__$2,meta25420){
return (new cljs.spec.alpha.t_cljs$spec$alpha25419(spec__$2,meta25420));
});})(spec__$1))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha25419(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.alpha.nilable_impl = (function cljs$spec$alpha$nilable_impl(form,pred,gfn){
var spec = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.call(null,pred,form);
}),null));
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha25422 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha25422 = (function (form,pred,gfn,spec,meta25423){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta25423 = meta25423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha25422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_25424,meta25423__$1){
var self__ = this;
var _25424__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha25422(self__.form,self__.pred,self__.gfn,self__.spec,meta25423__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha25422.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_25424){
var self__ = this;
var _25424__$1 = this;
return self__.meta25423;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha25422.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25422.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha25422.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha25422.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha25422.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec){
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

cljs.spec.alpha.t_cljs$spec$alpha25422.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec){
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

cljs.spec.alpha.t_cljs$spec$alpha25422.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec){
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

cljs.spec.alpha.t_cljs$spec$alpha25422.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec){
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

cljs.spec.alpha.t_cljs$spec$alpha25422.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.nilable_impl.call(null,self__.form,self__.pred,gfn__$1);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha25422.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)))));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha25422.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta25423","meta25423",1015690450,null)], null);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha25422.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha25422.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha25422";

cljs.spec.alpha.t_cljs$spec$alpha25422.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.spec.alpha/t_cljs$spec$alpha25422");
});})(spec))
;

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha25422.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha25422 = ((function (spec){
return (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha25422(form__$1,pred__$1,gfn__$1,spec__$1,meta25423){
return (new cljs.spec.alpha.t_cljs$spec$alpha25422(form__$1,pred__$1,gfn__$1,spec__$1,meta25423));
});})(spec))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha25422(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.alpha.exercise = (function cljs$spec$alpha$exercise(var_args){
var G__25427 = arguments.length;
switch (G__25427) {
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
return cljs.core.map.call(null,(function (p1__25425_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__25425_SHARP_,cljs.spec.alpha.conform.call(null,spec,p1__25425_SHARP_)],null));
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
var _STAR_print_newline_STAR__orig_val__25429_25433 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__25430_25434 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__25431_25435 = true;
var _STAR_print_fn_STAR__temp_val__25432_25436 = ((function (_STAR_print_newline_STAR__orig_val__25429_25433,_STAR_print_fn_STAR__orig_val__25430_25434,_STAR_print_newline_STAR__temp_val__25431_25435,sb__4572__auto__,ed){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__25429_25433,_STAR_print_fn_STAR__orig_val__25430_25434,_STAR_print_newline_STAR__temp_val__25431_25435,sb__4572__auto__,ed))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__25431_25435;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__25432_25436;

try{cljs.spec.alpha.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__25430_25434;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__25429_25433;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
})())].join('')));
}
});

//# sourceMappingURL=alpha.js.map
