import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{ot as n,t as r}from"./iframe-9JcXr86A.js";import{n as i,t as a}from"./react-BtPa8vbW.js";import{n as o,t as s}from"./axios-BhFbVIec.js";function c(e){function t(e){console.log(`image changed`)}function n(e){console.error(`your file size   is not valid your size is:${e.detail.file.size}`)}return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(i,{bridge:u,onChange:t,config:{}}),(0,l.jsx)(`h3`,{children:`with 2MB max size limit`}),(0,l.jsx)(i,{bridge:u,onChange:t,config:{},maxFileSize:2*1024*1024,onMaxSizeExceed:n})]})}var l,u,d=t((()=>{n(),a(),s(),l=r(),u={uploader:(e,t)=>new Promise((t,n)=>{var r=new FormData;r.append(`image`,e),o.post(`http://localhost:3200/image/upload`,r,{headers:{"Content-Type":`multipart/form-data`}}).then(e=>{t(e.data.fileName.path)}).catch(e=>{console.error(e)})}),downloader:(e,t)=>new Promise((t,n)=>{o.get(`http://localhost:3200/image/download`,{params:{imagePath:e},responseType:`blob`}).then(e=>{var n=new window.FileReader;n.readAsDataURL(e.data),n.onload=function(){var e=n.result;t(e)}}).catch(e=>{console.error(e)})})},c.propTypes={},c.__docgenInfo={description:``,methods:[],displayName:`JBImageInputActionTest`}})),f=e({ActionTest:()=>v,Normal:()=>h,Required:()=>g,RequiredWithMessage:()=>_,WithPlaceHolder:()=>y,__namedExportsOrder:()=>b,default:()=>m}),p,m,h,g,_,v,y,b,x=t((()=>{n(),a(),d(),p=r(),m={title:`Components/form elements/JBImageInput`,component:i},h={args:{acceptTypes:`image/jpeg,image/jpg,image/png,image/svg+xml`,message:`extra message`}},g={args:{message:`extra message`,required:!0}},_={args:{message:`extra message`,required:`you must fill this field to continue`}},v={render:e=>(0,p.jsx)(c,{...e})},y={render:e=>(0,p.jsx)(i,{...e,children:(0,p.jsx)(`div`,{slot:`placeholder`,style:{width:`100%`,height:`100%`},children:(0,p.jsx)(`div`,{style:{width:`100%`,height:`100%`,background:`red`,display:`flex`,justifyContent:`center`,alignItems:`center`},children:`custom placeholder`})})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    acceptTypes: "image/jpeg,image/jpg,image/png,image/svg+xml",
    message: "extra message"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    message: "extra message",
    required: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    message: "extra message",
    required: "you must fill this field to continue"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <JBImageInputActionTest {...args}></JBImageInputActionTest>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Normal`,`Required`,`RequiredWithMessage`,`ActionTest`,`WithPlaceHolder`]}));x();export{v as ActionTest,h as Normal,g as Required,_ as RequiredWithMessage,y as WithPlaceHolder,b as __namedExportsOrder,m as default,x as n,f as t};