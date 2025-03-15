import{dE as E,ff as n,gz as b,dI as d,dJ as k,dL as H,dM as y}from"./index-PAhymuf7.js";import{n as p}from"./ref-MWYWQRb2.js";import{u,f as C,Y as L,X as x,c as R,s as f}from"./floating-ui-qjyNh8kt.js";import{i as S}from"./guid-ejniuQmw.js";import{s as O}from"./openCloseComponent-CNZJIzCg.js";import{S as z}from"./FloatingArrow-CJPlzI05.js";import{Q as A,y as P}from"./dom-BMWJYfMU.js";import"./debounce-D0G5qrda.js";import"./keyed-DVBdVnhu.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const m={positionContainer:"position-container",container:"container"},I=300,$=500,v="aria-describedby";function T(l){const{referenceElement:e}=l;return(typeof e=="string"?A(l,{id:e}):e)||null}class D{constructor(){this.registeredElements=new WeakMap,this.registeredShadowRootCounts=new WeakMap,this.hoverOpenTimeout=null,this.hoverCloseTimeout=null,this.activeTooltip=null,this.registeredElementCount=0,this.clickedTooltip=null,this.queryTooltip=e=>{const{registeredElements:t}=this,i=e.find(o=>t.has(o));return t.get(i)},this.keyDownHandler=e=>{if(e.key==="Escape"&&!e.defaultPrevented){const{activeTooltip:t}=this;if(t!=null&&t.open){this.clearHoverTimeout(),this.closeActiveTooltip();const i=T(t),o=e.composedPath();(i instanceof Element&&o.includes(i)||o.includes(t))&&e.preventDefault()}}},this.pointerMoveHandler=e=>{if(e.defaultPrevented){this.closeHoveredTooltip();return}const t=e.composedPath(),{activeTooltip:i}=this,o=this.queryTooltip(t);if(this.pathHasOpenTooltip(o,t)){this.clearHoverTimeout();return}o!==this.clickedTooltip&&(o?this.openHoveredTooltip(o):i!=null&&i.open&&this.closeHoveredTooltip(),this.clickedTooltip=null)},this.clickHandler=e=>{if(e.defaultPrevented)return;this.clickedTooltip=null;const t=e.composedPath(),i=this.queryTooltip(t);if(this.pathHasOpenTooltip(i,t)){this.clearHoverTimeout();return}if(this.closeActiveTooltip(),!!i){if(this.clearHoverTimeout(),i.closeOnClick){this.clickedTooltip=i,this.toggleTooltip(i,!1);return}this.toggleTooltip(i,!0)}},this.blurHandler=()=>{this.closeActiveTooltip()},this.focusInHandler=e=>{if(e.defaultPrevented)return;const t=e.composedPath(),i=this.queryTooltip(t);if(this.pathHasOpenTooltip(i,t)){this.clearHoverTimeout();return}i!==this.clickedTooltip&&(this.clickedTooltip=null,this.closeTooltipIfNotActive(i),i&&this.toggleFocusedTooltip(i,!0))},this.openHoveredTooltip=e=>{var t;this.hoverOpenTimeout=window.setTimeout(()=>{this.hoverOpenTimeout!==null&&(this.clearHoverCloseTimeout(),this.closeTooltipIfNotActive(e),this.toggleTooltip(e,!0))},(t=this.activeTooltip)!=null&&t.open?0:I)},this.closeHoveredTooltip=()=>{this.hoverCloseTimeout=window.setTimeout(()=>{this.hoverCloseTimeout!==null&&this.closeActiveTooltip()},$)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t);const i=this.getReferenceElShadowRootNode(e);i&&this.registerShadowRoot(i),this.registeredElementCount===1&&this.addListeners()}unregisterElement(e){const t=this.getReferenceElShadowRootNode(e);t&&this.unregisterShadowRoot(t),this.registeredElements.delete(e)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}pathHasOpenTooltip(e,t){const{activeTooltip:i}=this;return(i==null?void 0:i.open)&&t.includes(i)||(e==null?void 0:e.open)&&t.includes(e)}addShadowListeners(e){e.addEventListener("focusin",this.focusInHandler)}removeShadowListeners(e){e.removeEventListener("focusin",this.focusInHandler)}addListeners(){window.addEventListener("keydown",this.keyDownHandler),window.addEventListener("pointermove",this.pointerMoveHandler),window.addEventListener("click",this.clickHandler),window.addEventListener("focusin",this.focusInHandler),window.addEventListener("blur",this.blurHandler)}removeListeners(){window.removeEventListener("keydown",this.keyDownHandler),window.removeEventListener("pointermove",this.pointerMoveHandler),window.removeEventListener("click",this.clickHandler),window.removeEventListener("focusin",this.focusInHandler),window.removeEventListener("blur",this.blurHandler)}clearHoverOpenTimeout(){window.clearTimeout(this.hoverOpenTimeout),this.hoverOpenTimeout=null}clearHoverCloseTimeout(){window.clearTimeout(this.hoverCloseTimeout),this.hoverCloseTimeout=null}clearHoverTimeout(){this.clearHoverOpenTimeout(),this.clearHoverCloseTimeout()}closeTooltipIfNotActive(e){this.activeTooltip!==e&&this.closeActiveTooltip()}closeActiveTooltip(){const{activeTooltip:e}=this;e!=null&&e.open&&this.toggleTooltip(e,!1)}toggleFocusedTooltip(e,t){t&&this.clearHoverTimeout(),this.toggleTooltip(e,t)}toggleTooltip(e,t){e.open=t,this.activeTooltip=t?e:null}registerShadowRoot(e){const{registeredShadowRootCounts:t}=this,i=t.get(e),o=Math.min((typeof i=="number"?i:0)+1,1);o===1&&this.addShadowListeners(e),t.set(e,o)}unregisterShadowRoot(e){const{registeredShadowRootCounts:t}=this,i=t.get(e),o=Math.max((typeof i=="number"?i:1)-1,0);o===0&&this.removeShadowListeners(e),t.set(e,o)}getReferenceElShadowRootNode(e){return e instanceof Element?P(e):null}}const M=H`:host{display:contents;--calcite-floating-ui-z-index: var(--calcite-tooltip-z-index, var(--calcite-z-index-tooltip))}.position-container{inline-size:max-content;display:none;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.position-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.position-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.position-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.position-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}.position-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.position-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}.container{position:relative;overflow:hidden;padding:.75rem 1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);border-radius:var(--calcite-tooltip-corner-radius, var(--calcite-corner-radius-round));color:var(--calcite-tooltip-text-color, var(--calcite-color-text-1));max-inline-size:20rem;max-block-size:20rem;text-align:start}.position-container .calcite-floating-ui-anim{border-width:1px;border-style:solid;background-color:var(--calcite-tooltip-background-color, var(--calcite-color-foreground-1));border-color:var(--calcite-tooltip-border-color, var(--calcite-color-border-3));border-radius:var(--calcite-tooltip-corner-radius, var(--calcite-corner-radius-round))}.calcite-floating-ui-arrow{fill:var(--calcite-tooltip-background-color, var(--calcite-color-foreground-1))}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-tooltip-border-color, var(--calcite-color-border-3))}:host([hidden]){display:none}[hidden]{display:none}`,g=new D,r=class r extends E{constructor(){super(...arguments),this.guid=`calcite-tooltip-${S()}`,this.transitionProp="opacity",this.floatingLayout="vertical",this.closeOnClick=!1,this.offsetDistance=u,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.calciteTooltipBeforeClose=n({cancelable:!1}),this.calciteTooltipBeforeOpen=n({cancelable:!1}),this.calciteTooltipClose=n({cancelable:!1}),this.calciteTooltipOpen=n({cancelable:!1})}async reposition(e=!1){const{referenceEl:t,placement:i,overlayPositioning:o,offsetDistance:s,offsetSkidding:a,arrowEl:c,floatingEl:w}=this;return C(this,{floatingEl:w,referenceEl:t,overlayPositioning:o,placement:i,offsetDistance:s,offsetSkidding:a,arrowEl:c,type:"tooltip"},e)}connectedCallback(){super.connectedCallback(),this.setUpReferenceElement(!0)}willUpdate(e){(e.has("offsetDistance")&&(this.hasUpdated||this.offsetDistance!==u)||e.has("offsetSkidding")&&(this.hasUpdated||this.offsetSkidding!==0)||e.has("overlayPositioning")&&(this.hasUpdated||this.overlayPositioning!=="absolute")||e.has("placement")&&(this.hasUpdated||this.placement!=="auto"))&&this.reposition(!0),e.has("open")&&(this.hasUpdated||this.open!==!1)&&this.openHandler(),e.has("referenceElement")&&this.setUpReferenceElement()}loaded(){this.referenceElement&&!this.referenceEl&&this.setUpReferenceElement()}disconnectedCallback(){super.disconnectedCallback(),this.removeReferences(),L(this)}openHandler(){O(this),this.reposition(!0)}onBeforeOpen(){this.calciteTooltipBeforeOpen.emit()}onOpen(){this.calciteTooltipOpen.emit()}onBeforeClose(){this.calciteTooltipBeforeClose.emit()}onClose(){this.calciteTooltipClose.emit(),x(this)}setFloatingEl(e){this.floatingEl=e,e&&requestAnimationFrame(()=>this.setUpReferenceElement())}setTransitionEl(e){this.transitionEl=e}setUpReferenceElement(e=!0){this.removeReferences(),this.referenceEl=T(this.el),R(this);const{el:t,referenceElement:i,referenceEl:o}=this;e&&i&&!o&&console.warn(`${t.tagName}: reference-element id "${i}" was not found.`,{el:t}),this.addReferences()}getId(){return this.el.id||this.guid}addReferences(){const{referenceEl:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(v,t),g.registerElement(e,this.el)}removeReferences(){const{referenceEl:e}=this;e&&("removeAttribute"in e&&e.removeAttribute(v),g.unregisterElement(e))}render(){const{referenceEl:e,label:t,open:i,floatingLayout:o}=this,s=e&&i,a=!s;return this.el.inert=a,this.el.ariaLabel=t,this.el.ariaLive="polite",b(this.el,"id",this.getId()),this.el.role="tooltip",k`<div class=${d(m.positionContainer)} ${p(this.setFloatingEl)}><div class=${d({[f.animation]:!0,[f.animationActive]:s})} ${p(this.setTransitionEl)}>${z({floatingLayout:o,ref:c=>this.arrowEl=c})}<div class=${d(m.container)}><slot></slot></div></div></div>`}};r.properties={floatingLayout:16,referenceEl:16,closeOnClick:7,label:1,offsetDistance:11,offsetSkidding:11,open:7,overlayPositioning:3,placement:3,referenceElement:1},r.styles=M;let h=r;y("calcite-tooltip",h);export{h as Tooltip};
