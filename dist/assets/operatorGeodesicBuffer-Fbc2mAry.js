const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OperatorGeodesicBuffer-Ce_aYTTk.js","assets/SimpleGeometryCursor-B92kdZ15.js","assets/Transformation2D-D0MqPw7t.js","assets/ProjectionTransformation-CqVHxcbq.js","assets/index-PAhymuf7.js","assets/index-Dq4ywZll.css","assets/GeometryCleaner-BEJM7I4l-Co0ENfAi.js"])))=>i.map(i=>d[i]);
import{_ as a,ex as c,ez as _,ey as f}from"./index-PAhymuf7.js";import{s as l}from"./SimpleGeometryCursor-B92kdZ15.js";let n;function m(){return!!n&&f()}async function d(){if(!m()){const[t,r]=await Promise.all([a(()=>import("./OperatorGeodesicBuffer-Ce_aYTTk.js"),__vite__mapDeps([0,1,2,3,4,5,6])),a(()=>import("./ProjectionTransformation-CqVHxcbq.js").then(e=>e.aW),__vite__mapDeps([3,2,1,4,5])).then(e=>e.aG).then(({injectPe:e})=>e),c()]);n=new t.OperatorGeodesicBuffer,r(_)}}function v(t,r,e,o,u){return n.execute(t,r,e,o,u,!1,null)}function x(t,r,e,o,u,i){const s=n.executeMany(new l(t),r,e,o,u,!1,i,null);return Array.from(s)}function y(){return n.supportsCurves()}export{y as a,x as c,v as i,m as s,d as u};
