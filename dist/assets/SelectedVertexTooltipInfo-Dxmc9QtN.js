import{r as e,l as o,t as r}from"./index-PAhymuf7.js";import{r as a}from"./automaticLengthMeasurementUtils-CtMhEUBs.js";import{h as n,Q as h,w as p}from"./SnappingContext-DaLlKkiD.js";let s=class extends n(a){constructor(i){super(i),this.type="move-point",this.allFields.forEach(t=>{t.lockable=!1,t.setActual(null)})}get allFields(){return[this.longitude,this.latitude,this.x,this.y,this.elevation]}};e([o()],s.prototype,"allFields",null),s=e([r("esri.views.interactive.tooltip.infos.MovePointTooltipInfo")],s);let l=class extends n(a){constructor(i){super(i),this.type="selected-vertex",this.area=h(),this.totalLength=p(),this.geometryType="polyline",this.allFields.forEach(t=>{t.lockable=!1,t.setActual(null)})}get allFields(){return[this.longitude,this.latitude,this.x,this.y,this.elevation,this.geometryType==="polygon"?this.area:this.totalLength]}};e([o()],l.prototype,"geometryType",void 0),e([o()],l.prototype,"allFields",null),l=e([r("esri.views.interactive.tooltip.infos.SelectedVertexTooltipInfo")],l);export{s as i,l as p};
