import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-D02JOK2M.js";import{r as a,t as o}from"./react-DRRNnKfB.js";import{r as s,t as c}from"./react-KB-E5wku.js";var l=e({Disabled:()=>w,ExplicitNullValueDoesNotFallBackToInitialValue:()=>S,HideDownloadButton:()=>E,InitialValue:()=>y,InitialValueDoesNotOverrideValue:()=>b,Normal:()=>v,RedundantResetDoesNotBlockInitialValue:()=>x,Required:()=>C,Sizes:()=>D,Uploading:()=>T,__namedExportsOrder:()=>O,default:()=>h}),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k=t((()=>{u=n(r(),1),o(),c(),d=i(),{expect:f,userEvent:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/form elements/JBFileInput`,component:s,args:{style:{height:`10rem`}}},g=new File([`initial`],`initial.txt`,{type:`text/plain`}),_=new File([`live`],`live.txt`,{type:`text/plain`}),v={args:{}},y={render:e=>{let t=(0,u.useRef)(null);return(0,d.jsxs)(`form`,{ref:t,children:[(0,d.jsx)(s,{...e}),(0,d.jsx)(a,{type:`button`,onClick:()=>t.current?.reset(),children:`Reset`})]})},args:{placeholderTitle:`initial file`,initialValue:g},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-file-input`),n=e.querySelector(`jb-button`)?.shadowRoot?.querySelector(`button`);f(t).toBeTruthy(),f(n).toBeTruthy(),await m(()=>{f(t?.initialValue?.name).toBe(`initial.txt`),f(t?.value).toBe(t?.initialValue),f(t?.isDirty).toBe(!1)}),Reflect.set(t,`value`,`not-a-file`),f(t?.value).toBe(t?.initialValue),f(t?.isDirty).toBe(!1),t.value=new File([`live`],`live.txt`,{type:`text/plain`}),await m(()=>{f(t?.value?.name).toBe(`live.txt`),f(t?.isDirty).toBe(!0)}),t.initialValue=new File([`next`],`next.txt`,{type:`text/plain`}),f(t?.initialValue?.name).toBe(`next.txt`),f(t?.value?.name).toBe(`live.txt`),f(t?.isDirty).toBe(!0),await p.click(n),await m(()=>{f(t?.value).toBe(t?.initialValue),f(t?.value?.name).toBe(`next.txt`),f(t?.isDirty).toBe(!1)});let r=new File([`clean`],`clean.txt`,{type:`text/plain`});t.initialValue=r,await m(()=>{f(t?.value).toBe(r),f(t?.isDirty).toBe(!1)})}},b={args:{initialValue:g,value:_},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-file-input`);await m(()=>{f(t?.initialValue?.name).toBe(`initial.txt`),f(t?.value?.name).toBe(`live.txt`),f(t?.isDirty).toBe(!0)})}},x={play:async({canvasElement:e})=>{let t=e.querySelector(`jb-file-input`),n=new File([`initial`],`initial.txt`,{type:`text/plain`});f(t?.value).toBeNull(),t.resetValue(),t.initialValue=n,await m(()=>{f(t?.value).toBe(n),f(t?.isDirty).toBe(!1)})}},S={args:{initialValue:g,value:null},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-file-input`);await m(()=>{f(t?.initialValue?.name).toBe(`initial.txt`),f(t?.value).toBeNull(),f(t?.isDirty).toBe(!0)})}},C={args:{required:!0,placeholderTitle:`click and open select file then hit the cancel for test`}},w={args:{disabled:!0,value:_},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-file-input`),n=t?.shadowRoot,r=n?.querySelector(`.placeholder-section`),i=n?.querySelector(`.file-wrapper`),a=n?.querySelector(`.reselect-button`),o=n?.querySelector(`.delete-button`),s=n?.querySelector(`.download-button`),c=0,l=0;t?.addEventListener(`delete`,()=>c++),t?.addEventListener(`download`,()=>l++),await m(()=>{f(t?.disabled).toBe(!0),f(r?.disabled).toBe(!0),f(i?.disabled).toBe(!0),f(a?.disabled).toBe(!0),f(o?.hasAttribute(`disabled`)).toBe(!0),f(s?.hasAttribute(`disabled`)).toBe(!1),f(getComputedStyle(a).display).toBe(`none`),f(getComputedStyle(o).display).toBe(`none`)}),o?.click(),s?.click(),f(t?.value).toBe(_),f(c).toBe(0),f(l).toBe(1)}},T={args:{uploading:!0,uploadPercent:70}},E={args:{hideDownload:!0}},D={render:()=>{let e=(0,u.useMemo)(()=>new File([],`TestFileName.txt`),[]);return(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`1rem`},children:[(0,d.jsx)(s,{style:{height:`8rem`}}),(0,d.jsx)(s,{style:{height:`8rem`},value:e}),(0,d.jsx)(s,{style:{height:`8rem`},uploading:!0,uploadPercent:70}),(0,d.jsx)(s,{style:{height:`7rem`}}),(0,d.jsx)(s,{style:{height:`7rem`},value:e}),(0,d.jsx)(s,{style:{height:`7rem`},uploading:!0,uploadPercent:70}),(0,d.jsx)(s,{style:{height:`5rem`}}),(0,d.jsx)(s,{style:{height:`5rem`},value:e}),(0,d.jsx)(s,{style:{height:`5rem`},uploading:!0,uploadPercent:70}),(0,d.jsx)(s,{style:{height:`4rem`}}),(0,d.jsx)(s,{style:{height:`4rem`},value:e}),(0,d.jsx)(s,{style:{height:`4rem`},uploading:!0,uploadPercent:70}),(0,d.jsx)(s,{style:{height:`3rem`}}),(0,d.jsx)(s,{style:{height:`3rem`},value:e}),(0,d.jsx)(s,{style:{height:`3rem`},uploading:!0,uploadPercent:70}),(0,d.jsx)(s,{style:{height:`2rem`}}),(0,d.jsx)(s,{style:{height:`2rem`},value:e}),(0,d.jsx)(s,{style:{height:`2rem`},uploading:!0,uploadPercent:70})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const formRef = useRef<HTMLFormElement>(null);
    return <form ref={formRef}>
        <JBFileInput {...args} />
        <JBButton type="button" onClick={() => formRef.current?.reset()}>Reset</JBButton>
      </form>;
  },
  args: {
    placeholderTitle: 'initial file',
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    placeholderTitle: "click and open select file then hit the cancel for test"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    uploading: true,
    uploadPercent: 70
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    hideDownload: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Normal`,`InitialValue`,`InitialValueDoesNotOverrideValue`,`RedundantResetDoesNotBlockInitialValue`,`ExplicitNullValueDoesNotFallBackToInitialValue`,`Required`,`Disabled`,`Uploading`,`HideDownloadButton`,`Sizes`]}));k();export{w as Disabled,S as ExplicitNullValueDoesNotFallBackToInitialValue,E as HideDownloadButton,y as InitialValue,b as InitialValueDoesNotOverrideValue,v as Normal,x as RedundantResetDoesNotBlockInitialValue,C as Required,D as Sizes,T as Uploading,O as __namedExportsOrder,h as default,k as n,l as t};