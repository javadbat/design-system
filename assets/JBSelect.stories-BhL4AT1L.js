import{R as e,r as c}from"./index-D4lIrffr.js";import{i as l,u as i,o as s}from"./index-CyE7dYMq.js";import{o as Bt}from"./JBButton-CbaRHm9y.js";import{p as r,n as F,a as Jt,c as H}from"./constants-Ci1PGOK2.js";import{a as St}from"./JBCheckbox--jxmdS6A.js";const ft={title:"Components/form elements/JBSelect",component:l,args:{children:e.createElement(i,{optionList:F})}},m={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder"}},u={render:()=>e.createElement(l,{multiple:!0},r.map(t=>e.createElement(s,{key:t.userId,value:t.userId},`${t.name} ${t.family}`)))},d={render:()=>e.createElement(l,{multiple:!0,label:"Assignees",placeholder:"Choose one or more people"},e.createElement(i,{optionList:r,getTitle:t=>`${t.name} ${t.family}`,getValue:t=>t.userId}))},g={render:()=>e.createElement(l,{multiple:!0},r.map(t=>e.createElement(s,{key:t.userId,value:t.userId},e.createElement(St,{size:"sm"}),e.createElement("span",null,`${t.name} ${t.family}`))))},h={render:()=>e.createElement(l,{multiple:!0},r.map(t=>e.createElement(s,{key:t.userId,value:t.userId},e.createElement(St,{size:"sm"},e.createElement("div",{slot:"label"},`${t.name} ${t.family}`)))))},v={render:t=>{const[a,n]=c.useState(t.value);return c.useEffect(()=>{n(t.value)},[t.value]),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"}},e.createElement(l,{multiple:!0,value:a,onChange:o=>n(o.target.value)},r.map(o=>e.createElement(s,{key:o.userId,value:o.userId},`${o.name} ${o.family}`))),e.createElement(Bt,{size:"sm",onClick:()=>console.log(a)},"Log Value (see console)"))},args:{value:[...r.filter((t,a)=>a%2==0).map(t=>t.userId)]}},b={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder",value:F[3],children:e.createElement(i,{optionList:F})}},E={args:{label:"select from menu",message:"please select a value",value:F[3],disabled:!0}},B={args:{label:"fixed",message:"open select and see popover(only works in a desktop)",popoverPosition:"fixed"}},J={args:{label:"select from menu",children:e.createElement(i,{optionList:[{name:"peter",family:"hanan",userId:1},{name:"reza",family:"asadi",userId:2}],getTitle:t=>`${t.name} ${t.family}`,getValue:t=>t.userId}),onChange:t=>{console.log("onChange",t.target.value)}}},S={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder",hideClear:!0}},f={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder",children:e.createElement(e.Fragment,null,e.createElement(s,{value:"1"},"one"),e.createElement(s,{value:"2"},"two"),e.createElement(s,{value:"3"},"three"),e.createElement(s,{value:"4"},"four"),e.createElement(s,{value:"5"},"five"),e.createElement(s,{value:"6"},"six"),e.createElement(s,{value:"7"},"seven"),e.createElement(s,{value:"8"},"eight"),e.createElement(s,{value:"9"},"nine"),e.createElement(s,{value:"10"},"ten"))}},O={args:{label:"select from menu",message:"please select a value",placeholder:"select number here",children:e.createElement(e.Fragment,null,e.createElement(s,{value:{name:"ali",age:10}},"Ali"),e.createElement(s,{value:{name:"reza",age:12}},"Reza"),e.createElement(s,{value:{name:"joe",age:14}},"Joe"))}},L={args:{label:"required select",message:"focus and un focus without selecting a value to see validation error",required:!0}},y={render:()=>{const t=e.createElement(c.Fragment,null,r.map(a=>e.createElement(s,{key:a.userId,value:a},a.name)));return e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"}},e.createElement(l,{size:"xl",label:"xl size",message:"message underneath"}),e.createElement(l,{size:"xl",label:"xl size",placeholder:"placeholder"},t),e.createElement(l,{size:"xl",label:"xl size",value:r[0]},t),e.createElement(l,{size:"lg",label:"lg size",message:"message underneath"}),e.createElement(l,{size:"lg",label:"lg size",placeholder:"placeholder"},t),e.createElement(l,{size:"lg",label:"lg size",value:r[0]},t),e.createElement(l,{size:"md",label:"md size",message:"message underneath"}),e.createElement(l,{size:"md",label:"md size",placeholder:"placeholder"},t),e.createElement(l,{size:"md",label:"md size",value:r[0]},t),e.createElement(l,{size:"sm",label:"sm size",message:"message underneath"}),e.createElement(l,{size:"sm",label:"sm size",placeholder:"placeholder"},t),e.createElement(l,{size:"sm",label:"sm size",value:r[0]},t),e.createElement(l,{size:"xs",label:"xs size",message:"message underneath"}),e.createElement(l,{size:"xs",label:"xs size",placeholder:"placeholder"},t),e.createElement(l,{size:"xs",label:"xs size",value:r[0]},t))}},x={render:()=>e.createElement("div",{style:{height:"10rem",overflowY:"auto"}},e.createElement(l,{label:"overflow test",style:{width:"10rem"},popoverPosition:"fixed"},r.map(t=>e.createElement(s,{key:t.userId,value:t},t.name))),e.createElement("div",{style:{height:"20rem",background:"red"}}))},z={args:{...m.args,onChange:()=>alert("Changed")}},k={globals:{locale:"fa",dir:"rtl"},args:{label:"از منو انتخاب کنید",children:e.createElement(i,{optionList:Jt})},parameters:{docs:{description:{story:"RTL test"}}}},C={args:{label:"empty list",message:"this list is a empty list",children:e.createElement(i,{optionList:[]})}},w={args:{label:"select from in mobile",message:"put in mobile view and open menu. it must fill half of the page",placeholder:"select number here",children:e.createElement(i,{optionList:Jt}),style:{"--jb-select-mobile-modal-height":"50vh","--jb-select-mobile-modal-border-radius":"1rem"}}},$={args:{label:"with error",message:"please select a value",error:"error message"}},M={render:()=>{const[t,a]=c.useState([]);function n(p=""){const j=[];for(let P=0;P<20;P++)j.push(`${p} - ${P}`);a(j)}c.useEffect(()=>{n()},[]);const o=function(p){const j=p.target.textValue;n(j)};return e.createElement("div",null,e.createElement(l,{label:"please type and see result change",onKeyUp:o},e.createElement(i,{optionList:t})))}},V={args:{label:"Color List",children:e.createElement(e.Fragment,null,H.map(t=>e.createElement(s,{key:t.value,value:t},e.createElement("span",{style:{backgroundColor:t.value,marginInlineEnd:"0.5rem",width:"1rem",height:"1rem",borderRadius:"0.5rem"}}),t.name)))}},I={args:{label:"Color List With Custom Selected Value Render",message:"please select a value and see the result",getSelectedValueDOM:t=>{const a=document.createElement("div");return a.classList.add("selected-value"),a.innerHTML=`
        <span part="color-box" style="background-color:${t.value};width:32px;height:16px;display:inline-block;"></span>&nbsp;
        <span>Color ${t.name}</span>
      `,a},children:e.createElement(e.Fragment,null,H.map(t=>e.createElement(s,{key:t.value,value:t},e.createElement("span",{style:{backgroundColor:t.value,marginInlineEnd:"0.5rem",width:"1rem",height:"1rem",borderRadius:"0.5rem"}}),t.name)))}},T={args:{label:"Color List With Custom Option Render callback",message:"here we render color list with callback function ",getSelectedValueDOM:t=>{const a=document.createElement("div");return a.classList.add("selected-value"),a.innerHTML=`
              <span style="background-color:${t.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color ${t.name}</span>
            `,a},children:e.createElement(e.Fragment,null,e.createElement(i,{optionList:H,getTitle:t=>t.name,getContentDOM:t=>{const a=document.createElement("div");return a.classList.add("selected-value"),a.innerHTML=`
              <span style="background-color:${t.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color ${t.name}</span>
            `,a}}))}},R={render:()=>{function t(a){const n=document.createElement("div");return n.classList.add("selected-value"),n.innerHTML='<span part="color-box" style="background-color:'+a.value+';width:16px;height:16px"></span>&nbsp;'+a.name,n}return e.createElement("div",{className:"select-custom-design"},e.createElement(l,{searchPlaceholder:"search color",getSelectedValueDOM:t},H.map(a=>e.createElement(s,{value:a,key:a.value},e.createElement("span",{className:"color-circle",style:{backgroundColor:a.value}}),a.name)),e.createElement("div",{style:{height:"24px"},slot:"select-arrow-icon"},e.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},e.createElement("title",null,"arrow icon"),e.createElement("rect",{width:"24",height:"24",rx:"5",fill:"#E7E7E7"}),e.createElement("path",{d:"M19 8.5L12 15.5L5 8.5",stroke:"#8B8B8B",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})))))}},D={render:()=>{const[t,a]=c.useState(null);return e.createElement(l,{value:t,onChange:n=>{a(n.target.value)}},e.createElement(s,{value:!0},"True"),e.createElement(s,{value:!1},"False"))}},W={render:t=>{const{value:a}=t,[n,o]=c.useState([]);return e.createElement("div",null,e.createElement(l,{value:a,label:"missing option",message:"value is already set but options are not available when option available value will be set"},n.map(p=>e.createElement(s,{value:p},p.name))),e.createElement(Bt,{onClick:()=>o(r)},"Fill Option"))},args:{value:r[3]}};var A,N,_;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder"
  }
}`,...(_=(N=m.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var q,K,U;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple>
        {persons.map(p => {
        return <JBOption key={p.userId} value={p.userId}>{\`\${p.name} \${p.family}\`}</JBOption>;
      })}
      </JBSelect>;
  }
}`,...(U=(K=u.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,G,Q;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple label="Assignees" placeholder="Choose one or more people">
        <JBOptionList optionList={persons} getTitle={person => \`\${person.name} \${person.family}\`} getValue={person => person.userId} />
      </JBSelect>;
  }
}`,...(Q=(G=d.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,Z,ee;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple>
        {persons.map(p => {
        return <JBOption key={p.userId} value={p.userId}><JBCheckbox size='sm' /><span>{\`\${p.name} \${p.family}\`}</span></JBOption>;
      })}
      </JBSelect>;
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,le;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple>
        {persons.map(p => {
        return <JBOption key={p.userId} value={p.userId}><JBCheckbox size='sm'><div slot="label">{\`\${p.name} \${p.family}\`}</div></JBCheckbox></JBOption>;
      })}
      </JBSelect>;
  }
}`,...(le=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var se,re,ne;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ne=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,ie,ce;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder",
    value: nameList[3],
    children: <JBOptionList optionList={nameList} />
  }
}`,...(ce=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var pe,me,ue;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    value: nameList[3],
    disabled: true
  }
}`,...(ue=(me=E.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var de,ge,he;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    label: 'fixed',
    message: "open select and see popover(only works in a desktop)",
    popoverPosition: "fixed"
  }
}`,...(he=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ve,be,Ee;J.parameters={...J.parameters,docs:{...(ve=J.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ee=(be=J.parameters)==null?void 0:be.docs)==null?void 0:Ee.source}}};var Be,Je,Se;S.parameters={...S.parameters,docs:{...(Be=S.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder",
    hideClear: true
  }
}`,...(Se=(Je=S.parameters)==null?void 0:Je.docs)==null?void 0:Se.source}}};var fe,Oe,Le;f.parameters={...f.parameters,docs:{...(fe=f.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Le=(Oe=f.parameters)==null?void 0:Oe.docs)==null?void 0:Le.source}}};var ye,xe,ze;O.parameters={...O.parameters,docs:{...(ye=O.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ze=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:ze.source}}};var ke,Ce,we;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    label: 'required select',
    message: "focus and un focus without selecting a value to see validation error",
    required: true
  }
}`,...(we=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};var $e,Me,Ve;y.parameters={...y.parameters,docs:{...($e=y.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ve=(Me=y.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var Ie,Te,Re;x.parameters={...x.parameters,docs:{...(Ie=x.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Re=(Te=x.parameters)==null?void 0:Te.docs)==null?void 0:Re.source}}};var De,We,je;z.parameters={...z.parameters,docs:{...(De=z.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    onChange: () => alert('Changed')
  }
}`,...(je=(We=z.parameters)==null?void 0:We.docs)==null?void 0:je.source}}};var Fe,He,Pe;k.parameters={...k.parameters,docs:{...(Fe=k.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Pe=(He=k.parameters)==null?void 0:He.docs)==null?void 0:Pe.source}}};var Ae,Ne,_e;C.parameters={...C.parameters,docs:{...(Ae=C.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    label: 'empty list',
    message: "this list is a empty list",
    children: <JBOptionList optionList={[]} />
  }
}`,...(_e=(Ne=C.parameters)==null?void 0:Ne.docs)==null?void 0:_e.source}}};var qe,Ke,Ue;w.parameters={...w.parameters,docs:{...(qe=w.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ue=(Ke=w.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.source}}};var Ye,Ge,Qe;$.parameters={...$.parameters,docs:{...(Ye=$.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: "please select a value",
    error: "error message"
  }
}`,...(Qe=(Ge=$.parameters)==null?void 0:Ge.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;M.parameters={...M.parameters,docs:{...(Xe=M.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=M.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,lt;V.parameters={...V.parameters,docs:{...(tt=V.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(lt=(at=V.parameters)==null?void 0:at.docs)==null?void 0:lt.source}}};var st,rt,nt;I.parameters={...I.parameters,docs:{...(st=I.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(nt=(rt=I.parameters)==null?void 0:rt.docs)==null?void 0:nt.source}}};var ot,it,ct;T.parameters={...T.parameters,docs:{...(ot=T.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(ct=(it=T.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var pt,mt,ut;R.parameters={...R.parameters,docs:{...(pt=R.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(ut=(mt=R.parameters)==null?void 0:mt.docs)==null?void 0:ut.source}}};var dt,gt,ht;D.parameters={...D.parameters,docs:{...(dt=D.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<boolean | null>(null);
    return <JBSelect value={value} onChange={e => {
      setValue(e.target.value);
    }}>
        <JBOption value={true}>True</JBOption>
        <JBOption value={false}>False</JBOption>
      </JBSelect>;
  }
}`,...(ht=(gt=D.parameters)==null?void 0:gt.docs)==null?void 0:ht.source}}};var vt,bt,Et;W.parameters={...W.parameters,docs:{...(vt=W.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(Et=(bt=W.parameters)==null?void 0:bt.docs)==null?void 0:Et.source}}};const Ot=["Normal","Multiple","MultipleWithOptionList","MultipleWithCheckbox","MultipleWithCheckboxAndLabel","MultipleWithValue","WithValue","Disabled","FixedPopoverPosition","OptionObject","HideCleanButton","OptionAsChildren","OptionObjectAsChildren","Required","SizeVariants","OverflowTest","EventTest","RTL","EmptyList","ModalHeight","WithError","DynamicList","CustomOption","CustomSelectedValueRender","CustomOptionRender","JBSelectDesignTest","BooleanValue","MissingOption"],Ct=Object.freeze(Object.defineProperty({__proto__:null,BooleanValue:D,CustomOption:V,CustomOptionRender:T,CustomSelectedValueRender:I,Disabled:E,DynamicList:M,EmptyList:C,EventTest:z,FixedPopoverPosition:B,HideCleanButton:S,JBSelectDesignTest:R,MissingOption:W,ModalHeight:w,Multiple:u,MultipleWithCheckbox:g,MultipleWithCheckboxAndLabel:h,MultipleWithOptionList:d,MultipleWithValue:v,Normal:m,OptionAsChildren:f,OptionObject:J,OptionObjectAsChildren:O,OverflowTest:x,RTL:k,Required:L,SizeVariants:y,WithError:$,WithValue:b,__namedExportsOrder:Ot,default:ft},Symbol.toStringTag,{value:"Module"}));export{u as M,m as N,f as O,Ct as S,v as a,g as b,h as c,J as d,d as e};
