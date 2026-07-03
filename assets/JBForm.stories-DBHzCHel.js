import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-CS2hR0SM.js";import{i as a,t as o}from"./jb-core-mHSQ7_YN.js";import{r as s,t as c}from"./react-BTNi7t7z.js";import{n as l,t as u}from"./jb-validation-W7g_ROyS.js";import{a as d,t as f}from"./react-11ZqxWgL.js";import{n as p,t as m}from"./react-DKY1CyJx.js";import{n as h,t as ee}from"./main-DtkfYeqH.js";import{r as te,t as ne}from"./react-MABZFqVg.js";import{a as re,n as ie,t as ae}from"./react-BKz0Q-Sn.js";import{n as oe,t as se}from"./react-CTfdafNA.js";import{r as ce,t as le}from"./react-C4yPi0KF.js";function ue(e){let t=[];for(let n of e.elements.entries())n[1].isAllValid||t.push(n[0]);for(let n of e.virtualElements.entries())n[1].isAllValid||n[0].dom&&t.push(n[0].dom);for(let n of e.subForms.entries())n[1].isAllValid||t.push(...ue(n[1]));return t}function g(e,t,n,r){if(!t.name)return;if(!(e[t.name]instanceof x)){let n=r[t.name]??0;e[t.name]=new x().set(n,e[t.name])}let i=e[t.name],a=t.id?t.id:i.size;i.set(a,n)}function _(e,t,n){let r=t.filter((e=>e.name==n.name));r.forEach(((t,n)=>{t.id&&e.has(t.id)&&(t.value=e.get(t.id),v(t),e.delete(t.id),r.splice(n,1))}));let i=Array.from(e.values());r.forEach((e=>{e.value=i.shift(),v(e)}))}function v(e){if(e instanceof HTMLElement){let t=new Event(`form-change`,{bubbles:!0,composed:!0,cancelable:!1});e.dispatchEvent(t)}}var y,b,x,S,C,w,T,de=t((()=>{u(),o(),y=class{#e;get value(){return this.getValue?.()}set Value(e){this.setValue?.(e)}constructor(e){this.#e={onChange:()=>{}},this.dispatchOnChange=()=>{this.#e.onChange()},this.name=e.name,this.validation=e.validation,this.dom=e.dom,this.getDirtyStatus=e.getDirtyStatus,this.getValue=e.getValue,this.setInitialValue=e.setInitialValue,this.setValue=e.setValue}attachCallbacks(e){this.#e=e}},b=Symbol(`ValueCollectionSymbol`),x=class extends Map{constructor(...e){super(...e),this[b]=!0}},S=class{#e;#t;#n;constructor(e){this.#e=[],this.#t={},this.add=e=>{let t=new y(e);return t.attachCallbacks({onChange:()=>this.#n.handleStateChanges(t)}),this.#e.push(t),this.#t[t.name]=t,t},this.remove=({virtualElement:e})=>{let t=this.#e.findIndex((t=>t==e));t!==-1&&this.#e.splice(t,1)},this.#n=e}get list(){return[...this.#e]}get dictionary(){return this.#t}setValues(e){let t=this.#e.filter((t=>t.name&&Object.getOwnPropertyNames(e).includes(t.name)));for(let n of t)e[n.name]!==void 0&&typeof n.setValue==`function`&&(e[n.name]instanceof x&&e[n.name]?_(new Map(e[n.name]),t,n):n.setValue(e[n.name]))}setInitialValues(e){for(let t of this.#e)t.name&&e[t.name]!==void 0&&typeof t.setInitialValue==`function`&&t.setInitialValue(e[t.name])}traverse(e){let t={},n={};for(let r of this.#e)if(r.name){let i=e(r);t[r.name]===void 0?(t[r.name]=i,n[r.name]=r.id??``):g(t,r,i,n)}return t}},C=class{#e=[];#t={};get list(){return[...this.#e]}get dictionary(){return Object.freeze({...this.#t})}setValues(e){let t=this.#e.filter((t=>t.name&&Object.getOwnPropertyNames(e).includes(t.name)));for(let n of t)n.name&&e[n.name]!==void 0&&(e[n.name]instanceof x?_(new x(e[n.name]),t,n):n.setFormValues(e[n.name],!1))}setInitialValues(e){for(let t of this.#e)t.name&&e[t.name]!==void 0&&t.setFormInitialValues(e[t.name],!1)}traverse(e){let t={},n={};for(let r of this.#e)if(r.name){let i=e(r);t[r.name]===void 0?(t[r.name]=i,n[r.name]=r.id):g(t,r,i,n)}return t}#n=(e,t)=>{e.forEach((e=>{e.type==`attributes`&&e.attributeName==`name`&&(e.oldValue&&this.#i(e.oldValue,e.target),this.#r(e.target.name,e.target))}))};add(e){if(this.#e.includes(e))return;this.#e.push(e),e.name&&this.#r(e.name,e);let t=new MutationObserver(this.#n);t.observe(e,{attributes:!0,attributeFilter:[`name`],attributeOldValue:!0,subtree:!1,childList:!1}),e.addEventListener(`disconnect`,(()=>{this.remove(e),t.disconnect}),{once:!0,passive:!0})}remove(e){let t=this.#e.findIndex((t=>t==e));t!==-1&&this.#e.splice(t,1),this.#i(e.name,e)}#r(e,t){this.#t[e]?this.#t[e]=[this.#t[e],t].flat(1):this.#t[e]=t}#i(e,t){if(Array.isArray(this.#t[e])){let n=this.#t[e].findIndex((e=>e==t));n!==-1&&this.#t[e].splice(n,1)}else delete this.#t[e]}},w=class{#e;get allElements(){return[...Array.from(this.customElements.keys()),...Array.from(this.nativeElements.keys())]}constructor(e){this.observer=new MutationObserver(this.#r.bind(this)),this.customElements=new Map,this.nativeElements=new Map,this.form=document.createElement(`form`),this.form.setAttribute(`id`,a(`form`)),this.#e=e}initElements(){this.#t(),this.#n()}#t(){let e=this.#e.querySelectorAll(`*`);for(let t of e)this.#a(t)}#n(){this.observer.observe(this.#e,{subtree:!0,childList:!0,attributes:!1,characterData:!1})}#r(e,t){e.forEach((e=>{e.addedNodes.forEach((e=>{e instanceof HTMLElement&&(this.#a(e),e.querySelectorAll(`*`).forEach((e=>{this.#a(e)})))})),e.removedNodes.forEach((e=>{e instanceof HTMLElement&&(this.#i(e),e.querySelectorAll(`*`).forEach((e=>{this.#i(e)})))}))}))}#i(e){this.nativeElements.has(e)&&(this.nativeElements.delete(e),e.getAttribute(`form`)===this.form.id&&e.removeAttribute(`form`)),this.customElements.has(e)&&(this.customElements.delete(e),e.getAttribute(`form`)===this.form.id&&e.removeAttribute(`form`))}#a(e){e instanceof HTMLElement&&(this.#o(e)&&!this.nativeElements.has(e)&&this.#l(e)?(this.nativeElements.set(e,null),e.setAttribute(`form`,this.form.id)):this.#c(e)&&!this.customElements.has(e)&&this.#l(e)?(this.customElements.set(e,null),e.setAttribute(`form`,this.form.id)):this.#s(e))}#o(e){return e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||e instanceof HTMLFieldSetElement||e instanceof HTMLOutputElement||e instanceof HTMLObjectElement}#s(e){e.localName.includes(`-`)&&!e.matches(`:defined`)&&customElements.whenDefined(e.localName).then((t=>{t.formAssociated&&this.#a(e)}))}#c(e){return e.dataset?.formControl!==void 0||!0===e.constructor?.formAssociated||typeof e.formAssociatedCallback==`function`}#l(e){return e.parentElement?.closest(`jb-form`)==this.#e}},T=class e extends HTMLElement{static get formAssociated(){return!0}#e;#t;#n;#r;get validElements(){return Array.from(this.#n.allElements).filter((e=>e.isConnected))}get validation(){return this.#i}#i;get isDirty(){let e=this.getFormDirtyStatus();return Object.values(e).includes(!0)}get value(){return this.getFormValues()}set value(e){this.setFormValues(e)}get name(){return this.getAttribute(`name`)||``}set name(e){e?this.setAttribute(`name`,e):this.removeAttribute(`name`)}get virtualElements(){return{list:this.#e.list,dictionary:this.#e.dictionary,add:this.#e.add,remove:this.#e.remove}}get subForms(){return{list:this.#t.list,dictionary:this.#t.dictionary}}get formElements(){return this.#n}constructor(){super(),this.#e=new S({handleStateChanges:this.#p.bind(this)}),this.#t=new C,this.#n=new w(this),this.callbacks={showValidationError:e=>{},cleanValidationError:()=>{},setValidationResult:()=>{}},this.#i=new l({showValidationError:this.callbacks.showValidationError.bind(this),clearValidationError:this.callbacks.cleanValidationError.bind(this),getValue:this.getFormValues.bind(this),getValidations:this.#s.bind(this),getValueString:e=>JSON.stringify(e),setValidationResult:this.callbacks.setValidationResult}),this.#d=!1,this.#f=this.checkValidity(),typeof this.attachInternals==`function`&&(this.#r=this.attachInternals(),this.#r.role=`form`),this.initWebComponent()}initWebComponent(){this.#a(),this.#m()}connectedCallback(){this.#n.initElements(),this.#h()}static get observedAttributes(){return[]}attributeChangedCallback(e,t,n){this.#_(e,n)}#a(){this.addEventListener(`submit`,(e=>this.#o(e)),{passive:!1}),this.addEventListener(`change`,(e=>{let t=e.target;this.#p(t)}),{passive:!0})}#o(e){e.isTrusted&&(e.stopPropagation(),e.preventDefault(),this.reportValidity()&&this.#c(e))}#s(){return[{validator:()=>{for(let e of this.validElements){let t=e;if(typeof t.checkValidity==`function`&&t.checkValidity()==0)return t.validationMessage!=``&&t.validationMessage}return!0},message:`form element is invalid`},{validator:()=>{let e=this.#e.list.find((e=>typeof e.validation?.checkValidity==`function`&&!e.validation.checkValiditySync({showError:!1})));return e==null||e.validation===void 0||(e.validation.resultSummary,!1)},message:`virtual element is invalid`},{validator:()=>{let e=this.#t.list.find((e=>!e.validation.checkValiditySync({showError:!1})));return e==null||(e.validation.resultSummary,!1)},message:`form element is invalid`}]}checkValidity(){return this.#i.checkValiditySync({showError:!1}).isAllValid}reportValidity(){let e=!0;for(let t of this.validElements){let n=t;typeof n.reportValidity==`function`&&(e=n.reportValidity()&&e)}let t=this.#e.list.reduce(((e,t)=>(typeof t.validation?.checkValidity!=`function`||t.validation.checkValiditySync({showError:!0}))&&e),!0),n=this.#t.list.reduce(((e,t)=>t.reportValidity()&&e),!0);return e&&t&&n}#c(e){let t=new SubmitEvent(`submit`,{...e});this.dispatchEvent(t)}async jbCheckValidity(e){let t={isAllValid:!0,elements:new Map,virtualElements:new Map,subForms:new Map};for(let n of this.validElements){let r=n;if(typeof r.validation?.checkValidity==`function`){let n=await r.validation.checkValidity({showError:e.showError});t.isAllValid=n.isAllValid&&t.isAllValid,t.elements.set(r,n)}}for(let n of this.#e.list)if(typeof n.validation?.checkValidity==`function`){let r=await n.validation.checkValidity({showError:e.showError});t.isAllValid=r.isAllValid&&t.isAllValid,t.virtualElements.set(n,r)}for(let n of this.#t.list){let r=await n.jbCheckValidity(e);t.isAllValid=r.isAllValid&&t.isAllValid,t.subForms.set(n,r)}return t}getValidationMessages(){return this.#u((e=>e.validationMessage??null),(e=>e.validation?.resultSummary?.message??null),(e=>e.validation.resultSummary?.message??null))}getValidationSummary(){return this.#u((e=>e.validation?.resultSummary??null),(e=>e.validation?.resultSummary??null),(e=>e.validation.resultSummary??null))}getValidationResult(){return this.#u((e=>e.validation?.result??null),(e=>e.validation?.result??null),(e=>e.validation.result))}getFormValues(){return this.#u((e=>e.value),(e=>typeof e.getValue==`function`?e.getValue():null),(e=>e.getFormValues()))}getFormDirtyStatus(){return this.#u((e=>e.isDirty),(e=>typeof e.getDirtyStatus==`function`&&e.getDirtyStatus()),(e=>e.isDirty))}setFormValues(t,n=!0){let r=this.validElements.filter((e=>e.name&&Object.getOwnPropertyNames(t).includes(e.name)));for(let n of r)n.name!==void 0&&(t[n.name]===void 0||n instanceof e||(t[n.name]instanceof x?_(new x(t[n.name]),r,n):(n.value=t[n.name],v(n))));this.#e.setValues(t),this.#t.setValues(t),n&&this.setFormInitialValues(t,!1)}setFormInitialValues(e,t=!0){for(let t of this.validElements){let n=t;n.name&&e[n.name]!==void 0&&(n.initialValue=e[n.name])}this.#e.setInitialValues(e),this.#t.setInitialValues(e),t&&this.setFormValues(e,!1)}#l(e){let t={},n={};for(let r of this.validElements){let i=e(r);r.name&&(t[r.name]===void 0?(t[r.name]=i,n[r.name]=r.id??``):g(t,r,i,n))}return t}#u(e,t,n){return{...this.#l(e),...this.#e.traverse(t),...this.#t.traverse(n)}}#d;#f;#p(e){let t=()=>{let e=this.isDirty;if(e!==this.#d){let t=new CustomEvent(`dirty-change`,{bubbles:!1,cancelable:!1,composed:!0,detail:{isDirty:e}});this.dispatchEvent(t),this.#d=e}},n=()=>{let e=this.checkValidity();if(e!==this.#f){let t=new CustomEvent(`validity-change`,{bubbles:!1,cancelable:!1,composed:!0,detail:{isValid:e}});this.dispatchEvent(t),this.#f=e}};if(e instanceof y)return this.#g(),t(),void n();e.isDirty!==void 0&&t(),typeof e.checkValidity==`function`&&n()}#m(){new MutationObserver(((t,n)=>{t.forEach((t=>{if(t.target instanceof e){let n=[];t.addedNodes.forEach((t=>{if(t.nodeType==Node.ELEMENT_NODE){let r=t;r.nodeName==`FORM`&&t.isConnected&&r instanceof e?n.push(r):r.querySelectorAll(`jb-form`).forEach((e=>{e.parentElement?.closest(`jb-form`)==this&&n.push(e)}))}})),n.forEach((e=>{this.#t.add(e)}))}}))})).observe(this,{subtree:!0,childList:!0})}#h(){let e=new CustomEvent(`init`,{bubbles:!1,composed:!1,cancelable:!1});this.dispatchEvent(e)}#g(){let e=new Event(`change`,{bubbles:!0,cancelable:!1,composed:!0});this.dispatchEvent(e)}#_(e,t){}disconnectedCallback(){let e=new CustomEvent(`disconnect`,{bubbles:!1,composed:!1,cancelable:!1});this.dispatchEvent(e)}},customElements.get(`jb-form`)||window.customElements.define(`jb-form`,T)})),fe=t((()=>{de()}));function E(e,t,n,r=!1){let i=(0,k.useCallback)((t=>{e.current&&typeof n==`function`&&n(t)}),[e,n]);(0,k.useEffect)((()=>{let n=e.current;return n&&n.addEventListener(t,i,{passive:r,capture:!1}),function(){n&&n.removeEventListener(t,i,{passive:r,capture:!1})}}),[e,t,n,r])}function D({value:e,name:t,onChange:n,children:r}){let i=(0,k.useRef)(null),[a,o]=(0,k.useState)(null),s=M();return(0,k.useEffect)((()=>{let e=null;return s?.virtualElements&&t&&(e=s.virtualElements.add({name:t,getValue:()=>i.current,setValue:e=>{i.current=e,n?.(e)}})),()=>{e&&s?.virtualElements.remove({virtualElement:e})}}),[s,t,n]),(0,k.useEffect)((()=>{i.current=e??null}),[e]),(0,k.useEffect)((()=>{o(i.current)}),[i.current]),typeof r==`function`?r(a):k.createElement(k.Fragment,null)}function O(e){let t=k.useRef(null),{ref:n,onSubmit:r,onValidityChange:i,onDirtyChange:a,onInit:o,onLoad:s,onChange:c,children:l,...u}=e,[d,f]=(0,k.useState)(0);return(0,k.useImperativeHandle)(n,(()=>t.current??void 0),[t]),(0,k.useEffect)((()=>{f((e=>e+1))}),[t.current]),function(e,t){E(e,`load`,t.onLoad,!0),E(e,`init`,t.onInit,!0),E(e,`validity-change`,t.onValidityChange),E(e,`dirty-change`,t.onDirtyChange),E(e,`change`,t.onChange),E(e,`submit`,t.onSubmit)}(t,{onSubmit:r,onValidityChange:i,onDirtyChange:a,onInit:o,onLoad:s,onChange:c}),k.createElement(`jb-form`,{ref:t,...u},k.createElement(j,{value:t.current},l))}var k,A,j,M,N,pe=t((()=>{k=n(r(),1),fe(),A=(0,k.createContext)(null),j=A.Provider,M=()=>(0,k.useContext)(A),N=e=>{let[t,n]=(0,k.useState)(null),r=e.events??[`change`,`form-change`];return(0,k.useEffect)((()=>{let t=e.formRef?.current,i=new AbortController;return t&&r.forEach((r=>{t.addEventListener(r,(r=>{e.name?e.name==r.target.name&&n(r.target.value):n(t.value)}),{signal:i.signal,passive:!0})})),()=>{i.abort()}}),[e.name,r,e.formRef]),{value:t}},O.displayName=`JBForm`})),P=t((()=>{pe()}));function F(){return(0,z.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,z.jsx)(d,{name:`name`,required:!0,label:`name`}),(0,z.jsx)(h,{name:`birthDate`,required:!0,label:`birthdate`,format:`YYYY-MM-DD`}),(0,z.jsx)(h,{name:`applyDate`,required:!0,label:`apply date`}),(0,z.jsx)(ie,{name:`gender`,label:`gender`,required:!0,children:(0,z.jsx)(re,{optionList:B})}),(0,z.jsx)(oe,{name:`avatar`,label:`avatar`,required:!0,maxFileSize:500*1024}),(0,z.jsx)(ce,{label:`description`,name:`description`,required:!0})]})}function I(){return(0,z.jsxs)(`div`,{children:[(0,z.jsx)(d,{name:`bankName`,required:!0,label:`bank name`}),(0,z.jsx)(te,{name:`cardNumber`,label:`card number`})]})}function L(){return(0,z.jsxs)(`div`,{children:[(0,z.jsx)(d,{name:`productName`,required:!0,label:`product name`}),(0,z.jsx)(p,{name:`price`,label:`price`,step:1e3,showControlButton:!0})]})}function R({id:e}){return(0,z.jsxs)(O,{name:`books`,id:e,children:[(0,z.jsx)(D,{name:`bookId`}),(0,z.jsx)(d,{name:`bookTitle`,required:!0,label:`bookTitle`}),(0,z.jsx)(p,{name:`price`,label:`price`,step:1e3,showControlButton:!0})]})}var z,B,me=t((()=>{r(),ee(),f(),ae(),le(),ne(),se(),m(),P(),z=i(),B=[`male`,`female`];try{R.displayName=`BookForm`,R.__docgenInfo={description:``,displayName:`BookForm`,filePath:`/home/runner/work/design-system/design-system/modules/jb-form/stories/samples/TestForms.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`design-system/modules/jb-form/stories/samples/TestForms.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),he=e({ArrayValue:()=>Q,FormTest:()=>K,FormTreeTest:()=>q,FormValue:()=>X,FormWithSameName:()=>Y,Normal:()=>W,SpotInvalidElementTest:()=>J,UseJBFormValue:()=>Z,__namedExportsOrder:()=>$,default:()=>U}),V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ge=t((()=>{V=n(r(),1),c(),fe(),P(),me(),f(),m(),H=i(),U={title:`Components/form elements/JBForm`,component:O},W={args:{name:`testForm`}},G={name:`ali`,birthDate:`2024-10-26`,applyDate:new Date().toISOString(),gender:`male`,description:`i'm ali`,avatar:`https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png`},K={render:e=>{let t=(0,V.useRef)(null),[n,r]=(0,V.useState)(!1),[i,a]=(0,V.useState)(!0),o=()=>{alert(`submit`)},c=e=>{r(e.detail.isDirty)},l=e=>{a(e.detail.isValid)};return(0,V.useEffect)(()=>{t.current&&a(t.current.checkValidity())},[t]),(0,H.jsxs)(O,{ref:t,...e,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},onSubmit:o,onDirtyChange:c,onValidityChange:l,children:[(0,H.jsx)(F,{}),(0,H.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`},children:[(0,H.jsx)(s,{disabled:!n,type:`submit`,children:`submit`}),(0,H.jsxs)(s,{onClick:()=>alert(t.current?.checkValidity()),children:[`check validity(`,i?`valid`:`invalid`,`)`]}),(0,H.jsx)(s,{onClick:()=>alert(t.current?.reportValidity()),children:`report validity`}),(0,H.jsx)(s,{onClick:()=>console.debug(t.current?.getValidationMessages()),children:`getValidationMessages`}),(0,H.jsx)(s,{onClick:()=>console.debug(t.current?.getValidationSummary()),children:`getValidationSummary`}),(0,H.jsx)(s,{onClick:()=>console.debug(t.current?.getValidationResult()),children:`getValidationResult`}),(0,H.jsx)(s,{onClick:()=>console.debug(t.current?.getFormValues()),children:`getFormValues`}),(0,H.jsx)(s,{onClick:()=>console.debug(t.current?.setFormValues(G,!0)),children:`setFormDefaultValue`}),(0,H.jsx)(s,{onClick:()=>console.debug(t.current?.getFormDirtyStatus()),children:`getFormDirtyStatus`})]})]})},args:{name:`test-form`}},q={render:e=>{let t=(0,V.useRef)(null),[n,r]=(0,V.useState)(!1),[i,a]=(0,V.useState)(!0),o=(0,V.useCallback)(()=>{alert(`submit`)},[]),c=(0,V.useCallback)(e=>{r(e.detail.isDirty)},[]),l=(0,V.useCallback)(e=>{a(e.detail.isValid)},[]);(0,V.useEffect)(()=>{t.current&&(a(t.current.checkValidity()),t.current.addEventListener(`submit`,o),t.current.addEventListener(`dirty-change`,c),t.current.addEventListener(`validity-change`,l))},[t.current,l,c,o]);let[u,d]=(0,V.useState)(!0);return(0,H.jsxs)(`jb-form`,{ref:t,...e,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[u&&(0,H.jsx)(`jb-form`,{name:`personForm`,children:(0,H.jsx)(F,{})}),(0,H.jsxs)(s,{onClick:()=>d(e=>!e),children:[u?`Hide`:`Show`,` Person Form`]}),(0,H.jsx)(`hr`,{}),(0,H.jsx)(`jb-form`,{name:`bank-form`,children:(0,H.jsx)(I,{})}),(0,H.jsxs)(`div`,{children:[`isDirty:`,n?`dirty`:`clean`]}),(0,H.jsxs)(`div`,{children:[`isValid:`,i?`valid`:`invalid`]})]})},args:{name:`parent-form`}},J={render:e=>{let t=(0,V.useRef)(null),n=async()=>{ue(await t.current.jbCheckValidity({showError:!0})).forEach(e=>{e.animate([{transform:`rotate(0deg)`,display:`block`},{transform:`rotate(2deg)`,display:`block`},{transform:`rotate(-2deg)`,display:`block`},{transform:`rotate(0deg)`,display:`block`}],{duration:100,iterations:10,fill:`auto`})})};return(0,H.jsxs)(O,{ref:t,...e,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,H.jsx)(O,{name:`personForm`,children:(0,H.jsx)(F,{})}),(0,H.jsx)(`hr`,{}),(0,H.jsx)(O,{name:`bank-form`,children:(0,H.jsx)(I,{})}),(0,H.jsx)(s,{onClick:n,children:`shake invalids`})]})},args:{name:`parent-form`}},Y={render:()=>{let e=(0,V.useRef)(null);return(0,H.jsxs)(O,{ref:e,name:`masterForm`,children:[(0,H.jsx)(`p`,{children:`see browser console for result`}),(0,H.jsx)(I,{}),(0,H.jsx)(`p`,{children:`we have 3 exact phone number form element`}),(0,H.jsx)(d,{name:`phoneNumber`,label:`phone number 1`}),(0,H.jsx)(d,{name:`phoneNumber`,label:`phone number 2`}),(0,H.jsx)(d,{name:`phoneNumber`,label:`phone number 3`}),(0,H.jsx)(`p`,{children:"we have 3 exact form with same name of `ProductForm`"}),(0,H.jsx)(`hr`,{}),(0,H.jsx)(O,{name:`ProductForm`,children:(0,H.jsx)(L,{})}),(0,H.jsx)(`hr`,{}),(0,H.jsx)(O,{name:`ProductForm`,children:(0,H.jsx)(L,{})}),(0,H.jsx)(`hr`,{}),(0,H.jsx)(O,{name:`ProductForm`,children:(0,H.jsx)(L,{})}),(0,H.jsx)(`hr`,{}),(0,H.jsx)(O,{name:`ProductForm`,children:(0,H.jsx)(L,{})}),(0,H.jsx)(`br`,{}),(0,H.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,paddingBlock:`1rem`},children:[(0,H.jsx)(s,{onClick:()=>{let t=e.current?.getFormValues();console.log(t)},children:`Get Values`}),(0,H.jsx)(s,{onClick:()=>{e.current?.checkValidity();let t=e.current?.getValidationResult();console.log(t)},children:`Get Validations`})]})]})}},X={render:e=>{let t=(0,V.useRef)(null),n=()=>{console.log(t.current?.getFormValues())},r=()=>{t.current?.setFormValues(e.value)},[i,a]=(0,V.useState)(10),o=N({formRef:t});return(0,V.useEffect)(()=>{console.log(`already set value`,o)},[o]),(0,H.jsxs)(O,{name:`myForm`,ref:t,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,H.jsx)(d,{name:`bookName`,label:`book name`}),(0,H.jsx)(p,{name:`price`,label:`price`}),(0,H.jsx)(D,{name:`bookId`,value:i,onChange:e=>a(e),children:e=>(0,H.jsxs)(`p`,{children:[`Hidden Value (bookId) is `,e]})}),(0,H.jsx)(s,{onClick:n,children:`Get Value (See Console log)`}),(0,H.jsx)(s,{onClick:r,children:`Set Value (Set value in args)`})]})},args:{value:{bookId:5,bookName:`Wikipedia`,price:1e5}}},Z={render:e=>{let t=(0,V.useRef)(null),n=()=>{console.log(t.current?.getFormValues())},r=()=>{t.current?.setFormValues(e.value)},[i,a]=(0,V.useState)(10),o=N({formRef:t}),{value:c}=N({formRef:t,name:`bookName`});return(0,V.useEffect)(()=>{console.log(`already set value`,o)},[o]),(0,H.jsxs)(O,{name:`myForm`,ref:t,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,H.jsx)(`p`,{children:`click on set value and see logs for full form values`}),(0,H.jsx)(d,{name:`bookName`,label:`book name`}),(0,H.jsx)(p,{name:`price`,label:`price`}),(0,H.jsxs)(`p`,{children:[`Hidden Value (bookId) is `,i]}),(0,H.jsx)(D,{name:`bookId`,value:i,onChange:e=>a(e)}),(0,H.jsx)(s,{onClick:n,children:`Get Value (See Console log)`}),(0,H.jsx)(s,{onClick:r,children:`Set Value (Set value in args)`}),(0,H.jsxs)(`p`,{children:[`the book name we set: `,(0,H.jsx)(`b`,{children:c})]})]})},args:{value:{bookId:5,bookName:`Wikipedia`,price:1e5}}},Q={render:e=>{let t=(0,V.useRef)(null);return(0,H.jsxs)(O,{name:`myForm`,ref:t,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,H.jsx)(`p`,{children:`first muli form element directly in form`}),(0,H.jsx)(d,{name:`phoneNumber`,label:`phone number 1`}),(0,H.jsx)(d,{name:`phoneNumber`,label:`phone number 2`}),(0,H.jsx)(d,{name:`phoneNumber`,label:`phone number 3`}),(0,H.jsx)(`hr`,{}),(0,H.jsx)(R,{}),(0,H.jsx)(`hr`,{}),(0,H.jsx)(R,{}),(0,H.jsx)(`hr`,{}),(0,H.jsx)(`p`,{children:`Form With Id "myBookForm"`}),(0,H.jsx)(R,{id:`myBookForm`}),(0,H.jsx)(s,{onClick:()=>{console.log(t.current?.getFormValues())},children:`Get Value (log it into console)`}),(0,H.jsx)(s,{onClick:()=>{t.current?.setFormValues(e.value)},children:`Set Value (Set value in args)`})]})},args:{value:{phoneNumber:new x([[1,`09125588745`],[2,`0919074020`],[3,`09145898742`]]),books:new x([[1,{bookId:1,bookTitle:`Planets`,price:1e5}],[2,{bookId:2,bookTitle:`Animals`,price:2e4}],[`myBookForm`,{bookId:3,bookTitle:`Set With Id`,price:5e6}]])}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    name: "testForm"
  }
}`,...W.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  // biome-ignore lint/suspicious/noExplicitAny: <here we have different args than component args>
  render: (args: any) => {
    const ref = useRef<JBFormWebComponent>(null);
    const getValue = () => {
      console.log(ref.current?.getFormValues());
    };
    const setValue = () => {
      ref.current?.setFormValues(args.value);
    };
    const [bookId, setBookId] = useState<number | null>(10);
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  // biome-ignore lint/suspicious/noExplicitAny: <here we have different args than component args>
  render: (args: any) => {
    const ref = useRef<JBFormWebComponent>(null);
    const getValue = () => {
      console.log(ref.current?.getFormValues());
    };
    const setValue = () => {
      ref.current?.setFormValues(args.value);
    };
    const [bookId, setBookId] = useState<number | null>(10);
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Normal`,`FormTest`,`FormTreeTest`,`SpotInvalidElementTest`,`FormWithSameName`,`FormValue`,`UseJBFormValue`,`ArrayValue`]}));ge();export{Q as ArrayValue,K as FormTest,q as FormTreeTest,X as FormValue,Y as FormWithSameName,W as Normal,J as SpotInvalidElementTest,Z as UseJBFormValue,$ as __namedExportsOrder,U as default,ge as n,he as t};