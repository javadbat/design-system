var Z=Object.defineProperty;var I=e=>{throw TypeError(e)};var ee=(e,t,n)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var u=(e,t,n)=>ee(e,typeof t!="symbol"?t+"":t,n),B=(e,t,n)=>t.has(e)||I("Cannot "+n);var d=(e,t,n)=>(B(e,t,"read from private field"),n?n.call(e):t.get(e)),b=(e,t,n)=>t.has(e)?I("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),g=(e,t,n,r)=>(B(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),S=(e,t,n)=>(B(e,t,"access private method"),n);import{R as o,r as c}from"./index-0yr9KlQE.js";import{r as k}from"./index-Dsu68ezD.js";import{o as N}from"./JBButton-C6bY7DS7.js";import"./jb-loading-DaynWWjh.js";import"./index-C1o-zhIV.js";var a=class{constructor(e,t){u(this,"lightness");u(this,"chroma");u(this,"hue");u(this,"variableName");this.variableName=t,this.lightness=e.lightness,this.chroma=e.chroma,this.hue=e.hue}get value(){return`oklch(${this.lightness} ${this.chroma} ${this.hue})`}};function i(e){return new a({lightness:6*(3+1.3*e)*.01,chroma:.001*(14+.09*e),hue:258.36},`--jb-neutral-${e}`)}function te(e){return new a({lightness:e.lightness-.1,chroma:e.chroma-.05,hue:e.hue},`${e.variableName}-pressed`)}function ne(e){const t=Math.min(e.lightness+.12*(1-e.lightness),.985),n=e.chroma*(1-.15*(t-e.lightness));return new a({lightness:t,chroma:Number(n.toFixed(3)),hue:e.hue},`${e.variableName}-l`)}function oe(e){const t=Math.max(e.lightness-.12*e.lightness,.02),n=e.chroma*(1-.15*(t-e.lightness));return new a({lightness:t,chroma:n,hue:e.hue},`${e.variableName}-d`)}function ae(e){const t=Math.min(e.lightness+.65*(1-e.lightness),.93),n=.55*e.chroma*(1-.08*(t-e.lightness)),r=e.hue>=70&&e.hue<=162?5:-3,l=e.hue+r;return new a({lightness:t,chroma:Number(n.toFixed(3)),hue:l},`${e.variableName}-subtle`)}function se(e){const t=Math.max(e.lightness-.35,.22),n=Math.min(1.6*e.chroma,.28);return new a({lightness:Number(t.toFixed(3)),chroma:Number(n.toFixed(3)),hue:e.hue},`${e.variableName}-contrast`)}function v(e){return{main:e,hover:(t=e,new a({lightness:t.lightness+.07,chroma:t.chroma+.07,hue:t.hue},`${t.variableName}-hover`)),pressed:te(e),light:ne(e),dark:oe(e),subtle:ae(e),contrast:se(e)};var t}const re=new a({lightness:.6,chroma:.26,hue:256},"--jb-primary"),ie=new a({lightness:.6,chroma:.26,hue:286},"--jb-secondary"),le=new a({lightness:.75,chroma:.18,hue:70},"--jb-yellow"),ce=new a({lightness:.68,chroma:.1484,hue:162.1},"--jb-green"),de=new a({lightness:.6,chroma:.22,hue:23.21},"--jb-red"),L={single:{black:new a({lightness:.14,chroma:0,hue:0},"--jb-black"),white:new a({lightness:1,chroma:0,hue:0},"--jb-white"),highlight:new a({lightness:.93,chroma:.2302,hue:125.18},"--jb-highlight")},neutral:[i(0),i(1),i(2),i(3),i(4),i(5),i(6),i(7),i(8),i(9),i(10)],primary:v(re),secondary:v(ie),yellow:v(le),green:v(ce),red:v(de)};function p(e){try{const{value:t,...n}=e;typeof window.CSS.registerProperty=="function"&&window.CSS.registerProperty({...n}),(function(r,l){try{l&&(document.documentElement.style.getPropertyValue(r)||document.documentElement.style.setProperty(r,l))}catch{}})(e.name,t)}catch{}}function s(e,t){p({name:t??e.variableName,syntax:"<color>",inherits:!0,initialValue:e.value})}function me(){var e;p({name:"--jb-radius",inherits:!0,value:"1rem",initialValue:"16px",syntax:"<length-percentage>"}),p({name:"--jb-radius-xs",inherits:!0,value:"0.5rem",initialValue:"8px",syntax:"<length-percentage>"}),p({name:"--jb-radius-sm",inherits:!0,value:"0.75rem",initialValue:"12px",syntax:"<length-percentage>"}),p({name:"--jb-radius-lg",inherits:!0,value:"1.25rem",initialValue:"20px",syntax:"<length-percentage>"}),p({name:"--jb-radius-xl",inherits:!0,value:"1.5rem",initialValue:"24px",syntax:"<length-percentage>"}),(function(t){s(t.neutral[0],"--jb-neutral"),s(t.primary.main),s(t.secondary.main),s(t.single.black),s(t.single.white),s(t.single.highlight),s(t.yellow.main),s(t.green.main),s(t.red.main),s(t.red.main);for(let n=1;n<=10;n++)s(t.neutral[n])})(L),s((e=L).single.black,"--jb-text-primary"),s(e.neutral[7],"--jb-text-secondary"),s(e.single.white,"--jb-text-contrast")}var m,h,w,M,X,J,ue=(J=class extends HTMLElement{constructor(){super();b(this,M);b(this,m,!1);b(this,h);b(this,w,"");u(this,"elements");u(this,"config",{autoCloseOnBackgroundClick:!1});this.initWebComponent()}get id(){const t=this.getAttribute("id")||"";return d(this,w)||t}set id(t){g(this,w,t),this.checkInitialOpenness()}get isOpen(){return d(this,m)}connectedCallback(){this.callOnLoadEvent(),this.initProp(),this.callOnInitEvent()}callOnLoadEvent(){const t=new CustomEvent("load",{bubbles:!0,composed:!0});this.dispatchEvent(t)}callOnInitEvent(){const t=new CustomEvent("init",{bubbles:!0,composed:!0});this.dispatchEvent(t)}initWebComponent(){const t=this.attachShadow({mode:"open"});g(this,h,this.attachInternals()),d(this,h).ariaModal="true",me();const n=document.createElement("template");n.innerHTML=`<style>:host{--z-index: var(--jb-modal-z-index, 1);--border-radius:var(--jb-modal-border-radius, var(--jb-radius-xl));--back-bg-color:var(--jb-modal-back-bg-color, oklch(from var(--jb-white) l c h / 0.1));--bg-color:var(--jb-modal-bg-color, var(--jb-white))}.jb-modal-web-component{position:fixed;top:0;left:0;z-index:var(--z-index);width:100%;height:100%}.jb-modal-web-component.--closed{display:none}@media(min-width: 320px)and (max-width: 767px){.jb-modal-web-component.--closed .modal-content-wrapper{transform:translateY(100%)}}.jb-modal-web-component.--opened{display:block}@media(min-width: 320px)and (max-width: 767px){.jb-modal-web-component.--opened .modal-content-wrapper{animation-name:swipe-up;animation-duration:.3s;animation-delay:0s;animation-iteration-count:1;animation-timing-function:ease}}@keyframes swipe-up{0%{transform:translateY(100%)}100%{transform:translateY(0%)}}.jb-modal-web-component .modal-background{position:absolute;top:0;left:0;background-color:var(--back-bg-color);backdrop-filter:blur(10px);z-index:2;width:100%;height:100%}.jb-modal-web-component .modal-content-wrapper{position:absolute;top:0;left:0;z-index:3;width:100%;height:100%;display:flex;align-items:center;justify-content:center;pointer-events:none}@media(min-width: 320px)and (max-width: 767px){.jb-modal-web-component .modal-content-wrapper{bottom:0;top:initial;align-items:flex-end}}.jb-modal-web-component .modal-content-wrapper .modal-content{pointer-events:all;width:auto;height:auto;background-color:var(--bg-color);border-radius:var(--border-radius)}@media(min-width: 320px)and (max-width: 767px){.jb-modal-web-component .modal-content-wrapper .modal-content{width:100%;height:auto;max-height:calc(100% - 80px);min-height:32px;border-radius:var(--border-radius) var(--border-radius) 0 0;overflow-y:auto}}</style>

  <div class="jb-modal-web-component --closed">
    <div class="modal-background"></div>
    <div class="modal-content-wrapper">
        <div class="modal-content">
            <slot name="content"></slot>
        </div>
    </div>
  </div>
  `,t.appendChild(n.content.cloneNode(!0)),this.elements={componentWrapper:t.querySelector(".jb-modal-web-component"),background:t.querySelector(".modal-background")}}registerEventListener(){this.elements.background.addEventListener("click",this.onBackgroundClick.bind(this)),window.addEventListener("popstate",S(this,M,X).bind(this))}initProp(){this.registerEventListener()}checkInitialOpenness(){window.location.hash==`#${this.id}`&&(this.triggerUrlOpenEvent(),this.open())}triggerUrlOpenEvent(){const t=new CustomEvent("urlOpen",{bubbles:!0,composed:!0});this.dispatchEvent(t)}static get observedAttributes(){return["is-open","id"]}attributeChangedCallback(t,n,r){this.onAttributeChange(t,r)}onAttributeChange(t,n){switch(t){case"is-open":n=="true"?d(this,m)||this.open():d(this,m)&&this.close();break;case"id":this.id=n}}onBackgroundClick(){this.dispatchCloseEvent("BACKGROUND_CLICK"),this.config.autoCloseOnBackgroundClick&&this.close()}dispatchCloseEvent(t){const n=new CustomEvent("close",{detail:{eventType:t}});this.dispatchEvent(n)}close(){g(this,m,!1),d(this,h).ariaHidden="true",this.elements.componentWrapper.classList.remove("--opened"),this.elements.componentWrapper.classList.add("--closed");const t=window.history;window.location.hash==`#${this.id}`&&t.go(-1)}open(){if(g(this,m,!0),d(this,h).ariaHidden="false",this.elements.componentWrapper.classList.remove("--closed"),this.elements.componentWrapper.classList.add("--opened"),this.id){const t=window.history;window.location.hash!=`#${this.id}`&&t.pushState({JBModal:{}},"",`#${this.id}`)}}},m=new WeakMap,h=new WeakMap,w=new WeakMap,M=new WeakSet,X=function(){this.isOpen&&(this.dispatchCloseEvent("HISTORY_BACK_EVENT"),this.config.autoCloseOnBackgroundClick&&this.close())},J);customElements.get("jb-modal")||window.customElements.define("jb-modal",ue);let f=o.forwardRef((e,t)=>{let n=c.useRef(null),[r,l]=c.useState(0);return c.useImperativeHandle(t,()=>n?n.current:{},[n]),c.useEffect(()=>{l(r+1)},[n.current]),c.useEffect(()=>{n.current&&(e.isOpen==!0?n.current.open():n.current.close())},[e.isOpen]),c.useEffect(()=>{n.current&&(n.current.id=e.id)},[e.id]),k(n,"load",e.onLoad,!0),k(n,"init",e.onInit,!0),k(n,"close",e.onClose),k(n,"urlOpen",e.onUrlOpen),o.createElement("jb-modal",{ref:n,class:e.className?e.className:""},o.createElement("div",{slot:"content"},e.children))});f.displayName="JBModal";const ye={title:"Components/JBModal",component:f,decorators:[e=>o.createElement("div",{className:"jb-modal-sample-background"},o.createElement(e,null))]},y={args:{isOpen:!0,children:o.createElement("div",{className:"modal-test-content"},"Hello World")}},he="Test Long String ".repeat(200),E={args:{isOpen:!0,children:o.createElement("div",{className:"modal-test-content"},he)}},C={render:()=>{const[e,t]=c.useState(!1);return o.createElement("div",null,o.createElement("div",{className:"button-wrapper"},o.createElement(N,{color:"light",onClick:()=>t(!0)},"Open Modal"),o.createElement(f,{isOpen:e,onClose:()=>{t(!1)}},o.createElement("div",{className:"modal-test-content"},"Hello World"))))}},O={args:{isOpen:!0,children:o.createElement("div",{className:"modal-test-content"},"Mobile View")},parameters:{viewport:{defaultViewport:"mobile2"}}},x={render:e=>{const[t,n]=c.useState(!1),r=l=>{console.log("modal close event type:",l.detail.eventType),n(!1)};return o.createElement("div",{className:"button-wrapper"},o.createElement(N,{color:"light",onClick:l=>n(!0)},"Open Modal"),o.createElement(f,{isOpen:t,onClose:r,onUrlOpen:()=>n(!0),id:"MyModal"},o.createElement("div",{className:"modal-test-content",style:{flexDirection:"column",alignItems:"flex-start"}},o.createElement("p",null,"`onClose` event of the modal called for 2 reason:",o.createElement("ul",null,o.createElement("li",null,"when user click on modal background"),o.createElement("li",null,"when user hit back button in android or back button of the browser"))),o.createElement("p",null,"to simulate the first one you just have to click on modal background and you can see developer tools console that shows `BACKGROUND_CLICK`"),o.createElement("p",null,"to experience the second scenario with back button since we are in storybook and storybook load stories in a `iframe` tag you should open story in ",o.createElement("a",{target:"_blank",href:"./iframe.html?globals=&id=components-jbmodal--close-detail&viewMode=story"},"isolated mode")," then hit back button"),o.createElement("q",null,"back button scenario only works if your modal has an `id` attribute"),o.createElement(N,{onClick:()=>{n(!1)}},"Close Modal"))))}},j={render:()=>{const[e,t]=c.useState(!1);return o.createElement("div",null,o.createElement("h3",null,"JBModal With a Little customization"),o.createElement("div",{className:"button-wrapper"},o.createElement(N,{color:"light",onClick:()=>t(!0)},"Open Modal"),o.createElement(f,{className:"customized-look-modal",isOpen:e,onClose:()=>{t(!1)}},o.createElement("div",{className:"modal-test-content"},"Hello World"))))}};var W,$,V;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>Hello World</div>
  }
}`,...(V=($=y.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var z,H,T;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>{longString}</div>
  }
}`,...(T=(H=E.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var A,U,_;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <div className='button-wrapper'>
          <JBButton color='light' onClick={() => setIsOpen(true)}>Open Modal</JBButton>
          <JBModal isOpen={isOpen} onClose={() => {
          setIsOpen(false);
        }}>
            <div className='modal-test-content'>Hello World</div>
          </JBModal>
        </div>
      </div>;
  }
}`,...(_=(U=C.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var R,D,K;O.parameters={...O.parameters,docs:{...(R=O.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>Mobile View</div>
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2' // Set default to mobile viewport
    }
  }
}`,...(K=(D=O.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var P,q,F;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: story => {
    const [isOpen, setIsOpen] = useState(false);
    const onModalClose = (e: JBModalEventType<CustomEvent<any>>) => {
      console.log("modal close event type:", e.detail.eventType);
      setIsOpen(false);
    };
    return <div className='button-wrapper'>
        <JBButton color='light' onClick={e => setIsOpen(true)}>Open Modal</JBButton>
        <JBModal isOpen={isOpen} onClose={onModalClose} onUrlOpen={() => setIsOpen(true)} id="MyModal">
          <div className='modal-test-content' style={{
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
            <p>
              \`onClose\` event of the modal called for 2 reason:
              <ul>
                <li>when user click on modal background</li>
                <li>when user hit back button in android or back button of the browser</li>
              </ul>
            </p>
            <p>to simulate the first one you just have to click on modal background and you can see developer tools console that shows \`BACKGROUND_CLICK\`</p>
            <p>to experience the second scenario with back button since we are in storybook and storybook load stories in a \`iframe\` tag you should open story in <a target='_blank' href='./iframe.html?globals=&id=components-jbmodal--close-detail&viewMode=story'>isolated mode</a> then hit back button</p>
            <q>back button scenario only works if your modal has an \`id\` attribute</q>
            <JBButton onClick={() => {
            setIsOpen(false);
          }}>Close Modal</JBButton>
          </div>
        </JBModal>
      </div>;
  }
}`,...(F=(q=x.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var Y,G,Q;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <h3>JBModal With a Little customization</h3>
        <div className='button-wrapper'>
          <JBButton color='light' onClick={() => setIsOpen(true)}>Open Modal</JBButton>
          <JBModal className='customized-look-modal' isOpen={isOpen} onClose={() => {
          setIsOpen(false);
        }}>
            <div className='modal-test-content'>Hello World</div>
          </JBModal>
        </div>
      </div>;
  }
}`,...(Q=(G=j.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};const Ee=["Normal","WithLargeContent","ActionTest","MobileView","CloseDetail","CustomizedUi"];export{C as ActionTest,x as CloseDetail,j as CustomizedUi,O as MobileView,y as Normal,E as WithLargeContent,Ee as __namedExportsOrder,ye as default};
