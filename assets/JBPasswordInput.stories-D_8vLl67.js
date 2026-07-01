import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{a as r,n as i,ot as a,r as o,t as s}from"./iframe-Sdk7KWEq.js";import{r as c,t as l}from"./jb-input-ORVtL0y5.js";import{n as u,r as d,t as f}from"./react-DNC_2a7Z2.js";var p,m,h=t((()=>{l(),o(),p=new i({fa:{lengthValidation:e=>`گذرواژه شما حداقل میبایست ${e} کارکتر باشد`},en:{lengthValidation:e=>`Password must contain at least ${e} character`}}),m=class extends c{#e;#t=null;get minLength(){return this.#t}set minLength(e){if(e==null)return this.#t=null,void this.checkValidity();let t=Number(e);Number.isNaN(t)?console.error(`minLength value is not a valid number`):(this.#t=t,this.checkValidity())}constructor(){super(),this.#n()}#n(){let e=document.createElement(`template`);e.innerHTML=`<style>.jb-input-web-component .input-box input::-ms-reveal{display:none}.password-trigger{width:auto;height:100%;padding:var(--inline-slots-padding);cursor:pointer;box-sizing:border-box;display:block}.password-trigger svg{stroke-linecap:round;stroke-linejoin:round;width:100%;height:100%;transition:all .2s}.password-trigger svg.password-visible .eye-line{stroke:var(--active-eye-color);d:path("M 10 60 C 30 20 100 20 110 60")}.password-trigger svg.password-visible circle{opacity:1;transition:all .2s .2s;transform:translate(8px)}:host([direction=ltr]) :is(.password-trigger svg.password-visible circle){transform:translate(-8px)}.password-trigger svg .eye-line{stroke-width:14px;stroke:var(--eye-color);fill:none;stroke-linecap:round;stroke-linejoin:round;d:path("M 0 60 C 40 100 80 100 120 60");transition:all .3s}.password-trigger svg circle{fill:var(--active-eye-color);opacity:0;transition:all .3s} :host{--active-eye-color:var(--jb-password-input-active-eye-color,var(--jb-primary));--eye-color:var(--jb-password-input-eye-color,var(--jb-neutral-7))}</style>`,this.shadowRoot?.appendChild(e.content.cloneNode(!0)),this.elements.slots.endSection.innerHTML=`
  <div class="password-trigger">
    <svg viewBox="0 0 120 120">
        <path class="eye-line" stroke-linecap="round" ></path>
        <circle cx="60" cy="60" r="20"></circle>
    </svg>
  </div>
  `,this.elements.input.setAttribute(`type`,`password`),this.#e={passwordTrigger:this.shadowRoot.querySelector(`.password-trigger`)},this.validation.addValidationListGetter(this.#a.bind(this)),this.#r()}#r(){this.#e.passwordTrigger.addEventListener(`click`,this.#o.bind(this))}static get observedAttributes(){return[...c.observedAttributes]}attributeChangedCallback(e,t,n){[`type`].includes(e)?this.#i(e,n):this.onAttributeChange(e,n)}#i(e,t){}#a(){let e=[];if(this.minLength!==null){let t={validator:({value:e})=>e.length>=(this.minLength??0),message:p.get(r,`lengthValidation`)(this.minLength)};e.push(t)}return e}#o(){this.isPasswordVisible=!this.isPasswordVisible;let e=this.elements.input,t=this.#e.passwordTrigger.querySelector(`svg`);this.isPasswordVisible?(t.classList.add(`password-visible`),e.setAttribute(`type`,`text`)):(t.classList.remove(`password-visible`),e.setAttribute(`type`,`password`))}},customElements.get(`jb-password-input`)||window.customElements.define(`jb-password-input`,m)})),g=t((()=>{h(),h()})),_,v,y=t((()=>{_=n(a(),1),f(),g(),v=_.forwardRef(((e,t)=>{let n=(0,_.useRef)(null);(0,_.useImperativeHandle)(t,(()=>n.current??void 0),[n]);let{onBeforeinput:r,onBlur:i,onChange:a,onEnter:o,onFocus:s,onInput:c,onKeydown:l,onKeyup:f,size:p,disabled:m,error:h,inputmode:g,label:v,message:y,name:b,placeholder:x,required:S,type:C,validationList:w,value:T,autocomplete:E,...D}=e,O={label:v,message:y,name:b,placeholder:x,size:p,type:C,error:h,inputmode:g,autocomplete:E};return d(n,{onBeforeinput:r,onBlur:i,onChange:a,onEnter:o,onFocus:s,onInput:c,onKeydown:l,onKeyup:f,...D}),u(n,{disabled:m,required:S,validationList:w,value:T,...D}),(0,_.useEffect)((()=>{n.current&&(n.current.minLength=e.minLength??null)}),[e.minLength]),_.createElement(`jb-password-input`,{ref:n,...O,...D},e.children)})),v.displayName=`JBPasswordInput`})),b=t((()=>{y()})),x=e({MinimumLength:()=>T,Normal:()=>w,Sizes:()=>E,__namedExportsOrder:()=>D,default:()=>C}),S,C,w,T,E,D,O=t((()=>{a(),b(),S=s(),C={title:`Components/form elements/Inputs/JBPasswordInput`,component:v},w={args:{label:`password`,message:`simple password input`}},T={args:{label:`with minimum length`,message:`enter value with less than 8 char to see error`,minLength:8}},E={render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,S.jsx)(v,{label:`xl`,size:`xl`}),(0,S.jsx)(v,{label:`lg`,size:`lg`}),(0,S.jsx)(v,{label:`md`,size:`md`}),(0,S.jsx)(v,{label:`sm`,size:`sm`}),(0,S.jsx)(v,{label:`xs`,size:`xs`})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'password',
    message: "simple password input"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with minimum length',
    message: "enter value with less than 8 char to see error",
    minLength: 8
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Normal`,`MinimumLength`,`Sizes`]}));O();export{T as MinimumLength,w as Normal,E as Sizes,D as __namedExportsOrder,C as default,O as n,x as t};