var De=Object.defineProperty;var z=t=>{throw TypeError(t)};var _e=(t,s,e)=>s in t?De(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e;var G=(t,s,e)=>_e(t,typeof s!="symbol"?s+"":s,e),D=(t,s,e)=>s.has(t)||z("Cannot "+e);var n=(t,s,e)=>(D(t,s,"read from private field"),e?e.call(t):s.get(t)),g=(t,s,e)=>s.has(t)?z("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,e),d=(t,s,e,r)=>(D(t,s,"write to private field"),r?r.call(t,e):s.set(t,e),e),m=(t,s,e)=>(D(t,s,"access private method"),e);import{r as p,R as h}from"./index-D4lIrffr.js";import{x as K}from"./index-D1sQn8WD.js";import{i as Pe,r as He}from"./index-BEepDcv4.js";import{l as qe,a as ze}from"./JBInput-DevWXBJi.js";import"./jb-validation-BFHHOeHY.js";import"./index-B65NTg4l.js";function je(t){if(t==null||t==null||t.trim().length==0)return!1;{let s=!isNaN(Number(t));if(!s){const e=Pe(t);s=!isNaN(Number(e))}return s}}const Ge={validator:({value:t})=>t.trim().length==0||je(t),message:"مقدار وارد شده میبایست عدد باشد"};var u,v,f,w,S,E,y,o,$e,Te,Ie,We,Me,_,H,Fe,Je,Ae,Le,x,Ke=(x=class extends K{constructor(){super();g(this,o);g(this,u,{maxValue:null,minValue:null,decimalPrecision:null,acceptNegative:!0});g(this,v,1);g(this,f,!1);g(this,w,",");g(this,S,!1);g(this,E,"");G(this,"numberInputElements");g(this,y,!1);m(this,o,Te).call(this)}get minValue(){return n(this,u).minValue}set minValue(e){if(e==null)return void(n(this,u).minValue=null);const r=Number(e);Number.isNaN(r)?console.error("min value is not a valid number"):n(this,u).minValue=r}get maxValue(){return n(this,u).maxValue}set maxValue(e){if(e==null)return void(n(this,u).maxValue=null);const r=Number(e);Number.isNaN(r)?console.error("max value is not a valid number"):n(this,u).maxValue=r}get decimalPrecision(){return n(this,u).decimalPrecision}set decimalPrecision(e){if(e==null)return void(n(this,u).decimalPrecision=null);const r=Number(e);Number.isNaN(r)?console.error("decimalPrecision value is not a valid number"):n(this,u).decimalPrecision=r}get acceptNegative(){return n(this,u).acceptNegative}set acceptNegative(e){n(this,u).acceptNegative=!!e}get step(){return n(this,v)}set step(e){e!=null?Number.isNaN(Number(e))?console.error("step must be a number"):d(this,v,e):d(this,v,null)}get showThousandSeparator(){return n(this,f)}set showThousandSeparator(e){const r=!!e;r!==n(this,f)&&(d(this,f,r),this.value=`${this.value}`)}get thousandSeparator(){return n(this,w)}set thousandSeparator(e){n(this,w)!==e&&(d(this,w,String(e)),this.value=`${this.value}`)}get showPersianNumber(){return n(this,S)}set showPersianNumber(e){d(this,S,!!e),this.value=`${this.value}`}get invalidNumberReplacement(){return n(this,E)}set invalidNumberReplacement(e){d(this,E,String(e))}get showControlButton(){return n(this,y)}set showControlButton(e){e!=n(this,y)&&(d(this,y,e),e===!0?m(this,o,Fe).call(this):e===!1&&m(this,o,Je).call(this))}static get numberInputObservedAttributes(){return["thousand-separator","step","show-persian-number","min","max","decimal-precision","accept-negative","show-control-button"]}static get observedAttributes(){return[...K.observedAttributes,...x.numberInputObservedAttributes]}attributeChangedCallback(e,r,l){[...x.numberInputObservedAttributes,"type"].includes(e)?m(this,o,We).call(this,e,l):this.onAttributeChange(e,l)}increaseNumber(e=!1){const r=Number(this.value);if(isNaN(r))return;const l=n(this,v),c=m(this,o,H).call(this,r,l);this.value=`${c}`,this.validation.checkValidity({showError:!0}),e&&m(this,o,_).call(this)}decreaseNumber(e=!1){const r=parseFloat(this.value);if(isNaN(r))return;const l=n(this,u)?n(this,v):1;let c=m(this,o,H).call(this,r,-1*l);!(c<0)||n(this,u)&&n(this,u).acceptNegative||(c=0),this.value=`${c}`,this.validation.checkValidity({showError:!0}),e&&m(this,o,_).call(this)}},u=new WeakMap,v=new WeakMap,f=new WeakMap,w=new WeakMap,S=new WeakMap,E=new WeakMap,y=new WeakMap,o=new WeakSet,$e=function(){this.elements.input.addEventListener("beforeinput",m(this,o,Le).bind(this)),this.addEventListener("keydown",m(this,o,Ae).bind(this))},Te=function(){const e=document.createElement("template");e.innerHTML="<style>:host{--increase-button-color:var(--jb-number-input-increase-button-color, var(--jb-neutral-7));--increase-button-color-hover:var(--jb-number-input-increase-button-color-hover, oklch(from var(--jb-green) calc(l + 0.07) calc(c + 0.07) h));--decrease-button-color:var(--jb-number-input-decrease-button-color, var(--jb-neutral-7));--decrease-button-color-hover:var(--jb-number-input-decrease-button-color-hover, oklch(from var(--jb-red) calc(l + 0.07) calc(c + 0.07) h)) }.jb-input-web-component{--jb-input-input-direction: var(--jb-number-input-input-direction, ltr)}.jb-input-web-component .number-control-wrapper .number-control-buttons{display:flex;height:100%;cursor:pointer}.jb-input-web-component .number-control-wrapper .number-control-buttons .number-control-button{width:var(--jb-number-input-button-width, 36px);height:100%;text-align:center}.jb-input-web-component .number-control-wrapper .number-control-buttons .increase-number-button{background:var(--jb-number-input-increase-button-bg, transparent);border:var(--jb-number-input-increase-button-border, none);border-radius:var(--jb-number-input-increase-button-border-radius, 0);box-sizing:border-box}.jb-input-web-component .number-control-wrapper .number-control-buttons .increase-number-button .increase-icon{stroke:var(--increase-button-color);stroke-width:14px;height:100%;width:100%;display:block}.jb-input-web-component .number-control-wrapper .number-control-buttons .increase-number-button:hover .increase-icon{stroke:var(--increase-button-color-hover)}.jb-input-web-component .number-control-wrapper .number-control-buttons .decrease-number-button{border:var(--jb-number-input-decrease-button-border, none);border-radius:var(--jb-number-input-decrease-button-border-radius, 0);background:var(--jb-number-input-decrease-button-bg, transparent);box-sizing:border-box}.jb-input-web-component .number-control-wrapper .number-control-buttons .decrease-number-button .decrease-icon{stroke:var(--decrease-button-color);stroke-width:14px;height:100%;width:100%;display:block}.jb-input-web-component .number-control-wrapper .number-control-buttons .decrease-number-button:hover .decrease-icon{stroke:var(--decrease-button-color-hover)}</style>",this.shadowRoot.appendChild(e.content.cloneNode(!0)),this.validation.addValidationListGetter(m(this,o,Me).bind(this)),this.elements.input.inputMode="numeric",this.numberInputElements={controlButtons:null},m(this,o,$e).call(this),this.addStandardValueCallback(m(this,o,Ie).bind(this))},Ie=function(e,r,l,c){return function(V,i,b,U){if(V=="-"&&i.acceptNegative==1)return{displayValue:V,value:"-0"};let a=V;b.useThousandSeparator&&(a=a.replace(new RegExp(`${b.thousandSeparator}`,"g"),""));const Ue=a[0]=="-";a=Pe(a).replace(/[^0-9.]/g,""),Ue&&i.acceptNegative&&(a="-"+a);let N=Number(a);isNaN(N)&&(a=a.replace(/\u06F0/g,"0").replace(/\u06F1/g,"1").replace(/\u06F2/g,"2").replace(/\u06F3/g,"3").replace(/\u06F4/g,"4").replace(/\u06F5/g,"5").replace(/\u06F6/g,"6").replace(/\u06F7/g,"7").replace(/\u06F8/g,"8").replace(/\u06F9/g,"9"),N=parseFloat(a),isNaN(N)&&(a=b.invalidNumberReplacement)),U!=="INPUT"&&a.length!==0&&(i.maxValue&&N>i.maxValue&&(N=i.maxValue,a=`${i.maxValue}`),i.minValue&&N<i.minValue&&(N=i.minValue,a=`${i.minValue}`)),U!=="INPUT"&&a.endsWith(".")&&(a=a.substring(0,a.length-1));const[k,B]=a.split("."),q=B?B.length:0;if(i&&i.decimalPrecision!==null&&i.decimalPrecision!=null&&q&&q>i.decimalPrecision){const Oe=new RegExp(`^-?\\d+(?:\\.\\d{0,${i.decimalPrecision}})?`),O=a.match(Oe);O&&O[0]&&(a=O[0])}k.startsWith("0")&&k.length>1&&(a=a.substring(1)),k.startsWith("-")&&k.charAt(1)=="0"&&k.length>2&&(a="-"+a.substring(2)),U!=="INPUT"&&B&&B.endsWith("0")&&(a=a.replace(/(\.\d*?[1-9])0+|\.0+$/,"$1"));const P={displayValue:a,value:a};return b.useThousandSeparator&&(P.displayValue=a.replace(new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g"),b.thousandSeparator)),b.showPersianNumber&&(P.displayValue=He(P.displayValue)),P}(e,n(this,u),{invalidNumberReplacement:n(this,E),thousandSeparator:n(this,w),useThousandSeparator:this.showThousandSeparator,showPersianNumber:n(this,S)},c)},We=function(e,r){switch(e){case"thousand-separator":r==""||r=="true"||r=="false"?this.showThousandSeparator=r==""||r==="true":(d(this,f,!0),d(this,w,r));break;case"step":this.step=Number(r);break;case"show-persian-number":this.showPersianNumber=r==""||r==="true";break;case"min":this.minValue=r;break;case"max":this.maxValue=r;break;case"decimal-precision":this.decimalPrecision=r;break;case"accept-negative":r!=""&&r!="true"&&r!="false"||(this.acceptNegative=r==""||r==="true");break;case"show-control-button":r!=""&&r!="true"&&r!="false"||(this.showControlButton=r==""||r==="true")}},Me=function(){return[Ge]},_=function(){const e=new Event("change",{cancelable:!1});this.dispatchEvent(e)},H=function(e,r){const l=`${e}`.split(".")[1],c=`${r}`.split(".")[1],V=l?Math.pow(10,l.length+1):1,i=c?Math.pow(10,c.length+1):1,b=Math.max(V,i);return(e*b+r*b)/b},Fe=function(){const e=document.createElement("div");e.classList.add("number-control-wrapper"),e.innerHTML=`<div class="number-control-buttons">
    <div class="increase-number-button number-control-button">
        <svg class="increase-icon" viewBox="0 0 120 120">
            <path stroke-linecap="round" d="M60,40 L60,80"></path>
            <path stroke-linecap="round" d="M40,60 L80,60"></path>
        </svg>
    </div>
    <div class="decrease-number-button number-control-button">
        <svg class="decrease-icon" viewBox="0 0 120 120">
            <path stroke-linecap="round" d="M40,60 L80,60"></path>
        </svg>
    </div>
</div>`,e.querySelector(".increase-number-button").addEventListener("click",this.increaseNumber.bind(this,!0)),e.querySelector(".decrease-number-button").addEventListener("click",this.decreaseNumber.bind(this,!0)),this.elements.slots.endSection.appendChild(e),this.numberInputElements.controlButtons=e},Je=function(){this.numberInputElements.controlButtons&&this.numberInputElements.controlButtons.remove()},Ae=function(e){const r=e.key;r=="ArrowUp"&&(this.increaseNumber(!1),e.preventDefault()),r=="ArrowDown"&&(this.decreaseNumber(!1),e.preventDefault())},Le=function(e){const r=e.target.selectionEnd||0,l=e.target.selectionStart||0;let c=!1;e.inputType==="deleteContentBackward"||je(e.data)||(c=!0,e.data!="."||n(this,u).decimalPrecision===0||this.value.indexOf(".")!=-1||r==0||l==0||n(this,u).decimalPrecision!==null&&this.value.substring(r).length>n(this,u).decimalPrecision||(c=!1),n(this,u).acceptNegative&&e.data[0]=="-"&&l==0&&(c=!1)),c&&e.preventDefault()},x);!customElements.get("jb-number-input")&&window.customElements.define("jb-number-input",Ke);let C=p.forwardRef((t,s)=>{let e=p.useRef(null),[r,l]=p.useState(0);return p.useImperativeHandle(s,()=>e?e.current:void 0,[e]),p.useEffect(()=>{l(r+1)},[e.current]),qe(e,t),ze(e,t),p.useEffect(()=>{e!=null&&e.current&&(e.current.minValue=t.minValue)},[t.minValue]),p.useEffect(()=>{e.current&&(e.current.maxValue=t.maxValue)},[t.maxValue]),p.useEffect(()=>{e.current&&t.acceptNegative!==void 0&&(e.current.acceptNegative=t.acceptNegative)},[t.acceptNegative]),p.useEffect(()=>{e.current&&(e.current.decimalPrecision=t.decimalPrecision)},[t.decimalPrecision]),p.useEffect(()=>{e.current&&typeof t.showControlButton=="boolean"&&(e.current.showControlButton=t.showControlButton)},[t.showControlButton]),p.useEffect(()=>{e.current&&typeof t.showThousandSeparator=="boolean"&&(e.current.showThousandSeparator=t.showThousandSeparator)},[t.showThousandSeparator]),p.useEffect(()=>{e.current&&typeof t.thousandSeparator=="string"&&(e.current.thousandSeparator=t.thousandSeparator)},[t.thousandSeparator]),p.useEffect(()=>{e.current&&typeof t.step=="number"&&(e.current.step=t.step)},[t.step]),p.useEffect(()=>{e.current&&typeof t.showPersianNumber=="boolean"&&(e.current.showPersianNumber=t.showPersianNumber)},[t.showPersianNumber]),h.createElement("jb-number-input",{ref:e,class:t.className},t.children)});C.displayName="JBNumberInput";const Re=()=>h.createElement("div",{className:"input-wrapper"},h.createElement(C,{label:"تست",message:"این متن تست می باشد"}));Re.__docgenInfo={description:"",methods:[],displayName:"JBInputNumberTest"};const nt={title:"Components/form elements/Inputs/JBNumberInput",component:C},j={args:{label:"label",message:"static text under input show all the time",placeholder:"place holder",disabled:!1,onChange:t=>{console.log(`new number is ${t.target.value}`)}}},$={args:{label:"تعداد به عدد",message:"هر سه رقم با کاما جدا میگردند",showThousandSeparator:!0,onChange:t=>{console.log(`new number is ${t.target.value}`)}}},T={args:{label:"تعداد به عدد",message:"عدد بین 100 تا 10000",maxValue:1e4,minValue:100,onChange:t=>{console.log(`new number is ${t.target.value}`)}}},I={args:{label:"تعداد به عدد",message:"هر سه رقم با خط تیره جدا میگردند",acceptNegative:!1,showThousandSeparator:!0,thousandSeparator:"_",onChange:t=>{console.log(`new number is ${t.target.value}`)}}},W={args:{label:"عددی با دکمه",message:"دکمه های +-",type:"number",showControlButton:!0,step:100,onChange:t=>{console.log(`new number is ${t.target.value}`)}}},M={args:{label:"type number",message:"type en number but user see persian char number",type:"number",showPersianNumber:!0,onChange:t=>{console.log(`new number is ${t.target.value}`)}}},F={args:{label:"show error",error:"error message"}},J={render:()=>h.createElement(Re,null)},A={render:t=>h.createElement(C,{...t},h.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})),args:{label:"label",message:"static text under input show all the time",placeholder:"place holder"}},L={render:t=>h.createElement(C,{...t},h.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})),args:{label:"label",message:"static text under input show all the time",placeholder:"place holder"}},R={render:t=>h.createElement(C,{...t},h.createElement("div",{slot:"end-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}}),h.createElement("div",{slot:"start-section",style:{width:"24px",height:"24px",backgroundColor:"#262626"}})),args:{label:"label",message:"static text under input show all the time",placeholder:"place holder"}};var Q,X,Y;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    disabled: false,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(Y=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;$.parameters={...$.parameters,docs:{...(Z=$.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'تعداد به عدد',
    message: 'هر سه رقم با کاما جدا میگردند',
    showThousandSeparator: true,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...(te=(ee=$.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ne,ae;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ge=(de=F.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var ve,we,Ne;J.parameters={...J.parameters,docs:{...(ve=J.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <JBInputNumberTest></JBInputNumberTest>
}`,...(Ne=(we=J.parameters)==null?void 0:we.docs)==null?void 0:Ne.source}}};var fe,xe,Se;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Se=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Ee,ye,Ce;L.parameters={...L.parameters,docs:{...(Ee=L.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ce=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:Ce.source}}};var Ve,ke,Be;R.parameters={...R.parameters,docs:{...(Ve=R.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Be=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:Be.source}}};const at=["Normal","NumberWithComma","NumberWithMinMax","NonNegativeNumberWithUnderlineSeparato","NumberWithButtons","NumberWithPersianChar","WithError","numberTest","WithStartSection","WithEndSection","WithStartAndEndSection"];export{I as NonNegativeNumberWithUnderlineSeparato,j as Normal,W as NumberWithButtons,$ as NumberWithComma,T as NumberWithMinMax,M as NumberWithPersianChar,L as WithEndSection,F as WithError,R as WithStartAndEndSection,A as WithStartSection,at as __namedExportsOrder,nt as default,J as numberTest};
