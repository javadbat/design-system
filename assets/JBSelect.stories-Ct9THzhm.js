import{r as k}from"./index-DwQS_Y10.js";import{a as l,o as a,u as r}from"./index-CZHGLG-U.js";import{f as c}from"./chunk-MVUZLZE2-OakZy48_.js";const o=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39"],j=[{id:1,name:"Red",value:"#f00"},{id:2,name:"Green",value:"#0f0"},{id:3,name:"Blue",value:"#00f"},{id:4,name:"Yellow",value:"#ff0"}],N=c.helpers.multiple(()=>c.person.firstName(),{count:100}),s=c.helpers.multiple(()=>({name:c.person.firstName(),family:c.person.lastName(),userId:c.number.int()}),{count:100}),Ie={title:"Components/form elements/JBSelect",component:l,args:{children:React.createElement(r,{optionList:N})}},i={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder"}},m={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder",value:N[3],children:React.createElement(r,{optionList:N})}},d={args:{label:"select from menu",children:React.createElement(r,{optionList:[{name:"peter",family:"hanan",userId:1},{name:"reza",family:"asadi",userId:2}],getTitle:e=>`${e.name} ${e.family}`,getValue:e=>e.userId}),onChange:e=>{console.log("onChange",e.target.value)}}},p={args:{label:"select from menu",message:"please select a value",placeholder:"placeholder",children:React.createElement(React.Fragment,null,React.createElement(a,{value:"1"},"one"),React.createElement(a,{value:"2"},"two"),React.createElement(a,{value:"3"},"three"),React.createElement(a,{value:"4"},"four"),React.createElement(a,{value:"5"},"five"),React.createElement(a,{value:"6"},"six"),React.createElement(a,{value:"7"},"seven"),React.createElement(a,{value:"8"},"eight"),React.createElement(a,{value:"9"},"nine"),React.createElement(a,{value:"10"},"ten"))}},u={args:{label:"select from menu",message:"please select a value",placeholder:"select number here",children:React.createElement(React.Fragment,null,React.createElement(a,{value:{name:"ali",age:10}},"Ali"),React.createElement(a,{value:{name:"reza",age:12}},"Reza"),React.createElement(a,{value:{name:"joe",age:14}},"Joe"))}},b={args:{label:"required select",message:"focus and un focus without selecting a value to see validation error",required:!0}},g={render:()=>{const e=React.createElement(k.Fragment,null,s.map(t=>React.createElement(a,{key:t.userId,value:t},t.name)));return React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"}},React.createElement(l,{label:"xl size",message:"message underneath",size:"xl"}),React.createElement(l,{label:"xl size",placeholder:"placeholder",size:"xl"},e),React.createElement(l,{label:"xl size",value:s[0],size:"xl"},e),React.createElement(l,{label:"lg size",message:"message underneath",size:"lg"}),React.createElement(l,{label:"lg size",placeholder:"placeholder",size:"lg"},e),React.createElement(l,{label:"lg size",value:s[0],size:"lg"},e),React.createElement(l,{label:"md size",message:"message underneath",size:"md"}),React.createElement(l,{label:"md size",placeholder:"placeholder",size:"md"},e),React.createElement(l,{label:"md size",value:s[0],size:"md"},e),React.createElement(l,{label:"sm size",message:"message underneath",size:"sm"}),React.createElement(l,{label:"sm size",placeholder:"placeholder",size:"sm"},e),React.createElement(l,{label:"sm size",value:s[0],size:"sm"},e),React.createElement(l,{label:"xs size",message:"message underneath",size:"xs"}),React.createElement(l,{label:"xs size",placeholder:"placeholder",size:"xs"},e),React.createElement(l,{label:"xs size",value:s[0],size:"xs"},e))}},h={render:()=>React.createElement("div",{style:{height:"10rem",overflowY:"auto"}},React.createElement(l,{label:"overflow test",style:{width:"10rem"}},s.map(e=>React.createElement(a,{key:e.userId,value:e},e.name))),React.createElement("div",{style:{height:"20rem",background:"red"}}))},v={args:{...i.args,onChange:()=>alert("Changed")}},E={globals:{dir:"rtl"},args:{label:"از منو انتخاب کنید",children:React.createElement(r,{optionList:o})},parameters:{docs:{description:{story:"RTL test"}}}},R={render:e=>React.createElement("div",null,React.createElement("div",{className:"filter-select-style-1"},React.createElement(l,{...e},React.createElement(r,{optionList:o}))),React.createElement("div",{className:"style-table-title-1"},"JB Select Custom Style 1"),React.createElement("div",{className:"style-table-content-1"},"--jb-select-margin: 0px 2px;",React.createElement("br",null),React.createElement("br",null),"--jb-select-rounded: 24px;",React.createElement("br",null),React.createElement("br",null),"--jb-select-border-color: royalblue;",React.createElement("br",null),React.createElement("br",null),"--jb-select-border-color-selected: tomato;",React.createElement("br",null),React.createElement("br",null),"--jb-select-bgcolor: mintcream;"),React.createElement("br",null),React.createElement("br",null),React.createElement("div",{className:"filter-select-style-2"},React.createElement(l,{...e},React.createElement(r,{optionList:o}))),React.createElement("div",{className:"style-table-title-2"},"JB Select Custom Style 2"),React.createElement("div",{className:"style-table-content-2"},"--jb-select-margin: 0px 4px;",React.createElement("br",null),React.createElement("br",null),"--jb-select-rounded: 0px;",React.createElement("br",null),React.createElement("br",null),"--jb-select-border-color: rgb(26, 23, 23);",React.createElement("br",null),React.createElement("br",null),"--jb-select-border-color-selected: rgb(30, 29, 43);",React.createElement("br",null),React.createElement("br",null),"--jb-select-bgcolor-selected: rgb(195, 57, 230);",React.createElement("br",null),React.createElement("br",null),"--jb-select-bgcolor: lightgray;",React.createElement("br",null),React.createElement("br",null),"--jb-select-mobile-search-input-height: 64px;",React.createElement("br",null),React.createElement("br",null),"--jb-select-border-bottom-width:1px;",React.createElement("br",null),React.createElement("br",null),"--jb-select-mobile-item-list-border-radius:16px;"),React.createElement("br",null),React.createElement("br",null),React.createElement("div",{className:"self-style-wrapper"},React.createElement(l,{className:"self-style-select",label:"self style",message:"this select get classname itself and style are not set to parent element"},React.createElement(r,{optionList:o}))),React.createElement("div",{className:"style-table-title-2"},"JB Select Custom Style 2"),React.createElement("div",{className:"style-table-content-2"},"--jb-select-margin: 0px 4px;",React.createElement("br",null),React.createElement("br",null),"--jb-select-rounded: 0px;",React.createElement("br",null),React.createElement("br",null),"--jb-select-border-color: rgb(26, 23, 23);",React.createElement("br",null),React.createElement("br",null),"--jb-select-border-color-selected: rgb(30, 29, 43);",React.createElement("br",null),React.createElement("br",null),"--jb-select-bgcolor-selected: rgb(195, 57, 230);",React.createElement("br",null),React.createElement("br",null),"--jb-select-bgcolor: lightgray;"),React.createElement("br",null),React.createElement("br",null),React.createElement("div",{className:"with-divider-line"},React.createElement(l,{className:"self-style-select",label:"self style",message:"this select get classname itself and style are not set to parent element"},React.createElement(r,{optionList:o}))),React.createElement("div",{className:"style-table-title-2"},"JB Select Custom Style 3"),React.createElement("div",{className:"style-table-content-2"},"--jb-select-margin: 0px 4px;",React.createElement("br",null),React.createElement("br",null),"--jb-select-rounded: 0px;",React.createElement("br",null),React.createElement("br",null),"--jb-select-border-color: rgb(26, 23, 23);",React.createElement("br",null),React.createElement("br",null),"--jb-select-border-color-selected: rgb(30, 29, 43);",React.createElement("br",null),React.createElement("br",null),"--jb-select-bgcolor-selected: rgb(195, 57, 230);",React.createElement("br",null),React.createElement("br",null),"--jb-select-bgcolor: lightgray;")),args:{label:"Select Option"}},y={args:{label:"empty list",message:"this list is a empty list",children:React.createElement(r,{optionList:[]})}},B={args:{label:"select from in mobile",message:"put in mobile view and open menu. it must fill half of the page",placeholder:"select number here",children:React.createElement(r,{optionList:o}),style:{"--jb-select-mobile-modal-height":"50vh","--jb-select-mobile-modal-border-radius":"1rem"}}},S={args:{label:"with error",message:"please select a value",error:"error message"}},J={render:()=>{const[e,t]=k.useState([]);function n(C=""){const z=[];for(let w=0;w<20;w++)z.push(`${C} - ${w}`);t(z)}k.useEffect(()=>{n()},[]);const $e=function(C){const z=C.target.textValue;n(z)};return React.createElement("div",null,React.createElement(l,{label:"please type and see result change",onKeyUp:$e},React.createElement(r,{optionList:e})))}},L={args:{label:"Color List",children:React.createElement(React.Fragment,null,j.map(e=>React.createElement(a,{key:e.value,value:e},React.createElement("span",{style:{backgroundColor:e.value,marginInlineEnd:"0.5rem",width:"1rem",height:"1rem",borderRadius:"0.5rem"}}),e.name)))}},f={args:{label:"Color List With Custom Selected Value Render",message:"please select a value and see the result",getSelectedValueDOM:e=>{const t=document.createElement("div");return t.classList.add("selected-value"),t.innerHTML=`
        <span part="color-box" style="background-color:${e.value};width:32px;height:16px;display:inline-block;"></span>&nbsp;
        <span>Color ${e.name}</span>
      `,t},children:React.createElement(React.Fragment,null,j.map(e=>React.createElement(a,{key:e.value,value:e},React.createElement("span",{style:{backgroundColor:e.value,marginInlineEnd:"0.5rem",width:"1rem",height:"1rem",borderRadius:"0.5rem"}}),e.name)))}},x={args:{label:"Color List With Custom Option Render callback",message:"here we render color list with callback function ",getSelectedValueDOM:e=>{const t=document.createElement("div");return t.classList.add("selected-value"),t.innerHTML=`
              <span style="background-color:${e.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color ${e.name}</span>
            `,t},children:React.createElement(React.Fragment,null,React.createElement(r,{optionList:j,getTitle:e=>e.name,getContentDOM:e=>{const t=document.createElement("div");return t.classList.add("selected-value"),t.innerHTML=`
              <span style="background-color:${e.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color ${e.name}</span>
            `,t}}))}},O={render:()=>{function e(t){const n=document.createElement("div");return n.classList.add("selected-value"),n.innerHTML='<span part="color-box" style="background-color:'+t.value+';width:16px;height:16px"></span>&nbsp;'+t.name,n}return React.createElement("div",{className:"select-custom-design"},React.createElement(l,{searchPlaceholder:"search color",getSelectedValueDOM:e},j.map(t=>React.createElement(a,{value:t,key:t.value},React.createElement("span",{className:"color-circle",style:{backgroundColor:t.value}}),t.name)),React.createElement("div",{style:{height:"24px"},slot:"select-arrow-icon"},React.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},React.createElement("title",null,"arrow icon"),React.createElement("rect",{width:"24",height:"24",rx:"5",fill:"#E7E7E7"}),React.createElement("path",{d:"M19 8.5L12 15.5L5 8.5",stroke:"#8B8B8B",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})))))}};var T,M,V;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder"
  }
}`,...(V=(M=i.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var $,I,D;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "placeholder",
    value: nameList[3],
    children: <JBOptionList optionList={nameList} />
  }
}`,...(D=(I=m.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var H,W,F;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(F=(W=d.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var q,A,K;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(A=p.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var _,P,Y;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(Y=(P=u.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var U,G,Q;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'required select',
    message: "focus and un focus without selecting a value to see validation error",
    required: true
  }
}`,...(Q=(G=b.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,Z,ee;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,le,ae;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var re,se,ne;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    onChange: () => alert('Changed')
  }
}`,...(ne=(se=v.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ce,oe,ie;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ie=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var me,de,pe;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(de=R.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,be,ge;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    label: 'empty list',
    message: "this list is a empty list",
    children: <JBOptionList optionList={[]} />
  }
}`,...(ge=(be=y.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var he,ve,Ee;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Ee=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:Ee.source}}};var Re,ye,Be;S.parameters={...S.parameters,docs:{...(Re=S.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: "please select a value",
    error: "error message"
  }
}`,...(Be=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:Be.source}}};var Se,Je,Le;J.parameters={...J.parameters,docs:{...(Se=J.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Le=(Je=J.parameters)==null?void 0:Je.docs)==null?void 0:Le.source}}};var fe,xe,Oe;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Oe=(xe=L.parameters)==null?void 0:xe.docs)==null?void 0:Oe.source}}};var ze,je,Ce;f.parameters={...f.parameters,docs:{...(ze=f.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ce=(je=f.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var we,ke,Ne;x.parameters={...x.parameters,docs:{...(we=x.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Ne=(ke=x.parameters)==null?void 0:ke.docs)==null?void 0:Ne.source}}};var Te,Me,Ve;O.parameters={...O.parameters,docs:{...(Te=O.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ve=(Me=O.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};const De=["Normal","WithValue","OptionObject","OptionAsChildren","OptionObjectAsChildren","Required","SizeVariants","OverflowTest","EventTest","RTL","StyleTest","EmptyList","ModalHeight","WithError","DynamicList","CustomOption","CustomSelectedValueRender","CustomOptionRender","JBSelectDesignTest"],qe=Object.freeze(Object.defineProperty({__proto__:null,CustomOption:L,CustomOptionRender:x,CustomSelectedValueRender:f,DynamicList:J,EmptyList:y,EventTest:v,JBSelectDesignTest:O,ModalHeight:B,Normal:i,OptionAsChildren:p,OptionObject:d,OptionObjectAsChildren:u,OverflowTest:h,RTL:E,Required:b,SizeVariants:g,StyleTest:R,WithError:S,WithValue:m,__namedExportsOrder:De,default:Ie},Symbol.toStringTag,{value:"Module"}));export{i as N,p as O,qe as S};
