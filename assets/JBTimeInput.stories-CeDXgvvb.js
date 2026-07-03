import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{a as r,n as i,ot as a,r as o,t as s}from"./iframe-B40dur4B.js";import{f as c,n as l,r as u,t as d}from"./jb-core-mHSQ7_YN.js";import{r as f,t as p}from"./react-ZxKTqUkA.js";import{r as m,t as h}from"./react-DKs-OYJ9.js";import{n as g,t as _}from"./jb-validation-W7g_ROyS.js";import{t as v}from"./jb-input-MLp3EQ99.js";import{t as y}from"./jb-popover-e_-N5CgW.js";import{t as b}from"./jb-time-picker-BqaWYdr-.js";var x,S,ee=t((()=>{b(),v(),y(),_(),d(),o(),x=new i({fa:{close:`بستن`},en:{close:`Close`}}),S=class extends HTMLElement{static get formAssociated(){return!0}get value(){return this.elements.input.value}set value(e){this.#N(e)&&(this.elements.input.value=e,this.#z())}get isAutoValidationDisabled(){return!(this.getAttribute(`disable-auto-validation`)!==``&&this.getAttribute(`disable-auto-validation`)!==`true`)}#e(e){if(!this.isAutoValidationDisabled)return this.#t.checkValidity({showError:e})}#t=new g({clearValidationError:this.clearValidationError.bind(this),getValue:this.#R.bind(this),getValidations:this.#B.bind(this),getValueString:()=>this.value,setValidationResult:this.#V.bind(this),showValidationError:this.showValidationError.bind(this)});get validation(){return this.#t}get#n(){let e=[2],t=[null,null],n=4;return this.secondEnabled&&(t=[6,7],e=[2,5],n=7),{dividerRange:e,hourRange:[0,1],minuteRange:[3,4],secondRange:t,maxCaretPos:n}}get hourString(){return this.elements.input.value.slice(this.#n.hourRange[0],this.#n.hourRange[1]+1)}get hour(){let e=this.hourString;return Number.isNaN(Number(e))&&(e=`0`),Number(e)}set hour(e){if(this.hour!==e){let t=e;t<0&&(t=0),t>24&&(t=24);let n=t>9?`${t}`:`0${t}`;this.elements.input.value=`${n}${this.elements.input.value.slice(this.#n.hourRange[1]+1)}`,this.#z(),this.updateTimePickerValue(t,this.minute,this.second)}}get minuteString(){return this.elements.input.value.slice(this.#n.minuteRange[0],this.#n.minuteRange[1]+1)}get minute(){let e=this.minuteString;return isNaN(Number(e))&&(e=`0`),parseInt(e)}set minute(e){if(this.minute!==e){let t=e;t<0&&(t=0),t>59&&(t=59);let n=t>9?`${t}`:`0${t}`;this.elements.input.value=`${this.elements.input.value.slice(0,this.#n.minuteRange[0])}${n}${this.elements.input.value.slice(this.#n.minuteRange[1]+1)}`,this.#z(),this.updateTimePickerValue(this.hour,t,this.second)}}get secondString(){return this.#n.secondRange[0]!==null&&this.#n.secondRange[1]!==null?this.elements.input.value.slice(this.#n.secondRange[0],this.#n.secondRange[1]+1):``}get second(){if(this.secondEnabled){let e=this.secondString;return isNaN(Number(e))&&(e=`0`),parseInt(e)}return null}set second(e){if(this.secondEnabled&&e!==null&&this.second!==e){let t=Math.floor(Number(e));t<0&&(t=0),t>59&&(t=59);let n=t>9?`${t}`:`0${t}`;this.#n.secondRange[0]&&(this.elements.input.value=`${this.elements.input.value.slice(0,this.#n.secondRange[0])}${n}`,this.#z(),this.updateTimePickerValue(this.hour,this.minute,t))}}#r=!1;get showTimePicker(){return this.#r}set showTimePicker(e){this.#r=e,e==1?this.elements.timePicker.wrapper.open():this.elements.timePicker.wrapper.close()}#i=!0;get secondEnabled(){return this.#i}set secondEnabled(e){typeof e==`boolean`&&(this.#i=e,this.elements.timePicker.component.secondEnabled=e,e==0?this.#I():this.#L())}#a=r.locale.numberingSystem==`arabext`;get showPersianNumber(){return this.#a}set showPersianNumber(e){this.#a=!!e,this.elements.timePicker.component.showPersianNumber=e,this.value=`${this.value}`}#o=null;#s=!1;get disabled(){return this.#s}set disabled(e){this.#s=e,this.elements.input.disabled=e,e?(this.#o?.states?.add(`disabled`),this.#o.ariaDisabled=`true`):(this.#o?.states?.delete(`disabled`),this.#o.ariaDisabled=`false`)}#c=!1;set required(e){this.#c=e,this.#t.checkValiditySync({showError:!1}),this.#o.ariaRequired=e?`true`:`false`}get required(){return this.#c}#l=null;set optionalUnits(e){this.elements.timePicker.component.optionalUnits=e}get optionalUnits(){return this.elements.timePicker.component.optionalUnits}set frontalZero(e){this.elements.timePicker.component.frontalZero=e}get frontalZero(){return this.elements.timePicker.component.frontalZero}constructor(){super(),typeof this.attachInternals==`function`&&(this.#o=this.attachInternals()),this.#f()}connectedCallback(){this.#u(),this.#m(),this.#d()}#u(){let e=new CustomEvent(`load`,{bubbles:!0,composed:!0});this.dispatchEvent(e)}#d(){let e=new CustomEvent(`init`,{bubbles:!0,composed:!0});this.dispatchEvent(e)}#f(){let e=this.attachShadow({mode:`open`,delegatesFocus:!0,clonable:!0,serializable:!0}),t=`<style>:host(:focus),:host(:focus-visible){outline:none}.jb-time-input-web-component{width:100%;margin:var(--jb-time-input-margin,12px 0);position:relative}.jb-time-input-web-component jb-popover{--jb-popover-top:4rem}.jb-time-input-web-component jb-popover .close-time-picker-button{border-radius:var(--close-button-border-radius);cursor:pointer;background-color:#2852bd00;border:none;width:auto;padding:8px 16px;font-family:inherit;transition:all .3s}.jb-time-input-web-component jb-popover .close-time-picker-button:hover{background-color:#2852bd0f}.jb-time-input-web-component jb-popover .close-time-picker-button:focus{outline:none} :host{--close-button-border-radius:var(--jb-time-input-close-button-border-radius,var(--jb-radius-xs))}</style>\n\n  <div class="jb-time-input-web-component" part="wrapper">\n    <jb-input disable-auto-validation part="input"></jb-input>\n    <jb-popover part="popover">\n        <jb-time-picker tabindex="0" part="time-picker"></jb-time-picker>\n        <button class="close-time-picker-button" part="close-button">${x.get(r,`close`)}</button>\n    </jb-popover>\n  </div>\n  `,n=document.createElement(`template`);n.innerHTML=t,e.appendChild(n.content.cloneNode(!0)),this.elements={input:e.querySelector(`jb-input`),timePicker:{wrapper:e.querySelector(`jb-popover`),component:e.querySelector(`jb-time-picker`),closeButton:e.querySelector(`.close-time-picker-button`)}},this.elements.input.setAttribute(`inputmode`,`none`),this.elements.input.setAttribute(`virtualkeyboardpolicy`,`manual`),this.#p()}#p(){this.elements.input.addEventListener(`keydown`,this.#b.bind(this)),this.elements.input.addEventListener(`keyup`,this.#O.bind(this)),this.elements.input.addEventListener(`change`,this.#A.bind(this)),this.elements.input.addEventListener(`keypress`,this.#E.bind(this)),this.elements.input.addEventListener(`beforeinput`,this.#w.bind(this),{}),this.elements.input.addEventListener(`focus`,this.#j.bind(this)),this.elements.input.addEventListener(`blur`,this.#M.bind(this)),this.elements.timePicker.component.addEventListener(`change`,this.#P.bind(this)),this.elements.timePicker.closeButton.addEventListener(`click`,(()=>{this.showTimePicker=!1})),this.elements.timePicker.component.addEventListener(`blur`,this.#F.bind(this))}#m(){this.#h(),this.elements.input.addEventListener(`init`,(()=>{this.elements.input.addStandardValueCallback(this.#v.bind(this))}))}#h(){let e=`00:00`;this.secondEnabled&&(e=`${e}:00`),this.value=e}static get observedAttributes(){return[`label`,`message`,`value`,`name`,`placeholder`,`autocomplete`,`readonly`,`disabled`,`required`,`error`,`size`,`close-button-text`,`frontal-zero`,`second-enabled`,`optional-units`,`show-persian-number`]}attributeChangedCallback(e,t,n){t!==n&&this.#g(e,n)}#g(e,t){switch(e){case`label`:this.elements.input.setAttribute(`label`,t??``),this.#o.ariaLabel=t??``;break;case`message`:this.elements.input.setAttribute(`message`,t??``),this.#o.ariaDescription=t??``;break;case`value`:this.value=t??``;break;case`name`:case`placeholder`:case`autocomplete`:case`readonly`:case`size`:t===null?this.elements.input.removeAttribute(e):this.elements.input.setAttribute(e,t);break;case`close-button-text`:this.elements.timePicker.closeButton.innerHTML=t??``;break;case`frontal-zero`:this.frontalZero=c(t,!1);break;case`second-enabled`:this.secondEnabled=c(t,!0);break;case`optional-units`:this.optionalUnits=this.#_(t);break;case`show-persian-number`:this.showPersianNumber=c(t,!1);break;case`disabled`:this.disabled=c(t,!1);break;case`required`:this.required=c(t,!1);break;case`error`:this.reportValidity()}}#_(e){return e?e.split(/[,\s]+/g).filter((e=>[`hour`,`minute`,`second`].includes(e))):[]}#v(e,t,n){let r=e;return this.showPersianNumber&&(r=u(r)),{displayValue:r,value:e}}addHour(e){let t=this.hour+e;this.hour=t}addMinute(e){let t=this.minute+e;this.minute=t}addSecond(e){let t=(this.second||0)+e;this.second=t}#y(e,t){let{dividerRange:n,hourRange:r,minuteRange:i,secondRange:a}=this.#n;if(!n.includes(t)||(t++,e!=`:`))if(r[0]!=t){if(r[1]==t){let t=isNaN(Number(this.elements.input.value[r[0]]))?`0`:this.elements.input.value[r[0]];this.hour=parseInt(t+e)}if(i[0]!=t){if(i[1]==t){let t=isNaN(Number(this.elements.input.value[i[0]]))?`0`:this.elements.input.value[i[0]];this.minute=parseInt(t+e)}if(this.secondEnabled){if(a[0]==t&&a[1]!==null){let t=isNaN(Number(this.elements.input.value[a[1]]))?`0`:this.elements.input.value[a[1]];this.second=parseInt(e+t);return}if(a[1]==t&&a[0]!==null){let t=isNaN(Number(this.elements.input.value[a[0]]))?`0`:this.elements.input.value[a[0]];this.second=parseInt(t+e)}}}else{let t=isNaN(Number(this.elements.input.value[i[1]]))?`0`:this.elements.input.value[i[1]];this.minute=parseInt(e+t)}}else{let t=isNaN(Number(this.elements.input.value[r[1]]))?`0`:this.elements.input.value[r[1]];this.hour=parseInt(e+t)}}#b(e){let{hourRange:t,minuteRange:n,secondRange:r}=this.#n,i=e.target.selectionStart;if(e.keyCode==38||e.keyCode==40){let a=0;e.keyCode==38&&(a=1),e.keyCode==40&&(a=-1),i!=null&&[...t,t[1]+1].includes(i)&&(this.elements.timePicker.component.setTimeUnitFocus(`hour`),this.addHour(a),this.elements.input.setSelectionRange(t[0],t[1]+1)),i&&[...n,n[1]+1].includes(i)&&(this.elements.timePicker.component.setTimeUnitFocus(`minute`),this.addMinute(a),this.elements.input.setSelectionRange(n[0],n[1]+1)),this.secondEnabled&&r[1]!==null&&[...r,r[1]+1].includes(i)&&(this.elements.timePicker.component.setTimeUnitFocus(`second`),this.addSecond(a),this.elements.input.setSelectionRange(r[0],r[1]+1)),e.preventDefault()}this.#x(e)}#x(e){let t={...e,cancelable:!1},n=new KeyboardEvent(`keydown`,t);this.dispatchEvent(n)}#S(e){this.#e(!1),this.#C(e)}#C(e){let t={...e,cancelable:!1},n=new InputEvent(`input`,t);this.dispatchEvent(n)}#w(e){let t=e.target,n=t.selectionStart||0,{dividerRange:r,hourRange:i,minuteRange:a,secondRange:o,maxCaretPos:s}=this.#n,c=e=>{if(!Number.isNaN(Number(e))){if(r.includes(n)&&(n++,t.setSelectionRange(n,n)),n>s&&(n=s),i.includes(n))if(this.elements.timePicker.component.setTimeUnitFocus(`hour`),n==i[0])if(e>`2`)this.hour=Number(e),n++;else{let t=isNaN(Number(this.elements.input.value[i[1]]))?`0`:this.elements.input.value[i[1]];this.hour=parseInt(e+t)}else{e>`4`&&this.elements.input.value[i[0]]==`2`&&(e=`4`);let t=Number.isNaN(Number(this.elements.input.value[i[0]]))?`0`:this.elements.input.value[i[0]];this.hour=parseInt(t+e)}a.includes(n)&&(this.elements.timePicker.component.setTimeUnitFocus(`minute`),n==a[0]&&e>`5`&&(this.#y(`0`,n),n++),this.#y(e,n)),this.secondEnabled&&o.includes(n)&&(this.elements.timePicker.component.setTimeUnitFocus(`second`),n==o[0]&&e>`5`&&(this.#y(`0`,n),n++),this.#y(e,n))}},u=l(e.data??``);if([`deleteContentBackward`,`deleteContentForward`,`delete`,`deleteByCut`,`deleteByDrag`].includes(e.inputType)){if(n==null||n==0)return;r.map((e=>e+1)).includes(n)||this.#y(`0`,n-1),e.target.setSelectionRange(n-1,n-1),e.preventDefault()}else if(typeof u==`string`){if(e.inputType==`insertText`){for(let e of u)c(e);t.setSelectionRange(n+1,n+1),e.preventDefault()}e.inputType==`insertFromPaste`&&(this.#T(u),e.preventDefault())}this.#S(e)}#T(e){let t=this.elements.input.selectionStart??0,{maxCaretPos:n}=this.#n,r=n+1-t;e.replace(/[^0-9:]/g,``).slice(0,r).split(``).forEach(((e,n)=>{this.#y(e,t+n)}))}#E(e){this.#D(e)}#D(e){let t={...e,cancelable:!1},n=new KeyboardEvent(`keypress`,t);this.dispatchEvent(n)}#O(e){let t={...e,cancelable:!1},n=new KeyboardEvent(`keyup`,t);this.dispatchEvent(n),e.keyCode==13&&this.#k()}#k(){let e=new CustomEvent(`enter`);this.dispatchEvent(e)}#A(){let e=this.value;this.#e(!0),this.#N(e)||(this.#l?this.value=this.#l:this.#h()),this.#l=this.value;let t=new Event(`change`);this.dispatchEvent(t)}#j(e){this.#l=this.value,this.showTimePicker=!0;let t=new FocusEvent(`focus`,{...e});this.dispatchEvent(t)}#M(e){e.relatedTarget!==this.elements.timePicker.component&&(this.showTimePicker=!1),this.#l!==this.value&&this.#A();let t=new FocusEvent(`blur`);this.dispatchEvent(t)}#N(e){let t;return t=this.secondEnabled?/^(?<hour>[01]\d|[2][01234]):(?<minute>[012345]\d):(?<second>[012345]\d)$/g:/^(?<hour>[01]\d|[2][01234]):(?<minute>[012345]\d)$/g,t.test(e)}showValidationError(e){this.elements.input.showValidationError(e)}clearValidationError(){this.elements.input.clearValidationError()}focus(){this.elements.input.focus()}#P(e){let{hour:t,minute:n,second:r}=e.target.value;this.hour=t,this.minute=n,this.secondEnabled&&(this.second=r??null)}#F(e){e.relatedTarget!==this.elements.input&&(this.showTimePicker=!1,this.#l!==this.value&&this.#A())}updateTimePickerValue(e,t,n){let r={hour:e,minute:t};this.secondEnabled&&n!=null&&(r.second=n),this.elements.timePicker.component.value=r}#I(){this.value=`${this.hourString}:${this.minuteString}`}#L(){this.value=`${this.hourString}:${this.minuteString}:${this.secondString}`}#R(){return{displayValue:this.elements.input.displayValue,value:this.elements.input.value,valueObject:{hour:this.hour,minute:this.minute,second:this.second}}}#z(){this.#o?.setFormValue(this.value)}#B(){let e=[],t=this.getAttribute(`error`);if(t&&t.trim().length>0&&e.push({validator:void 0,message:t,stateType:`customError`}),this.required){let t=this.getAttribute(`required`);e.push({validator:({value:e})=>this.#N(e),message:t&&![``,`true`].includes(t)?t:`Please enter a complete time`,stateType:`valueMissing`})}return e}checkValidity(){let e=this.#t.checkValiditySync({showError:!1});if(!e.isAllValid){let e=new CustomEvent(`invalid`);this.dispatchEvent(e)}return e.isAllValid}reportValidity(){let e=this.#t.checkValiditySync({showError:!0});if(!e.isAllValid){let e=new CustomEvent(`invalid`);this.dispatchEvent(e)}return e.isAllValid}#V(e){if(e.isAllValid)this.#o?.setValidity({},``);else{let t={},n=``;e.validationList.forEach((e=>{e.isValid||(e.validation.stateType&&(t[e.validation.stateType]=!0),n==``&&(n=e.message??``))})),this.#o?.setValidity(t,n)}}get validationMessage(){return this.#o?.validationMessage??``}},customElements.get(`jb-time-input`)||window.customElements.define(`jb-time-input`,S)})),C=t((()=>{ee()})),w,T,E=t((()=>{w=n(a(),1),C(),p(),T=w.forwardRef(((e,t)=>{let n=(0,w.useRef)(null);(0,w.useImperativeHandle)(t,(()=>n?n.current:void 0),[n]);let{onBeforeInput:r,onBlur:i,onChange:a,onEnter:o,onFocus:s,onInit:c,onInput:l,onKeyDown:u,onKeyPress:d,onKeyUp:p,onLoad:m,frontalZero:h,optionalUnits:g,secondEnabled:_,showPersianNumber:v,value:y,validationList:b,closeButtonText:x,label:S,message:ee,placeholder:C,children:T,...E}=e;return function(e,t){f(e,`load`,t.onLoad,!0),f(e,`init`,t.onInit,!0),f(e,`change`,t.onChange),f(e,`keydown`,t.onKeyDown),f(e,`input`,t.onInput),f(e,`keyup`,t.onKeyUp),f(e,`focus`,t.onFocus),f(e,`blur`,t.onBlur),f(e,`beforeinput`,t.onBeforeInput),f(e,`keypress`,t.onKeyPress),f(e,`enter`,t.onEnter)}(n,{onBeforeInput:r,onBlur:i,onChange:a,onEnter:o,onFocus:s,onInit:c,onInput:l,onKeyDown:u,onKeyPress:d,onKeyUp:p,onLoad:m}),function(e,t){(0,w.useEffect)((()=>{if(!e.current)return;let n=t.value??`00:00:00`;e.current.value=n}),[t.value,e]),(0,w.useEffect)((()=>{Array.isArray(t.validationList)&&e.current&&(e.current.validation.list=t.validationList)}),[t.validationList,e]),(0,w.useEffect)((()=>{e.current&&t.secondEnabled!==null&&t.secondEnabled!==void 0&&(e.current.secondEnabled=t.secondEnabled)}),[t.secondEnabled,e]),(0,w.useEffect)((()=>{e.current&&typeof t.frontalZero==`boolean`&&(e.current.frontalZero=t.frontalZero)}),[t.frontalZero,e]),(0,w.useEffect)((()=>{e.current&&Array.isArray(t.optionalUnits)&&(e.current.optionalUnits=t.optionalUnits)}),[t.optionalUnits,e]),(0,w.useEffect)((()=>{e.current&&t.showPersianNumber!==null&&t.showPersianNumber!==void 0&&(e.current.showPersianNumber=t.showPersianNumber)}),[t.showPersianNumber,e])}(n,{frontalZero:h,optionalUnits:g,secondEnabled:_,showPersianNumber:v,value:y,validationList:b}),w.createElement(`jb-time-input`,{ref:n,"close-button-text":x??void 0,label:S??void 0,message:ee??void 0,placeholder:C??void 0,...E},T)})),T.displayName=`JBTimeInput`})),te=t((()=>{E()}));function D(e,t=0){let n=e.querySelectorAll(`jb-time-input`)[t];return N(n).toBeTruthy(),N(n.shadowRoot).toBeTruthy(),n}function O(e){let t=e.elements.input;return N(t).toBeTruthy(),N(t.shadowRoot).toBeTruthy(),t}function k(e){let t=O(e).shadowRoot?.querySelector(`input`);return N(t).toBeTruthy(),t}function ne(e){return O(e).shadowRoot?.querySelector(`.message-box`)?.textContent??``}function A(e){let t=e.elements.timePicker.component;return N(t).toBeTruthy(),N(t.shadowRoot).toBeTruthy(),t}function j(e,t,n){let r=e.shadowRoot?.querySelector(`.${F[n]} .${t}-text`);return N(r).toBeTruthy(),r}async function M(e,t){await P(()=>{N(e.value).toBe(t),N(k(e).value).toBe(O(e).displayValue)})}var N,P,F,re=t((()=>{({expect:N,waitFor:P}=__STORYBOOK_MODULE_TEST__),F={substitutePrevTime:`substitute-prev-time`,prevTime:`prev-time`,currentTime:`current-time`,nextTime:`next-time`,substituteNextTime:`substitute-next-time`}})),ie=e({EventTestPage:()=>J,FrontalZero:()=>Z,Normal:()=>U,OptionalMinute:()=>Q,PersianNumber:()=>W,RTLSample:()=>K,ValidationSample:()=>Y,WebComponentEventTestPage:()=>q,__namedExportsOrder:()=>$,default:()=>H,withValue:()=>G,withoutSecond:()=>X}),I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ae=t((()=>{I=n(a(),1),te(),re(),h(),L=s(),{expect:R,fn:z,userEvent:B,waitFor:V}=__STORYBOOK_MODULE_TEST__,H={title:`Components/form elements/Inputs/JBTimeInput`,component:T},U={args:{label:`time`},play:async({canvasElement:e})=>{let t=D(e);await M(t,`00:00:00`),await B.click(k(t)),await V(()=>{R(t.showTimePicker).toBe(!0),R(A(t).value).toEqual({hour:0,minute:0,second:0})})}},W={args:{label:`time`,showPersianNumber:!0},play:async({canvasElement:e})=>{let t=D(e),n=k(t),r=O(t);await B.click(n),n.setSelectionRange(0,n.value.length),await B.type(n,`123456`),await V(()=>{R(t.value).toBe(`12:34:56`),R(r.displayValue).toBe(`۱۲:۳۴:۵۶`),R(n.value).toBe(`۱۲:۳۴:۵۶`)})}},G={args:{label:`time`,value:`13:24:48`},play:async({canvasElement:e})=>{let t=D(e),n=A(t);await M(t,`13:24:48`),await V(()=>{R(n.value).toEqual({hour:13,minute:24,second:48})})}},K={args:{label:`زمان`,closeButtonText:`بستن`},parameters:{themes:{themeOverride:`rtl`}},play:async({canvasElement:e})=>{let t=D(e);await V(()=>{R(O(t).getAttribute(`label`)).toBe(`زمان`),R(t.elements.timePicker.closeButton.textContent).toBe(`بستن`)})}},q={render:()=>(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`jb-time-input`,{label:`date`}),(0,L.jsx)(`h3`,{children:`without second`}),(0,L.jsx)(`jb-time-input`,{"second-enabled":`false`})]}),play:async({canvasElement:e})=>{let t=D(e),n=D(e,1),r=[];t.addEventListener(`focus`,()=>r.push(`focus`)),t.addEventListener(`beforeinput`,()=>r.push(`beforeinput`)),t.addEventListener(`input`,()=>r.push(`input`)),t.addEventListener(`keydown`,()=>r.push(`keydown`)),t.addEventListener(`keypress`,()=>r.push(`keypress`)),t.addEventListener(`keyup`,()=>r.push(`keyup`)),t.addEventListener(`enter`,()=>r.push(`enter`)),t.addEventListener(`change`,()=>r.push(`change`)),t.addEventListener(`blur`,()=>r.push(`blur`));let i=k(t);await B.click(i),i.setSelectionRange(0,i.value.length),await B.type(i,`123456{Enter}`),i.blur(),await V(()=>{R(t.value).toBe(`12:34:56`),R(r).toEqual(R.arrayContaining([`focus`,`beforeinput`,`input`,`keydown`,`keypress`,`keyup`,`enter`,`change`,`blur`]))}),await V(()=>{R(n.secondEnabled).toBe(!1),R(n.value).toBe(`00:00`),R(n.second).toBeNull()})}},J={render:e=>{let[t,n]=(0,I.useState)(`00:00:00`);return(0,L.jsxs)(`div`,{children:[(0,L.jsx)(T,{...e,label:`event test`,value:t,onChange:t=>{e.onChange?.(t),n(t.target.value)}}),(0,L.jsxs)(`span`,{children:[`value:`,t]}),(0,L.jsx)(m,{onClick:()=>n(`12:48:00`),children:`set value to 12:48`})]})},args:{onChange:z()},play:async({canvasElement:e,args:t})=>{let n=D(e),r=Array.from(e.querySelectorAll(`button`)).find(e=>e.textContent?.includes(`12:48`));R(r).toBeTruthy(),await B.click(r),await V(()=>{R(n.value).toBe(`12:48:00`),R(e.textContent).toContain(`value:12:48:00`)});let i=k(n);await B.click(i),i.setSelectionRange(0,i.value.length),await B.type(i,`132500`),i.blur(),await V(()=>{R(n.value).toBe(`13:25:00`),R(t.onChange).toHaveBeenCalled(),R(e.textContent).toContain(`value:13:25:00`)})}},Y={args:{label:`time:`,validationList:[{validator:/^[1][1234].*$/g,message:`hour  must be between 11 and 14`},{validator:({displayValue:e,value:t,valueObject:n})=>!(n.minute&&n.minute<30),message:`minute must be 30 to 60`}]},play:async({canvasElement:e})=>{let t=D(e);await V(()=>{R(t.validation.list.length).toBe(2)}),t.value=`12:20:00`,R(t.reportValidity()).toBe(!1),await V(()=>{R(ne(t)).toBe(`minute must be 30 to 60`),R(t.validationMessage).toBe(`minute must be 30 to 60`)}),t.value=`12:30:00`,R(t.reportValidity()).toBe(!0),await V(()=>{R(ne(t)).not.toBe(`minute must be 30 to 60`)})}},X={args:{label:`time`,secondEnabled:!1},play:async({canvasElement:e})=>{let t=D(e),n=k(t);await M(t,`00:00`),R(t.secondEnabled).toBe(!1),R(t.second).toBeNull(),R(A(t).secondEnabled).toBe(!1),await B.click(n),n.setSelectionRange(0,n.value.length),await B.type(n,`123456`),await V(()=>{R(t.value).toBe(`12:34`),R(t.value.split(`:`)).toHaveLength(2),R(t.second).toBeNull()})}},Z={args:{label:`time`,closeButtonText:`بستن`,frontalZero:!0},play:async({canvasElement:e})=>{let t=D(e),n=A(t);await V(()=>{R(t.frontalZero).toBe(!0),R(j(n,`hour`,`currentTime`).textContent).toBe(`00`),R(j(n,`minute`,`currentTime`).textContent).toBe(`00`),R(j(n,`second`,`currentTime`).textContent).toBe(`00`)})}},Q={args:{label:`زمان`,closeButtonText:`بستن`,optionalUnits:[`minute`]},play:async({canvasElement:e})=>{let t=D(e),n=A(t);await V(()=>{R(t.optionalUnits).toEqual([`minute`]),R(j(n,`minute`,`currentTime`).classList.contains(`--optional`)).toBe(!0),R(j(n,`hour`,`currentTime`).classList.contains(`--optional`)).toBe(!1)})}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'time'
  },
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    await waitForInputValue(timeInput, '00:00:00');
    await userEvent.click(getNativeInput(timeInput));
    await waitFor(() => {
      expect(timeInput.showTimePicker).toBe(true);
      expect(getTimePicker(timeInput).value).toEqual({
        hour: 0,
        minute: 0,
        second: 0
      });
    });
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'time',
    showPersianNumber: true
  },
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    const nativeInput = getNativeInput(timeInput);
    const innerInput = getInnerInput(timeInput);
    await userEvent.click(nativeInput);
    nativeInput.setSelectionRange(0, nativeInput.value.length);
    await userEvent.type(nativeInput, '123456');
    await waitFor(() => {
      expect(timeInput.value).toBe('12:34:56');
      expect(innerInput.displayValue).toBe('\\u06F1\\u06F2:\\u06F3\\u06F4:\\u06F5\\u06F6');
      expect(nativeInput.value).toBe('\\u06F1\\u06F2:\\u06F3\\u06F4:\\u06F5\\u06F6');
    });
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'time',
    value: "13:24:48"
  },
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    const timePicker = getTimePicker(timeInput);
    await waitForInputValue(timeInput, '13:24:48');
    await waitFor(() => {
      expect(timePicker.value).toEqual({
        hour: 13,
        minute: 24,
        second: 48
      });
    });
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'زمان',
    closeButtonText: 'بستن'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    await waitFor(() => {
      expect(getInnerInput(timeInput).getAttribute('label')).toBe('زمان');
      expect(timeInput.elements.timePicker.closeButton.textContent).toBe('بستن');
    });
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <jb-time-input label="date"></jb-time-input>
      <h3>without second</h3>
      <jb-time-input second-enabled="false"></jb-time-input>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    const withoutSecondTimeInput = getTimeInput(canvasElement, 1);
    const events: string[] = [];
    timeInput.addEventListener('focus', () => events.push('focus'));
    timeInput.addEventListener('beforeinput', () => events.push('beforeinput'));
    timeInput.addEventListener('input', () => events.push('input'));
    timeInput.addEventListener('keydown', () => events.push('keydown'));
    timeInput.addEventListener('keypress', () => events.push('keypress'));
    timeInput.addEventListener('keyup', () => events.push('keyup'));
    timeInput.addEventListener('enter', () => events.push('enter'));
    timeInput.addEventListener('change', () => events.push('change'));
    timeInput.addEventListener('blur', () => events.push('blur'));
    const nativeInput = getNativeInput(timeInput);
    await userEvent.click(nativeInput);
    nativeInput.setSelectionRange(0, nativeInput.value.length);
    await userEvent.type(nativeInput, '123456{Enter}');
    nativeInput.blur();
    await waitFor(() => {
      expect(timeInput.value).toBe('12:34:56');
      expect(events).toEqual(expect.arrayContaining(['focus', 'beforeinput', 'input', 'keydown', 'keypress', 'keyup', 'enter', 'change', 'blur']));
    });
    await waitFor(() => {
      expect(withoutSecondTimeInput.secondEnabled).toBe(false);
      expect(withoutSecondTimeInput.value).toBe('00:00');
      expect(withoutSecondTimeInput.second).toBeNull();
    });
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('00:00:00');
    return <div>
        <JBTimeInput {...args} label="event test" value={value} onChange={event => {
        args.onChange?.(event);
        setValue(event.target.value);
      }} />
        <span>value:{value}</span>
        <JBButton onClick={() => setValue('12:48:00')}>set value to 12:48</JBButton>
      </div>;
  },
  args: {
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const timeInput = getTimeInput(canvasElement);
    const setValueButton = Array.from(canvasElement.querySelectorAll('button')).find(button => button.textContent?.includes('12:48'));
    expect(setValueButton).toBeTruthy();
    await userEvent.click(setValueButton!);
    await waitFor(() => {
      expect(timeInput.value).toBe('12:48:00');
      expect(canvasElement.textContent).toContain('value:12:48:00');
    });
    const nativeInput = getNativeInput(timeInput);
    await userEvent.click(nativeInput);
    nativeInput.setSelectionRange(0, nativeInput.value.length);
    await userEvent.type(nativeInput, '132500');
    nativeInput.blur();
    await waitFor(() => {
      expect(timeInput.value).toBe('13:25:00');
      expect(args.onChange).toHaveBeenCalled();
      expect(canvasElement.textContent).toContain('value:13:25:00');
    });
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'time:',
    validationList: [{
      validator: /^[1][1234].*$/g,
      message: "hour  must be between 11 and 14"
    }, {
      validator: ({
        displayValue,
        value,
        valueObject
      }) => {
        if (valueObject.minute && valueObject.minute < 30) {
          return false;
        }
        return true;
      },
      message: 'minute must be 30 to 60'
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    await waitFor(() => {
      expect(timeInput.validation.list.length).toBe(2);
    });
    timeInput.value = '12:20:00';
    expect(timeInput.reportValidity()).toBe(false);
    await waitFor(() => {
      expect(getMessageText(timeInput)).toBe('minute must be 30 to 60');
      expect(timeInput.validationMessage).toBe('minute must be 30 to 60');
    });
    timeInput.value = '12:30:00';
    expect(timeInput.reportValidity()).toBe(true);
    await waitFor(() => {
      expect(getMessageText(timeInput)).not.toBe('minute must be 30 to 60');
    });
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'time',
    secondEnabled: false
  },
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    const nativeInput = getNativeInput(timeInput);
    await waitForInputValue(timeInput, '00:00');
    expect(timeInput.secondEnabled).toBe(false);
    expect(timeInput.second).toBeNull();
    expect(getTimePicker(timeInput).secondEnabled).toBe(false);
    await userEvent.click(nativeInput);
    nativeInput.setSelectionRange(0, nativeInput.value.length);
    await userEvent.type(nativeInput, '123456');
    await waitFor(() => {
      expect(timeInput.value).toBe('12:34');
      expect(timeInput.value.split(':')).toHaveLength(2);
      expect(timeInput.second).toBeNull();
    });
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'time',
    closeButtonText: 'بستن',
    frontalZero: true
  },
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    const timePicker = getTimePicker(timeInput);
    await waitFor(() => {
      expect(timeInput.frontalZero).toBe(true);
      expect(getTimeText(timePicker, 'hour', 'currentTime').textContent).toBe('00');
      expect(getTimeText(timePicker, 'minute', 'currentTime').textContent).toBe('00');
      expect(getTimeText(timePicker, 'second', 'currentTime').textContent).toBe('00');
    });
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'زمان',
    closeButtonText: 'بستن',
    optionalUnits: ['minute']
  },
  play: async ({
    canvasElement
  }) => {
    const timeInput = getTimeInput(canvasElement);
    const timePicker = getTimePicker(timeInput);
    await waitFor(() => {
      expect(timeInput.optionalUnits).toEqual(['minute']);
      expect(getTimeText(timePicker, 'minute', 'currentTime').classList.contains('--optional')).toBe(true);
      expect(getTimeText(timePicker, 'hour', 'currentTime').classList.contains('--optional')).toBe(false);
    });
  }
}`,...Q.parameters?.docs?.source}}},$=[`Normal`,`PersianNumber`,`withValue`,`RTLSample`,`WebComponentEventTestPage`,`EventTestPage`,`ValidationSample`,`withoutSecond`,`FrontalZero`,`OptionalMinute`]}));ae();export{J as EventTestPage,Z as FrontalZero,U as Normal,Q as OptionalMinute,W as PersianNumber,K as RTLSample,Y as ValidationSample,q as WebComponentEventTestPage,$ as __namedExportsOrder,H as default,ae as n,ie as t,G as withValue,X as withoutSecond};