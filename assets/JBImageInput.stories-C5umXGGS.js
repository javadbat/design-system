import{R as t}from"./index-D4lIrffr.js";import{u as l}from"./JBImageInput-Cs4pZA2h.js";import{A as p}from"./index-D7ggfW_U.js";import"./jb-validation-BFHHOeHY.js";import"./index-B65NTg4l.js";const g={uploader:(e,n)=>new Promise((o,s)=>{var r=new FormData;r.append("image",e),p.post("http://localhost:3200/image/upload",r,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>{o(a.data.fileName.path)}).catch(a=>{console.error(a)})}),downloader:(e,n)=>new Promise((o,s)=>{p.get("http://localhost:3200/image/download",{params:{imagePath:e},responseType:"blob"}).then(r=>{var a=new window.FileReader;a.readAsDataURL(r.data),a.onload=function(){var E=a.result;o(E)}}).catch(r=>{console.error(r)})})};function d(e){function n(s){console.log("image changed")}function o(s){console.error(`your file size   is not valid your size is:${s.detail.file.size}`)}return t.createElement("div",null,t.createElement(l,{bridge:g,onChange:n,config:{}}),t.createElement("h3",null,"with 2MB max size limit"),t.createElement(l,{bridge:g,onChange:n,config:{},maxFileSize:2*1024*1024,onMaxSizeExceed:o}))}d.propTypes={};d.__docgenInfo={description:"",methods:[],displayName:"JBImageInputActionTest"};const C={title:"Components/form elements/JBImageInput",component:l},i={args:{acceptTypes:"image/jpeg,image/jpg,image/png,image/svg+xml",message:"extra message"}},c={render:e=>t.createElement(d,{...e})},m={render:e=>t.createElement(l,{...e},t.createElement("div",{slot:"placeholder",style:{width:"100%",height:"100%"}},t.createElement("div",{style:{width:"100%",height:"100%",background:"red",display:"flex",justifyContent:"center",alignItems:"center"}},"custom placeholder")))};var u,h,f;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    acceptTypes: "image/jpeg,image/jpg,image/png,image/svg+xml",
    message: "extra message"
  }
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var I,y,v;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <JBImageInputActionTest {...args}></JBImageInputActionTest>
}`,...(v=(y=c.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,x,T;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(T=(x=m.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};const b=["Normal","ActionTest","WithPlaceHolder"];export{c as ActionTest,i as Normal,m as WithPlaceHolder,b as __namedExportsOrder,C as default};
