import{r as i,R as e}from"./index-CMhrCaxv.js";import{i as r,o as a,u as o}from"./index-Cppu8o1r.js";import{o as Jt}from"./JBButton-CHnNN6Xl.js";import{f as p}from"./chunk-NAVWDHVN-nYOG0we8.js";import{a as St}from"./JBCheckbox-Bh9KZuE3.js";const u=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39"],P=[{id:1,name:"Red",value:"#f00"},{id:2,name:"Green",value:"#0f0"},{id:3,name:"Blue",value:"#00f"},{id:4,name:"Yellow",value:"#ff0"}],H=p.helpers.multiple(()=>p.person.firstName(),{count:100}),s=p.helpers.multiple(()=>({name:p.person.firstName(),family:p.person.lastName(),userId:p.number.int()}),{count:100}),ft={title:"Components/form elements/JBSelect",component:r,args:{children:e.createElement(o,{optionList:H})}},d={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder"}},b={render:()=>e.createElement(r,{multiple:!0},s.map(t=>e.createElement(a,{key:t.userId,value:t.userId},`${t.name} ${t.family}`)))},g={render:()=>e.createElement(r,{multiple:!0},s.map(t=>e.createElement(a,{key:t.userId,value:t.userId},e.createElement(St,{size:"sm"}),e.createElement("span",null,`${t.name} ${t.family}`))))},v={render:()=>e.createElement(r,{multiple:!0},s.map(t=>e.createElement(a,{key:t.userId,value:t.userId},e.createElement(St,{size:"sm"},e.createElement("div",{slot:"label"},`${t.name} ${t.family}`)))))},h={render:t=>{const[l,n]=i.useState(t.value);return i.useEffect(()=>{n(t.value)},[t.value]),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"}},e.createElement(r,{multiple:!0,value:l,onChange:c=>n(c.target.value)},s.map(c=>e.createElement(a,{key:c.userId,value:c.userId},`${c.name} ${c.family}`))),e.createElement(Jt,{size:"sm",onClick:()=>console.log(l)},"Log Value (see console)"))},args:{value:[...s.filter((t,l)=>l%2==0).map(t=>t.userId)]}},E={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder",value:H[3],children:e.createElement(o,{optionList:H})}},B={args:{label:"select from menu",message:"please select a value",value:H[3],disabled:!0}},y={args:{label:"fixed",message:"open select and see popover(only works in a desktop)",popoverPosition:"fixed"}},J={args:{label:"select from menu",children:e.createElement(o,{optionList:[{name:"peter",family:"hanan",userId:1},{name:"reza",family:"asadi",userId:2}],getTitle:t=>`${t.name} ${t.family}`,getValue:t=>t.userId}),onChange:t=>{console.log("onChange",t.target.value)}}},S={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder",hideClear:!0}},f={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder",children:e.createElement(e.Fragment,null,e.createElement(a,{value:"1"},"one"),e.createElement(a,{value:"2"},"two"),e.createElement(a,{value:"3"},"three"),e.createElement(a,{value:"4"},"four"),e.createElement(a,{value:"5"},"five"),e.createElement(a,{value:"6"},"six"),e.createElement(a,{value:"7"},"seven"),e.createElement(a,{value:"8"},"eight"),e.createElement(a,{value:"9"},"nine"),e.createElement(a,{value:"10"},"ten"))}},x={args:{label:"select from menu",message:"please select a value",placeholder:"select number here",children:e.createElement(e.Fragment,null,e.createElement(a,{value:{name:"ali",age:10}},"Ali"),e.createElement(a,{value:{name:"reza",age:12}},"Reza"),e.createElement(a,{value:{name:"joe",age:14}},"Joe"))}},O={args:{label:"required select",message:"focus and un focus without selecting a value to see validation error",required:!0}},L={render:()=>{const t=e.createElement(i.Fragment,null,s.map(l=>e.createElement(a,{key:l.userId,value:l},l.name)));return e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"}},e.createElement(r,{size:"xl",label:"xl size",message:"message underneath"}),e.createElement(r,{size:"xl",label:"xl size",placeholder:"placeholder"},t),e.createElement(r,{size:"xl",label:"xl size",value:s[0]},t),e.createElement(r,{size:"lg",label:"lg size",message:"message underneath"}),e.createElement(r,{size:"lg",label:"lg size",placeholder:"placeholder"},t),e.createElement(r,{size:"lg",label:"lg size",value:s[0]},t),e.createElement(r,{size:"md",label:"md size",message:"message underneath"}),e.createElement(r,{size:"md",label:"md size",placeholder:"placeholder"},t),e.createElement(r,{size:"md",label:"md size",value:s[0]},t),e.createElement(r,{size:"sm",label:"sm size",message:"message underneath"}),e.createElement(r,{size:"sm",label:"sm size",placeholder:"placeholder"},t),e.createElement(r,{size:"sm",label:"sm size",value:s[0]},t),e.createElement(r,{size:"xs",label:"xs size",message:"message underneath"}),e.createElement(r,{size:"xs",label:"xs size",placeholder:"placeholder"},t),e.createElement(r,{size:"xs",label:"xs size",value:s[0]},t))}},z={render:()=>e.createElement("div",{style:{height:"10rem",overflowY:"auto"}},e.createElement(r,{label:"overflow test",style:{width:"10rem"},popoverPosition:"fixed"},s.map(t=>e.createElement(a,{key:t.userId,value:t},t.name))),e.createElement("div",{style:{height:"20rem",background:"red"}}))},C={args:{...d.args,onChange:()=>alert("Changed")}},k={globals:{locale:"fa",dir:"rtl"},args:{label:"از منو انتخاب کنید",children:e.createElement(o,{optionList:u})},parameters:{docs:{description:{story:"RTL test"}}}},j={render:t=>e.createElement("div",null,e.createElement("div",{className:"filter-select-style-1"},e.createElement(r,{...t},e.createElement(o,{optionList:u}))),e.createElement("div",{className:"style-table-title-1"},"JB Select Custom Style 1"),e.createElement("div",{className:"style-table-content-1"},"--jb-select-margin: 0px 2px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-rounded: 24px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: royalblue;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: tomato;",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: mintcream;"),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{className:"filter-select-style-2"},e.createElement(r,{...t},e.createElement(o,{optionList:u}))),e.createElement("div",{className:"style-table-title-2"},"JB Select Custom Style 2"),e.createElement("div",{className:"style-table-content-2"},"--jb-select-margin: 0px 4px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-rounded: 0px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: rgb(26, 23, 23);",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: rgb(30, 29, 43);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor-selected: rgb(195, 57, 230);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: lightgray;",e.createElement("br",null),e.createElement("br",null),"--jb-select-mobile-search-input-height: 64px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-bottom-width:1px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-mobile-item-list-border-radius:16px;"),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{className:"self-style-wrapper"},e.createElement(r,{className:"self-style-select",label:"self style",message:"this select get classname itself and style are not set to parent element"},e.createElement(o,{optionList:u}))),e.createElement("div",{className:"style-table-title-2"},"JB Select Custom Style 2"),e.createElement("div",{className:"style-table-content-2"},"--jb-select-margin: 0px 4px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-rounded: 0px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: rgb(26, 23, 23);",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: rgb(30, 29, 43);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor-selected: rgb(195, 57, 230);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: lightgray;"),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{className:"with-divider-line"},e.createElement(r,{className:"self-style-select",label:"self style",message:"this select get classname itself and style are not set to parent element"},e.createElement(o,{optionList:u}))),e.createElement("div",{className:"style-table-title-2"},"JB Select Custom Style 3"),e.createElement("div",{className:"style-table-content-2"},"--jb-select-margin: 0px 4px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-rounded: 0px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: rgb(26, 23, 23);",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: rgb(30, 29, 43);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor-selected: rgb(195, 57, 230);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: lightgray;")),args:{label:"Select Option"}},w={args:{label:"empty list",message:"this list is a empty list",children:e.createElement(o,{optionList:[]})}},N={args:{label:"select from in mobile",message:"put in mobile view and open menu. it must fill half of the page",placeholder:"select number here",children:e.createElement(o,{optionList:u}),style:{"--jb-select-mobile-modal-height":"50vh","--jb-select-mobile-modal-border-radius":"1rem"}}},$={args:{label:"with error",message:"please select a value",error:"error message"}},I={render:()=>{const[t,l]=i.useState([]);function n(m=""){const F=[];for(let A=0;A<20;A++)F.push(`${m} - ${A}`);l(F)}i.useEffect(()=>{n()},[]);const c=function(m){const F=m.target.textValue;n(F)};return e.createElement("div",null,e.createElement(r,{label:"please type and see result change",onKeyUp:c},e.createElement(o,{optionList:t})))}},M={args:{label:"Color List",children:e.createElement(e.Fragment,null,P.map(t=>e.createElement(a,{key:t.value,value:t},e.createElement("span",{style:{backgroundColor:t.value,marginInlineEnd:"0.5rem",width:"1rem",height:"1rem",borderRadius:"0.5rem"}}),t.name)))}},V={args:{label:"Color List With Custom Selected Value Render",message:"please select a value and see the result",getSelectedValueDOM:t=>{const l=document.createElement("div");return l.classList.add("selected-value"),l.innerHTML=`
        <span part="color-box" style="background-color:${t.value};width:32px;height:16px;display:inline-block;"></span>&nbsp;
        <span>Color ${t.name}</span>
      `,l},children:e.createElement(e.Fragment,null,P.map(t=>e.createElement(a,{key:t.value,value:t},e.createElement("span",{style:{backgroundColor:t.value,marginInlineEnd:"0.5rem",width:"1rem",height:"1rem",borderRadius:"0.5rem"}}),t.name)))}},T={args:{label:"Color List With Custom Option Render callback",message:"here we render color list with callback function ",getSelectedValueDOM:t=>{const l=document.createElement("div");return l.classList.add("selected-value"),l.innerHTML=`
              <span style="background-color:${t.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color ${t.name}</span>
            `,l},children:e.createElement(e.Fragment,null,e.createElement(o,{optionList:P,getTitle:t=>t.name,getContentDOM:t=>{const l=document.createElement("div");return l.classList.add("selected-value"),l.innerHTML=`
              <span style="background-color:${t.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color ${t.name}</span>
            `,l}}))}},R={render:()=>{function t(l){const n=document.createElement("div");return n.classList.add("selected-value"),n.innerHTML='<span part="color-box" style="background-color:'+l.value+';width:16px;height:16px"></span>&nbsp;'+l.name,n}return e.createElement("div",{className:"select-custom-design"},e.createElement(r,{searchPlaceholder:"search color",getSelectedValueDOM:t},P.map(l=>e.createElement(a,{value:l,key:l.value},e.createElement("span",{className:"color-circle",style:{backgroundColor:l.value}}),l.name)),e.createElement("div",{style:{height:"24px"},slot:"select-arrow-icon"},e.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},e.createElement("title",null,"arrow icon"),e.createElement("rect",{width:"24",height:"24",rx:"5",fill:"#E7E7E7"}),e.createElement("path",{d:"M19 8.5L12 15.5L5 8.5",stroke:"#8B8B8B",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})))))}},D={render:()=>{const[t,l]=i.useState(null);return e.createElement(r,{value:t,onChange:n=>{l(n.target.value)}},e.createElement(a,{value:!0},"True"),e.createElement(a,{value:!1},"False"))}},W={render:t=>{const{value:l}=t,[n,c]=i.useState([]);return e.createElement("div",null,e.createElement(r,{value:l,label:"missing option",message:"value is already set but options are not available when option available value will be set"},n.map(m=>e.createElement(a,{value:m},m.name))),e.createElement(Jt,{onClick:()=>c(s)},"Fill Option"))},args:{value:s[3]}};var _,q,K;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder"
  }
}`,...(K=(q=d.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Y,U,G;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple>
        {persons.map(p => {
        return <JBOption key={p.userId} value={p.userId}>{\`\${p.name} \${p.family}\`}</JBOption>;
      })}
      </JBSelect>;
  }
}`,...(G=(U=b.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var Q,X,Z;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple>
        {persons.map(p => {
        return <JBOption key={p.userId} value={p.userId}><JBCheckbox size='sm' /><span>{\`\${p.name} \${p.family}\`}</span></JBOption>;
      })}
      </JBSelect>;
  }
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,le;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    return <JBSelect multiple>
        {persons.map(p => {
        return <JBOption key={p.userId} value={p.userId}><JBCheckbox size='sm'><div slot="label">{\`\${p.name} \${p.family}\`}</div></JBCheckbox></JBOption>;
      })}
      </JBSelect>;
  }
}`,...(le=(te=v.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var re,ae,se;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ne,oe,ce;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder",
    value: nameList[3],
    children: <JBOptionList optionList={nameList} />
  }
}`,...(ce=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var ie,me,pe;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    value: nameList[3],
    disabled: true
  }
}`,...(pe=(me=B.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,de,be;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    label: 'fixed',
    message: "open select and see popover(only works in a desktop)",
    popoverPosition: "fixed"
  }
}`,...(be=(de=y.parameters)==null?void 0:de.docs)==null?void 0:be.source}}};var ge,ve,he;J.parameters={...J.parameters,docs:{...(ge=J.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(he=(ve=J.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var Ee,Be,ye;S.parameters={...S.parameters,docs:{...(Ee=S.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder",
    hideClear: true
  }
}`,...(ye=(Be=S.parameters)==null?void 0:Be.docs)==null?void 0:ye.source}}};var Je,Se,fe;f.parameters={...f.parameters,docs:{...(Je=f.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(fe=(Se=f.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var xe,Oe,Le;x.parameters={...x.parameters,docs:{...(xe=x.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Le=(Oe=x.parameters)==null?void 0:Oe.docs)==null?void 0:Le.source}}};var ze,Ce,ke;O.parameters={...O.parameters,docs:{...(ze=O.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    label: 'required select',
    message: "focus and un focus without selecting a value to see validation error",
    required: true
  }
}`,...(ke=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var je,we,Ne;L.parameters={...L.parameters,docs:{...(je=L.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ne=(we=L.parameters)==null?void 0:we.docs)==null?void 0:Ne.source}}};var $e,Ie,Me;z.parameters={...z.parameters,docs:{...($e=z.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Me=(Ie=z.parameters)==null?void 0:Ie.docs)==null?void 0:Me.source}}};var Ve,Te,Re;C.parameters={...C.parameters,docs:{...(Ve=C.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    onChange: () => alert('Changed')
  }
}`,...(Re=(Te=C.parameters)==null?void 0:Te.docs)==null?void 0:Re.source}}};var De,We,Fe;k.parameters={...k.parameters,docs:{...(De=k.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Fe=(We=k.parameters)==null?void 0:We.docs)==null?void 0:Fe.source}}};var He,Pe,Ae;j.parameters={...j.parameters,docs:{...(He=j.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: args => {
    return <div>
        <div className="filter-select-style-1">
          <JBSelect {...args}><JBOptionList optionList={numberOptionList} /></JBSelect>
        </div>
        <div className='style-table-title-1'>JB Select Custom Style 1</div>
        <div className='style-table-content-1'>
          --jb-select-margin: 0px 2px;<br /><br />
          --jb-select-rounded: 24px;<br /><br />
          --jb-select-border-color: royalblue;<br /><br />
          --jb-select-border-color-selected: tomato;<br /><br />
          --jb-select-bgcolor: mintcream;
        </div>
        <br /><br />
        <div className="filter-select-style-2">
          <JBSelect {...args}><JBOptionList optionList={numberOptionList} /></JBSelect>
        </div>
        <div className='style-table-title-2'>JB Select Custom Style 2</div>
        <div className='style-table-content-2'>
          --jb-select-margin: 0px 4px;<br /><br />
          --jb-select-rounded: 0px;<br /><br />
          --jb-select-border-color: rgb(26, 23, 23);<br /><br />
          --jb-select-border-color-selected: rgb(30, 29, 43);<br /><br />
          --jb-select-bgcolor-selected: rgb(195, 57, 230);<br /><br />
          --jb-select-bgcolor: lightgray;<br /><br />
          --jb-select-mobile-search-input-height: 64px;<br /><br />
          --jb-select-border-bottom-width:1px;<br /><br />
          --jb-select-mobile-item-list-border-radius:16px;
        </div>
        <br /><br />
        <div className="self-style-wrapper">
          <JBSelect className="self-style-select" label="self style" message="this select get classname itself and style are not set to parent element"><JBOptionList optionList={numberOptionList} /></JBSelect>
        </div>
        <div className='style-table-title-2'>JB Select Custom Style 2</div>
        <div className='style-table-content-2'>
          --jb-select-margin: 0px 4px;<br /><br />
          --jb-select-rounded: 0px;<br /><br />
          --jb-select-border-color: rgb(26, 23, 23);<br /><br />
          --jb-select-border-color-selected: rgb(30, 29, 43);<br /><br />
          --jb-select-bgcolor-selected: rgb(195, 57, 230);<br /><br />
          --jb-select-bgcolor: lightgray;
        </div>
        <br /><br />
        <div className="with-divider-line">
          <JBSelect className="self-style-select" label="self style" message="this select get classname itself and style are not set to parent element"><JBOptionList optionList={numberOptionList} /></JBSelect>
        </div>
        <div className='style-table-title-2'>JB Select Custom Style 3</div>
        <div className='style-table-content-2'>
          --jb-select-margin: 0px 4px;<br /><br />
          --jb-select-rounded: 0px;<br /><br />
          --jb-select-border-color: rgb(26, 23, 23);<br /><br />
          --jb-select-border-color-selected: rgb(30, 29, 43);<br /><br />
          --jb-select-bgcolor-selected: rgb(195, 57, 230);<br /><br />
          --jb-select-bgcolor: lightgray;
        </div>
      </div>;
  },
  args: {
    label: \`Select Option\`
  }
}`,...(Ae=(Pe=j.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source}}};var _e,qe,Ke;w.parameters={...w.parameters,docs:{...(_e=w.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    label: 'empty list',
    message: "this list is a empty list",
    children: <JBOptionList optionList={[]} />
  }
}`,...(Ke=(qe=w.parameters)==null?void 0:qe.docs)==null?void 0:Ke.source}}};var Ye,Ue,Ge;N.parameters={...N.parameters,docs:{...(Ye=N.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Ge=(Ue=N.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};var Qe,Xe,Ze;$.parameters={...$.parameters,docs:{...(Qe=$.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: "please select a value",
    error: "error message"
  }
}`,...(Ze=(Xe=$.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,lt;I.parameters={...I.parameters,docs:{...(et=I.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(lt=(tt=I.parameters)==null?void 0:tt.docs)==null?void 0:lt.source}}};var rt,at,st;M.parameters={...M.parameters,docs:{...(rt=M.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(st=(at=M.parameters)==null?void 0:at.docs)==null?void 0:st.source}}};var nt,ot,ct;V.parameters={...V.parameters,docs:{...(nt=V.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(ct=(ot=V.parameters)==null?void 0:ot.docs)==null?void 0:ct.source}}};var it,mt,pt;T.parameters={...T.parameters,docs:{...(it=T.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(pt=(mt=T.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};var ut,dt,bt;R.parameters={...R.parameters,docs:{...(ut=R.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(bt=(dt=R.parameters)==null?void 0:dt.docs)==null?void 0:bt.source}}};var gt,vt,ht;D.parameters={...D.parameters,docs:{...(gt=D.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<boolean | null>(null);
    return <JBSelect value={value} onChange={e => {
      setValue(e.target.value);
    }}>
        <JBOption value={true}>True</JBOption>
        <JBOption value={false}>False</JBOption>
      </JBSelect>;
  }
}`,...(ht=(vt=D.parameters)==null?void 0:vt.docs)==null?void 0:ht.source}}};var Et,Bt,yt;W.parameters={...W.parameters,docs:{...(Et=W.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(yt=(Bt=W.parameters)==null?void 0:Bt.docs)==null?void 0:yt.source}}};const xt=["Normal","Multiple","MultipleWithCheckbox","MultipleWithCheckboxAndLabel","MultipleWithValue","WithValue","Disabled","FixedPopoverPosition","OptionObject","HideCleanButton","OptionAsChildren","OptionObjectAsChildren","Required","SizeVariants","OverflowTest","EventTest","RTL","StyleTest","EmptyList","ModalHeight","WithError","DynamicList","CustomOption","CustomSelectedValueRender","CustomOptionRender","JBSelectDesignTest","BooleanValue","MissingOption"],jt=Object.freeze(Object.defineProperty({__proto__:null,BooleanValue:D,CustomOption:M,CustomOptionRender:T,CustomSelectedValueRender:V,Disabled:B,DynamicList:I,EmptyList:w,EventTest:C,FixedPopoverPosition:y,HideCleanButton:S,JBSelectDesignTest:R,MissingOption:W,ModalHeight:N,Multiple:b,MultipleWithCheckbox:g,MultipleWithCheckboxAndLabel:v,MultipleWithValue:h,Normal:d,OptionAsChildren:f,OptionObject:J,OptionObjectAsChildren:x,OverflowTest:z,RTL:k,Required:O,SizeVariants:L,StyleTest:j,WithError:$,WithValue:E,__namedExportsOrder:xt,default:ft},Symbol.toStringTag,{value:"Module"}));export{d as N,f as O,jt as S};
