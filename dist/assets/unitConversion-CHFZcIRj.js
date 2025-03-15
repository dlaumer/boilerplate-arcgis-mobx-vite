import{bq as y,li as U,ic as R}from"./index-PAhymuf7.js";var s;(function(e){e.AsyncNotEnabled="AsyncNotEnabled",e.ModulesNotSupported="ModulesNotSupported",e.CircularModules="CircularModules",e.CannotCompareDateAndTime="CannotCompareDateAndTime",e.NeverReach="NeverReach",e.UnsupportedHashType="UnsupportedHashType",e.InvalidParameter="InvalidParameter",e.FeatureSetDoesNotHaveSubtypes="FeatureSetDoesNotHaveSubtypes",e.UnexpectedToken="UnexpectedToken",e.Unrecognized="Unrecognized",e.UnrecognizedType="UnrecognizedType",e.MaximumCallDepth="MaximumCallDepth",e.BooleanConditionRequired="BooleanConditionRequired",e.TypeNotAllowedInFeature="TypeNotAllowedInFeature",e.KeyMustBeString="KeyMustBeString",e.WrongNumberOfParameters="WrongNumberOfParameters",e.CallNonFunction="CallNonFunction",e.NoFunctionInTemplateLiteral="NoFunctionInTemplateLiteral",e.NoFunctionInDictionary="NoFunctionInDictionary",e.NoFunctionInArray="NoFunctionInArray",e.AssignModuleFunction="AssignModuleFunction",e.LogicExpressionOrAnd="LogicExpressionOrAnd",e.LogicalExpressionOnlyBoolean="LogicalExpressionOnlyBoolean",e.FunctionNotFound="FunctionNotFound",e.InvalidMemberAccessKey="InvalidMemberAccessKey",e.UnsupportedUnaryOperator="UnsupportUnaryOperator",e.InvalidIdentifier="InvalidIdentifier",e.MemberOfNull="MemberOfNull",e.UnsupportedOperator="UnsupportedOperator",e.Cancelled="Cancelled",e.ModuleAccessorMustBeString="ModuleAccessorMustBeString",e.ModuleExportNotFound="ModuleExportNotFound",e.Immutable="Immutable",e.OutOfBounds="OutOfBounds",e.IllegalResult="IllegalResult",e.FieldNotFound="FieldNotFound",e.PortalRequired="PortalRequired",e.LogicError="LogicError",e.ArrayAccessorMustBeNumber="ArrayAccessMustBeNumber",e.KeyAccessorMustBeString="KeyAccessorMustBeString",e.WrongSpatialReference="WrongSpatialReference",e.CannotChangeTimeZoneTime="CannotChangeTimeZoneTime",e.CannotChangeTimeZoneDateOnly="CannotChangeTimeZoneDateOnly"})(s||(s={}));const N={[s.TypeNotAllowedInFeature]:"Feature attributes only support dates, numbers, strings, guids.",[s.LogicError]:"Logic error - {reason}",[s.CannotCompareDateAndTime]:"Cannot compare date or dateonly with timeonly types",[s.NeverReach]:"Encountered unreachable logic",[s.AsyncNotEnabled]:"Async Arcade must be enabled for this script",[s.ModuleAccessorMustBeString]:"Module accessor must be a string",[s.ModuleExportNotFound]:"Module has no export with provided identifier",[s.ModulesNotSupported]:"Current profile does not support modules",[s.ArrayAccessorMustBeNumber]:"Array accessor must be a number",[s.FunctionNotFound]:"Function not found",[s.FieldNotFound]:"Key not found - {key}",[s.CircularModules]:"Circular module dependencies are not allowed",[s.Cancelled]:"Execution cancelled",[s.UnsupportedHashType]:"Type not supported in hash function",[s.IllegalResult]:"Value is not a supported return type",[s.PortalRequired]:"Portal is required",[s.InvalidParameter]:"Invalid parameter",[s.WrongNumberOfParameters]:"Call with wrong number of parameters",[s.Unrecognized]:"Unrecognized code structure",[s.UnrecognizedType]:"Unrecognized type",[s.WrongSpatialReference]:"Cannot work with geometry in this spatial reference. It is different to the execution spatial reference",[s.BooleanConditionRequired]:"Conditions must use booleans",[s.NoFunctionInDictionary]:"Dictionaries cannot contain functions.",[s.NoFunctionInArray]:"Arrays cannot contain functions.",[s.NoFunctionInTemplateLiteral]:"Template Literals do not expect functions by value.",[s.KeyAccessorMustBeString]:"Accessor must be a string",[s.KeyMustBeString]:"Object keys must be a string",[s.Immutable]:"Object is immutable",[s.UnexpectedToken]:"Unexpected token",[s.MemberOfNull]:"Cannot access property of null object",[s.MaximumCallDepth]:"Exceeded maximum function depth",[s.OutOfBounds]:"Out of bounds",[s.InvalidIdentifier]:"Identifier not recognized",[s.CallNonFunction]:"Expression is not a function",[s.InvalidMemberAccessKey]:"Cannot access value using a key of this type",[s.AssignModuleFunction]:"Cannot assign function to module variable",[s.UnsupportedUnaryOperator]:"Unsupported unary operator",[s.UnsupportedOperator]:"Unsupported operator",[s.LogicalExpressionOnlyBoolean]:"Logical expressions must be boolean",[s.LogicExpressionOrAnd]:"Logical expression can only be combined with || or &&",[s.CannotChangeTimeZoneTime]:"Cannot change the timezone of a Time",[s.CannotChangeTimeZoneDateOnly]:"Cannot change the timezone of a DateOnly",[s.FeatureSetDoesNotHaveSubtypes]:"FeatureSet does not have subtypes"};let x=class extends Error{constructor(...r){super(...r)}},k=class E extends x{constructor(r,t){super(h(t)+r.message,{cause:r}),this.loc=null,Error.captureStackTrace&&Error.captureStackTrace(this,E),t!=null&&t.loc&&(this.loc=t.loc)}},T=class M extends Error{constructor(r,t,o,c){super("Execution error - "+h(o)+y(N[t],c)),this.loc=null,this.declaredRootClass="esri.arcade.arcadeexecutionerror",Error.captureStackTrace&&Error.captureStackTrace(this,M),o!=null&&o.loc&&(this.loc=o.loc)}};function h(e){var r,t;return e&&e.loc?`Line : ${(r=e.loc.start)==null?void 0:r.line}, ${(t=e.loc.start)==null?void 0:t.column}: `:""}let Y=class F extends Error{constructor(r,t,o,c){super("Compilation error - "+h(o)+y(N[t],c)),this.loc=null,this.declaredRootClass="esri.arcade.arcadecompilationerror",Error.captureStackTrace&&Error.captureStackTrace(this,F),o!=null&&o.loc&&(this.loc=o.loc)}};class O extends Error{constructor(){super("Uncompilable code structures"),this.declaredRootClass="esri.arcade.arcadeuncompilableerror",Error.captureStackTrace&&Error.captureStackTrace(this,O)}}function V(e,r,t){return t.declaredRootClass==="esri.arcade.arcadeexecutionerror"||t.declaredRootClass==="esri.arcade.arcadecompilationerror"?t.loc===null&&(r!=null&&r.loc)?new k(t,{cause:t}):t:(t.declaredRootClass==="esri.arcade.featureset.support.featureseterror"||t.declaredRootClass==="esri.arcade.featureset.support.sqlerror"||t.declaredRootClass,r!=null&&r.loc?new k(t,{cause:t}):t)}var f;(function(e){e.UnrecognizedUri="UnrecognizedUri",e.UnsupportedUriProtocol="UnsupportedUriProtocol"})(f||(f={}));const $={[f.UnrecognizedUri]:"Unrecognized uri - {uri}",[f.UnsupportedUriProtocol]:"Unrecognized uri protocol"};let Q=class A extends Error{constructor(r,t){super(y($[r],t)),this.declaredRootClass="esri.arcade.arcademoduleerror",Error.captureStackTrace&&Error.captureStackTrace(this,A)}};const B=new Map([[1025,109452],[1033,109451],[9001,109404],[9002,109405],[9003,109406],[9005,109407],[9014,109408],[9030,109409],[9031,109410],[9033,109411],[9034,109412],[9035,109413],[9036,109414],[9037,109415],[9038,109416],[9039,109417],[9040,109418],[9041,109419],[9042,109420],[9043,109421],[9050,109422],[9051,109423],[9052,109424],[9053,109425],[9060,109426],[9061,109427],[9062,109428],[9063,109429],[9070,109430],[9080,109431],[9081,109432],[9082,109433],[9083,109434],[9084,109435],[9085,109436],[9086,109437],[9087,109438],[9093,109439],[9094,109440],[9095,109441],[9096,109442],[9097,109444],[9098,109445],[9099,109446],[9300,109447],[9301,109448],[9302,109449],[109001,109442],[109002,109443],[109003,109444],[109004,109445],[109005,109450],[109006,109451],[109007,109452],[109008,109453],[109009,109454],[109010,109455],[109011,109456],[109012,109457],[109013,109458],[109014,109459],[109015,109462],[109016,109464],[109017,109465],[109018,109466],[109030,109460],[109031,109461]]);function C(e){return(r,t)=>[r,{type:e,wkid:r,factor:t}]}const p=C("angular"),b=new Map([p(1031,484813681109536e-23),p(9101,1),p(9102,.017453292519943295),p(9103,.0002908882086657216),p(9104,484813681109536e-20),p(9105,.015707963267948967),p(9106,.015707963267948967),p(9109,1e-6),p(9112,.00015707963267948965),p(9113,15707963267948967e-22),p(9114,.0009817477042468104)]),a=C("linear"),l=new Map([a(1025,.001),a(1033,.01),a(9001,1),a(9002,.3048),a(9003,.30480060960121924),a(9005,.3047972654),a(9014,1.8288),a(9030,1852),a(9031,1.0000135965),a(9033,20.11684023368047),a(9034,.2011684023368047),a(9035,1609.3472186944375),a(9036,1e3),a(9037,.9143917962),a(9038,20.1166195164),a(9039,.201166195164),a(9040,.9143984146160287),a(9041,.3047994715386762),a(9042,20.116765121552632),a(9043,.2011676512155263),a(9050,.9143992),a(9051,.3047997333333333),a(9052,20.1167824),a(9053,.201167824),a(9060,.9143992042898124),a(9061,.30479973476327077),a(9062,20.116782494375872),a(9063,.2011678249437587),a(9070,.30480083333333335),a(9080,.30479951024814694),a(9081,.30479841),a(9082,.3047996),a(9083,.3047995),a(9084,.9143985307444408),a(9085,.91439523),a(9086,.9143988),a(9087,.9143985),a(9093,1609.344),a(9094,.3047997101815088),a(9095,.3048007491),a(9096,.9144),a(9097,20.1168),a(9098,.201168),a(9099,.914398),a(9300,.30479933333333337),a(9301,20.116756),a(9302,.20116756),a(109001,.9144),a(109002,.9144018288036576),a(109003,20.1168),a(109004,.201168),a(109005,.1),a(109006,.01),a(109007,.001),a(109008,.0254),a(109009,.025400050800101603),a(109010,5.0292),a(109011,5.029210058420118),a(109012,1853.248),a(109013,1853.184),a(109014,1.7018),a(109015,.8466683600033867),a(109016,.00035277777777777776),a(109017,1e-6),a(109018,1e-9),a(109030,5e4),a(109031,15e4)]),L=l.get(9001),n=C("area"),u=new Map([n(109401,1e4),n(109402,4046.8564224),n(109403,4046.872609874252),n(109404,1),n(109405,.09290304),n(109406,.09290341161327487),n(109407,.09290137299531805),n(109408,3.34450944),n(109409,3429904),n(109410,1.000027193184865),n(109411,404.6872609874253),n(109412,.04046872609874252),n(109413,2589998470319522e-9),n(109414,1e6),n(109415,.8361123569578626),n(109416,404.6783807676053),n(109417,.04046783807676053),n(109418,.8361244606523066),n(109419,.09290271785025629),n(109420,404.6842389557165),n(109421,.04046842389557164),n(109422,.83612589696064),n(109423,.0929028774400711),n(109424,404.6849341289498),n(109425,.04046849341289498),n(109426,.836125904805842),n(109427,.09290287831176021),n(109428,404.6849379260275),n(109429,.04046849379260275),n(109430,.09290354800069446),n(109431,.09290274144751023),n(109432,.09290207073852812),n(109433,.09290279616016),n(109434,.09290273520025),n(109435,.836124673027592),n(109436,.8361186366467529),n(109437,.8361251654414399),n(109438,.83612461680225),n(109439,2589988110336e-6),n(109440,.09290286332673177),n(109441,.09290349665192114),n(109442,.83612736),n(109443,.8361307045194736),n(109444,404.68564224),n(109445,.040468564224),n(109446,.836123702404),n(109447,.09290263360044447),n(109448,404.683871963536),n(109449,.0404683871963536),n(109450,.01),n(109451,1e-4),n(109452,1e-6),n(109453,64516e-8),n(109454,.0006451625806477421),n(109455,25.29285264),n(109456,25.29295381171408),n(109457,3434528149504e-6),n(109458,3434290937856e-6),n(109459,2.89612324),n(109460,25e8),n(109461,225e8),n(109462,.7168473118308245),n(109463,100),n(109464,1244521604938271e-22),n(109465,1e-12),n(109466,1e-18)]),P=u.get(109404),m=[];function S(e){return e.length===0?'""':e[0]==='"'||e[0]==="."||e[0]>="0"&&e[0]<="9"?e:'"'+e.trim()+'"'}function _(e){let r="",t="",o=!1;for(let c=0;c<e.length;c++){const d=e[c];o?d==='"'?e[c+1]==='"'?(r+=`\\${d}`,c+=1):o=!1:r+=d:/\s/.test(d)||(d===","?(t+=r!==""?S(r)+",":",",r=""):d===")"||d==="]"?(t+=r!==""?S(r)+"]}":"]}",r=""):d==="("||d==="["?(t+='{ "entity": "'+r.toUpperCase().trim()+'", "values":[',r=""):d==='"'?(o=!0,r=""):r+=d)}return JSON.parse(t)}function z(e){try{for(let c=0;c<m.length;c++)if(m[c].spatialReferenceWkt===e)return m[c].unit;const r=I(_(e));if(r===null)return null;let t=null;for(const c of r.values)if(typeof c=="object"&&(c.entity==="UNIT"||c.entity==="ANGLEUNIT"||c.entity==="LENGTHUNIT")){t=c;break}if(t===null)return null;const o=D(r.entity==="GEOGCS"||r.entity==="GEOGCRS"?"angular":"linear",t.values[1],t.values[2]);return m.push({spatialReferenceWkt:e,unit:o}),m.length>10&&m.shift(),o}catch{return null}}function D(e,r,t){if(t!=null)try{if(t.values[0]==="EPSG")return{type:e,wkid:Number.parseInt(t.values[1],10),factor:r}}catch{}return{type:e,factor:r}}function I(e){if(e===null)return null;switch(e.entity){case"GEOGCRS":case"GEOGCS":case"PROJCRS":case"PROJCS":return e}const r=[];for(const t of e.values)if(typeof t=="object"&&t.entity!==void 0)switch(t.entity){case"GEOGCRS":case"GEOGCS":case"PROJCRS":case"PROJCS":return t;default:r.push(t)}for(const t of r){const o=I(t);if(o!=null)return o}return null}const g=-1;function i(e,r){let t;switch(e){case"linear":t=l;break;case"angular":t=b;break;case"area":t=u;break;default:return null}return t.get(r)}function q(e){const r=e.wkid;if(r!=null){const o=U.units[U[r]];if(o!=null)switch(o){case"Meter":return i("linear",9001);case"Foot":return i("linear",9002);case"Foot_US":return i("linear",9003);case"Foot_Clarke":return i("linear",9005);case"Yard_Clarke":return i("linear",9037);case"Link_Clarke":return i("linear",9039);case"Yard_Sears":return i("linear",9040);case"Foot_Sears":return i("linear",9041);case"Chain_Sears":return i("linear",9042);case"Chain_Benoit_1895_B":return i("linear",9062);case"Yard_Indian":return i("linear",9084);case"Yard_Indian_1937":return i("linear",9085);case"Foot_Gold_Coast":return i("linear",9094);case"Chain":return i("linear",9097);case"Chain_Sears_1922_Truncated":return i("linear",9301);case"50_Kilometers":return i("linear",109030);case"150_Kilometers":return i("linear",109031);default:throw new Error(`Unknown unit name: ${o}`)}return R.has(r)?i("angular",9105):i("angular",9102)}const t=e.wkt2||e.wkt;if(t!=null){const o=z(t);if(o!=null){if(o.wkid!=null){const c=i(o.type,o.wkid);if(c!=null)return c}return{type:o.type,wkid:g,factor:o.factor}}}return null}function v(e){if(e.type!=="linear")return null;if(e.wkid===g)return{type:"area",wkid:g,factor:e.factor**2};const r=B.get(e.wkid);return r==null?null:i("area",r)}function G(e){if(e!=null){if(typeof e=="number")return u.get(e)??l.get(e)??b.get(e);if(typeof e!="string")throw new T(null,s.InvalidParameter,null);switch(e.toLowerCase().replaceAll(/[\s-]+/g,"")){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return u.get(109404);case"miles":case"mile":case"squaremile":case"squaremiles":return u.get(109439);case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return u.get(109414);case"acres":case"acre":case"ac":return u.get(109402);case"hectares":case"hectare":case"ha":return u.get(109401);case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return u.get(109442);case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return u.get(109405);case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return u.get(109409);case"millimeter":case"millimeters":case"squaremillimeter":case"squaremillimeters":return u.get(109452);case"centimeter":case"centimeters":case"squarecentimeter":case"squarecentimeters":return u.get(109451);case"decimeter":case"decimeters":case"squaredecimeter":case"squaredecimeters":return u.get(109450);case"inch":case"inches":case"squareinch":case"squareinches":return u.get(109453);case"usfoot":case"usfeet":case"squareusfoot":case"squareusfeet":return u.get(109406);case"usmile":case"usmiles":case"squareusmile":case"squareusmiles":return u.get(109413)}}}function K(e){if(e!=null){if(typeof e=="number")return l.get(e)??b.get(e)??u.get(e);if(typeof e!="string")throw new T(null,s.InvalidParameter,null);switch(e.toLowerCase().replaceAll(/[\s-]+/g,"")){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":case"hectares":case"hectare":case"ha":return l.get(9001);case"miles":case"mile":case"squaremile":case"squaremiles":return l.get(9093);case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return l.get(9036);case"yard":case"yd":case"yards":case"squareyards":case"squareyard":case"acres":case"acre":case"ac":return l.get(9096);case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return l.get(9002);case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return l.get(9030);case"millimeter":case"millimeters":case"squaremillimeter":case"squaremillimeters":return l.get(109007);case"centimeter":case"centimeters":case"squarecentimeter":case"squarecentimeters":return l.get(109006);case"decimeter":case"decimeters":case"squaredecimeter":case"squaredecimeters":return l.get(109005);case"inch":case"inches":case"squareinch":case"squareinches":return l.get(109008);case"usfoot":case"usfeet":case"squareusfoot":case"squareusfeet":return l.get(9003);case"usmile":case"usmiles":case"squareusmile":case"squareusmiles":return l.get(9035)}}}function w(e,r,t){if(e.type!==r.type)throw new Error(`Incompatible unit types. src=${e.type} dest=${r.type}`);return t*(e.factor/r.factor)}function W(e,r,t){if(e==null||r==null)return t;const o=q(e);if(o==null)throw new Error("Unknown spatial reference unit.");const c=r.type==="area"&&o.type==="linear"?v(o):o;if(c==null)throw new Error(`Unknown spatial reference ${r.type} unit.`);return w(c,r,t)}function j(e,r,t){if(e==null||r==null)return t;const o=q(r);if(o==null)throw new Error("Unknown spatial reference unit.");const c=e.type==="area"&&o.type==="linear"?v(o):o;if(c==null)throw new Error(`Unknown spatial reference ${e.type} unit.`);return w(e,c,t)}function H(e,r,t){return e==null||r==null?t:w(e,r,t)}const X=Object.freeze(Object.defineProperty({__proto__:null,convert:H,convertFromSpatialReferenceUnit:W,convertToSpatialReferenceUnit:j,getSpatialReferenceUnit:q,meters:L,squareMeters:P,toAreaUnit:G,toLengthUnit:K},Symbol.toStringTag,{value:"Module"}));export{P as M,T as a,Q as b,Y as c,K as d,X as e,H as h,O as i,f as l,L as o,W as p,G as q,s as r,V as u,j as w};
