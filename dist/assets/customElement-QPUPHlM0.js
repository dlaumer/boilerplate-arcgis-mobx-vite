import{dL as r,dE as d,dI as a,dJ as n,dM as h}from"./index-PAhymuf7.js";import{n as m}from"./ref-MWYWQRb2.js";import{b as g}from"./observers-BgSsKPOv.js";import{C as p}from"./dom-BMWJYfMU.js";import{s as f}from"./useT9n-CLwIWSIu.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const l={scrim:"scrim",content:"content"},o={s:72,l:480},b=r`:host{position:absolute;inset:0;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity: 0 }to{--tw-text-opacity: 1 }}.scrim{position:absolute;inset:0;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}`,s=class s extends d{constructor(){super(...arguments),this.resizeObserver=g("resize",()=>this.handleResize()),this.hasContent=!1,this.loading=!1,this.messages=f()}connectedCallback(){var e;super.connectedCallback(),(e=this.resizeObserver)==null||e.observe(this.el)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.disconnect()}handleDefaultSlotChange(e){this.hasContent=p(e)}storeLoaderEl(e){this.loaderEl=e,this.handleResize()}getScale(e){return e<o.s?"s":e>=o.l?"l":"m"}handleResize(){const{loaderEl:e,el:t}=this;e&&(this.loaderScale=this.getScale(Math.min(t.clientHeight,t.clientWidth)??0))}render(){const{hasContent:e,loading:t,messages:c}=this;return n`<div class=${a(l.scrim)}>${t?n`<calcite-loader .label=${c.loading} .scale=${this.loaderScale} ${m(this.storeLoaderEl)}></calcite-loader>`:null}<div class=${a(l.content)} .hidden=${!e}><slot @slotchange=${this.handleDefaultSlotChange}></slot></div></div>`}};s.properties={hasContent:16,loaderScale:16,loading:7,messageOverrides:0},s.styles=b;let i=s;h("calcite-scrim",i);
