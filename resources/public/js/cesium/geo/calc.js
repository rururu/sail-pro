// Compiled by ClojureScript 1.11.132 {:optimizations :none}
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
geo.calc.future_pos_js = (function geo$calc$future_pos_js(p__2079,crs,spd,tim){
var vec__2080 = p__2079;
var lat = cljs.core.nth.call(null,vec__2080,(0),null);
var lon = cljs.core.nth.call(null,vec__2080,(1),null);
var phi = geo.calc.radians.call(null,lat);
var lam = geo.calc.radians.call(null,lon);
var dir = geo.calc.radians.call(null,crs);
var way = (spd * tim);
var way__$1 = geo.calc.radians.call(null,(way / (60)));
var vec__2083 = geo.calc.spherical_between_js.call(null,phi,lam,way__$1,dir);
var phi2 = cljs.core.nth.call(null,vec__2083,(0),null);
var lam2 = cljs.core.nth.call(null,vec__2083,(1),null);
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
var iter__5480__auto__ = (function geo$calc$ray_$_iter__2086(s__2087){
return (new cljs.core.LazySeq(null,(function (){
var s__2087__$1 = s__2087;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__2087__$1);
if(temp__5804__auto__){
var s__2087__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2087__$2)){
var c__5478__auto__ = cljs.core.chunk_first.call(null,s__2087__$2);
var size__5479__auto__ = cljs.core.count.call(null,c__5478__auto__);
var b__2089 = cljs.core.chunk_buffer.call(null,size__5479__auto__);
if((function (){var i__2088 = (0);
while(true){
if((i__2088 < size__5479__auto__)){
var c = cljs.core._nth.call(null,c__5478__auto__,i__2088);
cljs.core.chunk_append.call(null,b__2089,geo.calc.spherical_between_js.call(null,phi,lam,c,az));

var G__2090 = (i__2088 + (1));
i__2088 = G__2090;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2089),geo$calc$ray_$_iter__2086.call(null,cljs.core.chunk_rest.call(null,s__2087__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2089),null);
}
} else {
var c = cljs.core.first.call(null,s__2087__$2);
return cljs.core.cons.call(null,geo.calc.spherical_between_js.call(null,phi,lam,c,az),geo$calc$ray_$_iter__2086.call(null,cljs.core.rest.call(null,s__2087__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__.call(null,cljs.core.range.call(null,(0),mc,s));
});
geo.calc.rumb = (function geo$calc$rumb(bea){
var pred__2091 = cljs.core._GT_;
var expr__2092 = bea;
if(cljs.core.truth_(pred__2091.call(null,5.625,expr__2092))){
return "N";
} else {
if(cljs.core.truth_(pred__2091.call(null,16.875,expr__2092))){
return "NtO";
} else {
if(cljs.core.truth_(pred__2091.call(null,28.125,expr__2092))){
return "NNO";
} else {
if(cljs.core.truth_(pred__2091.call(null,39.375,expr__2092))){
return "NOtN";
} else {
if(cljs.core.truth_(pred__2091.call(null,50.625,expr__2092))){
return "NO";
} else {
if(cljs.core.truth_(pred__2091.call(null,61.875,expr__2092))){
return "NOtO";
} else {
if(cljs.core.truth_(pred__2091.call(null,73.125,expr__2092))){
return "ONO";
} else {
if(cljs.core.truth_(pred__2091.call(null,84.375,expr__2092))){
return "OtN";
} else {
if(cljs.core.truth_(pred__2091.call(null,95.625,expr__2092))){
return "O";
} else {
if(cljs.core.truth_(pred__2091.call(null,106.875,expr__2092))){
return "OtS";
} else {
if(cljs.core.truth_(pred__2091.call(null,118.125,expr__2092))){
return "OSO";
} else {
if(cljs.core.truth_(pred__2091.call(null,129.375,expr__2092))){
return "SOtO";
} else {
if(cljs.core.truth_(pred__2091.call(null,140.625,expr__2092))){
return "SO";
} else {
if(cljs.core.truth_(pred__2091.call(null,151.875,expr__2092))){
return "SOtS";
} else {
if(cljs.core.truth_(pred__2091.call(null,163.125,expr__2092))){
return "SSO";
} else {
if(cljs.core.truth_(pred__2091.call(null,174.375,expr__2092))){
return "StO";
} else {
if(cljs.core.truth_(pred__2091.call(null,185.625,expr__2092))){
return "S";
} else {
if(cljs.core.truth_(pred__2091.call(null,196.875,expr__2092))){
return "StW";
} else {
if(cljs.core.truth_(pred__2091.call(null,208.125,expr__2092))){
return "SSW";
} else {
if(cljs.core.truth_(pred__2091.call(null,219.375,expr__2092))){
return "SWtS";
} else {
if(cljs.core.truth_(pred__2091.call(null,230.625,expr__2092))){
return "SW";
} else {
if(cljs.core.truth_(pred__2091.call(null,241.875,expr__2092))){
return "SWtW";
} else {
if(cljs.core.truth_(pred__2091.call(null,253.125,expr__2092))){
return "WSW";
} else {
if(cljs.core.truth_(pred__2091.call(null,264.375,expr__2092))){
return "WtS";
} else {
if(cljs.core.truth_(pred__2091.call(null,275.625,expr__2092))){
return "W";
} else {
if(cljs.core.truth_(pred__2091.call(null,286.875,expr__2092))){
return "WtN";
} else {
if(cljs.core.truth_(pred__2091.call(null,298.125,expr__2092))){
return "WNW";
} else {
if(cljs.core.truth_(pred__2091.call(null,309.375,expr__2092))){
return "NWtW";
} else {
if(cljs.core.truth_(pred__2091.call(null,320.625,expr__2092))){
return "NW";
} else {
if(cljs.core.truth_(pred__2091.call(null,331.875,expr__2092))){
return "NWtN";
} else {
if(cljs.core.truth_(pred__2091.call(null,343.125,expr__2092))){
return "NNW";
} else {
if(cljs.core.truth_(pred__2091.call(null,354.375,expr__2092))){
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
