import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{a as r,n as i,ot as a,r as o}from"./iframe-B40dur4B.js";import{n as s,t as c}from"./jb-core-mHSQ7_YN.js";import{r as l,t as u}from"./jb-input-MLp3EQ99.js";var d,f,p=t((()=>{u(),c(),o(),d=new i({fa:{invalidValue:`کد ملی وارد شده نامعتبر است`},en:{invalidValue:`The entered national code is invalid`}}),f=class extends l{constructor(){super(),this.initMobileInputWebComponent()}initMobileInputWebComponent(){let e=document.createElement(`template`);e.innerHTML=`<style>.jb-input-web-component{--jb-input-input-direction:var(--jb-national-input-input-direction,ltr)}</style>`,this.shadowRoot.appendChild(e.content.cloneNode(!0)),this.validation.addValidationListGetter(this.#r.bind(this)),this.#t(),this.addStandardValueCallback(this.#e.bind(this))}#e(e){let t=``,n=``,r=/(?<nationalId>[\u06F0-\u06F90-9]{1,10})/g.exec(e);return t=r?.groups?r.groups.nationalId:``,n=s(t),{value:n,displayValue:t}}#t(){this.elements.input.addEventListener(`beforeinput`,this.#n.bind(this))}#n(e){let t=e.data;/[\u06F0-\u06F90-9]{1,10}/g.test(t??``)||e.inputType==`deleteContentBackward`||e.preventDefault()}#r(){return[{validator:({value:e})=>function(e){if(e.length===0)return!0;let t=s(e);if(!/^\d{10}$/.test(t))return!1;let n=+t[9],r=t.split(``).slice(0,9).reduce(((e,t,n)=>e+t*(10-n)),0)%11;return r<2?n===r:n+r===11}(e),message:d.get(r,`invalidValue`),stateType:`badInput`}]}},customElements.get(`jb-national-input`)||window.customElements.define(`jb-national-input`,f)})),m=t((()=>{p()}));function h(e,t,n,r=!1){let i=(0,v.useCallback)((t=>{e.current&&typeof n==`function`&&n(t)}),[e,n]);(0,v.useEffect)((()=>{let n=e.current;return n&&n.addEventListener(t,i,{passive:r,capture:!1}),function(){n&&n.removeEventListener(t,i,{passive:r,capture:!1})}}),[e,t,n,r])}function g(e,t){h(e,`enter`,t.onEnter),h(e,`input`,t.onInput),h(e,`beforeinput`,t.onBeforeinput),h(e,`change`,t.onChange),h(e,`keydown`,t.onKeydown),h(e,`keyup`,t.onKeyup),h(e,`focus`,t.onFocus),h(e,`blur`,t.onBlur)}function _(e,t){(0,v.useEffect)((()=>{let n=t.value;t.value!=null&&t.value!==void 0||(n=``),e&&e.current&&e.current&&(e.current.value=n?.toString()||``)}),[t.value]),(0,v.useEffect)((()=>{e&&e.current&&(e.current.validation.list=t.validationList||[])}),[t.validationList]),(0,v.useEffect)((()=>{typeof t.disabled==`boolean`&&t.disabled?e?.current?.setAttribute(`disabled`,``):e?.current?.removeAttribute(`disabled`)}),[t.disabled]),(0,v.useEffect)((()=>{typeof t.required==`string`&&e?.current?.setAttribute(`required`,t.required),typeof t.required==`boolean`&&(t.required?e?.current?.setAttribute(`required`,``):e?.current?.removeAttribute(`required`))}),[t.required])}var v,y,b,x=t((()=>{v=n(a(),1),m(),u(),y=(0,v.forwardRef)(((e,t)=>{let n=(0,v.useRef)(null);(0,v.useImperativeHandle)(t,(()=>n?n.current:void 0),[n]);let{onBeforeinput:r,onBlur:i,onChange:a,onEnter:o,onFocus:s,onInput:c,onKeydown:l,onKeyup:u,size:d,autocomplete:f,disabled:p,error:m,inputmode:h,label:y,message:b,name:x,placeholder:S,required:C,type:w,validationList:T,value:E,...D}=e,O={label:y,message:b,name:x,placeholder:S,size:d,type:w,error:m,inputmode:h,autocomplete:f};return g(n,{onBeforeinput:r,onBlur:i,onChange:a,onEnter:o,onFocus:s,onInput:c,onKeydown:l,onKeyup:u}),_(n,{disabled:p,required:C,validationList:T,value:E}),v.createElement(`jb-input`,{ref:n,...O,...D},e.children)})),y.displayName=`JBInput`,b=v.forwardRef(((e,t)=>{let n=(0,v.useRef)(null);(0,v.useImperativeHandle)(t,(()=>n.current??void 0),[n]);let{disabled:r,required:i,validationList:a,value:o,children:s,onBeforeinput:c,onBlur:l,onChange:u,onEnter:d,onFocus:f,onInput:p,onKeydown:m,onKeyup:h,...y}=e;return _(n,{disabled:r,required:i,validationList:a,value:o,...y}),g(n,{onBeforeinput:c,onBlur:l,onChange:u,onEnter:d,onFocus:f,onInput:p,onKeydown:m,onKeyup:h,...y}),v.createElement(`jb-national-input`,{ref:n,...y},s)})),b.displayName=`JBNationalInput`})),S=t((()=>{x()}));function C(e,t=0){let n=e.querySelectorAll(`jb-national-input`)[t];return E(n).toBeTruthy(),E(n.shadowRoot).toBeTruthy(),n}function w(e){let t=e.shadowRoot?.querySelector(`input`);return E(t).toBeTruthy(),t}function T(e){return e.shadowRoot?.querySelector(`.message-box`)?.textContent??``}var E,D=t((()=>{({expect:E}=__STORYBOOK_MODULE_TEST__)})),O=e({Normal:()=>N,__namedExportsOrder:()=>P,default:()=>M}),k,A,j,M,N,P,F=t((()=>{S(),D(),{expect:k,userEvent:A,waitFor:j}=__STORYBOOK_MODULE_TEST__,M={title:`Components/form elements/Inputs/JBNationalInput`,component:b},N={args:{label:`national id`,message:`please enter your national code`},play:async({canvasElement:e,args:t})=>{let n=C(e),r=w(n);await A.type(r,`abc0012345679123`),await j(()=>{k(n.value).toBe(`0012345679`),k(n.displayValue).toBe(`0012345679`),k(r.value).toBe(`0012345679`),k(n.reportValidity()).toBe(!0),k(T(n)).toBe(t.message)}),r.focus(),await A.keyboard(`{Control>}a{/Control}{Backspace}`),await A.type(r,`0012345678`),await j(()=>{k(n.value).toBe(`0012345678`),k(n.reportValidity()).toBe(!1),k(T(n)).toBe(`The entered national code is invalid`),k(n.hasState(`invalid`)).toBe(!0)}),r.focus(),await A.keyboard(`{Control>}a{/Control}{Backspace}`),await A.type(r,`۰۰۱۲۳۴۵۶۷۹`),await j(()=>{k(n.value).toBe(`0012345679`),k(n.displayValue).toBe(`۰۰۱۲۳۴۵۶۷۹`),k(n.reportValidity()).toBe(!0),k(n.hasState(`invalid`)).toBe(!1)})}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'national id',
    message: "please enter your national code"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const nationalInput = getNationalInput(canvasElement);
    const nativeInput = getNativeInput(nationalInput);
    await userEvent.type(nativeInput, 'abc0012345679123');
    await waitFor(() => {
      expect(nationalInput.value).toBe('0012345679');
      expect(nationalInput.displayValue).toBe('0012345679');
      expect(nativeInput.value).toBe('0012345679');
      expect(nationalInput.reportValidity()).toBe(true);
      expect(getMessageText(nationalInput)).toBe(args.message);
    });
    nativeInput.focus();
    await userEvent.keyboard('{Control>}a{/Control}{Backspace}');
    await userEvent.type(nativeInput, '0012345678');
    await waitFor(() => {
      expect(nationalInput.value).toBe('0012345678');
      expect(nationalInput.reportValidity()).toBe(false);
      expect(getMessageText(nationalInput)).toBe('The entered national code is invalid');
      expect(nationalInput.hasState('invalid')).toBe(true);
    });
    nativeInput.focus();
    await userEvent.keyboard('{Control>}a{/Control}{Backspace}');
    await userEvent.type(nativeInput, '۰۰۱۲۳۴۵۶۷۹');
    await waitFor(() => {
      expect(nationalInput.value).toBe('0012345679');
      expect(nationalInput.displayValue).toBe('۰۰۱۲۳۴۵۶۷۹');
      expect(nationalInput.reportValidity()).toBe(true);
      expect(nationalInput.hasState('invalid')).toBe(false);
    });
  }
}`,...N.parameters?.docs?.source}}},P=[`Normal`]}));F();export{N as Normal,P as __namedExportsOrder,M as default,F as n,O as t};