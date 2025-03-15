import{bh as p,s as m,as as s}from"./index-PAhymuf7.js";import{p as n}from"./MeshVertexAttributes-DUwAIK35.js";import{B as a}from"./vertexSpaceConversion-BZ0okncT.js";import"./meshProperties-C4iW0Ukm.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-Dk4dwAN8.js";import"./spatialReferenceEllipsoidUtils-BRwsGK5b.js";import"./computeTranslationToOriginAndRotation-BVJ7Zor1.js";import"./projectPointToVector-DqO91lag.js";import"./meshVertexSpaceUtils-CokAnjc7.js";import"./MeshLocalVertexSpace-aGD1Jvpd.js";import"./vec3-Ce6alyLL.js";import"./BufferView-awvNx3mQ.js";import"./vec4-Bwx8dFS_.js";async function M(t,o,r){await Promise.resolve(),p(r);const e=a(t,o,{useEllipsoid:r==null?void 0:r.useEllipsoid});if(!e)throw new m("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=t.cloneAndModifyVertexAttributes(new n({...e,uv:s(t.vertexAttributes.uv),color:s(t.vertexAttributes.color)}),o);return i.transform=null,i}export{M as convertMeshVertexSpace};
