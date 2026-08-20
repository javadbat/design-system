import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-CKFpjfZi.js";import{o as a,t as o,u as s}from"./jb-core-DsmvCuBc.js";import{r as c,t as l}from"./react-BTeo_oWd.js";import{t as u}from"./jb-notification-DZlTq2nu.js";var d=t((()=>{})),f,p=t((()=>{u(),o(),a(`jb-notification-wrapper`,class extends s{constructor(){super(),this.initWebComponent()}initWebComponent(){let e=this.attachShadow({mode:`open`,clonable:!0,serializable:!0}),t=document.createElement(`template`);t.innerHTML=`<style>:host{--gap:var(--jb-notification-wrapper-gap,.5rem);--width:var(--jb-notification-wrapper-width,100vw);--height:var(--jb-notification-wrapper-height,100vh);--padding-top:var(--jb-notification-wrapper-padding-top,4rem);--z-index:var(--jb-notification-wrapper-z-index,9999);--top:var(--jb-notification-wrapper-top,0);--left:var(--jb-notification-wrapper-left,0);--position:var(--jb-notification-wrapper-position,absolute);--overflow:var(--jb-notification-wrapper-overflow,hidden);--display:var(--jb-notification-wrapper-display,flex);--align-items:var(--jb-notification-wrapper-align-items,center);--flex-direction:var(--jb-notification-wrapper-flex-direction,column);--pointer-events:var(--jb-notification-wrapper-pointer-events,none)} .jb-notification-wrapper-web-component{position:var(--position);box-sizing:border-box;overflow:var(--overflow);display:var(--display);align-items:var(--align-items);flex-direction:var(--flex-direction);gap:var(--gap);width:var(--width);height:var(--height);padding-top:var(--padding-top);z-index:var(--z-index);top:var(--top);left:var(--left);pointer-events:var(--pointer-events)}</style>

  <div class="jb-notification-wrapper-web-component">
    <slot></slot>
  </div>
  `,e.appendChild(t.content.cloneNode(!0))}static get observedAttributes(){return[`x-position`,`y-position`]}attributeChangedCallback(e,t,n){this.onAttributeChange(e,n)}onAttributeChange(e,t){}}),f=class{#e;get wrapperDom(){return this.#e}constructor(){this.#t()}#t(){let e=document.createElement(`jb-notification-wrapper`);document.body.appendChild(e),this.#e=e}#n(e){let{title:t,type:n,desc:r}=e,i=document.createElement(`jb-notification`);return i.title=t,n&&(i.type=n),r&&(i.description=r),i.addEventListener(`close`,this.onNotificationClose.bind(this)),i}new(e){let{title:t,type:n,desc:r}=e,i=this.#n({title:t,type:n,desc:r});this.wrapperDom?.appendChild(i),i.show()}onNotificationClose(e){this.wrapperDom.removeChild(e.target)}}})),m=t((()=>{p()})),h=e({ActionTest:()=>C,DirectNotification:()=>S,__namedExportsOrder:()=>w,default:()=>x}),g,_,v,y,b,x,S,C,w,T=t((()=>{g=n(r(),1),l(),d(),m(),_=i(),{expect:v,waitFor:y}=__STORYBOOK_MODULE_TEST__,b=new f,x={title:`Components/JBNotification`},S={render:()=>{let e=(0,g.useRef)(null),[t,n]=(0,g.useState)(`waiting`);return(0,g.useEffect)(()=>{let t=e.current;if(!t)return;let r=()=>n(`closed`);return t.addEventListener(`close`,r),t.show(),n(`open`),()=>t.removeEventListener(`close`,r)},[]),(0,_.jsxs)(`div`,{className:`jb-notification-test-page`,children:[(0,g.createElement)(`jb-notification`,{ref:e,title:`Saved`,description:`Your changes were saved successfully.`,type:`SUCCESS`}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>e.current?.onClose(),children:`Dismiss notification`}),(0,_.jsx)(`output`,{"data-testid":`notification-state`,children:t})]})},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-notification`),n=e.querySelector(`button`);await y(()=>{v(t.state).toBe(`OPEN`),v(t.title).toBe(`Saved`),v(t.description).toBe(`Your changes were saved successfully.`),v(t.type).toBe(`SUCCESS`)}),n.click(),await y(()=>{v(t.state).toBe(`CLOSE`),v(e).toHaveTextContent(`closed`)})}},C={render:()=>{function e(){b.new({title:`completed successfully`,type:`SUCCESS`})}function t(){b.new({title:`error happen`,type:`ERROR`})}function n(){b.new({title:`operation is not safe`,type:`WARNING`})}function r(){b.new({title:`operation is good`,type:`INFO`})}return(0,_.jsxs)(`div`,{className:`jb-notification-test-page`,children:[(0,_.jsx)(`p`,{children:`please click on each buttons and see related notification`}),(0,_.jsx)(c,{color:`positive`,onClick:e,children:`success message`}),(0,_.jsx)(c,{color:`danger`,onClick:t,children:`error message`}),(0,_.jsx)(c,{color:`warning`,onClick:n,children:`warning message`}),(0,_.jsx)(c,{color:`primary`,onClick:r,children:`information message`})]})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`DirectNotification`,`ActionTest`]}));T();export{C as ActionTest,S as DirectNotification,w as __namedExportsOrder,x as default,T as n,h as t};