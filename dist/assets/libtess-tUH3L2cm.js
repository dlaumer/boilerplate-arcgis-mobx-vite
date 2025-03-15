import{o as Ut}from"./_commonjsHelpers-DCkdB7M8.js";function Bt(g,b){for(var w=0;w<b.length;w++){const p=b[w];if(typeof p!="string"&&!Array.isArray(p)){for(const h in p)if(h!=="default"&&!(h in g)){const m=Object.getOwnPropertyDescriptor(p,h);m&&Object.defineProperty(g,h,m.get?m:{enumerable:!0,get:()=>p[h]})}}}return Object.freeze(Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}))}var nt,ot={exports:{}};function Dt(){return nt||(nt=1,g=ot,b=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,w=function(p={}){var h,m,e=p;e.ready=new Promise((t,r)=>{h=t,m=r});var q=Object.assign({},e),L=typeof window=="object",x=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var U,l="";function at(t){return e.locateFile?e.locateFile(t,l):l+t}(L||x)&&(x?l=self.location.href:typeof document<"u"&&document.currentScript&&(l=document.currentScript.src),b&&(l=b),l=l.indexOf("blob:")!==0?l.substr(0,l.replace(/[?#].*/,"").lastIndexOf("/")+1):"",x&&(U=t=>{var r=new XMLHttpRequest;return r.open("GET",t,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var E,T,ut=e.print||console.log.bind(console),A=e.printErr||console.error.bind(console);Object.assign(e,q),q=null,e.arguments&&e.arguments,e.thisProgram&&e.thisProgram,e.quit&&e.quit,e.wasmBinary&&(E=e.wasmBinary),typeof WebAssembly!="object"&&X("no native wasm support detected");var j,O,$=!1;function z(){var t=T.buffer;e.HEAP8=new Int8Array(t),e.HEAP16=new Int16Array(t),e.HEAPU8=j=new Uint8Array(t),e.HEAPU16=new Uint16Array(t),e.HEAP32=new Int32Array(t),e.HEAPU32=O=new Uint32Array(t),e.HEAPF32=new Float32Array(t),e.HEAPF64=new Float64Array(t)}var N=[],Y=[],G=[];function ft(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)lt(e.preRun.shift());B(N)}function st(){B(Y)}function ct(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)ht(e.postRun.shift());B(G)}function lt(t){N.unshift(t)}function pt(t){Y.unshift(t)}function ht(t){G.unshift(t)}var d=0,R=null;function mt(t){var r;d++,(r=e.monitorRunDependencies)==null||r.call(e,d)}function yt(t){var o;if(d--,(o=e.monitorRunDependencies)==null||o.call(e,d),d==0&&R){var r=R;R=null,r()}}function X(t){var o;(o=e.onAbort)==null||o.call(e,t),A(t="Aborted("+t+")"),$=!0,t+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(t);throw m(r),r}var P,dt="data:application/octet-stream;base64,",J=t=>t.startsWith(dt);function K(t){if(t==P&&E)return new Uint8Array(E);if(U)return U(t);throw"both async and sync fetching of the wasm failed"}function vt(t){return E||!L&&!x||typeof fetch!="function"?Promise.resolve().then(()=>K(t)):fetch(t,{credentials:"same-origin"}).then(r=>{if(!r.ok)throw"failed to load wasm binary file at '"+t+"'";return r.arrayBuffer()}).catch(()=>K(t))}function Q(t,r,o){return vt(t).then(n=>WebAssembly.instantiate(n,r)).then(n=>n).then(o,n=>{A(`failed to asynchronously prepare wasm: ${n}`),X(n)})}function gt(t,r,o,n){return t||typeof WebAssembly.instantiateStreaming!="function"||J(r)||typeof fetch!="function"?Q(r,o,n):fetch(r,{credentials:"same-origin"}).then(i=>WebAssembly.instantiateStreaming(i,o).then(n,function(a){return A(`wasm streaming compile failed: ${a}`),A("falling back to ArrayBuffer instantiation"),Q(r,o,n)}))}function bt(){var t={a:It};function r(n,i){return c=n.exports,T=c.i,z(),V=c.m,pt(c.j),yt(),c}function o(n){r(n.instance)}if(mt(),e.instantiateWasm)try{return e.instantiateWasm(t,r)}catch(n){A(`Module.instantiateWasm callback failed with error: ${n}`),m(n)}return gt(E,P,t,o).catch(m),{}}J(P="libtess.wasm")||(P=at(P));var B=t=>{for(;t.length>0;)t.shift()(e)};e.noExitRuntime;var V,wt=()=>{throw 1/0},At=(t,r,o)=>j.copyWithin(t,r,r+o),Et=()=>2147483648,Rt=t=>{var r=(t-T.buffer.byteLength+65535)/65536;try{return T.grow(r),z(),1}catch{}},Pt=t=>{var r=j.length;t>>>=0;var o=Et();if(t>o)return!1;for(var n=(f,s)=>f+(s-f%s)%s,i=1;i<=4;i*=2){var a=r*(1+.2/i);a=Math.min(a,t+100663296);var u=Math.min(o,n(Math.max(t,a),65536));if(Rt(u))return!0}return!1},St=[null,[],[]],Z=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,_t=(t,r,o)=>{for(var n=r+o,i=r;t[i]&&!(i>=n);)++i;if(i-r>16&&t.buffer&&Z)return Z.decode(t.subarray(r,i));for(var a="";r<i;){var u=t[r++];if(128&u){var f=63&t[r++];if((224&u)!=192){var s=63&t[r++];if((u=(240&u)==224?(15&u)<<12|f<<6|s:(7&u)<<18|f<<12|s<<6|63&t[r++])<65536)a+=String.fromCharCode(u);else{var I=u-65536;a+=String.fromCharCode(55296|I>>10,56320|1023&I)}}else a+=String.fromCharCode((31&u)<<6|f)}else a+=String.fromCharCode(u)}return a},Ht=(t,r)=>{var o=St[t];r===0||r===10?((t===1?ut:A)(_t(o,0)),o.length=0):o.push(r)},W=[],C=t=>{var r=W[t];return r||(t>=W.length&&(W.length=t+1),W[t]=r=V.get(t)),r},It={e:wt,g:At,f:Pt,c:(t,r,o,n)=>{for(var i=0,a=0;a<o;a++){var u=O[r>>2],f=O[r+4>>2];r+=8;for(var s=0;s<f;s++)Ht(t,j[u+s]);i+=f}return O[n>>2]=i,0},b:jt,h:Ot,d:Tt,a:xt},c=bt();e._malloc=t=>(e._malloc=c.k)(t),e._free=t=>(e._free=c.l)(t),e._triangulate=(t,r,o,n,i,a)=>(e._triangulate=c.n)(t,r,o,n,i,a);var F,S=(t,r)=>(S=c.o)(t,r),_=()=>(_=c.p)(),H=t=>(H=c.q)(t);function xt(t,r,o){var n=_();try{C(t)(r,o)}catch(i){if(H(n),i!==i+0)throw i;S(1,0)}}function Tt(t,r){var o=_();try{C(t)(r)}catch(n){if(H(o),n!==n+0)throw n;S(1,0)}}function jt(t,r){var o=_();try{return C(t)(r)}catch(n){if(H(o),n!==n+0)throw n;S(1,0)}}function Ot(t,r,o,n){var i=_();try{return C(t)(r,o,n)}catch(a){if(H(i),a!==a+0)throw a;S(1,0)}}function tt(){function t(){F||(F=!0,e.calledRun=!0,$||(st(),h(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),ct()))}d>0||(ft(),d>0||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1),t()},1)):t()))}if(R=function t(){F||tt(),F||(R=t)},e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();tt();let D=null,y=null,v=null,M=null;const Wt=2,et=4e3;let rt=0;const Ct=(t,r,o)=>{D||(D=e._triangulate);let n=e.HEAPF32;const i=e.HEAP32.BYTES_PER_ELEMENT,a=2,u=n.BYTES_PER_ELEMENT;o>rt&&(rt=o,v&&(e._free(v),v=0),y&&(e._free(y),y=0)),v||(v=e._malloc(o*u)),M||(M=e._malloc(et*i));const f=o*Wt;y||(y=e._malloc(f*u)),n=e.HEAPF32,n.set(t,v/u),e.HEAP32.set(r,M/i);const s=f/a,I=D(v,M,Math.min(r.length,et),a,y,s),Ft=I*a;n=e.HEAPF32;const Mt=n.slice(y/u,y/u+Ft),k={};return k.buffer=Mt,k.vertexCount=I,k};return e.triangulate=Ct,p.ready},g.exports=w),ot.exports;var g,b,w}var it=Dt();const qt=Bt({__proto__:null,default:Ut(it)},[it]);export{qt as l};
