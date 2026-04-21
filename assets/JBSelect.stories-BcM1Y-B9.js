import{r as M,R as e}from"./index-CwcVQgaJ.js";import{i as r,o as a,u as s}from"./index-BFn3YVAI.js";import{o as tt}from"./JBButton-DK5GdynM.js";import{f as i}from"./chunk-NAVWDHVN-nYOG0we8.js";const m=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39"],$=[{id:1,name:"Red",value:"#f00"},{id:2,name:"Green",value:"#0f0"},{id:3,name:"Blue",value:"#00f"},{id:4,name:"Yellow",value:"#ff0"}],R=i.helpers.multiple(()=>i.person.firstName(),{count:100}),o=i.helpers.multiple(()=>({name:i.person.firstName(),family:i.person.lastName(),userId:i.number.int()}),{count:100}),lt={title:"Components/form elements/JBSelect",component:r,args:{children:e.createElement(s,{optionList:R})}},p={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder"}},d={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder",value:R[3],children:e.createElement(s,{optionList:R})}},u={args:{label:"select from menu",message:"please select a value",value:R[3],disabled:!0}},b={args:{label:"select from menu",children:e.createElement(s,{optionList:[{name:"peter",family:"hanan",userId:1},{name:"reza",family:"asadi",userId:2}],getTitle:t=>`${t.name} ${t.family}`,getValue:t=>t.userId}),onChange:t=>{console.log("onChange",t.target.value)}}},g={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder",hideClear:!0}},h={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder",children:e.createElement(e.Fragment,null,e.createElement(a,{value:"1"},"one"),e.createElement(a,{value:"2"},"two"),e.createElement(a,{value:"3"},"three"),e.createElement(a,{value:"4"},"four"),e.createElement(a,{value:"5"},"five"),e.createElement(a,{value:"6"},"six"),e.createElement(a,{value:"7"},"seven"),e.createElement(a,{value:"8"},"eight"),e.createElement(a,{value:"9"},"nine"),e.createElement(a,{value:"10"},"ten"))}},v={args:{label:"select from menu",message:"please select a value",placeholder:"select number here",children:e.createElement(e.Fragment,null,e.createElement(a,{value:{name:"ali",age:10}},"Ali"),e.createElement(a,{value:{name:"reza",age:12}},"Reza"),e.createElement(a,{value:{name:"joe",age:14}},"Joe"))}},E={args:{label:"required select",message:"focus and un focus without selecting a value to see validation error",required:!0}},B={render:()=>{const t=e.createElement(M.Fragment,null,o.map(l=>e.createElement(a,{key:l.userId,value:l},l.name)));return e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"}},e.createElement(r,{size:"xl",label:"xl size",message:"message underneath"}),e.createElement(r,{size:"xl",label:"xl size",placeholder:"placeholder"},t),e.createElement(r,{size:"xl",label:"xl size",value:o[0]},t),e.createElement(r,{size:"lg",label:"lg size",message:"message underneath"}),e.createElement(r,{size:"lg",label:"lg size",placeholder:"placeholder"},t),e.createElement(r,{size:"lg",label:"lg size",value:o[0]},t),e.createElement(r,{size:"md",label:"md size",message:"message underneath"}),e.createElement(r,{size:"md",label:"md size",placeholder:"placeholder"},t),e.createElement(r,{size:"md",label:"md size",value:o[0]},t),e.createElement(r,{size:"sm",label:"sm size",message:"message underneath"}),e.createElement(r,{size:"sm",label:"sm size",placeholder:"placeholder"},t),e.createElement(r,{size:"sm",label:"sm size",value:o[0]},t),e.createElement(r,{size:"xs",label:"xs size",message:"message underneath"}),e.createElement(r,{size:"xs",label:"xs size",placeholder:"placeholder"},t),e.createElement(r,{size:"xs",label:"xs size",value:o[0]},t))}},y={render:()=>e.createElement("div",{style:{height:"10rem",overflowY:"auto"}},e.createElement(r,{label:"overflow test",style:{width:"10rem"}},o.map(t=>e.createElement(a,{key:t.userId,value:t},t.name))),e.createElement("div",{style:{height:"20rem",background:"red"}}))},S={args:{...p.args,onChange:()=>alert("Changed")}},J={globals:{locale:"fa",dir:"rtl"},args:{label:"از منو انتخاب کنید",children:e.createElement(s,{optionList:m})},parameters:{docs:{description:{story:"RTL test"}}}},f={render:t=>e.createElement("div",null,e.createElement("div",{className:"filter-select-style-1"},e.createElement(r,{...t},e.createElement(s,{optionList:m}))),e.createElement("div",{className:"style-table-title-1"},"JB Select Custom Style 1"),e.createElement("div",{className:"style-table-content-1"},"--jb-select-margin: 0px 2px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-rounded: 24px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: royalblue;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: tomato;",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: mintcream;"),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{className:"filter-select-style-2"},e.createElement(r,{...t},e.createElement(s,{optionList:m}))),e.createElement("div",{className:"style-table-title-2"},"JB Select Custom Style 2"),e.createElement("div",{className:"style-table-content-2"},"--jb-select-margin: 0px 4px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-rounded: 0px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: rgb(26, 23, 23);",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: rgb(30, 29, 43);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor-selected: rgb(195, 57, 230);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: lightgray;",e.createElement("br",null),e.createElement("br",null),"--jb-select-mobile-search-input-height: 64px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-bottom-width:1px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-mobile-item-list-border-radius:16px;"),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{className:"self-style-wrapper"},e.createElement(r,{className:"self-style-select",label:"self style",message:"this select get classname itself and style are not set to parent element"},e.createElement(s,{optionList:m}))),e.createElement("div",{className:"style-table-title-2"},"JB Select Custom Style 2"),e.createElement("div",{className:"style-table-content-2"},"--jb-select-margin: 0px 4px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-rounded: 0px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: rgb(26, 23, 23);",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: rgb(30, 29, 43);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor-selected: rgb(195, 57, 230);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: lightgray;"),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{className:"with-divider-line"},e.createElement(r,{className:"self-style-select",label:"self style",message:"this select get classname itself and style are not set to parent element"},e.createElement(s,{optionList:m}))),e.createElement("div",{className:"style-table-title-2"},"JB Select Custom Style 3"),e.createElement("div",{className:"style-table-content-2"},"--jb-select-margin: 0px 4px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-rounded: 0px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: rgb(26, 23, 23);",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: rgb(30, 29, 43);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor-selected: rgb(195, 57, 230);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: lightgray;")),args:{label:"Select Option"}},L={args:{label:"empty list",message:"this list is a empty list",children:e.createElement(s,{optionList:[]})}},O={args:{label:"select from in mobile",message:"put in mobile view and open menu. it must fill half of the page",placeholder:"select number here",children:e.createElement(s,{optionList:m}),style:{"--jb-select-mobile-modal-height":"50vh","--jb-select-mobile-modal-border-radius":"1rem"}}},x={args:{label:"with error",message:"please select a value",error:"error message"}},z={render:()=>{const[t,l]=M.useState([]);function n(c=""){const V=[];for(let I=0;I<20;I++)V.push(`${c} - ${I}`);l(V)}M.useEffect(()=>{n()},[]);const D=function(c){const V=c.target.textValue;n(V)};return e.createElement("div",null,e.createElement(r,{label:"please type and see result change",onKeyUp:D},e.createElement(s,{optionList:t})))}},j={args:{label:"Color List",children:e.createElement(e.Fragment,null,$.map(t=>e.createElement(a,{key:t.value,value:t},e.createElement("span",{style:{backgroundColor:t.value,marginInlineEnd:"0.5rem",width:"1rem",height:"1rem",borderRadius:"0.5rem"}}),t.name)))}},C={args:{label:"Color List With Custom Selected Value Render",message:"please select a value and see the result",getSelectedValueDOM:t=>{const l=document.createElement("div");return l.classList.add("selected-value"),l.innerHTML=`
        <span part="color-box" style="background-color:${t.value};width:32px;height:16px;display:inline-block;"></span>&nbsp;
        <span>Color ${t.name}</span>
      `,l},children:e.createElement(e.Fragment,null,$.map(t=>e.createElement(a,{key:t.value,value:t},e.createElement("span",{style:{backgroundColor:t.value,marginInlineEnd:"0.5rem",width:"1rem",height:"1rem",borderRadius:"0.5rem"}}),t.name)))}},w={args:{label:"Color List With Custom Option Render callback",message:"here we render color list with callback function ",getSelectedValueDOM:t=>{const l=document.createElement("div");return l.classList.add("selected-value"),l.innerHTML=`
              <span style="background-color:${t.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color ${t.name}</span>
            `,l},children:e.createElement(e.Fragment,null,e.createElement(s,{optionList:$,getTitle:t=>t.name,getContentDOM:t=>{const l=document.createElement("div");return l.classList.add("selected-value"),l.innerHTML=`
              <span style="background-color:${t.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color ${t.name}</span>
            `,l}}))}},k={render:()=>{function t(l){const n=document.createElement("div");return n.classList.add("selected-value"),n.innerHTML='<span part="color-box" style="background-color:'+l.value+';width:16px;height:16px"></span>&nbsp;'+l.name,n}return e.createElement("div",{className:"select-custom-design"},e.createElement(r,{searchPlaceholder:"search color",getSelectedValueDOM:t},$.map(l=>e.createElement(a,{value:l,key:l.value},e.createElement("span",{className:"color-circle",style:{backgroundColor:l.value}}),l.name)),e.createElement("div",{style:{height:"24px"},slot:"select-arrow-icon"},e.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},e.createElement("title",null,"arrow icon"),e.createElement("rect",{width:"24",height:"24",rx:"5",fill:"#E7E7E7"}),e.createElement("path",{d:"M19 8.5L12 15.5L5 8.5",stroke:"#8B8B8B",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})))))}},N={render:()=>{const[t,l]=M.useState(null);return e.createElement(r,{value:t,onChange:n=>{l(n.target.value)}},e.createElement(a,{value:!0},"True"),e.createElement(a,{value:!1},"False"))}},T={render:t=>{const{value:l}=t,[n,D]=M.useState([]);return e.createElement("div",null,e.createElement(r,{value:l,label:"missing option",message:"value is already set but options are not available when option available value will be set"},n.map(c=>e.createElement(a,{value:c},c.name))),e.createElement(tt,{onClick:()=>D(o)},"Fill Option"))},args:{value:o[3]}};var F,H,W;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder"
  }
}`,...(W=(H=p.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var q,A,K;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder",
    value: nameList[3],
    children: <JBOptionList optionList={nameList} />
  }
}`,...(K=(A=d.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var _,P,Y;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    value: nameList[3],
    disabled: true
  }
}`,...(Y=(P=u.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var U,G,Q;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=(G=b.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,Z,ee;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder",
    hideClear: true
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,le,re;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(le=h.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var ae,se,ne;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,ce,ie;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: 'required select',
    message: "focus and un focus without selecting a value to see validation error",
    required: true
  }
}`,...(ie=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var me,pe,de;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(de=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ue,be,ge;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: '10rem',
      overflowY: "auto"
    }}>
      <JBSelect label='overflow test' style={{
        width: "10rem"
      }}>
        {persons.map(p => <JBOption key={p.userId} value={p}>{p.name}</JBOption>)}
      </JBSelect>
      <div style={{
        height: '20rem',
        background: 'red'
      }}></div>
    </div>;
  }
}`,...(ge=(be=y.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var he,ve,Ee;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    onChange: () => alert('Changed')
  }
}`,...(Ee=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:Ee.source}}};var Be,ye,Se;J.parameters={...J.parameters,docs:{...(Be=J.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Se=(ye=J.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var Je,fe,Le;f.parameters={...f.parameters,docs:{...(Je=f.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Le=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:Le.source}}};var Oe,xe,ze;L.parameters={...L.parameters,docs:{...(Oe=L.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    label: 'empty list',
    message: "this list is a empty list",
    children: <JBOptionList optionList={[]} />
  }
}`,...(ze=(xe=L.parameters)==null?void 0:xe.docs)==null?void 0:ze.source}}};var je,Ce,we;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(we=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};var ke,Ne,Te;x.parameters={...x.parameters,docs:{...(ke=x.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: "please select a value",
    error: "error message"
  }
}`,...(Te=(Ne=x.parameters)==null?void 0:Ne.docs)==null?void 0:Te.source}}};var Me,Ve,Re;z.parameters={...z.parameters,docs:{...(Me=z.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Re=(Ve=z.parameters)==null?void 0:Ve.docs)==null?void 0:Re.source}}};var $e,De,Ie;j.parameters={...j.parameters,docs:{...($e=j.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ie=(De=j.parameters)==null?void 0:De.docs)==null?void 0:Ie.source}}};var Fe,He,We;C.parameters={...C.parameters,docs:{...(Fe=C.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(We=(He=C.parameters)==null?void 0:He.docs)==null?void 0:We.source}}};var qe,Ae,Ke;w.parameters={...w.parameters,docs:{...(qe=w.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ke=(Ae=w.parameters)==null?void 0:Ae.docs)==null?void 0:Ke.source}}};var _e,Pe,Ye;k.parameters={...k.parameters,docs:{...(_e=k.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Ye=(Pe=k.parameters)==null?void 0:Pe.docs)==null?void 0:Ye.source}}};var Ue,Ge,Qe;N.parameters={...N.parameters,docs:{...(Ue=N.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<boolean | null>(null);
    return <JBSelect value={value} onChange={e => {
      setValue(e.target.value);
    }}>
        <JBOption value={true}>True</JBOption>
        <JBOption value={false}>False</JBOption>
      </JBSelect>;
  }
}`,...(Qe=(Ge=N.parameters)==null?void 0:Ge.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;T.parameters={...T.parameters,docs:{...(Xe=T.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=T.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};const rt=["Normal","WithValue","Disabled","OptionObject","HideCleanButton","OptionAsChildren","OptionObjectAsChildren","Required","SizeVariants","OverflowTest","EventTest","RTL","StyleTest","EmptyList","ModalHeight","WithError","DynamicList","CustomOption","CustomSelectedValueRender","CustomOptionRender","JBSelectDesignTest","BooleanValue","MissingOption"],ct=Object.freeze(Object.defineProperty({__proto__:null,BooleanValue:N,CustomOption:j,CustomOptionRender:w,CustomSelectedValueRender:C,Disabled:u,DynamicList:z,EmptyList:L,EventTest:S,HideCleanButton:g,JBSelectDesignTest:k,MissingOption:T,ModalHeight:O,Normal:p,OptionAsChildren:h,OptionObject:b,OptionObjectAsChildren:v,OverflowTest:y,RTL:J,Required:E,SizeVariants:B,StyleTest:f,WithError:x,WithValue:d,__namedExportsOrder:rt,default:lt},Symbol.toStringTag,{value:"Module"}));export{p as N,h as O,ct as S};
