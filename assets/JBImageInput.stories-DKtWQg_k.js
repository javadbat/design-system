import{R as t}from"./index-DhY--VwN.js";import{u as l}from"./JBImageInput-DE6WvZdT.js";import{a as p}from"./index-ngrFHoWO.js";import"./jb-validation-BFHHOeHY.js";import"./index-DA-aheCX.js";import"./index-NH_qbYOC.js";import"./index-BMrwitbN.js";const d={uploader:(e,n)=>new Promise((o,s)=>{var r=new FormData;r.append("image",e),p.post("http://localhost:3200/image/upload",r,{headers:{"Content-Type":"multipart/form-data"}}).then(a=>{o(a.data.fileName.path)}).catch(a=>{console.error(a)})}),downloader:(e,n)=>new Promise((o,s)=>{p.get("http://localhost:3200/image/download",{params:{imagePath:e},responseType:"blob"}).then(r=>{var a=new window.FileReader;a.readAsDataURL(r.data),a.onload=function(){var T=a.result;o(T)}}).catch(r=>{console.error(r)})})};function E(e){function n(s){console.log("image changed")}function o(s){console.error(`your file size   is not valid your size is:${s.detail.file.size}`)}return t.createElement("div",null,t.createElement(l,{bridge:d,onChange:n,config:{}}),t.createElement("h3",null,"with 2MB max size limit"),t.createElement(l,{bridge:d,onChange:n,config:{},maxFileSize:2*1024*1024,onMaxSizeExceed:o}))}E.propTypes={};const P={title:"Components/form elements/JBImageInput",component:l},i={args:{acceptTypes:"image/jpeg,image/jpg,image/png,image/svg+xml",message:"extra message"}},c={render:e=>t.createElement(E,{...e})},m={render:e=>t.createElement(l,{...e},t.createElement("div",{slot:"placeholder",style:{width:"100%",height:"100%"}},t.createElement("div",{style:{width:"100%",height:"100%",background:"red",display:"flex",justifyContent:"center",alignItems:"center"}},"custom placeholder")))};var g,u,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    acceptTypes: "image/jpeg,image/jpg,image/png,image/svg+xml",
    message: "extra message"
  }
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,y,I;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <JBImageInputActionTest {...args}></JBImageInputActionTest>
}`,...(I=(y=c.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var v,w,x;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(w=m.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const S=["Normal","ActionTest","WithPlaceHolder"];export{c as ActionTest,i as Normal,m as WithPlaceHolder,S as __namedExportsOrder,P as default};
