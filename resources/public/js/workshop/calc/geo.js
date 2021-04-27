// Compiled by ClojureScript 1.10.439 {}
goog.provide('calc.geo');
goog.require('cljs.core');
calc.geo.spherical_between = (function calc$geo$spherical_between(phi1,lambda0,c,az){
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
calc.geo.spherical_distance = (function calc$geo$spherical_distance(phi1,lambda0,phi,lambda){
var pdiff = Math.sin(((phi - phi1) / 2.0));
var ldiff = Math.sin(((lambda - lambda0) / 2.0));
var rval = Math.sqrt(((pdiff * pdiff) + (((Math.cos(phi1) * Math.cos(phi)) * ldiff) * ldiff)));
return (2.0 * Math.asin(rval));
});
calc.geo.spherical_azimuth = (function calc$geo$spherical_azimuth(phi1,lambda0,phi,lambda){
var ldiff = (lambda - lambda0);
var cosphi = Math.cos(phi);
return Math.atan2((cosphi * Math.sin(ldiff)),((Math.cos(phi1) * Math.sin(phi)) - ((Math.sin(phi1) * cosphi) * Math.cos(ldiff))));
});
calc.geo.future_pos = (function calc$geo$future_pos(p__11549,crs,spd,tim){
var vec__11550 = p__11549;
var lat = cljs.core.nth.call(null,vec__11550,(0),null);
var lon = cljs.core.nth.call(null,vec__11550,(1),null);
var phi = Math.toRadians(lat);
var lam = Math.toRadians(lon);
var dir = Math.toRadians(crs);
var way = (spd * tim);
var way__$1 = Math.toRadians((way / (60)));
var vec__11553 = calc.geo.spherical_between.call(null,phi,lam,way__$1,dir);
var phi2 = cljs.core.nth.call(null,vec__11553,(0),null);
var lam2 = cljs.core.nth.call(null,vec__11553,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.toDegrees(phi2),Math.toDegrees(lam2)], null);
});
calc.geo.distance_nm = (function calc$geo$distance_nm(p__11556,p__11557){
var vec__11558 = p__11556;
var la1 = cljs.core.nth.call(null,vec__11558,(0),null);
var lo1 = cljs.core.nth.call(null,vec__11558,(1),null);
var vec__11561 = p__11557;
var la2 = cljs.core.nth.call(null,vec__11561,(0),null);
var lo2 = cljs.core.nth.call(null,vec__11561,(1),null);
var fi1 = Math.toRadians(la1);
var ld1 = Math.toRadians(lo1);
var fi2 = Math.toRadians(la2);
var ld2 = Math.toRadians(lo2);
var rad = calc.geo.spherical_distance.call(null,fi1,ld1,fi2,ld2);
return (Math.toDegrees(rad) * (60));
});
calc.geo.bear_deg = (function calc$geo$bear_deg(p__11564,p__11565){
var vec__11566 = p__11564;
var la1 = cljs.core.nth.call(null,vec__11566,(0),null);
var lo1 = cljs.core.nth.call(null,vec__11566,(1),null);
var vec__11569 = p__11565;
var la2 = cljs.core.nth.call(null,vec__11569,(0),null);
var lo2 = cljs.core.nth.call(null,vec__11569,(1),null);
var fi1 = Math.toRadians(la1);
var ld1 = Math.toRadians(lo1);
var fi2 = Math.toRadians(la2);
var ld2 = Math.toRadians(lo2);
var rad = calc.geo.spherical_azimuth.call(null,fi1,ld1,fi2,ld2);
var deg = Math.toDegrees(rad);
if((deg < (0))){
return (deg + 360.0);
} else {
if((deg > 360.0)){
return (deg - 360.0);
} else {
return deg;

}
}
});
calc.geo.seg_intersect = (function calc$geo$seg_intersect(x1,y1,x2,y2,x3,y3,x4,y4){
var denom = (((y4 - y3) * (x2 - x1)) - ((x4 - x3) * (y2 - y1)));
if((!((denom === 0.0)))){
var ua = ((((x4 - x3) * (y1 - y3)) - ((y4 - y3) * (x1 - x3))) / denom);
var ub = ((((x2 - x1) * (y1 - y3)) - ((y2 - y1) * (x1 - x3))) / denom);
if((((((0.0 <= ua)) && ((ua <= 1.0)))) && ((((0.0 <= ub)) && ((ub <= 1.0)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(y1 + (ua * (y2 - y1))),(x1 + (ua * (x2 - x1)))], null);
} else {
return null;
}
} else {
return null;
}
});
calc.geo.future_intersect = (function calc$geo$future_intersect(p__11572,crs1,spd1,p__11573,crs2,spd2,tim){
var vec__11574 = p__11572;
var la1 = cljs.core.nth.call(null,vec__11574,(0),null);
var lo1 = cljs.core.nth.call(null,vec__11574,(1),null);
var vec__11577 = p__11573;
var la2 = cljs.core.nth.call(null,vec__11577,(0),null);
var lo2 = cljs.core.nth.call(null,vec__11577,(1),null);
var vec__11580 = calc.geo.future_pos.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [la1,lo1], null),crs1,spd1,tim);
var la3 = cljs.core.nth.call(null,vec__11580,(0),null);
var lo3 = cljs.core.nth.call(null,vec__11580,(1),null);
var vec__11583 = calc.geo.future_pos.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [la2,lo2], null),crs2,spd2,tim);
var la4 = cljs.core.nth.call(null,vec__11583,(0),null);
var lo4 = cljs.core.nth.call(null,vec__11583,(1),null);
return calc.geo.seg_intersect.call(null,lo1,la1,lo3,la3,lo2,la2,lo4,la4);
});
calc.geo.rev_bear = (function calc$geo$rev_bear(b){
var rb = (b + (180));
if((rb > (360))){
return (rb - (360));
} else {
return rb;
}
});
calc.geo.course_angle = (function calc$geo$course_angle(crs,p__11586,p__11587){
var vec__11588 = p__11586;
var lat1 = cljs.core.nth.call(null,vec__11588,(0),null);
var lon1 = cljs.core.nth.call(null,vec__11588,(1),null);
var vec__11591 = p__11587;
var lat2 = cljs.core.nth.call(null,vec__11591,(0),null);
var lon2 = cljs.core.nth.call(null,vec__11591,(1),null);
var bea = calc.geo.bear_deg.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat1,lon1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat2,lon2], null));
var ca1 = (bea - crs);
if((ca1 > (180))){
return (ca1 - (360));
} else {
if((ca1 < (-180))){
return (ca1 + (360));
} else {
return ca1;

}
}
});
calc.geo.abaft = (function calc$geo$abaft(crs,crd1,crd2){
var ca = calc.geo.course_angle.call(null,crs,crd1,crd2);
return (((ca > (90))) || ((ca < (-90))));
});
calc.geo.following_QMARK_ = (function calc$geo$following_QMARK_(crs1,crs2){
var dif = Math.abs((crs2 - crs1));
return (((dif < (90))) || ((dif > (270))));
});
calc.geo.rough_distance = (function calc$geo$rough_distance(p__11594,p__11595){
var vec__11596 = p__11594;
var lat1 = cljs.core.nth.call(null,vec__11596,(0),null);
var lon1 = cljs.core.nth.call(null,vec__11596,(1),null);
var vec__11599 = p__11595;
var lat2 = cljs.core.nth.call(null,vec__11599,(0),null);
var lon2 = cljs.core.nth.call(null,vec__11599,(1),null);
var smround = ((function (vec__11596,lat1,lon1,vec__11599,lat2,lon2){
return (function calc$geo$rough_distance_$_smround(n){
return (Math.round((n * (10))) / (10));
});})(vec__11596,lat1,lon1,vec__11599,lat2,lon2))
;
var dlat = (lat1 - lat2);
var dlon = (lon1 - lon2);
var lad = ((((dlat >= (0)))?dlat:((0) - dlat)) * (60));
var lod = ((((dlon >= (0)))?dlon:((0) - dlon)) * (60));
var dia = Math.sqrt(((lad * lad) + (lod * lod)));
if((dia < (1))){
return smround.call(null,dia);
} else {
return Math.round(dia);
}
});
calc.geo.norm_crs = (function calc$geo$norm_crs(x){
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

//# sourceMappingURL=geo.js.map
