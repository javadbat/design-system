import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-CCmaC7-g.js";import{r as a,t as o}from"./dist-CSLcGHe3.js";import{r as s,t as c}from"./react-CxIWQIh_.js";import{r as l,t as u}from"./react-BK0eYxPk.js";import{n as d,t as f}from"./react-Dfc8tpxK.js";import{n as p,t as m}from"./dist-FcoDOuCf.js";var h,g=t((()=>{a(),h=class extends HTMLElement{#e;#t;#n;get id(){let e=this.getAttribute(`id`)||``;return this.#n||e}set id(e){this.#n=e,this.checkInitialOpenness()}get isOpen(){return this.#e}constructor(){super(),this.#e=!1,this.#n=``,this.config={autoCloseOnBackgroundClick:!1},this.#r=()=>{this.isOpen&&(this.dispatchCloseEvent(`HISTORY_BACK_EVENT`),this.config.autoCloseOnBackgroundClick&&this.close())},this.initWebComponent()}connectedCallback(){this.callOnLoadEvent(),this.initProp(),this.callOnInitEvent()}disconnectedCallback(){window.removeEventListener(`popstate`,this.#r)}callOnLoadEvent(){let e=new CustomEvent(`load`,{bubbles:!0,composed:!0});this.dispatchEvent(e)}callOnInitEvent(){let e=new CustomEvent(`init`,{bubbles:!0,composed:!0});this.dispatchEvent(e)}initWebComponent(){let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0});this.#t=this.attachInternals(),this.#t.ariaModal=`true`,o();let t=document.createElement(`template`);t.innerHTML=`<style>:host{display:none}@media (max-width:768px){:host .modal-content-wrapper{transform:translateY(100%)}}:host(:state(open)){display:block}@media (max-width:768px){:host(:state(open)) .modal-content-wrapper{animation-name:swipe-up;animation-duration:.3s;animation-timing-function:ease;animation-iteration-count:1;animation-delay:0s;animation-fill-mode:forwards}}.jb-modal-web-component{z-index:var(--z-index);width:100%;height:100%;position:fixed;top:0;left:0}.jb-modal-web-component .modal-background{background-color:var(--back-bg-color);backdrop-filter:blur(10px);z-index:2;width:100%;height:100%;position:absolute;top:0;left:0}.jb-modal-web-component .modal-content-wrapper{z-index:3;pointer-events:none;justify-content:center;align-items:center;width:100%;height:100%;display:flex;position:absolute;top:0;left:0}@media (max-width:768px){.jb-modal-web-component .modal-content-wrapper{bottom:0;top:initial;align-items:flex-end}}.jb-modal-web-component .modal-content-wrapper .modal-content{pointer-events:all;background-color:var(--bg-color);border-radius:var(--border-radius);grid-template:"header"max-content"content"minmax(0,1fr)"footer"max-content/1fr;width:auto;max-width:calc(100% - 2rem);height:auto;max-height:calc(100dvh - 4rem);display:grid;overflow:hidden}@media (max-width:768px){.jb-modal-web-component .modal-content-wrapper .modal-content{border-radius:var(--border-radius) var(--border-radius) 0 0;width:100%;max-width:100%;height:auto;min-height:2rem;max-height:calc(100% - 5rem);overflow-y:auto}}.jb-modal-web-component .modal-content-wrapper slot[name=header]::slotted(*){grid-area:header;justify-content:space-between;align-items:center;gap:.5rem;padding:1rem;font-size:1.5rem;font-weight:700;display:flex}.jb-modal-web-component .modal-content-wrapper slot[name=content]::slotted(*),.jb-modal-web-component .modal-content-wrapper slot:not([name])::slotted(*){grid-area:content;max-height:100%;padding:1rem;overflow:auto}.jb-modal-web-component .modal-content-wrapper slot[name=footer]::slotted(*){grid-area:footer;justify-content:flex-end;gap:.5rem;padding:1rem;display:flex}@keyframes swipe-up{0%{transform:translateY(100%)}to{transform:translateY(0%)}} :host{--z-index:var(--jb-modal-z-index,1);--border-radius:var(--jb-modal-border-radius,var(--jb-radius-xl));--back-bg-color:var(--jb-modal-back-bg-color,oklch(from var(--jb-white) l c h / .1));--bg-color:var(--jb-modal-bg-color,var(--jb-white))}</style>

  <div class="jb-modal-web-component" part="component-wrapper">
    <div class="modal-background" part="background"></div>
    <div class="modal-content-wrapper">
        <div class="modal-content" part="content-box">
            <slot name="header"></slot>
            <slot name="content"><slot></slot></slot>
            <slot name="footer"></slot>
        </div>
    </div>
  </div>
  `,e.appendChild(t.content.cloneNode(!0)),this.elements={componentWrapper:e.querySelector(`.jb-modal-web-component`),background:e.querySelector(`.modal-background`)}}registerEventListener(){this.elements.background.addEventListener(`click`,this.onBackgroundClick.bind(this)),window.addEventListener(`popstate`,this.#r)}initProp(){this.registerEventListener()}checkInitialOpenness(){window.location.hash==`#${this.id}`&&(this.triggerUrlOpenEvent(),this.open())}triggerUrlOpenEvent(){let e=new CustomEvent(`urlOpen`,{bubbles:!0,composed:!0});this.dispatchEvent(e)}static get observedAttributes(){return[`is-open`,`id`]}attributeChangedCallback(e,t,n){this.onAttributeChange(e,n)}onAttributeChange(e,t){switch(e){case`is-open`:t==`true`?this.#e||this.open():this.#e&&this.close();break;case`id`:this.id=t}}onBackgroundClick(){this.dispatchCloseEvent(`BACKGROUND_CLICK`),this.config.autoCloseOnBackgroundClick&&this.close()}dispatchCloseEvent(e){let t=new CustomEvent(`close`,{detail:{eventType:e}});this.dispatchEvent(t)}close(){this.#e=!1,this.#t.ariaHidden=`true`,this.#t.states.delete(`open`);let e=window.history;window.location.hash==`#${this.id}`&&e.go(-1)}open(){if(this.#e=!0,this.#t.ariaHidden=`false`,this.#t.states.add(`open`),this.id){let e=window.history;window.location.hash!=`#${this.id}`&&e.pushState({JBModal:{}},``,`#${this.id}`)}}#r},customElements.get(`jb-modal`)||window.customElements.define(`jb-modal`,h)})),_=t((()=>{g()})),v,y,b=t((()=>{v=n(r(),1),_(),c(),y=v.forwardRef(((e,t)=>{let n=(0,v.useRef)(null);(0,v.useImperativeHandle)(t,(()=>n?n.current:void 0),[n]);let{isOpen:r,onClose:i,onInit:a,onLoad:o,onUrlOpen:c,...l}=e;return(0,v.useEffect)((()=>{r==1?n.current?.open():n.current?.close()}),[r,n.current]),function(e,t){s(e,`load`,t.onLoad,!0),s(e,`init`,t.onInit,!0),s(e,`close`,t.onClose),s(e,`urlOpen`,t.onUrlOpen)}(n,{onClose:i,onInit:a,onLoad:o,onUrlOpen:c}),v.createElement(`jb-modal`,{ref:n,...l},e.children)})),y.displayName=`JBModal`})),x=t((()=>{b()})),S=t((()=>{})),C=e({ActionTest:()=>N,CloseDetail:()=>L,CustomizedUi:()=>z,DesktopAnimation:()=>F,DesktopEnterAnimation:()=>P,HashIdAndAutoClose:()=>R,MobileView:()=>I,Normal:()=>D,WithHeaderAndFooter:()=>O,WithLargeContent:()=>A,WithOverflowY:()=>M,__namedExportsOrder:()=>B,default:()=>E}),w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V=t((()=>{w=n(r(),1),x(),u(),m(),S(),f(),T=i(),E={title:`Components/JBModal`,component:y,decorators:[e=>(0,T.jsx)(`div`,{className:`jb-modal-sample-background`,children:(0,T.jsx)(e,{})})]},D={args:{isOpen:!0,children:(0,T.jsx)(`div`,{children:`Hello World`})}},O={render:()=>(0,T.jsxs)(y,{isOpen:!0,children:[(0,T.jsx)(`div`,{slot:`content`,children:`Here we put content of the modal, mostly we put some information here to show to the user`}),(0,T.jsxs)(`div`,{slot:`header`,children:[(0,T.jsx)(`div`,{children:`Title of Header`}),` `,(0,T.jsx)(`div`,{children:`X`})]}),(0,T.jsxs)(`div`,{slot:`footer`,children:[(0,T.jsx)(l,{color:`light`,children:`Cancel`}),(0,T.jsx)(l,{children:`Submit`})]})]})},k=`Test Long String `.repeat(200),A={args:{isOpen:!0,children:(0,T.jsx)(`div`,{className:`modal-test-content`,children:k})}},j=p.helpers.multiple(()=>({name:p.person.fullName()}),{count:500}),M={args:{isOpen:!0,children:(0,T.jsxs)(w.Fragment,{children:[(0,T.jsx)(`div`,{slot:`header`,children:`Header`}),(0,T.jsx)(`div`,{slot:`footer`,style:{justifyContent:`start`},children:(0,T.jsx)(d,{label:`I Read and Accept All People on the list`})}),(0,T.jsx)(`div`,{slot:`content`,children:j.map(e=>(0,T.jsx)(`div`,{children:e.name}))})]})}},N={render:()=>{let[e,t]=(0,w.useState)(!1);return(0,T.jsx)(`div`,{children:(0,T.jsxs)(`div`,{className:`button-wrapper`,children:[(0,T.jsx)(l,{color:`light`,onClick:()=>t(!0),children:`Open Modal`}),(0,T.jsx)(y,{isOpen:e,onClose:()=>{t(!1)},children:(0,T.jsx)(`div`,{className:`modal-test-content`,children:`Hello World`})})]})})}},P={render:()=>{let[e,t]=(0,w.useState)(!1);return(0,T.jsxs)(`div`,{className:`button-wrapper`,children:[(0,T.jsx)(l,{color:`light`,onClick:()=>t(!0),children:`Open enter animated modal`}),(0,T.jsxs)(y,{className:`desktop-enter-animation-modal`,isOpen:e,onClose:()=>t(!1),children:[(0,T.jsx)(`div`,{slot:`header`,children:(0,T.jsx)(`span`,{children:`Enter animation`})}),(0,T.jsx)(`div`,{slot:`content`,className:`starting-style-demo-content`,children:`This example only animates the modal while it opens.`}),(0,T.jsx)(`div`,{slot:`footer`,children:(0,T.jsx)(l,{color:`light`,onClick:()=>t(!1),children:`Close`})})]})]})},parameters:{viewport:{defaultViewport:`responsive`}}},F={render:()=>{let[e,t]=(0,w.useState)(!1);return(0,T.jsxs)(`div`,{className:`button-wrapper`,children:[(0,T.jsx)(l,{color:`light`,onClick:()=>t(!0),children:`Open animated modal`}),(0,T.jsxs)(y,{className:`desktop-starting-style-modal`,isOpen:e,onClose:()=>t(!1),children:[(0,T.jsx)(`div`,{slot:`header`,children:(0,T.jsx)(`span`,{children:`Desktop animation`})}),(0,T.jsxs)(`div`,{slot:`content`,className:`starting-style-demo-content`,children:[`This story uses CSS `,(0,T.jsx)(`code`,{children:`@starting-style`}),` with the modal shadow parts to animate the backdrop and content box as soon as the modal enters the open state on desktop.`]}),(0,T.jsxs)(`div`,{slot:`footer`,children:[(0,T.jsx)(l,{color:`light`,onClick:()=>t(!1),children:`Close`}),(0,T.jsx)(l,{onClick:()=>t(!1),children:`Done`})]})]})]})},parameters:{viewport:{defaultViewport:`responsive`}}},I={args:{isOpen:!0,children:(0,T.jsx)(`div`,{className:`modal-test-content`,children:`Mobile View`})},parameters:{viewport:{defaultViewport:`mobile2`}}},L={render:e=>{let[t,n]=(0,w.useState)(!1);return(0,T.jsxs)(`div`,{className:`button-wrapper`,children:[(0,T.jsx)(l,{color:`light`,onClick:e=>n(!0),children:`Open Modal`}),(0,T.jsx)(y,{isOpen:t,onClose:e=>{console.log(`modal close event type:`,e.detail.eventType),n(!1)},onUrlOpen:()=>n(!0),id:`MyModal`,children:(0,T.jsxs)(`div`,{className:`modal-test-content`,style:{flexDirection:`column`,alignItems:`flex-start`},children:[(0,T.jsxs)(`p`,{children:["`onClose` event of the modal called for 2 reason:",(0,T.jsxs)(`ul`,{children:[(0,T.jsx)(`li`,{children:`when user click on modal background`}),(0,T.jsx)(`li`,{children:`when user hit back button in android or back button of the browser`})]})]}),(0,T.jsx)(`p`,{children:"to simulate the first one you just have to click on modal background and you can see developer tools console that shows `BACKGROUND_CLICK`"}),(0,T.jsxs)(`p`,{children:["to experience the second scenario with back button since we are in storybook and storybook load stories in a `iframe` tag you should open story in ",(0,T.jsx)(`a`,{rel:`noopener`,target:`_blank`,href:`./iframe.html?globals=&id=components-jbmodal--close-detail&viewMode=story`,children:`isolated mode`}),` then hit back button`]}),(0,T.jsx)(`q`,{children:"back button scenario only works if your modal has an `id` attribute"}),(0,T.jsx)(l,{onClick:()=>{n(!1)},children:`Close Modal`})]})})]})}},R={render:()=>{let e=(0,w.useRef)(null),[t,n]=(0,w.useState)(!1),[r,i]=(0,w.useState)(!0),[a,o]=(0,w.useState)(`No close event yet`),[s,c]=(0,w.useState)(window.location.hash||`(empty)`),u=`HashLinkedModal`;return(0,w.useEffect)(()=>{e.current&&(e.current.config.autoCloseOnBackgroundClick=r)},[r]),(0,T.jsxs)(`div`,{className:`button-wrapper`,style:{alignItems:`flex-start`},children:[(0,T.jsx)(l,{color:`light`,onClick:()=>{n(!0),window.setTimeout(()=>c(window.location.hash||`(empty)`))},children:`Open modal and push #HashLinkedModal`}),(0,T.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,T.jsx)(`input`,{type:`checkbox`,checked:r,onChange:e=>i(e.currentTarget.checked)}),`autoCloseOnBackgroundClick`]}),(0,T.jsx)(`a`,{href:`./iframe.html?globals=&id=components-jbmodal--hash-id-and-auto-close&viewMode=story#${u}`,target:`_blank`,rel:`noopener`,children:`Open isolated story with #HashLinkedModal`}),(0,T.jsxs)(`div`,{children:[`Current hash: `,s]}),(0,T.jsxs)(`div`,{children:[`Last close event: `,a]}),(0,T.jsx)(y,{ref:e,id:u,isOpen:t,onUrlOpen:()=>n(!0),onClose:e=>{let t=e.detail.eventType;o(t),window.setTimeout(()=>c(window.location.hash||`(empty)`)),r&&n(!1)},children:(0,T.jsxs)(`div`,{className:`modal-test-content`,style:{flexDirection:`column`,alignItems:`flex-start`},children:[(0,T.jsx)(`h3`,{children:`Hash linked modal`}),(0,T.jsxs)(`p`,{children:[`Opening this modal writes `,(0,T.jsx)(`code`,{children:`#HashLinkedModal`}),` to the URL.`]}),(0,T.jsx)(`p`,{children:`Click the backdrop or press browser back to see the close event detail.`}),(0,T.jsx)(`p`,{children:`When auto close is enabled, the demo also synchronizes React state back to closed.`}),(0,T.jsx)(l,{onClick:()=>n(!1),children:`Close modal`})]})})]})}},z={render:()=>{let[e,t]=(0,w.useState)(!1);return(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h3`,{children:`JBModal With a Little customization`}),(0,T.jsxs)(`div`,{className:`button-wrapper`,children:[(0,T.jsx)(l,{color:`light`,onClick:()=>t(!0),children:`Open Modal`}),(0,T.jsx)(y,{className:`customized-look-modal`,isOpen:e,onClose:()=>{t(!1)},children:(0,T.jsx)(`div`,{className:`modal-test-content`,children:`Hello World`})})]})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div>Hello World</div>
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <JBModal isOpen={true}>
        <div slot="content">Here we put content of the modal, mostly we put some information here to show to the user</div>
        <div slot="header"><div>Title of Header</div> <div>X</div></div>
        <div slot="footer"><JBButton color='light'>Cancel</JBButton><JBButton>Submit</JBButton></div>
      </JBModal>;
  }
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>{longString}</div>
  }
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <Fragment>
      <div slot="header">Header</div>
      <div slot="footer" style={{
        justifyContent: "start"
      }}><JBCheckbox label="I Read and Accept All People on the list"></JBCheckbox></div>
      <div slot='content'>
        {users.map(u => {
          return <div>{u.name}</div>;
        })}
      </div>
    </Fragment>
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className='button-wrapper'>
        <JBButton color='light' onClick={() => setIsOpen(true)}>Open enter animated modal</JBButton>
        <JBModal className='desktop-enter-animation-modal' isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div slot="header">
            <span>Enter animation</span>
          </div>
          <div slot="content" className='starting-style-demo-content'>
            This example only animates the modal while it opens.
          </div>
          <div slot="footer">
            <JBButton color='light' onClick={() => setIsOpen(false)}>Close</JBButton>
          </div>
        </JBModal>
      </div>;
  },
  parameters: {
    viewport: {
      defaultViewport: 'responsive'
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className='button-wrapper'>
        <JBButton color='light' onClick={() => setIsOpen(true)}>Open animated modal</JBButton>
        <JBModal className='desktop-starting-style-modal' isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div slot="header">
            <span>Desktop animation</span>
          </div>
          <div slot="content" className='starting-style-demo-content'>
            This story uses CSS <code>@starting-style</code> with the modal shadow parts to animate
            the backdrop and content box as soon as the modal enters the open state on desktop.
          </div>
          <div slot="footer">
            <JBButton color='light' onClick={() => setIsOpen(false)}>Close</JBButton>
            <JBButton onClick={() => setIsOpen(false)}>Done</JBButton>
          </div>
        </JBModal>
      </div>;
  },
  parameters: {
    viewport: {
      defaultViewport: 'responsive'
    }
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div className='modal-test-content'>Mobile View</div>
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2' // Set default to mobile viewport
    }
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
            <p>to experience the second scenario with back button since we are in storybook and storybook load stories in a \`iframe\` tag you should open story in <a rel="noopener" target='_blank' href='./iframe.html?globals=&id=components-jbmodal--close-detail&viewMode=story'>isolated mode</a> then hit back button</p>
            <q>back button scenario only works if your modal has an \`id\` attribute</q>
            <JBButton onClick={() => {
            setIsOpen(false);
          }}>Close Modal</JBButton>
          </div>
        </JBModal>
      </div>;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const modalRef = useRef<JBModalWebComponent>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [autoClose, setAutoClose] = useState(true);
    const [lastEvent, setLastEvent] = useState("No close event yet");
    const [currentHash, setCurrentHash] = useState(window.location.hash || "(empty)");
    const modalId = "HashLinkedModal";
    useEffect(() => {
      if (modalRef.current) {
        modalRef.current.config.autoCloseOnBackgroundClick = autoClose;
      }
    }, [autoClose]);
    const onModalClose = (e: JBModalEventType<CustomEvent>) => {
      const eventType = e.detail.eventType;
      setLastEvent(eventType);
      window.setTimeout(() => setCurrentHash(window.location.hash || "(empty)"));
      if (autoClose) {
        setIsOpen(false);
      }
    };
    const openModal = () => {
      setIsOpen(true);
      window.setTimeout(() => setCurrentHash(window.location.hash || "(empty)"));
    };
    return <div className='button-wrapper' style={{
      alignItems: 'flex-start'
    }}>
        <JBButton color='light' onClick={openModal}>Open modal and push #HashLinkedModal</JBButton>
        <label style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
          <input type="checkbox" checked={autoClose} onChange={event => setAutoClose(event.currentTarget.checked)} />
          autoCloseOnBackgroundClick
        </label>
        <a href={\`./iframe.html?globals=&id=components-jbmodal--hash-id-and-auto-close&viewMode=story#\${modalId}\`} target="_blank" rel="noopener">Open isolated story with #HashLinkedModal</a>
        <div>Current hash: {currentHash}</div>
        <div>Last close event: {lastEvent}</div>
        <JBModal ref={modalRef} id={modalId} isOpen={isOpen} onUrlOpen={() => setIsOpen(true)} onClose={onModalClose}>
          <div className='modal-test-content' style={{
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
            <h3>Hash linked modal</h3>
            <p>Opening this modal writes <code>#HashLinkedModal</code> to the URL.</p>
            <p>Click the backdrop or press browser back to see the close event detail.</p>
            <p>When auto close is enabled, the demo also synchronizes React state back to closed.</p>
            <JBButton onClick={() => setIsOpen(false)}>Close modal</JBButton>
          </div>
        </JBModal>
      </div>;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B=[`Normal`,`WithHeaderAndFooter`,`WithLargeContent`,`WithOverflowY`,`ActionTest`,`DesktopEnterAnimation`,`DesktopAnimation`,`MobileView`,`CloseDetail`,`HashIdAndAutoClose`,`CustomizedUi`]}));V();export{N as ActionTest,L as CloseDetail,z as CustomizedUi,F as DesktopAnimation,P as DesktopEnterAnimation,R as HashIdAndAutoClose,I as MobileView,D as Normal,O as WithHeaderAndFooter,A as WithLargeContent,M as WithOverflowY,B as __namedExportsOrder,E as default,V as n,C as t};