var ke=Object.defineProperty;var Y=i=>{throw TypeError(i)};var Fe=(i,t,e)=>t in i?ke(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var p=(i,t,e)=>Fe(i,typeof t!="symbol"?t+"":t,e),q=(i,t,e)=>t.has(i)||Y("Cannot "+e);var l=(i,t,e)=>(q(i,t,"read from private field"),e?e.call(i):t.get(i)),f=(i,t,e)=>t.has(i)?Y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),k=(i,t,e,r)=>(q(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e),m=(i,t,e)=>(q(i,t,"access private method"),e);import{R as n,r as h}from"./index-CC6F48bw.js";import{o as V}from"./JBButton-CZrTUBN6.js";import{e as Ce}from"./jb-validation-BFHHOeHY.js";import{m as z}from"./JBDateInput-tRGzKB3O.js";import{c as le}from"./JBInput-AijtNFnw.js";import{u as De,a as Se}from"./index-DN1jcoIA.js";import{u as Be}from"./JBTextarea-ty6Niq7j.js";import{p as we}from"./JBPaymentInput-B9HnoxP2.js";import{u as Ie}from"./JBImageInput-g-8DcOQ3.js";import"./jb-loading-Bke36SbW.js";import"./index-DA-aheCX.js";import"./index-Drw24fzo.js";import"./jb-date-input-CiYSDSI5.js";import"./jb-calendar-Dzs4C0fI.js";import"./index-BsliqPsk.js";import"./index-NH_qbYOC.js";import"./index-Yv0NwGSb.js";import"./jb-popover-CxJk0iXK.js";import"./index-Byoq5CaH.js";var B,H,oe=(H=class{constructor(i){p(this,"name");p(this,"validation");p(this,"dom");p(this,"getValue");p(this,"getDirtyStatus");p(this,"setValue");p(this,"setInitialValue");f(this,B);p(this,"dispatchOnChange",()=>{l(this,B).onChange()});this.name=i.name,this.validation=i.validation,this.dom=i.dom,this.getDirtyStatus=i.getDirtyStatus,this.getValue=i.getValue,this.setInitialValue=i.setInitialValue,this.setValue=i.setValue}attachCallbacks(i){k(this,B,i)}},B=new WeakMap,H),E,w,I,_,Je=(_=class{constructor(i){f(this,E,[]);f(this,w,{});f(this,I);p(this,"add",i=>{const t=new oe(i);return t.attachCallbacks({onChange:()=>l(this,I).handleStateChanges(t)}),l(this,E).push(t),l(this,w)[t.name]=t,t});k(this,I,i)}get list(){return[...l(this,E)]}get dictionary(){return l(this,w)}setValues(i){for(const t of l(this,E))t.name&&i[t.name]!==void 0&&typeof t.setValue=="function"&&t.setValue(i[t.name])}setInitialValues(i){for(const t of l(this,E))t.name&&i[t.name]!==void 0&&typeof t.setInitialValue=="function"&&t.setInitialValue(i[t.name])}traverse(i){const t={};for(const e of l(this,E))e.name&&(t[e.name]=i(e));return t}},E=new WeakMap,w=new WeakMap,I=new WeakMap,_),v,J,G,xe=(G=class{constructor(){f(this,v,[]);f(this,J,{})}get list(){return[...l(this,v)]}get dictionary(){return Object.freeze({...l(this,J)})}setValues(i){for(const t of l(this,v))t.name&&i[t.name]!==void 0&&t.setFormValues(i[t.name],!1)}setInitialValues(i){for(const t of l(this,v))t.name&&i[t.name]!==void 0&&t.setFormInitialValues(i[t.name],!1)}traverse(i){const t={};for(const e of l(this,v))e.name&&(t[e.name]=i(e));return t}add(i){l(this,v).includes(i)||(l(this,v).push(i),i.name&&(l(this,J)[i.name]=i))}},v=new WeakMap,J=new WeakMap,G);function ue(i){const t=[];for(let e of i.elements.entries())e[1].isAllValid||t.push(e[0]);for(let e of i.virtualElements.entries())e[1].isAllValid||e[0].dom&&t.push(e[0].dom);for(let e of i.subForms.entries())e[1].isAllValid||t.push(...ue(e[1]));return t}var N,O,y,g,x,R,u,ce,me,de,fe,he,ye,ge,F,A,j,$,pe,Ve,ve,be,D,Re=(D=class extends HTMLFormElement{constructor(){super();f(this,u);f(this,N,this.checkValidity);f(this,O,this.reportValidity);f(this,y,new Je({handleStateChanges:m(this,u,$).bind(this)}));f(this,g,new xe);p(this,"callbacks",{showValidationError:e=>{},cleanValidationError:()=>{},setValidationResult:()=>{}});f(this,x);f(this,R,new Ce({showValidationError:this.callbacks.showValidationError.bind(this),clearValidationError:this.callbacks.cleanValidationError.bind(this),getValue:this.getFormValues.bind(this),getValidations:m(this,u,de).bind(this),getValueString:e=>JSON.stringify(e),setValidationResult:this.callbacks.setValidationResult}));f(this,A,!1);f(this,j,this.checkValidity());typeof this.attachInternals=="function"&&(k(this,x,this.attachInternals()),l(this,x).role="form"),this.initWebComponent()}get validation(){return l(this,R)}get isDirty(){const e=this.getFormDirtyStatus();return Object.values(e).includes(!0)}get value(){return this.getFormValues()}get virtualElements(){return{list:l(this,y).list,dictionary:l(this,y).dictionary,add:l(this,y).add}}get subForms(){return{list:l(this,g).list,dictionary:l(this,g).dictionary}}initWebComponent(){m(this,u,ce).call(this),this.checkValidity=m(this,u,fe),this.reportValidity=m(this,u,he),m(this,u,pe).call(this)}connectedCallback(){m(this,u,Ve).call(this)}static get observedAttributes(){return[]}attributeChangedCallback(e,r,o){m(this,u,be).call(this,e,o)}async jbCheckValidity(e){var o,s;const r={isAllValid:!0,elements:new Map,virtualElements:new Map,subForms:new Map};for(const c of this.elements){const d=c;if(typeof((o=d.validation)==null?void 0:o.checkValidity)=="function"){const b=await d.validation.checkValidity({showError:e.showError});r.isAllValid=b.isAllValid&&r.isAllValid,r.elements.set(d,b)}}for(const c of l(this,y).list)if(typeof((s=c.validation)==null?void 0:s.checkValidity)=="function"){const d=await c.validation.checkValidity({showError:e.showError});r.isAllValid=d.isAllValid&&r.isAllValid,r.virtualElements.set(c,d)}for(const c of l(this,g).list){const d=await c.jbCheckValidity(e);r.isAllValid=d.isAllValid&&r.isAllValid,r.subForms.set(c,d)}return r}getValidationMessages(){return m(this,u,F).call(this,e=>e.validationMessage??null,e=>{var r,o;return((o=(r=e.validation)==null?void 0:r.resultSummary)==null?void 0:o.message)??null},e=>e.validation.resultSummary.message??null)}getValidationSummary(){return m(this,u,F).call(this,e=>{var r;return((r=e.validation)==null?void 0:r.resultSummary)??null},e=>{var r;return((r=e.validation)==null?void 0:r.resultSummary)??null},e=>e.validation.resultSummary)}getValidationResult(){return m(this,u,F).call(this,e=>{var r;return((r=e.validation)==null?void 0:r.result)??null},e=>{var r;return((r=e.validation)==null?void 0:r.result)??null},e=>e.validation.result)}getFormValues(){return m(this,u,F).call(this,e=>e.value,e=>typeof e.getValue=="function"?e.getValue():null,e=>e.getFormValues())}getFormDirtyStatus(){return m(this,u,F).call(this,e=>e.isDirty,e=>typeof e.getDirtyStatus=="function"?e.getDirtyStatus():null,e=>e.isDirty)}setFormValues(e,r=!0){for(const o of this.elements){const s=o;s.name&&e[s.name]!==void 0&&(s.value=e[s.name])}l(this,y).setValues(e),l(this,g).setValues(e),r&&this.setFormInitialValues(e,!1)}setFormInitialValues(e,r=!0){for(const o of this.elements){const s=o;s.name&&e[s.name]!==void 0&&(s.initialValue=e[s.name])}l(this,y).setInitialValues(e),l(this,g).setInitialValues(e),r&&this.setFormValues(e,!1)}},N=new WeakMap,O=new WeakMap,y=new WeakMap,g=new WeakMap,x=new WeakMap,R=new WeakMap,u=new WeakSet,ce=function(){this.addEventListener("submit",e=>m(this,u,me).call(this,e),{passive:!1}),this.addEventListener("change",e=>{const r=e.target;m(this,u,$).call(this,r)},{passive:!0})},me=function(e){e.isTrusted&&(e.stopPropagation(),e.preventDefault(),this.reportValidity()&&m(this,u,ye).call(this,e))},de=function(){return[{validator:()=>{for(const e of this.elements){const r=e;if(typeof r.checkValidity=="function"&&r.checkValidity()==0)return r.validationMessage!=""&&r.validationMessage}return!0},message:"form element is invalid"},{validator:()=>{const e=l(this,y).list.find(r=>{var o;return typeof((o=r.validation)==null?void 0:o.checkValidity)=="function"&&!r.validation.checkValidity({showError:!1})});if(e==null)return!0;e.validation.resultSummary.message},message:"virtual element is invalid"},{validator:()=>{const e=l(this,g).list.find(r=>!r.checkValidity());if(e==null)return!0;e.validation.resultSummary.message},message:"form element is invalid"}]},fe=function(){return l(this,R).checkValiditySync({showError:!1}).isAllValid},he=function(){let e=!0;for(const s of this.elements){const c=s;typeof c.reportValidity=="function"&&(e=c.reportValidity()&&e)}const r=l(this,y).list.reduce((s,c)=>{var d;return(typeof((d=c.validation)==null?void 0:d.checkValidity)!="function"||c.validation.checkValiditySync({showError:!0}))&&s},!0),o=l(this,g).list.reduce((s,c)=>c.reportValidity()&&s,!0);return e&&r&&o},ye=function(e){const r=new SubmitEvent("submit",{...e});this.dispatchEvent(r)},ge=function(e){const r={};for(const o of this.elements)o.name&&(r[o.name]=e(o));return r},F=function(e,r,o){return{...m(this,u,ge).call(this,e),...l(this,y).traverse(r),...l(this,g).traverse(o)}},A=new WeakMap,j=new WeakMap,$=function(e){const r=()=>{const s=this.isDirty;if(s!==l(this,A)){const c=new CustomEvent("dirty-change",{bubbles:!1,cancelable:!1,composed:!0,detail:{isDirty:s}});this.dispatchEvent(c),k(this,A,s)}},o=()=>{const s=this.checkValidity();if(s!==l(this,j)){const c=new CustomEvent("validity-change",{bubbles:!1,cancelable:!1,composed:!0,detail:{isValid:s}});this.dispatchEvent(c),k(this,j,s)}};if(e instanceof oe)return m(this,u,ve).call(this),r(),void o();e.isDirty!==void 0&&r(),typeof e.checkValidity=="function"&&o()},pe=function(){this.addEventListener("init",e=>{e.target instanceof D&&e.target!==this&&l(this,g).add(e.target)})},Ve=function(){const e=new CustomEvent("init",{bubbles:!0,composed:!0,cancelable:!1});this.dispatchEvent(e)},ve=function(){const e=new Event("change",{bubbles:!0,cancelable:!1,composed:!0});this.dispatchEvent(e)},be=function(e,r){},D);customElements.get("jb-form")||window.customElements.define("jb-form",Re,{extends:"form"});function S(i,t,e,r=!1){let o=h.useCallback(s=>{i.current&&typeof e=="function"&&e(s)},[i,e]);h.useEffect(()=>{let s=i.current;return s&&s.addEventListener(t,o,{passive:r,capture:!1}),function(){s&&s.removeEventListener(t,o,{passive:r,capture:!1})}},[i,t,e,r])}let Ae=h.createContext(null),je=Ae.Provider,C=n.forwardRef((i,t)=>{var e;let{onSubmit:r,name:o,onValidityChange:s,onDirtyChange:c,children:d,...b}=i,a=n.useRef(null);return h.useImperativeHandle(t,()=>a.current??void 0,[a]),S(a,"load",(e={onSubmit:r,onValidityChange:s,onDirtyChange:c}).onLoad,!0),S(a,"init",e.onInit,!0),S(a,"validity-change",e.onValidityChange),S(a,"dirty-change",e.onDirtyChange),S(a,"submit",e.onSubmit),h.useEffect(()=>{a.current&&(o?a.current.setAttribute("name",o):a.current.removeAttribute("name"))},[a.current,o]),n.createElement("form",{is:"jb-form",ref:a,...b},n.createElement(je,{value:a.current??null},d))});C.displayName="JBForm";const Le=["male","female"];function W(){return n.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"}},n.createElement(le,{name:"name",required:!0,label:"نام"}),n.createElement(z,{name:"birthDate",required:!0,label:"تاریخ تولد",format:"YYYY-MM-DD"}),n.createElement(z,{name:"applyDate",required:!0,label:"apply date"}),n.createElement(De,{name:"gender",label:"جنسیت",required:!0},n.createElement(Se,{optionList:Le})),n.createElement(Ie,{name:"avatar",label:"نمایه",required:!0,maxFileSize:500*1024}),n.createElement(Be,{label:"توضیحات",name:"description",required:!0}))}function Ee(){return n.createElement("div",null,n.createElement(le,{name:"bankName",required:!0,label:"نام بانک"}),n.createElement(we,{name:"cardNumber",label:"شماره کارت"}))}const rt={title:"Components/form elements/JBForm",component:C},L={args:{name:"testForm"}},Me={name:"ali",birthDate:"2024-10-26",applyDate:new Date().toISOString(),gender:"male",description:"i'm ali",avatar:"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"},M={render:i=>{const t=h.useRef(null),[e,r]=h.useState(!1),[o,s]=h.useState(!0),c=()=>{alert("submit")},d=a=>{r(a.detail.isDirty)},b=a=>{s(a.detail.isValid)};return h.useEffect(()=>{t.current&&s(t.current.checkValidity())},[t]),n.createElement(C,{ref:t,...i,style:{display:"flex",flexDirection:"column",gap:"1rem"},onSubmit:c,onDirtyChange:d,onValidityChange:b},n.createElement(W,null),n.createElement("div",{style:{display:"flex",gap:"1rem"}},n.createElement(V,{disabled:!e,type:"submit"},"submit"),n.createElement(V,{onClick:()=>{var a;return alert((a=t.current)==null?void 0:a.checkValidity())}},"check validity(",o?"valid":"invalid",")"),n.createElement(V,{onClick:()=>{var a;return alert((a=t.current)==null?void 0:a.reportValidity())}},"report validity"),n.createElement(V,{onClick:()=>{var a;return console.debug((a=t.current)==null?void 0:a.getValidationMessages())}},"getValidationMessages"),n.createElement(V,{onClick:()=>{var a;return console.debug((a=t.current)==null?void 0:a.getValidationSummary())}},"getValidationSummary"),n.createElement(V,{onClick:()=>{var a;return console.debug((a=t.current)==null?void 0:a.getValidationResult())}},"getValidationResult"),n.createElement(V,{onClick:()=>{var a;return console.debug((a=t.current)==null?void 0:a.getFormValues())}},"getFormValues"),n.createElement(V,{onClick:()=>{var a;return console.debug((a=t.current)==null?void 0:a.setFormValues(Me,!0))}},"setFormDefaultValue"),n.createElement(V,{onClick:()=>{var a;return console.debug((a=t.current)==null?void 0:a.getFormDirtyStatus())}},"getFormDirtyStatus")))},args:{name:"test-form"}},T={render:i=>{const t=h.useRef(null),[e,r]=h.useState(!1),[o,s]=h.useState(!0),c=()=>{alert("submit")},d=a=>{r(a.detail.isDirty)},b=a=>{s(a.detail.isValid)};return h.useEffect(()=>{t.current&&(s(t.current.checkValidity()),t.current.addEventListener("submit",c),t.current.addEventListener("dirty-change",d),t.current.addEventListener("validity-change",b))},[t]),n.createElement("form",{is:"jb-form",ref:t,...i,style:{display:"flex",flexDirection:"column",gap:"1rem"}},n.createElement("form",{is:"jb-form",name:"personForm"},n.createElement(W,null)),n.createElement("hr",null),n.createElement("form",{is:"jb-form",name:"bank-form"},n.createElement(Ee,null)),n.createElement("div",null,"isDirty:",e?"dirty":"clean"),n.createElement("div",null,"isValid:",o?"valid":"invalid"))},args:{name:"parent-form"}},P={render:i=>{const t=h.useRef(null),e=async()=>{const r=await t.current.jbCheckValidity({showError:!0});ue(r).forEach(s=>{s.animate([{transform:"rotate(0deg)",display:"block"},{transform:"rotate(2deg)",display:"block"},{transform:"rotate(-2deg)",display:"block"},{transform:"rotate(0deg)",display:"block"}],{duration:100,iterations:10,fill:"auto"})})};return n.createElement(C,{ref:t,...i,style:{display:"flex",flexDirection:"column",gap:"1rem"}},n.createElement(C,{name:"personForm"},n.createElement(W,null)),n.createElement("hr",null),n.createElement(C,{name:"bank-form"},n.createElement(Ee,null)),n.createElement(V,{onClick:e},"shake invalids"))},args:{name:"parent-form"}};var K,Q,U;L.parameters={...L.parameters,docs:{...(K=L.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    name: "testForm"
  }
}`,...(U=(Q=L.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;M.parameters={...M.parameters,docs:{...(X=M.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ie,re;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ae,se,ne;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(se=P.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};const at=["Normal","FormTest","FormTreeTest","SpotInvalidElementTest"];export{M as FormTest,T as FormTreeTest,L as Normal,P as SpotInvalidElementTest,at as __namedExportsOrder,rt as default};
