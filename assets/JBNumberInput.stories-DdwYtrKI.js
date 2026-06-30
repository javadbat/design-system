import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{ot as n,t as r}from"./iframe-CqEp92lC.js";import{n as i,t as a}from"./react-O72j8ORv.js";var o=t((()=>{})),s,c,l=t((()=>{n(),a(),o(),s=r(),c=()=>(0,s.jsx)(`div`,{className:`input-wrapper`,children:(0,s.jsx)(i,{label:`تست`,message:`این متن تست می باشد`})}),c.__docgenInfo={description:``,methods:[],displayName:`JBInputNumberTest`}})),u=e({NonNegativeNumberWithUnderlineSeparator:()=>g,Normal:()=>p,NumberWithButtons:()=>_,NumberWithComma:()=>m,NumberWithMinMax:()=>h,NumberWithPersianChar:()=>v,WithEndSection:()=>S,WithError:()=>y,WithStartAndEndSection:()=>C,WithStartSection:()=>x,__namedExportsOrder:()=>w,default:()=>f,numberTest:()=>b}),d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=t((()=>{n(),a(),l(),d=r(),f={title:`Components/form elements/Inputs/JBNumberInput`,component:i},p={args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`,disabled:!1,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},m={args:{label:`with thousand separator`,message:`type a big number. each 3 number will separated by a comma`,showThousandSeparator:!0,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},h={args:{label:`with min 100 & max 1000`,message:`type smaller or larger number, after un-focus it will turn to max or min(it does not prevent user from typing)`,maxValue:1e4,minValue:100,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},g={args:{label:`non-negative number with underline separator`,message:`each 3 digit separated by _`,acceptNegative:!1,showThousandSeparator:!0,thousandSeparator:`_`,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},_={args:{label:`with increase and decrease button`,message:`with +- buttons`,showControlButton:!0,step:100,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},v={args:{label:`type number`,message:`type en number but user see persian char number`,showPersianNumber:!0,onChange:e=>{console.log(`new number is ${e.target.value}`)}}},y={args:{label:`show error`,error:`error message`}},b={render:()=>(0,d.jsx)(c,{})},x={render:e=>(0,d.jsx)(i,{...e,children:(0,d.jsx)(`div`,{slot:`start-section`,style:{width:`24px`,height:`24px`,backgroundColor:`#262626`}})}),args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`}},S={render:e=>(0,d.jsx)(i,{...e,children:(0,d.jsx)(`div`,{slot:`end-section`,style:{width:`24px`,height:`24px`,backgroundColor:`#262626`}})}),args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`}},C={render:e=>(0,d.jsxs)(i,{...e,children:[(0,d.jsx)(`div`,{slot:`end-section`,style:{width:`24px`,height:`24px`,backgroundColor:`#262626`}}),(0,d.jsx)(`div`,{slot:`start-section`,style:{width:`24px`,height:`24px`,backgroundColor:`#262626`}})]}),args:{label:`label`,message:`static text under input show all the time`,placeholder:`place holder`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    disabled: false,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with thousand separator',
    message: 'type a big number. each 3 number will separated by a comma',
    showThousandSeparator: true,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with min 100 & max 1000',
    message: 'type smaller or larger number, after un-focus it will turn to max or min(it does not prevent user from typing)',
    maxValue: 10000,
    minValue: 100,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'non-negative number with underline separator',
    message: 'each 3 digit separated by _',
    acceptNegative: false,
    showThousandSeparator: true,
    thousandSeparator: '_',
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with increase and decrease button',
    message: 'with +- buttons',
    showControlButton: true,
    step: 100,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'type number',
    message: 'type en number but user see persian char number',
    showPersianNumber: true,
    onChange: e => {
      console.log(\`new number is \${e.target.value}\`);
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'show error',
    error: 'error message'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <JBInputNumberTest></JBInputNumberTest>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <JBNumberInput {...args}>
        <div slot="start-section" style={{
        width: '24px',
        height: '24px',
        backgroundColor: '#262626'
      }}></div>
      </JBNumberInput>;
  },
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <JBNumberInput {...args}>
        <div slot="end-section" style={{
        width: '24px',
        height: '24px',
        backgroundColor: '#262626'
      }}></div>
      </JBNumberInput>;
  },
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <JBNumberInput {...args}>
        <div slot="end-section" style={{
        width: '24px',
        height: '24px',
        backgroundColor: '#262626'
      }}></div>
        <div slot="start-section" style={{
        width: '24px',
        height: '24px',
        backgroundColor: '#262626'
      }}></div>
      </JBNumberInput>;
  },
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder'
  }
}`,...C.parameters?.docs?.source}}},w=[`Normal`,`NumberWithComma`,`NumberWithMinMax`,`NonNegativeNumberWithUnderlineSeparator`,`NumberWithButtons`,`NumberWithPersianChar`,`WithError`,`numberTest`,`WithStartSection`,`WithEndSection`,`WithStartAndEndSection`]}));T();export{g as NonNegativeNumberWithUnderlineSeparator,p as Normal,_ as NumberWithButtons,m as NumberWithComma,h as NumberWithMinMax,v as NumberWithPersianChar,S as WithEndSection,y as WithError,C as WithStartAndEndSection,x as WithStartSection,w as __namedExportsOrder,f as default,T as n,b as numberTest,u as t};