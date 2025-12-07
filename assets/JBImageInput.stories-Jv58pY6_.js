import{R as r}from"./index-DP23ewiS.js";import{u as g}from"./JBImageInput-DtsB6GLJ.js";import{a as p}from"./index-B9ygI19o.js";import"./jb-validation-BFHHOeHY.js";import"./index-DA-aheCX.js";import"./index-NH_qbYOC.js";import"./index-DGoq4Khl.js";const u={uploader:(e,o)=>new Promise((s,n)=>{var t=new FormData;t.append("image",e),p.post("http://localhost:3200/image/upload",t,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>{s(a.data.fileName.path)}).catch(a=>{console.error(a)})}),downloader:(e,o)=>new Promise((s,n)=>{p.get("http://localhost:3200/image/download",{params:{imagePath:e},responseType:"blob"}).then(t=>{var a=new window.FileReader;a.readAsDataURL(t.data),a.onload=function(){var C=a.result;s(C)}}).catch(t=>{console.error(t)})})};function A(e){function o(n){console.log("image changed")}function s(n){console.error(`your file size   is not valid your size is:${n.detail.file.size}`)}return r.createElement("div",null,r.createElement(g,{bridge:u,onChange:o,config:{}}),r.createElement("h3",null,"with 2MB max size limit"),r.createElement(g,{bridge:u,onChange:o,config:{},maxFileSize:2*1024*1024,onMaxSizeExceed:s}))}A.propTypes={};const N={title:"Components/form elements/JBImageInput",component:g},i={args:{acceptTypes:"image/jpeg,image/jpg,image/png,image/svg+xml",message:"extra message"}},m={args:{message:"extra message",required:!0}},c={args:{message:"extra message",required:"you must fill this field to continue"}},l={render:e=>r.createElement(A,{...e})},d={render:e=>r.createElement(g,{...e},r.createElement("div",{slot:"placeholder",style:{width:"100%",height:"100%"}},r.createElement("div",{style:{width:"100%",height:"100%",background:"red",display:"flex",justifyContent:"center",alignItems:"center"}},"custom placeholder")))};var h,f,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    acceptTypes: "image/jpeg,image/jpg,image/png,image/svg+xml",
    message: "extra message"
  }
}`,...(x=(f=i.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,I,v;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    message: "extra message",
    required: true
  }
}`,...(v=(I=m.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var w,E,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    message: "extra message",
    required: "you must fill this field to continue"
  }
}`,...(T=(E=c.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var j,q,R;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <JBImageInputActionTest {...args}></JBImageInputActionTest>
}`,...(R=(q=l.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var B,S,z;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(z=(S=d.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const k=["Normal","Required","RequiredWithMessage","ActionTest","WithPlaceHolder"];export{l as ActionTest,i as Normal,m as Required,c as RequiredWithMessage,d as WithPlaceHolder,k as __namedExportsOrder,N as default};
