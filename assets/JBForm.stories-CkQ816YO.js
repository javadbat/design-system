var W=r=>{throw TypeError(r)};var P=(r,t,e)=>t.has(r)||W("Cannot "+e);var l=(r,t,e)=>(P(r,t,"read from private field"),e?e.call(r):t.get(r)),f=(r,t,e)=>t.has(r)?W("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),E=(r,t,e,i)=>(P(r,t,"write to private field"),i?i.call(r,e):t.set(r,e),e),m=(r,t,e)=>(P(r,t,"access private method"),e);import{R as n,r as h}from"./index-DwQS_Y10.js";import{o as p}from"./JBButton-CgFwNxXH.js";import{e as Ee}from"./jb-validation-DPnsTO1v.js";import{m as Y}from"./JBDateInput-CofqkoS-.js";import{d as ne}from"./JBInput-D74Vik9B.js";import{u as ke,a as Fe}from"./index-CkpWXzJ0.js";import{u as Ce}from"./JBTextarea-CFEYwMGs.js";import{p as De}from"./JBPaymentInput-CCaOZPi7.js";import{u as Be}from"./JBImageInput-DgXeta-P.js";import"./jb-loading-CG_FOTv2.js";import"./index-bfIR6bpK.js";import"./index-BJ5IkxrY.js";import"./jb-date-input-vHDiMak5.js";import"./jb-calendar-DVcp7v1k.js";import"./index-BsliqPsk.js";import"./index-_b1slotr.js";import"./index-znC4IK4w.js";import"./jb-popover-DAtc3beD.js";import"./index-C-sL0134.js";var B,z,le=(z=class{constructor(r){f(this,B);this.dispatchOnChange=()=>{l(this,B).onChange()},this.name=r.name,this.validation=r.validation,this.dom=r.dom,this.getDirtyStatus=r.getDirtyStatus,this.getValue=r.getValue,this.setInitialValue=r.setInitialValue,this.setValue=r.setValue}attachCallbacks(r){E(this,B,r)}},B=new WeakMap,z),b,S,w,H,Se=(H=class{constructor(r){f(this,b,[]);f(this,S,{});f(this,w);this.add=t=>{const e=new le(t);return e.attachCallbacks({onChange:()=>l(this,w).handleStateChanges(e)}),l(this,b).push(e),l(this,S)[e.name]=e,e},E(this,w,r)}get list(){return[...l(this,b)]}get dictionary(){return l(this,S)}setValues(r){for(const t of l(this,b))t.name&&r[t.name]!==void 0&&typeof t.setValue=="function"&&t.setValue(r[t.name])}setInitialValues(r){for(const t of l(this,b))t.name&&r[t.name]!==void 0&&typeof t.setInitialValue=="function"&&t.setInitialValue(r[t.name])}traverse(r){const t={};for(const e of l(this,b))e.name&&(t[e.name]=r(e));return t}},b=new WeakMap,S=new WeakMap,w=new WeakMap,H),V,I,_,we=(_=class{constructor(){f(this,V,[]);f(this,I,{})}get list(){return[...l(this,V)]}get dictionary(){return Object.freeze({...l(this,I)})}setValues(r){for(const t of l(this,V))t.name&&r[t.name]!==void 0&&t.setFormValues(r[t.name],!1)}setInitialValues(r){for(const t of l(this,V))t.name&&r[t.name]!==void 0&&t.setFormInitialValues(r[t.name],!1)}traverse(r){const t={};for(const e of l(this,V))e.name&&(t[e.name]=r(e));return t}add(r){l(this,V).includes(r)||(l(this,V).push(r),r.name&&(l(this,I)[r.name]=r))}},V=new WeakMap,I=new WeakMap,_);function oe(r){const t=[];for(let e of r.elements.entries())e[1].isAllValid||t.push(e[0]);for(let e of r.virtualElements.entries())e[1].isAllValid||e[0].dom&&t.push(e[0].dom);for(let e of r.subForms.entries())e[1].isAllValid||t.push(...oe(e[1]));return t}var $,N,y,g,J,x,c,ce,ue,me,de,fe,he,ye,k,R,A,q,ge,pe,Ve,ve,C,Ie=(C=class extends HTMLFormElement{constructor(){super();f(this,c);f(this,$,this.checkValidity);f(this,N,this.reportValidity);f(this,y,new Se({handleStateChanges:m(this,c,q).bind(this)}));f(this,g,new we);f(this,J);f(this,x,new Ee({showValidationError:this.callbacks.showValidationError.bind(this),clearValidationError:this.callbacks.cleanValidationError.bind(this),getValue:this.getFormValues.bind(this),getValidations:m(this,c,me).bind(this),getValueString:e=>JSON.stringify(e),setValidationResult:this.callbacks.setValidationResult}));f(this,R,!1);f(this,A,this.checkValidity());this.callbacks={showValidationError:e=>{},cleanValidationError:()=>{},setValidationResult:()=>{}},typeof this.attachInternals=="function"&&(E(this,J,this.attachInternals()),l(this,J).role="form"),this.initWebComponent()}get validation(){return l(this,x)}get isDirty(){const e=this.getFormDirtyStatus();return Object.values(e).includes(!0)}get value(){return this.getFormValues()}get virtualElements(){return{list:l(this,y).list,dictionary:l(this,y).dictionary,add:l(this,y).add}}get subForms(){return{list:l(this,g).list,dictionary:l(this,g).dictionary}}initWebComponent(){m(this,c,ce).call(this),this.checkValidity=m(this,c,de),this.reportValidity=m(this,c,fe),m(this,c,ge).call(this)}connectedCallback(){m(this,c,pe).call(this)}static get observedAttributes(){return[]}attributeChangedCallback(e,i,o){m(this,c,ve).call(this,e,o)}async jbCheckValidity(e){var o,s;const i={isAllValid:!0,elements:new Map,virtualElements:new Map,subForms:new Map};for(const u of this.elements){const d=u;if(typeof((o=d.validation)==null?void 0:o.checkValidity)=="function"){const v=await d.validation.checkValidity({showError:e.showError});i.isAllValid=v.isAllValid&&i.isAllValid,i.elements.set(d,v)}}for(const u of l(this,y).list)if(typeof((s=u.validation)==null?void 0:s.checkValidity)=="function"){const d=await u.validation.checkValidity({showError:e.showError});i.isAllValid=d.isAllValid&&i.isAllValid,i.virtualElements.set(u,d)}for(const u of l(this,g).list){const d=await u.jbCheckValidity(e);i.isAllValid=d.isAllValid&&i.isAllValid,i.subForms.set(u,d)}return i}getValidationMessages(){return m(this,c,k).call(this,e=>e.validationMessage??null,e=>{var i,o;return((o=(i=e.validation)==null?void 0:i.resultSummary)==null?void 0:o.message)??null},e=>e.validation.resultSummary.message??null)}getValidationSummary(){return m(this,c,k).call(this,e=>{var i;return((i=e.validation)==null?void 0:i.resultSummary)??null},e=>{var i;return((i=e.validation)==null?void 0:i.resultSummary)??null},e=>e.validation.resultSummary)}getValidationResult(){return m(this,c,k).call(this,e=>{var i;return((i=e.validation)==null?void 0:i.result)??null},e=>{var i;return((i=e.validation)==null?void 0:i.result)??null},e=>e.validation.result)}getFormValues(){return m(this,c,k).call(this,e=>e.value,e=>typeof e.getValue=="function"?e.getValue():null,e=>e.getFormValues())}getFormDirtyStatus(){return m(this,c,k).call(this,e=>e.isDirty,e=>typeof e.getDirtyStatus=="function"?e.getDirtyStatus():null,e=>e.isDirty)}setFormValues(e,i=!0){for(const o of this.elements){const s=o;s.name&&e[s.name]!==void 0&&(s.value=e[s.name])}l(this,y).setValues(e),l(this,g).setValues(e),i&&this.setFormInitialValues(e,!1)}setFormInitialValues(e,i=!0){for(const o of this.elements){const s=o;s.name&&e[s.name]!==void 0&&(s.initialValue=e[s.name])}l(this,y).setInitialValues(e),l(this,g).setInitialValues(e),i&&this.setFormValues(e,!1)}},$=new WeakMap,N=new WeakMap,y=new WeakMap,g=new WeakMap,J=new WeakMap,x=new WeakMap,c=new WeakSet,ce=function(){this.addEventListener("submit",e=>m(this,c,ue).call(this,e),{passive:!1}),this.addEventListener("change",e=>{const i=e.target;m(this,c,q).call(this,i)},{passive:!0})},ue=function(e){e.isTrusted&&(e.stopPropagation(),e.preventDefault(),this.reportValidity()&&m(this,c,he).call(this,e))},me=function(){return[{validator:()=>{for(const e of this.elements){const i=e;if(typeof i.checkValidity=="function"&&i.checkValidity()==0)return i.validationMessage!=""&&i.validationMessage}return!0},message:"form element is invalid"},{validator:()=>{const e=l(this,y).list.find(i=>{var o;return typeof((o=i.validation)==null?void 0:o.checkValidity)=="function"&&!i.validation.checkValidity({showError:!1})});if(e==null)return!0;e.validation.resultSummary.message},message:"virtual element is invalid"},{validator:()=>{const e=l(this,g).list.find(i=>!i.checkValidity());if(e==null)return!0;e.validation.resultSummary.message},message:"form element is invalid"}]},de=function(){return l(this,x).checkValiditySync({showError:!1}).isAllValid},fe=function(){let e=!0;for(const s of this.elements){const u=s;typeof u.reportValidity=="function"&&(e=u.reportValidity()&&e)}const i=l(this,y).list.reduce((s,u)=>{var d;return(typeof((d=u.validation)==null?void 0:d.checkValidity)!="function"||u.validation.checkValiditySync({showError:!0}))&&s},!0),o=l(this,g).list.reduce((s,u)=>u.reportValidity()&&s,!0);return e&&i&&o},he=function(e){const i=new SubmitEvent("submit",{...e});this.dispatchEvent(i)},ye=function(e){const i={};for(const o of this.elements)o.name&&(i[o.name]=e(o));return i},k=function(e,i,o){return{...m(this,c,ye).call(this,e),...l(this,y).traverse(i),...l(this,g).traverse(o)}},R=new WeakMap,A=new WeakMap,q=function(e){const i=()=>{const s=this.isDirty;if(s!==l(this,R)){const u=new CustomEvent("dirty-change",{bubbles:!1,cancelable:!1,composed:!0,detail:{isDirty:s}});this.dispatchEvent(u),E(this,R,s)}},o=()=>{const s=this.checkValidity();if(s!==l(this,A)){const u=new CustomEvent("validity-change",{bubbles:!1,cancelable:!1,composed:!0,detail:{isValid:s}});this.dispatchEvent(u),E(this,A,s)}};if(e instanceof le)return m(this,c,Ve).call(this),i(),void o();e.isDirty!==void 0&&i(),typeof e.checkValidity=="function"&&o()},ge=function(){this.addEventListener("init",e=>{e.target instanceof C&&e.target!==this&&l(this,g).add(e.target)})},pe=function(){const e=new CustomEvent("init",{bubbles:!0,composed:!0,cancelable:!1});this.dispatchEvent(e)},Ve=function(){const e=new Event("change",{bubbles:!0,cancelable:!1,composed:!0});this.dispatchEvent(e)},ve=function(e,i){},C);customElements.get("jb-form")||window.customElements.define("jb-form",Ie,{extends:"form"});function D(r,t,e,i=!1){let o=h.useCallback(s=>{r.current&&typeof e=="function"&&e(s)},[r,e]);h.useEffect(()=>{let s=r.current;return s&&s.addEventListener(t,o,{passive:i,capture:!1}),function(){s&&s.removeEventListener(t,o,{passive:i,capture:!1})}},[r,t,e,i])}let Je=h.createContext(null),xe=Je.Provider,F=n.forwardRef((r,t)=>{var e;let{onSubmit:i,name:o,onValidityChange:s,onDirtyChange:u,children:d,...v}=r,a=n.useRef(null);return h.useImperativeHandle(t,()=>a.current??void 0,[a]),D(a,"load",(e={onSubmit:i,onValidityChange:s,onDirtyChange:u}).onLoad,!0),D(a,"init",e.onInit,!0),D(a,"validity-change",e.onValidityChange),D(a,"dirty-change",e.onDirtyChange),D(a,"submit",e.onSubmit),h.useEffect(()=>{a.current&&(o?a.current.setAttribute("name",o):a.current.removeAttribute("name"))},[a.current,o]),n.createElement("form",{is:"jb-form",ref:a,...v},n.createElement(xe,{value:a.current??null},d))});F.displayName="JBForm";const Re=["male","female"];function O(){return n.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"}},n.createElement(ne,{name:"name",required:!0,label:"نام"}),n.createElement(Y,{name:"birthDate",required:!0,label:"تاریخ تولد",format:"YYYY-MM-DD"}),n.createElement(Y,{name:"applyDate",required:!0,label:"apply date"}),n.createElement(ke,{name:"gender",label:"جنسیت",required:!0},n.createElement(Fe,{optionList:Re})),n.createElement(Be,{name:"avatar",label:"نمایه",required:!0,maxFileSize:500*1024}),n.createElement(Ce,{label:"توضیحات",name:"description",required:!0}))}function be(){return n.createElement("div",null,n.createElement(ne,{name:"bankName",required:!0,label:"نام بانک"}),n.createElement(De,{name:"cardNumber",label:"شماره کارت"}))}const et={title:"Components/form elements/JBForm",component:F},j={args:{name:"testForm"}},Ae={name:"ali",birthDate:"2024-10-26",applyDate:new Date().toISOString(),gender:"male",description:"i'm ali",avatar:"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"},L={render:r=>{const t=h.useRef(null),[e,i]=h.useState(!1),[o,s]=h.useState(!0),u=()=>{alert("submit")},d=a=>{i(a.detail.isDirty)},v=a=>{s(a.detail.isValid)};return h.useEffect(()=>{t.current&&s(t.current.checkValidity())},[t]),n.createElement(F,{ref:t,...r,style:{display:"flex",flexDirection:"column",gap:"1rem"},onSubmit:u,onDirtyChange:d,onValidityChange:v},n.createElement(O,null),n.createElement("div",{style:{display:"flex",gap:"1rem"}},n.createElement(p,{disabled:!e,type:"submit"},"submit"),n.createElement(p,{onClick:()=>{var a;return alert((a=t.current)==null?void 0:a.checkValidity())}},"check validity(",o?"valid":"invalid",")"),n.createElement(p,{onClick:()=>{var a;return alert((a=t.current)==null?void 0:a.reportValidity())}},"report validity"),n.createElement(p,{onClick:()=>{var a;return console.debug((a=t.current)==null?void 0:a.getValidationMessages())}},"getValidationMessages"),n.createElement(p,{onClick:()=>{var a;return console.debug((a=t.current)==null?void 0:a.getValidationSummary())}},"getValidationSummary"),n.createElement(p,{onClick:()=>{var a;return console.debug((a=t.current)==null?void 0:a.getValidationResult())}},"getValidationResult"),n.createElement(p,{onClick:()=>{var a;return console.debug((a=t.current)==null?void 0:a.getFormValues())}},"getFormValues"),n.createElement(p,{onClick:()=>{var a;return console.debug((a=t.current)==null?void 0:a.setFormValues(Ae,!0))}},"setFormDefaultValue"),n.createElement(p,{onClick:()=>{var a;return console.debug((a=t.current)==null?void 0:a.getFormDirtyStatus())}},"getFormDirtyStatus")))},args:{name:"test-form"}},M={render:r=>{const t=h.useRef(null),[e,i]=h.useState(!1),[o,s]=h.useState(!0),u=()=>{alert("submit")},d=a=>{i(a.detail.isDirty)},v=a=>{s(a.detail.isValid)};return h.useEffect(()=>{t.current&&(s(t.current.checkValidity()),t.current.addEventListener("submit",u),t.current.addEventListener("dirty-change",d),t.current.addEventListener("validity-change",v))},[t]),n.createElement("form",{is:"jb-form",ref:t,...r,style:{display:"flex",flexDirection:"column",gap:"1rem"}},n.createElement("form",{is:"jb-form",name:"personForm"},n.createElement(O,null)),n.createElement("hr",null),n.createElement("form",{is:"jb-form",name:"bank-form"},n.createElement(be,null)),n.createElement("div",null,"isDirty:",e?"dirty":"clean"),n.createElement("div",null,"isValid:",o?"valid":"invalid"))},args:{name:"parent-form"}},T={render:r=>{const t=h.useRef(null),e=async()=>{const i=await t.current.jbCheckValidity({showError:!0});oe(i).forEach(s=>{s.animate([{transform:"rotate(0deg)",display:"block"},{transform:"rotate(2deg)",display:"block"},{transform:"rotate(-2deg)",display:"block"},{transform:"rotate(0deg)",display:"block"}],{duration:100,iterations:10,fill:"auto"})})};return n.createElement(F,{ref:t,...r,style:{display:"flex",flexDirection:"column",gap:"1rem"}},n.createElement(F,{name:"personForm"},n.createElement(O,null)),n.createElement("hr",null),n.createElement(F,{name:"bank-form"},n.createElement(be,null)),n.createElement(p,{onClick:e},"shake invalids"))},args:{name:"parent-form"}};var G,K,Q;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    name: "testForm"
  }
}`,...(Q=(K=j.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;L.parameters={...L.parameters,docs:{...(U=L.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Z=(X=L.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ie;M.parameters={...M.parameters,docs:{...(ee=M.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ie=(te=M.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var re,ae,se;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const tt=["Normal","FormTest","FormTreeTest","SpotInvalidElementTest"];export{L as FormTest,M as FormTreeTest,j as Normal,T as SpotInvalidElementTest,tt as __namedExportsOrder,et as default};
