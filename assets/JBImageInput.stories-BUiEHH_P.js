import{R as a}from"./index-0yr9KlQE.js";import{u as l}from"./JBImageInput-BimWcVOj.js";import{a as p}from"./index-BQJyKPGC.js";import"./jb-validation-BFHHOeHY.js";import"./index-Dsu68ezD.js";const d={uploader:(e,n)=>new Promise((o,s)=>{var r=new FormData;r.append("image",e),p.post("http://localhost:3200/image/upload",r,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>{o(t.data.fileName.path)}).catch(t=>{console.error(t)})}),downloader:(e,n)=>new Promise((o,s)=>{p.get("http://localhost:3200/image/download",{params:{imagePath:e},responseType:"blob"}).then(r=>{var t=new window.FileReader;t.readAsDataURL(r.data),t.onload=function(){var T=t.result;o(T)}}).catch(r=>{console.error(r)})})};function E(e){function n(s){console.log("image changed")}function o(s){console.error(`your file size   is not valid your size is:${s.detail.file.size}`)}return a.createElement("div",null,a.createElement(l,{bridge:d,onChange:n,config:{}}),a.createElement("h3",null,"with 2MB max size limit"),a.createElement(l,{bridge:d,onChange:n,config:{},maxFileSize:2*1024*1024,onMaxSizeExceed:o}))}E.propTypes={};const J={title:"Components/form elements/JBImageInput",component:l},i={args:{acceptTypes:"image/jpeg,image/jpg,image/png,image/svg+xml",message:"extra message"}},c={render:e=>a.createElement(E,{...e})},m={render:e=>a.createElement(l,{...e},a.createElement("div",{slot:"placeholder",style:{width:"100%",height:"100%"}},a.createElement("div",{style:{width:"100%",height:"100%",background:"red",display:"flex",justifyContent:"center",alignItems:"center"}},"custom placeholder")))};var g,u,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(w=m.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const b=["Normal","ActionTest","WithPlaceHolder"];export{c as ActionTest,i as Normal,m as WithPlaceHolder,b as __namedExportsOrder,J as default};
