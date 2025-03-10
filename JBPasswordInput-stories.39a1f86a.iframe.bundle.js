"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[44],{"../../web-component/jb-core/react/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_q:()=>r});var react=__webpack_require__("./node_modules/react/index.js");function r(n,u,c,l=!1){let o=(0,react.useCallback)((e=>{n.current&&"function"==typeof c&&c(e)}),[n,c]);(0,react.useEffect)((()=>{let e=n.current;return e&&e.addEventListener(u,o,{passive:l,capture:!1}),function(){e&&e.removeEventListener(u,o,{passive:l,capture:!1})}}),[n,u,c,l])}},"../../web-component/jb-input/react/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V$:()=>c,_O:()=>a,zH:()=>l});var react=__webpack_require__("./node_modules/react/index.js"),jb_core_react=(__webpack_require__("../../web-component/jb-input/index.js"),__webpack_require__("../../web-component/jb-core/react/index.js"));function l(e,t){(0,jb_core_react._q)(e,"enter",t.onEnter),(0,jb_core_react._q)(e,"input",t.onInput),(0,jb_core_react._q)(e,"beforeinput",t.onBeforeinput),(0,jb_core_react._q)(e,"change",t.onChange),(0,jb_core_react._q)(e,"keydown",t.onKeydown),(0,jb_core_react._q)(e,"keyup",t.onKeyup),(0,jb_core_react._q)(e,"focus",t.onFocus),(0,jb_core_react._q)(e,"blur",t.onBlur)}function a(e,t){(0,react.useEffect)((()=>{let r=t.value;(null==t.value||void 0===t.value)&&(r=""),e&&e.current&&e.current&&(e.current.value=r?.toString()||"")}),[t.value]),(0,react.useEffect)((()=>{t.type&&e?.current?.setAttribute("type",t.type)}),[t.type]),(0,react.useEffect)((()=>{e?.current?.setAttribute("name",t.name||"")}),[t.name]),(0,react.useEffect)((()=>{e&&e.current&&(e.current.validation.list=t.validationList||[])}),[t.validationList]),(0,react.useEffect)((()=>{e?.current?.setAttribute("label",t.label||"")}),[t.label]),(0,react.useEffect)((()=>{"boolean"==typeof t.disabled&&e?.current?.setAttribute("disabled",`${t.disabled}`)}),[t.disabled]),(0,react.useEffect)((()=>{"boolean"==typeof t.required&&e?.current?.setAttribute("required",`${t.required}`)}),[t.required]),(0,react.useEffect)((()=>{t.inputmode?e.current?.setAttribute("inputmode",t.inputmode):e.current?.removeAttribute("inputmode")}),[t.inputmode]),(0,react.useEffect)((()=>{e?.current?.setAttribute("message",t.message||"")}),[t.message]),(0,react.useEffect)((()=>{e?.current?.setAttribute("placeholder",t.placeholder||"")}),[t.placeholder])}let c=(0,react.forwardRef)(((t,o)=>{let c=(0,react.useRef)(null),[p,s]=(0,react.useState)(0);return(0,react.useImperativeHandle)(o,(()=>c?c.current:{}),[c]),(0,react.useEffect)((()=>{s(p+1)}),[c.current]),l(c,t),a(c,t),react.createElement("jb-input",{ref:c,class:t.className},t.children)}));c.displayName="JBInput"},"./stories/JBPasswordInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Normal:()=>Normal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>JBPasswordInput_stories});var react=__webpack_require__("./node_modules/react/index.js"),jb_input_react=__webpack_require__("../../web-component/jb-input/react/index.js"),jb_input=__webpack_require__("../../web-component/jb-input/index.js");function e(t,e,s,i){if("a"===s&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?i:"a"===s?i.call(t):i?i.value:e.get(t)}function s(t,e,s,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(t,s):r?r.value=s:e.set(t,s),s}const i={validator:({value:t})=>t.length>7,message:"طول گذرواژه حداقل باید 8 کارکتر باشد"};var r,n,o,a,l,d,p,c,h=class extends jb_input.W{get level(){return e(this,o,"f")}set level(t){s(this,o,t,"f")}constructor(){super(),r.add(this),n.set(this,void 0),o.set(this,"NONE"),e(this,r,"m",a).call(this)}static get observedAttributes(){return[...jb_input.W.observedAttributes]}attributeChangedCallback(t,s,i){["type"].includes(t)?e(this,r,"m",d).call(this,t,i):this.onAttributeChange(t,i)}};n=new WeakMap,o=new WeakMap,r=new WeakSet,a=function(){const t=document.createElement("template");t.innerHTML='<style>.jb-input-web-component .input-box input::-ms-reveal{display:none}.password-trigger{display:block;height:28px;width:28px;margin:4px 0 4px 0px;margin-inline-end:8px;cursor:pointer}.password-trigger svg{width:100%;height:100%;stroke-linecap:round;stroke-linejoin:round;transition:.2s}.password-trigger svg.password-visible .eye-line{stroke:#00b600;d:path("M 10 60 C 30 20 100 20 110 60")}.password-trigger svg.password-visible circle{opacity:1;transition:.2s .2s;transform:translateX(8px)}:host([direction=ltr]) .password-trigger svg.password-visible circle{transform:translateX(-8px)}.password-trigger svg .eye-line{stroke-width:14px;stroke:#bbb;fill:none;stroke-linecap:round;stroke-linejoin:round;transition:.3s;d:path("M 0 60 C 40 100 80 100 120 60")}.password-trigger svg circle{fill:#00b600;opacity:0;transition:.3s 0s}</style>',this.shadowRoot.appendChild(t.content.cloneNode(!0)),this.elements.slots.endSection.innerHTML='<div class="password-trigger">\n    <svg viewBox="0 0 120 120">\n        <path class="eye-line" stroke-linecap="round"></path>\n        <circle cx="60" cy="60" r="20"></circle>\n    </svg>\n</div>',this.elements.input.setAttribute("type","password"),s(this,n,{passwordTrigger:this.shadowRoot.querySelector(".password-trigger")},"f"),this.validation.addValidationListGetter(e(this,r,"m",p).bind(this)),e(this,r,"m",l).call(this)},l=function(){e(this,n,"f").passwordTrigger.addEventListener("click",e(this,r,"m",c).bind(this))},d=function(t,e){},p=function(){return"BASIC"==e(this,o,"f")||"PRO"==e(this,o,"f")?[i]:[]},c=function(){this.isPasswordVisible=!this.isPasswordVisible;const t=this.elements.input,s=e(this,n,"f").passwordTrigger.querySelector("svg");this.isPasswordVisible?(s.classList.add("password-visible"),t.setAttribute("type","text")):(s.classList.remove("password-visible"),t.setAttribute("type","password"))},!customElements.get("jb-password-input")&&window.customElements.define("jb-password-input",h);let JBPasswordInput_o=react.forwardRef(((o,p)=>{let c=(0,react.useRef)(null),[i,u]=(0,react.useState)(0);return(0,react.useImperativeHandle)(p,(()=>c?c.current:void 0),[c]),(0,react.useEffect)((()=>{u(i+1)}),[c.current]),(0,jb_input_react._O)(c,o),(0,jb_input_react.zH)(c,o),(0,react.useEffect)((()=>{o.level&&"string"==typeof o.level&&(c.current.level=o.level)}),[o.level]),react.createElement("jb-password-input",{ref:c,class:o.className?o.className:""},o.children)}));JBPasswordInput_o.displayName="JBPasswordInput";const JBPasswordInput_stories={title:"Example/form elements/Inputs/JBPasswordInput",component:JBPasswordInput_o},Normal={args:{label:"password",message:"simple password input"}},__namedExportsOrder=["Normal"];Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'password',\n    message: \"simple password input\"\n  }\n}",...Normal.parameters?.docs?.source}}}}}]);