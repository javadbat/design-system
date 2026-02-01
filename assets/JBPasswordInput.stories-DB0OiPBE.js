var v=s=>{throw TypeError(s)};var h=(s,e,t)=>e.has(s)||v("Cannot "+t);var p=(s,e,t)=>(h(s,e,"read from private field"),t?t.call(s):e.get(s)),c=(s,e,t)=>e.has(s)?v("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),w=(s,e,t,i)=>(h(s,e,"write to private field"),i?i.call(s,t):e.set(s,t),t),o=(s,e,t)=>(h(s,e,"access private method"),t);import{R as n,r as b}from"./index-DwQS_Y10.js";import{o as se,l as te}from"./JBInput-D74Vik9B.js";import{o as y}from"./index-znC4IK4w.js";import{a as re,t as ie}from"./index-_b1slotr.js";import"./index-BJ5IkxrY.js";import"./jb-validation-DPnsTO1v.js";import"./index-BsliqPsk.js";import"./index-bfIR6bpK.js";const ne=new re({fa:{lengthValidation:s=>`گذرواژه شما حداقل میبایست ${s} کارکتر باشد`},en:{lengthValidation:s=>`Password must contain at least ${s} character`}});var l,d,r,C,J,S,V,A,f,ae=(f=class extends y{constructor(){super();c(this,r);c(this,l);c(this,d,null);o(this,r,C).call(this)}get minLength(){return p(this,d)}set minLength(e){w(this,d,e),this.checkValidity()}static get observedAttributes(){return[...y.observedAttributes]}attributeChangedCallback(e,t,i){["type"].includes(e)?o(this,r,S).call(this,e,i):this.onAttributeChange(e,i)}},l=new WeakMap,d=new WeakMap,r=new WeakSet,C=function(){const e=document.createElement("template");e.innerHTML='<style>.jb-input-web-component .input-box input::-ms-reveal{display:none}.password-trigger{width:auto;height:100%;padding:var(--inline-slots-padding);cursor:pointer;box-sizing:border-box;display:block}.password-trigger svg{stroke-linecap:round;stroke-linejoin:round;width:100%;height:100%;transition:all .2s}.password-trigger svg.password-visible .eye-line{stroke:var(--active-eye-color);d:path("M 10 60 C 30 20 100 20 110 60")}.password-trigger svg.password-visible circle{opacity:1;transition:all .2s .2s;transform:translate(8px)}:host([direction=ltr]) :is(.password-trigger svg.password-visible circle){transform:translate(-8px)}.password-trigger svg .eye-line{stroke-width:14px;stroke:var(--eye-color);fill:none;stroke-linecap:round;stroke-linejoin:round;d:path("M 0 60 C 40 100 80 100 120 60");transition:all .3s}.password-trigger svg circle{fill:var(--active-eye-color);opacity:0;transition:all .3s} :host{--active-eye-color:var(--jb-password-input-active-eye-color,var(--jb-primary));--eye-color:var(--jb-password-input-eye-color,var(--jb-neutral-7))}</style>',this.shadowRoot.appendChild(e.content.cloneNode(!0)),this.elements.slots.endSection.innerHTML=`
  <div class="password-trigger">
    <svg viewBox="0 0 120 120">
        <path class="eye-line" stroke-linecap="round" ></path>
        <circle cx="60" cy="60" r="20"></circle>
    </svg>
  </div>
  `,this.elements.input.setAttribute("type","password"),w(this,l,{passwordTrigger:this.shadowRoot.querySelector(".password-trigger")}),this.validation.addValidationListGetter(o(this,r,V).bind(this)),o(this,r,J).call(this)},J=function(){p(this,l).passwordTrigger.addEventListener("click",o(this,r,A).bind(this))},S=function(e,t){},V=function(){const e=[];if(this.minLength){const t={validator:({value:i})=>i.length>=this.minLength,message:ne.get(ie,"lengthValidation")(this.minLength)};e.push(t)}return e},A=function(){this.isPasswordVisible=!this.isPasswordVisible;const e=this.elements.input,t=p(this,l).passwordTrigger.querySelector("svg");this.isPasswordVisible?(t.classList.add("password-visible"),e.setAttribute("type","text")):(t.classList.remove("password-visible"),e.setAttribute("type","password"))},f);customElements.get("jb-password-input")||window.customElements.define("jb-password-input",ae);let a=n.forwardRef((s,e)=>{let t=b.useRef(null);b.useImperativeHandle(e,()=>t?t.current:void 0,[t]);let{onBeforeinput:i,onBlur:M,onChange:R,onEnter:N,onFocus:T,onInput:$,onKeydown:q,onKeyup:K,size:H,disabled:D,error:F,inputmode:_,label:G,message:O,name:Q,placeholder:U,required:W,type:X,validationList:Y,value:Z,...ee}=s;return se(t,{onBeforeinput:i,onBlur:M,onChange:R,onEnter:N,onFocus:T,onInput:$,onKeydown:q,onKeyup:K}),te(t,{disabled:D,required:W,validationList:Y,value:Z}),b.useEffect(()=>{t.current.minLength=s.minLength},[s.minLength]),n.createElement("jb-password-input",{ref:t,label:G,message:O,name:Q,placeholder:U,size:H,type:X,error:F,inputmode:_,...ee},s.children)});a.displayName="JBPasswordInput";const we={title:"Components/form elements/Inputs/JBPasswordInput",component:a},m={args:{label:"password",message:"simple password input"}},u={args:{label:"with minimum length",message:"enter value with less than 8 char to see error",minLength:8}},g={render:()=>n.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"}},n.createElement(a,{label:"xl",size:"xl"}),n.createElement(a,{label:"lg",size:"lg"}),n.createElement(a,{label:"md",size:"md"}),n.createElement(a,{label:"sm",size:"sm"}),n.createElement(a,{label:"xs",size:"xs"}))};var x,L,E;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'password',
    message: "simple password input"
  }
}`,...(E=(L=m.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var z,B,k;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'with minimum length',
    message: "enter value with less than 8 char to see error",
    minLength: 8
  }
}`,...(k=(B=u.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var I,P,j;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
        <JBPasswordInput label='xl' size='xl' />
        <JBPasswordInput label='lg' size='lg' />
        <JBPasswordInput label='md' size='md' />
        <JBPasswordInput label='sm' size='sm' />
        <JBPasswordInput label='xs' size='xs' />
      </div>;
  }
}`,...(j=(P=g.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};const be=["Normal","MinimumLength","Sizes"];export{u as MinimumLength,m as Normal,g as Sizes,be as __namedExportsOrder,we as default};
