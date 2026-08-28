import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-DjftpzXQ.js";import{g as a,p as o,r as s,t as c}from"./jb-core-DiFOdNJT.js";import{r as l,t as u}from"./react-BS7xZHFX.js";import{n as ee,t as te}from"./jb-validation-BBE6zJrt.js";import{r as d,t as f}from"./react-DRSs7olX.js";import{r as p,t as m}from"./react-d34iOHI5.js";import{n as ne,t as re}from"./main-ByjxDLhA.js";import{r as ie,t as ae}from"./react-BC9zi8c3.js";import{r as oe,t as se}from"./react-CA8qdWPL.js";import{r as ce,t as le}from"./react-B_mJxSza.js";import{r as ue,t as de}from"./react--4d8JCPW.js";import{n as fe,t as pe}from"./react-C33uSJ-s.js";function me(e){let t=[];for(let n of e.elements.entries())n[1].isAllValid||t.push(n[0]);for(let n of e.virtualElements.entries())n[1].isAllValid||n[0].dom&&t.push(n[0].dom);for(let n of e.subForms.entries())n[1].isAllValid||t.push(...me(n[1]));return t}function h(e,t,n,r){if(!t.name)return;if(!(e[t.name]instanceof b)){let n=r[t.name]??0;e[t.name]=new b().set(n,e[t.name])}let i=e[t.name],a=t.id?t.id:i.size;i.set(a,n)}function g(e,t,n){let r=t.filter((e=>e.name==n.name));r.forEach(((t,n)=>{t.id&&e.has(t.id)&&(t.value=e.get(t.id),_(t),e.delete(t.id),r.splice(n,1))}));let i=Array.from(e.values());r.forEach((e=>{e.value=i.shift(),_(e)}))}function _(e){if(e instanceof HTMLElement){let t=new Event(`form-change`,{bubbles:!0,composed:!0,cancelable:!1});e.dispatchEvent(t)}}var v,y,b,he,ge,_e,ve,ye=t((()=>{c(),te(),v=class{#e;get value(){return this.getValue?.()}set Value(e){this.setValue?.(e)}constructor(e){this.#e={onChange:()=>{}},this.dispatchOnChange=()=>{this.#e.onChange()},this.name=e.name,this.validation=e.validation,this.dom=e.dom,this.getDirtyStatus=e.getDirtyStatus,this.getValue=e.getValue,this.setInitialValue=e.setInitialValue,this.setValue=e.setValue,this.reset=e.reset}attachCallbacks(e){this.#e=e}},y=Symbol(`ValueCollectionSymbol`),b=class extends Map{constructor(...e){super(...e),this[y]=!0}},he=class{#e;#t;#n;constructor(e){this.#e=[],this.#t={},this.add=e=>{let t=new v(e);return t.attachCallbacks({onChange:()=>this.#n.handleStateChanges(t)}),this.#e.push(t),this.#t[t.name]=t,t},this.remove=({virtualElement:e})=>{let t=this.#e.findIndex((t=>t==e));t!==-1&&this.#e.splice(t,1)},this.#n=e}get list(){return[...this.#e]}get dictionary(){return this.#t}setValues(e){let t=this.#e.filter((t=>t.name&&Object.getOwnPropertyNames(e).includes(t.name)));for(let n of t)e[n.name]!==void 0&&typeof n.setValue==`function`&&(e[n.name]instanceof b&&e[n.name]?g(new Map(e[n.name]),t,n):n.setValue(e[n.name]))}setInitialValues(e){for(let t of this.#e)t.name&&e[t.name]!==void 0&&typeof t.setInitialValue==`function`&&t.setInitialValue(e[t.name])}reset(){for(let e of this.#e)e.reset?.(),e.validation?.reset()}traverse(e){let t={},n={};for(let r of this.#e)if(r.name){let i=e(r);t[r.name]===void 0?(t[r.name]=i,n[r.name]=r.id??``):h(t,r,i,n)}return t}},ge=class{#e=[];#t={};get list(){return[...this.#e]}get dictionary(){return Object.freeze({...this.#t})}setValues(e){let t=this.#e.filter((t=>t.name&&Object.getOwnPropertyNames(e).includes(t.name)));for(let n of t)n.name&&e[n.name]!==void 0&&(e[n.name]instanceof b?g(new b(e[n.name]),t,n):n.setFormValues(e[n.name],!1))}setInitialValues(e){for(let t of this.#e)t.name&&e[t.name]!==void 0&&t.setFormInitialValues(e[t.name],!1)}reset(){for(let e of this.#e)e.reset()}traverse(e){let t={},n={};for(let r of this.#e)if(r.name){let i=e(r);t[r.name]===void 0?(t[r.name]=i,n[r.name]=r.id):h(t,r,i,n)}return t}#n=(e,t)=>{e.forEach((e=>{e.type==`attributes`&&e.attributeName==`name`&&(e.oldValue&&this.#i(e.oldValue,e.target),this.#r(e.target.name,e.target))}))};add(e){if(this.#e.includes(e))return;this.#e.push(e),e.name&&this.#r(e.name,e);let t=new MutationObserver(this.#n);t.observe(e,{attributes:!0,attributeFilter:[`name`],attributeOldValue:!0,subtree:!1,childList:!1}),e.addEventListener(`disconnect`,(()=>{this.remove(e),t.disconnect}),{once:!0,passive:!0})}remove(e){let t=this.#e.findIndex((t=>t==e));t!==-1&&this.#e.splice(t,1),this.#i(e.name,e)}#r(e,t){this.#t[e]?this.#t[e]=[this.#t[e],t].flat(1):this.#t[e]=t}#i(e,t){if(Array.isArray(this.#t[e])){let n=this.#t[e].findIndex((e=>e==t));n!==-1&&this.#t[e].splice(n,1)}else delete this.#t[e]}},_e=class{#e;get allElements(){return[...Array.from(this.customElements.keys()),...Array.from(this.nativeElements.keys())]}reset(){for(let e of this.customElements.keys())e.localName!==`jb-form`&&e.formResetCallback?.();for(let e of this.nativeElements.keys())this.#s(e)}constructor(e){this.observer=new MutationObserver(this.#r.bind(this)),this.customElements=new Map,this.nativeElements=new Map,this.form=document.createElement(`form`),this.form.setAttribute(`id`,a(`form`)),this.#e=e}initElements(){this.#t(),this.#n()}#t(){let e=this.#e.querySelectorAll(`*`);for(let t of e)this.#a(t)}#n(){this.observer.observe(this.#e,{subtree:!0,childList:!0,attributes:!1,characterData:!1})}#r(e,t){e.forEach((e=>{e.addedNodes.forEach((e=>{e instanceof HTMLElement&&(this.#a(e),e.querySelectorAll(`*`).forEach((e=>{this.#a(e)})))})),e.removedNodes.forEach((e=>{e instanceof HTMLElement&&(this.#i(e),e.querySelectorAll(`*`).forEach((e=>{this.#i(e)})))}))}))}#i(e){this.nativeElements.has(e)&&(this.nativeElements.delete(e),e.getAttribute(`form`)===this.form.id&&e.removeAttribute(`form`)),this.customElements.has(e)&&(this.customElements.delete(e),e.getAttribute(`form`)===this.form.id&&e.removeAttribute(`form`))}#a(e){e instanceof HTMLElement&&(this.#o(e)&&!this.nativeElements.has(e)&&this.#u(e)?(this.nativeElements.set(e,null),e.setAttribute(`form`,this.form.id)):this.#l(e)&&!this.customElements.has(e)&&this.#u(e)?(this.customElements.set(e,null),e.setAttribute(`form`,this.form.id)):this.#c(e))}#o(e){return e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||e instanceof HTMLFieldSetElement||e instanceof HTMLOutputElement||e instanceof HTMLObjectElement}#s(e){if(e instanceof HTMLInputElement)e.type===`checkbox`||e.type===`radio`?e.checked=e.defaultChecked:e.type===`file`?e.value=``:e.value=e.defaultValue;else if(e instanceof HTMLSelectElement)for(let t of e.options)t.selected=t.defaultSelected;else(e instanceof HTMLTextAreaElement||e instanceof HTMLOutputElement)&&(e.value=e.defaultValue)}#c(e){e.localName.includes(`-`)&&!e.matches(`:defined`)&&customElements.whenDefined(e.localName).then((t=>{t.formAssociated&&this.#a(e)}))}#l(e){return e.dataset?.formControl!==void 0||!0===e.constructor?.formAssociated||typeof e.formAssociatedCallback==`function`}#u(e){return e.parentElement?.closest(`jb-form`)==this.#e}},ve=class e extends s{static get formAssociated(){return!0}#e;#t;#n;#r;get validElements(){return Array.from(this.#n.allElements).filter((e=>e.isConnected))}get validation(){return this.#i}#i;get isDirty(){let e=this.getFormDirtyStatus();return Object.values(e).includes(!0)}get value(){return this.getFormValues()}set value(e){this.setFormValues(e)}get name(){return this.getAttribute(`name`)||``}set name(e){e?this.setAttribute(`name`,e):this.removeAttribute(`name`)}get virtualElements(){return{list:this.#e.list,dictionary:this.#e.dictionary,add:this.#e.add,remove:this.#e.remove}}get subForms(){return{list:this.#t.list,dictionary:this.#t.dictionary}}get formElements(){return this.#n}constructor(){super(),this.#e=new he({handleStateChanges:this.#p.bind(this)}),this.#t=new ge,this.#n=new _e(this),this.callbacks={showValidationError:e=>{},cleanValidationError:()=>{},setValidationResult:()=>{}},this.#i=new ee({showValidationError:this.callbacks.showValidationError.bind(this),clearValidationError:this.callbacks.cleanValidationError.bind(this),getValue:this.getFormValues.bind(this),getValidations:this.#s.bind(this),getValueString:e=>JSON.stringify(e),setValidationResult:this.callbacks.setValidationResult}),this.#d=!1,this.#f=this.checkValidity(),typeof this.attachInternals==`function`&&(this.#r=this.attachInternals(),this.#r.role=`form`),this.initWebComponent()}initWebComponent(){this.#a(),this.#h()}connectedCallback(){this.#n.initElements(),this.#g()}static get observedAttributes(){return[]}attributeChangedCallback(e,t,n){this.#v(e,n)}#a(){this.addEventListener(`submit`,(e=>this.#o(e)),{passive:!1}),this.addEventListener(`change`,(e=>{let t=e.target;this.#p(t)}),{passive:!0})}#o(e){e.isTrusted&&(e.stopPropagation(),e.preventDefault(),this.reportValidity()&&this.#c(e))}#s(){return[{validator:()=>{for(let e of this.validElements){let t=e;if(typeof t.checkValidity==`function`&&t.checkValidity()==0)return t.validationMessage!=``&&t.validationMessage}return!0},message:`form element is invalid`},{validator:()=>{let e=this.#e.list.find((e=>typeof e.validation?.checkValidity==`function`&&!e.validation.checkValiditySync({showError:!1})));return e==null||e.validation===void 0||(e.validation.resultSummary,!1)},message:`virtual element is invalid`},{validator:()=>{let e=this.#t.list.find((e=>!e.validation.checkValiditySync({showError:!1})));return e==null||(e.validation.resultSummary,!1)},message:`form element is invalid`}]}checkValidity(){return this.#i.checkValiditySync({showError:!1}).isAllValid}reportValidity(){let e=!0;for(let t of this.validElements){let n=t;typeof n.reportValidity==`function`&&(e=n.reportValidity()&&e)}let t=this.#e.list.reduce(((e,t)=>(typeof t.validation?.checkValidity!=`function`||t.validation.checkValiditySync({showError:!0}))&&e),!0),n=this.#t.list.reduce(((e,t)=>t.reportValidity()&&e),!0),r=e&&t&&n;return this.#r&&(this.#r.ariaInvalid=r?`false`:`true`),r}#c(e){let t=new SubmitEvent(`submit`,{...e});this.dispatchEvent(t)}async jbCheckValidity(e){let t={isAllValid:!0,elements:new Map,virtualElements:new Map,subForms:new Map};for(let n of this.validElements){let r=n;if(typeof r.validation?.checkValidity==`function`){let n=await r.validation.checkValidity({showError:e.showError});t.isAllValid=n.isAllValid&&t.isAllValid,t.elements.set(r,n)}}for(let n of this.#e.list)if(typeof n.validation?.checkValidity==`function`){let r=await n.validation.checkValidity({showError:e.showError});t.isAllValid=r.isAllValid&&t.isAllValid,t.virtualElements.set(n,r)}for(let n of this.#t.list){let r=await n.jbCheckValidity(e);t.isAllValid=r.isAllValid&&t.isAllValid,t.subForms.set(n,r)}return t}getValidationMessages(){return this.#u((e=>e.validationMessage??null),(e=>e.validation?.resultSummary?.message??null),(e=>e.validation.resultSummary?.message??null))}getValidationSummary(){return this.#u((e=>e.validation?.resultSummary??null),(e=>e.validation?.resultSummary??null),(e=>e.validation.resultSummary??null))}getValidationResult(){return this.#u((e=>e.validation?.result??null),(e=>e.validation?.result??null),(e=>e.validation.result))}getFormValues(){return this.#u((e=>e.value),(e=>typeof e.getValue==`function`?e.getValue():null),(e=>e.getFormValues()))}getFormDirtyStatus(){return this.#u((e=>e.isDirty),(e=>typeof e.getDirtyStatus==`function`&&e.getDirtyStatus()),(e=>e.isDirty))}setFormValues(t,n=!0){let r=this.validElements.filter((e=>e.name&&Object.getOwnPropertyNames(t).includes(e.name)));for(let n of r)n.name!==void 0&&(t[n.name]===void 0||n instanceof e||(t[n.name]instanceof b?g(new b(t[n.name]),r,n):(n.value=t[n.name],_(n))));this.#e.setValues(t),this.#t.setValues(t),n&&this.setFormInitialValues(t,!1)}setFormInitialValues(e,t=!0){for(let t of this.validElements){let n=t;n.name&&e[n.name]!==void 0&&(n.initialValue=e[n.name])}this.#e.setInitialValues(e),this.#t.setInitialValues(e),t&&this.setFormValues(e,!1)}reset(){let e=this.isDirty;this.#n.reset(),this.#e.reset(),this.#t.reset(),this.#i.reset();let t=this.isDirty;e!==t&&this.#m(t),this.#d=t}formResetCallback(){this.reset()}#l(e){let t={},n={};for(let r of this.validElements){let i=e(r);r.name&&(t[r.name]===void 0?(t[r.name]=i,n[r.name]=r.id??``):h(t,r,i,n))}return t}#u(e,t,n){return{...this.#l(e),...this.#e.traverse(t),...this.#t.traverse(n)}}#d;#f;#p(e){let t=()=>{let e=this.isDirty;e!==this.#d&&(this.#m(e),this.#d=e)},n=()=>{let e=this.checkValidity();if(e!==this.#f){let t=new CustomEvent(`validity-change`,{bubbles:!1,cancelable:!1,composed:!0,detail:{isValid:e}});this.dispatchEvent(t),this.#f=e}};if(e instanceof v)return this.#_(),t(),void n();e.isDirty!==void 0&&t(),typeof e.checkValidity==`function`&&n()}#m(e){let t=new CustomEvent(`dirty-change`,{bubbles:!1,cancelable:!1,composed:!0,detail:{isDirty:e}});this.dispatchEvent(t)}#h(){new MutationObserver(((t,n)=>{t.forEach((t=>{if(t.target instanceof e){let n=[];t.addedNodes.forEach((t=>{if(t.nodeType==Node.ELEMENT_NODE){let r=t;r.nodeName==`FORM`&&t.isConnected&&r instanceof e?n.push(r):r.querySelectorAll(`jb-form`).forEach((e=>{e.parentElement?.closest(`jb-form`)==this&&n.push(e)}))}})),n.forEach((e=>{this.#t.add(e)}))}}))})).observe(this,{subtree:!0,childList:!0})}#g(){let e=new CustomEvent(`init`,{bubbles:!1,composed:!1,cancelable:!1});this.dispatchEvent(e)}#_(){let e=new Event(`change`,{bubbles:!0,cancelable:!1,composed:!0});this.dispatchEvent(e)}#v(e,t){}disconnectedCallback(){let e=new CustomEvent(`disconnect`,{bubbles:!1,composed:!1,cancelable:!1});this.dispatchEvent(e)}},o(`jb-form`,ve)})),be=t((()=>{ye()}));function x(e,t,n,r=!1){let i=(0,w.useCallback)((t=>{e.current&&typeof n==`function`&&n(t)}),[e,n]);(0,w.useEffect)((()=>{let n=e.current;return n&&n.addEventListener(t,i,{passive:r,capture:!1}),function(){n&&n.removeEventListener(t,i,{passive:r,capture:!1})}}),[e,t,n,r])}function S({value:e,name:t,onChange:n,children:r}){let i=(0,w.useRef)(null),[a,o]=(0,w.useState)(null),s=E();return(0,w.useEffect)((()=>{let e=null;return s?.virtualElements&&t&&(e=s.virtualElements.add({name:t,getValue:()=>i.current,setValue:e=>{i.current=e,n?.(e)}})),()=>{e&&s?.virtualElements.remove({virtualElement:e})}}),[s,t,n]),(0,w.useEffect)((()=>{i.current=e??null}),[e]),(0,w.useEffect)((()=>{o(i.current)}),[i.current]),typeof r==`function`?r(a):w.createElement(w.Fragment,null)}function C(e){let t=w.useRef(null),{ref:n,onSubmit:r,onValidityChange:i,onDirtyChange:a,onInit:o,onLoad:s,onChange:c,children:l,...u}=e,[ee,te]=(0,w.useState)(0);return(0,w.useImperativeHandle)(n,(()=>t.current??void 0),[t]),(0,w.useEffect)((()=>{te((e=>e+1))}),[t.current]),function(e,t){x(e,`load`,t.onLoad,!0),x(e,`init`,t.onInit,!0),x(e,`validity-change`,t.onValidityChange),x(e,`dirty-change`,t.onDirtyChange),x(e,`change`,t.onChange),x(e,`submit`,t.onSubmit)}(t,{onSubmit:r,onValidityChange:i,onDirtyChange:a,onInit:o,onLoad:s,onChange:c}),w.createElement(`jb-form`,{ref:t,...u},w.createElement(xe,{value:t.current},l))}var w,T,xe,E,D,Se=t((()=>{w=n(r(),1),be(),T=(0,w.createContext)(null),xe=T.Provider,E=()=>(0,w.useContext)(T),D=e=>{let[t,n]=(0,w.useState)(null),r=e.events??[`change`,`form-change`];return(0,w.useEffect)((()=>{let t=e.formRef?.current,i=new AbortController;return t&&r.forEach((r=>{t.addEventListener(r,(r=>{e.name?e.name==r.target.name&&n(r.target.value):n(t.value)}),{signal:i.signal,passive:!0})})),()=>{i.abort()}}),[e.name,r,e.formRef]),{value:t}},C.displayName=`JBForm`})),O=t((()=>{Se()}));function k(){return(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,N.jsx)(d,{name:`name`,required:!0,label:`name`}),(0,N.jsx)(ne,{name:`birthDate`,required:!0,label:`birthdate`,format:`YYYY-MM-DD`}),(0,N.jsx)(ne,{name:`applyDate`,required:!0,label:`apply date`}),(0,N.jsx)(oe,{name:`gender`,label:`gender`,required:!0,children:(0,N.jsx)(ue,{optionList:P})}),(0,N.jsx)(ce,{name:`avatar`,label:`avatar`,required:!0,maxFileSize:500*1024}),(0,N.jsx)(fe,{label:`description`,name:`description`,required:!0})]})}function A(){return(0,N.jsxs)(`div`,{children:[(0,N.jsx)(d,{name:`bankName`,required:!0,label:`bank name`}),(0,N.jsx)(ie,{name:`cardNumber`,label:`card number`})]})}function j(){return(0,N.jsxs)(`div`,{children:[(0,N.jsx)(d,{name:`productName`,required:!0,label:`product name`}),(0,N.jsx)(p,{name:`price`,label:`price`,step:1e3,showControlButton:!0})]})}function M({id:e}){return(0,N.jsxs)(C,{name:`books`,id:e,children:[(0,N.jsx)(S,{name:`bookId`}),(0,N.jsx)(d,{name:`bookTitle`,required:!0,label:`bookTitle`}),(0,N.jsx)(p,{name:`price`,label:`price`,step:1e3,showControlButton:!0})]})}var N,P,Ce=t((()=>{r(),re(),f(),se(),de(),pe(),ae(),le(),m(),O(),N=i(),P=[`male`,`female`];try{M.displayName=`BookForm`,M.__docgenInfo={description:``,displayName:`BookForm`,filePath:`/home/runner/work/design-system/design-system/modules/jb-form/stories/samples/TestForms.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`design-system/modules/jb-form/stories/samples/TestForms.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),we=e({ArrayValue:()=>Z,FormTest:()=>G,FormTreeTest:()=>K,FormValue:()=>Y,FormWithSameName:()=>J,ImperativeMethods:()=>H,Normal:()=>V,Reset:()=>W,SpotInvalidElementTest:()=>q,UseJBForm:()=>U,UseJBFormValue:()=>X,__namedExportsOrder:()=>Q,default:()=>B});function Te(){let e=E(),[t,n]=(0,F.useState)(``);return(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`button`,{type:`button`,onClick:()=>n(String(e?.getFormValues().title??``)),children:`Read form context`}),(0,I.jsx)(`output`,{"data-testid":`context-value`,children:t})]})}var F,I,L,R,Ee,z,B,V,H,U,W,De,G,K,q,J,Y,X,Z,Q,$=t((()=>{F=n(r(),1),u(),be(),O(),Ce(),f(),m(),I=i(),{expect:L,fn:R,userEvent:Ee,waitFor:z}=__STORYBOOK_MODULE_TEST__,B={title:`Components/form elements/JBForm`,component:C},V={args:{name:`testForm`}},H={render:()=>(0,I.jsxs)(C,{ref:(0,F.useRef)(null),style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,I.jsx)(d,{name:`title`,value:`Initial title`,initialValue:`Initial title`}),(0,I.jsx)(d,{name:`requiredField`,required:!0,value:``,initialValue:``})]}),play:async({canvasElement:e})=>{let t=e.querySelector(`jb-form`),n=t?.querySelector(`jb-input[name="title"]`);L(t).toBeTruthy(),await z(()=>L(t?.validElements.length).toBeGreaterThanOrEqual(2)),L(t?.getFormValues().title).toBe(`Initial title`),L(t?.checkValidity()).toBe(!1),L(t?.reportValidity()).toBe(!1),t.setFormValues({title:`Changed title`,requiredField:`Complete`},!1),await z(()=>{L(n?.value).toBe(`Changed title`),L(t?.getFormValues().requiredField).toBe(`Complete`),L(t?.isDirty).toBe(!0),L(t?.checkValidity()).toBe(!0)}),t.setFormInitialValues({title:`Baseline title`,requiredField:`Baseline field`}),t.setFormValues({title:`Temporary title`},!1),L(t?.getFormValues().title).toBe(`Temporary title`),t.reset(),await z(()=>{L(t?.getFormValues().title).toBe(`Baseline title`),L(t?.getFormValues().requiredField).toBe(`Baseline field`),L(t?.isDirty).toBe(!1)})}},U={render:()=>(0,I.jsxs)(C,{children:[(0,I.jsx)(d,{name:`title`,value:`Context title`}),(0,I.jsx)(Te,{})]}),play:async({canvasElement:e})=>{await Ee.click(e.querySelector(`button`)),await z(()=>{L(e.querySelector(`[data-testid="context-value"]`)?.textContent).toBe(`Context title`)})}},W={render:()=>{let e=(0,F.useRef)(null);return(0,I.jsxs)(C,{ref:e,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,I.jsx)(d,{label:`title`,name:`title`,value:`initial title`,initialValue:`initial title`}),(0,I.jsx)(d,{label:`Required Field`,name:`requiredField`,value:``,initialValue:``,required:!0}),(0,I.jsx)(`input`,{name:`nativeField`,defaultValue:`native initial`}),(0,I.jsxs)(C,{name:`nested`,style:{display:`flex`,flexDirection:`row`,gap:`1rem`},children:[(0,I.jsx)(d,{label:`Nested Title`,name:`nestedTitle`,value:`nested initial`,initialValue:`nested initial`,message:`this input is in nested jb-form element`}),(0,I.jsx)(d,{label:`Nested Age`,name:`nestedAge`,value:`nested age`,initialValue:`nested age`})]}),(0,I.jsx)(l,{onClick:()=>e.current?.reset(),children:`Reset form`})]})},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-form`),n=t.querySelector(`jb-input[name="title"]`),r=t.querySelector(`jb-input[name="requiredField"]`),i=t.querySelector(`input[name="nativeField"]`),a=t.querySelector(`jb-form jb-input[name="nestedTitle"]`),o=R(),s=`virtual initial`,c=R(()=>{s=`virtual initial`});t.addEventListener(`dirty-change`,o),await z(()=>L(t.validElements.length).toBeGreaterThanOrEqual(3));let l=t.virtualElements.add({name:`virtualField`,getValue:()=>s,getDirtyStatus:()=>s!==`virtual initial`,reset:c});n.value=`changed title`,i.value=`changed native`,a.value=`changed nested`,s=`changed virtual`,l.dispatchOnChange(),r.reportValidity(),L(r.validation.result).not.toBeNull(),t.reset(),await z(()=>{L(n.value).toBe(`initial title`),L(i.value).toBe(`native initial`),L(a.value).toBe(`nested initial`),L(s).toBe(`virtual initial`),L(c).toHaveBeenCalledOnce(),L(r.validation.result).toBeNull(),L(r.hasState(`invalid`)).toBe(!1),L(t.isDirty).toBe(!1),L(o).toHaveBeenCalledWith(L.objectContaining({detail:{isDirty:!1}}))})}},De={name:`ali`,birthDate:`2024-10-26`,applyDate:new Date().toISOString(),gender:`male`,description:`i'm ali`,avatar:`https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png`},G={render:e=>{let t=(0,F.useRef)(null),[n,r]=(0,F.useState)(!1),[i,a]=(0,F.useState)(!0),o=()=>{alert(`submit`)},s=e=>{r(e.detail.isDirty)},c=e=>{a(e.detail.isValid)};return(0,F.useEffect)(()=>{t.current&&a(t.current.checkValidity())},[t]),(0,I.jsxs)(C,{ref:t,...e,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},onSubmit:o,onDirtyChange:s,onValidityChange:c,children:[(0,I.jsx)(k,{}),(0,I.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`},children:[(0,I.jsx)(l,{disabled:!n,type:`submit`,children:`submit`}),(0,I.jsxs)(l,{onClick:()=>alert(t.current?.checkValidity()),children:[`check validity(`,i?`valid`:`invalid`,`)`]}),(0,I.jsx)(l,{onClick:()=>alert(t.current?.reportValidity()),children:`report validity`}),(0,I.jsx)(l,{onClick:()=>console.debug(t.current?.getValidationMessages()),children:`getValidationMessages`}),(0,I.jsx)(l,{onClick:()=>console.debug(t.current?.getValidationSummary()),children:`getValidationSummary`}),(0,I.jsx)(l,{onClick:()=>console.debug(t.current?.getValidationResult()),children:`getValidationResult`}),(0,I.jsx)(l,{onClick:()=>console.debug(t.current?.getFormValues()),children:`getFormValues`}),(0,I.jsx)(l,{onClick:()=>console.debug(t.current?.setFormValues(De,!0)),children:`setFormDefaultValue`}),(0,I.jsx)(l,{onClick:()=>console.debug(t.current?.getFormDirtyStatus()),children:`getFormDirtyStatus`})]})]})},args:{name:`test-form`}},K={render:e=>{let t=(0,F.useRef)(null),[n,r]=(0,F.useState)(!1),[i,a]=(0,F.useState)(!0),o=(0,F.useCallback)(()=>{alert(`submit`)},[]),s=(0,F.useCallback)(e=>{r(e.detail.isDirty)},[]),c=(0,F.useCallback)(e=>{a(e.detail.isValid)},[]);(0,F.useEffect)(()=>{t.current&&(a(t.current.checkValidity()),t.current.addEventListener(`submit`,o),t.current.addEventListener(`dirty-change`,s),t.current.addEventListener(`validity-change`,c))},[t.current,c,s,o]);let[u,ee]=(0,F.useState)(!0);return(0,I.jsxs)(`jb-form`,{ref:t,...e,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[u&&(0,I.jsx)(`jb-form`,{name:`personForm`,children:(0,I.jsx)(k,{})}),(0,I.jsxs)(l,{onClick:()=>ee(e=>!e),children:[u?`Hide`:`Show`,` Person Form`]}),(0,I.jsx)(`hr`,{}),(0,I.jsx)(`jb-form`,{name:`bank-form`,children:(0,I.jsx)(A,{})}),(0,I.jsxs)(`div`,{children:[`isDirty:`,n?`dirty`:`clean`]}),(0,I.jsxs)(`div`,{children:[`isValid:`,i?`valid`:`invalid`]})]})},args:{name:`parent-form`}},q={render:e=>{let t=(0,F.useRef)(null),n=async()=>{me(await t.current.jbCheckValidity({showError:!0})).forEach(e=>{e.animate([{transform:`rotate(0deg)`,display:`block`},{transform:`rotate(2deg)`,display:`block`},{transform:`rotate(-2deg)`,display:`block`},{transform:`rotate(0deg)`,display:`block`}],{duration:100,iterations:10,fill:`auto`})})};return(0,I.jsxs)(C,{ref:t,...e,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,I.jsx)(C,{name:`personForm`,children:(0,I.jsx)(k,{})}),(0,I.jsx)(`hr`,{}),(0,I.jsx)(C,{name:`bank-form`,children:(0,I.jsx)(A,{})}),(0,I.jsx)(l,{onClick:n,children:`shake invalids`})]})},args:{name:`parent-form`}},J={render:()=>{let e=(0,F.useRef)(null);return(0,I.jsxs)(C,{ref:e,name:`masterForm`,children:[(0,I.jsx)(`p`,{children:`see browser console for result`}),(0,I.jsx)(A,{}),(0,I.jsx)(`p`,{children:`we have 3 exact phone number form element`}),(0,I.jsx)(d,{name:`phoneNumber`,label:`phone number 1`}),(0,I.jsx)(d,{name:`phoneNumber`,label:`phone number 2`}),(0,I.jsx)(d,{name:`phoneNumber`,label:`phone number 3`}),(0,I.jsx)(`p`,{children:"we have 3 exact form with same name of `ProductForm`"}),(0,I.jsx)(`hr`,{}),(0,I.jsx)(C,{name:`ProductForm`,children:(0,I.jsx)(j,{})}),(0,I.jsx)(`hr`,{}),(0,I.jsx)(C,{name:`ProductForm`,children:(0,I.jsx)(j,{})}),(0,I.jsx)(`hr`,{}),(0,I.jsx)(C,{name:`ProductForm`,children:(0,I.jsx)(j,{})}),(0,I.jsx)(`hr`,{}),(0,I.jsx)(C,{name:`ProductForm`,children:(0,I.jsx)(j,{})}),(0,I.jsx)(`br`,{}),(0,I.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,paddingBlock:`1rem`},children:[(0,I.jsx)(l,{onClick:()=>{let t=e.current?.getFormValues();console.log(t)},children:`Get Values`}),(0,I.jsx)(l,{onClick:()=>{e.current?.checkValidity();let t=e.current?.getValidationResult();console.log(t)},children:`Get Validations`})]})]})}},Y={render:e=>{let t=(0,F.useRef)(null),n=()=>{console.log(t.current?.getFormValues())},r=()=>{t.current?.setFormValues(e.value)},[i,a]=(0,F.useState)(10),o=D({formRef:t});return(0,F.useEffect)(()=>{console.log(`already set value`,o)},[o]),(0,I.jsxs)(C,{name:`myForm`,ref:t,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,I.jsx)(d,{name:`bookName`,label:`book name`}),(0,I.jsx)(p,{name:`price`,label:`price`}),(0,I.jsx)(S,{name:`bookId`,value:i,onChange:e=>a(e),children:e=>(0,I.jsxs)(`p`,{children:[`Hidden Value (bookId) is `,e]})}),(0,I.jsx)(l,{onClick:n,children:`Get Value (See Console log)`}),(0,I.jsx)(l,{onClick:r,children:`Set Value (Set value in args)`})]})},args:{value:{bookId:5,bookName:`Wikipedia`,price:1e5}}},X={render:e=>{let t=(0,F.useRef)(null),n=()=>{console.log(t.current?.getFormValues())},r=()=>{t.current?.setFormValues(e.value)},[i,a]=(0,F.useState)(10),o=D({formRef:t}),{value:s}=D({formRef:t,name:`bookName`});return(0,F.useEffect)(()=>{console.log(`already set value`,o)},[o]),(0,I.jsxs)(C,{name:`myForm`,ref:t,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,I.jsx)(`p`,{children:`click on set value and see logs for full form values`}),(0,I.jsx)(d,{name:`bookName`,label:`book name`}),(0,I.jsx)(p,{name:`price`,label:`price`}),(0,I.jsxs)(`p`,{children:[`Hidden Value (bookId) is `,i]}),(0,I.jsx)(S,{name:`bookId`,value:i,onChange:e=>a(e)}),(0,I.jsx)(l,{onClick:n,children:`Get Value (See Console log)`}),(0,I.jsx)(l,{onClick:r,children:`Set Value (Set value in args)`}),(0,I.jsxs)(`p`,{children:[`the book name we set: `,(0,I.jsx)(`b`,{children:s})]})]})},args:{value:{bookId:5,bookName:`Wikipedia`,price:1e5}}},Z={render:e=>{let t=(0,F.useRef)(null);return(0,I.jsxs)(C,{name:`myForm`,ref:t,style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,I.jsx)(`p`,{children:`first muli form element directly in form`}),(0,I.jsx)(d,{name:`phoneNumber`,label:`phone number 1`}),(0,I.jsx)(d,{name:`phoneNumber`,label:`phone number 2`}),(0,I.jsx)(d,{name:`phoneNumber`,label:`phone number 3`}),(0,I.jsx)(`hr`,{}),(0,I.jsx)(M,{}),(0,I.jsx)(`hr`,{}),(0,I.jsx)(M,{}),(0,I.jsx)(`hr`,{}),(0,I.jsx)(`p`,{children:`Form With Id "myBookForm"`}),(0,I.jsx)(M,{id:`myBookForm`}),(0,I.jsx)(l,{onClick:()=>{console.log(t.current?.getFormValues())},children:`Get Value (log it into console)`}),(0,I.jsx)(l,{onClick:()=>{t.current?.setFormValues(e.value)},children:`Set Value (Set value in args)`})]})},args:{value:{phoneNumber:new b([[1,`09125588745`],[2,`0919074020`],[3,`09145898742`]]),books:new b([[1,{bookId:1,bookTitle:`Planets`,price:1e5}],[2,{bookId:2,bookTitle:`Animals`,price:2e4}],[`myBookForm`,{bookId:3,bookTitle:`Set With Id`,price:5e6}]])}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    name: "testForm"
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const formRef = useRef<JBFormWebComponent>(null);
    return <JBForm ref={formRef} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <JBInput name="title" value="Initial title" initialValue="Initial title" />
        <JBInput name="requiredField" required value="" initialValue="" />
      </JBForm>;
  },
  play: async ({
    canvasElement
  }) => {
    const form = canvasElement.querySelector<JBFormWebComponent>('jb-form');
    const title = form?.querySelector<import('jb-input').JBInputWebComponent>('jb-input[name="title"]');
    expect(form).toBeTruthy();
    await waitFor(() => expect(form?.validElements.length).toBeGreaterThanOrEqual(2));
    expect(form?.getFormValues().title).toBe('Initial title');
    expect(form?.checkValidity()).toBe(false);
    expect(form?.reportValidity()).toBe(false);
    form!.setFormValues({
      title: 'Changed title',
      requiredField: 'Complete'
    }, false);
    await waitFor(() => {
      expect(title?.value).toBe('Changed title');
      expect(form?.getFormValues().requiredField).toBe('Complete');
      expect(form?.isDirty).toBe(true);
      expect(form?.checkValidity()).toBe(true);
    });
    form!.setFormInitialValues({
      title: 'Baseline title',
      requiredField: 'Baseline field'
    });
    form!.setFormValues({
      title: 'Temporary title'
    }, false);
    expect(form?.getFormValues().title).toBe('Temporary title');
    form!.reset();
    await waitFor(() => {
      expect(form?.getFormValues().title).toBe('Baseline title');
      expect(form?.getFormValues().requiredField).toBe('Baseline field');
      expect(form?.isDirty).toBe(false);
    });
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <JBForm>
      <JBInput name="title" value="Context title" />
      <FormContextReader />
    </JBForm>,
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(canvasElement.querySelector('button')!);
    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="context-value"]')?.textContent).toBe('Context title');
    });
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const formRef = useRef<JBFormWebComponent>(null);
    return <JBForm ref={formRef} style={{
      display: 'flex',
      flexDirection: "column",
      gap: '1rem'
    }}>
        <JBInput label="title" name="title" value="initial title" initialValue="initial title" />
        <JBInput label="Required Field" name="requiredField" value="" initialValue="" required />
        <input name="nativeField" defaultValue="native initial" />
        <JBForm name="nested" style={{
        display: 'flex',
        flexDirection: "row",
        gap: '1rem'
      }}>
          <JBInput label="Nested Title" name="nestedTitle" value="nested initial" initialValue="nested initial" message="this input is in nested jb-form element" />
          <JBInput label="Nested Age" name="nestedAge" value="nested age" initialValue="nested age" />
        </JBForm>
        <JBButton onClick={() => formRef.current?.reset()}>Reset form</JBButton>
      </JBForm>;
  },
  play: async ({
    canvasElement
  }) => {
    const form = canvasElement.querySelector<JBFormWebComponent>('jb-form')!;
    const title = form.querySelector<import('jb-input').JBInputWebComponent>('jb-input[name="title"]')!;
    const requiredField = form.querySelector<import('jb-input').JBInputWebComponent>('jb-input[name="requiredField"]')!;
    const nativeField = form.querySelector<HTMLInputElement>('input[name="nativeField"]')!;
    const nestedTitle = form.querySelector<import('jb-input').JBInputWebComponent>('jb-form jb-input[name="nestedTitle"]')!;
    const onDirtyChange = fn();
    let virtualValue = 'virtual initial';
    const resetVirtualValue = fn(() => {
      virtualValue = 'virtual initial';
    });
    form.addEventListener('dirty-change', onDirtyChange);
    await waitFor(() => expect(form.validElements.length).toBeGreaterThanOrEqual(3));
    const virtualElement = form.virtualElements.add({
      name: 'virtualField',
      getValue: () => virtualValue,
      getDirtyStatus: () => virtualValue !== 'virtual initial',
      reset: resetVirtualValue
    });
    title.value = 'changed title';
    nativeField.value = 'changed native';
    nestedTitle.value = 'changed nested';
    virtualValue = 'changed virtual';
    virtualElement.dispatchOnChange();
    requiredField.reportValidity();
    expect(requiredField.validation.result).not.toBeNull();
    form.reset();
    await waitFor(() => {
      expect(title.value).toBe('initial title');
      expect(nativeField.value).toBe('native initial');
      expect(nestedTitle.value).toBe('nested initial');
      expect(virtualValue).toBe('virtual initial');
      expect(resetVirtualValue).toHaveBeenCalledOnce();
      expect(requiredField.validation.result).toBeNull();
      expect(requiredField.hasState('invalid')).toBe(false);
      expect(form.isDirty).toBe(false);
      expect(onDirtyChange).toHaveBeenCalledWith(expect.objectContaining({
        detail: {
          isDirty: false
        }
      }));
    });
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Normal`,`ImperativeMethods`,`UseJBForm`,`Reset`,`FormTest`,`FormTreeTest`,`SpotInvalidElementTest`,`FormWithSameName`,`FormValue`,`UseJBFormValue`,`ArrayValue`]}));$();export{Z as ArrayValue,G as FormTest,K as FormTreeTest,Y as FormValue,J as FormWithSameName,H as ImperativeMethods,V as Normal,W as Reset,q as SpotInvalidElementTest,U as UseJBForm,X as UseJBFormValue,Q as __namedExportsOrder,B as default,$ as n,we as t};