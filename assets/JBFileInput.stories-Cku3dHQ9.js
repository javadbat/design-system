import{r as v,R as e}from"./index-CwcVQgaJ.js";import{n as t}from"./JBFileInput-CxVVEBbs.js";const P={title:"Components/form elements/JBFileInput",component:t,args:{style:{height:"10rem"}}},n={args:{}},l={args:{required:!0,placeholderTitle:"click and open select file then hit the cancel for test"}},a={args:{uploading:!0,uploadPercent:70}},i={args:{hideDownload:!0}},s={render:()=>{const r=v.useMemo(()=>new File([],"TestFileName.txt"),[]);return e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"}},e.createElement(t,{style:{height:"8rem"}}),e.createElement(t,{style:{height:"8rem"},value:r}),e.createElement(t,{style:{height:"8rem"},uploading:!0,uploadPercent:70}),e.createElement(t,{style:{height:"7rem"}}),e.createElement(t,{style:{height:"7rem"},value:r}),e.createElement(t,{style:{height:"7rem"},uploading:!0,uploadPercent:70}),e.createElement(t,{style:{height:"5rem"}}),e.createElement(t,{style:{height:"5rem"},value:r}),e.createElement(t,{style:{height:"5rem"},uploading:!0,uploadPercent:70}),e.createElement(t,{style:{height:"4rem"}}),e.createElement(t,{style:{height:"4rem"},value:r}),e.createElement(t,{style:{height:"4rem"},uploading:!0,uploadPercent:70}),e.createElement(t,{style:{height:"3rem"}}),e.createElement(t,{style:{height:"3rem"},value:r}),e.createElement(t,{style:{height:"3rem"},uploading:!0,uploadPercent:70}),e.createElement(t,{style:{height:"2rem"}}),e.createElement(t,{style:{height:"2rem"},value:r}),e.createElement(t,{style:{height:"2rem"},uploading:!0,uploadPercent:70}))}};var o,u,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {}
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var c,p,h;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    required: true,
    placeholderTitle: "click and open select file then hit the cancel for test"
  }
}`,...(h=(p=l.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var d,g,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    uploading: true,
    uploadPercent: 70
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var F,f,B;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    hideDownload: true
  }
}`,...(B=(f=i.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var E,I,J;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(J=(I=s.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const S=["Normal","Required","Uploading","HideDownloadButton","Sizes"],_=Object.freeze(Object.defineProperty({__proto__:null,HideDownloadButton:i,Normal:n,Required:l,Sizes:s,Uploading:a,__namedExportsOrder:S,default:P},Symbol.toStringTag,{value:"Module"}));export{_ as F,n as N};
