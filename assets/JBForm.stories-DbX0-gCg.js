var he=s=>{throw TypeError(s)};var _=(s,t,e)=>t.has(s)||he("Cannot "+e);var l=(s,t,e)=>(_(s,t,"read from private field"),e?e.call(s):t.get(s)),b=(s,t,e)=>t.has(s)?he("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),v=(s,t,e,r)=>(_(s,t,"write to private field"),r?r.call(s,e):t.set(s,e),e),d=(s,t,e)=>(_(s,t,"access private method"),e);import{R as n,r as c}from"./index-CwcVQgaJ.js";import{o as g}from"./JBButton-DK5GdynM.js";import{e as ut}from"./jb-validation-DEeh0jn_.js";import{l as ct}from"./index-BtFglznY.js";import{m as pe}from"./JBDateInput-C3aViKNo.js";import{d as F}from"./JBInput-DWN16F02.js";import{i as dt,u as ft}from"./index-BFn3YVAI.js";import{u as ht}from"./JBTextarea-BGMzZtwI.js";import{p as pt}from"./JBPaymentInput-B0BYoJ-V.js";import{n as bt}from"./JBImageInput-BZem3B7z.js";import{p as X}from"./JBNumberInput-7SmhS0DB.js";import"./jb-button-CLf9MNka.js";import"./jb-loading-CzCNB5A7.js";import"./index-bfIR6bpK.js";import"./index-BVrqzDik.js";import"./jb-calendar-BEpNb0zW.js";import"./index-_b1slotr.js";import"./index-C0u5HlS_.js";import"./jb-popover-D5-NAHSt.js";import"./index-DST6LYPA.js";var L,be,$e=(be=class{constructor(s){b(this,L);v(this,L,{onChange:()=>{}}),this.dispatchOnChange=()=>{l(this,L).onChange()},this.name=s.name,this.validation=s.validation,this.dom=s.dom,this.getDirtyStatus=s.getDirtyStatus,this.getValue=s.getValue,this.setInitialValue=s.setInitialValue,this.setValue=s.setValue}get value(){var s;return(s=this.getValue)==null?void 0:s.call(this)}set Value(s){var t;(t=this.setValue)==null||t.call(this,s)}attachCallbacks(s){v(this,L,s)}},L=new WeakMap,be);const gt=Symbol("ValueCollectionSymbol");var S=class extends Map{constructor(...s){super(...s),this[gt]=!0}};function Ge(s){const t=[];for(const e of s.elements.entries())e[1].isAllValid||t.push(e[0]);for(const e of s.virtualElements.entries())e[1].isAllValid||e[0].dom&&t.push(e[0].dom);for(const e of s.subForms.entries())e[1].isAllValid||t.push(...Ge(e[1]));return t}function me(s,t,e,r){if(!t.name)return;if(!(s[t.name]instanceof S)){const i=r[t.name]??0;s[t.name]=new S().set(i,s[t.name])}const o=s[t.name],a=t.id?t.id:o.size;o.set(a,e)}function ue(s,t,e){const r=t.filter(a=>a.name==e.name);r.forEach((a,i)=>{a.id&&s.has(a.id)&&(a.value=s.get(a.id),te(a),s.delete(a.id),r.splice(i,1))});const o=Array.from(s.values());r.forEach(a=>{a.value=o.shift(),te(a)})}function te(s){if(s instanceof HTMLElement){const t=new Event("form-change",{bubbles:!0,composed:!0,cancelable:!1});s.dispatchEvent(t)}}var B,T,O,ge,vt=(ge=class{constructor(t){b(this,B);b(this,T);b(this,O);v(this,B,[]),v(this,T,{}),this.add=e=>{const r=new $e(e);return r.attachCallbacks({onChange:()=>l(this,O).handleStateChanges(r)}),l(this,B).push(r),l(this,T)[r.name]=r,r},this.remove=({virtualElement:e})=>{const r=l(this,B).findIndex(o=>o==e);r!==-1&&l(this,B).splice(r,1)},v(this,O,t)}get list(){return[...l(this,B)]}get dictionary(){return l(this,T)}setValues(t){const e=l(this,B).filter(r=>r.name&&Object.getOwnPropertyNames(t).includes(r.name));for(const r of e)t[r.name]!==void 0&&typeof r.setValue=="function"&&(t[r.name]instanceof S&&t[r.name]?ue(new Map(t[r.name]),e,r):r.setValue(t[r.name]))}setInitialValues(t){for(const e of l(this,B))e.name&&t[e.name]!==void 0&&typeof e.setInitialValue=="function"&&e.setInitialValue(t[e.name])}traverse(t){const e={},r={};for(const o of l(this,B))if(o.name){const a=t(o);e[o.name]!==void 0?me(e,o,a,r):(e[o.name]=a,r[o.name]=o.id??"")}return e}},B=new WeakMap,T=new WeakMap,O=new WeakMap,ge),C,k,Q,I,re,ne,ve,Et=(ve=class{constructor(){b(this,I);b(this,C,[]);b(this,k,{});b(this,Q,(t,e)=>{t.forEach(r=>{r.type=="attributes"&&r.attributeName=="name"&&(r.oldValue&&d(this,I,ne).call(this,r.oldValue,r.target),d(this,I,re).call(this,r.target.name,r.target))})})}get list(){return[...l(this,C)]}get dictionary(){return Object.freeze({...l(this,k)})}setValues(t){const e=l(this,C).filter(r=>r.name&&Object.getOwnPropertyNames(t).includes(r.name));for(const r of e)r.name&&t[r.name]!==void 0&&(t[r.name]instanceof S?ue(new S(t[r.name]),e,r):r.setFormValues(t[r.name],!1))}setInitialValues(t){for(const e of l(this,C))e.name&&t[e.name]!==void 0&&e.setFormInitialValues(t[e.name],!1)}traverse(t){const e={},r={};for(const o of l(this,C))if(o.name){const a=t(o);e[o.name]!==void 0?me(e,o,a,r):(e[o.name]=a,r[o.name]=o.id)}return e}add(t){if(l(this,C).includes(t))return;l(this,C).push(t),t.name&&d(this,I,re).call(this,t.name,t);const e=new MutationObserver(l(this,Q));e.observe(t,{attributes:!0,attributeFilter:["name"],attributeOldValue:!0,subtree:!1,childList:!1}),t.addEventListener("disconnect",()=>{this.remove(t),e.disconnect},{once:!0,passive:!0})}remove(t){const e=l(this,C).findIndex(r=>r==t);e!==-1&&l(this,C).splice(e,1),d(this,I,ne).call(this,t.name,t)}},C=new WeakMap,k=new WeakMap,Q=new WeakMap,I=new WeakSet,re=function(t,e){l(this,k)[t]?l(this,k)[t]=[l(this,k)[t],e].flat(1):l(this,k)[t]=e},ne=function(t,e){if(Array.isArray(l(this,k)[t])){const r=l(this,k)[t].findIndex(o=>o==e);r!==-1&&l(this,k)[t].splice(r,1)}else delete l(this,k)[t]},ve),D,p,Ye,ze,Ue,ae,j,Ke,Qe,Xe,oe,Ee,yt=(Ee=class{constructor(t){b(this,p);b(this,D);this.observer=new MutationObserver(d(this,p,Ue).bind(this)),this.customElements=new Map,this.nativeElements=new Map,this.form=document.createElement("form"),this.form.setAttribute("id",ct("form")),v(this,D,t)}get allElements(){return[...Array.from(this.customElements.keys()),...Array.from(this.nativeElements.keys())]}initElements(){d(this,p,Ye).call(this),d(this,p,ze).call(this)}},D=new WeakMap,p=new WeakSet,Ye=function(){const t=l(this,D).querySelectorAll("*");for(const e of t)d(this,p,j).call(this,e)},ze=function(){this.observer.observe(l(this,D),{subtree:!0,childList:!0,attributes:!1,characterData:!1})},Ue=function(t,e){t.forEach(r=>{r.addedNodes.forEach(o=>{o instanceof HTMLElement&&(d(this,p,j).call(this,o),o.querySelectorAll("*").forEach(a=>{d(this,p,j).call(this,a)}))}),r.removedNodes.forEach(o=>{o instanceof HTMLElement&&(d(this,p,ae).call(this,o),o.querySelectorAll("*").forEach(a=>{d(this,p,ae).call(this,a)}))})})},ae=function(t){this.nativeElements.has(t)&&(this.nativeElements.delete(t),t.getAttribute("form")===this.form.id&&t.removeAttribute("form")),this.customElements.has(t)&&(this.customElements.delete(t),t.getAttribute("form")===this.form.id&&t.removeAttribute("form"))},j=function(t){t instanceof HTMLElement&&(d(this,p,Ke).call(this,t)&&!this.nativeElements.has(t)&&d(this,p,oe).call(this,t)?(this.nativeElements.set(t,null),t.setAttribute("form",this.form.id)):d(this,p,Xe).call(this,t)&&!this.customElements.has(t)&&d(this,p,oe).call(this,t)?(this.customElements.set(t,null),t.setAttribute("form",this.form.id)):d(this,p,Qe).call(this,t))},Ke=function(t){return t instanceof HTMLInputElement||t instanceof HTMLSelectElement||t instanceof HTMLTextAreaElement||t instanceof HTMLFieldSetElement||t instanceof HTMLOutputElement||t instanceof HTMLObjectElement},Qe=function(t){t.localName.includes("-")&&!t.matches(":defined")&&customElements.whenDefined(t.localName).then(e=>{e.formAssociated&&d(this,p,j).call(this,t)})},Xe=function(t){var e,r;return((e=t.dataset)==null?void 0:e.formControl)!==void 0||((r=t.constructor)==null?void 0:r.formAssociated)===!0||typeof t.formAssociatedCallback=="function"},oe=function(t){var e;return((e=t.parentElement)==null?void 0:e.closest("jb-form"))==l(this,D)},Ee),y,V,x,ie,P,f,Ze,_e,et,tt,rt,A,R,M,se,nt,at,ot,st,J,Vt=(J=class extends HTMLElement{constructor(){super();b(this,f);b(this,y);b(this,V);b(this,x);b(this,ie);b(this,P);b(this,R);b(this,M);v(this,y,new vt({handleStateChanges:d(this,f,se).bind(this)})),v(this,V,new Et),v(this,x,new yt(this)),this.callbacks={showValidationError:e=>{},cleanValidationError:()=>{},setValidationResult:()=>{}},v(this,P,new ut({showValidationError:this.callbacks.showValidationError.bind(this),clearValidationError:this.callbacks.cleanValidationError.bind(this),getValue:this.getFormValues.bind(this),getValidations:d(this,f,et).bind(this),getValueString:e=>JSON.stringify(e),setValidationResult:this.callbacks.setValidationResult})),v(this,R,!1),v(this,M,this.checkValidity()),this.initWebComponent()}static get formAssociated(){return!0}get validElements(){return Array.from(l(this,x).allElements).filter(e=>e.isConnected)}get validation(){return l(this,P)}get isDirty(){const e=this.getFormDirtyStatus();return Object.values(e).includes(!0)}get value(){return this.getFormValues()}set value(e){this.setFormValues(e)}get name(){return this.getAttribute("name")||""}set name(e){e?this.setAttribute("name",e):this.removeAttribute("name")}get virtualElements(){return{list:l(this,y).list,dictionary:l(this,y).dictionary,add:l(this,y).add,remove:l(this,y).remove}}get subForms(){return{list:l(this,V).list,dictionary:l(this,V).dictionary}}get formElements(){return l(this,x)}initWebComponent(){d(this,f,Ze).call(this),d(this,f,nt).call(this)}connectedCallback(){l(this,x).initElements(),d(this,f,at).call(this)}static get observedAttributes(){return[]}attributeChangedCallback(e,r,o){d(this,f,st).call(this,e,o)}checkValidity(){return l(this,P).checkValiditySync({showError:!1}).isAllValid}reportValidity(){let e=!0;for(const a of this.validElements){const i=a;typeof i.reportValidity=="function"&&(e=i.reportValidity()&&e)}const r=l(this,y).list.reduce((a,i)=>{var m;return(typeof((m=i.validation)==null?void 0:m.checkValidity)!="function"||i.validation.checkValiditySync({showError:!0}))&&a},!0),o=l(this,V).list.reduce((a,i)=>i.reportValidity()&&a,!0);return e&&r&&o}async jbCheckValidity(e){var o,a;const r={isAllValid:!0,elements:new Map,virtualElements:new Map,subForms:new Map};for(const i of this.validElements){const m=i;if(typeof((o=m.validation)==null?void 0:o.checkValidity)=="function"){const h=await m.validation.checkValidity({showError:e.showError});r.isAllValid=h.isAllValid&&r.isAllValid,r.elements.set(m,h)}}for(const i of l(this,y).list)if(typeof((a=i.validation)==null?void 0:a.checkValidity)=="function"){const m=await i.validation.checkValidity({showError:e.showError});r.isAllValid=m.isAllValid&&r.isAllValid,r.virtualElements.set(i,m)}for(const i of l(this,V).list){const m=await i.jbCheckValidity(e);r.isAllValid=m.isAllValid&&r.isAllValid,r.subForms.set(i,m)}return r}getValidationMessages(){return d(this,f,A).call(this,e=>e.validationMessage??null,e=>{var r,o;return((o=(r=e.validation)==null?void 0:r.resultSummary)==null?void 0:o.message)??null},e=>e.validation.resultSummary.message??null)}getValidationSummary(){return d(this,f,A).call(this,e=>{var r;return((r=e.validation)==null?void 0:r.resultSummary)??null},e=>{var r;return((r=e.validation)==null?void 0:r.resultSummary)??null},e=>e.validation.resultSummary)}getValidationResult(){return d(this,f,A).call(this,e=>{var r;return((r=e.validation)==null?void 0:r.result)??null},e=>{var r;return((r=e.validation)==null?void 0:r.result)??null},e=>e.validation.result)}getFormValues(){return d(this,f,A).call(this,e=>e.value,e=>typeof e.getValue=="function"?e.getValue():null,e=>e.getFormValues())}getFormDirtyStatus(){return d(this,f,A).call(this,e=>e.isDirty,e=>typeof e.getDirtyStatus=="function"&&e.getDirtyStatus(),e=>e.isDirty)}setFormValues(e,r=!0){const o=this.validElements.filter(a=>a.name&&Object.getOwnPropertyNames(e).includes(a.name));for(const a of o)a.name!==void 0&&(e[a.name]===void 0||a instanceof J||(e[a.name]instanceof S?ue(new S(e[a.name]),o,a):(a.value=e[a.name],te(a))));l(this,y).setValues(e),l(this,V).setValues(e),r&&this.setFormInitialValues(e,!1)}setFormInitialValues(e,r=!0){for(const o of this.validElements){const a=o;a.name&&e[a.name]!==void 0&&(a.initialValue=e[a.name])}l(this,y).setInitialValues(e),l(this,V).setInitialValues(e),r&&this.setFormValues(e,!1)}disconnectedCallback(){const e=new CustomEvent("disconnect",{bubbles:!1,composed:!1,cancelable:!1});this.dispatchEvent(e)}},y=new WeakMap,V=new WeakMap,x=new WeakMap,ie=new WeakMap,P=new WeakMap,f=new WeakSet,Ze=function(){this.addEventListener("submit",e=>d(this,f,_e).call(this,e),{passive:!1}),this.addEventListener("change",e=>{const r=e.target;d(this,f,se).call(this,r)},{passive:!0})},_e=function(e){e.isTrusted&&(e.stopPropagation(),e.preventDefault(),this.reportValidity()&&d(this,f,tt).call(this,e))},et=function(){return[{validator:()=>{for(const e of this.validElements){const r=e;if(typeof r.checkValidity=="function"&&r.checkValidity()==0)return r.validationMessage!=""&&r.validationMessage}return!0},message:"form element is invalid"},{validator:()=>{const e=l(this,y).list.find(r=>{var o;return typeof((o=r.validation)==null?void 0:o.checkValidity)=="function"&&!r.validation.checkValiditySync({showError:!1})});return e==null||e.validation===void 0||(e.validation.resultSummary.message,!1)},message:"virtual element is invalid"},{validator:()=>{const e=l(this,V).list.find(r=>!r.validation.checkValiditySync({showError:!1}));return e==null||(e.validation.resultSummary.message,!1)},message:"form element is invalid"}]},tt=function(e){const r=new SubmitEvent("submit",{...e});this.dispatchEvent(r)},rt=function(e){const r={},o={};for(const a of this.validElements){const i=e(a);a.name&&(r[a.name]!==void 0?me(r,a,i,o):(r[a.name]=i,o[a.name]=a.id??""))}return r},A=function(e,r,o){return{...d(this,f,rt).call(this,e),...l(this,y).traverse(r),...l(this,V).traverse(o)}},R=new WeakMap,M=new WeakMap,se=function(e){const r=()=>{const a=this.isDirty;if(a!==l(this,R)){const i=new CustomEvent("dirty-change",{bubbles:!1,cancelable:!1,composed:!0,detail:{isDirty:a}});this.dispatchEvent(i),v(this,R,a)}},o=()=>{const a=this.checkValidity();if(a!==l(this,M)){const i=new CustomEvent("validity-change",{bubbles:!1,cancelable:!1,composed:!0,detail:{isValid:a}});this.dispatchEvent(i),v(this,M,a)}};if(e instanceof $e)return d(this,f,ot).call(this),r(),void o();e.isDirty!==void 0&&r(),typeof e.checkValidity=="function"&&o()},nt=function(){new MutationObserver((e,r)=>{e.forEach(o=>{if(o.target instanceof J){const a=[];o.addedNodes.forEach(i=>{if(i.nodeType==Node.ELEMENT_NODE){const m=i;m.nodeName=="FORM"&&i.isConnected&&m instanceof J?a.push(m):m.querySelectorAll("jb-form").forEach(h=>{var u;((u=h.parentElement)==null?void 0:u.closest("jb-form"))==this&&a.push(h)})}}),a.forEach(i=>{l(this,V).add(i)})}})}).observe(this,{subtree:!0,childList:!0})},at=function(){const e=new CustomEvent("init",{bubbles:!1,composed:!1,cancelable:!1});this.dispatchEvent(e)},ot=function(){const e=new Event("change",{bubbles:!0,cancelable:!1,composed:!0});this.dispatchEvent(e)},st=function(e,r){},J);customElements.get("jb-form")||window.customElements.define("jb-form",Vt);function N(s,t,e,r=!1){let o=c.useCallback(a=>{s.current&&typeof e=="function"&&e(a)},[s,e]);c.useEffect(()=>{let a=s.current;return a&&a.addEventListener(t,o,{passive:r,capture:!1}),function(){a&&a.removeEventListener(t,o,{passive:r,capture:!1})}},[s,t,e,r])}let lt=c.createContext(null),kt=lt.Provider,Ft=()=>c.useContext(lt),le=s=>{let[t,e]=c.useState(null),r=s.events??["change","form-change"];return c.useEffect(()=>{var i;let o=(i=s.formRef)==null?void 0:i.current,a=new AbortController;return o&&r.forEach(m=>{o.addEventListener(m,h=>{s.name?s.name==h.target.name&&e(h.target.value):e(o.value)},{signal:a.signal,passive:!0})}),()=>{a.abort()}},[s.name,r,s.formRef]),{value:t}};function ce({value:s,name:t,onChange:e,children:r}){let o=c.useRef(null),[a,i]=c.useState(null),m=Ft();return c.useEffect(()=>{let h=null;return m!=null&&m.virtualElements&&t&&(h=m.virtualElements.add({name:t,getValue:()=>o.current,setValue:u=>{o.current=u,e==null||e(u)}})),()=>m==null?void 0:m.virtualElements.remove({virtualElement:h})},[m,t,e]),c.useEffect(()=>{o.current=s},[s]),c.useEffect(()=>{i(o.current)},[o.current]),typeof r=="function"?r(a):n.createElement(c.Fragment,null)}function E(s){var t;let e=n.useRef(null),{ref:r,onSubmit:o,onValidityChange:a,onDirtyChange:i,onInit:m,onLoad:h,onChange:u,children:Z,...w}=s,[St,it]=c.useState(0);return c.useImperativeHandle(r,()=>e.current??void 0,[e]),c.useEffect(()=>{it(mt=>mt+1)},[e.current]),N(e,"load",(t={onSubmit:o,onValidityChange:a,onDirtyChange:i,onInit:m,onLoad:h,onChange:u}).onLoad,!0),N(e,"init",t.onInit,!0),N(e,"validity-change",t.onValidityChange),N(e,"dirty-change",t.onDirtyChange),N(e,"change",t.onChange),N(e,"submit",t.onSubmit),n.createElement("jb-form",{ref:e,...w},n.createElement(kt,{value:e.current},Z))}E.displayName="JBForm";const Bt=["male","female"];function de(){return n.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"}},n.createElement(F,{name:"name",required:!0,label:"name"}),n.createElement(pe,{name:"birthDate",required:!0,label:"birthdate",format:"YYYY-MM-DD"}),n.createElement(pe,{name:"applyDate",required:!0,label:"apply date"}),n.createElement(dt,{name:"gender",label:"gender",required:!0},n.createElement(ft,{optionList:Bt})),n.createElement(bt,{name:"avatar",label:"avatar",required:!0,maxFileSize:500*1024}),n.createElement(ht,{label:"description",name:"description",required:!0}))}function fe(){return n.createElement("div",null,n.createElement(F,{name:"bankName",required:!0,label:"bank name"}),n.createElement(pt,{name:"cardNumber",label:"card number"}))}function W(){return n.createElement("div",null,n.createElement(F,{name:"productName",required:!0,label:"product name"}),n.createElement(X,{name:"price",label:"price",step:1e3,showControlButton:!0}))}function ee({id:s}){return n.createElement(E,{name:"books",id:s},n.createElement(ce,{name:"bookId"}),n.createElement(F,{name:"bookTitle",required:!0,label:"bookTitle"}),n.createElement(X,{name:"price",label:"price",step:1e3,showControlButton:!0}))}const Xt={title:"Components/form elements/JBForm",component:E},H={args:{name:"testForm"}},Ct={name:"ali",birthDate:"2024-10-26",applyDate:new Date().toISOString(),gender:"male",description:"i'm ali",avatar:"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"},q={render:s=>{const t=c.useRef(null),[e,r]=c.useState(!1),[o,a]=c.useState(!0),i=()=>{alert("submit")},m=u=>{r(u.detail.isDirty)},h=u=>{a(u.detail.isValid)};return c.useEffect(()=>{t.current&&a(t.current.checkValidity())},[t]),n.createElement(E,{ref:t,...s,style:{display:"flex",flexDirection:"column",gap:"1rem"},onSubmit:i,onDirtyChange:m,onValidityChange:h},n.createElement(de,null),n.createElement("div",{style:{display:"flex",gap:"1rem"}},n.createElement(g,{disabled:!e,type:"submit"},"submit"),n.createElement(g,{onClick:()=>{var u;return alert((u=t.current)==null?void 0:u.checkValidity())}},"check validity(",o?"valid":"invalid",")"),n.createElement(g,{onClick:()=>{var u;return alert((u=t.current)==null?void 0:u.reportValidity())}},"report validity"),n.createElement(g,{onClick:()=>{var u;return console.debug((u=t.current)==null?void 0:u.getValidationMessages())}},"getValidationMessages"),n.createElement(g,{onClick:()=>{var u;return console.debug((u=t.current)==null?void 0:u.getValidationSummary())}},"getValidationSummary"),n.createElement(g,{onClick:()=>{var u;return console.debug((u=t.current)==null?void 0:u.getValidationResult())}},"getValidationResult"),n.createElement(g,{onClick:()=>{var u;return console.debug((u=t.current)==null?void 0:u.getFormValues())}},"getFormValues"),n.createElement(g,{onClick:()=>{var u;return console.debug((u=t.current)==null?void 0:u.setFormValues(Ct,!0))}},"setFormDefaultValue"),n.createElement(g,{onClick:()=>{var u;return console.debug((u=t.current)==null?void 0:u.getFormDirtyStatus())}},"getFormDirtyStatus")))},args:{name:"test-form"}},$={render:s=>{const t=c.useRef(null),[e,r]=c.useState(!1),[o,a]=c.useState(!0),i=c.useCallback(()=>{alert("submit")},[]),m=c.useCallback(w=>{r(w.detail.isDirty)},[]),h=c.useCallback(w=>{a(w.detail.isValid)},[]);c.useEffect(()=>{t.current&&(a(t.current.checkValidity()),t.current.addEventListener("submit",i),t.current.addEventListener("dirty-change",m),t.current.addEventListener("validity-change",h))},[t.current,h,m,i]);const[u,Z]=c.useState(!0);return n.createElement("jb-form",{ref:t,...s,style:{display:"flex",flexDirection:"column",gap:"1rem"}},u&&n.createElement("jb-form",{name:"personForm"},n.createElement(de,null)),n.createElement(g,{onClick:()=>Z(w=>!w)},u?"Hide":"Show"," Person Form"),n.createElement("hr",null),n.createElement("jb-form",{name:"bank-form"},n.createElement(fe,null)),n.createElement("div",null,"isDirty:",e?"dirty":"clean"),n.createElement("div",null,"isValid:",o?"valid":"invalid"))},args:{name:"parent-form"}},G={render:s=>{const t=c.useRef(null),e=async()=>{const r=await t.current.jbCheckValidity({showError:!0});Ge(r).forEach(a=>{a.animate([{transform:"rotate(0deg)",display:"block"},{transform:"rotate(2deg)",display:"block"},{transform:"rotate(-2deg)",display:"block"},{transform:"rotate(0deg)",display:"block"}],{duration:100,iterations:10,fill:"auto"})})};return n.createElement(E,{ref:t,...s,style:{display:"flex",flexDirection:"column",gap:"1rem"}},n.createElement(E,{name:"personForm"},n.createElement(de,null)),n.createElement("hr",null),n.createElement(E,{name:"bank-form"},n.createElement(fe,null)),n.createElement(g,{onClick:e},"shake invalids"))},args:{name:"parent-form"}},Y={render:()=>{const s=c.useRef(null),t=()=>{var o;const r=(o=s.current)==null?void 0:o.getFormValues();console.log(r)},e=()=>{var o,a;(o=s.current)==null||o.checkValidity();const r=(a=s.current)==null?void 0:a.getValidationResult();console.log(r)};return n.createElement(E,{ref:s,name:"masterForm"},n.createElement("p",null,"see browser console for result"),n.createElement(fe,null),n.createElement("p",null,"we have 3 exact phone number form element"),n.createElement(F,{name:"phoneNumber",label:"phone number 1"}),n.createElement(F,{name:"phoneNumber",label:"phone number 2"}),n.createElement(F,{name:"phoneNumber",label:"phone number 3"}),n.createElement("p",null,"we have 3 exact form with same name of `ProductForm`"),n.createElement("hr",null),n.createElement(E,{name:"ProductForm"},n.createElement(W,null)),n.createElement("hr",null),n.createElement(E,{name:"ProductForm"},n.createElement(W,null)),n.createElement("hr",null),n.createElement(E,{name:"ProductForm"},n.createElement(W,null)),n.createElement("hr",null),n.createElement(E,{name:"ProductForm"},n.createElement(W,null)),n.createElement("br",null),n.createElement("div",{style:{display:"flex",gap:"0.5rem",paddingBlock:"1rem"}},n.createElement(g,{onClick:t},"Get Values"),n.createElement(g,{onClick:e},"Get Validations")))}},z={render:s=>{const t=c.useRef(null),e=()=>{var m;console.log((m=t.current)==null?void 0:m.getFormValues())},r=()=>{var m;(m=t.current)==null||m.setFormValues(s.value)},[o,a]=c.useState(10),i=le({formRef:t});return c.useEffect(()=>{console.log("already set value",i)},[i]),n.createElement(E,{name:"myForm",ref:t,style:{display:"flex",flexDirection:"column",gap:"1rem"}},n.createElement(F,{name:"bookName",label:"book name"}),n.createElement(X,{name:"price",label:"price"}),n.createElement(ce,{name:"bookId",value:o,onChange:m=>a(m)},m=>n.createElement("p",null,"Hidden Value (bookId) is ",m)),n.createElement(g,{onClick:e},"Get Value (See Console log)"),n.createElement(g,{onClick:r},"Set Value (Set value in args)"))},args:{value:{bookId:5,bookName:"Wikipedia",price:1e5}}},U={render:s=>{const t=c.useRef(null),e=()=>{var h;console.log((h=t.current)==null?void 0:h.getFormValues())},r=()=>{var h;(h=t.current)==null||h.setFormValues(s.value)},[o,a]=c.useState(10),i=le({formRef:t}),{value:m}=le({formRef:t,name:"bookName"});return c.useEffect(()=>{console.log("already set value",i)},[i]),n.createElement(E,{name:"myForm",ref:t,style:{display:"flex",flexDirection:"column",gap:"1rem"}},n.createElement("p",null,"click on set value and see logs for full form values"),n.createElement(F,{name:"bookName",label:"book name"}),n.createElement(X,{name:"price",label:"price"}),n.createElement("p",null,"Hidden Value (bookId) is ",o),n.createElement(ce,{name:"bookId",value:o,onChange:h=>a(h)}),n.createElement(g,{onClick:e},"Get Value (See Console log)"),n.createElement(g,{onClick:r},"Set Value (Set value in args)"),n.createElement("p",null,"the book name we set: ",n.createElement("b",null,m)))},args:{value:{bookId:5,bookName:"Wikipedia",price:1e5}}},K={render:s=>{const t=c.useRef(null),e=()=>{var o;console.log((o=t.current)==null?void 0:o.getFormValues())},r=()=>{var o;(o=t.current)==null||o.setFormValues(s.value)};return n.createElement(E,{name:"myForm",ref:t,style:{display:"flex",flexDirection:"column",gap:"1rem"}},n.createElement("p",null,"first muli form element directly in form"),n.createElement(F,{name:"phoneNumber",label:"phone number 1"}),n.createElement(F,{name:"phoneNumber",label:"phone number 2"}),n.createElement(F,{name:"phoneNumber",label:"phone number 3"}),n.createElement("hr",null),n.createElement(ee,null),n.createElement("hr",null),n.createElement(ee,null),n.createElement("hr",null),n.createElement("p",null,'Form With Id "myBookForm"'),n.createElement(ee,{id:"myBookForm"}),n.createElement(g,{onClick:e},"Get Value (log it into console)"),n.createElement(g,{onClick:r},"Set Value (Set value in args)"))},args:{value:{phoneNumber:new S([[1,"09125588745"],[2,"0919074020"],[3,"09145898742"]]),books:new S([[1,{bookId:1,bookTitle:"Planets",price:1e5}],[2,{bookId:2,bookTitle:"Animals",price:2e4}],["myBookForm",{bookId:3,bookTitle:"Set With Id",price:5e6}]])}}};var ye,Ve,ke;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    name: "testForm"
  }
}`,...(ke=(Ve=H.parameters)==null?void 0:Ve.docs)==null?void 0:ke.source}}};var Fe,Be,Ce;q.parameters={...q.parameters,docs:{...(Fe=q.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef<JBFormWebComponent>(null);
    const [isDirty, setIsDirty] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const onSubmit = () => {
      alert("submit");
    };
    const onDirtyChange = (e: JBFormEventType<CustomEvent>) => {
      setIsDirty(e.detail.isDirty);
    };
    const onValidityChange = (e: JBFormEventType<CustomEvent>) => {
      setIsValid(e.detail.isValid);
    };
    // biome-ignore lint/correctness/useExhaustiveDependencies: <we need this>
    useEffect(() => {
      if (ref.current) {
        setIsValid(ref.current.checkValidity());
      }
    }, [ref]);
    return <JBForm ref={ref} {...args} style={{
      display: 'flex',
      flexDirection: "column",
      gap: '1rem'
    }} onSubmit={onSubmit} onDirtyChange={onDirtyChange} onValidityChange={onValidityChange}>
          <PersonForm />
          <div style={{
        display: 'flex',
        gap: '1rem'
      }}>
            <JBButton disabled={!isDirty} type="submit">submit</JBButton>
            <JBButton onClick={() => alert(ref.current?.checkValidity())}>check validity({isValid ? 'valid' : 'invalid'})</JBButton>
            <JBButton onClick={() => alert(ref.current?.reportValidity())}>report validity</JBButton>
            <JBButton onClick={() => console.debug(ref.current?.getValidationMessages())}>getValidationMessages</JBButton>
            <JBButton onClick={() => console.debug(ref.current?.getValidationSummary())}>getValidationSummary</JBButton>
            <JBButton onClick={() => console.debug(ref.current?.getValidationResult())}>getValidationResult</JBButton>
            <JBButton onClick={() => console.debug(ref.current?.getFormValues())}>getFormValues</JBButton>
            <JBButton onClick={() => console.debug(ref.current?.setFormValues(defaultFormValue, true))}>setFormDefaultValue</JBButton>
            <JBButton onClick={() => console.debug(ref.current?.getFormDirtyStatus())}>getFormDirtyStatus</JBButton>
          </div>
        </JBForm>;
  },
  args: {
    name: "test-form"
  }
}`,...(Ce=(Be=q.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};var Se,Je,Ie;$.parameters={...$.parameters,docs:{...(Se=$.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef<JBFormWebComponent>(null);
    const [isDirty, setIsDirty] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const onSubmit = useCallback(() => {
      alert("submit");
    }, []);
    const onDirtyChange = useCallback((e: JBFormEventType<CustomEvent>) => {
      setIsDirty(e.detail.isDirty);
    }, []);
    const onValidityChange = useCallback((e: JBFormEventType<CustomEvent>) => {
      setIsValid(e.detail.isValid);
    }, []);
    // biome-ignore lint/correctness/useExhaustiveDependencies: <we need this reaction>
    useEffect(() => {
      if (ref.current) {
        setIsValid(ref.current.checkValidity());
        ref.current.addEventListener('submit', onSubmit as EventListenerOrEventListenerObject);
        ref.current.addEventListener('dirty-change', onDirtyChange as EventListenerOrEventListenerObject);
        ref.current.addEventListener('validity-change', onValidityChange as EventListenerOrEventListenerObject);
      }
    }, [ref.current, onValidityChange, onDirtyChange, onSubmit]);
    const [showPersonForm, setShowPersonForm] = useState(true);
    return (
      //@ts-expect-error
      <jb-form ref={ref} {...args} style={{
        display: 'flex',
        flexDirection: "column",
        gap: '1rem'
      }}>
          {showPersonForm && <jb-form name="personForm">
              <PersonForm></PersonForm>
            </jb-form>}
          <JBButton onClick={() => setShowPersonForm(x => !x)}>{showPersonForm ? \`Hide\` : \`Show\`} Person Form</JBButton>
          <hr></hr>
          <jb-form name="bank-form">
            <BankForm />
          </jb-form>
          <div>isDirty:{isDirty ? 'dirty' : 'clean'}</div>
          <div>isValid:{isValid ? 'valid' : 'invalid'}</div>
        </jb-form>
    );
  },
  args: {
    name: "parent-form"
  }
}`,...(Ie=(Je=$.parameters)==null?void 0:Je.docs)==null?void 0:Ie.source}}};var we,De,xe;G.parameters={...G.parameters,docs:{...(we=G.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef<JBFormWebComponent>(null);
    const shakeInvalid = async () => {
      const res = await ref.current!.jbCheckValidity({
        showError: true
      });
      const elements = getInvalidElements(res);
      elements.forEach(el => {
        el.animate([{
          transform: "rotate(0deg)",
          display: 'block'
        }, {
          transform: "rotate(2deg)",
          display: 'block'
        }, {
          transform: "rotate(-2deg)",
          display: 'block'
        }, {
          transform: "rotate(0deg)",
          display: 'block'
        }], {
          duration: 100,
          iterations: 10,
          fill: 'auto'
        });
      });
    };
    return <JBForm ref={ref} {...args} style={{
      display: 'flex',
      flexDirection: "column",
      gap: '1rem'
    }}>
          <JBForm name="personForm">
            <PersonForm></PersonForm>
          </JBForm>
          <hr></hr>
          <JBForm name="bank-form">
            <BankForm />
          </JBForm>
          <JBButton onClick={shakeInvalid}>shake invalids</JBButton>
        </JBForm>;
  },
  args: {
    name: "parent-form"
  }
}`,...(xe=(De=G.parameters)==null?void 0:De.docs)==null?void 0:xe.source}}};var Ne,Ae,Le;Y.parameters={...Y.parameters,docs:{...(Ne=Y.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<JBFormWebComponent>(null);
    const getValue = () => {
      const values = ref.current?.getFormValues();
      console.log(values);
    };
    const getValidations = () => {
      ref.current?.checkValidity();
      const validations = ref.current?.getValidationResult();
      console.log(validations);
    };
    return <JBForm ref={ref} name="masterForm">
        <p>see browser console for result</p>
        <BankForm />
        <p>we have 3 exact phone number form element</p>
        <JBInput name="phoneNumber" label="phone number 1" />
        <JBInput name="phoneNumber" label="phone number 2" />
        <JBInput name="phoneNumber" label="phone number 3" />
        <p>we have 3 exact form with same name of \`ProductForm\`</p>
        <hr />
        <JBForm name="ProductForm"><ProductForm /></JBForm>
        <hr />
        <JBForm name="ProductForm"><ProductForm /></JBForm>
        <hr />
        <JBForm name="ProductForm"><ProductForm /></JBForm>
        <hr />
        <JBForm name="ProductForm"><ProductForm /></JBForm>
        <br />
        <div style={{
        display: 'flex',
        gap: '0.5rem',
        paddingBlock: '1rem'
      }}>
          <JBButton onClick={getValue}>Get Values</JBButton>
          <JBButton onClick={getValidations}>Get Validations</JBButton>
        </div>
      </JBForm>;
  }
}`,...(Le=(Ae=Y.parameters)==null?void 0:Ae.docs)==null?void 0:Le.source}}};var Te,Pe,Re;z.parameters={...z.parameters,docs:{...(Te=z.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  // biome-ignore lint/suspicious/noExplicitAny: <here we have different args than component args>
  render: (args: any) => {
    const ref = useRef<JBFormWebComponent>(null);
    const getValue = () => {
      console.log(ref.current?.getFormValues());
    };
    const setValue = () => {
      ref.current?.setFormValues(args.value);
    };
    const [bookId, setBookId] = useState(10);
    const formValues = useJBFormValue({
      formRef: ref
    });
    useEffect(() => {
      console.log("already set value", formValues);
    }, [formValues]);
    return <JBForm name="myForm" ref={ref} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <JBInput name="bookName" label="book name" />
        <JBNumberInput name="price" label="price" />
        <JBFormValue name="bookId" value={bookId} onChange={value => setBookId(value)}>{v => <p>Hidden Value (bookId) is {v}</p>}</JBFormValue>
        <JBButton onClick={getValue}>Get Value (See Console log)</JBButton>
        <JBButton onClick={setValue}>Set Value (Set value in args)</JBButton>

      </JBForm>;
  },
  args: {
    //@ts-ignore
    value: {
      bookId: 5,
      bookName: "Wikipedia",
      price: 100000
    }
  }
}`,...(Re=(Pe=z.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source}}};var Me,je,Oe;U.parameters={...U.parameters,docs:{...(Me=U.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  // biome-ignore lint/suspicious/noExplicitAny: <here we have different args than component args>
  render: (args: any) => {
    const ref = useRef<JBFormWebComponent>(null);
    const getValue = () => {
      console.log(ref.current?.getFormValues());
    };
    const setValue = () => {
      ref.current?.setFormValues(args.value);
    };
    const [bookId, setBookId] = useState(10);
    const formValues = useJBFormValue({
      formRef: ref
    });
    const {
      value: bookName
    } = useJBFormValue<string>({
      formRef: ref,
      name: "bookName"
    });
    useEffect(() => {
      console.log("already set value", formValues);
    }, [formValues]);
    return <JBForm name="myForm" ref={ref} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <p>click on set value and see logs for full form values</p>
        <JBInput name="bookName" label="book name" />
        <JBNumberInput name="price" label="price" />
        <p>Hidden Value (bookId) is {bookId}</p>
        <JBFormValue name="bookId" value={bookId} onChange={value => setBookId(value)} />
        <JBButton onClick={getValue}>Get Value (See Console log)</JBButton>
        <JBButton onClick={setValue}>Set Value (Set value in args)</JBButton>
        <p>the book name we set: <b>{bookName}</b></p>
      </JBForm>;
  },
  args: {
    //@ts-ignore
    value: {
      bookId: 5,
      bookName: "Wikipedia",
      price: 100000
    }
  }
}`,...(Oe=(je=U.parameters)==null?void 0:je.docs)==null?void 0:Oe.source}}};var We,He,qe;K.parameters={...K.parameters,docs:{...(We=K.parameters)==null?void 0:We.docs,source:{originalSource:`{
  // biome-ignore lint/suspicious/noExplicitAny: <here we have different args than component args>
  render: (args: any) => {
    const ref = useRef<JBFormWebComponent>(null);
    const getValue = () => {
      console.log(ref.current?.getFormValues());
    };
    const setValue = () => {
      ref.current?.setFormValues(args.value);
    };
    return <JBForm name="myForm" ref={ref} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <p>first muli form element directly in form</p>
        <JBInput name="phoneNumber" label="phone number 1" />
        <JBInput name="phoneNumber" label="phone number 2" />
        <JBInput name="phoneNumber" label="phone number 3" />
        <hr />
        <BookForm />
        <hr />
        <BookForm />
        <hr />
        <p>Form With Id "myBookForm"</p>
        <BookForm id="myBookForm" />
        <JBButton onClick={getValue}>Get Value (log it into console)</JBButton>
        <JBButton onClick={setValue}>Set Value (Set value in args)</JBButton>
      </JBForm>;
  },
  args: {
    //@ts-ignore
    value: {
      phoneNumber: new TraverseCollection<any>([[1, '09125588745'], [2, '0919074020'], [3, '09145898742']]) as TraverseCollection<string>,
      books: new TraverseCollection<any>([[1, {
        bookId: 1,
        bookTitle: "Planets",
        price: 100000
      }], [2, {
        bookId: 2,
        bookTitle: "Animals",
        price: 20000
      }], ["myBookForm", {
        bookId: 3,
        bookTitle: "Set With Id",
        price: 5000000
      }]])
    }
  }
}`,...(qe=(He=K.parameters)==null?void 0:He.docs)==null?void 0:qe.source}}};const Zt=["Normal","FormTest","FormTreeTest","SpotInvalidElementTest","FormWithSameName","FormValue","UseJBFormValue","ArrayValue"];export{K as ArrayValue,q as FormTest,$ as FormTreeTest,z as FormValue,Y as FormWithSameName,H as Normal,G as SpotInvalidElementTest,U as UseJBFormValue,Zt as __namedExportsOrder,Xt as default};
