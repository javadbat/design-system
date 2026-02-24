var Y=r=>{throw TypeError(r)};var q=(r,t,e)=>t.has(r)||Y("Cannot "+e);var n=(r,t,e)=>(q(r,t,"read from private field"),e?e.call(r):t.get(r)),f=(r,t,e)=>t.has(r)?Y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),k=(r,t,e,i)=>(q(r,t,"write to private field"),i?i.call(r,e):t.set(r,e),e),m=(r,t,e)=>(q(r,t,"access private method"),e);import{R as s,r as h}from"./index-DwQS_Y10.js";import{o as p}from"./JBButton-DitBmYU6.js";import{e as Fe}from"./jb-validation-DPnsTO1v.js";import{m as z}from"./JBDateInput-B3bz_BjL.js";import{d as le}from"./JBInput-DuNXDxv0.js";import{a as Ce,u as De}from"./index-CZHGLG-U.js";import{u as Be}from"./JBTextarea-DqQK_YIf.js";import{p as Se}from"./JBPaymentInput-CXjucwWY.js";import{u as we}from"./JBImageInput-DgXeta-P.js";import"./jb-button-C-XSWCAK.js";import"./jb-loading-CG_FOTv2.js";import"./index-bfIR6bpK.js";import"./index-Bg4fOAbC.js";import"./index-BJ5IkxrY.js";import"./jb-date-input-F0ljHA8Y.js";import"./jb-calendar-BwolZWEZ.js";import"./index-_b1slotr.js";import"./index-B9_TbPzc.js";import"./jb-popover-DCb3VoGY.js";import"./index-BiUL2Bqh.js";var S,H,oe=(H=class{constructor(r){f(this,S);this.dispatchOnChange=()=>{n(this,S).onChange()},this.name=r.name,this.validation=r.validation,this.dom=r.dom,this.getDirtyStatus=r.getDirtyStatus,this.getValue=r.getValue,this.setInitialValue=r.setInitialValue,this.setValue=r.setValue}attachCallbacks(r){k(this,S,r)}},S=new WeakMap,H),E,w,I,_,Ie=(_=class{constructor(r){f(this,E,[]);f(this,w,{});f(this,I);this.add=t=>{const e=new oe(t);return e.attachCallbacks({onChange:()=>n(this,I).handleStateChanges(e)}),n(this,E).push(e),n(this,w)[e.name]=e,e},k(this,I,r)}get list(){return[...n(this,E)]}get dictionary(){return n(this,w)}setValues(r){for(const t of n(this,E))t.name&&r[t.name]!==void 0&&typeof t.setValue=="function"&&t.setValue(r[t.name])}setInitialValues(r){for(const t of n(this,E))t.name&&r[t.name]!==void 0&&typeof t.setInitialValue=="function"&&t.setInitialValue(r[t.name])}traverse(r){const t={};for(const e of n(this,E))e.name&&(t[e.name]=r(e));return t}},E=new WeakMap,w=new WeakMap,I=new WeakMap,_),v,J,G,Je=(G=class{constructor(){f(this,v,[]);f(this,J,{})}get list(){return[...n(this,v)]}get dictionary(){return Object.freeze({...n(this,J)})}setValues(r){for(const t of n(this,v))t.name&&r[t.name]!==void 0&&t.setFormValues(r[t.name],!1)}setInitialValues(r){for(const t of n(this,v))t.name&&r[t.name]!==void 0&&t.setFormInitialValues(r[t.name],!1)}traverse(r){const t={};for(const e of n(this,v))e.name&&(t[e.name]=r(e));return t}add(r){n(this,v).includes(r)||(n(this,v).push(r),r.name&&(n(this,J)[r.name]=r))}},v=new WeakMap,J=new WeakMap,G);function ue(r){const t=[];for(let e of r.elements.entries())e[1].isAllValid||t.push(e[0]);for(let e of r.virtualElements.entries())e[1].isAllValid||e[0].dom&&t.push(e[0].dom);for(let e of r.subForms.entries())e[1].isAllValid||t.push(...ue(e[1]));return t}var O,W,y,g,x,A,u,ce,me,de,fe,he,ye,ge,F,R,L,N,pe,Ve,ve,be,D,xe=(D=class extends HTMLFormElement{constructor(){super();f(this,u);f(this,O,this.checkValidity);f(this,W,this.reportValidity);f(this,y,new Ie({handleStateChanges:m(this,u,N).bind(this)}));f(this,g,new Je);f(this,x);f(this,A,new Fe({showValidationError:this.callbacks.showValidationError.bind(this),clearValidationError:this.callbacks.cleanValidationError.bind(this),getValue:this.getFormValues.bind(this),getValidations:m(this,u,de).bind(this),getValueString:e=>JSON.stringify(e),setValidationResult:this.callbacks.setValidationResult}));f(this,R,!1);f(this,L,this.checkValidity());this.callbacks={showValidationError:e=>{},cleanValidationError:()=>{},setValidationResult:()=>{}},typeof this.attachInternals=="function"&&(k(this,x,this.attachInternals()),n(this,x).role="form"),this.initWebComponent()}get validation(){return n(this,A)}get isDirty(){const e=this.getFormDirtyStatus();return Object.values(e).includes(!0)}get value(){return this.getFormValues()}get name(){return this.getAttribute("name")||""}set name(e){e?this.setAttribute("name",e):this.removeAttribute("name")}get virtualElements(){return{list:n(this,y).list,dictionary:n(this,y).dictionary,add:n(this,y).add}}get subForms(){return{list:n(this,g).list,dictionary:n(this,g).dictionary}}initWebComponent(){m(this,u,ce).call(this),this.checkValidity=m(this,u,fe),this.reportValidity=m(this,u,he),m(this,u,pe).call(this)}connectedCallback(){m(this,u,Ve).call(this)}static get observedAttributes(){return[]}attributeChangedCallback(e,i,l){m(this,u,be).call(this,e,l)}async jbCheckValidity(e){var l,a;const i={isAllValid:!0,elements:new Map,virtualElements:new Map,subForms:new Map};for(const c of this.elements){const d=c;if(typeof((l=d.validation)==null?void 0:l.checkValidity)=="function"){const b=await d.validation.checkValidity({showError:e.showError});i.isAllValid=b.isAllValid&&i.isAllValid,i.elements.set(d,b)}}for(const c of n(this,y).list)if(typeof((a=c.validation)==null?void 0:a.checkValidity)=="function"){const d=await c.validation.checkValidity({showError:e.showError});i.isAllValid=d.isAllValid&&i.isAllValid,i.virtualElements.set(c,d)}for(const c of n(this,g).list){const d=await c.jbCheckValidity(e);i.isAllValid=d.isAllValid&&i.isAllValid,i.subForms.set(c,d)}return i}getValidationMessages(){return m(this,u,F).call(this,e=>e.validationMessage??null,e=>{var i,l;return((l=(i=e.validation)==null?void 0:i.resultSummary)==null?void 0:l.message)??null},e=>e.validation.resultSummary.message??null)}getValidationSummary(){return m(this,u,F).call(this,e=>{var i;return((i=e.validation)==null?void 0:i.resultSummary)??null},e=>{var i;return((i=e.validation)==null?void 0:i.resultSummary)??null},e=>e.validation.resultSummary)}getValidationResult(){return m(this,u,F).call(this,e=>{var i;return((i=e.validation)==null?void 0:i.result)??null},e=>{var i;return((i=e.validation)==null?void 0:i.result)??null},e=>e.validation.result)}getFormValues(){return m(this,u,F).call(this,e=>e.value,e=>typeof e.getValue=="function"?e.getValue():null,e=>e.getFormValues())}getFormDirtyStatus(){return m(this,u,F).call(this,e=>e.isDirty,e=>typeof e.getDirtyStatus=="function"?e.getDirtyStatus():null,e=>e.isDirty)}setFormValues(e,i=!0){for(const l of this.elements){const a=l;a.name&&e[a.name]!==void 0&&(a.value=e[a.name])}n(this,y).setValues(e),n(this,g).setValues(e),i&&this.setFormInitialValues(e,!1)}setFormInitialValues(e,i=!0){for(const l of this.elements){const a=l;a.name&&e[a.name]!==void 0&&(a.initialValue=e[a.name])}n(this,y).setInitialValues(e),n(this,g).setInitialValues(e),i&&this.setFormValues(e,!1)}},O=new WeakMap,W=new WeakMap,y=new WeakMap,g=new WeakMap,x=new WeakMap,A=new WeakMap,u=new WeakSet,ce=function(){this.addEventListener("submit",e=>m(this,u,me).call(this,e),{passive:!1}),this.addEventListener("change",e=>{const i=e.target;m(this,u,N).call(this,i)},{passive:!0})},me=function(e){e.isTrusted&&(e.stopPropagation(),e.preventDefault(),this.reportValidity()&&m(this,u,ye).call(this,e))},de=function(){return[{validator:()=>{for(const e of this.elements){const i=e;if(typeof i.checkValidity=="function"&&i.checkValidity()==0)return i.validationMessage!=""&&i.validationMessage}return!0},message:"form element is invalid"},{validator:()=>{const e=n(this,y).list.find(i=>{var l;return typeof((l=i.validation)==null?void 0:l.checkValidity)=="function"&&!i.validation.checkValidity({showError:!1})});if(e==null)return!0;e.validation.resultSummary.message},message:"virtual element is invalid"},{validator:()=>{const e=n(this,g).list.find(i=>!i.checkValidity());if(e==null)return!0;e.validation.resultSummary.message},message:"form element is invalid"}]},fe=function(){return n(this,A).checkValiditySync({showError:!1}).isAllValid},he=function(){let e=!0;for(const a of this.elements){const c=a;typeof c.reportValidity=="function"&&(e=c.reportValidity()&&e)}const i=n(this,y).list.reduce((a,c)=>{var d;return(typeof((d=c.validation)==null?void 0:d.checkValidity)!="function"||c.validation.checkValiditySync({showError:!0}))&&a},!0),l=n(this,g).list.reduce((a,c)=>c.reportValidity()&&a,!0);return e&&i&&l},ye=function(e){const i=new SubmitEvent("submit",{...e});this.dispatchEvent(i)},ge=function(e){const i={};for(const l of this.elements)l.name&&(i[l.name]=e(l));return i},F=function(e,i,l){return{...m(this,u,ge).call(this,e),...n(this,y).traverse(i),...n(this,g).traverse(l)}},R=new WeakMap,L=new WeakMap,N=function(e){const i=()=>{const a=this.isDirty;if(a!==n(this,R)){const c=new CustomEvent("dirty-change",{bubbles:!1,cancelable:!1,composed:!0,detail:{isDirty:a}});this.dispatchEvent(c),k(this,R,a)}},l=()=>{const a=this.checkValidity();if(a!==n(this,L)){const c=new CustomEvent("validity-change",{bubbles:!1,cancelable:!1,composed:!0,detail:{isValid:a}});this.dispatchEvent(c),k(this,L,a)}};if(e instanceof oe)return m(this,u,ve).call(this),i(),void l();e.isDirty!==void 0&&i(),typeof e.checkValidity=="function"&&l()},pe=function(){this.addEventListener("init",e=>{e.target instanceof D&&e.target!==this&&n(this,g).add(e.target)})},Ve=function(){const e=new CustomEvent("init",{bubbles:!0,composed:!0,cancelable:!1});this.dispatchEvent(e)},ve=function(){const e=new Event("change",{bubbles:!0,cancelable:!1,composed:!0});this.dispatchEvent(e)},be=function(e,i){},D);customElements.get("jb-form")||window.customElements.define("jb-form",xe,{extends:"form"});function B(r,t,e,i=!1){let l=h.useCallback(a=>{r.current&&typeof e=="function"&&e(a)},[r,e]);h.useEffect(()=>{let a=r.current;return a&&a.addEventListener(t,l,{passive:i,capture:!1}),function(){a&&a.removeEventListener(t,l,{passive:i,capture:!1})}},[r,t,e,i])}let Ae=h.createContext(null),Re=Ae.Provider,C=s.forwardRef((r,t)=>{var e;let{onSubmit:i,name:l,onValidityChange:a,onDirtyChange:c,onInit:d,onLoad:b,children:o,...ke}=r,V=s.useRef(null);return h.useImperativeHandle(t,()=>V.current??void 0,[V]),B(V,"load",(e={onSubmit:i,onValidityChange:a,onDirtyChange:c,onInit:d,onLoad:b}).onLoad,!0),B(V,"init",e.onInit,!0),B(V,"validity-change",e.onValidityChange),B(V,"dirty-change",e.onDirtyChange),B(V,"submit",e.onSubmit),s.createElement("form",{is:"jb-form",ref:V,...ke},s.createElement(Re,{value:V.current??null},o))});C.displayName="JBForm";const Le=["male","female"];function $(){return s.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"}},s.createElement(le,{name:"name",required:!0,label:"نام"}),s.createElement(z,{name:"birthDate",required:!0,label:"تاریخ تولد",format:"YYYY-MM-DD"}),s.createElement(z,{name:"applyDate",required:!0,label:"apply date"}),s.createElement(Ce,{name:"gender",label:"جنسیت",required:!0},s.createElement(De,{optionList:Le})),s.createElement(we,{name:"avatar",label:"نمایه",required:!0,maxFileSize:500*1024}),s.createElement(Be,{label:"توضیحات",name:"description",required:!0}))}function Ee(){return s.createElement("div",null,s.createElement(le,{name:"bankName",required:!0,label:"نام بانک"}),s.createElement(Se,{name:"cardNumber",label:"شماره کارت"}))}const rt={title:"Components/form elements/JBForm",component:C},j={args:{name:"testForm"}},je={name:"ali",birthDate:"2024-10-26",applyDate:new Date().toISOString(),gender:"male",description:"i'm ali",avatar:"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"},M={render:r=>{const t=h.useRef(null),[e,i]=h.useState(!1),[l,a]=h.useState(!0),c=()=>{alert("submit")},d=o=>{i(o.detail.isDirty)},b=o=>{a(o.detail.isValid)};return h.useEffect(()=>{t.current&&a(t.current.checkValidity())},[t]),s.createElement(C,{ref:t,...r,style:{display:"flex",flexDirection:"column",gap:"1rem"},onSubmit:c,onDirtyChange:d,onValidityChange:b},s.createElement($,null),s.createElement("div",{style:{display:"flex",gap:"1rem"}},s.createElement(p,{disabled:!e,type:"submit"},"submit"),s.createElement(p,{onClick:()=>{var o;return alert((o=t.current)==null?void 0:o.checkValidity())}},"check validity(",l?"valid":"invalid",")"),s.createElement(p,{onClick:()=>{var o;return alert((o=t.current)==null?void 0:o.reportValidity())}},"report validity"),s.createElement(p,{onClick:()=>{var o;return console.debug((o=t.current)==null?void 0:o.getValidationMessages())}},"getValidationMessages"),s.createElement(p,{onClick:()=>{var o;return console.debug((o=t.current)==null?void 0:o.getValidationSummary())}},"getValidationSummary"),s.createElement(p,{onClick:()=>{var o;return console.debug((o=t.current)==null?void 0:o.getValidationResult())}},"getValidationResult"),s.createElement(p,{onClick:()=>{var o;return console.debug((o=t.current)==null?void 0:o.getFormValues())}},"getFormValues"),s.createElement(p,{onClick:()=>{var o;return console.debug((o=t.current)==null?void 0:o.setFormValues(je,!0))}},"setFormDefaultValue"),s.createElement(p,{onClick:()=>{var o;return console.debug((o=t.current)==null?void 0:o.getFormDirtyStatus())}},"getFormDirtyStatus")))},args:{name:"test-form"}},T={render:r=>{const t=h.useRef(null),[e,i]=h.useState(!1),[l,a]=h.useState(!0),c=()=>{alert("submit")},d=o=>{i(o.detail.isDirty)},b=o=>{a(o.detail.isValid)};return h.useEffect(()=>{t.current&&(a(t.current.checkValidity()),t.current.addEventListener("submit",c),t.current.addEventListener("dirty-change",d),t.current.addEventListener("validity-change",b))},[t]),s.createElement("form",{is:"jb-form",ref:t,...r,style:{display:"flex",flexDirection:"column",gap:"1rem"}},s.createElement("form",{is:"jb-form",name:"personForm"},s.createElement($,null)),s.createElement("hr",null),s.createElement("form",{is:"jb-form",name:"bank-form"},s.createElement(Ee,null)),s.createElement("div",null,"isDirty:",e?"dirty":"clean"),s.createElement("div",null,"isValid:",l?"valid":"invalid"))},args:{name:"parent-form"}},P={render:r=>{const t=h.useRef(null),e=async()=>{const i=await t.current.jbCheckValidity({showError:!0});ue(i).forEach(a=>{a.animate([{transform:"rotate(0deg)",display:"block"},{transform:"rotate(2deg)",display:"block"},{transform:"rotate(-2deg)",display:"block"},{transform:"rotate(0deg)",display:"block"}],{duration:100,iterations:10,fill:"auto"})})};return s.createElement(C,{ref:t,...r,style:{display:"flex",flexDirection:"column",gap:"1rem"}},s.createElement(C,{name:"personForm"},s.createElement($,null)),s.createElement("hr",null),s.createElement(C,{name:"bank-form"},s.createElement(Ee,null)),s.createElement(p,{onClick:e},"shake invalids"))},args:{name:"parent-form"}};var K,Q,U;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    name: "testForm"
  }
}`,...(U=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;M.parameters={...M.parameters,docs:{...(X=M.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ne=(se=P.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};const at=["Normal","FormTest","FormTreeTest","SpotInvalidElementTest"];export{M as FormTest,T as FormTreeTest,j as Normal,P as SpotInvalidElementTest,at as __namedExportsOrder,rt as default};
