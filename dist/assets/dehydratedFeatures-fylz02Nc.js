import{b9 as l,hn as h,ho as o,e3 as p,hp as u}from"./index-PAhymuf7.js";import{s as r,i as m,u as c}from"./memoryEstimations-CsRDpl56.js";function x(){return l("curve-densification-coarse-segments")}function f(){return l("curve-densification-max-segments")}function b(){return l("curve-densification-min-segments")}function d(){return l("curve-densification-pixels-per-segment")}class v{constructor(t,n,i){this.uid=t,this.geometry=n,this.attributes=i,this.visible=!0,this.objectId=null,this.centroid=null}}function k(s){return s.geometry!=null}class z{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function Z(s){if(s==null)return 0;switch(s.type){case"point":return r+10+8+24;case"polyline":case"polygon":{let t=0;const n=2+(s.hasZ?1:0)+(s.hasM?1:0),i=s.type==="polyline"?s.paths:s.rings,e=s.type==="polyline"?s.curvePaths:s.curveRings;if(e!=null&&e.length){const a=3*f()*128;t=8*a*n+128*a+32*(i.length+1)}else t=c(i);return r+64+t+34}case"multipoint":{const t=c(s.points);return r+t+64+34+32}case"extent":return r+10+64+34;case"mesh":{const t=s.vertexAttributes;return r+m(t.position,t.normal,t.uv,t.tangent)}default:return r}}function I(s,t){switch(h(t),s.type==="mesh"&&(s=s.extent),s.type){case"point":t[0]=t[3]=s.x,t[1]=t[4]=s.y,s.hasZ&&(t[2]=t[5]=s.z);break;case"polyline":for(let n=0;n<s.paths.length;n++)o(t,s.paths[n],!!s.hasZ);break;case"polygon":for(let n=0;n<s.rings.length;n++)o(t,s.rings[n],!!s.hasZ);break;case"multipoint":o(t,s.points,!!s.hasZ);break;case"extent":t[0]=s.xmin,t[1]=s.ymin,t[3]=s.xmax,t[4]=s.ymax,s.zmin!=null&&(t[2]=s.zmin),s.zmax!=null&&(t[5]=s.zmax)}}function j(s,t){switch(p(t),s.type==="mesh"&&(s=s.extent),s.type){case"point":t[0]=t[2]=s.x,t[1]=t[3]=s.y;break;case"polyline":for(let n=0;n<s.paths.length;n++)u(t,s.paths[n]);break;case"polygon":for(let n=0;n<s.rings.length;n++)u(t,s.rings[n]);break;case"multipoint":u(t,s.points);break;case"extent":t[0]=s.xmin,t[1]=s.ymin,t[2]=s.xmax,t[3]=s.ymax}}function w(s,t){return s.objectId!=null?s.objectId:s.attributes&&t?s.attributes[t]:null}function F(s,t,n,i){if(t!=null&&t.size&&n!=null&&s)for(const e in s){if(!t.has(e))continue;const a=s[e];typeof a=="string"&&a.length>n&&(i(e),s[e]="")}}export{Z as F,w as R,k as b,v as d,x as e,b as i,f as n,d as r,I as v,F as w,z as x,j as z};
