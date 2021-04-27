// Compiled by ClojureScript 1.10.439 {}
goog.provide('mvo.move');
goog.require('cljs.core');
mvo.move.PID180 = (Math.PI / (180));
mvo.move.NMRAD = (Math.PI / (10800));
mvo.move.TIMEOUT_HRS = (0);
mvo.move.spherical_between_js = (function mvo$move$spherical_between_js(phi1,lambda0,c,az){
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
mvo.move.spherical_azimuth_js = (function mvo$move$spherical_azimuth_js(phi1,lambda0,phi,lambda){
var ldiff = (lambda - lambda0);
var cosphi = Math.cos(phi);
return Math.atan2((cosphi * Math.sin.call(null,ldiff)),((Math.cos(phi1) * Math.sin(phi)) - ((Math.sin(phi1) * cosphi) * Math.cos(ldiff))));
});
mvo.move.bear_deg_js = (function mvo$move$bear_deg_js(p__29368,p__29369){
var vec__29370 = p__29368;
var la1 = cljs.core.nth.call(null,vec__29370,(0),null);
var lo1 = cljs.core.nth.call(null,vec__29370,(1),null);
var vec__29373 = p__29369;
var la2 = cljs.core.nth.call(null,vec__29373,(0),null);
var lo2 = cljs.core.nth.call(null,vec__29373,(1),null);
var fi1 = (la1 * mvo.move.PID180);
var ld1 = (lo1 * mvo.move.PID180);
var fi2 = (la2 * mvo.move.PID180);
var ld2 = (lo2 * mvo.move.PID180);
var rad = mvo.move.spherical_azimuth_js.call(null,fi1,ld1,fi2,ld2);
var deg = (rad / mvo.move.PID180);
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
mvo.move.set_timeout_hrs = (function mvo$move$set_timeout_hrs(timeout_mcec,time_scale){
return (
mvo.move.TIMEOUT_HRS = ((timeout_mcec / (3600000)) * time_scale))
;
});
mvo.move.set_turn_point = (function mvo$move$set_turn_point(mvo__$1,p__29376,crs,spd){
var vec__29377 = p__29376;
var lat = cljs.core.nth.call(null,vec__29377,(0),null);
var lon = cljs.core.nth.call(null,vec__29377,(1),null);
return cljs.core._vreset_BANG_.call(null,mvo__$1,cljs.core.assoc.call(null,cljs.core._deref.call(null,mvo__$1),new cljs.core.Keyword(null,"phi-tur","phi-tur",-1775762032),(lat * mvo.move.PID180),new cljs.core.Keyword(null,"lam-tur","lam-tur",-1285200490),(lon * mvo.move.PID180),new cljs.core.Keyword(null,"dir","dir",1734754661),(crs * mvo.move.PID180),new cljs.core.Keyword(null,"rdh","rdh",1247569967),(spd * mvo.move.NMRAD),new cljs.core.Keyword(null,"elt-tur","elt-tur",-1114335595),0.0));
});
mvo.move.get_coord = (function mvo$move$get_coord(mo){
var ll = mo.call(null,new cljs.core.Keyword(null,"marker","marker",865118313)).getLatLng();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ll.lat,ll.lng], null);
});
mvo.move.get_course = (function mvo$move$get_course(mo){
return (mo.call(null,new cljs.core.Keyword(null,"dir","dir",1734754661)) / mvo.move.PID180);
});
mvo.move.get_speed = (function mvo$move$get_speed(mo){
return (mo.call(null,new cljs.core.Keyword(null,"rdh","rdh",1247569967)) / mvo.move.NMRAD);
});
mvo.move.set_course = (function mvo$move$set_course(mvo__$1,crs){
var mo = cljs.core.deref.call(null,mvo__$1);
mvo.move.set_turn_point.call(null,mvo__$1,mvo.move.get_coord.call(null,mo),crs,mvo.move.get_speed.call(null,mo));

return mo.call(null,new cljs.core.Keyword(null,"marker","marker",865118313)).setRotationAngle(crs);
});
mvo.move.set_speed = (function mvo$move$set_speed(mvo__$1,spd){
var mo = cljs.core.deref.call(null,mvo__$1);
return mvo.move.set_turn_point.call(null,mvo__$1,mvo.move.get_coord.call(null,mo),mvo.move.get_course.call(null,mo),spd);
});
mvo.move.set_coord = (function mvo$move$set_coord(mvo__$1,crd){
var mo = cljs.core.deref.call(null,mvo__$1);
return mvo.move.set_turn_point.call(null,mvo__$1,crd,mvo.move.get_course.call(null,mo),mvo.move.get_speed.call(null,mo));
});
mvo.move.create_mover = (function mvo$move$create_mover(crd,crs,spd,mrk){
var mvo__$1 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker","marker",865118313),mrk], null));
mvo.move.set_turn_point.call(null,mvo__$1,crd,crs,spd);

return mvo__$1;
});
mvo.move.move = (function mvo$move$move(mvo__$1){
var mo = cljs.core.deref.call(null,mvo__$1);
var elt = (mo.call(null,new cljs.core.Keyword(null,"elt-tur","elt-tur",-1114335595)) + mvo.move.TIMEOUT_HRS);
var way = (mo.call(null,new cljs.core.Keyword(null,"rdh","rdh",1247569967)) * elt);
var vec__29380 = mvo.move.spherical_between_js.call(null,mo.call(null,new cljs.core.Keyword(null,"phi-tur","phi-tur",-1775762032)),mo.call(null,new cljs.core.Keyword(null,"lam-tur","lam-tur",-1285200490)),way,mo.call(null,new cljs.core.Keyword(null,"dir","dir",1734754661)));
var phi = cljs.core.nth.call(null,vec__29380,(0),null);
var lam = cljs.core.nth.call(null,vec__29380,(1),null);
var pos = (new L.LatLng((phi / mvo.move.PID180),(lam / mvo.move.PID180)));
mo.call(null,new cljs.core.Keyword(null,"marker","marker",865118313)).setLatLng(pos);

return cljs.core._vreset_BANG_.call(null,mvo__$1,cljs.core.assoc.call(null,cljs.core._deref.call(null,mvo__$1),new cljs.core.Keyword(null,"elt-tur","elt-tur",-1114335595),elt));
});

//# sourceMappingURL=move.js.map
