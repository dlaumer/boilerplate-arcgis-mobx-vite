import{e as b}from"./earcut-D9gy186-.js";import{eZ as g,dw as Y,ci as H,iY as N,eV as S,iZ as W,i_ as X,i$ as E,j0 as I}from"./index-PAhymuf7.js";import{t as M}from"./Indices-C1swA4S1.js";import{O as $,v,M as j}from"./plane-6MWJhUeE.js";import{e as Z}from"./deduplicate-DCvw-vao.js";function F(n,o,l){const s=Q(x,n,o,l)?$(x):[0,0,1];return Math.abs(s[2])>Math.cos(Y(80))?g.Z:Math.abs(s[1])>Math.abs(s[0])?g.Y:g.X}function Q(n,o,l,s){const e=(i=>!Array.isArray(i[0]))(o)?(i,t)=>o[3*i+t]:(i,t)=>o[i][t],r=s?H(s)/N(s):1;return v(n,(i,t)=>S(i,e(t,0)*r,e(t,1)*r,e(t,2)),l)}const x=j();function J(n){const o=V(n.rings,n.hasZ,C.CCW_IS_HOLE,n.spatialReference),l=new Array;let s=0,e=0;for(const t of o.polygons){const h=t.count,a=t.index,d=W(o.position,3*a,3*h),A=t.holeIndices.map(f=>f-a),y=M(b(d,A,3));l.push({position:d,faces:y}),s+=d.length,e+=y.length}const r=R(l,s,e),i=Array.isArray(r.position)?Z(r.position,3,{originalIndices:r.faces}):Z(r.position.buffer,6,{originalIndices:r.faces});return r.position=X(new Float64Array(i.buffer)),r.faces=i.indices,r}function R(n,o,l){if(n.length===1)return n[0];const s=E(o),e=new Array(l);let r=0,i=0,t=0;for(const h of n){for(let a=0;a<h.position.length;a++)s[r++]=h.position[a];for(const a of h.faces)e[i++]=a+t;t=r/3}return{position:s,faces:M(e)}}function V(n,o,l,s){const e=n.length,r=new Array(e),i=new Array(e),t=new Array(e);let h=0;for(let u=0;u<e;++u)h+=n[u].length;let a=0,d=0,A=0;const y=E(3*h);let f=0;for(let u=e-1;u>=0;u--){const c=n[u],L=l===C.CCW_IS_HOLE&&k(c,o,s);if(L&&e!==1)r[a++]=c;else{let O=c.length;for(let p=0;p<a;++p)O+=r[p].length;const m={index:f,pathLengths:new Array(a+1),count:O,holeIndices:new Array(a)};m.pathLengths[0]=c.length,c.length>0&&(t[A++]={index:f,count:c.length}),f=L?_(c,c.length-1,-1,y,f,c.length,o):_(c,0,1,y,f,c.length,o);for(let p=0;p<a;++p){const w=r[p];m.holeIndices[p]=f,m.pathLengths[p+1]=w.length,w.length>0&&(t[A++]={index:f,count:w.length}),f=_(w,0,1,y,f,w.length,o)}a=0,m.count>0&&(i[d++]=m)}}for(let u=0;u<a;++u){const c=r[u];c.length>0&&(t[A++]={index:f,count:c.length}),f=_(c,0,1,y,f,c.length,o)}return i.length=d,t.length=A,{position:y,polygons:i,outlines:t}}function _(n,o,l,s,e,r,i){e*=3;for(let t=0;t<r;++t){const h=n[o];s[e++]=h[0],s[e++]=h[1],s[e++]=i&&h[2]?h[2]:0,o+=l}return e/3}function k(n,o,l){if(!o)return!I(n);const s=n.length-1;switch(F(n,s,l)){case g.X:return!I(n,g.Y,g.Z);case g.Y:return!I(n,g.X,g.Z);case g.Z:return!I(n,g.X,g.Y)}}var C;(function(n){n[n.NONE=0]="NONE",n[n.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(C||(C={}));export{V as a,F as c,J as f,C as p};
