// Compiled by ClojureScript 1.10.439 {}
goog.provide('light.geo.calc');
goog.require('cljs.core');
light.geo.calc.radians = (function light$geo$calc$radians(deg){
return ((deg * Math.PI) / (180));
});
light.geo.calc.degrees = (function light$geo$calc$degrees(rad){
return ((rad * (180)) / Math.PI);
});
light.geo.calc.spherical_between_js = (function light$geo$calc$spherical_between_js(phi1,lambda0,c,az){
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
light.geo.calc.future_pos_js = (function light$geo$calc$future_pos_js(p__21854,crs,spd,tim){
var vec__21855 = p__21854;
var lat = cljs.core.nth.call(null,vec__21855,(0),null);
var lon = cljs.core.nth.call(null,vec__21855,(1),null);
var phi = light.geo.calc.radians.call(null,lat);
var lam = light.geo.calc.radians.call(null,lon);
var dir = light.geo.calc.radians.call(null,crs);
var way = (spd * tim);
var way__$1 = light.geo.calc.radians.call(null,(way / (60)));
var vec__21858 = light.geo.calc.spherical_between_js.call(null,phi,lam,way__$1,dir);
var phi2 = cljs.core.nth.call(null,vec__21858,(0),null);
var lam2 = cljs.core.nth.call(null,vec__21858,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [light.geo.calc.degrees.call(null,phi2),light.geo.calc.degrees.call(null,lam2)], null);
});
light.geo.calc.norm_crs = (function light$geo$calc$norm_crs(x){
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
light.geo.calc.ray = (function light$geo$calc$ray(lat,lon,bea,dis,step){
var dtr = (Math.PI / (180));
var phi = (lat * dtr);
var lam = (lon * dtr);
var az = (bea * dtr);
var mc = ((dis * dtr) / (60));
var s = ((step * dtr) / (60));
var iter__4434__auto__ = ((function (dtr,phi,lam,az,mc,s){
return (function light$geo$calc$ray_$_iter__21861(s__21862){
return (new cljs.core.LazySeq(null,((function (dtr,phi,lam,az,mc,s){
return (function (){
var s__21862__$1 = s__21862;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__21862__$1);
if(temp__5735__auto__){
var s__21862__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21862__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__21862__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__21864 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__21863 = (0);
while(true){
if((i__21863 < size__4433__auto__)){
var c = cljs.core._nth.call(null,c__4432__auto__,i__21863);
cljs.core.chunk_append.call(null,b__21864,light.geo.calc.spherical_between_js.call(null,phi,lam,c,az));

var G__21865 = (i__21863 + (1));
i__21863 = G__21865;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21864),light$geo$calc$ray_$_iter__21861.call(null,cljs.core.chunk_rest.call(null,s__21862__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21864),null);
}
} else {
var c = cljs.core.first.call(null,s__21862__$2);
return cljs.core.cons.call(null,light.geo.calc.spherical_between_js.call(null,phi,lam,c,az),light$geo$calc$ray_$_iter__21861.call(null,cljs.core.rest.call(null,s__21862__$2)));
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
light.geo.calc.rumb = (function light$geo$calc$rumb(bea){
var pred__21866 = cljs.core._GT_;
var expr__21867 = bea;
if(cljs.core.truth_(pred__21866.call(null,5.625,expr__21867))){
return "N";
} else {
if(cljs.core.truth_(pred__21866.call(null,16.875,expr__21867))){
return "NtO";
} else {
if(cljs.core.truth_(pred__21866.call(null,28.125,expr__21867))){
return "NNO";
} else {
if(cljs.core.truth_(pred__21866.call(null,39.375,expr__21867))){
return "NOtN";
} else {
if(cljs.core.truth_(pred__21866.call(null,50.625,expr__21867))){
return "NO";
} else {
if(cljs.core.truth_(pred__21866.call(null,61.875,expr__21867))){
return "NOtO";
} else {
if(cljs.core.truth_(pred__21866.call(null,73.125,expr__21867))){
return "ONO";
} else {
if(cljs.core.truth_(pred__21866.call(null,84.375,expr__21867))){
return "OtN";
} else {
if(cljs.core.truth_(pred__21866.call(null,95.625,expr__21867))){
return "O";
} else {
if(cljs.core.truth_(pred__21866.call(null,106.875,expr__21867))){
return "OtS";
} else {
if(cljs.core.truth_(pred__21866.call(null,118.125,expr__21867))){
return "OSO";
} else {
if(cljs.core.truth_(pred__21866.call(null,129.375,expr__21867))){
return "SOtO";
} else {
if(cljs.core.truth_(pred__21866.call(null,140.625,expr__21867))){
return "SO";
} else {
if(cljs.core.truth_(pred__21866.call(null,151.875,expr__21867))){
return "SOtS";
} else {
if(cljs.core.truth_(pred__21866.call(null,163.125,expr__21867))){
return "SSO";
} else {
if(cljs.core.truth_(pred__21866.call(null,174.375,expr__21867))){
return "StO";
} else {
if(cljs.core.truth_(pred__21866.call(null,185.625,expr__21867))){
return "S";
} else {
if(cljs.core.truth_(pred__21866.call(null,196.875,expr__21867))){
return "StW";
} else {
if(cljs.core.truth_(pred__21866.call(null,208.125,expr__21867))){
return "SSW";
} else {
if(cljs.core.truth_(pred__21866.call(null,219.375,expr__21867))){
return "SWtS";
} else {
if(cljs.core.truth_(pred__21866.call(null,230.625,expr__21867))){
return "SW";
} else {
if(cljs.core.truth_(pred__21866.call(null,241.875,expr__21867))){
return "SWtW";
} else {
if(cljs.core.truth_(pred__21866.call(null,253.125,expr__21867))){
return "WSW";
} else {
if(cljs.core.truth_(pred__21866.call(null,264.375,expr__21867))){
return "WtS";
} else {
if(cljs.core.truth_(pred__21866.call(null,275.625,expr__21867))){
return "W";
} else {
if(cljs.core.truth_(pred__21866.call(null,286.875,expr__21867))){
return "WtN";
} else {
if(cljs.core.truth_(pred__21866.call(null,298.125,expr__21867))){
return "WNW";
} else {
if(cljs.core.truth_(pred__21866.call(null,309.375,expr__21867))){
return "NWtW";
} else {
if(cljs.core.truth_(pred__21866.call(null,320.625,expr__21867))){
return "NW";
} else {
if(cljs.core.truth_(pred__21866.call(null,331.875,expr__21867))){
return "NWtN";
} else {
if(cljs.core.truth_(pred__21866.call(null,343.125,expr__21867))){
return "NNW";
} else {
if(cljs.core.truth_(pred__21866.call(null,354.375,expr__21867))){
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
