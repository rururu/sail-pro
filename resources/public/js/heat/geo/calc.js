// Compiled by ClojureScript 1.10.439 {}
goog.provide('geo.calc');
goog.require('cljs.core');
geo.calc.radians = (function geo$calc$radians(deg){
return ((deg * Math.PI) / (180));
});
geo.calc.degrees = (function geo$calc$degrees(rad){
return ((rad * (180)) / Math.PI);
});
geo.calc.spherical_between_js = (function geo$calc$spherical_between_js(phi1,lambda0,c,az){
var cosphi1 = Math.cos(phi1);
var sinphi1 = Math.sin(phi1);
var cosaz = Math.cos(az);
var sinaz = Math.sin(az);
var sinc = Math.sin(c);
var cosc = Math.cos(c);
var phi2 = Math.asin(((sinphi1 * cosc) + ((cosphi1 * sinc) * cosaz)));
var lam2 = (Math.atan2((sinc * sinaz),((cosphi1 * cosc) - ((sinphi1 * sinc) * cosaz))) + lambda0);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phi2,lam2], null);
});
geo.calc.future_pos_js = (function geo$calc$future_pos_js(p__24548,crs,spd,tim){
var vec__24549 = p__24548;
var lat = cljs.core.nth.call(null,vec__24549,(0),null);
var lon = cljs.core.nth.call(null,vec__24549,(1),null);
var phi = geo.calc.radians.call(null,lat);
var lam = geo.calc.radians.call(null,lon);
var dir = geo.calc.radians.call(null,crs);
var way = (spd * tim);
var way__$1 = geo.calc.radians.call(null,(way / (60)));
var vec__24552 = geo.calc.spherical_between_js.call(null,phi,lam,way__$1,dir);
var phi2 = cljs.core.nth.call(null,vec__24552,(0),null);
var lam2 = cljs.core.nth.call(null,vec__24552,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.degrees.call(null,phi2),geo.calc.degrees.call(null,lam2)], null);
});
geo.calc.norm_crs = (function geo$calc$norm_crs(x){
if((x > (360))){
return (x - (360));
} else {
if((x < (0))){
return (x + (360));
} else {
return x;

}
}
});
geo.calc.ray = (function geo$calc$ray(lat,lon,bea,dis,step){
var dtr = (Math.PI / (180));
var phi = (lat * dtr);
var lam = (lon * dtr);
var az = (bea * dtr);
var mc = ((dis * dtr) / (60));
var s = ((step * dtr) / (60));
var iter__4434__auto__ = ((function (dtr,phi,lam,az,mc,s){
return (function geo$calc$ray_$_iter__24555(s__24556){
return (new cljs.core.LazySeq(null,((function (dtr,phi,lam,az,mc,s){
return (function (){
var s__24556__$1 = s__24556;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__24556__$1);
if(temp__5735__auto__){
var s__24556__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24556__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__24556__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__24558 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__24557 = (0);
while(true){
if((i__24557 < size__4433__auto__)){
var c = cljs.core._nth.call(null,c__4432__auto__,i__24557);
cljs.core.chunk_append.call(null,b__24558,geo.calc.spherical_between_js.call(null,phi,lam,c,az));

var G__24559 = (i__24557 + (1));
i__24557 = G__24559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24558),geo$calc$ray_$_iter__24555.call(null,cljs.core.chunk_rest.call(null,s__24556__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24558),null);
}
} else {
var c = cljs.core.first.call(null,s__24556__$2);
return cljs.core.cons.call(null,geo.calc.spherical_between_js.call(null,phi,lam,c,az),geo$calc$ray_$_iter__24555.call(null,cljs.core.rest.call(null,s__24556__$2)));
}
} else {
return null;
}
break;
}
});})(dtr,phi,lam,az,mc,s))
,null,null));
});})(dtr,phi,lam,az,mc,s))
;
return iter__4434__auto__.call(null,cljs.core.range.call(null,(0),mc,s));
});
geo.calc.rumb = (function geo$calc$rumb(bea){
var pred__24560 = cljs.core._GT_;
var expr__24561 = bea;
if(cljs.core.truth_(pred__24560.call(null,5.625,expr__24561))){
return "N";
} else {
if(cljs.core.truth_(pred__24560.call(null,16.875,expr__24561))){
return "NtO";
} else {
if(cljs.core.truth_(pred__24560.call(null,28.125,expr__24561))){
return "NNO";
} else {
if(cljs.core.truth_(pred__24560.call(null,39.375,expr__24561))){
return "NOtN";
} else {
if(cljs.core.truth_(pred__24560.call(null,50.625,expr__24561))){
return "NO";
} else {
if(cljs.core.truth_(pred__24560.call(null,61.875,expr__24561))){
return "NOtO";
} else {
if(cljs.core.truth_(pred__24560.call(null,73.125,expr__24561))){
return "ONO";
} else {
if(cljs.core.truth_(pred__24560.call(null,84.375,expr__24561))){
return "OtN";
} else {
if(cljs.core.truth_(pred__24560.call(null,95.625,expr__24561))){
return "O";
} else {
if(cljs.core.truth_(pred__24560.call(null,106.875,expr__24561))){
return "OtS";
} else {
if(cljs.core.truth_(pred__24560.call(null,118.125,expr__24561))){
return "OSO";
} else {
if(cljs.core.truth_(pred__24560.call(null,129.375,expr__24561))){
return "SOtO";
} else {
if(cljs.core.truth_(pred__24560.call(null,140.625,expr__24561))){
return "SO";
} else {
if(cljs.core.truth_(pred__24560.call(null,151.875,expr__24561))){
return "SOtS";
} else {
if(cljs.core.truth_(pred__24560.call(null,163.125,expr__24561))){
return "SSO";
} else {
if(cljs.core.truth_(pred__24560.call(null,174.375,expr__24561))){
return "StO";
} else {
if(cljs.core.truth_(pred__24560.call(null,185.625,expr__24561))){
return "S";
} else {
if(cljs.core.truth_(pred__24560.call(null,196.875,expr__24561))){
return "StW";
} else {
if(cljs.core.truth_(pred__24560.call(null,208.125,expr__24561))){
return "SSW";
} else {
if(cljs.core.truth_(pred__24560.call(null,219.375,expr__24561))){
return "SWtS";
} else {
if(cljs.core.truth_(pred__24560.call(null,230.625,expr__24561))){
return "SW";
} else {
if(cljs.core.truth_(pred__24560.call(null,241.875,expr__24561))){
return "SWtW";
} else {
if(cljs.core.truth_(pred__24560.call(null,253.125,expr__24561))){
return "WSW";
} else {
if(cljs.core.truth_(pred__24560.call(null,264.375,expr__24561))){
return "WtS";
} else {
if(cljs.core.truth_(pred__24560.call(null,275.625,expr__24561))){
return "W";
} else {
if(cljs.core.truth_(pred__24560.call(null,286.875,expr__24561))){
return "WtN";
} else {
if(cljs.core.truth_(pred__24560.call(null,298.125,expr__24561))){
return "WNW";
} else {
if(cljs.core.truth_(pred__24560.call(null,309.375,expr__24561))){
return "NWtW";
} else {
if(cljs.core.truth_(pred__24560.call(null,320.625,expr__24561))){
return "NW";
} else {
if(cljs.core.truth_(pred__24560.call(null,331.875,expr__24561))){
return "NWtN";
} else {
if(cljs.core.truth_(pred__24560.call(null,343.125,expr__24561))){
return "NNW";
} else {
if(cljs.core.truth_(pred__24560.call(null,354.375,expr__24561))){
return "NtW";
} else {
return "N";
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

//# sourceMappingURL=calc.js.map
