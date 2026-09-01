import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-DIBpeuX4.js";import{r as a,t as o}from"./react-Cxlx6W1K.js";import{r as s,t as c}from"./react-BO2pKP-M2.js";var l=e({CustomValidation:()=>S,Disabled:()=>j,Events:()=>w,ExplicitNullValueDoesNotFallBackToInitialValue:()=>k,ExternalError:()=>b,HideDownloadButton:()=>N,ImperativeMethods:()=>x,InitialValue:()=>E,InitialValueDoesNotOverrideValue:()=>D,Label:()=>y,MaxSizeValidation:()=>C,Normal:()=>v,RedundantResetDoesNotBlockInitialValue:()=>O,Required:()=>A,Sizes:()=>P,Slots:()=>T,Uploading:()=>M,__namedExportsOrder:()=>F,default:()=>h}),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I=t((()=>{u=n(r(),1),o(),c(),d=i(),{expect:f,userEvent:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/form elements/JBFileInput`,component:s,args:{style:{height:`10rem`}}},g=new File([`initial`],`initial.txt`,{type:`text/plain`}),_=new File([`live`],`live.txt`,{type:`text/plain`}),v={args:{}},y={args:{label:`Select a contract file`,message:`PDF files up to 1 MB`},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-file-input`);await m(()=>{f(t?.shadowRoot?.querySelector(`.placeholder-title`)?.textContent).toBe(`Select a contract file`),f(t?.shadowRoot?.querySelector(`.message-box`)?.textContent).toBe(`PDF files up to 1 MB`)})}},b={args:{label:`Select a contract file`,message:`PDF files up to 1 MB`,error:`The selected file is not allowed`},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-file-input`),n=t?.shadowRoot?.querySelector(`.message-box`);await m(()=>{f(t?.checkValidity()).toBe(!1),f(n?.textContent).toBe(`The selected file is not allowed`),f(n?.classList.contains(`error`)).toBe(!0)}),t.error=null,t.reportValidity(),f(n?.textContent).toBe(`PDF files up to 1 MB`)}},x={args:{required:!0},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-file-input`),n=new File([``],`empty.txt`,{type:`text/plain`});f(t).toBeTruthy(),f(typeof t?.openFileSelector).toBe(`function`),f(typeof t?.resetValue).toBe(`function`),f(t?.checkValidity()).toBe(!1),f(t?.reportValidity()).toBe(!1),t.value=n,await m(()=>{f(t?.value?.name).toBe(`empty.txt`),f(t?.checkValidity()).toBe(!0)}),t.resetValue(),f(t?.value).toBeNull(),f(t?.status).toBe(`empty`)}},S={args:{value:_},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-file-input`);t.validation.list=[{validator:({file:e})=>e!==null&&e.size<3,message:`File must be smaller than 3 bytes`}],f(t?.checkValidity()).toBe(!1),f(t?.reportValidity()).toBe(!1),f(t?.shadowRoot?.querySelector(`.jb-file-input-web-component`)?.classList.contains(`--has-error`)).toBe(!0)}},C={args:{maxSize:1,value:new File([`a`.repeat(1025)],`too-large.txt`,{type:`text/plain`})},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-file-input`),n=t?.shadowRoot?.querySelector(`.jb-file-input-web-component`),r=t?.shadowRoot?.querySelector(`.error-overlay`),i=r?.querySelector(`.error-message`);await m(()=>{f(t?.maxSize).toBe(1),f(t?.checkValidity()).toBe(!1),f(t?.validationMessage).toBe(`File size must not exceed 1 KB`),f(n?.classList.contains(`--has-error`)).toBe(!0),f(i?.textContent).toBe(`File size must not exceed 1 KB`),f(getComputedStyle(r).display).toBe(`flex`)}),await new Promise(e=>setTimeout(e,0)),f(n?.classList.contains(`--has-error`)).toBe(!0),f(i?.textContent).toBe(`File size must not exceed 1 KB`),f(getComputedStyle(r).display).toBe(`flex`),t.maxSize=null,await m(()=>{f(t?.checkValidity()).toBe(!0),f(getComputedStyle(r).display).toBe(`none`)})}},w={args:{value:_},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-file-input`),n=t?.shadowRoot?.querySelector(`.download-button`),r=t?.shadowRoot?.querySelector(`.delete-button`),i=0,a=0,o=0;t?.addEventListener(`change`,()=>i++),t?.addEventListener(`download`,()=>a++),t?.addEventListener(`delete`,()=>o++),n?.click(),r?.click(),await m(()=>{f(a).toBe(1),f(o).toBe(1),f(i).toBe(1),f(t?.value).toBeNull()})}},T={render:e=>(0,d.jsxs)(s,{...e,children:[(0,d.jsx)(`span`,{slot:`placeholder`,children:`Drop a file here`}),(0,d.jsx)(`span`,{slot:`overlay-content`,children:`Ready to download`})]}),play:async({canvasElement:e})=>{let t=e.querySelector(`jb-file-input`);f(t?.querySelector(`[slot="placeholder"]`)?.textContent).toBe(`Drop a file here`),f(t?.querySelector(`[slot="overlay-content"]`)?.textContent).toBe(`Ready to download`)}},E={render:e=>{let t=(0,u.useRef)(null);return(0,d.jsxs)(`form`,{ref:t,children:[(0,d.jsx)(s,{...e}),(0,d.jsx)(a,{type:`button`,onClick:()=>t.current?.reset(),children:`Reset`})]})},args:{label:`initial file`,initialValue:g},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-file-input`),n=e.querySelector(`jb-button`)?.shadowRoot?.querySelector(`button`);f(t).toBeTruthy(),f(n).toBeTruthy(),await m(()=>{f(t?.initialValue?.name).toBe(`initial.txt`),f(t?.value).toBe(t?.initialValue),f(t?.isDirty).toBe(!1)}),Reflect.set(t,`value`,`not-a-file`),f(t?.value).toBe(t?.initialValue),f(t?.isDirty).toBe(!1),t.value=new File([`live`],`live.txt`,{type:`text/plain`}),await m(()=>{f(t?.value?.name).toBe(`live.txt`),f(t?.isDirty).toBe(!0)}),t.initialValue=new File([`next`],`next.txt`,{type:`text/plain`}),f(t?.initialValue?.name).toBe(`next.txt`),f(t?.value?.name).toBe(`live.txt`),f(t?.isDirty).toBe(!0),await p.click(n),await m(()=>{f(t?.value).toBe(t?.initialValue),f(t?.value?.name).toBe(`next.txt`),f(t?.isDirty).toBe(!1)});let r=new File([`clean`],`clean.txt`,{type:`text/plain`});t.initialValue=r,await m(()=>{f(t?.value).toBe(r),f(t?.isDirty).toBe(!1)})}},D={args:{initialValue:g,value:_},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-file-input`);await m(()=>{f(t?.initialValue?.name).toBe(`initial.txt`),f(t?.value?.name).toBe(`live.txt`),f(t?.isDirty).toBe(!0)})}},O={play:async({canvasElement:e})=>{let t=e.querySelector(`jb-file-input`),n=new File([`initial`],`initial.txt`,{type:`text/plain`});f(t?.value).toBeNull(),t.resetValue(),t.initialValue=n,await m(()=>{f(t?.value).toBe(n),f(t?.isDirty).toBe(!1)})}},k={args:{initialValue:g,value:null},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-file-input`);await m(()=>{f(t?.initialValue?.name).toBe(`initial.txt`),f(t?.value).toBeNull(),f(t?.isDirty).toBe(!0)})}},A={args:{required:!0,label:`Select a required file`},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-file-input`),n=t?.shadowRoot?.querySelector(`.placeholder-section`),r=t?.shadowRoot?.querySelector(`.upload-section`),i=t?.shadowRoot?.querySelector(`.file-section`);await m(()=>{f(getComputedStyle(n).display).toBe(`block`),f(getComputedStyle(r).display).toBe(`none`),f(getComputedStyle(i).display).toBe(`none`)}),f(t?.checkValidity()).toBe(!1)}},j={args:{disabled:!0,value:_},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-file-input`),n=t?.shadowRoot,r=n?.querySelector(`.placeholder-section`),i=n?.querySelector(`.file-wrapper`),a=n?.querySelector(`.reselect-button`),o=n?.querySelector(`.delete-button`),s=n?.querySelector(`.download-button`),c=0,l=0;t?.addEventListener(`delete`,()=>c++),t?.addEventListener(`download`,()=>l++),await m(()=>{f(t?.disabled).toBe(!0),f(r?.disabled).toBe(!0),f(i?.disabled).toBe(!0),f(a?.disabled).toBe(!0),f(o?.hasAttribute(`disabled`)).toBe(!0),f(s?.hasAttribute(`disabled`)).toBe(!1),f(getComputedStyle(a).display).toBe(`none`),f(getComputedStyle(o).display).toBe(`none`)}),o?.click(),s?.click(),f(t?.value).toBe(_),f(c).toBe(0),f(l).toBe(1)}},M={args:{uploading:!0,uploadPercent:70}},N={args:{hideDownload:!0}},P={render:()=>{let e=(0,u.useMemo)(()=>new File([],`TestFileName.txt`),[]);return(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`1rem`},children:[(0,d.jsx)(s,{style:{height:`8rem`}}),(0,d.jsx)(s,{style:{height:`8rem`},value:e}),(0,d.jsx)(s,{style:{height:`8rem`},uploading:!0,uploadPercent:70}),(0,d.jsx)(s,{style:{height:`7rem`}}),(0,d.jsx)(s,{style:{height:`7rem`},value:e}),(0,d.jsx)(s,{style:{height:`7rem`},uploading:!0,uploadPercent:70}),(0,d.jsx)(s,{style:{height:`5rem`}}),(0,d.jsx)(s,{style:{height:`5rem`},value:e}),(0,d.jsx)(s,{style:{height:`5rem`},uploading:!0,uploadPercent:70}),(0,d.jsx)(s,{style:{height:`4rem`}}),(0,d.jsx)(s,{style:{height:`4rem`},value:e}),(0,d.jsx)(s,{style:{height:`4rem`},uploading:!0,uploadPercent:70}),(0,d.jsx)(s,{style:{height:`3rem`}}),(0,d.jsx)(s,{style:{height:`3rem`},value:e}),(0,d.jsx)(s,{style:{height:`3rem`},uploading:!0,uploadPercent:70}),(0,d.jsx)(s,{style:{height:`2rem`}}),(0,d.jsx)(s,{style:{height:`2rem`},value:e}),(0,d.jsx)(s,{style:{height:`2rem`},uploading:!0,uploadPercent:70})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select a contract file',
    message: 'PDF files up to 1 MB'
  },
  play: async ({
    canvasElement
  }) => {
    const fileInput = canvasElement.querySelector<JBFileInputWebComponent>('jb-file-input');
    await waitFor(() => {
      expect(fileInput?.shadowRoot?.querySelector('.placeholder-title')?.textContent).toBe('Select a contract file');
      expect(fileInput?.shadowRoot?.querySelector('.message-box')?.textContent).toBe('PDF files up to 1 MB');
    });
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select a contract file",
    message: "PDF files up to 1 MB",
    error: "The selected file is not allowed"
  },
  play: async ({
    canvasElement
  }) => {
    const fileInput = canvasElement.querySelector<JBFileInputWebComponent>("jb-file-input");
    const message = fileInput?.shadowRoot?.querySelector<HTMLElement>(".message-box");
    await waitFor(() => {
      expect(fileInput?.checkValidity()).toBe(false);
      expect(message?.textContent).toBe("The selected file is not allowed");
      expect(message?.classList.contains("error")).toBe(true);
    });
    fileInput!.error = null;
    fileInput!.reportValidity();
    expect(message?.textContent).toBe("PDF files up to 1 MB");
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    required: true
  },
  play: async ({
    canvasElement
  }) => {
    const fileInput = canvasElement.querySelector<JBFileInputWebComponent>('jb-file-input');
    const invalid = new File([''], 'empty.txt', {
      type: 'text/plain'
    });
    expect(fileInput).toBeTruthy();
    expect(typeof fileInput?.openFileSelector).toBe('function');
    expect(typeof fileInput?.resetValue).toBe('function');
    expect(fileInput?.checkValidity()).toBe(false);
    expect(fileInput?.reportValidity()).toBe(false);
    fileInput!.value = invalid;
    await waitFor(() => {
      expect(fileInput?.value?.name).toBe('empty.txt');
      expect(fileInput?.checkValidity()).toBe(true);
    });
    fileInput!.resetValue();
    expect(fileInput?.value).toBeNull();
    expect(fileInput?.status).toBe('empty');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    value: liveFile
  },
  play: async ({
    canvasElement
  }) => {
    const fileInput = canvasElement.querySelector<JBFileInputWebComponent>('jb-file-input');
    fileInput!.validation.list = [{
      validator: ({
        file
      }) => file !== null && file.size < 3,
      message: 'File must be smaller than 3 bytes'
    }];
    expect(fileInput?.checkValidity()).toBe(false);
    expect(fileInput?.reportValidity()).toBe(false);
    expect(fileInput?.shadowRoot?.querySelector('.jb-file-input-web-component')?.classList.contains('--has-error')).toBe(true);
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    maxSize: 1,
    value: new File(["a".repeat(1025)], "too-large.txt", {
      type: "text/plain"
    })
  },
  play: async ({
    canvasElement
  }) => {
    const fileInput = canvasElement.querySelector<JBFileInputWebComponent>("jb-file-input");
    const component = fileInput?.shadowRoot?.querySelector<HTMLElement>(".jb-file-input-web-component");
    const errorOverlay = fileInput?.shadowRoot?.querySelector<HTMLElement>(".error-overlay");
    const errorMessage = errorOverlay?.querySelector<HTMLElement>(".error-message");
    await waitFor(() => {
      expect(fileInput?.maxSize).toBe(1);
      expect(fileInput?.checkValidity()).toBe(false);
      expect(fileInput?.validationMessage).toBe("File size must not exceed 1 KB");
      expect(component?.classList.contains("--has-error")).toBe(true);
      expect(errorMessage?.textContent).toBe("File size must not exceed 1 KB");
      expect(getComputedStyle(errorOverlay!).display).toBe("flex");
    });
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(component?.classList.contains("--has-error")).toBe(true);
    expect(errorMessage?.textContent).toBe("File size must not exceed 1 KB");
    expect(getComputedStyle(errorOverlay!).display).toBe("flex");
    fileInput!.maxSize = null;
    await waitFor(() => {
      expect(fileInput?.checkValidity()).toBe(true);
      expect(getComputedStyle(errorOverlay!).display).toBe("none");
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: liveFile
  },
  play: async ({
    canvasElement
  }) => {
    const fileInput = canvasElement.querySelector<JBFileInputWebComponent>('jb-file-input');
    const downloadButton = fileInput?.shadowRoot?.querySelector<HTMLElement>('.download-button');
    const deleteButton = fileInput?.shadowRoot?.querySelector<HTMLElement>('.delete-button');
    let changeCount = 0;
    let downloadCount = 0;
    let deleteCount = 0;
    fileInput?.addEventListener('change', () => changeCount++);
    fileInput?.addEventListener('download', () => downloadCount++);
    fileInput?.addEventListener('delete', () => deleteCount++);
    downloadButton?.click();
    deleteButton?.click();
    await waitFor(() => {
      expect(downloadCount).toBe(1);
      expect(deleteCount).toBe(1);
      expect(changeCount).toBe(1);
      expect(fileInput?.value).toBeNull();
    });
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <JBFileInput {...args}>
      <span slot="placeholder">Drop a file here</span>
      <span slot="overlay-content">Ready to download</span>
    </JBFileInput>,
  play: async ({
    canvasElement
  }) => {
    const fileInput = canvasElement.querySelector<JBFileInputWebComponent>('jb-file-input');
    expect(fileInput?.querySelector('[slot="placeholder"]')?.textContent).toBe('Drop a file here');
    expect(fileInput?.querySelector('[slot="overlay-content"]')?.textContent).toBe('Ready to download');
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const formRef = useRef<HTMLFormElement>(null);
    return <form ref={formRef}>
        <JBFileInput {...args} />
        <JBButton type="button" onClick={() => formRef.current?.reset()}>Reset</JBButton>
      </form>;
  },
  args: {
    label: 'initial file',
    initialValue: initialFile
  },
  play: async ({
    canvasElement
  }) => {
    const fileInput = canvasElement.querySelector<JBFileInputWebComponent>('jb-file-input');
    const resetButton = canvasElement.querySelector('jb-button')?.shadowRoot?.querySelector<HTMLButtonElement>('button');
    expect(fileInput).toBeTruthy();
    expect(resetButton).toBeTruthy();
    await waitFor(() => {
      expect(fileInput?.initialValue?.name).toBe('initial.txt');
      expect(fileInput?.value).toBe(fileInput?.initialValue);
      expect(fileInput?.isDirty).toBe(false);
    });
    Reflect.set(fileInput!, 'value', 'not-a-file');
    expect(fileInput?.value).toBe(fileInput?.initialValue);
    expect(fileInput?.isDirty).toBe(false);
    fileInput!.value = new File(['live'], 'live.txt', {
      type: 'text/plain'
    });
    await waitFor(() => {
      expect(fileInput?.value?.name).toBe('live.txt');
      expect(fileInput?.isDirty).toBe(true);
    });
    fileInput!.initialValue = new File(['next'], 'next.txt', {
      type: 'text/plain'
    });
    expect(fileInput?.initialValue?.name).toBe('next.txt');
    expect(fileInput?.value?.name).toBe('live.txt');
    expect(fileInput?.isDirty).toBe(true);
    await userEvent.click(resetButton!);
    await waitFor(() => {
      expect(fileInput?.value).toBe(fileInput?.initialValue);
      expect(fileInput?.value?.name).toBe('next.txt');
      expect(fileInput?.isDirty).toBe(false);
    });
    const cleanInitialFile = new File(['clean'], 'clean.txt', {
      type: 'text/plain'
    });
    fileInput!.initialValue = cleanInitialFile;
    await waitFor(() => {
      expect(fileInput?.value).toBe(cleanInitialFile);
      expect(fileInput?.isDirty).toBe(false);
    });
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: initialFile,
    value: liveFile
  },
  play: async ({
    canvasElement
  }) => {
    const fileInput = canvasElement.querySelector<JBFileInputWebComponent>('jb-file-input');
    await waitFor(() => {
      expect(fileInput?.initialValue?.name).toBe('initial.txt');
      expect(fileInput?.value?.name).toBe('live.txt');
      expect(fileInput?.isDirty).toBe(true);
    });
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const fileInput = canvasElement.querySelector<JBFileInputWebComponent>('jb-file-input');
    const initialFile = new File(['initial'], 'initial.txt', {
      type: 'text/plain'
    });
    expect(fileInput?.value).toBeNull();
    fileInput!.resetValue();
    fileInput!.initialValue = initialFile;
    await waitFor(() => {
      expect(fileInput?.value).toBe(initialFile);
      expect(fileInput?.isDirty).toBe(false);
    });
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: initialFile,
    value: null
  },
  play: async ({
    canvasElement
  }) => {
    const fileInput = canvasElement.querySelector<JBFileInputWebComponent>('jb-file-input');
    await waitFor(() => {
      expect(fileInput?.initialValue?.name).toBe('initial.txt');
      expect(fileInput?.value).toBeNull();
      expect(fileInput?.isDirty).toBe(true);
    });
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    label: "Select a required file"
  },
  play: async ({
    canvasElement
  }) => {
    const fileInput = canvasElement.querySelector<JBFileInputWebComponent>("jb-file-input");
    const placeholderSection = fileInput?.shadowRoot?.querySelector<HTMLElement>(".placeholder-section");
    const uploadSection = fileInput?.shadowRoot?.querySelector<HTMLElement>(".upload-section");
    const fileSection = fileInput?.shadowRoot?.querySelector<HTMLElement>(".file-section");
    await waitFor(() => {
      expect(getComputedStyle(placeholderSection!).display).toBe("block");
      expect(getComputedStyle(uploadSection!).display).toBe("none");
      expect(getComputedStyle(fileSection!).display).toBe("none");
    });
    expect(fileInput?.checkValidity()).toBe(false);
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: liveFile
  },
  play: async ({
    canvasElement
  }) => {
    const fileInput = canvasElement.querySelector<JBFileInputWebComponent>('jb-file-input');
    const shadowRoot = fileInput?.shadowRoot;
    const placeholderButton = shadowRoot?.querySelector<HTMLButtonElement>('.placeholder-section');
    const fileButton = shadowRoot?.querySelector<HTMLButtonElement>('.file-wrapper');
    const reselectButton = shadowRoot?.querySelector<HTMLButtonElement>('.reselect-button');
    const deleteButton = shadowRoot?.querySelector<HTMLElement>('.delete-button');
    const downloadButton = shadowRoot?.querySelector<HTMLElement>('.download-button');
    let deleteEventCount = 0;
    let downloadEventCount = 0;
    fileInput?.addEventListener('delete', () => deleteEventCount++);
    fileInput?.addEventListener('download', () => downloadEventCount++);
    await waitFor(() => {
      expect(fileInput?.disabled).toBe(true);
      expect(placeholderButton?.disabled).toBe(true);
      expect(fileButton?.disabled).toBe(true);
      expect(reselectButton?.disabled).toBe(true);
      expect(deleteButton?.hasAttribute('disabled')).toBe(true);
      expect(downloadButton?.hasAttribute('disabled')).toBe(false);
      expect(getComputedStyle(reselectButton!).display).toBe('none');
      expect(getComputedStyle(deleteButton!).display).toBe('none');
    });
    deleteButton?.click();
    downloadButton?.click();
    expect(fileInput?.value).toBe(liveFile);
    expect(deleteEventCount).toBe(0);
    expect(downloadEventCount).toBe(1);
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    uploading: true,
    uploadPercent: 70
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    hideDownload: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const file = useMemo(() => new File([], "TestFileName.txt"), []);
    return <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: \`1rem\`
    }}>
        <JBFileInput style={{
        height: \`8rem\`
      }} />
        <JBFileInput style={{
        height: \`8rem\`
      }} value={file} />
        <JBFileInput style={{
        height: \`8rem\`
      }} uploading uploadPercent={70} />
        <JBFileInput style={{
        height: \`7rem\`
      }} />
        <JBFileInput style={{
        height: \`7rem\`
      }} value={file} />
        <JBFileInput style={{
        height: \`7rem\`
      }} uploading uploadPercent={70} />
        <JBFileInput style={{
        height: \`5rem\`
      }} />
        <JBFileInput style={{
        height: \`5rem\`
      }} value={file} />
        <JBFileInput style={{
        height: \`5rem\`
      }} uploading uploadPercent={70} />
        <JBFileInput style={{
        height: \`4rem\`
      }} />
        <JBFileInput style={{
        height: \`4rem\`
      }} value={file} />
        <JBFileInput style={{
        height: \`4rem\`
      }} uploading uploadPercent={70} />
        <JBFileInput style={{
        height: \`3rem\`
      }} />
        <JBFileInput style={{
        height: \`3rem\`
      }} value={file} />
        <JBFileInput style={{
        height: \`3rem\`
      }} uploading uploadPercent={70} />
        <JBFileInput style={{
        height: \`2rem\`
      }} />
        <JBFileInput style={{
        height: \`2rem\`
      }} value={file} />
        <JBFileInput style={{
        height: \`2rem\`
      }} uploading uploadPercent={70} />
      </div>;
  }
}`,...P.parameters?.docs?.source}}},F=[`Normal`,`Label`,`ExternalError`,`ImperativeMethods`,`CustomValidation`,`MaxSizeValidation`,`Events`,`Slots`,`InitialValue`,`InitialValueDoesNotOverrideValue`,`RedundantResetDoesNotBlockInitialValue`,`ExplicitNullValueDoesNotFallBackToInitialValue`,`Required`,`Disabled`,`Uploading`,`HideDownloadButton`,`Sizes`]}));I();export{S as CustomValidation,j as Disabled,w as Events,k as ExplicitNullValueDoesNotFallBackToInitialValue,b as ExternalError,N as HideDownloadButton,x as ImperativeMethods,E as InitialValue,D as InitialValueDoesNotOverrideValue,y as Label,C as MaxSizeValidation,v as Normal,O as RedundantResetDoesNotBlockInitialValue,A as Required,P as Sizes,T as Slots,M as Uploading,F as __namedExportsOrder,h as default,I as n,l as t};