import{R as e,r as c}from"./index-D4lIrffr.js";import{i as r,u as o,o as l}from"./index-CbishZFR.js";import{o as Ct}from"./JBButton-C5Q4-nqF.js";import{p as s,n as H,a as zt,c as A}from"./constants-Ci1PGOK2.js";import{a as kt}from"./JBCheckbox-2wYMHLGv.js";const wt={title:"Components/form elements/JBSelect",component:r,args:{children:e.createElement(o,{optionList:H})}},m={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder"}},u={render:()=>e.createElement(r,{multiple:!0},s.map(t=>e.createElement(l,{key:t.userId,value:t.userId},`${t.name} ${t.family}`)))},d={render:()=>e.createElement(r,{multiple:!0,label:"Assignees",placeholder:"Choose one or more people"},e.createElement(o,{optionList:s,getTitle:t=>`${t.name} ${t.family}`,getValue:t=>t.userId}))},g={render:()=>e.createElement(r,{multiple:!0},s.map(t=>e.createElement(l,{key:t.userId,value:t.userId},e.createElement(kt,{size:"sm"}),e.createElement("span",null,`${t.name} ${t.family}`))))},h={render:()=>e.createElement(r,{multiple:!0},s.map(t=>e.createElement(l,{key:t.userId,value:t.userId},e.createElement(kt,{size:"sm"},e.createElement("div",{slot:"label"},`${t.name} ${t.family}`)))))},v={render:t=>{const[a,n]=c.useState(t.value);return c.useEffect(()=>{n(t.value)},[t.value]),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"}},e.createElement(r,{multiple:!0,value:a,onChange:i=>n(i.target.value)},s.map(i=>e.createElement(l,{key:i.userId,value:i.userId},`${i.name} ${i.family}`))),e.createElement(Ct,{size:"sm",onClick:()=>console.log(a)},"Log Value (see console)"))},args:{value:[...s.filter((t,a)=>a%2==0).map(t=>t.userId)]}},b={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder",value:H[3],children:e.createElement(o,{optionList:H})}},E={args:{label:"select from menu",message:"please select a value",value:H[3],disabled:!0}},B={args:{label:"fixed",message:"open select and see popover(only works in a desktop)",popoverPosition:"fixed"}},f={args:{label:"select from menu",children:e.createElement(o,{optionList:[{name:"peter",family:"hanan",userId:1},{name:"reza",family:"asadi",userId:2}],getTitle:t=>`${t.name} ${t.family}`,getValue:t=>t.userId}),onChange:t=>{console.log("onChange",t.target.value)}}},J={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder",hideClear:!0}},S={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder",children:e.createElement(e.Fragment,null,e.createElement(l,{value:"1"},"one"),e.createElement(l,{value:"2"},"two"),e.createElement(l,{value:"3"},"three"),e.createElement(l,{value:"4"},"four"),e.createElement(l,{value:"5"},"five"),e.createElement(l,{value:"6"},"six"),e.createElement(l,{value:"7"},"seven"),e.createElement(l,{value:"8"},"eight"),e.createElement(l,{value:"9"},"nine"),e.createElement(l,{value:"10"},"ten"))}},y={args:{label:"select from menu",message:"please select a value",placeholder:"select number here",children:e.createElement(e.Fragment,null,e.createElement(l,{value:{name:"ali",age:10}},"Ali"),e.createElement(l,{value:{name:"reza",age:12}},"Reza"),e.createElement(l,{value:{name:"joe",age:14}},"Joe"))}},O={args:{label:"required select",message:"focus and un focus without selecting a value to see validation error",required:!0}},L={render:()=>{const t=e.createElement(c.Fragment,null,s.map(a=>e.createElement(l,{key:a.userId,value:a},a.name)));return e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"}},e.createElement(r,{size:"xl",label:"xl size",message:"message underneath"}),e.createElement(r,{size:"xl",label:"xl size",placeholder:"placeholder"},t),e.createElement(r,{size:"xl",label:"xl size",value:s[0]},t),e.createElement(r,{size:"lg",label:"lg size",message:"message underneath"}),e.createElement(r,{size:"lg",label:"lg size",placeholder:"placeholder"},t),e.createElement(r,{size:"lg",label:"lg size",value:s[0]},t),e.createElement(r,{size:"md",label:"md size",message:"message underneath"}),e.createElement(r,{size:"md",label:"md size",placeholder:"placeholder"},t),e.createElement(r,{size:"md",label:"md size",value:s[0]},t),e.createElement(r,{size:"sm",label:"sm size",message:"message underneath"}),e.createElement(r,{size:"sm",label:"sm size",placeholder:"placeholder"},t),e.createElement(r,{size:"sm",label:"sm size",value:s[0]},t),e.createElement(r,{size:"xs",label:"xs size",message:"message underneath"}),e.createElement(r,{size:"xs",label:"xs size",placeholder:"placeholder"},t),e.createElement(r,{size:"xs",label:"xs size",value:s[0]},t))}},x={render:()=>e.createElement("div",{style:{height:"10rem",overflowY:"auto"}},e.createElement(r,{label:"overflow test",style:{width:"10rem"},popoverPosition:"fixed"},s.map(t=>e.createElement(l,{key:t.userId,value:t},t.name))),e.createElement("div",{style:{height:"20rem",background:"red"}}))},C={render:()=>e.createElement("div",{style:{height:"14rem",maxWidth:"28rem",overflowY:"auto",border:"1px solid #94a3b8",borderRadius:"0.5rem",padding:"1rem",background:"#f8fafc"}},e.createElement("p",{style:{margin:"0 0 8rem"}},"Scroll this panel, then open each select near an edge to compare their popovers."),e.createElement(r,{label:"Default absolute popover",placeholder:"Choose a person",style:{width:"16rem",marginBottom:"1rem"}},e.createElement(o,{optionList:s,getTitle:t=>`${t.name} ${t.family}`,getValue:t=>t.userId})),e.createElement(r,{label:"Fixed popover",placeholder:"Choose a person",popoverPosition:"fixed",style:{width:"16rem"}},e.createElement(o,{optionList:s,getTitle:t=>`${t.name} ${t.family}`,getValue:t=>t.userId})),e.createElement("div",{style:{height:"16rem"}}))},z={render:()=>e.createElement("div",{style:{position:"relative",maxWidth:"28rem",overflow:"hidden",border:"1px solid #a78bfa",borderRadius:"0.5rem",padding:"1rem",background:"#faf5ff"}},e.createElement("p",{style:{marginTop:0}},"This is a positioned parent with clipped overflow. Open the select to see the popover escape the container on desktop."),e.createElement(r,{label:"Environment",placeholder:"Choose an environment",popoverPosition:"fixed",style:{width:"16rem"}},e.createElement(l,{value:"development"},"Development"),e.createElement(l,{value:"staging"},"Staging"),e.createElement(l,{value:"production"},"Production")))},k={args:{...m.args,onChange:()=>alert("Changed")}},w={globals:{locale:"fa",dir:"rtl"},args:{label:"از منو انتخاب کنید",children:e.createElement(o,{optionList:zt})},parameters:{docs:{description:{story:"RTL test"}}}},$={args:{label:"empty list",message:"this list is a empty list",children:e.createElement(o,{optionList:[]})}},I={args:{label:"select from in mobile",message:"put in mobile view and open menu. it must fill half of the page",placeholder:"select number here",children:e.createElement(o,{optionList:zt}),style:{"--jb-select-mobile-modal-height":"50vh","--jb-select-mobile-modal-border-radius":"1rem"}}},V={args:{label:"with error",message:"please select a value",error:"error message"}},T={render:()=>{const[t,a]=c.useState([]);function n(p=""){const j=[];for(let N=0;N<20;N++)j.push(`${p} - ${N}`);a(j)}c.useEffect(()=>{n()},[]);const i=function(p){const j=p.target.textValue;n(j)};return e.createElement("div",null,e.createElement(r,{label:"please type and see result change",onKeyUp:i},e.createElement(o,{optionList:t})))}},M={args:{label:"Color List",children:e.createElement(e.Fragment,null,A.map(t=>e.createElement(l,{key:t.value,value:t},e.createElement("span",{style:{backgroundColor:t.value,marginInlineEnd:"0.5rem",width:"1rem",height:"1rem",borderRadius:"0.5rem"}}),t.name)))}},R={args:{label:"Color List With Custom Selected Value Render",message:"please select a value and see the result",getSelectedValueDOM:t=>{const a=document.createElement("div");return a.classList.add("selected-value"),a.innerHTML=`
        <span part="color-box" style="background-color:${t.value};width:32px;height:16px;display:inline-block;"></span>&nbsp;
        <span>Color ${t.name}</span>
      `,a},children:e.createElement(e.Fragment,null,A.map(t=>e.createElement(l,{key:t.value,value:t},e.createElement("span",{style:{backgroundColor:t.value,marginInlineEnd:"0.5rem",width:"1rem",height:"1rem",borderRadius:"0.5rem"}}),t.name)))}},P={args:{label:"Color List With Custom Option Render callback",message:"here we render color list with callback function ",getSelectedValueDOM:t=>{const a=document.createElement("div");return a.classList.add("selected-value"),a.innerHTML=`
              <span style="background-color:${t.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color ${t.name}</span>
            `,a},children:e.createElement(e.Fragment,null,e.createElement(o,{optionList:A,getTitle:t=>t.name,getContentDOM:t=>{const a=document.createElement("div");return a.classList.add("selected-value"),a.innerHTML=`
              <span style="background-color:${t.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color ${t.name}</span>
            `,a}}))}},D={render:()=>{function t(a){const n=document.createElement("div");return n.classList.add("selected-value"),n.innerHTML='<span part="color-box" style="background-color:'+a.value+';width:16px;height:16px"></span>&nbsp;'+a.name,n}return e.createElement("div",{className:"select-custom-design"},e.createElement(r,{searchPlaceholder:"search color",getSelectedValueDOM:t},A.map(a=>e.createElement(l,{value:a,key:a.value},e.createElement("span",{className:"color-circle",style:{backgroundColor:a.value}}),a.name)),e.createElement("div",{style:{height:"24px"},slot:"select-arrow-icon"},e.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},e.createElement("title",null,"arrow icon"),e.createElement("rect",{width:"24",height:"24",rx:"5",fill:"#E7E7E7"}),e.createElement("path",{d:"M19 8.5L12 15.5L5 8.5",stroke:"#8B8B8B",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})))))}},W={render:()=>{const[t,a]=c.useState(null);return e.createElement(r,{value:t,onChange:n=>{a(n.target.value)}},e.createElement(l,{value:!0},"True"),e.createElement(l,{value:!1},"False"))}},F={render:t=>{const{value:a}=t,[n,i]=c.useState([]);return e.createElement("div",null,e.createElement(r,{value:a,label:"missing option",message:"value is already set but options are not available when option available value will be set"},n.map(p=>e.createElement(l,{value:p},p.name))),e.createElement(Ct,{onClick:()=>i(s)},"Fill Option"))},args:{value:s[3]}};var _,q,K;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder"
  }
}`,...(K=(q=m.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Y,U,G;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple>
        {persons.map(p => {
        return <JBOption key={p.userId} value={p.userId}>{\`\${p.name} \${p.family}\`}</JBOption>;
      })}
      </JBSelect>;
  }
}`,...(G=(U=u.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var Q,X,Z;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple label="Assignees" placeholder="Choose one or more people">
        <JBOptionList optionList={persons} getTitle={person => \`\${person.name} \${person.family}\`} getValue={person => person.userId} />
      </JBSelect>;
  }
}`,...(Z=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ae;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple>
        {persons.map(p => {
        return <JBOption key={p.userId} value={p.userId}><JBCheckbox size='sm' /><span>{\`\${p.name} \${p.family}\`}</span></JBOption>;
      })}
      </JBSelect>;
  }
}`,...(ae=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,le,se;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple>
        {persons.map(p => {
        return <JBOption key={p.userId} value={p.userId}><JBCheckbox size='sm'><div slot="label">{\`\${p.name} \${p.family}\`}</div></JBCheckbox></JBOption>;
      })}
      </JBSelect>;
  }
}`,...(se=(le=h.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ne,oe,ie;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ie=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,pe,me;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder",
    value: nameList[3],
    children: <JBOptionList optionList={nameList} />
  }
}`,...(me=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ue,de,ge;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    value: nameList[3],
    disabled: true
  }
}`,...(ge=(de=E.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};var he,ve,be;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    label: 'fixed',
    message: "open select and see popover(only works in a desktop)",
    popoverPosition: "fixed"
  }
}`,...(be=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var Ee,Be,fe;f.parameters={...f.parameters,docs:{...(Ee=f.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(fe=(Be=f.parameters)==null?void 0:Be.docs)==null?void 0:fe.source}}};var Je,Se,ye;J.parameters={...J.parameters,docs:{...(Je=J.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder",
    hideClear: true
  }
}`,...(ye=(Se=J.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var Oe,Le,xe;S.parameters={...S.parameters,docs:{...(Oe=S.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(xe=(Le=S.parameters)==null?void 0:Le.docs)==null?void 0:xe.source}}};var Ce,ze,ke;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(ke=(ze=y.parameters)==null?void 0:ze.docs)==null?void 0:ke.source}}};var we,$e,Ie;O.parameters={...O.parameters,docs:{...(we=O.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    label: 'required select',
    message: "focus and un focus without selecting a value to see validation error",
    required: true
  }
}`,...(Ie=($e=O.parameters)==null?void 0:$e.docs)==null?void 0:Ie.source}}};var Ve,Te,Me;L.parameters={...L.parameters,docs:{...(Ve=L.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Me=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:Me.source}}};var Re,Pe,De;x.parameters={...x.parameters,docs:{...(Re=x.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(De=(Pe=x.parameters)==null?void 0:Pe.docs)==null?void 0:De.source}}};var We,Fe,je;C.parameters={...C.parameters,docs:{...(We=C.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(je=(Fe=C.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var He,Ae,Ne;z.parameters={...z.parameters,docs:{...(He=z.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ne=(Ae=z.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};var _e,qe,Ke;k.parameters={...k.parameters,docs:{...(_e=k.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    onChange: () => alert('Changed')
  }
}`,...(Ke=(qe=k.parameters)==null?void 0:qe.docs)==null?void 0:Ke.source}}};var Ye,Ue,Ge;w.parameters={...w.parameters,docs:{...(Ye=w.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Ge=(Ue=w.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};var Qe,Xe,Ze;$.parameters={...$.parameters,docs:{...(Qe=$.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    label: 'empty list',
    message: "this list is a empty list",
    children: <JBOptionList optionList={[]} />
  }
}`,...(Ze=(Xe=$.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,at;I.parameters={...I.parameters,docs:{...(et=I.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(at=(tt=I.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var rt,lt,st;V.parameters={...V.parameters,docs:{...(rt=V.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: "please select a value",
    error: "error message"
  }
}`,...(st=(lt=V.parameters)==null?void 0:lt.docs)==null?void 0:st.source}}};var nt,ot,it;T.parameters={...T.parameters,docs:{...(nt=T.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(it=(ot=T.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};var ct,pt,mt;M.parameters={...M.parameters,docs:{...(ct=M.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(mt=(pt=M.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var ut,dt,gt;R.parameters={...R.parameters,docs:{...(ut=R.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(gt=(dt=R.parameters)==null?void 0:dt.docs)==null?void 0:gt.source}}};var ht,vt,bt;P.parameters={...P.parameters,docs:{...(ht=P.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(bt=(vt=P.parameters)==null?void 0:vt.docs)==null?void 0:bt.source}}};var Et,Bt,ft;D.parameters={...D.parameters,docs:{...(Et=D.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(ft=(Bt=D.parameters)==null?void 0:Bt.docs)==null?void 0:ft.source}}};var Jt,St,yt;W.parameters={...W.parameters,docs:{...(Jt=W.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<boolean | null>(null);
    return <JBSelect value={value} onChange={e => {
      setValue(e.target.value);
    }}>
        <JBOption value={true}>True</JBOption>
        <JBOption value={false}>False</JBOption>
      </JBSelect>;
  }
}`,...(yt=(St=W.parameters)==null?void 0:St.docs)==null?void 0:yt.source}}};var Ot,Lt,xt;F.parameters={...F.parameters,docs:{...(Ot=F.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(xt=(Lt=F.parameters)==null?void 0:Lt.docs)==null?void 0:xt.source}}};const $t=["Normal","Multiple","MultipleWithOptionList","MultipleWithCheckbox","MultipleWithCheckboxAndLabel","MultipleWithValue","WithValue","Disabled","FixedPopoverPosition","OptionObject","HideCleanButton","OptionAsChildren","OptionObjectAsChildren","Required","SizeVariants","OverflowTest","FixedPopoverInScrollableContainer","FixedPopoverInPositionedContainer","EventTest","RTL","EmptyList","ModalHeight","WithError","DynamicList","CustomOption","CustomSelectedValueRender","CustomOptionRender","JBSelectDesignTest","BooleanValue","MissingOption"],Pt=Object.freeze(Object.defineProperty({__proto__:null,BooleanValue:W,CustomOption:M,CustomOptionRender:P,CustomSelectedValueRender:R,Disabled:E,DynamicList:T,EmptyList:$,EventTest:k,FixedPopoverInPositionedContainer:z,FixedPopoverInScrollableContainer:C,FixedPopoverPosition:B,HideCleanButton:J,JBSelectDesignTest:D,MissingOption:F,ModalHeight:I,Multiple:u,MultipleWithCheckbox:g,MultipleWithCheckboxAndLabel:h,MultipleWithOptionList:d,MultipleWithValue:v,Normal:m,OptionAsChildren:S,OptionObject:f,OptionObjectAsChildren:y,OverflowTest:x,RTL:w,Required:O,SizeVariants:L,WithError:V,WithValue:b,__namedExportsOrder:$t,default:wt},Symbol.toStringTag,{value:"Module"}));export{R as C,C as F,u as M,m as N,S as O,Pt as S,v as a,g as b,h as c,f as d,d as e,z as f};
