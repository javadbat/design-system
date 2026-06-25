import{R as r}from"./index-D4lIrffr.js";import{n as d}from"./JBImageInput-E42lJ87U.js";import{a as p}from"./index-xsH4HHeE.js";const u={uploader:(e,l)=>new Promise((s,g)=>{var t=new FormData;t.append("image",e),p.post("http://localhost:3200/image/upload",t,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>{s(a.data.fileName.path)}).catch(a=>{console.error(a)})}),downloader:(e,l)=>new Promise((s,g)=>{p.get("http://localhost:3200/image/download",{params:{imagePath:e},responseType:"blob"}).then(t=>{var a=new window.FileReader;a.readAsDataURL(t.data),a.onload=function(){var B=a.result;s(B)}}).catch(t=>{console.error(t)})})};function A(e){function l(g){console.log("image changed")}function s(g){console.error(`your file size   is not valid your size is:${g.detail.file.size}`)}return r.createElement("div",null,r.createElement(d,{bridge:u,onChange:l,config:{}}),r.createElement("h3",null,"with 2MB max size limit"),r.createElement(d,{bridge:u,onChange:l,config:{},maxFileSize:2*1024*1024,onMaxSizeExceed:s}))}A.propTypes={};const C={title:"Components/form elements/JBImageInput",component:d},o={args:{acceptTypes:"image/jpeg,image/jpg,image/png,image/svg+xml",message:"extra message"}},n={args:{message:"extra message",required:!0}},i={args:{message:"extra message",required:"you must fill this field to continue"}},c={render:e=>r.createElement(A,{...e})},m={render:e=>r.createElement(d,{...e},r.createElement("div",{slot:"placeholder",style:{width:"100%",height:"100%"}},r.createElement("div",{style:{width:"100%",height:"100%",background:"red",display:"flex",justifyContent:"center",alignItems:"center"}},"custom placeholder")))};var h,f,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    acceptTypes: "image/jpeg,image/jpg,image/png,image/svg+xml",
    message: "extra message"
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,I,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    message: "extra message",
    required: true
  }
}`,...(v=(I=n.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var w,T,j;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    message: "extra message",
    required: "you must fill this field to continue"
  }
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var E,S,b;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <JBImageInputActionTest {...args}></JBImageInputActionTest>
}`,...(b=(S=c.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var q,R,z;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(z=(R=m.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const J=["Normal","Required","RequiredWithMessage","ActionTest","WithPlaceHolder"],D=Object.freeze(Object.defineProperty({__proto__:null,ActionTest:c,Normal:o,Required:n,RequiredWithMessage:i,WithPlaceHolder:m,__namedExportsOrder:J,default:C},Symbol.toStringTag,{value:"Module"}));export{c as A,D as I,o as N};
