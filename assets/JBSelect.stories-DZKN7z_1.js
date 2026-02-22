import{R as e,r as T}from"./index-DwQS_Y10.js";import{a as r,o as s,u as a}from"./index-CZHGLG-U.js";import{f as c}from"./chunk-MVUZLZE2-OakZy48_.js";const i=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39"],w=[{id:1,name:"Red",value:"#f00"},{id:2,name:"Green",value:"#0f0"},{id:3,name:"Blue",value:"#00f"},{id:4,name:"Yellow",value:"#ff0"}],R=c.helpers.multiple(()=>c.person.firstName(),{count:100}),n=c.helpers.multiple(()=>({name:c.person.firstName(),family:c.person.lastName(),userId:c.number.int()}),{count:100}),De={title:"Components/form elements/JBSelect",component:r,args:{children:e.createElement(a,{optionList:R})}},m={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder"}},d={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder",value:R[3],children:e.createElement(a,{optionList:R})}},p={args:{label:"select from menu",children:e.createElement(a,{optionList:[{name:"peter",family:"hanan",userId:1},{name:"reza",family:"asadi",userId:2}],getTitle:t=>`${t.name} ${t.family}`,getValue:t=>t.userId}),onChange:t=>{console.log("onChange",t.target.value)}}},u={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder",children:e.createElement(e.Fragment,null,e.createElement(s,{value:"1"},"one"),e.createElement(s,{value:"2"},"two"),e.createElement(s,{value:"3"},"three"),e.createElement(s,{value:"4"},"four"),e.createElement(s,{value:"5"},"five"),e.createElement(s,{value:"6"},"six"),e.createElement(s,{value:"7"},"seven"),e.createElement(s,{value:"8"},"eight"),e.createElement(s,{value:"9"},"nine"),e.createElement(s,{value:"10"},"ten"))}},b={args:{label:"select from menu",message:"please select a value",placeholder:"select number here",children:e.createElement(e.Fragment,null,e.createElement(s,{value:{name:"ali",age:10}},"Ali"),e.createElement(s,{value:{name:"reza",age:12}},"Reza"),e.createElement(s,{value:{name:"joe",age:14}},"Joe"))}},g={args:{label:"required select",message:"focus and un focus without selecting a value to see validation error",required:!0}},h={render:()=>{const t=e.createElement(T.Fragment,null,n.map(l=>e.createElement(s,{key:l.userId,value:l},l.name)));return e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"}},e.createElement(r,{label:"xl size",message:"message underneath",size:"xl"}),e.createElement(r,{label:"xl size",placeholder:"placeholder",size:"xl"},t),e.createElement(r,{label:"xl size",value:n[0],size:"xl"},t),e.createElement(r,{label:"lg size",message:"message underneath",size:"lg"}),e.createElement(r,{label:"lg size",placeholder:"placeholder",size:"lg"},t),e.createElement(r,{label:"lg size",value:n[0],size:"lg"},t),e.createElement(r,{label:"md size",message:"message underneath",size:"md"}),e.createElement(r,{label:"md size",placeholder:"placeholder",size:"md"},t),e.createElement(r,{label:"md size",value:n[0],size:"md"},t),e.createElement(r,{label:"sm size",message:"message underneath",size:"sm"}),e.createElement(r,{label:"sm size",placeholder:"placeholder",size:"sm"},t),e.createElement(r,{label:"sm size",value:n[0],size:"sm"},t),e.createElement(r,{label:"xs size",message:"message underneath",size:"xs"}),e.createElement(r,{label:"xs size",placeholder:"placeholder",size:"xs"},t),e.createElement(r,{label:"xs size",value:n[0],size:"xs"},t))}},v={render:()=>e.createElement("div",{style:{height:"10rem",overflowY:"auto"}},e.createElement(r,{label:"overflow test",style:{width:"10rem"}},n.map(t=>e.createElement(s,{key:t.userId,value:t},t.name))),e.createElement("div",{style:{height:"20rem",background:"red"}}))},E={args:{...m.args,onChange:()=>alert("Changed")}},y={globals:{dir:"rtl"},args:{label:"از منو انتخاب کنید",children:e.createElement(a,{optionList:i})},parameters:{docs:{description:{story:"RTL test"}}}},B={render:t=>e.createElement("div",null,e.createElement("div",{className:"filter-select-style-1"},e.createElement(r,{...t},e.createElement(a,{optionList:i}))),e.createElement("div",{className:"style-table-title-1"},"JB Select Custom Style 1"),e.createElement("div",{className:"style-table-content-1"},"--jb-select-margin: 0px 2px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-rounded: 24px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: royalblue;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: tomato;",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: mintcream;"),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{className:"filter-select-style-2"},e.createElement(r,{...t},e.createElement(a,{optionList:i}))),e.createElement("div",{className:"style-table-title-2"},"JB Select Custom Style 2"),e.createElement("div",{className:"style-table-content-2"},"--jb-select-margin: 0px 4px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-rounded: 0px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: rgb(26, 23, 23);",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: rgb(30, 29, 43);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor-selected: rgb(195, 57, 230);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: lightgray;",e.createElement("br",null),e.createElement("br",null),"--jb-select-mobile-search-input-height: 64px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-bottom-width:1px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-mobile-item-list-border-radius:16px;"),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{className:"self-style-wrapper"},e.createElement(r,{className:"self-style-select",label:"self style",message:"this select get classname itself and style are not set to parent element"},e.createElement(a,{optionList:i}))),e.createElement("div",{className:"style-table-title-2"},"JB Select Custom Style 2"),e.createElement("div",{className:"style-table-content-2"},"--jb-select-margin: 0px 4px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-rounded: 0px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: rgb(26, 23, 23);",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: rgb(30, 29, 43);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor-selected: rgb(195, 57, 230);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: lightgray;"),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{className:"with-divider-line"},e.createElement(r,{className:"self-style-select",label:"self style",message:"this select get classname itself and style are not set to parent element"},e.createElement(a,{optionList:i}))),e.createElement("div",{className:"style-table-title-2"},"JB Select Custom Style 3"),e.createElement("div",{className:"style-table-content-2"},"--jb-select-margin: 0px 4px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-rounded: 0px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: rgb(26, 23, 23);",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: rgb(30, 29, 43);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor-selected: rgb(195, 57, 230);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: lightgray;")),args:{label:"Select Option"}},S={args:{label:"empty list",message:"this list is a empty list",children:e.createElement(a,{optionList:[]})}},J={args:{label:"select from in mobile",message:"put in mobile view and open menu. it must fill half of the page",placeholder:"select number here",children:e.createElement(a,{optionList:i}),style:{"--jb-select-mobile-modal-height":"50vh","--jb-select-mobile-modal-border-radius":"1rem"}}},L={args:{label:"with error",message:"please select a value",error:"error message"}},f={render:()=>{const[t,l]=T.useState([]);function o(k=""){const C=[];for(let N=0;N<20;N++)C.push(`${k} - ${N}`);l(C)}T.useEffect(()=>{o()},[]);const Ie=function(k){const C=k.target.textValue;o(C)};return e.createElement("div",null,e.createElement(r,{label:"please type and see result change",onKeyUp:Ie},e.createElement(a,{optionList:t})))}},x={args:{label:"Color List",children:e.createElement(e.Fragment,null,w.map(t=>e.createElement(s,{key:t.value,value:t},e.createElement("span",{style:{backgroundColor:t.value,marginInlineEnd:"0.5rem",width:"1rem",height:"1rem",borderRadius:"0.5rem"}}),t.name)))}},O={args:{label:"Color List With Custom Selected Value Render",message:"please select a value and see the result",getSelectedValueDOM:t=>{const l=document.createElement("div");return l.classList.add("selected-value"),l.innerHTML=`
        <span part="color-box" style="background-color:${t.value};width:32px;height:16px;display:inline-block;"></span>&nbsp;
        <span>Color ${t.name}</span>
      `,l},children:e.createElement(e.Fragment,null,w.map(t=>e.createElement(s,{key:t.value,value:t},e.createElement("span",{style:{backgroundColor:t.value,marginInlineEnd:"0.5rem",width:"1rem",height:"1rem",borderRadius:"0.5rem"}}),t.name)))}},z={args:{label:"Color List With Custom Option Render callback",message:"here we render color list with callback function ",getSelectedValueDOM:t=>{const l=document.createElement("div");return l.classList.add("selected-value"),l.innerHTML=`
              <span style="background-color:${t.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color ${t.name}</span>
            `,l},children:e.createElement(e.Fragment,null,e.createElement(a,{optionList:w,getTitle:t=>t.name,getContentDOM:t=>{const l=document.createElement("div");return l.classList.add("selected-value"),l.innerHTML=`
              <span style="background-color:${t.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color ${t.name}</span>
            `,l}}))}},j={render:()=>{function t(l){const o=document.createElement("div");return o.classList.add("selected-value"),o.innerHTML='<span part="color-box" style="background-color:'+l.value+';width:16px;height:16px"></span>&nbsp;'+l.name,o}return e.createElement("div",{className:"select-custom-design"},e.createElement(r,{searchPlaceholder:"search color",getSelectedValueDOM:t},w.map(l=>e.createElement(s,{value:l,key:l.value},e.createElement("span",{className:"color-circle",style:{backgroundColor:l.value}}),l.name)),e.createElement("div",{style:{height:"24px"},slot:"select-arrow-icon"},e.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},e.createElement("title",null,"arrow icon"),e.createElement("rect",{width:"24",height:"24",rx:"5",fill:"#E7E7E7"}),e.createElement("path",{d:"M19 8.5L12 15.5L5 8.5",stroke:"#8B8B8B",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})))))}};var M,V,$;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder"
  }
}`,...($=(V=m.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var I,D,H;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder",
    value: nameList[3],
    children: <JBOptionList optionList={nameList} />
  }
}`,...(H=(D=d.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var W,F,q;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(q=(F=p.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var A,K,_;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(_=(K=u.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var P,Y,U;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(U=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var G,Q,X;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'required select',
    message: "focus and un focus without selecting a value to see validation error",
    required: true
  }
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const options = <Fragment>
      {persons.map(p => <JBOption key={p.userId} value={p}>{p.name}</JBOption>)}
    </Fragment>;
    return <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '1rem'
    }}>
      <JBSelect label='xl size' message="message underneath" size='xl'></JBSelect>
      <JBSelect label='xl size' placeholder="placeholder" size='xl'>{options}</JBSelect>
      <JBSelect label='xl size' value={persons[0]} size='xl'>{options}</JBSelect>

      <JBSelect label='lg size' message="message underneath" size='lg'></JBSelect>
      <JBSelect label='lg size' placeholder="placeholder" size='lg'>{options}</JBSelect>
      <JBSelect label='lg size' value={persons[0]} size='lg'>{options}</JBSelect>

      <JBSelect label='md size' message="message underneath" size='md'></JBSelect>
      <JBSelect label='md size' placeholder="placeholder" size='md'>{options}</JBSelect>
      <JBSelect label='md size' value={persons[0]} size='md'>{options}</JBSelect>

      <JBSelect label='sm size' message="message underneath" size='sm'></JBSelect>
      <JBSelect label='sm size' placeholder="placeholder" size='sm'>{options}</JBSelect>
      <JBSelect label='sm size' value={persons[0]} size='sm'>{options}</JBSelect>

      <JBSelect label='xs size' message="message underneath" size='xs'></JBSelect>
      <JBSelect label='xs size' placeholder="placeholder" size='xs'>{options}</JBSelect>
      <JBSelect label='xs size' value={persons[0]} size='xs'>{options}</JBSelect>
    </div>;
  }
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var le,re,se;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(se=(re=v.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,ne,oe;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    onChange: () => alert('Changed')
  }
}`,...(oe=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ce,ie,me;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  globals: {
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
}`,...(me=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:me.source}}};var de,pe,ue;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var be,ge,he;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    label: 'empty list',
    message: "this list is a empty list",
    children: <JBOptionList optionList={[]} />
  }
}`,...(he=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ve,Ee,ye;J.parameters={...J.parameters,docs:{...(ve=J.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ye=(Ee=J.parameters)==null?void 0:Ee.docs)==null?void 0:ye.source}}};var Be,Se,Je;L.parameters={...L.parameters,docs:{...(Be=L.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: "please select a value",
    error: "error message"
  }
}`,...(Je=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:Je.source}}};var Le,fe,xe;f.parameters={...f.parameters,docs:{...(Le=f.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(xe=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Oe,ze,je;x.parameters={...x.parameters,docs:{...(Oe=x.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(je=(ze=x.parameters)==null?void 0:ze.docs)==null?void 0:je.source}}};var Ce,we,ke;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(ke=(we=O.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};var Ne,Te,Re;z.parameters={...z.parameters,docs:{...(Ne=z.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Re=(Te=z.parameters)==null?void 0:Te.docs)==null?void 0:Re.source}}};var Me,Ve,$e;j.parameters={...j.parameters,docs:{...(Me=j.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...($e=(Ve=j.parameters)==null?void 0:Ve.docs)==null?void 0:$e.source}}};const He=["Normal","WithValue","OptionObject","OptionAsChildren","OptionObjectAsChildren","Required","SizeVariants","OverflowTest","EventTest","RTL","StyleTest","EmptyList","ModalHeight","WithError","DynamicList","CustomOption","CustomSelectedValueRender","CustomOptionRender","JBSelectDesignTest"],Ae=Object.freeze(Object.defineProperty({__proto__:null,CustomOption:x,CustomOptionRender:z,CustomSelectedValueRender:O,DynamicList:f,EmptyList:S,EventTest:E,JBSelectDesignTest:j,ModalHeight:J,Normal:m,OptionAsChildren:u,OptionObject:p,OptionObjectAsChildren:b,OverflowTest:v,RTL:y,Required:g,SizeVariants:h,StyleTest:B,WithError:L,WithValue:d,__namedExportsOrder:He,default:De},Symbol.toStringTag,{value:"Module"}));export{m as N,u as O,Ae as S};
