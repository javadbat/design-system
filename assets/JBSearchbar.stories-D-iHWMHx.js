import{r as l,R as e}from"./index-D4lIrffr.js";import"./jb-searchbar-B3FhcuF_.js";import{r as o}from"./index-BijJAI47.js";import{d as n}from"./JBInput-C7eBWTqq.js";import{o as B}from"./JBButton-CbaRHm9y.js";import{p as v}from"./JBNumberInput-DwWFK9Vg.js";import{m as R}from"./JBDateInput-DGhnyU9P.js";import{i as k,o as i}from"./index-CLCo0fs7.js";import"./index-CansPAZh.js";import"./index-lAaFp5WP.js";import"./jb-button-CtUV5eF-.js";import"./jb-loading-BmlEKkU_.js";import"./index-Dd_ewvOK.js";import"./jb-popover-uLAZLIhT.js";import"./jb-validation-Dz3z_GNT.js";import"./index-D7ggZhY0.js";import"./index-PsHXaMGh.js";import"./jb-calendar-DoI53nKV.js";function b(r){var a;let t=l.useRef(null),{onInit:m,ref:g,children:f,onLoad:E,onIntentSubmit:F,onExtractDisplayValue:s,...c}=r;return l.useImperativeHandle(g,()=>(t==null?void 0:t.current)??void 0,[t]),l.useEffect(()=>{t.current&&s&&(t.current.extractDisplayValue=s)},[s,t.current]),o(t,"load",(a={onInit:m,onLoad:E,onIntentSubmit:F}).onLoad,!0),o(t,"init",a.onInit,!0),o(t,"intent-submit",a.onIntentSubmit),e.createElement("jb-extra-filter",{slot:"extra",ref:t,...c},f)}function H(r){var a;let t=l.useRef(null),{isLoading:m,onInit:g,ref:f,children:E,onLoad:F,onSearch:s,searchOnChange:c,...M}=r;return l.useImperativeHandle(f,()=>(t==null?void 0:t.current)??void 0,[t]),l.useEffect(()=>{t.current&&typeof c=="boolean"&&(t.current.searchOnChange=c)},[c,t.current]),l.useEffect(()=>{t.current&&typeof m=="boolean"&&(t.current.isLoading=m)},[m,t.current]),o(t,"load",(a={onInit:g,onLoad:F,onSearch:s}).onLoad,!0),o(t,"init",a.onInit,!0),o(t,"search",a.onSearch),e.createElement("jb-searchbar",{ref:t,...M},E)}const oe={title:"Components/JBSearchbar",component:H},p={args:{children:e.createElement(l.Fragment,null,e.createElement("div",{slot:"filter"},e.createElement(n,{placeholder:"text filter",name:"textFilter"}),e.createElement(v,{placeholder:"number filter",name:"numberFilter",showControlButton:!0}),e.createElement(k,{placeholder:"Option filter",name:"optionFilter"},e.createElement(i,{value:"1"},"Option 1"),e.createElement(i,{value:"2"},"Option 2"),e.createElement(i,{value:"3"},"Option 3"))),e.createElement(b,{onExtractDisplayValue:r=>{switch(r.name){case"extraDateFilter":return r.dom.inputValue}return String(r.value)}},e.createElement(n,{name:"extraTextFilter","data-label":"text filter",placeholder:"Simple Text Filter"}),e.createElement(v,{name:"extraNumberFilter","data-label":"number filter",placeholder:"Simple Number Filter"}),e.createElement(n,{name:"extraMinimumFilter","data-label":"minimum 3 ",placeholder:"type 3 char and more to approve",validationList:[{validator:/.{3}/g,message:"you must enter 3 value"}]}),e.createElement(R,{name:"extraDateFilter","data-label":"date filter",placeholder:"Simple Date Filter",required:!0}),e.createElement(n,{name:"extraOneTime","data-label":"one time",placeholder:"you can only use this one time","data-max-count":1}))),onSearch:()=>{console.log("search happened")}}},u={args:{children:e.createElement(l.Fragment,null,e.createElement("div",{slot:"filter"},e.createElement(n,{placeholder:"text filter",name:"textFilter",size:"sm"}),e.createElement(k,{placeholder:"Option filter",name:"optionFilter",size:"sm"},e.createElement(i,{value:"1"},"Option 1"),e.createElement(i,{value:"2"},"Option 2"),e.createElement(i,{value:"3"},"Option 3"))),e.createElement(b,{size:"sm",onExtractDisplayValue:r=>{switch(r.name){case"extraDateFilter":return r.dom.inputValue}return String(r.value)}},e.createElement(n,{"data-label":"text filter",placeholder:"Simple Text Filter",size:"sm"}),e.createElement(n,{name:"extraMinimumFilter","data-label":"minimum 3 ",placeholder:"type 3 char and more to approve",size:"sm",validationList:[{validator:/.{3}/g,message:"you must enter 3 value"}]}),e.createElement(R,{name:"extraDateFilter","data-label":"date filter",placeholder:"Simple Date Filter",size:"sm",required:!0})),e.createElement("div",{slot:"divider"})),onSearch:()=>{console.log("search happened")},size:"sm",isLoading:!0}},d={args:{},parameters:{themes:{themeOverride:"rtl"}}},h={args:{...p.args,searchOnChange:!0}},x={render:()=>{const[r,a]=l.useState(!1);return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"}},e.createElement(H,null,e.createElement(b,{placeholder:"choose on of the options"},e.createElement(n,{label:"Name",name:"name",required:!0,message:"enter your name"}),r&&e.createElement(v,{label:"Age",name:"age",message:"enter your age"}))),e.createElement("div",{style:{display:"flex",flexDirection:"row",gap:"0.5rem"}},e.createElement(B,{onClick:()=>a(!0)},"Add Age Filter"),e.createElement(B,{onClick:()=>a(!1)},"Hide Age Filter")))}};var S,J,O;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(O=(J=p.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var y,D,I;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(I=(D=u.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var C,z,L;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    // placeholder: 'نوع فیلتر را انتخاب کنید',
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(L=(z=d.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var w,N,T;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    searchOnChange: true
  }
}`,...(T=(N=h.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var V,A,q;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(q=(A=x.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};const ie=["Normal","Size","RTLSample","SearchOnChange","ChangeExtraFields"];export{x as ChangeExtraFields,p as Normal,d as RTLSample,h as SearchOnChange,u as Size,ie as __namedExportsOrder,oe as default};
