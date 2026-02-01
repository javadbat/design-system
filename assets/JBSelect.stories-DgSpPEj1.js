import{R as e,r as w}from"./index-DwQS_Y10.js";import{u as s,o as r,a}from"./index-CkpWXzJ0.js";import"./index-C-sL0134.js";import"./jb-validation-DPnsTO1v.js";import"./index-BsliqPsk.js";import"./index-bfIR6bpK.js";import"./index-_b1slotr.js";import"./index-BJ5IkxrY.js";const n=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39"],S=[{id:1,name:"Red",value:"#f00"},{id:2,name:"Green",value:"#0f0"},{id:3,name:"Blue",value:"#00f"},{id:4,name:"Yellow",value:"#ff0"}],$e={title:"Components/form elements/JBSelect",component:s,args:{children:e.createElement(a,{optionList:n})}},c={args:{label:"select from menu",message:"please select a value",placeholder:"select number here"}},m={args:{label:"select from menu",message:"please select a value",placeholder:"select number here",value:"5",children:e.createElement(a,{optionList:n})}},p={args:{label:"select from menu",children:e.createElement(a,{optionList:[{name:"peter",family:"hanan",userId:1},{name:"reza",family:"asadi",userId:2}],getTitle:t=>`${t.name} ${t.family}`,getValue:t=>t.userId}),onChange:t=>{console.log("onChange",t.target.value)}}},d={args:{label:"select from menu",message:"please select a value",placeholder:"select number here",children:e.createElement(e.Fragment,null,e.createElement(r,{value:"1"},"one"),e.createElement(r,{value:"2"},"two"),e.createElement(r,{value:"3"},"three"),e.createElement(r,{value:"4"},"four"),e.createElement(r,{value:"5"},"five"),e.createElement(r,{value:"6"},"six"),e.createElement(r,{value:"7"},"seven"),e.createElement(r,{value:"8"},"eight"),e.createElement(r,{value:"9"},"nine"),e.createElement(r,{value:"10"},"ten"))}},u={args:{label:"select from menu",message:"please select a value",placeholder:"select number here",children:e.createElement(e.Fragment,null,e.createElement(r,{value:{name:"ali",age:10}},"Ali"),e.createElement(r,{value:{name:"reza",age:12}},"Reza"),e.createElement(r,{value:{name:"joe",age:14}},"Joe"))}},b={args:{label:"required select",message:"focus and un focus without selecting a value to see validation error",required:!0}},g={args:{...c.args,onChange:()=>alert("Changed")}},h={args:{label:"از منو انتخاب کنید",children:e.createElement(a,{optionList:n})},parameters:{themes:{themeOverride:"rtl"},docs:{description:{story:"RTL test"}}}},v={render:t=>e.createElement("div",null,e.createElement("div",{className:"filter-select-style-1"},e.createElement(s,{...t},e.createElement(a,{optionList:n}))),e.createElement("div",{className:"style-table-title-1"},"JB Select Custom Style 1"),e.createElement("div",{className:"style-table-content-1"},"--jb-select-margin: 0px 2px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-radius: 24px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: royalblue;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: tomato;",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: mintcream;"),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{className:"filter-select-style-2"},e.createElement(s,{...t},e.createElement(a,{optionList:n}))),e.createElement("div",{className:"style-table-title-2"},"JB Select Custom Style 2"),e.createElement("div",{className:"style-table-content-2"},"--jb-select-margin: 0px 4px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-radius: 0px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: rgb(26, 23, 23);",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: rgb(30, 29, 43);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor-selected: rgb(195, 57, 230);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: lightgray;",e.createElement("br",null),e.createElement("br",null),"--jb-select-mobile-search-input-height: 64px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-bottom-width:1px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-mobile-item-list-border-radius:16px;"),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{className:"self-style-wrapper"},e.createElement(s,{className:"self-style-select",label:"self style",message:"this select get classname itself and style are not set to parent element"},e.createElement(a,{optionList:n}))),e.createElement("div",{className:"style-table-title-2"},"JB Select Custom Style 2"),e.createElement("div",{className:"style-table-content-2"},"--jb-select-margin: 0px 4px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-radius: 0px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: rgb(26, 23, 23);",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: rgb(30, 29, 43);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor-selected: rgb(195, 57, 230);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: lightgray;"),e.createElement("br",null),e.createElement("br",null),e.createElement("div",{className:"with-divider-line"},e.createElement(s,{className:"self-style-select",label:"self style",message:"this select get classname itself and style are not set to parent element"},e.createElement(a,{optionList:n}))),e.createElement("div",{className:"style-table-title-2"},"JB Select Custom Style 3"),e.createElement("div",{className:"style-table-content-2"},"--jb-select-margin: 0px 4px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-radius: 0px;",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color: rgb(26, 23, 23);",e.createElement("br",null),e.createElement("br",null),"--jb-select-border-color-selected: rgb(30, 29, 43);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor-selected: rgb(195, 57, 230);",e.createElement("br",null),e.createElement("br",null),"--jb-select-bgcolor: lightgray;")),args:{label:"Select Option"}},E={args:{label:"empty list",message:"this list is a empty list",children:e.createElement(a,{optionList:[]})}},y={args:{label:"select from in mobile",message:"put in mobile view and open menu. it must fill half of the page",placeholder:"select number here",children:e.createElement(a,{optionList:n}),style:{"--jb-select-mobile-modal-height":"50vh","--jb-select-mobile-modal-border-radius":"1rem"}}},L={args:{label:"with error",message:"please select a value",error:"error message"}},O={render:()=>{const[t,l]=w.useState([]);function o(j=""){const i=[];for(let C=0;C<20;C++)i.push(`${j} - ${C}`);l(i)}w.useEffect(()=>{o()},[]);const je=function(j){const i=j.target.textValue;o(i)};return e.createElement("div",null,e.createElement(s,{label:"please type and see result change",onKeyUp:je},e.createElement(a,{optionList:t})))}},f={args:{label:"Color List",children:e.createElement(e.Fragment,null,S.map(t=>e.createElement(r,{key:t.value,value:t},e.createElement("span",{style:{backgroundColor:t.value,marginInlineEnd:"0.5rem",width:"1rem",height:"1rem",borderRadius:"0.5rem"}}),t.name)))}},B={args:{label:"Color List With Custom Selected Value Render",message:"please select a value and see the result",getSelectedValueDOM:t=>{const l=document.createElement("div");return l.classList.add("selected-value"),l.innerHTML=`
        <span part="color-box" style="background-color:${t.value};width:32px;height:16px;display:inline-block;"></span>&nbsp;
        <span>Color ${t.name}</span>
      `,l},children:e.createElement(e.Fragment,null,S.map(t=>e.createElement(r,{key:t.value,value:t},e.createElement("span",{style:{backgroundColor:t.value,marginInlineEnd:"0.5rem",width:"1rem",height:"1rem",borderRadius:"0.5rem"}}),t.name)))}},x={args:{label:"Color List With Custom Option Render callback",message:"here we render color list with callback function ",getSelectedValueDOM:t=>{const l=document.createElement("div");return l.classList.add("selected-value"),l.innerHTML=`
              <span style="background-color:${t.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color ${t.name}</span>
            `,l},children:e.createElement(e.Fragment,null,e.createElement(a,{optionList:S,getTitle:t=>t.name,getContentDOM:t=>{const l=document.createElement("div");return l.classList.add("selected-value"),l.innerHTML=`
              <span style="background-color:${t.value};width:16px;height:16px;display:inline-block;"></span>&nbsp;
              <span>Color ${t.name}</span>
            `,l}}))}},J={render:()=>{function t(l){const o=document.createElement("div");return o.classList.add("selected-value"),o.innerHTML='<span part="color-box" style="background-color:'+l.value+';width:16px;height:16px"></span>&nbsp;'+l.name,o}return e.createElement("div",{className:"select-custom-design"},e.createElement(s,{searchPlaceholder:"search color",getSelectedValueDOM:t},S.map(l=>e.createElement(r,{value:l,key:l.value},e.createElement("span",{className:"color-circle",style:{backgroundColor:l.value}}),l.name)),e.createElement("div",{style:{height:"24px"},slot:"select-arrow-icon"},e.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("rect",{width:"24",height:"24",rx:"5",fill:"#E7E7E7"}),e.createElement("path",{d:"M19 8.5L12 15.5L5 8.5",stroke:"#8B8B8B",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})))))}};var k,N,R;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "select number here"
  }
}`,...(R=(N=c.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var T,M,V;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "select number here",
    value: "5",
    children: <JBOptionList optionList={numberOptionList} />
  }
}`,...(V=(M=m.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var $,D,H;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(H=(D=p.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var I,W,q;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "select number here",
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
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var z,A,K;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(K=(A=u.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var F,P,U;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'required select',
    message: "focus and un focus without selecting a value to see validation error",
    required: true
  }
}`,...(U=(P=b.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var _,G,Y;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    onChange: () => alert('Changed')
  }
}`,...(Y=(G=g.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var Q,X,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,le;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => {
    return <div>
        <div className="filter-select-style-1">
          <JBSelect {...args}><JBOptionList optionList={numberOptionList} /></JBSelect>
        </div>
        <div className='style-table-title-1'>JB Select Custom Style 1</div>
        <div className='style-table-content-1'>
          --jb-select-margin: 0px 2px;<br /><br />
          --jb-select-border-radius: 24px;<br /><br />
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
          --jb-select-border-radius: 0px;<br /><br />
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
          --jb-select-border-radius: 0px;<br /><br />
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
          --jb-select-border-radius: 0px;<br /><br />
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
}`,...(le=(te=v.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var re,ae,ne;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    label: 'empty list',
    message: "this list is a empty list",
    children: <JBOptionList optionList={[]} />
  }
}`,...(ne=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,oe,ce;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var ie,me,pe;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'with error',
    message: "please select a value",
    error: "error message"
  }
}`,...(pe=(me=L.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var de,ue,be;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(be=(ue=O.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var ge,he,ve;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(he=f.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var Ee,ye,Le;B.parameters={...B.parameters,docs:{...(Ee=B.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Le=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:Le.source}}};var Oe,fe,Be;x.parameters={...x.parameters,docs:{...(Oe=x.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Be=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:Be.source}}};var xe,Je,Se;J.parameters={...J.parameters,docs:{...(xe=J.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="5" fill="#E7E7E7" />
              <path d="M19 8.5L12 15.5L5 8.5" stroke="#8B8B8B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </JBSelect>
      </div>;
  }
}`,...(Se=(Je=J.parameters)==null?void 0:Je.docs)==null?void 0:Se.source}}};const De=["Normal","WithValue","OptionObject","OptionAsChildren","OptionObjectAsChildren","Required","EventTest","RTL","StyleTest","EmptyList","ModalHeight","WithError","DynamicList","CustomOption","CustomSelectedValueRender","CustomOptionRender","JBSelectDesignTest"];export{f as CustomOption,x as CustomOptionRender,B as CustomSelectedValueRender,O as DynamicList,E as EmptyList,g as EventTest,J as JBSelectDesignTest,y as ModalHeight,c as Normal,d as OptionAsChildren,p as OptionObject,u as OptionObjectAsChildren,h as RTL,b as Required,v as StyleTest,L as WithError,m as WithValue,De as __namedExportsOrder,$e as default};
