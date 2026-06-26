import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-BTYt1Ura.js";import{r as a,t as o}from"./react-0C9aZted.js";var s=t((()=>{})),c=e({ActionTest:()=>y,BlockEnd:()=>C,BlockStart:()=>S,Disabled:()=>_,DisabledWithValue:()=>v,InlineEnd:()=>x,InlineStart:()=>b,Normal:()=>f,OnEnterTest:()=>g,RTL:()=>w,Required:()=>p,WithError:()=>m,WithValidation:()=>h,__namedExportsOrder:()=>T,default:()=>d}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E=t((()=>{l=n(r(),1),o(),s(),u=i(),d={title:`Components/form elements/JBTextarea`,component:a},f={args:{label:`text`,placeholder:`please type here`}},p={args:{label:`required text`,message:`focus and unfocus to textarea to see the error`,required:!0}},m={args:{label:`with error`,message:`message under textarea`,error:`error message`}},h={args:{label:`validation`,placeholder:`10 char, and no f char`,validationList:[{validator:/.{10}/g,message:`you must enter 10 char at least`},{validator:e=>!e.includes(`f`),message:`you cant enter f char`}]}},g={args:{label:`text`,placeholder:`please hit enter with shift key and without shift key`,onEnter:e=>{alert(`shift key:`+(e.shiftKey?`true`:`false`))}}},_={args:{label:`disabled`,placeholder:`this textarea is disabled`,disabled:!0}},v={args:{label:`disabled`,value:`here is the textarea value`,disabled:!0}},y={render:e=>{let[t,n]=(0,l.useState)(``),[r,i]=(0,l.useState)(``);function o(e){e.preventDefault()}return(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`h2`,{children:`test grow ability`}),(0,u.jsx)(a,{value:r,onChange:e=>{i(e.target.value)},label:`type to grow`,autoHeight:!0}),(0,u.jsx)(`button`,{onClick:()=>{i(``)},children:`clean`}),(0,u.jsx)(`button`,{onClick:()=>{i(`sss eeee ggggg`.repeat(200))},children:`longText`}),(0,u.jsx)(`h3`,{children:`grow with min and max height`}),(0,u.jsx)(`div`,{className:`grow-with-custom-limit`,children:(0,u.jsx)(a,{label:`48 to 120`,autoHeight:!0})}),(0,u.jsx)(`h3`,{children:`test value binding to state`}),(0,u.jsx)(a,{value:t,onChange:e=>{n(e.target.value)},label:`see the bottom`}),(0,u.jsx)(`p`,{children:t}),(0,u.jsx)(`h3`,{children:`test events (check console log)`}),(0,u.jsx)(a,{onKeyDown:o,onFocus:e=>{console.log(e)},onBlur:e=>{console.log(e)},label:`see value after `})]})},args:{label:`text`,placeholder:`please type here`}},b={render:e=>(0,u.jsx)(a,{...e,children:(0,u.jsx)(`div`,{style:{width:`100%`,height:`100%`,backgroundColor:`red`},slot:`inline-start-section`})}),args:{label:`text`,placeholder:`please type here`}},x={render:e=>(0,u.jsx)(a,{...e,children:(0,u.jsx)(`div`,{style:{width:`100%`,height:`100%`,backgroundColor:`red`},slot:`inline-end-section`})}),args:{label:`text`,placeholder:`please type here`}},S={render:e=>(0,u.jsx)(a,{...e,children:(0,u.jsx)(`div`,{style:{width:`100%`,height:`2rem`,backgroundColor:`red`},slot:`block-start-section`})}),args:{label:`text`,placeholder:`please type here`}},C={render:e=>(0,u.jsx)(a,{...e,children:(0,u.jsx)(`div`,{style:{width:`100%`,height:`2rem`,backgroundColor:`red`},slot:`block-end-section`})}),args:{label:`text`,placeholder:`please type here`}},w={args:{label:`متن`,placeholder:`لطفا وارد کنید`},parameters:{themes:{themeOverride:`rtl`}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'required text',
    message: 'focus and unfocus to textarea to see the error',
    required: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: 'message under textarea',
    error: 'error message'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'validation',
    placeholder: '10 char, and no f char',
    validationList: [{
      validator: /.{10}/g,
      message: "you must enter 10 char at least"
    }, {
      validator: value => {
        if (value.includes("f")) {
          return false;
        }
        return true;
      },
      message: "you cant enter f char"
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'text',
    placeholder: 'please hit enter with shift key and without shift key',
    onEnter: e => {
      alert("shift key:" + (e.shiftKey ? 'true' : 'false'));
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'disabled',
    placeholder: 'this textarea is disabled',
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'disabled',
    value: 'here is the textarea value',
    disabled: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [textVal, textValSetter] = useState('');
    const [autoGrowTextVal, autoGrowTextValSetter] = useState('');
    function onTextAreaKeydown(e) {
      e.preventDefault();
    }
    return <div>
      <h2>test grow ability</h2>
      <JBTextarea value={autoGrowTextVal} onChange={e => {
        autoGrowTextValSetter(e.target.value);
      }} label="type to grow" autoHeight={true}></JBTextarea>
      <button onClick={() => {
        autoGrowTextValSetter('');
      }}>clean</button>
      <button onClick={() => {
        autoGrowTextValSetter('sss eeee ggggg'.repeat(200));
      }}>longText</button>
      <h3>grow with min and max height</h3>
      <div className="grow-with-custom-limit">
        <JBTextarea label="48 to 120" autoHeight={true}></JBTextarea>
      </div>
      <h3>test value binding to state</h3>
      <JBTextarea value={textVal} onChange={e => {
        textValSetter(e.target.value);
      }} label="see the bottom"></JBTextarea>
      <p>{textVal}</p>
      <h3>test events (check console log)</h3>
      <JBTextarea onKeyDown={onTextAreaKeydown} onFocus={e => {
        console.log(e);
      }} onBlur={e => {
        console.log(e);
      }} label="see value after "></JBTextarea>
    </div>;
  },
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <JBTextarea {...args}>
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'red'
    }} slot="inline-start-section"></div>
  </JBTextarea>,
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <JBTextarea {...args}>
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'red'
    }} slot="inline-end-section"></div>
  </JBTextarea>,
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <JBTextarea {...args}>
    <div style={{
      width: '100%',
      height: '2rem',
      backgroundColor: 'red'
    }} slot="block-start-section"></div>
  </JBTextarea>,
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <JBTextarea {...args}>
    <div style={{
      width: '100%',
      height: '2rem',
      backgroundColor: 'red'
    }} slot="block-end-section"></div>
  </JBTextarea>,
  args: {
    label: 'text',
    placeholder: 'please type here'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'متن',
    placeholder: 'لطفا وارد کنید'
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...w.parameters?.docs?.source}}},T=[`Normal`,`Required`,`WithError`,`WithValidation`,`OnEnterTest`,`Disabled`,`DisabledWithValue`,`ActionTest`,`InlineStart`,`InlineEnd`,`BlockStart`,`BlockEnd`,`RTL`]}));E();export{y as ActionTest,C as BlockEnd,S as BlockStart,_ as Disabled,v as DisabledWithValue,x as InlineEnd,b as InlineStart,f as Normal,g as OnEnterTest,w as RTL,p as Required,m as WithError,h as WithValidation,T as __namedExportsOrder,d as default,E as n,c as t};