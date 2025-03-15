const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FeatureServiceSnappingSource-CJml9SU1.js","assets/index-PAhymuf7.js","assets/index-Dq4ywZll.css","assets/memoize-DmxaQ-k8.js","assets/elevationInfoUtils-K-XeLjqF.js","assets/boundedPlane-CNkelB5M.js","assets/sphere-B6kQjYN0.js","assets/mat3f64-q3fE-ZOt.js","assets/plane-6MWJhUeE.js","assets/mat4f64-Dk4dwAN8.js","assets/quatf64-aQ5IuZRd.js","assets/lineSegment-BPkfw3cc.js","assets/layerViewUtils-D3aZgJT5.js","assets/hitTestSelectUtils-BbNvtjKV.js","assets/quantityUtils-BBcTW5Al.js","assets/projectVectorToVector-Bu2TUdcC.js","assets/projectPointToVector-DqO91lag.js","assets/geodesicUtils-CA9kvbPX.js","assets/queryEngineUtils-Dkeb5DPu.js","assets/RouteLayerInteraction-R9Jc1SS7.js","assets/GraphicsLayer-DDBqgihS.js","assets/Stop-DX9HZ9r-.js","assets/networkEnums-RoVYJsQa.js","assets/VertexSnappingCandidate-EwupJU50.js","assets/PointSnappingHint-BGRKYC77.js","assets/WorkerHandle-BUstWbVr.js","assets/FeatureCollectionSnappingSource-B1gHGilY.js","assets/symbologySnappingCandidates-s6trbkfV.js","assets/GraphicsSnappingSource-DY2Cq6uE.js","assets/normalizeUtilsSync-BCl9gXoV.js","assets/featureConversionUtils-Vb99EY1i.js","assets/OptimizedFeature-DL1f172u.js","assets/memoryEstimations-CsRDpl56.js","assets/OptimizedFeatureSet-Blu9Ckm7.js","assets/executeQueryForSnapping-B6Cp6xTp.js","assets/queryUtils-ENA1BF09.js","assets/json-Wa8cmqdu.js","assets/QueryEngine-Ccc13jex.js","assets/WhereClauseCache-BOgKODpj.js","assets/WhereClause-C8KlKOoq.js","assets/TimeOnly-aF9Tn6fb.js","assets/timeSupport-CtKNpu9m.js","assets/QueryEngineCapabilities-B_pTbIiR.js","assets/quantizationUtils-BGKUE1Kx.js","assets/utils-D_SnCRx-.js","assets/utils-D615TF1y.js","assets/utils-hSE5r_SA.js","assets/ClassBreaksDefinition-CbxUFveV.js","assets/SnappingCandidate-DGkpYqI6.js","assets/FixedIntervalBinParameters-Dsia34av.js","assets/FeatureStore-C9yCy_VG.js","assets/BoundsStore-Bi0tS0u5.js","assets/PooledRBush-BsvBK0UB.js","assets/optimizedFeatureQueryEngineAdapter-ENYwZtfX.js","assets/utils-Drzin8x5.js","assets/cimSymbolUtils-BlcBc1Uq.js","assets/SceneLayerSnappingSource-BbryEXal.js","assets/workerHelper-CA62F0jk.js","assets/InterleavedLayout-DWQ6OWlR.js","assets/BufferView-awvNx3mQ.js","assets/types-D0PSWh4d.js","assets/edgeProcessing-RkMl9iEa.js","assets/deduplicate-DCvw-vao.js","assets/Indices-C1swA4S1.js","assets/VertexAttribute-Cq4MnHjR.js","assets/glUtil-DYJMkRt0.js","assets/VertexElementDescriptor-BLyltQyJ.js","assets/Normals-Cu8v_usF.js"])))=>i.map(i=>d[i]);
import{cx as G,j6 as x,Q as P,an as V,cy as z,gV as L,j7 as I,b9 as Y,O as X,r as d,l as h,t as N,fm as q,j8 as B,fo as J,f_ as K,a1 as W,gO as Z,bh as C,j4 as T,cY as U,ci as ee,iY as te,_ as $,du as re,eF as ie,dc as ae}from"./index-PAhymuf7.js";import{j as k}from"./elevationInfoUtils-K-XeLjqF.js";import{h as j,i as A,E as ne,N as H,s as w,j as se,b as oe,k as le}from"./hitTestSelectUtils-BbNvtjKV.js";import{o as ue}from"./floorFilterUtils-DZ5C6FQv.js";import{i as ce}from"./layerViewUtils-D3aZgJT5.js";import{d as de,o as pe,s as Q,n as he,c as ye,b as ge}from"./RouteLayerInteraction-R9Jc1SS7.js";import"./quantityUtils-BBcTW5Al.js";import"./projectVectorToVector-Bu2TUdcC.js";import"./projectPointToVector-DqO91lag.js";import"./geodesicUtils-CA9kvbPX.js";import"./plane-6MWJhUeE.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./sphere-B6kQjYN0.js";import"./GraphicsLayer-DDBqgihS.js";import"./Stop-DX9HZ9r-.js";import"./networkEnums-RoVYJsQa.js";let y=class extends G{set attributeRulesEnabled(e){this._set("attributeRulesEnabled",e),e&&this.loadRules()}get layerView(){var e,t;return(t=(e=this.view)==null?void 0:e.allLayerViews)==null?void 0:t.find(r=>r.layer===this.layer)}get valid(){const{_valid:e,snappingSource:t,layer:r}=this;return!(!t||!r)&&e}get subtypeFilter(){var a,o;const{layer:e,snappingSource:t}=this;if(!x(e)||!((a=e.subtypes)!=null&&a.length)||!t)return{mode:"not-in-use",filter:null};const r=t.layerSource.sublayerSources.filter(n=>{var s;return n.enabled&&n.layer.visible&&ce((s=this.view)==null?void 0:s.scale,n.layer.effectiveScaleRange.minScale,n.layer.effectiveScaleRange.maxScale)}).map(n=>n.layer.subtypeCode);if(!r.length)return{mode:"none-visible",filter:null};if(r.length===e.subtypes.length)return{mode:"all-visible",filter:null};const i=((o=e.fieldsIndex.get(e.subtypeField))==null?void 0:o.name)??e.subtypeField;return r.length===1?{mode:"in-use",filter:`${i} = ${r.getItemAt(0)}`}:{mode:"in-use",filter:`${i} IN (${r.join(", ")})`}}get floorFilter(){const{view:e,layer:t}=this;return e&&t?ue({view:e,layer:t}):null}constructor(e){super(e),this.layer=null,this.snappingSource=null,this.rulesTable=null,this._valid=null}initialize(){if(!this.snappingSource||!this.layer)return void(this._valid=!1);const{layer:e,snappingSource:t}=this;if("refresh"in e){const r=e;this.addHandles(r.on("refresh",()=>t.refresh()))}this.loadRules(),this.addHandles([P(()=>t.updating,r=>t.layerSource.updating=r,V),P(()=>t.availability,r=>t.layerSource.availability=r,V)])}getFetchCandidatesParameters(e,t,r){var p,g,f,S,b;if(!this.valid)return[];const{layer:i,layerView:a,floorFilter:o,rulesTable:n,subtypeFilter:s}=this,l={distance:r,mode:((p=this.view)==null?void 0:p.type)??"2d",point:e,coordinateHelper:t.coordinateHelper,...fe(),filter:a&&"filter"in a?a.filter:null};if(o&&(l.filter=O(l.filter,o)),s.mode!=="not-in-use"&&s.mode!=="all-visible"){if(s.mode==="none-visible")return[];l.filter?l.filter.where=z(l.filter.where,s.mode):l.filter=new L({where:s.filter})}if(!this.attributeRulesEnabled)return[l];const u=t.feature,c=((g=u==null?void 0:u.sourceLayer)==null?void 0:g.type)==="subtype-sublayer"?u.sourceLayer.parent:u==null?void 0:u.sourceLayer;if(n&&u&&j((f=this.view)==null?void 0:f.map)&&(I(i)||x(i))&&i.layerId&&(I(c)||x(c))&&((S=this.view.map.utilityNetworks)!=null&&S.find(m=>m.isUtilityLayer(c)))){if(n.loadStatus!=="loaded")return[];const m=[],E=i.layerId,v=(b=n.getFeatureSQL(c,u))==null?void 0:b[E];if(!v)return[];const R=v.anyVertex;let F=v.endVertex;return F&&R&&F===R&&(F=""),F&&m.push({...l,returnEdge:!1,vertexMode:"ends",filter:O(l.filter,F)}),R&&m.push({...l,returnEdge:Y("snapping-include-edges-when-applying-any-vertex-rule")??!1,vertexMode:"all",filter:O(l.filter,R)}),m}return[l]}async loadRules(){var i,a,o;this._valid=null;const{layer:e,view:t,attributeRulesEnabled:r}=this;if(r&&e&&t&&j(t==null?void 0:t.map)&&(I(e)||x(e)))try{await Promise.allSettled(((i=t.map.utilityNetworks)==null?void 0:i.map(s=>s.load()))??[]);const n=(a=t.map.utilityNetworks)==null?void 0:a.find(s=>s.isUtilityLayer(e));n&&(this.rulesTable=await n.getRulesTable(),await((o=this.rulesTable)==null?void 0:o.load()))}catch{return this._valid=!1,void X.getLogger("esri.views.interactive.snapping.FeatureSnappingSourceInfo").error("Failed to load rules table for snapping source",e.title)}this._valid=!0}remove(){this.destroy()}destroy(){var e;(e=this.snappingSource)==null||e.destroy()}};function fe(){return{returnEdge:!0,vertexMode:"all"}}function O(e,t){return e==null?new L({where:t}):e.where?new L({where:z(e.where,t)}):new L({where:t})}d([h({constructOnly:!0})],y.prototype,"layer",void 0),d([h({constructOnly:!0})],y.prototype,"snappingSource",void 0),d([h({constructOnly:!0})],y.prototype,"view",void 0),d([h({value:!1})],y.prototype,"attributeRulesEnabled",null),d([h()],y.prototype,"layerView",null),d([h()],y.prototype,"rulesTable",void 0),d([h()],y.prototype,"valid",null),d([h()],y.prototype,"subtypeFilter",null),d([h()],y.prototype,"floorFilter",null),d([h()],y.prototype,"_valid",void 0),y=d([N("esri.views.interactive.snapping.FeatureSnappingSourceInfo")],y);let _=class extends G{get updating(){return this._snappingSources.some(e=>{var t;return(e==null?void 0:e.valid)==null||e.valid===!0&&((t=e.snappingSource)==null?void 0:t.updating)===!0})||this._updatingHandles.updating}constructor(e){super(e),this.options=null,this._domain=A.FEATURE,this._updatingHandles=new q,this._sourceModules={featureService:{module:null,loader:null},featureCollection:{module:null,loader:null},graphics:{module:null,loader:null},notes:{module:null,loader:null},scene:{module:null,loader:null}}}initialize(){const e=B(()=>{var t;return(t=this.options)==null?void 0:t._effectiveFeatureSources},(t,r)=>this._createSourceInfo(t,r));this._snappingSources=e,this.addHandles([J(e),P(()=>{var t;return{rulesEnabled:!!((t=this.options)!=null&&t.attributeRulesEnabled),sources:this._snappingSources.filter(W)}},({rulesEnabled:t,sources:r})=>{for(const i of r)i.attributeRulesEnabled=t},K)])}destroy(){this._set("options",null),this._updatingHandles.destroy()}async fetchCandidates(e,t,r,i){var s,l,u;if(!(t&this._domain&&this.options!=null&&this.options.effectiveFeatureEnabled))return[];const a=[],o=this._computeScreenSizeDistanceParameters(e,r);for(const c of this._snappingSources){if(!(c!=null&&c.valid)||!((l=(s=c.snappingSource)==null?void 0:s.layerSource)!=null&&l.enabled)||(u=c.layerView)!=null&&u.suspended)continue;const p=c.getFetchCandidatesParameters(e,r,o);for(const g of p)a.push(c.snappingSource.fetchCandidates(g,i).then(f=>f.filter(S=>!this._candidateIsExcluded(c.snappingSource,S,r.excludeFeature))))}const n=(await Z(a)).flat();return this._addRightAngleCandidates(n,e,o,r),C(i),ne(e,n),n}_addRightAngleCandidates(e,t,r,i){var c,p,g,f,S,b,m,E;const a=i.vertexHandle!=null?(p=(c=i.vertexHandle.rightEdge)==null?void 0:c.rightVertex)==null?void 0:p.pos:i.editGeometryOperations!=null&&i.editGeometryOperations.data.type==="polygon"?(f=(g=i.editGeometryOperations.data.components[0])==null?void 0:g.getFirstVertex())==null?void 0:f.pos:null,o=i.vertexHandle!=null?(b=(S=i.vertexHandle.leftEdge)==null?void 0:S.leftVertex)==null?void 0:b.pos:i.editGeometryOperations!=null?(E=(m=i.editGeometryOperations.data.components[0])==null?void 0:m.getLastVertex())==null?void 0:E.pos:null,{view:n}=this,s=H(a,n,i),l=H(o,n,i),u=e.length;for(let v=0;v<u;v++)this._addRightAngleCandidate(e[v],l,t,r,e),this._addRightAngleCandidate(e[v],s,t,r,e)}_addRightAngleCandidate(e,t,r,i,a){if(t==null||!Se(e))return;const o=e.constraint.closestTo(t),n=(o[0]-r[0])/i.x,s=(o[1]-r[1])/i.y,{start:l,end:u}=e.constraint;if(n*n+s*s<=1){const c=T(w(o),w(l))>T(w(o),w(u))?l:u,p=new de({targetPoint:oe(o),otherVertex:t,otherVertexType:pe.NEXT,previousVertex:c,constraint:new se(t,o),objectId:e.objectId,isDraped:e.isDraped,domain:A.FEATURE});a.push(p)}}_computeScreenSizeDistanceParameters(e,t){let r=this.options!=null?this.options.distance*(t.pointer==="touch"?this.options.touchSensitivityMultiplier:1):0;return this.view==null?{x:r,y:r,z:r,distance:r}:this.view.type==="2d"?(r*=this.view.resolution,{x:r,y:r,z:r,distance:r}):this._computeScreenSizeDistanceParameters3D(e,r,this.view,t)}_computeScreenSizeDistanceParameters3D(e,t,r,i){const{spatialReference:a}=i;r.renderCoordsHelper.toRenderCoords(e,a,D);const o=r.state.camera.computeScreenPixelSizeAt(D),n=o*r.renderCoordsHelper.unitInMeters,s=n/ee(a),l=n/te(a),u=t*s,c=t*l,p=Q(e,a,k,r),g=p?M(p,e,s,0,0,r,i):0,f=p?M(p,e,0,s,0,r,i):0,S=p?M(p,e,0,0,l,r,i):0;return{x:g===0?0:u/g,y:f===0?0:u/f,z:S===0?0:c/S,distance:o*t}}_candidateIsExcluded(e,t,r){if(r==null)return!1;const i=this._getCandidateObjectId(t);if(i==null)return!1;const a=e.layerSource.layer;return a.type==="graphics"?r.uid===i:r.sourceLayer===a&&!(!r.attributes||!("objectIdField"in a))&&r.attributes[a.objectIdField]===i}_getCandidateObjectId(e){return e instanceof he?e.objectId:null}async _createSourceInfo(e,t){const r=e.layer;r.loaded||(await r.load(),C(t));const{view:i}=this,a=await this._createFeatureSnappingSourceType(e);return C(t),new y(a==null?{}:{snappingSource:a,view:i,layer:r})}async _createFeatureSnappingSourceType(e){switch(e.layer.type){case"feature":case"geojson":case"csv":case"oriented-imagery":case"subtype-group":case"wfs":return this._createFeatureSnappingSourceFeatureLayer(e);case"graphics":return this._createFeatureSnappingSourceGraphicsLayer(e);case"map-notes":return this._createFeatureSnappingSourceMapNotesLayer(e);case"scene":case"building-scene":return this._createFeatureSnappingSourceSceneLayer(e)}return null}async _createFeatureSnappingSourceSceneLayer(e){const{view:t}=this;return t==null||t.type!=="3d"?null:new(await this._getSourceModule("scene")).SceneLayerSnappingSource({layerSource:e,view:t})}async _createFeatureSnappingSourceFeatureLayer(e){var t;switch((t=e.layer.source)==null?void 0:t.type){case"feature-layer":case"oriented-imagery":return new(await this._getSourceModule("featureService")).FeatureServiceSnappingSource({spatialReference:this.spatialReference,view:this.view,layerSource:e});case"memory":case"csv":case"geojson":case"wfs":return e.layer.geometryType==="mesh"?null:new(await this._getSourceModule("featureCollection")).FeatureCollectionSnappingSource({layerSource:e,view:this.view})}return null}async _createFeatureSnappingSourceGraphicsLayer(e){return new(await this._getSourceModule("graphics")).GraphicsSnappingSource({getGraphicsLayers:()=>[e.layer],spatialReference:this.spatialReference,view:this.view,layerSource:e})}async _createFeatureSnappingSourceMapNotesLayer(e){return new(await this._getSourceModule("notes")).GraphicsSnappingSource({getGraphicsLayers:()=>{var t;return((t=e.layer.sublayers)==null?void 0:t.toArray())??[]},spatialReference:this.spatialReference,view:this.view,layerSource:e})}async _getSourceModule(e){const t=this._sourceModules[e];if(t.loader==null){const r=this._loadSourceModule(e),i={module:null,loader:r};this._sourceModules[e]=i;const a=await r,o={module:a,loader:r};return this._sourceModules[e]=o,a}return t.module==null?t.loader:t.module}_loadSourceModule(e){const t=this._updatingHandles;switch(e){case"featureService":return t.addPromise($(()=>import("./FeatureServiceSnappingSource-CJml9SU1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])));case"featureCollection":return t.addPromise($(()=>import("./FeatureCollectionSnappingSource-B1gHGilY.js"),__vite__mapDeps([26,1,2,3,4,13,14,15,16,17,8,7,9,10,6,18,19,20,21,22,23,24,27])));case"graphics":case"notes":return t.addPromise($(()=>import("./GraphicsSnappingSource-DY2Cq6uE.js"),__vite__mapDeps([28,1,2,3,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,4,54,55,13,14,15,16,17,8,7,9,10,6,18,19,20,21,22,23,24,27])));case"scene":return t.addPromise($(()=>import("./SceneLayerSnappingSource-BbryEXal.js"),__vite__mapDeps([56,1,2,25,57,58,59,60,61,62,63,64,65,66,67,6,7,8,9,10,13,14,15,16,17,4,19,20,21,22,23,24])))}}get test(){}};function Se(e){return(e instanceof ye||e instanceof ge)&&!me(e)}function me({constraint:{start:e,end:t}}){const r=ie(e,t),i=T(w(e),w(t));return r<ae()||i/r<_e}function M(e,t,r,i,a,o,{spatialReference:n}){const s=re(ve,t);s[0]+=r,s[1]+=i,s[2]+=a;const l=Q(s,n,k,o);return l?le(l,e):1/0}d([h({constructOnly:!0})],_.prototype,"spatialReference",void 0),d([h({constructOnly:!0})],_.prototype,"view",void 0),d([h()],_.prototype,"options",void 0),d([h({readOnly:!0})],_.prototype,"updating",null),d([h()],_.prototype,"_snappingSources",void 0),_=d([N("esri.views.interactive.snapping.FeatureSnappingEngine")],_);const D=U(),ve=U(),_e=1e-4;export{_ as FeatureSnappingEngine};
