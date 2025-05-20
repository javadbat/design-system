var ye=Object.defineProperty;var O=i=>{throw TypeError(i)};var ge=(i,t,e)=>t in i?ye(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var p=(i,t,e)=>ge(i,typeof t!="symbol"?t+"":t,e),A=(i,t,e)=>t.has(i)||O("Cannot "+e);var s=(i,t,e)=>(A(i,t,"read from private field"),e?e.call(i):t.get(i)),h=(i,t,e)=>t.has(i)?O("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),C=(i,t,e,a)=>(A(i,t,"write to private field"),a?a.call(i,e):t.set(i,e),e),d=(i,t,e)=>(A(i,t,"access private method"),e);import{R as n,r as V}from"./index-D4lIrffr.js";import{o as v}from"./JBButton-DdifJKVy.js";import{e as Ve}from"./jb-validation-BFHHOeHY.js";import{i as P}from"./JBDateInput-ET7t4neV.js";import{c as te}from"./JBInput-DevWXBJi.js";import{u as pe,a as ve}from"./index-CN854oc3.js";import{o as be}from"./JBTextarea-CVXRb-wF.js";import{s as Ee}from"./JBPaymentInput-hXKSEWBF.js";import{u as ke}from"./JBImageInput-DuZjAbg1.js";import"./jb-loading-D4Szr20-.js";import"./index-B65NTg4l.js";import"./jb-date-input-CC89M8_p.js";import"./jb-calendar-CgvkAbm6.js";import"./index-BEepDcv4.js";import"./index-D1sQn8WD.js";import"./jb-popover-CV8xNYu_.js";import"./index-BoiHgpe3.js";var F,W,ie=(W=class{constructor(i){p(this,"name");p(this,"validation");p(this,"dom");p(this,"getValue");p(this,"getDirtyStatus");p(this,"setValue");p(this,"setInitialValue");h(this,F);p(this,"dispatchOnChange",()=>{s(this,F).onChange()});this.name=i.name,this.validation=i.validation,this.dom=i.dom,this.getDirtyStatus=i.getDirtyStatus,this.getValue=i.getValue,this.setInitialValue=i.setInitialValue,this.setValue=i.setValue}attachCallbacks(i){C(this,F,i)}},F=new WeakMap,W),E,B,w,Y,De=(Y=class{constructor(i){h(this,E,[]);h(this,B,{});h(this,w);p(this,"add",i=>{const t=new ie(i);return t.attachCallbacks({onChange:()=>s(this,w).handleStateChanges(t)}),s(this,E).push(t),s(this,B)[t.name]=t,t});C(this,w,i)}get list(){return[...s(this,E)]}get dictionary(){return s(this,B)}setValues(i){for(const t of s(this,E))t.name&&i[t.name]!==void 0&&typeof t.setValue=="function"&&t.setValue(i[t.name])}setInitialValues(i){for(const t of s(this,E))t.name&&i[t.name]!==void 0&&typeof t.setInitialValue=="function"&&t.setInitialValue(i[t.name])}traverse(i){const t={};for(const e of s(this,E))e.name&&(t[e.name]=i(e));return t}},E=new WeakMap,B=new WeakMap,w=new WeakMap,Y),b,I,z,Ce=(z=class{constructor(){h(this,b,[]);h(this,I,{})}get list(){return[...s(this,b)]}get dictionary(){return Object.freeze({...s(this,I)})}setValues(i){for(const t of s(this,b))t.name&&i[t.name]!==void 0&&t.setFormValues(i[t.name],!1)}setInitialValues(i){for(const t of s(this,b))t.name&&i[t.name]!==void 0&&t.setFormInitialValues(i[t.name],!1)}traverse(i){const t={};for(const e of s(this,b))e.name&&(t[e.name]=i(e));return t}add(i){s(this,b).includes(i)||(s(this,b).push(i),i.name&&(s(this,I)[i.name]=i))}},b=new WeakMap,I=new WeakMap,z),T,q,y,g,J,o,ae,re,se,ne,le,oe,ue,k,x,R,$,ce,de,me,fe,D,Se=(D=class extends HTMLFormElement{constructor(){super();h(this,o);h(this,T,this.checkValidity);h(this,q,this.reportValidity);h(this,y,new De({handleStateChanges:d(this,o,$).bind(this)}));h(this,g,new Ce);p(this,"callbacks",{showValidationError:e=>{},cleanValidationError:()=>{},setValidationResult:()=>{}});h(this,J,new Ve({showValidationError:this.callbacks.showValidationError.bind(this),clearValidationError:this.callbacks.cleanValidationError.bind(this),getValue:this.getFormValues.bind(this),getValidations:d(this,o,se).bind(this),getValueString:e=>JSON.stringify(e),setValidationResult:this.callbacks.setValidationResult}));h(this,x,!1);h(this,R,this.checkValidity());this.initWebComponent()}get validation(){return s(this,J)}get isDirty(){const e=this.getFormDirtyStatus();return Object.values(e).includes(!0)}get value(){return this.getFormValues()}get virtualElements(){return{list:s(this,y).list,dictionary:s(this,y).dictionary,add:s(this,y).add}}get subForms(){return{list:s(this,g).list,dictionary:s(this,g).dictionary}}initWebComponent(){d(this,o,ae).call(this),this.checkValidity=d(this,o,ne),this.reportValidity=d(this,o,le),d(this,o,ce).call(this)}connectedCallback(){d(this,o,de).call(this)}static get observedAttributes(){return[]}attributeChangedCallback(e,a,l){d(this,o,fe).call(this,e,l)}async jbCheckValidity(e){var l,r;const a={isAllValid:!0,elements:new Map,virtualElements:new Map,subForms:new Map};for(const c of this.elements){const m=c;if(typeof((l=m.validation)==null?void 0:l.checkValidity)=="function"){const f=await m.validation.checkValidity({showError:e.showError});a.isAllValid=f.isAllValid&&a.isAllValid,a.elements.set(m,f)}}for(const c of s(this,y).list)if(typeof((r=c.validation)==null?void 0:r.checkValidity)=="function"){const m=await c.validation.checkValidity({showError:e.showError});a.isAllValid=m.isAllValid&&a.isAllValid,a.virtualElements.set(c,m)}for(const c of s(this,g).list){const m=await c.jbCheckValidity(e);a.isAllValid=m.isAllValid&&a.isAllValid,a.subForms.set(c,m)}return a}getValidationMessages(){return d(this,o,k).call(this,e=>e.validationMessage??null,e=>{var a,l;return((l=(a=e.validation)==null?void 0:a.resultSummary)==null?void 0:l.message)??null},e=>e.validation.resultSummary.message??null)}getValidationSummary(){return d(this,o,k).call(this,e=>{var a;return((a=e.validation)==null?void 0:a.resultSummary)??null},e=>{var a;return((a=e.validation)==null?void 0:a.resultSummary)??null},e=>e.validation.resultSummary)}getValidationResult(){return d(this,o,k).call(this,e=>{var a;return((a=e.validation)==null?void 0:a.result)??null},e=>{var a;return((a=e.validation)==null?void 0:a.result)??null},e=>e.validation.result)}getFormValues(){return d(this,o,k).call(this,e=>e.value,e=>typeof e.getValue=="function"?e.getValue():null,e=>e.getFormValues())}getFormDirtyStatus(){return d(this,o,k).call(this,e=>e.isDirty,e=>typeof e.getDirtyStatus=="function"?e.getDirtyStatus():null,e=>e.isDirty)}setFormValues(e,a=!0){for(const l of this.elements){const r=l;r.name&&e[r.name]!==void 0&&(r.value=e[r.name])}s(this,y).setValues(e),s(this,g).setValues(e),a&&this.setFormInitialValues(e,!1)}setFormInitialValues(e,a=!0){for(const l of this.elements){const r=l;r.name&&e[r.name]!==void 0&&(r.initialValue=e[r.name])}s(this,y).setInitialValues(e),s(this,g).setInitialValues(e),a&&this.setFormValues(e,!1)}},T=new WeakMap,q=new WeakMap,y=new WeakMap,g=new WeakMap,J=new WeakMap,o=new WeakSet,ae=function(){this.addEventListener("submit",e=>d(this,o,re).call(this,e),{passive:!1}),this.addEventListener("change",e=>{const a=e.target;d(this,o,$).call(this,a)},{passive:!0})},re=function(e){e.isTrusted&&(e.stopPropagation(),e.preventDefault(),this.reportValidity()&&d(this,o,oe).call(this,e))},se=function(){return[{validator:()=>{for(const e of this.elements){const a=e;if(typeof a.checkValidity=="function"&&a.checkValidity()==0)return a.validationMessage!=""&&a.validationMessage}return!0},message:"form element is invalid"},{validator:()=>{const e=s(this,y).list.find(a=>{var l;return typeof((l=a.validation)==null?void 0:l.checkValidity)=="function"&&!a.validation.checkValidity({showError:!1})});if(e==null)return!0;e.validation.resultSummary.message},message:"virtual element is invalid"},{validator:()=>{const e=s(this,g).list.find(a=>!a.checkValidity());if(e==null)return!0;e.validation.resultSummary.message},message:"form element is invalid"}]},ne=function(){return s(this,J).checkValiditySync({showError:!1}).isAllValid},le=function(){let e=!0;for(const r of this.elements){const c=r;typeof c.reportValidity=="function"&&(e=c.reportValidity()&&e)}const a=s(this,y).list.reduce((r,c)=>{var m;return(typeof((m=c.validation)==null?void 0:m.checkValidity)!="function"||c.validation.checkValiditySync({showError:!0}))&&r},!0),l=s(this,g).list.reduce((r,c)=>c.reportValidity()&&r,!0);return e&&a&&l},oe=function(e){const a=new SubmitEvent("submit",{...e});this.dispatchEvent(a)},ue=function(e){const a={};for(const l of this.elements)l.name&&(a[l.name]=e(l));return a},k=function(e,a,l){return{...d(this,o,ue).call(this,e),...s(this,y).traverse(a),...s(this,g).traverse(l)}},x=new WeakMap,R=new WeakMap,$=function(e){const a=()=>{const r=this.isDirty;if(r!==s(this,x)){const c=new CustomEvent("dirty-change",{bubbles:!1,cancelable:!1,composed:!0,detail:{isDirty:r}});this.dispatchEvent(c),C(this,x,r)}},l=()=>{const r=this.checkValidity();if(r!==s(this,R)){const c=new CustomEvent("validity-change",{bubbles:!1,cancelable:!1,composed:!0,detail:{isValid:r}});this.dispatchEvent(c),C(this,R,r)}};if(e instanceof ie)return d(this,o,me).call(this),a(),void l();e.isDirty!==void 0&&a(),typeof e.checkValidity=="function"&&l()},ce=function(){this.addEventListener("init",e=>{e.target instanceof D&&e.target!==this&&s(this,g).add(e.target)})},de=function(){const e=new CustomEvent("init",{bubbles:!0,composed:!0,cancelable:!1});this.dispatchEvent(e)},me=function(){const e=new Event("change",{bubbles:!0,cancelable:!1,composed:!0});this.dispatchEvent(e)},fe=function(e,a){},D);!customElements.get("jb-form")&&window.customElements.define("jb-form",Se,{extends:"form"});function S(i,t,e,a=!1){let l=V.useCallback(r=>{i.current&&typeof e=="function"&&e(r)},[i,e]);V.useEffect(()=>{let r=i.current;return r&&r.addEventListener(t,l,{passive:a,capture:!1}),function(){r&&r.removeEventListener(t,l,{passive:a,capture:!1})}},[i,t,e,a])}let Fe=V.createContext(null),Be=Fe.Provider,N=n.forwardRef((i,t)=>{var e;let{onSubmit:a,onValidityChange:l,onDirtyChange:r,children:c,...m}=i,f=n.useRef(null);return V.useImperativeHandle(t,()=>f.current??void 0,[f]),S(f,"load",(e={onSubmit:a,onValidityChange:l,onDirtyChange:r}).onLoad,!0),S(f,"init",e.onInit,!0),S(f,"validity-change",e.onValidityChange),S(f,"dirty-change",e.onDirtyChange),S(f,"submit",e.onSubmit),n.createElement("form",{is:"jb-form",ref:f,...m},n.createElement(Be,{value:f.current??null},c))});N.displayName="JBForm";const we=["male","female"];function he(){return n.createElement("div",null,n.createElement(te,{name:"name",required:!0,label:"نام"}),n.createElement(P,{name:"birthDate",required:!0,label:"تاریخ تولد",format:"YYYY-MM-DD"}),n.createElement(P,{name:"applyDate",required:!0,label:"apply date"}),n.createElement(pe,{name:"gender",label:"جنسیت",required:!0},n.createElement(ve,{optionList:we})),n.createElement(ke,{name:"avatar",label:"نمایه",required:!0,maxFileSize:500*1024}),n.createElement(be,{label:"توضیحات",name:"description",required:!0}))}function Ie(){return n.createElement("div",null,n.createElement(te,{name:"bankName",required:!0,label:"نام بانک"}),n.createElement(Ee,{name:"cardNumber",label:"شماره کارت"}))}const Ke={title:"Components/form elements/JBForm",component:N},L={args:{name:"testForm"}},Je={name:"ali",birthDate:"2024-10-26",applyDate:new Date().toISOString(),gender:"male",description:"i'm ali",avatar:"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"},M={render:i=>{const t=V.useRef(null),[e,a]=V.useState(!1),[l,r]=V.useState(!0),c=()=>{alert("submit")},m=u=>{a(u.detail.isDirty)},f=u=>{r(u.detail.isValid)};return V.useEffect(()=>{t.current&&r(t.current.checkValidity())},[t]),n.createElement(N,{ref:t,...i,style:{display:"flex",flexDirection:"column",gap:"1rem"},onSubmit:c,onDirtyChange:m,onValidityChange:f},n.createElement(he,null),n.createElement("div",{style:{display:"flex",gap:"1rem"}},n.createElement(v,{disabled:!e,type:"submit"},"submit"),n.createElement(v,{onClick:()=>{var u;return alert((u=t.current)==null?void 0:u.checkValidity())}},"check validity(",l?"valid":"invalid",")"),n.createElement(v,{onClick:()=>{var u;return alert((u=t.current)==null?void 0:u.reportValidity())}},"report validity"),n.createElement(v,{onClick:()=>{var u;return console.debug((u=t.current)==null?void 0:u.getValidationMessages())}},"getValidationMessages"),n.createElement(v,{onClick:()=>{var u;return console.debug((u=t.current)==null?void 0:u.getValidationSummary())}},"getValidationSummary"),n.createElement(v,{onClick:()=>{var u;return console.debug((u=t.current)==null?void 0:u.getValidationResult())}},"getValidationResult"),n.createElement(v,{onClick:()=>{var u;return console.debug((u=t.current)==null?void 0:u.getFormValues())}},"getFormValues"),n.createElement(v,{onClick:()=>{var u;return console.debug((u=t.current)==null?void 0:u.setFormValues(Je,!0))}},"setFormDefaultValue"),n.createElement(v,{onClick:()=>{var u;return console.debug((u=t.current)==null?void 0:u.getFormDirtyStatus())}},"getFormDirtyStatus")))},args:{name:"test-form"}},j={render:i=>{const t=V.useRef(null),[e,a]=V.useState(!1),[l,r]=V.useState(!0),c=()=>{alert("submit")},m=u=>{a(u.detail.isDirty)},f=u=>{r(u.detail.isValid)};return V.useEffect(()=>{t.current&&(r(t.current.checkValidity()),t.current.addEventListener("submit",c),t.current.addEventListener("dirty-change",m),t.current.addEventListener("validity-change",f))},[t]),n.createElement("form",{is:"jb-form",ref:t,...i,style:{display:"flex",flexDirection:"column",gap:"1rem"}},n.createElement("form",{is:"jb-form",name:"personForm"},n.createElement(he,null)),n.createElement("hr",null),n.createElement("form",{is:"jb-form",name:"bank-form"},n.createElement(Ie,null)),n.createElement("div",null,"isDirty:",e?"dirty":"clean"),n.createElement("div",null,"isValid:",l?"valid":"invalid"))},args:{name:"parent-form"}};var H,_,G;L.parameters={...L.parameters,docs:{...(H=L.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    name: "testForm"
  }
}`,...(G=(_=L.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var K,Q,U;M.parameters={...M.parameters,docs:{...(K=M.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef<JBFormWebComponent>(null);
    const [isDirty, setIsDirty] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const onSubmit = () => {
      alert("submit");
    };
    const onDirtyChange = e => {
      setIsDirty(e.detail.isDirty);
    };
    const onValidityChange = e => {
      setIsValid(e.detail.isValid);
    };
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
}`,...(U=(Q=M.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => {
    const ref = useRef<JBFormWebComponent>(null);
    const [isDirty, setIsDirty] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const onSubmit = () => {
      alert("submit");
    };
    const onDirtyChange = e => {
      setIsDirty(e.detail.isDirty);
    };
    const onValidityChange = e => {
      setIsValid(e.detail.isValid);
    };
    useEffect(() => {
      if (ref.current) {
        setIsValid(ref.current.checkValidity());
        ref.current.addEventListener('submit', onSubmit);
        ref.current.addEventListener('dirty-change', onDirtyChange);
        ref.current.addEventListener('validity-change', onValidityChange);
      }
    }, [ref]);
    return <form is="jb-form" ref={ref} {...args} style={{
      display: 'flex',
      flexDirection: "column",
      gap: '1rem'
    }}>
          <form is="jb-form" name="personForm">
            <PersonForm></PersonForm>
          </form>
          <hr></hr>
          <form is="jb-form" name="bank-form">
            <BankForm />
          </form>
          <div>isDirty:{isDirty ? 'dirty' : 'clean'}</div>
          <div>isValid:{isValid ? 'valid' : 'invalid'}</div>
        </form>;
  },
  args: {
    name: "parent-form"
  }
}`,...(ee=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Qe=["Normal","FormTest","FormTreeTest"];export{M as FormTest,j as FormTreeTest,L as Normal,Qe as __namedExportsOrder,Ke as default};
