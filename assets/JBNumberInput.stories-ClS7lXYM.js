var Oe=Object.defineProperty;var _=t=>{throw TypeError(t)};var De=(t,s,e)=>s in t?Oe(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e;var G=(t,s,e)=>De(t,typeof s!="symbol"?s+"":s,e),D=(t,s,e)=>s.has(t)||_("Cannot "+e);var n=(t,s,e)=>(D(t,s,"read from private field"),e?e.call(t):s.get(t)),g=(t,s,e)=>s.has(t)?_("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,e),d=(t,s,e,r)=>(D(t,s,"write to private field"),r?r.call(t,e):s.set(t,e),e),c=(t,s,e)=>(D(t,s,"access private method"),e);import{r as m,R as h}from"./index-0yr9KlQE.js";import{s as K}from"./index-DYPPUC_5.js";import{c as Be,i as He}from"./index-BHpGtycm.js";import{l as qe,a as ze}from"./JBInput-B63KEhdx.js";import"./jb-validation-BFHHOeHY.js";import"./index-C1o-zhIV.js";import"./index-Dsu68ezD.js";function $e(t){if(t==null||t==null||t.trim().length==0)return!1;{let s=!isNaN(Number(t));if(!s){const e=Be(t);s=!isNaN(Number(e))}return s}}const _e={validator:({value:t})=>t.trim().length==0||$e(t),message:"مقدار وارد شده میبایست عدد باشد"};var u,v,f,w,S,E,C,o,je,Te,Ie,We,Me,H,q,Fe,Ae,Je,Le,x,Ge=(x=class extends K{constructor(){super();g(this,o);g(this,u,{maxValue:null,minValue:null,decimalPrecision:null,acceptNegative:!0});g(this,v,1);g(this,f,!1);g(this,w,",");g(this,S,!1);g(this,E,"");G(this,"numberInputElements");g(this,C,!1);c(this,o,Te).call(this)}get minValue(){return n(this,u).minValue}set minValue(e){if(e==null)return void(n(this,u).minValue=null);const r=Number(e);Number.isNaN(r)?console.error("min value is not a valid number"):n(this,u).minValue=r}get maxValue(){return n(this,u).maxValue}set maxValue(e){if(e==null)return void(n(this,u).maxValue=null);const r=Number(e);Number.isNaN(r)?console.error("max value is not a valid number"):n(this,u).maxValue=r}get decimalPrecision(){return n(this,u).decimalPrecision}set decimalPrecision(e){if(e==null)return void(n(this,u).decimalPrecision=null);const r=Number(e);Number.isNaN(r)?console.error("decimalPrecision value is not a valid number"):n(this,u).decimalPrecision=r}get acceptNegative(){return n(this,u).acceptNegative}set acceptNegative(e){n(this,u).acceptNegative=!!e}get step(){return n(this,v)}set step(e){e!=null?Number.isNaN(Number(e))?console.error("step must be a number"):d(this,v,e):d(this,v,null)}get showThousandSeparator(){return n(this,f)}set showThousandSeparator(e){const r=!!e;r!==n(this,f)&&(d(this,f,r),this.value=`${this.value}`)}get thousandSeparator(){return n(this,w)}set thousandSeparator(e){n(this,w)!==e&&(d(this,w,String(e)),this.value=`${this.value}`)}get showPersianNumber(){return n(this,S)}set showPersianNumber(e){d(this,S,!!e),this.value=`${this.value}`}get invalidNumberReplacement(){return n(this,E)}set invalidNumberReplacement(e){d(this,E,String(e))}get showControlButton(){return n(this,C)}set showControlButton(e){e!=n(this,C)&&(d(this,C,e),e===!0?c(this,o,Fe).call(this):e===!1&&c(this,o,Ae).call(this))}static get numberInputObservedAttributes(){return["thousand-separator","step","show-persian-number","min","max","decimal-precision","accept-negative","show-control-button"]}static get observedAttributes(){return[...K.observedAttributes,...x.numberInputObservedAttributes]}attributeChangedCallback(e,r,l){[...x.numberInputObservedAttributes,"type"].includes(e)?c(this,o,We).call(this,e,l):this.onAttributeChange(e,l)}increaseNumber(e=!1){const r=Number(this.value);if(isNaN(r))return;const l=n(this,v);this.value=`${c(this,o,q).call(this,r,l)}`,this.validation.checkValidity({showError:!0}),e&&c(this,o,H).call(this)}decreaseNumber(e=!1){const r=parseFloat(this.value);if(isNaN(r))return;const l=n(this,u)?n(this,v):1;let p=c(this,o,q).call(this,r,-1*l);!(p<0)||n(this,u)&&n(this,u).acceptNegative||(p=0),this.value=`${p}`,this.validation.checkValidity({showError:!0}),e&&c(this,o,H).call(this)}},u=new WeakMap,v=new WeakMap,f=new WeakMap,w=new WeakMap,S=new WeakMap,E=new WeakMap,C=new WeakMap,o=new WeakSet,je=function(){this.elements.input.addEventListener("beforeinput",c(this,o,Le).bind(this)),this.addEventListener("keydown",c(this,o,Je).bind(this))},Te=function(){const e=document.createElement("template");e.innerHTML="<style>.jb-input-web-component{--jb-input-input-direction:var(--jb-number-input-input-direction,ltr)}.jb-input-web-component .number-control-wrapper .number-control-buttons{cursor:pointer;height:100%;display:flex}.jb-input-web-component .number-control-wrapper .number-control-buttons .number-control-button{width:var(--jb-number-input-button-width,36px);text-align:center;height:100%}.jb-input-web-component .number-control-wrapper .number-control-buttons .increase-number-button{background:var(--jb-number-input-increase-button-bg,transparent);border:var(--jb-number-input-increase-button-border,none);border-radius:var(--jb-number-input-increase-button-border-radius,0);box-sizing:border-box}.jb-input-web-component .number-control-wrapper .number-control-buttons .increase-number-button .increase-icon{stroke:var(--increase-button-color);stroke-width:14px;width:100%;height:100%;display:block}.jb-input-web-component .number-control-wrapper .number-control-buttons .increase-number-button:hover .increase-icon{stroke:var(--increase-button-color-hover)}.jb-input-web-component .number-control-wrapper .number-control-buttons .decrease-number-button{border:var(--jb-number-input-decrease-button-border,none);border-radius:var(--jb-number-input-decrease-button-border-radius,0);background:var(--jb-number-input-decrease-button-bg,transparent);box-sizing:border-box}.jb-input-web-component .number-control-wrapper .number-control-buttons .decrease-number-button .decrease-icon{stroke:var(--decrease-button-color);stroke-width:14px;width:100%;height:100%;display:block}.jb-input-web-component .number-control-wrapper .number-control-buttons .decrease-number-button:hover .decrease-icon{stroke:var(--decrease-button-color-hover)} :host{--increase-button-color:var(--jb-number-input-increase-button-color,var(--jb-neutral-7));--increase-button-color-hover:var(--jb-number-input-increase-button-color-hover,oklch(from var(--jb-green)calc(l + .07)calc(c + .07)h));--decrease-button-color:var(--jb-number-input-decrease-button-color,var(--jb-neutral-7));--decrease-button-color-hover:var(--jb-number-input-decrease-button-color-hover,oklch(from var(--jb-red)calc(l + .07)calc(c + .07)h))}</style>",this.shadowRoot.appendChild(e.content.cloneNode(!0)),this.validation.addValidationListGetter(c(this,o,Me).bind(this)),this.elements.input.inputMode="numeric",this.numberInputElements={controlButtons:null},c(this,o,je).call(this),this.addStandardValueCallback(c(this,o,Ie).bind(this))},Ie=function(e,r,l,p){return(function(y,i,b,U){if(y=="-"&&i.acceptNegative==1)return{displayValue:y,value:"-0"};let a=y;b.useThousandSeparator&&(a=a.replace(new RegExp(`${b.thousandSeparator}`,"g"),""));const Re=a[0]=="-";a=Be(a).replace(/[^0-9.]/g,""),Re&&i.acceptNegative&&(a="-"+a);let N=Number(a);isNaN(N)&&(a=a.replace(/\u06F0/g,"0").replace(/\u06F1/g,"1").replace(/\u06F2/g,"2").replace(/\u06F3/g,"3").replace(/\u06F4/g,"4").replace(/\u06F5/g,"5").replace(/\u06F6/g,"6").replace(/\u06F7/g,"7").replace(/\u06F8/g,"8").replace(/\u06F9/g,"9"),N=parseFloat(a),isNaN(N)&&(a=b.invalidNumberReplacement)),U!=="INPUT"&&a.length!==0&&(i.maxValue&&N>i.maxValue&&(N=i.maxValue,a=`${i.maxValue}`),i.minValue&&N<i.minValue&&(N=i.minValue,a=`${i.minValue}`)),U!=="INPUT"&&a.endsWith(".")&&(a=a.substring(0,a.length-1));const[k,P]=a.split("."),z=P?P.length:0;if(i&&i.decimalPrecision!==null&&i.decimalPrecision!=null&&z&&z>i.decimalPrecision){const Ue=new RegExp(`^-?\\d+(?:\\.\\d{0,${i.decimalPrecision}})?`),O=a.match(Ue);O&&O[0]&&(a=O[0])}k.startsWith("0")&&k.length>1&&(a=a.substring(1)),k.startsWith("-")&&k.charAt(1)=="0"&&k.length>2&&(a="-"+a.substring(2)),U!=="INPUT"&&P&&P.endsWith("0")&&(a=a.replace(/(\.\d*?[1-9])0+|\.0+$/,"$1"));const B={displayValue:a,value:a};return b.useThousandSeparator&&(B.displayValue=a.replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),b.thousandSeparator)),b.showPersianNumber&&(B.displayValue=He(B.displayValue)),B})(e,n(this,u),{invalidNumberReplacement:n(this,E),thousandSeparator:n(this,w),useThousandSeparator:this.showThousandSeparator,showPersianNumber:n(this,S)},p)},We=function(e,r){switch(e){case"thousand-separator":r==""||r=="true"||r=="false"?this.showThousandSeparator=r==""||r==="true":(d(this,f,!0),d(this,w,r));break;case"step":this.step=Number(r);break;case"show-persian-number":this.showPersianNumber=r==""||r==="true";break;case"min":this.minValue=r;break;case"max":this.maxValue=r;break;case"decimal-precision":this.decimalPrecision=r;break;case"accept-negative":r!=""&&r!="true"&&r!="false"||(this.acceptNegative=r==""||r==="true");break;case"show-control-button":r!=""&&r!="true"&&r!="false"||(this.showControlButton=r==""||r==="true")}},Me=function(){return[_e]},H=function(){const e=new Event("change",{cancelable:!1});this.dispatchEvent(e)},q=function(e,r){const l=`${e}`.split(".")[1],p=`${r}`.split(".")[1],y=l?Math.pow(10,l.length+1):1,i=p?Math.pow(10,p.length+1):1,b=Math.max(y,i);return(e*b+r*b)/b},Fe=function(){const e=document.createElement("div");e.classList.add("number-control-wrapper"),e.innerHTML=`
  <div class="number-control-buttons">
    <div class="increase-number-button number-control-button">
        <svg class="increase-icon" viewBox="0 0 120 120">
            <path  stroke-linecap="round" d="M60,40 L60,80"></path>
            <path  stroke-linecap="round" d="M40,60 L80,60"></path>
        </svg>
    </div>
    <div class="decrease-number-button number-control-button">
        <svg class="decrease-icon" viewBox="0 0 120 120">
            <path  stroke-linecap="round" d="M40,60 L80,60"></path>
        </svg>
    </div>
  </div>
  `,e.querySelector(".increase-number-button").addEventListener("click",this.increaseNumber.bind(this,!0)),e.querySelector(".decrease-number-button").addEventListener("click",this.decreaseNumber.bind(this,!0)),this.elements.slots.endSection.appendChild(e),this.numberInputElements.controlButtons=e},Ae=function(){this.numberInputElements.controlButtons&&this.numberInputElements.controlButtons.remove()},Je=function(e){const r=e.key;r=="ArrowUp"&&(this.increaseNumber(!1),e.preventDefault()),r=="ArrowDown"&&(this.decreaseNumber(!1),e.preventDefault())},Le=function(e){const r=e.target.selectionEnd||0,l=e.target.selectionStart||0;let p=!1;e.inputType==="deleteContentBackward"||$e(e.data)||(p=!0,e.data!="."||n(this,u).decimalPrecision===0||this.value.indexOf(".")!=-1||r==0||l==0||n(this,u).decimalPrecision!==null&&this.value.substring(r).length>n(this,u).decimalPrecision||(p=!1),n(this,u).acceptNegative&&e.data[0]=="-"&&l==0&&(p=!1)),p&&e.preventDefault()},x);customElements.get("jb-number-input")||window.customElements.define("jb-number-input",Ge);let V=m.forwardRef((t,s)=>{let e=m.useRef(null),[r,l]=m.useState(0);return m.useImperativeHandle(s,()=>e?e.current:void 0,[e]),m.useEffect(()=>{l(r+1)},[e.current]),qe(e,t),ze(e,t),m.useEffect(()=>{e!=null&&e.current&&(e.current.minValue=t.minValue)},[t.minValue]),m.useEffect(()=>{e.current&&(e.current.maxValue=t.maxValue)},[t.maxValue]),m.useEffect(()=>{e.current&&t.acceptNegative!==void 0&&(e.current.acceptNegative=t.acceptNegative)},[t.acceptNegative]),m.useEffect(()=>{e.current&&(e.current.decimalPrecision=t.decimalPrecision)},[t.decimalPrecision]),m.useEffect(()=>{e.current&&typeof t.showControlButton=="boolean"&&(e.current.showControlButton=t.showControlButton)},[t.showControlButton]),m.useEffect(()=>{e.current&&typeof t.showThousandSeparator=="boolean"&&(e.current.showThousandSeparator=t.showThousandSeparator)},[t.showThousandSeparator]),m.useEffect(()=>{e.current&&typeof t.thousandSeparator=="string"&&(e.current.thousandSeparator=t.thousandSeparator)},[t.thousandSeparator]),m.useEffect(()=>{e.current&&typeof t.step=="number"&&(e.current.step=t.step)},[t.step]),m.useEffect(()=>{e.current&&typeof t.showPersianNumber=="boolean"&&(e.current.showPersianNumber=t.showPersianNumber)},[t.showPersianNumber]),h.createElement("jb-number-input",{ref:e,class:t.className},t.children)});V.displayName="JBNumberInput";const Ke=()=>h.createElement("div",{className:"input-wrapper"},h.createElement(V,{label:"تست",message:"این متن تست می باشد"})),at={title:"Components/form elements/Inputs/JBNumberInput",component:V},$={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",disabled:!1,onChange:t=>{console.log(`new number is ${t.target.value}`)}}},j={args:{label:"تعداد به عدد",message:"هر سه رقم با کاما جدا میگردند",showThousandSeparator:!0,onChange:t=>{console.log(`new number is ${t.target.value}`)}}},T={args:{label:"تعداد به عدد",message:"عدد بین 100 تا 10000",maxValue:1e4,minValue:100,onChange:t=>{console.log(`new number is ${t.target.value}`)}}},I={args:{label:"تعداد به عدد",message:"هر سه رقم با خط تیره جدا میگردند",acceptNegative:!1,showThousandSeparator:!0,thousandSeparator:"_",onChange:t=>{console.log(`new number is ${t.target.value}`)}}},W={args:{label:"عددی با دکمه",message:"دکمه های +-",type:"number",showControlButton:!0,step:100,onChange:t=>{console.log(`new number is ${t.target.value}`)}}},M={args:{label:"type number",message:"type en number but user see persian char number",type:"number",showPersianNumber:!0,onChange:t=>{console.log(`new number is ${t.target.value}`)}}},F={args:{label:"show error",error:"error message"}},A={render:()=>h.createElement(Ke,null)},J={render:t=>h.createElement(V,{...t},h.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})),args:{label:"label",message:"static text under input show all the time",placeholder:"place holder"}},L={render:t=>h.createElement(V,{...t},h.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})),args:{label:"label",message:"static text under input show all the time",placeholder:"place holder"}},R={render:t=>h.createElement(V,{...t},h.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}),h.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})),args:{label:"label",message:"static text under input show all the time",placeholder:"place holder"}};var Q,X,Y;$.parameters={...$.parameters,docs:{...(Q=$.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    disabled: false,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(Y=(X=$.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'تعداد به عدد',
    message: 'هر سه رقم با کاما جدا میگردند',
    showThousandSeparator: true,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(te=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ne,ae;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    label: 'تعداد به عدد',
    message: 'عدد بین 100 تا 10000',
    maxValue: 10000,
    minValue: 100,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(ae=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,oe,ue;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'تعداد به عدد',
    message: 'هر سه رقم با خط تیره جدا میگردند',
    acceptNegative: false,
    showThousandSeparator: true,
    thousandSeparator: '_',
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(ue=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var ie,le,ce;W.parameters={...W.parameters,docs:{...(ie=W.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'عددی با دکمه',
    message: 'دکمه های +-',
    type: 'number',
    showControlButton: true,
    step: 100,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(ce=(le=W.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var me,pe,he;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    label: 'type number',
    message: 'type en number but user see persian char number',
    type: 'number',
    showPersianNumber: true,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(he=(pe=M.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var be,de,ge;F.parameters={...F.parameters,docs:{...(be=F.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    label: 'show error',
    error: 'error message'
  }
}`,...(ge=(de=F.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var ve,we,Ne;A.parameters={...A.parameters,docs:{...(ve=A.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <JBInputNumberTest></JBInputNumberTest>
}`,...(Ne=(we=A.parameters)==null?void 0:we.docs)==null?void 0:Ne.source}}};var fe,xe,Se;J.parameters={...J.parameters,docs:{...(fe=J.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: args => {
    return <JBNumberInput {...args}>
        <div slot="start-section" style={{
        width: '24px',
        height: '24px',
        backgroundColor: '#262626'
      }}></div>
      </JBNumberInput>;
  },
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder'
  }
}`,...(Se=(xe=J.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Ee,Ce,Ve;L.parameters={...L.parameters,docs:{...(Ee=L.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: args => {
    return <JBNumberInput {...args}>
        <div slot="end-section" style={{
        width: '24px',
        height: '24px',
        backgroundColor: '#262626'
      }}></div>
      </JBNumberInput>;
  },
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder'
  }
}`,...(Ve=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:Ve.source}}};var ye,ke,Pe;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => {
    return <JBNumberInput {...args}>
        <div slot="end-section" style={{
        width: '24px',
        height: '24px',
        backgroundColor: '#262626'
      }}></div>
        <div slot="start-section" style={{
        width: '24px',
        height: '24px',
        backgroundColor: '#262626'
      }}></div>
      </JBNumberInput>;
  },
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder'
  }
}`,...(Pe=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};const st=["Normal","NumberWithComma","NumberWithMinMax","NonNegativeNumberWithUnderlineSeparato","NumberWithButtons","NumberWithPersianChar","WithError","numberTest","WithStartSection","WithEndSection","WithStartAndEndSection"];export{I as NonNegativeNumberWithUnderlineSeparato,$ as Normal,W as NumberWithButtons,j as NumberWithComma,T as NumberWithMinMax,M as NumberWithPersianChar,L as WithEndSection,F as WithError,R as WithStartAndEndSection,J as WithStartSection,st as __namedExportsOrder,at as default,A as numberTest};
