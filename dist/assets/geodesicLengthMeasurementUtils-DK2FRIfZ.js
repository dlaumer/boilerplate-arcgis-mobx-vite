import{a as s}from"./quantityUtils-BBcTW5Al.js";import{aY as i,a as m,cY as u}from"./index-PAhymuf7.js";import{geodesicLength as c}from"./geometryEngine-YDHsGZo-.js";import{y as f,q as l,b as y,R}from"./geodesicUtils-CA9kvbPX.js";function q(e){return f(e)||i(e)}function p(e,n,r,...o){return f(e)?n.apply(void 0,o):i(e)?r.apply(void 0,o):null}function w(e){const{spatialReference:n}=e;return p(n,x,$,e)}function L(e,n){if(!m(e.spatialReference,n.spatialReference))return null;const{spatialReference:r}=e;return t[0]=e.x,t[1]=e.y,t[2]=e.hasZ?e.z:0,a[0]=n.x,a[1]=n.y,a[2]=n.hasZ?n.z:0,d(t,a,r)}function d(e,n,r){return p(r,h,g,e,n,r)}function h(e,n,r){return s(l(z,e,n,r).distance,"meters")}function g(e,n,r){return s(c(v(e,n,r),"meters"),"meters")}function x(e){return s(R([e],"meters")[0],"meters")}function $(e){return s(c(e,"meters"),"meters")}function v(e,n,r){return{type:"polyline",spatialReference:r,paths:[[[...e],[...n]]]}}const z=new y,t=u(),a=u();export{q as e,L as f,w as m,p as r,d as u};
