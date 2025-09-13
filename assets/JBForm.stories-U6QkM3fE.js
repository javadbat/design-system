var Ee=Object.defineProperty;var W=i=>{throw TypeError(i)};var ke=(i,t,e)=>t in i?Ee(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var V=(i,t,e)=>ke(i,typeof t!="symbol"?t+"":t,e),P=(i,t,e)=>t.has(i)||W("Cannot "+e);var l=(i,t,e)=>(P(i,t,"read from private field"),e?e.call(i):t.get(i)),f=(i,t,e)=>t.has(i)?W("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),D=(i,t,e,r)=>(P(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e),m=(i,t,e)=>(P(i,t,"access private method"),e);import{R as n,r as h}from"./index-0yr9KlQE.js";import{o as p}from"./JBButton-DUGN6lM_.js";import{e as Fe}from"./jb-validation-BFHHOeHY.js";import{m as Y}from"./JBDateInput-BamVOWLM.js";import{c as ne}from"./JBInput-DItrbI8n.js";import{u as Ce,a as De}from"./index-BH2w3O3r.js";import{u as Se}from"./JBTextarea-Df4AmHff.js";import{p as Be}from"./JBPaymentInput-ghJ_srLJ.js";import{u as we}from"./JBImageInput-t6XWWWni.js";import"./jb-loading-CMe7LShv.js";import"./index-Dsu68ezD.js";import"./jb-date-input-BF1wh7hV.js";import"./jb-calendar-DKS8aW2i.js";import"./index-_cW7E40i.js";import"./index-C1o-zhIV.js";import"./index-DuXbOla-.js";import"./jb-popover-CjXt0Ckz.js";import"./index-OhkmWO6v.js";var B,z,le=(z=class{constructor(i){V(this,"name");V(this,"validation");V(this,"dom");V(this,"getValue");V(this,"getDirtyStatus");V(this,"setValue");V(this,"setInitialValue");f(this,B);V(this,"dispatchOnChange",()=>{l(this,B).onChange()});this.name=i.name,this.validation=i.validation,this.dom=i.dom,this.getDirtyStatus=i.getDirtyStatus,this.getValue=i.getValue,this.setInitialValue=i.setInitialValue,this.setValue=i.setValue}attachCallbacks(i){D(this,B,i)}},B=new WeakMap,z),E,w,I,H,Ie=(H=class{constructor(i){f(this,E,[]);f(this,w,{});f(this,I);V(this,"add",i=>{const t=new le(i);return t.attachCallbacks({onChange:()=>l(this,I).handleStateChanges(t)}),l(this,E).push(t),l(this,w)[t.name]=t,t});D(this,I,i)}get list(){return[...l(this,E)]}get dictionary(){return l(this,w)}setValues(i){for(const t of l(this,E))t.name&&i[t.name]!==void 0&&typeof t.setValue=="function"&&t.setValue(i[t.name])}setInitialValues(i){for(const t of l(this,E))t.name&&i[t.name]!==void 0&&typeof t.setInitialValue=="function"&&t.setInitialValue(i[t.name])}traverse(i){const t={};for(const e of l(this,E))e.name&&(t[e.name]=i(e));return t}},E=new WeakMap,w=new WeakMap,I=new WeakMap,H),v,J,_,Je=(_=class{constructor(){f(this,v,[]);f(this,J,{})}get list(){return[...l(this,v)]}get dictionary(){return Object.freeze({...l(this,J)})}setValues(i){for(const t of l(this,v))t.name&&i[t.name]!==void 0&&t.setFormValues(i[t.name],!1)}setInitialValues(i){for(const t of l(this,v))t.name&&i[t.name]!==void 0&&t.setFormInitialValues(i[t.name],!1)}traverse(i){const t={};for(const e of l(this,v))e.name&&(t[e.name]=i(e));return t}add(i){l(this,v).includes(i)||(l(this,v).push(i),i.name&&(l(this,J)[i.name]=i))}},v=new WeakMap,J=new WeakMap,_);function oe(i){const t=[];for(let e of i.elements.entries())e[1].isAllValid||t.push(e[0]);for(let e of i.virtualElements.entries())e[1].isAllValid||e[0].dom&&t.push(e[0].dom);for(let e of i.subForms.entries())e[1].isAllValid||t.push(...oe(e[1]));return t}var $,N,y,g,x,u,ue,ce,me,de,fe,he,ye,k,R,A,q,ge,Ve,pe,ve,C,xe=(C=class extends HTMLFormElement{constructor(){super();f(this,u);f(this,$,this.checkValidity);f(this,N,this.reportValidity);f(this,y,new Ie({handleStateChanges:m(this,u,q).bind(this)}));f(this,g,new Je);V(this,"callbacks",{showValidationError:e=>{},cleanValidationError:()=>{},setValidationResult:()=>{}});f(this,x,new Fe({showValidationError:this.callbacks.showValidationError.bind(this),clearValidationError:this.callbacks.cleanValidationError.bind(this),getValue:this.getFormValues.bind(this),getValidations:m(this,u,me).bind(this),getValueString:e=>JSON.stringify(e),setValidationResult:this.callbacks.setValidationResult}));f(this,R,!1);f(this,A,this.checkValidity());this.initWebComponent()}get validation(){return l(this,x)}get isDirty(){const e=this.getFormDirtyStatus();return Object.values(e).includes(!0)}get value(){return this.getFormValues()}get virtualElements(){return{list:l(this,y).list,dictionary:l(this,y).dictionary,add:l(this,y).add}}get subForms(){return{list:l(this,g).list,dictionary:l(this,g).dictionary}}initWebComponent(){m(this,u,ue).call(this),this.checkValidity=m(this,u,de),this.reportValidity=m(this,u,fe),m(this,u,ge).call(this)}connectedCallback(){m(this,u,Ve).call(this)}static get observedAttributes(){return[]}attributeChangedCallback(e,r,o){m(this,u,ve).call(this,e,o)}async jbCheckValidity(e){var o,s;const r={isAllValid:!0,elements:new Map,virtualElements:new Map,subForms:new Map};for(const c of this.elements){const d=c;if(typeof((o=d.validation)==null?void 0:o.checkValidity)=="function"){const b=await d.validation.checkValidity({showError:e.showError});r.isAllValid=b.isAllValid&&r.isAllValid,r.elements.set(d,b)}}for(const c of l(this,y).list)if(typeof((s=c.validation)==null?void 0:s.checkValidity)=="function"){const d=await c.validation.checkValidity({showError:e.showError});r.isAllValid=d.isAllValid&&r.isAllValid,r.virtualElements.set(c,d)}for(const c of l(this,g).list){const d=await c.jbCheckValidity(e);r.isAllValid=d.isAllValid&&r.isAllValid,r.subForms.set(c,d)}return r}getValidationMessages(){return m(this,u,k).call(this,e=>e.validationMessage??null,e=>{var r,o;return((o=(r=e.validation)==null?void 0:r.resultSummary)==null?void 0:o.message)??null},e=>e.validation.resultSummary.message??null)}getValidationSummary(){return m(this,u,k).call(this,e=>{var r;return((r=e.validation)==null?void 0:r.resultSummary)??null},e=>{var r;return((r=e.validation)==null?void 0:r.resultSummary)??null},e=>e.validation.resultSummary)}getValidationResult(){return m(this,u,k).call(this,e=>{var r;return((r=e.validation)==null?void 0:r.result)??null},e=>{var r;return((r=e.validation)==null?void 0:r.result)??null},e=>e.validation.result)}getFormValues(){return m(this,u,k).call(this,e=>e.value,e=>typeof e.getValue=="function"?e.getValue():null,e=>e.getFormValues())}getFormDirtyStatus(){return m(this,u,k).call(this,e=>e.isDirty,e=>typeof e.getDirtyStatus=="function"?e.getDirtyStatus():null,e=>e.isDirty)}setFormValues(e,r=!0){for(const o of this.elements){const s=o;s.name&&e[s.name]!==void 0&&(s.value=e[s.name])}l(this,y).setValues(e),l(this,g).setValues(e),r&&this.setFormInitialValues(e,!1)}setFormInitialValues(e,r=!0){for(const o of this.elements){const s=o;s.name&&e[s.name]!==void 0&&(s.initialValue=e[s.name])}l(this,y).setInitialValues(e),l(this,g).setInitialValues(e),r&&this.setFormValues(e,!1)}},$=new WeakMap,N=new WeakMap,y=new WeakMap,g=new WeakMap,x=new WeakMap,u=new WeakSet,ue=function(){this.addEventListener("submit",e=>m(this,u,ce).call(this,e),{passive:!1}),this.addEventListener("change",e=>{const r=e.target;m(this,u,q).call(this,r)},{passive:!0})},ce=function(e){e.isTrusted&&(e.stopPropagation(),e.preventDefault(),this.reportValidity()&&m(this,u,he).call(this,e))},me=function(){return[{validator:()=>{for(const e of this.elements){const r=e;if(typeof r.checkValidity=="function"&&r.checkValidity()==0)return r.validationMessage!=""&&r.validationMessage}return!0},message:"form element is invalid"},{validator:()=>{const e=l(this,y).list.find(r=>{var o;return typeof((o=r.validation)==null?void 0:o.checkValidity)=="function"&&!r.validation.checkValidity({showError:!1})});if(e==null)return!0;e.validation.resultSummary.message},message:"virtual element is invalid"},{validator:()=>{const e=l(this,g).list.find(r=>!r.checkValidity());if(e==null)return!0;e.validation.resultSummary.message},message:"form element is invalid"}]},de=function(){return l(this,x).checkValiditySync({showError:!1}).isAllValid},fe=function(){let e=!0;for(const s of this.elements){const c=s;typeof c.reportValidity=="function"&&(e=c.reportValidity()&&e)}const r=l(this,y).list.reduce((s,c)=>{var d;return(typeof((d=c.validation)==null?void 0:d.checkValidity)!="function"||c.validation.checkValiditySync({showError:!0}))&&s},!0),o=l(this,g).list.reduce((s,c)=>c.reportValidity()&&s,!0);return e&&r&&o},he=function(e){const r=new SubmitEvent("submit",{...e});this.dispatchEvent(r)},ye=function(e){const r={};for(const o of this.elements)o.name&&(r[o.name]=e(o));return r},k=function(e,r,o){return{...m(this,u,ye).call(this,e),...l(this,y).traverse(r),...l(this,g).traverse(o)}},R=new WeakMap,A=new WeakMap,q=function(e){const r=()=>{const s=this.isDirty;if(s!==l(this,R)){const c=new CustomEvent("dirty-change",{bubbles:!1,cancelable:!1,composed:!0,detail:{isDirty:s}});this.dispatchEvent(c),D(this,R,s)}},o=()=>{const s=this.checkValidity();if(s!==l(this,A)){const c=new CustomEvent("validity-change",{bubbles:!1,cancelable:!1,composed:!0,detail:{isValid:s}});this.dispatchEvent(c),D(this,A,s)}};if(e instanceof le)return m(this,u,pe).call(this),r(),void o();e.isDirty!==void 0&&r(),typeof e.checkValidity=="function"&&o()},ge=function(){this.addEventListener("init",e=>{e.target instanceof C&&e.target!==this&&l(this,g).add(e.target)})},Ve=function(){const e=new CustomEvent("init",{bubbles:!0,composed:!0,cancelable:!1});this.dispatchEvent(e)},pe=function(){const e=new Event("change",{bubbles:!0,cancelable:!1,composed:!0});this.dispatchEvent(e)},ve=function(e,r){},C);customElements.get("jb-form")||window.customElements.define("jb-form",xe,{extends:"form"});function S(i,t,e,r=!1){let o=h.useCallback(s=>{i.current&&typeof e=="function"&&e(s)},[i,e]);h.useEffect(()=>{let s=i.current;return s&&s.addEventListener(t,o,{passive:r,capture:!1}),function(){s&&s.removeEventListener(t,o,{passive:r,capture:!1})}},[i,t,e,r])}let Re=h.createContext(null),Ae=Re.Provider,F=n.forwardRef((i,t)=>{var e;let{onSubmit:r,name:o,onValidityChange:s,onDirtyChange:c,children:d,...b}=i,a=n.useRef(null);return h.useImperativeHandle(t,()=>a.current??void 0,[a]),S(a,"load",(e={onSubmit:r,onValidityChange:s,onDirtyChange:c}).onLoad,!0),S(a,"init",e.onInit,!0),S(a,"validity-change",e.onValidityChange),S(a,"dirty-change",e.onDirtyChange),S(a,"submit",e.onSubmit),h.useEffect(()=>{a.current&&(o?a.current.setAttribute("name",o):a.current.removeAttribute("name"))},[a.current,o]),n.createElement("form",{is:"jb-form",ref:a,...b},n.createElement(Ae,{value:a.current??null},d))});F.displayName="JBForm";const je=["male","female"];function O(){return n.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"}},n.createElement(ne,{name:"name",required:!0,label:"نام"}),n.createElement(Y,{name:"birthDate",required:!0,label:"تاریخ تولد",format:"YYYY-MM-DD"}),n.createElement(Y,{name:"applyDate",required:!0,label:"apply date"}),n.createElement(Ce,{name:"gender",label:"جنسیت",required:!0},n.createElement(De,{optionList:je})),n.createElement(we,{name:"avatar",label:"نمایه",required:!0,maxFileSize:500*1024}),n.createElement(Se,{label:"توضیحات",name:"description",required:!0}))}function be(){return n.createElement("div",null,n.createElement(ne,{name:"bankName",required:!0,label:"نام بانک"}),n.createElement(Be,{name:"cardNumber",label:"شماره کارت"}))}const tt={title:"Components/form elements/JBForm",component:F},j={args:{name:"testForm"}},Le={name:"ali",birthDate:"2024-10-26",applyDate:new Date().toISOString(),gender:"male",description:"i'm ali",avatar:"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"},L={render:i=>{const t=h.useRef(null),[e,r]=h.useState(!1),[o,s]=h.useState(!0),c=()=>{alert("submit")},d=a=>{r(a.detail.isDirty)},b=a=>{s(a.detail.isValid)};return h.useEffect(()=>{t.current&&s(t.current.checkValidity())},[t]),n.createElement(F,{ref:t,...i,style:{display:"flex",flexDirection:"column",gap:"1rem"},onSubmit:c,onDirtyChange:d,onValidityChange:b},n.createElement(O,null),n.createElement("div",{style:{display:"flex",gap:"1rem"}},n.createElement(p,{disabled:!e,type:"submit"},"submit"),n.createElement(p,{onClick:()=>{var a;return alert((a=t.current)==null?void 0:a.checkValidity())}},"check validity(",o?"valid":"invalid",")"),n.createElement(p,{onClick:()=>{var a;return alert((a=t.current)==null?void 0:a.reportValidity())}},"report validity"),n.createElement(p,{onClick:()=>{var a;return console.debug((a=t.current)==null?void 0:a.getValidationMessages())}},"getValidationMessages"),n.createElement(p,{onClick:()=>{var a;return console.debug((a=t.current)==null?void 0:a.getValidationSummary())}},"getValidationSummary"),n.createElement(p,{onClick:()=>{var a;return console.debug((a=t.current)==null?void 0:a.getValidationResult())}},"getValidationResult"),n.createElement(p,{onClick:()=>{var a;return console.debug((a=t.current)==null?void 0:a.getFormValues())}},"getFormValues"),n.createElement(p,{onClick:()=>{var a;return console.debug((a=t.current)==null?void 0:a.setFormValues(Le,!0))}},"setFormDefaultValue"),n.createElement(p,{onClick:()=>{var a;return console.debug((a=t.current)==null?void 0:a.getFormDirtyStatus())}},"getFormDirtyStatus")))},args:{name:"test-form"}},M={render:i=>{const t=h.useRef(null),[e,r]=h.useState(!1),[o,s]=h.useState(!0),c=()=>{alert("submit")},d=a=>{r(a.detail.isDirty)},b=a=>{s(a.detail.isValid)};return h.useEffect(()=>{t.current&&(s(t.current.checkValidity()),t.current.addEventListener("submit",c),t.current.addEventListener("dirty-change",d),t.current.addEventListener("validity-change",b))},[t]),n.createElement("form",{is:"jb-form",ref:t,...i,style:{display:"flex",flexDirection:"column",gap:"1rem"}},n.createElement("form",{is:"jb-form",name:"personForm"},n.createElement(O,null)),n.createElement("hr",null),n.createElement("form",{is:"jb-form",name:"bank-form"},n.createElement(be,null)),n.createElement("div",null,"isDirty:",e?"dirty":"clean"),n.createElement("div",null,"isValid:",o?"valid":"invalid"))},args:{name:"parent-form"}},T={render:i=>{const t=h.useRef(null),e=async()=>{const r=await t.current.jbCheckValidity({showError:!0});oe(r).forEach(s=>{s.animate([{transform:"rotate(0deg)",display:"block"},{transform:"rotate(2deg)",display:"block"},{transform:"rotate(-2deg)",display:"block"},{transform:"rotate(0deg)",display:"block"}],{duration:100,iterations:10,fill:"auto"})})};return n.createElement(F,{ref:t,...i,style:{display:"flex",flexDirection:"column",gap:"1rem"}},n.createElement(F,{name:"personForm"},n.createElement(O,null)),n.createElement("hr",null),n.createElement(F,{name:"bank-form"},n.createElement(be,null)),n.createElement(p,{onClick:e},"shake invalids"))},args:{name:"parent-form"}};var G,K,Q;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(se=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const it=["Normal","FormTest","FormTreeTest","SpotInvalidElementTest"];export{L as FormTest,M as FormTreeTest,j as Normal,T as SpotInvalidElementTest,it as __namedExportsOrder,tt as default};
