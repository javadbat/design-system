import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-D4DdPDUe.js";import{r as a,t as o}from"./react-Z8txRLwg.js";import{t as s}from"./jb-notification-D7x_x4aK.js";var c=t((()=>{})),l,u,d=t((()=>{s(),l=class extends HTMLElement{constructor(){super(),this.initWebComponent()}initWebComponent(){let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{--gap:var(--jb-notification-wrapper-gap,.5rem);--width:var(--jb-notification-wrapper-width,100vw);--height:var(--jb-notification-wrapper-height,100vh);--padding-top:var(--jb-notification-wrapper-padding-top,4rem);--z-index:var(--jb-notification-wrapper-z-index,9999);--top:var(--jb-notification-wrapper-top,0);--left:var(--jb-notification-wrapper-left,0);--position:var(--jb-notification-wrapper-position,absolute);--overflow:var(--jb-notification-wrapper-overflow,hidden);--display:var(--jb-notification-wrapper-display,flex);--align-items:var(--jb-notification-wrapper-align-items,center);--flex-direction:var(--jb-notification-wrapper-flex-direction,column);--pointer-events:var(--jb-notification-wrapper-pointer-events,none)} .jb-notification-wrapper-web-component{position:var(--position);box-sizing:border-box;overflow:var(--overflow);display:var(--display);align-items:var(--align-items);flex-direction:var(--flex-direction);gap:var(--gap);width:var(--width);height:var(--height);padding-top:var(--padding-top);z-index:var(--z-index);top:var(--top);left:var(--left);pointer-events:var(--pointer-events)}</style>

  <div class="jb-notification-wrapper-web-component">
    <slot></slot>
  </div>
  `,e.appendChild(t.content.cloneNode(!0))}static get observedAttributes(){return[`x-position`,`y-position`]}attributeChangedCallback(e,t,n){this.onAttributeChange(e,n)}onAttributeChange(e,t){}},customElements.get(`jb-notification-wrapper`)||window.customElements.define(`jb-notification-wrapper`,l),u=class{#e;get wrapperDom(){return this.#e}constructor(){this.#t()}#t(){let e=document.createElement(`jb-notification-wrapper`);document.body.appendChild(e),this.#e=e}#n(e){let{title:t,type:n,desc:r}=e,i=document.createElement(`jb-notification`);return i.title=t,n&&(i.type=n),r&&(i.description=r),i.addEventListener(`close`,this.onNotificationClose.bind(this)),i}new(e){let{title:t,type:n,desc:r}=e,i=this.#n({title:t,type:n,desc:r});this.wrapperDom?.appendChild(i),i.show()}onNotificationClose(e){this.wrapperDom.removeChild(e.target)}}})),f=t((()=>{d()})),p=e({ActionTest:()=>x,DirectNotification:()=>b,__namedExportsOrder:()=>S,default:()=>y}),m,h,g,_,v,y,b,x,S,C=t((()=>{m=n(r(),1),o(),c(),f(),h=i(),{expect:g,waitFor:_}=__STORYBOOK_MODULE_TEST__,v=new u,y={title:`Components/JBNotification`},b={render:()=>{let e=(0,m.useRef)(null),[t,n]=(0,m.useState)(`waiting`);return(0,m.useEffect)(()=>{let t=e.current;if(!t)return;let r=()=>n(`closed`);return t.addEventListener(`close`,r),t.show(),n(`open`),()=>t.removeEventListener(`close`,r)},[]),(0,h.jsxs)(`div`,{className:`jb-notification-test-page`,children:[(0,m.createElement)(`jb-notification`,{ref:e,title:`Saved`,description:`Your changes were saved successfully.`,type:`SUCCESS`}),(0,h.jsx)(`button`,{type:`button`,onClick:()=>e.current?.onClose(),children:`Dismiss notification`}),(0,h.jsx)(`output`,{"data-testid":`notification-state`,children:t})]})},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-notification`),n=e.querySelector(`button`);await _(()=>{g(t.state).toBe(`OPEN`),g(t.title).toBe(`Saved`),g(t.description).toBe(`Your changes were saved successfully.`),g(t.type).toBe(`SUCCESS`)}),n.click(),await _(()=>{g(t.state).toBe(`CLOSE`),g(e).toHaveTextContent(`closed`)})}},x={render:()=>{function e(){v.new({title:`completed successfully`,type:`SUCCESS`})}function t(){v.new({title:`error happen`,type:`ERROR`})}function n(){v.new({title:`operation is not safe`,type:`WARNING`})}function r(){v.new({title:`operation is good`,type:`INFO`})}return(0,h.jsxs)(`div`,{className:`jb-notification-test-page`,children:[(0,h.jsx)(`p`,{children:`please click on each buttons and see related notification`}),(0,h.jsx)(a,{color:`positive`,onClick:e,children:`success message`}),(0,h.jsx)(a,{color:`danger`,onClick:t,children:`error message`}),(0,h.jsx)(a,{color:`warning`,onClick:n,children:`warning message`}),(0,h.jsx)(a,{color:`primary`,onClick:r,children:`information message`})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const notificationRef = useRef<JBNotificationWebComponent>(null);
    const [closeState, setCloseState] = useState('waiting');
    useEffect(() => {
      const notification = notificationRef.current;
      if (!notification) return;
      const onClose = () => setCloseState('closed');
      notification.addEventListener('close', onClose);
      notification.show();
      setCloseState('open');
      return () => notification.removeEventListener('close', onClose);
    }, []);
    return <div className="jb-notification-test-page">
        {createElement('jb-notification', {
        ref: notificationRef,
        title: 'Saved',
        description: 'Your changes were saved successfully.',
        type: 'SUCCESS'
      })}
        <button type="button" onClick={() => notificationRef.current?.onClose()}>
          Dismiss notification
        </button>
        <output data-testid="notification-state">{closeState}</output>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const notification = canvasElement.querySelector('jb-notification') as JBNotificationWebComponent;
    const dismissButton = canvasElement.querySelector<HTMLButtonElement>('button')!;
    await waitFor(() => {
      expect(notification.state).toBe('OPEN');
      expect(notification.title).toBe('Saved');
      expect(notification.description).toBe('Your changes were saved successfully.');
      expect(notification.type).toBe('SUCCESS');
    });
    dismissButton.click();
    await waitFor(() => {
      expect(notification.state).toBe('CLOSE');
      expect(canvasElement).toHaveTextContent('closed');
    });
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    function showSuccessMessage() {
      const message: string | null = 'completed successfully';
      notificationManager.new({
        title: message,
        type: "SUCCESS"
      });
    }
    function showErrorMessage() {
      notificationManager.new({
        title: "error happen",
        type: "ERROR"
      });
    }
    function showWarningMessage() {
      notificationManager.new({
        title: 'operation is not safe',
        type: "WARNING"
      });
    }
    function showInformationMessage() {
      notificationManager.new({
        title: 'operation is good',
        type: "INFO"
      });
    }
    return <div className="jb-notification-test-page">
        <p>please click on each buttons and see related notification</p>
        <JBButton color='positive' onClick={showSuccessMessage}>success message</JBButton>
        <JBButton color='danger' onClick={showErrorMessage}>error message</JBButton>
        <JBButton color='warning' onClick={showWarningMessage}>warning message</JBButton>
        <JBButton color='primary' onClick={showInformationMessage}>information message</JBButton>
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S=[`DirectNotification`,`ActionTest`]}));C();export{x as ActionTest,b as DirectNotification,S as __namedExportsOrder,y as default,C as n,p as t};