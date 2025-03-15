import{cx as V,dw as b,gJ as E,ce as F,gK as X,O as Y,aU as D,gL as W,gM as G,r as o,l as p,t as H}from"./index-PAhymuf7.js";import{l as I,u as J,t as K}from"./gridUtils-QzXt0NEL.js";import{f as g,d as T,c as _}from"./hitTestSelectUtils-BbNvtjKV.js";import{r as L,a as k}from"./RouteLayerInteraction-R9Jc1SS7.js";import"./geodesicUtils-CA9kvbPX.js";import"./quantityUtils-BBcTW5Al.js";import"./projectVectorToVector-Bu2TUdcC.js";import"./projectPointToVector-DqO91lag.js";import"./plane-6MWJhUeE.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./sphere-B6kQjYN0.js";import"./elevationInfoUtils-K-XeLjqF.js";import"./GraphicsLayer-DDBqgihS.js";import"./Stop-DX9HZ9r-.js";import"./networkEnums-RoVYJsQa.js";let s=class extends V{constructor(t){super(t),this.options=null}destroy(){this._set("options",null)}get grid(){return this.view.grid}get effectiveViewRotation(){var t;return(t=this.grid)!=null&&t.rotateWithMap?0:b(this.view.rotation??0)}get gridRotation(){var t;return b(((t=this.grid)==null?void 0:t.rotation)??0)}get gridCenter(){var e;const{spatialReference:t,grid:i}=this;if(!i||!t||!E(i.center.spatialReference,t))return null;try{const r=F(i.center,t),n=t.isWrappable&&((e=this.view)==null?void 0:e.center)!=null?X(r.x,this.view.center.x,t):r.x;return g(n,r.y,r.z)}catch(r){return Y.getLogger(this).errorOnce("Grid Snapping - Failed to project grid center.",r),null}}get offsetScaleFactor(){const{pixelsPerStride:t,grid:i}=this;if(!i||!t)return 1;const{majorLineInterval:e,dynamicScaling:r}=i;return e<1?null:I(e,t,r)}get spatialReference(){return this.view.spatialReference}get gridMetersPerStride(){const{grid:t}=this;return t?D(t.spacing,t.units,"meters"):null}get viewMetersPerPixel(){const{viewMetersPerSRUnit:t}=this;return t==null?null:t*W(this.view.scale,this.view.spatialReference)}get viewMetersPerSRUnit(){const{spatialReference:t}=this.view;return this.gridCenter?J(this.gridCenter[0],this.gridCenter[1],t):null}get pixelsPerStride(){const{gridMetersPerStride:t,viewMetersPerPixel:i}=this;return i&&t?t/i:null}get updating(){return this.grid!=null&&this.spatialReference!=null&&this.viewMetersPerSRUnit==null}async fetchCandidates(t,i,e){var u;const{options:r,view:n}=this;if(!(r!=null&&r.effectiveGridEnabled)||!n.grid||(u=e.feature)!=null&&u.attributes&&T in e.feature.attributes)return[];const a=e.coordinateHelper.arrayToPoint(t),l=r.distance*(e.pointer==="touch"?r.touchSensitivityMultiplier:1);return this.fetchCandidatesSync(a,l)}fetchCandidatesSync(t,i){const e=[],{grid:r,effectiveViewRotation:n,gridRotation:a,gridCenter:l,viewMetersPerPixel:u,viewMetersPerSRUnit:f,offsetScaleFactor:w,spatialReference:h,gridMetersPerStride:C,pixelsPerStride:$}=this;if(!(r&&u&&f&&l&&h&&w&&C&&$)||!r.dynamicScaling&&$<K||!E(t.spatialReference,h))return e;const y=F(t,h),j=g(y.x,y.y,y.z),c=S(j,-a,l,-n),P=C/f*w,d=q(c,P,l),{shouldSnapX:v,shouldSnapY:m}=A(d,c,i,u,f);if(!v&&!m)return[];const z=g((v?d:c)[0],(m?d:c)[1]),M=S(z,a,l,n),U=S(d,a,l,n);if(m){const R=O(d,c,P,"y"),x=S(R,a,l,n);e.push(new L({lineStart:U,lineEnd:x,targetPoint:M,isDraped:!1}))}if(v){const R=O(d,c,P,"x"),x=S(R,a,l,n);e.push(new L({lineStart:U,lineEnd:x,targetPoint:M,isDraped:!1}))}return v&&m&&e.push(new k(M,e[0],e[1],!1)),e}};o([p({constructOnly:!0})],s.prototype,"view",void 0),o([p()],s.prototype,"options",void 0),o([p()],s.prototype,"grid",null),o([p()],s.prototype,"effectiveViewRotation",null),o([p()],s.prototype,"gridRotation",null),o([p()],s.prototype,"gridCenter",null),o([p()],s.prototype,"offsetScaleFactor",null),o([p()],s.prototype,"spatialReference",null),o([p()],s.prototype,"gridMetersPerStride",null),o([p()],s.prototype,"viewMetersPerPixel",null),o([p()],s.prototype,"viewMetersPerSRUnit",null),o([p()],s.prototype,"pixelsPerStride",null),o([p()],s.prototype,"updating",null),s=o([H("esri.views.interactive.snapping.GridSnappingEngine")],s);const S=(t,i,e,r)=>{const n=_(t[0],t[1],t[2]);return G(n,G(n,n,e,i),e,r)},q=(t,i,e)=>{const r=(t[0]-e[0])/i,n=(t[1]-e[1])/i,a=Math.trunc(r),l=Math.trunc(n),u=Math.round(r%1),f=Math.round(n%1),w=e[0]+(a+u)*i,h=e[1]+(l+f)*i;return g(w,h)},A=(t,i,e,r,n)=>{if(r<=0)return{shouldSnapX:!1,shouldSnapY:!1};const a=(t[0]-i[0])/r,l=(t[1]-i[1])/r;return{shouldSnapX:Math.abs(a*n)<e,shouldSnapY:Math.abs(l*n)<e}},O=(t,i,e,r)=>{if(r==="y"){const a=i[0]>t[0]?1:-1;return g(t[0]+e*a,t[1])}const n=i[1]>t[1]?1:-1;return g(t[0],t[1]+e*n)};export{s as GridSnappingEngine};
