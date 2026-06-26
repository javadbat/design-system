import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-BlaOm9nc.js";import{r as a,t as o}from"./react-BI2hjQxW.js";import{a as s,n as c,r as l,t as u}from"./react-DPXnfj13.js";import{n as d,t as f}from"./react-C5C-7xjY.js";import{a as p,i as m,n as ee,r as h,t as g}from"./constants-7kQhF6ve.js";var _=t((()=>{})),v=e({BooleanValue:()=>X,CustomOption:()=>K,CustomOptionRender:()=>J,CustomSelectedValueRender:()=>q,Disabled:()=>k,DynamicList:()=>G,EmptyList:()=>H,EventTest:()=>B,FixedPopoverInPositionedContainer:()=>z,FixedPopoverInScrollableContainer:()=>R,FixedPopoverPosition:()=>A,HideCleanButton:()=>M,JBSelectDesignTest:()=>Y,MissingOption:()=>Z,ModalHeight:()=>U,Multiple:()=>C,MultipleWithCheckbox:()=>T,MultipleWithCheckboxAndLabel:()=>E,MultipleWithOptionList:()=>w,MultipleWithValue:()=>D,Normal:()=>S,OptionAsChildren:()=>N,OptionObject:()=>j,OptionObjectAsChildren:()=>P,OverflowTest:()=>L,RTL:()=>V,Required:()=>F,SizeVariants:()=>I,WithError:()=>W,WithValue:()=>O,__namedExportsOrder:()=>Q,default:()=>x}),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{r(),y=n(r(),1),u(),o(),_(),ee(),f(),b=i(),x={title:`Components/form elements/JBSelect`,component:c,args:{children:(0,b.jsx)(s,{optionList:h})}},S={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`}},C={render:()=>(0,b.jsx)(c,{multiple:!0,children:p.map(e=>(0,b.jsx)(l,{value:e.userId,children:`${e.name} ${e.family}`},e.userId))})},w={render:()=>(0,b.jsx)(c,{multiple:!0,label:`Assignees`,placeholder:`Choose one or more people`,children:(0,b.jsx)(s,{optionList:p,getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId})})},T={render:()=>(0,b.jsx)(c,{multiple:!0,children:p.map(e=>(0,b.jsxs)(l,{value:e.userId,children:[(0,b.jsx)(d,{size:`sm`}),(0,b.jsx)(`span`,{children:`${e.name} ${e.family}`})]},e.userId))})},E={render:()=>(0,b.jsx)(c,{multiple:!0,children:p.map(e=>(0,b.jsx)(l,{value:e.userId,children:(0,b.jsx)(d,{size:`sm`,children:(0,b.jsx)(`div`,{slot:`label`,children:`${e.name} ${e.family}`})})},e.userId))})},D={render:e=>{let[t,n]=(0,y.useState)(e.value);return(0,y.useEffect)(()=>{n(e.value)},[e.value]),(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`},children:[(0,b.jsx)(c,{multiple:!0,value:t,onChange:e=>n(e.target.value),children:p.map(e=>(0,b.jsx)(l,{value:e.userId,children:`${e.name} ${e.family}`},e.userId))}),(0,b.jsx)(a,{size:`sm`,onClick:()=>console.log(t),children:`Log Value (see console)`})]})},args:{value:[...p.filter((e,t)=>t%2==0).map(e=>e.userId)]}},O={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`,value:h[3],children:(0,b.jsx)(s,{optionList:h})}},k={args:{label:`select from menu`,message:`please select a value`,value:h[3],disabled:!0}},A={args:{label:`fixed`,message:`open select and see popover(only works in a desktop)`,popoverPosition:`fixed`}},j={args:{label:`select from menu`,children:(0,b.jsx)(s,{optionList:[{name:`peter`,family:`hanan`,userId:1},{name:`reza`,family:`asadi`,userId:2}],getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId}),onChange:e=>{console.log(`onChange`,e.target.value)}}},M={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`,hideClear:!0}},N={args:{label:`select from menu`,message:`please select a value`,placeholder:`placeholder`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l,{value:`1`,children:`one`}),(0,b.jsx)(l,{value:`2`,children:`two`}),(0,b.jsx)(l,{value:`3`,children:`three`}),(0,b.jsx)(l,{value:`4`,children:`four`}),(0,b.jsx)(l,{value:`5`,children:`five`}),(0,b.jsx)(l,{value:`6`,children:`six`}),(0,b.jsx)(l,{value:`7`,children:`seven`}),(0,b.jsx)(l,{value:`8`,children:`eight`}),(0,b.jsx)(l,{value:`9`,children:`nine`}),(0,b.jsx)(l,{value:`10`,children:`ten`})]})}},P={args:{label:`select from menu`,message:`please select a value`,placeholder:`select number here`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l,{value:{name:`ali`,age:10},children:`Ali`}),(0,b.jsx)(l,{value:{name:`reza`,age:12},children:`Reza`}),(0,b.jsx)(l,{value:{name:`joe`,age:14},children:`Joe`})]})}},F={args:{label:`required select`,message:`focus and un focus without selecting a value to see validation error`,required:!0}},I={render:()=>{let e=(0,b.jsx)(y.Fragment,{children:p.map(e=>(0,b.jsx)(l,{value:e,children:e.name},e.userId))});return(0,b.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`1rem`},children:[(0,b.jsx)(c,{size:`xl`,label:`xl size`,message:`message underneath`}),(0,b.jsx)(c,{size:`xl`,label:`xl size`,placeholder:`placeholder`,children:e}),(0,b.jsx)(c,{size:`xl`,label:`xl size`,value:p[0],children:e}),(0,b.jsx)(c,{size:`lg`,label:`lg size`,message:`message underneath`}),(0,b.jsx)(c,{size:`lg`,label:`lg size`,placeholder:`placeholder`,children:e}),(0,b.jsx)(c,{size:`lg`,label:`lg size`,value:p[0],children:e}),(0,b.jsx)(c,{size:`md`,label:`md size`,message:`message underneath`}),(0,b.jsx)(c,{size:`md`,label:`md size`,placeholder:`placeholder`,children:e}),(0,b.jsx)(c,{size:`md`,label:`md size`,value:p[0],children:e}),(0,b.jsx)(c,{size:`sm`,label:`sm size`,message:`message underneath`}),(0,b.jsx)(c,{size:`sm`,label:`sm size`,placeholder:`placeholder`,children:e}),(0,b.jsx)(c,{size:`sm`,label:`sm size`,value:p[0],children:e}),(0,b.jsx)(c,{size:`xs`,label:`xs size`,message:`message underneath`}),(0,b.jsx)(c,{size:`xs`,label:`xs size`,placeholder:`placeholder`,children:e}),(0,b.jsx)(c,{size:`xs`,label:`xs size`,value:p[0],children:e})]})}},L={render:()=>(0,b.jsxs)(`div`,{style:{height:`10rem`,overflowY:`auto`},children:[(0,b.jsx)(c,{label:`overflow test`,style:{width:`10rem`},popoverPosition:`fixed`,children:p.map(e=>(0,b.jsx)(l,{value:e,children:e.name},e.userId))}),(0,b.jsx)(`div`,{style:{height:`20rem`,background:`red`}})]})},R={render:()=>(0,b.jsxs)(`div`,{style:{height:`14rem`,maxWidth:`28rem`,overflowY:`auto`,border:`1px solid #94a3b8`,borderRadius:`0.5rem`,padding:`1rem`,background:`#f8fafc`},children:[(0,b.jsx)(`p`,{style:{margin:`0 0 8rem`},children:`Scroll this panel, then open each select near an edge to compare their popovers.`}),(0,b.jsx)(c,{label:`Default absolute popover`,placeholder:`Choose a person`,style:{width:`16rem`,marginBottom:`1rem`},children:(0,b.jsx)(s,{optionList:p,getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId})}),(0,b.jsx)(c,{label:`Fixed popover`,placeholder:`Choose a person`,popoverPosition:`fixed`,style:{width:`16rem`},children:(0,b.jsx)(s,{optionList:p,getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId})}),(0,b.jsx)(`div`,{style:{height:`16rem`}})]})},z={render:()=>(0,b.jsxs)(`div`,{style:{position:`relative`,maxWidth:`28rem`,overflow:`hidden`,border:`1px solid #a78bfa`,borderRadius:`0.5rem`,padding:`1rem`,background:`#faf5ff`},children:[(0,b.jsx)(`p`,{style:{marginTop:0},children:`This is a positioned parent with clipped overflow. Open the select to see the popover escape the container on desktop.`}),(0,b.jsxs)(c,{label:`Environment`,placeholder:`Choose an environment`,popoverPosition:`fixed`,style:{width:`16rem`},children:[(0,b.jsx)(l,{value:`development`,children:`Development`}),(0,b.jsx)(l,{value:`staging`,children:`Staging`}),(0,b.jsx)(l,{value:`production`,children:`Production`})]})]})},B={args:{...S.args,onChange:()=>alert(`Changed`)}},V={globals:{locale:`fa`,dir:`rtl`},args:{label:`از منو انتخاب کنید`,children:(0,b.jsx)(s,{optionList:m})},parameters:{docs:{description:{story:`RTL test`}}}},H={args:{label:`empty list`,message:`this list is a empty list`,children:(0,b.jsx)(s,{optionList:[]})}},U={args:{label:`select from in mobile`,message:`put in mobile view and open menu. it must fill half of the page`,placeholder:`select number here`,children:(0,b.jsx)(s,{optionList:m}),style:{"--jb-select-mobile-modal-height":`50vh`,"--jb-select-mobile-modal-border-radius":`1rem`}}},W={args:{label:`with error`,message:`please select a value`,error:`error message`}},G={render:()=>{let[e,t]=(0,y.useState)([]);function n(e=``){let n=[];for(let t=0;t<20;t++)n.push(`${e} - ${t}`);t(n)}return(0,y.useEffect)(()=>{n()},[]),(0,b.jsx)(`div`,{children:(0,b.jsx)(c,{label:`please type and see result change`,onKeyUp:function(e){let t=e.target.textValue;n(t)},children:(0,b.jsx)(s,{optionList:e})})})}},K={args:{label:`Color List`,children:(0,b.jsx)(b.Fragment,{children:g.map(e=>(0,b.jsxs)(l,{value:e,children:[(0,b.jsx)(`span`,{style:{backgroundColor:e.value,marginInlineEnd:`0.5rem`,width:`1rem`,height:`1rem`,borderRadius:`0.5rem`}}),e.name]},e.value))})}},q={args:{label:`Color List With Custom Selected Value Render`,message:`please select a value and see the result`,getSelectedValueDOM:e=>{let t=document.createElement(`div`);return t.classList.add(`selected-value`),t.innerHTML=`
        <span part="color-box" style="background-color:${e.value};width:32px;height:16px;display:inline-block;"></span>&nbsp;
        <span>Color ${e.name}</span>
      `,t},children:(0,b.jsx)(b.Fragment,{children:g.map(e=>(0,b.jsxs)(l,{value:e,children:[(0,b.jsx)(`span`,{style:{backgroundColor:e.value,marginInlineEnd:`0.5rem`,width:`1rem`,height:`1rem`,borderRadius:`0.5rem`}}),e.name]},e.value))})}},J={args:{label:`Color List With Custom Option Render callback`,message:`here we render color list with callback function `,getSelectedValueDOM:e=>{let t=document.createElement(`div`);return t.classList.add(`selected-value`),t.innerHTML=`
              <span style="background-color:${e.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color ${e.name}</span>
            `,t},children:(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(s,{optionList:g,getTitle:e=>e.name,getContentDOM:e=>{let t=document.createElement(`div`);return t.classList.add(`selected-value`),t.innerHTML=`
              <span style="background-color:${e.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color ${e.name}</span>
            `,t}})})}},Y={render:()=>{function e(e){let t=document.createElement(`div`);return t.classList.add(`selected-value`),t.innerHTML=`<span part="color-box" style="background-color:`+e.value+`;width:16px;height:16px"></span>&nbsp;`+e.name,t}return(0,b.jsx)(`div`,{className:`select-custom-design`,children:(0,b.jsxs)(c,{searchPlaceholder:`search color`,getSelectedValueDOM:e,children:[g.map(e=>(0,b.jsxs)(l,{value:e,children:[(0,b.jsx)(`span`,{className:`color-circle`,style:{backgroundColor:e.value}}),e.name]},e.value)),(0,b.jsx)(`div`,{style:{height:`24px`},slot:`select-arrow-icon`,children:(0,b.jsxs)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,b.jsx)(`title`,{children:`arrow icon`}),(0,b.jsx)(`rect`,{width:`24`,height:`24`,rx:`5`,fill:`#E7E7E7`}),(0,b.jsx)(`path`,{d:`M19 8.5L12 15.5L5 8.5`,stroke:`#8B8B8B`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})]})})}},X={render:()=>{let[e,t]=(0,y.useState)(null);return(0,b.jsxs)(c,{value:e,onChange:e=>{t(e.target.value)},children:[(0,b.jsx)(l,{value:!0,children:`True`}),(0,b.jsx)(l,{value:!1,children:`False`})]})}},Z={render:e=>{let{value:t}=e,[n,r]=(0,y.useState)([]);return(0,b.jsxs)(`div`,{children:[(0,b.jsx)(c,{value:t,label:`missing option`,message:`value is already set but options are not available when option available value will be set`,children:n.map(e=>(0,b.jsx)(l,{value:e,children:e.name}))}),(0,b.jsx)(a,{onClick:()=>r(p),children:`Fill Option`})]})},args:{value:p[3]}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple>
        {persons.map(p => {
        return <JBOption key={p.userId} value={p.userId}>{\`\${p.name} \${p.family}\`}</JBOption>;
      })}
      </JBSelect>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple label="Assignees" placeholder="Choose one or more people">
        <JBOptionList optionList={persons} getTitle={person => \`\${person.name} \${person.family}\`} getValue={person => person.userId} />
      </JBSelect>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple>
        {persons.map(p => {
        return <JBOption key={p.userId} value={p.userId}><JBCheckbox size='sm' /><span>{\`\${p.name} \${p.family}\`}</span></JBOption>;
      })}
      </JBSelect>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple>
        {persons.map(p => {
        return <JBOption key={p.userId} value={p.userId}><JBCheckbox size='sm'><div slot="label">{\`\${p.name} \${p.family}\`}</div></JBCheckbox></JBOption>;
      })}
      </JBSelect>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value);
    useEffect(() => {
      setValue(args.value);
    }, [args.value]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }}>
        <JBSelect multiple value={value} onChange={e => setValue(e.target.value)}>
          {persons.map(p => {
          return <JBOption key={p.userId} value={p.userId}>{\`\${p.name} \${p.family}\`}</JBOption>;
        })}
        </JBSelect>
        <JBButton size='sm' onClick={() => console.log(value)}>Log Value (see console)</JBButton>
      </div>;
  },
  args: {
    value: [...persons.filter((_, i) => i % 2 == 0).map(x => x.userId)]
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder",
    value: nameList[3],
    children: <JBOptionList optionList={nameList} />
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    value: nameList[3],
    disabled: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'fixed',
    message: "open select and see popover(only works in a desktop)",
    popoverPosition: "fixed"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder",
    hideClear: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder",
    children: <>
        <JBOption value="1">one</JBOption>
        <JBOption value="2">two</JBOption>
        <JBOption value="3">three</JBOption>
        <JBOption value="4">four</JBOption>
        <JBOption value="5">five</JBOption>
        <JBOption value="6">six</JBOption>
        <JBOption value="7">seven</JBOption>
        <JBOption value="8">eight</JBOption>
        <JBOption value="9">nine</JBOption>
        <JBOption value="10">ten</JBOption>
      </>
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "select number here",
    children: <>
        <JBOption value={{
        name: "ali",
        age: 10
      }}>Ali</JBOption>
        <JBOption value={{
        name: "reza",
        age: 12
      }}>Reza</JBOption>
        <JBOption value={{
        name: "joe",
        age: 14
      }}>Joe</JBOption>
      </>
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'required select',
    message: "focus and un focus without selecting a value to see validation error",
    required: true
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = <Fragment>
      {persons.map(p => <JBOption key={p.userId} value={p}>{p.name}</JBOption>)}
    </Fragment>;
    return <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1rem'
    }}>
      <JBSelect size='xl' label='xl size' message="message underneath"></JBSelect>
      <JBSelect size='xl' label='xl size' placeholder="placeholder">{options}</JBSelect>
      <JBSelect size='xl' label='xl size' value={persons[0]}>{options}</JBSelect>

      <JBSelect size='lg' label='lg size' message="message underneath"></JBSelect>
      <JBSelect size='lg' label='lg size' placeholder="placeholder">{options}</JBSelect>
      <JBSelect size='lg' label='lg size' value={persons[0]}>{options}</JBSelect>

      <JBSelect size='md' label='md size' message="message underneath"></JBSelect>
      <JBSelect size='md' label='md size' placeholder="placeholder">{options}</JBSelect>
      <JBSelect size='md' label='md size' value={persons[0]}>{options}</JBSelect>

      <JBSelect size='sm' label='sm size' message="message underneath"></JBSelect>
      <JBSelect size='sm' label='sm size' placeholder="placeholder">{options}</JBSelect>
      <JBSelect size='sm' label='sm size' value={persons[0]}>{options}</JBSelect>

      <JBSelect size='xs' label='xs size' message="message underneath"></JBSelect>
      <JBSelect size='xs' label='xs size' placeholder="placeholder">{options}</JBSelect>
      <JBSelect size='xs' label='xs size' value={persons[0]}>{options}</JBSelect>
    </div>;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: '10rem',
      overflowY: "auto"
    }}>
      <JBSelect label='overflow test' style={{
        width: "10rem"
      }} popoverPosition='fixed'>
        {persons.map(p => <JBOption key={p.userId} value={p}>{p.name}</JBOption>)}
      </JBSelect>
      <div style={{
        height: '20rem',
        background: 'red'
      }}></div>
    </div>;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: '14rem',
      maxWidth: '28rem',
      overflowY: 'auto',
      border: '1px solid #94a3b8',
      borderRadius: '0.5rem',
      padding: '1rem',
      background: '#f8fafc'
    }}>
        <p style={{
        margin: '0 0 8rem'
      }}>
          Scroll this panel, then open each select near an edge to compare their popovers.
        </p>
        <JBSelect label="Default absolute popover" placeholder="Choose a person" style={{
        width: '16rem',
        marginBottom: '1rem'
      }}>
          <JBOptionList optionList={persons} getTitle={person => \`\${person.name} \${person.family}\`} getValue={person => person.userId} />
        </JBSelect>
        <JBSelect label="Fixed popover" placeholder="Choose a person" popoverPosition="fixed" style={{
        width: '16rem'
      }}>
          <JBOptionList optionList={persons} getTitle={person => \`\${person.name} \${person.family}\`} getValue={person => person.userId} />
        </JBSelect>
        <div style={{
        height: '16rem'
      }} />
      </div>;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      position: 'relative',
      maxWidth: '28rem',
      overflow: 'hidden',
      border: '1px solid #a78bfa',
      borderRadius: '0.5rem',
      padding: '1rem',
      background: '#faf5ff'
    }}>
        <p style={{
        marginTop: 0
      }}>
          This is a positioned parent with clipped overflow. Open the select to see the popover escape the container on desktop.
        </p>
        <JBSelect label="Environment" placeholder="Choose an environment" popoverPosition="fixed" style={{
        width: '16rem'
      }}>
          <JBOption value="development">Development</JBOption>
          <JBOption value="staging">Staging</JBOption>
          <JBOption value="production">Production</JBOption>
        </JBSelect>
      </div>;
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    onChange: () => alert('Changed')
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  globals: {
    locale: "fa",
    dir: "rtl"
  },
  args: {
    label: 'از منو انتخاب کنید',
    children: <JBOptionList optionList={numberOptionList} />
  },
  parameters: {
    docs: {
      description: {
        story: 'RTL test'
      }
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'empty list',
    message: "this list is a empty list",
    children: <JBOptionList optionList={[]} />
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: "please select a value",
    error: "error message"
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [optionList, setOptionList] = useState<string[]>([]);
    function fillList(text = "") {
      const newList: string[] = [];
      for (let i = 0; i < 20; i++) {
        newList.push(\`\${text} - \${i}\`);
      }
      setOptionList(newList);
    }
    useEffect(() => {
      fillList();
    }, []);
    const onKeyup = function (e: JBSelectEventType<KeyboardEvent>) {
      const text = e.target.textValue;
      fillList(text);
    };
    return <div>
        <JBSelect label="please type and see result change" onKeyUp={onKeyup}>
          <JBOptionList optionList={optionList}></JBOptionList>
        </JBSelect>
      </div>;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Color List",
    children: <>
      {colorList.map(color => <JBOption key={color.value} value={color}><span style={{
          backgroundColor: color.value,
          marginInlineEnd: '0.5rem',
          width: '1rem',
          height: '1rem',
          borderRadius: '0.5rem'
        }}></span>{color.name}</JBOption>)}
    </>
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Color List With Custom Selected Value Render",
    message: "please select a value and see the result",
    getSelectedValueDOM: option => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("selected-value");
      optionElement.innerHTML = /*html */\`
        <span part="color-box" style="background-color:\${option.value};width:32px;height:16px;display:inline-block;"></span>&nbsp;
        <span>Color \${option.name}</span>
      \`;
      return optionElement;
    },
    children: <>
      {colorList.map(color => <JBOption key={color.value} value={color}><span style={{
          backgroundColor: color.value,
          marginInlineEnd: '0.5rem',
          width: '1rem',
          height: '1rem',
          borderRadius: '0.5rem'
        }}></span>{color.name}</JBOption>)}
    </>
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Color List With Custom Option Render callback",
    message: "here we render color list with callback function ",
    getSelectedValueDOM: option => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("selected-value");
      optionElement.innerHTML = /*html */\`
              <span style="background-color:\${option.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color \${option.name}</span>
            \`;
      return optionElement;
    },
    children: <>
      {<JBOptionList optionList={colorList} getTitle={option => option.name} getContentDOM={option => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("selected-value");
        optionElement.innerHTML = /*html */\`
              <span style="background-color:\${option.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color \${option.name}</span>
            \`;
        return optionElement;
      }} />}
    </>
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    function getSelectedValueDOM(option: any) {
      const optionElement = document.createElement("div");
      optionElement.classList.add("selected-value");
      optionElement.innerHTML = '<span part="color-box" style="background-color:' + option.value + ';width:16px;height:16px"></span>' + "&nbsp;" + option.name;
      return optionElement;
    }
    return <div className="select-custom-design">
        <JBSelect searchPlaceholder="search color" getSelectedValueDOM={getSelectedValueDOM}>
          {colorList.map(o => <JBOption value={o} key={o.value}><span className="color-circle" style={{
            backgroundColor: o.value
          }}></span>{o.name}</JBOption>)}
          <div style={{
          height: "24px"
        }} slot="select-arrow-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <title>arrow icon</title>
              <rect width="24" height="24" rx="5" fill="#E7E7E7" />
              <path d="M19 8.5L12 15.5L5 8.5" stroke="#8B8B8B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </JBSelect>
      </div>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<boolean | null>(null);
    return <JBSelect value={value} onChange={e => {
      setValue(e.target.value);
    }}>
        <JBOption value={true}>True</JBOption>
        <JBOption value={false}>False</JBOption>
      </JBSelect>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      value
    } = args;
    const [optionList, setOptionList] = useState<typeof persons>([]);
    return <div>
        <JBSelect value={value} label="missing option" message="value is already set but options are not available when option available value will be set">
          {optionList.map(person => <JBOption value={person}>{person.name}</JBOption>)}
        </JBSelect>
        <JBButton onClick={() => setOptionList(persons)}>Fill Option</JBButton>
      </div>;
  },
  args: {
    value: persons[3]
  }
}`,...Z.parameters?.docs?.source}}},Q=`Normal.Multiple.MultipleWithOptionList.MultipleWithCheckbox.MultipleWithCheckboxAndLabel.MultipleWithValue.WithValue.Disabled.FixedPopoverPosition.OptionObject.HideCleanButton.OptionAsChildren.OptionObjectAsChildren.Required.SizeVariants.OverflowTest.FixedPopoverInScrollableContainer.FixedPopoverInPositionedContainer.EventTest.RTL.EmptyList.ModalHeight.WithError.DynamicList.CustomOption.CustomSelectedValueRender.CustomOptionRender.JBSelectDesignTest.BooleanValue.MissingOption`.split(`.`)}));$();export{X as BooleanValue,K as CustomOption,J as CustomOptionRender,q as CustomSelectedValueRender,k as Disabled,G as DynamicList,H as EmptyList,B as EventTest,z as FixedPopoverInPositionedContainer,R as FixedPopoverInScrollableContainer,A as FixedPopoverPosition,M as HideCleanButton,Y as JBSelectDesignTest,Z as MissingOption,U as ModalHeight,C as Multiple,T as MultipleWithCheckbox,E as MultipleWithCheckboxAndLabel,w as MultipleWithOptionList,D as MultipleWithValue,S as Normal,N as OptionAsChildren,j as OptionObject,P as OptionObjectAsChildren,L as OverflowTest,V as RTL,F as Required,I as SizeVariants,W as WithError,O as WithValue,Q as __namedExportsOrder,x as default,$ as n,v as t};