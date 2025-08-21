import{R as e,r as j}from"./index-0yr9KlQE.js";import{u as c,a,o as i}from"./index-B7AvDk-f.js";import"./index-BLDxcUx9.js";import"./jb-validation-BFHHOeHY.js";import"./index-DERdVVTI.js";import"./index-Dsu68ezD.js";function me(t){const n=["1","2","3"];return e.createElement("div",null,e.createElement("div",{className:"filter-select-style-1"},e.createElement(c,{label:t.label},e.createElement(a,{optionList:n}))),e.createElement("div",{className:"style-table-title-1"},"JB Select Custom Style 1"),e.createElement("div",{className:"style-table-content-1"},"--jb-select-margin: 0px 2px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-radius: 24px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: royalblue;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: tomato;",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: mintcream;"),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{className:"filter-select-style-2"},e.createElement(c,{label:t.label},e.createElement(a,{optionList:n}))),e.createElement("div",{className:"style-table-title-2"},"JB Select Custom Style 2"),e.createElement("div",{className:"style-table-content-2"},"--jb-select-margin: 0px 4px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-radius: 0px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: rgb(26, 23, 23);",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: rgb(30, 29, 43);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor-selected: rgb(195, 57, 230);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: lightgray;",e.createElement("br",null),e.createElement("br",null),"--jb-select-mobile-search-input-height: 64px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-bottom-width:1px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-mobile-item-list-border-radius:16px;"),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{className:"self-style-wrapper"},e.createElement(c,{className:"self-style-select",label:"self style",message:"this select get classname itself and style are not set to parent element"},e.createElement(a,{optionList:n}))),e.createElement("div",{className:"style-table-title-2"},"JB Select Custom Style 2"),e.createElement("div",{className:"style-table-content-2"},"--jb-select-margin: 0px 4px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-radius: 0px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: rgb(26, 23, 23);",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: rgb(30, 29, 43);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor-selected: rgb(195, 57, 230);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: lightgray;"),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{className:"with-divider-line"},e.createElement(c,{className:"self-style-select",label:"self style",message:"this select get classname itself and style are not set to parent element"},e.createElement(a,{optionList:n}))),e.createElement("div",{className:"style-table-title-2"},"JB Select Custom Style 3"),e.createElement("div",{className:"style-table-content-2"},"--jb-select-margin: 0px 4px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-radius: 0px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: rgb(26, 23, 23);",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: rgb(30, 29, 43);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor-selected: rgb(195, 57, 230);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: lightgray;"))}function ce(){const[t,n]=j.useState([]);function r(l=""){const s=[];for(let o=0;o<20;o++)s.push(`${l} - ${o}`);n(s)}j.useEffect(()=>{r()},[]);const m=function(l){const s=l.target.textValue;r(s)};return e.createElement("div",null,e.createElement(c,{label:"please type and see result change",onKeyup:m},e.createElement(a,{optionList:t})))}ce.propTypes={};function oe(){const[t]=j.useState([{id:1,name:"Red",value:"#f00"},{id:2,name:"Green",value:"#0f0"},{id:3,name:"Blue",value:"#00f"},{id:4,name:"Yellow",value:"#ff0"}]);function n(l,s){const o=document.createElement("div");return o.classList.add("select-option"),o.innerHTML='<span part="color-box" style="background-color:'+l.value+';width:16px;height:16px;display:inline-block;"></span>&nbsp;'+l.name,o.addEventListener("click",s),o}function r(l){const s=document.createElement("div");return s.classList.add("selected-value"),s.innerHTML='<span part="color-box" style="background-color:'+l.value+';width:16px;height:16px;display:inline-block;"></span>&nbsp;'+l.name,s}function m(l){return l.name}return e.createElement("div",null,e.createElement(c,{label:"normal",getSelectedValueDOM:r},t.map(l=>e.createElement(i,{key:l.value,value:l},e.createElement("span",{className:"color-circle",style:{backgroundColor:l.value}}),l.name))),e.createElement(c,{getSelectedValueDOM:r,label:"with option list"},e.createElement(a,{optionList:t,getTitle:m,getContentDOM:n})),e.createElement(c,null,e.createElement(i,{value:{name:"ali",age:10}},"Ali"),e.createElement(i,{value:{name:"reza",age:12}},"Reza"),e.createElement(i,{value:{name:"joe",age:14}},"Joe")))}oe.propTypes={};function ie(){const[t]=j.useState([{id:1,name:"Red",value:"#f00"},{id:2,name:"Green",value:"#0f0"},{id:3,name:"Blue",value:"#00f"},{id:4,name:"Yellow",value:"#ff0"}]);function n(r){const m=document.createElement("div");return m.classList.add("selected-value"),m.innerHTML='<span part="color-box" style="background-color:'+r.value+';width:16px;height:16px"></span>&nbsp;'+r.name,m}return e.createElement("div",{className:"select-wrapper"},e.createElement(c,{searchPlaceholder:"جست و جو",getSelectedValueDOM:n},t.map(r=>e.createElement(i,{value:r,key:r.value},e.createElement("span",{className:"color-circle",style:{backgroundColor:r.value}}),r.name)),e.createElement("div",{style:{height:"24px"},slot:"select-arrow-icon"},e.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("rect",{width:"24",height:"24",rx:"5",fill:"#E7E7E7"}),e.createElement("path",{d:"M19 8.5L12 15.5L5 8.5",stroke:"#8B8B8B",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})))))}const x=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39"],he={title:"Components/form elements/JBSelect",component:c,args:{children:e.createElement(a,{optionList:x})}},u={args:{label:"select from menu",message:"please select a value",placeholder:"select number here"}},d={args:{label:"select from menu",message:"please select a value",placeholder:"select number here",value:"5",children:e.createElement(a,{optionList:x})}},p={args:{label:"از منو انتخاب کنید",children:e.createElement(a,{optionList:[{name:"peter",family:"hanan",userId:1},{name:"reza",family:"asadi",userId:2}],getTitle:t=>`${t.name} ${t.family}`,getValue:t=>t.userId}),onChange:t=>{console.log("onChange",t.target.value)}}},b={args:{...u.args,onChange:()=>alert("Changed")}},g={args:{label:"از منو انتخاب کنید",children:e.createElement(a,{optionList:x})},parameters:{themes:{themeOverride:"rtl"},docs:{description:{story:"RTL test"}}}},E={render:t=>e.createElement(me,{label:t.label}),args:{label:"از منو انتخاب کنید"}},h={args:{label:"empty list",message:"this list is a empty list",children:e.createElement(a,{optionList:[]})}},v={args:{label:"select from in mobile",message:"put in mobile view and open menu. it must fill half of the page",placeholder:"select number here",children:e.createElement(a,{optionList:x}),style:{"--jb-select-mobile-modal-height":"50vh","--jb-select-mobile-modal-border-radius":"1rem"}}},y={args:{label:"with error",message:"please select a value",error:"error message"}},f={render:()=>e.createElement(ce,null)},L={render:()=>e.createElement(oe,null)},S={render:()=>e.createElement(ie,null)};var O,B,w;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "select number here"
  }
}`,...(w=(B=u.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var T,C,J;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "select number here",
    value: "5",
    children: <JBOptionList optionList={numberOptionList} />
  }
}`,...(J=(C=d.parameters)==null?void 0:C.docs)==null?void 0:J.source}}};var N,k,D;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'از منو انتخاب کنید',
    children: <JBOptionList optionList={[{
      name: 'peter',
      family: 'hanan',
      userId: 1
    }, {
      name: 'reza',
      family: 'asadi',
      userId: 2
    }]} getTitle={option => \`\${option.name} \${option.family}\`} getValue={option => option.userId} />,
    onChange: e => {
      console.log('onChange', e.target.value);
    }
  }
}`,...(D=(k=p.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var M,R,z;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    onChange: () => alert('Changed')
  }
}`,...(z=(R=b.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var V,I,H;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'از منو انتخاب کنید',
    children: <JBOptionList optionList={numberOptionList} />
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    },
    docs: {
      description: {
        story: 'RTL test'
      }
    }
  }
}`,...(H=(I=g.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var W,$,G;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <JBSelectStyleTest label={args.label}></JBSelectStyleTest>,
  args: {
    label: 'از منو انتخاب کنید'
  }
}`,...(G=($=E.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var P,Y,_;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'empty list',
    message: "this list is a empty list",
    children: <JBOptionList optionList={[]} />
  }
}`,...(_=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var A,K,q;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'select from in mobile',
    message: "put in mobile view and open menu. it must fill half of the page",
    placeholder: "select number here",
    children: <JBOptionList optionList={numberOptionList} />,
    style: {
      "--jb-select-mobile-modal-height": "50vh",
      "--jb-select-mobile-modal-border-radius": "1rem"
    } as React.CSSProperties
  }
}`,...(q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var F,Q,U;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: "please select a value",
    error: "error message"
  }
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <JBSelectDynamicList />
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,le,re;L.parameters={...L.parameters,docs:{...(te=L.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <CustomizedOptions />
}`,...(re=(le=L.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var ae,ne,se;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <JBSelectDesign />
}`,...(se=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const ve=["Normal","WithValue","OptionObject","EventTest","RTL","StyleTest","EmptyList","ModalHeight","WithError","DynamicList","CustomizedOption","JBSelectDesignTest"];export{L as CustomizedOption,f as DynamicList,h as EmptyList,b as EventTest,S as JBSelectDesignTest,v as ModalHeight,u as Normal,p as OptionObject,g as RTL,E as StyleTest,y as WithError,d as WithValue,ve as __namedExportsOrder,he as default};
