import{r as l,R as e}from"./index-D4lIrffr.js";import"./jb-searchbar-BJmOaG-j.js";import{r as i}from"./index-BijJAI47.js";import{d as n}from"./JBInput-C7eBWTqq.js";import{o as S}from"./JBButton-C5Q4-nqF.js";import{p as v}from"./JBNumberInput-366j_9gZ.js";import{m as R}from"./JBDateInput-DGhnyU9P.js";import{i as _,o as m}from"./index-CbishZFR.js";function b(r){var a;let t=l.useRef(null),{onInit:s,ref:x,children:f,onLoad:E,onIntentSubmit:F,onExtractDisplayValue:c,...u}=r;return l.useImperativeHandle(x,()=>(t==null?void 0:t.current)??void 0,[t]),l.useEffect(()=>{t.current&&c&&(t.current.extractDisplayValue=c)},[c,t.current]),i(t,"load",(a={onInit:s,onLoad:E,onIntentSubmit:F}).onLoad,!0),i(t,"init",a.onInit,!0),i(t,"intent-submit",a.onIntentSubmit),e.createElement("jb-extra-filter",{slot:"extra",ref:t,...u},f)}function M(r){var a;let t=l.useRef(null),{isLoading:s,onInit:x,ref:f,children:E,onLoad:F,onSearch:c,searchOnChange:u,...j}=r;return l.useImperativeHandle(f,()=>(t==null?void 0:t.current)??void 0,[t]),l.useEffect(()=>{t.current&&typeof u=="boolean"&&(t.current.searchOnChange=u)},[u,t.current]),l.useEffect(()=>{t.current&&typeof s=="boolean"&&(t.current.isLoading=s)},[s,t.current]),i(t,"load",(a={onInit:x,onLoad:F,onSearch:c}).onLoad,!0),i(t,"init",a.onInit,!0),i(t,"search",a.onSearch),e.createElement("jb-searchbar",{ref:t,...j},E)}const k={title:"Components/JBSearchbar",component:M},o={args:{children:e.createElement(l.Fragment,null,e.createElement("div",{slot:"filter"},e.createElement(n,{placeholder:"text filter",name:"textFilter"}),e.createElement(v,{placeholder:"number filter",name:"numberFilter",showControlButton:!0}),e.createElement(_,{placeholder:"Option filter",name:"optionFilter"},e.createElement(m,{value:"1"},"Option 1"),e.createElement(m,{value:"2"},"Option 2"),e.createElement(m,{value:"3"},"Option 3"))),e.createElement(b,{onExtractDisplayValue:r=>{switch(r.name){case"extraDateFilter":return r.dom.inputValue}return String(r.value)}},e.createElement(n,{name:"extraTextFilter","data-label":"text filter",placeholder:"Simple Text Filter"}),e.createElement(v,{name:"extraNumberFilter","data-label":"number filter",placeholder:"Simple Number Filter"}),e.createElement(n,{name:"extraMinimumFilter","data-label":"minimum 3 ",placeholder:"type 3 char and more to approve",validationList:[{validator:/.{3}/g,message:"you must enter 3 value"}]}),e.createElement(R,{name:"extraDateFilter","data-label":"date filter",placeholder:"Simple Date Filter",required:!0}),e.createElement(n,{name:"extraOneTime","data-label":"one time",placeholder:"you can only use this one time","data-max-count":1}))),onSearch:()=>{console.log("search happened")}}},p={args:{children:e.createElement(l.Fragment,null,e.createElement("div",{slot:"filter"},e.createElement(n,{placeholder:"text filter",name:"textFilter",size:"sm"}),e.createElement(_,{placeholder:"Option filter",name:"optionFilter",size:"sm"},e.createElement(m,{value:"1"},"Option 1"),e.createElement(m,{value:"2"},"Option 2"),e.createElement(m,{value:"3"},"Option 3"))),e.createElement(b,{size:"sm",onExtractDisplayValue:r=>{switch(r.name){case"extraDateFilter":return r.dom.inputValue}return String(r.value)}},e.createElement(n,{"data-label":"text filter",placeholder:"Simple Text Filter",size:"sm"}),e.createElement(n,{name:"extraMinimumFilter","data-label":"minimum 3 ",placeholder:"type 3 char and more to approve",size:"sm",validationList:[{validator:/.{3}/g,message:"you must enter 3 value"}]}),e.createElement(R,{name:"extraDateFilter","data-label":"date filter",placeholder:"Simple Date Filter",size:"sm",required:!0})),e.createElement("div",{slot:"divider"})),onSearch:()=>{console.log("search happened")},size:"sm",isLoading:!0}},d={args:{},parameters:{themes:{themeOverride:"rtl"}}},h={args:{...o.args,searchOnChange:!0}},g={render:()=>{const[r,a]=l.useState(!1);return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"}},e.createElement(M,null,e.createElement(b,{placeholder:"choose on of the options"},e.createElement(n,{label:"Name",name:"name",required:!0,message:"enter your name"}),r&&e.createElement(v,{label:"Age",name:"age",message:"enter your age"}))),e.createElement("div",{style:{display:"flex",flexDirection:"row",gap:"0.5rem"}},e.createElement(S,{onClick:()=>a(!0)},"Add Age Filter"),e.createElement(S,{onClick:()=>a(!1)},"Hide Age Filter")))}};var B,J,O;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: <Fragment>
        <div slot="filter">
          <JBInput placeholder='text filter' name="textFilter" />
          <JBNumberInput placeholder='number filter' name="numberFilter" showControlButton />
          <JBSelect placeholder='Option filter' name="optionFilter">
            <JBOption value="1">Option 1</JBOption>
            <JBOption value="2">Option 2</JBOption>
            <JBOption value="3">Option 3</JBOption>
          </JBSelect>
        </div>
        <JBExtraFilter onExtractDisplayValue={arg => {
        switch (arg.name) {
          case 'extraDateFilter':
            return (arg.dom as JBDateInputWebComponent).inputValue;
        }
        return String(arg.value);
      }}>
          <JBInput name="extraTextFilter" data-label="text filter" placeholder='Simple Text Filter' />
          <JBNumberInput name="extraNumberFilter" data-label="number filter" placeholder='Simple Number Filter' />
          <JBInput name="extraMinimumFilter" data-label="minimum 3 " placeholder='type 3 char and more to approve' validationList={[{
          validator: /.{3}/g,
          message: "you must enter 3 value"
        }]} />
          <JBDateInput name="extraDateFilter" data-label="date filter" placeholder='Simple Date Filter' required />
          <JBInput name="extraOneTime" data-label="one time" placeholder='you can only use this one time' data-max-count={1} />
        </JBExtraFilter>
      </Fragment>,
    onSearch: () => {
      console.log('search happened');
    }
  }
}`,...(O=(J=o.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var y,D,I;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: <Fragment>
        <div slot="filter">
          <JBInput placeholder='text filter' name="textFilter" size='sm' />
          <JBSelect placeholder='Option filter' name="optionFilter" size='sm'>
            <JBOption value="1">Option 1</JBOption>
            <JBOption value="2">Option 2</JBOption>
            <JBOption value="3">Option 3</JBOption>
          </JBSelect>
        </div>
        <JBExtraFilter size='sm' onExtractDisplayValue={arg => {
        switch (arg.name) {
          case 'extraDateFilter':
            return (arg.dom as JBDateInputWebComponent).inputValue;
        }
        return String(arg.value);
      }}>
          <JBInput data-label="text filter" placeholder='Simple Text Filter' size='sm' />
          <JBInput name="extraMinimumFilter" data-label="minimum 3 " placeholder='type 3 char and more to approve' size='sm' validationList={[{
          validator: /.{3}/g,
          message: "you must enter 3 value"
        }]} />
          <JBDateInput name="extraDateFilter" data-label="date filter" placeholder='Simple Date Filter' size='sm' required />
        </JBExtraFilter>
        <div slot="divider"></div>
      </Fragment>,
    onSearch: () => {
      console.log('search happened');
    },
    size: 'sm',
    isLoading: true
  }
}`,...(I=(D=p.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var z,C,L;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    // placeholder: 'نوع فیلتر را انتخاب کنید',
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(L=(C=d.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var w,N,T;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    searchOnChange: true
  }
}`,...(T=(N=h.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var V,A,q;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [showExtraFilter, setShowExtraFilter] = useState<boolean>(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <JBSearchbar>
          <JBExtraFilter placeholder='choose on of the options'>
            <JBInput label="Name" name="name" required message="enter your name" />
            {showExtraFilter && <JBNumberInput label="Age" name="age" message="enter your age" />}
          </JBExtraFilter>
        </JBSearchbar>
        <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem'
      }}>
          <JBButton onClick={() => setShowExtraFilter(true)}>Add Age Filter</JBButton>
          <JBButton onClick={() => setShowExtraFilter(false)}>Hide Age Filter</JBButton>
        </div>
      </div>;
  }
}`,...(q=(A=g.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};const H=["Normal","Size","RTLSample","SearchOnChange","ChangeExtraFields"],Y=Object.freeze(Object.defineProperty({__proto__:null,ChangeExtraFields:g,Normal:o,RTLSample:d,SearchOnChange:h,Size:p,__namedExportsOrder:H,default:k},Symbol.toStringTag,{value:"Module"}));export{o as N,Y as S,h as a};
