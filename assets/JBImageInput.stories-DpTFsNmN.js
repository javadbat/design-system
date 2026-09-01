import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-DIBpeuX4.js";import{r as a,t as o}from"./react-Cxlx6W1K.js";import{r as s,t as c}from"./react-Cz6S1NBY.js";function l(e){function t(e){console.log(`image changed`)}function n(e){console.error(`your file size   is not valid your size is:${e.detail.file.size}`)}return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(s,{downloader:d,onChange:t,config:{}}),(0,u.jsx)(`h3`,{children:`with 2MB max size limit`}),(0,u.jsx)(s,{downloader:d,onChange:t,config:{},maxFileSize:2*1024*1024,onMaxSizeExceed:n})]})}var u,d,f=t((()=>{c(),u=i(),d=(e,t)=>fetch(e).then(e=>e.blob()).then(e=>new Promise(t=>{var n=new window.FileReader;n.readAsDataURL(e),n.onload=function(){t(n.result)}})),l.propTypes={},l.__docgenInfo={description:``,methods:[],displayName:`JBImageInputActionTest`}})),p=e({ActionTest:()=>P,BridgeAndValue:()=>C,ExplicitNullValueDoesNotFallBackToInitialValue:()=>j,InitialValue:()=>k,InitialValueDoesNotOverrideValue:()=>A,MaxFileSize:()=>w,MultipleSelection:()=>T,Normal:()=>x,Required:()=>M,RequiredWithMessage:()=>N,WithPlaceHolder:()=>F,__namedExportsOrder:()=>I,default:()=>b}),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=t((()=>{m=n(r(),1),o(),c(),f(),h=i(),{expect:g,fn:_,userEvent:v,waitFor:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/form elements/JBImageInput`,component:s},x={args:{acceptTypes:`image/jpeg,image/jpg,image/png,image/svg+xml`,message:`extra message`}},S=`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Q5NzcyMiIvPjwvc3ZnPg==`,C={render:()=>(0,h.jsx)(s,{label:`Profile image`,message:`Upload a profile image`,value:`profile-42`,downloader:async()=>S}),play:async({canvasElement:e})=>{let t=e.querySelector(`jb-image-input`);g(t).toBeTruthy(),await y(()=>{g(t?.value).toBe(`profile-42`),g(t?.status).toBe(`downloaded`),g(t?.imageBase64Value).toBe(S)});let n=E(`uploaded.svg`,`green`);await t.selectImageByFile(n),await y(()=>{g(t?.value).toBe(n),g(t?.file?.name).toBe(`uploaded.svg`),g(t?.status).toBe(`downloaded`)})}},w={render:()=>(0,h.jsx)(s,{label:`Small image only`,maxFileSize:8}),play:async({canvasElement:e})=>{let t=e.querySelector(`jb-image-input`),n=_();t?.addEventListener(`maxSizeExceed`,n),await t?.selectImageByFile(new File([`this file is too large`],`large.svg`,{type:`image/svg+xml`})),g(n).toHaveBeenCalledOnce(),g(t?.file).toBeNull(),g(t?.value).toBeNull()}},T={render:()=>(0,h.jsx)(s,{label:`Gallery images`,multiple:!0,acceptTypes:`image/png,image/jpeg`}),play:async({canvasElement:e})=>{let t=e.querySelector(`jb-image-input`);g(t?.multiple).toBe(!0),g(t?.acceptTypes).toBe(`image/png,image/jpeg`)}},E=(e,t)=>new File([`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="${t}"/></svg>`],e,{type:`image/svg+xml`}),D=E(`initial.svg`,`blue`),O=E(`live.svg`,`red`),k={render:e=>{let t=(0,m.useRef)(null);return(0,h.jsxs)(`form`,{ref:t,children:[(0,h.jsx)(s,{label:e.label,initialValue:e.initialValue}),(0,h.jsx)(a,{type:`button`,onClick:()=>t.current?.reset(),children:`Reset`})]})},args:{label:`initial image`,initialValue:D},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-image-input`),n=e.querySelector(`jb-button`)?.shadowRoot?.querySelector(`button`);g(t).toBeTruthy(),g(n).toBeTruthy(),await y(()=>{g(t?.initialValue?.name).toBe(`initial.svg`),g(t?.value).toBe(t?.initialValue),g(t?.isDirty).toBe(!1)}),t.value=E(`live.svg`,`red`),await y(()=>{g(t?.value?.name).toBe(`live.svg`),g(t?.isDirty).toBe(!0)}),t.initialValue=E(`next.svg`,`green`),g(t?.initialValue?.name).toBe(`next.svg`),g(t?.value?.name).toBe(`live.svg`),g(t?.isDirty).toBe(!0),await v.click(n),await y(()=>{g(t?.value).toBe(t?.initialValue),g(t?.value?.name).toBe(`next.svg`),g(t?.isDirty).toBe(!1)});let r=E(`clean.svg`,`purple`);t.initialValue=r,await y(()=>{g(t?.value).toBe(r),g(t?.isDirty).toBe(!1)})}},A={args:{initialValue:D,value:O},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-image-input`);await y(()=>{g(t?.initialValue?.name).toBe(`initial.svg`),g(t?.value?.name).toBe(`live.svg`),g(t?.isDirty).toBe(!0)})}},j={args:{initialValue:D,value:null},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-image-input`);await y(()=>{g(t?.initialValue?.name).toBe(`initial.svg`),g(t?.value).toBeNull(),g(t?.isDirty).toBe(!0)})}},M={args:{message:`extra message`,required:!0}},N={args:{message:`extra message`,required:`you must fill this field to continue`}},P={render:e=>(0,h.jsx)(l,{...e})},F={render:e=>(0,h.jsx)(s,{...e,children:(0,h.jsx)(`div`,{slot:`placeholder`,style:{width:`100%`,height:`100%`},children:(0,h.jsx)(`div`,{style:{width:`100%`,height:`100%`,background:`red`,display:`flex`,justifyContent:`center`,alignItems:`center`},children:`custom placeholder`})})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    acceptTypes: "image/jpeg,image/jpg,image/png,image/svg+xml",
    message: "extra message"
  }
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <JBImageInput<string> label="Profile image" message="Upload a profile image" value="profile-42" downloader={async () => bridgePreview} />,
  play: async ({
    canvasElement
  }) => {
    const imageInput = canvasElement.querySelector<JBImageInputWebComponent<string>>('jb-image-input');
    expect(imageInput).toBeTruthy();
    await waitFor(() => {
      expect(imageInput?.value).toBe('profile-42');
      expect(imageInput?.status).toBe('downloaded');
      expect(imageInput?.imageBase64Value).toBe(bridgePreview);
    });
    const selectedFile = createSvgFile('uploaded.svg', 'green');
    await imageInput!.selectImageByFile(selectedFile);
    await waitFor(() => {
      expect(imageInput?.value).toBe(selectedFile);
      expect(imageInput?.file?.name).toBe('uploaded.svg');
      expect(imageInput?.status).toBe('downloaded');
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <JBImageInput label="Small image only" maxFileSize={8} />,
  play: async ({
    canvasElement
  }) => {
    const imageInput = canvasElement.querySelector<JBImageInputWebComponent>('jb-image-input');
    const onMaxSizeExceed = fn();
    imageInput?.addEventListener('maxSizeExceed', onMaxSizeExceed);
    await imageInput?.selectImageByFile(new File(['this file is too large'], 'large.svg', {
      type: 'image/svg+xml'
    }));
    expect(onMaxSizeExceed).toHaveBeenCalledOnce();
    expect(imageInput?.file).toBeNull();
    expect(imageInput?.value).toBeNull();
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <JBImageInput label="Gallery images" multiple acceptTypes="image/png,image/jpeg" />,
  play: async ({
    canvasElement
  }) => {
    const imageInput = canvasElement.querySelector<JBImageInputWebComponent>('jb-image-input');
    expect(imageInput?.multiple).toBe(true);
    expect(imageInput?.acceptTypes).toBe('image/png,image/jpeg');
  }
}`,...T.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const formRef = useRef<HTMLFormElement>(null);
    return <form ref={formRef}>
        <JBImageInput<File> label={args.label} initialValue={args.initialValue as File | null | undefined} />
        <JBButton type="button" onClick={() => formRef.current?.reset()}>Reset</JBButton>
      </form>;
  },
  args: {
    label: 'initial image',
    initialValue: initialImage
  },
  play: async ({
    canvasElement
  }) => {
    const imageInput = canvasElement.querySelector<JBImageInputWebComponent<File>>('jb-image-input');
    const resetButton = canvasElement.querySelector('jb-button')?.shadowRoot?.querySelector<HTMLButtonElement>('button');
    expect(imageInput).toBeTruthy();
    expect(resetButton).toBeTruthy();
    await waitFor(() => {
      expect(imageInput?.initialValue?.name).toBe('initial.svg');
      expect(imageInput?.value).toBe(imageInput?.initialValue);
      expect(imageInput?.isDirty).toBe(false);
    });
    imageInput!.value = createSvgFile('live.svg', 'red');
    await waitFor(() => {
      expect(imageInput?.value?.name).toBe('live.svg');
      expect(imageInput?.isDirty).toBe(true);
    });
    imageInput!.initialValue = createSvgFile('next.svg', 'green');
    expect(imageInput?.initialValue?.name).toBe('next.svg');
    expect(imageInput?.value?.name).toBe('live.svg');
    expect(imageInput?.isDirty).toBe(true);
    await userEvent.click(resetButton!);
    await waitFor(() => {
      expect(imageInput?.value).toBe(imageInput?.initialValue);
      expect(imageInput?.value?.name).toBe('next.svg');
      expect(imageInput?.isDirty).toBe(false);
    });
    const cleanInitialImage = createSvgFile('clean.svg', 'purple');
    imageInput!.initialValue = cleanInitialImage;
    await waitFor(() => {
      expect(imageInput?.value).toBe(cleanInitialImage);
      expect(imageInput?.isDirty).toBe(false);
    });
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: initialImage,
    value: liveImage
  },
  play: async ({
    canvasElement
  }) => {
    const imageInput = canvasElement.querySelector<JBImageInputWebComponent<File>>('jb-image-input');
    await waitFor(() => {
      expect(imageInput?.initialValue?.name).toBe('initial.svg');
      expect(imageInput?.value?.name).toBe('live.svg');
      expect(imageInput?.isDirty).toBe(true);
    });
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    initialValue: initialImage,
    value: null
  },
  play: async ({
    canvasElement
  }) => {
    const imageInput = canvasElement.querySelector<JBImageInputWebComponent<File>>('jb-image-input');
    await waitFor(() => {
      expect(imageInput?.initialValue?.name).toBe('initial.svg');
      expect(imageInput?.value).toBeNull();
      expect(imageInput?.isDirty).toBe(true);
    });
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    message: "extra message",
    required: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    message: "extra message",
    required: "you must fill this field to continue"
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <JBImageInputActionTest {...args}></JBImageInputActionTest>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <JBImageInput {...args}>
      <div slot="placeholder" style={{
      width: '100%',
      height: '100%'
    }}>
        <div style={{
        width: '100%',
        height: '100%',
        background: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>custom placeholder</div>
      </div>
    </JBImageInput>
}`,...F.parameters?.docs?.source}}},I=[`Normal`,`BridgeAndValue`,`MaxFileSize`,`MultipleSelection`,`InitialValue`,`InitialValueDoesNotOverrideValue`,`ExplicitNullValueDoesNotFallBackToInitialValue`,`Required`,`RequiredWithMessage`,`ActionTest`,`WithPlaceHolder`]}));L();export{P as ActionTest,C as BridgeAndValue,j as ExplicitNullValueDoesNotFallBackToInitialValue,k as InitialValue,A as InitialValueDoesNotOverrideValue,w as MaxFileSize,T as MultipleSelection,x as Normal,M as Required,N as RequiredWithMessage,F as WithPlaceHolder,I as __namedExportsOrder,b as default,L as n,p as t};