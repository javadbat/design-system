import{r as n,R as e}from"./index-CwcVQgaJ.js";import"./jb-searchbar-CurcsiOW.js";import{r as i}from"./index-BVrqzDik.js";import{d as l}from"./JBInput-SMYLafLo.js";import{o as B}from"./JBButton-CzXHkPk6.js";import{p as E}from"./JBNumberInput-5HbdaNtm.js";import{m as q}from"./JBDateInput-Dex0K4TC.js";import{i as R,o}from"./index-DC_OtfbB.js";import"./index-BjRxPyWZ.js";import"./index-CD0l0uGk.js";import"./jb-button-BTg9t25D.js";import"./jb-loading-BuRiKsux.js";import"./index-BtFglznY.js";import"./jb-popover-DTIBXtF_.js";import"./jb-validation-AFHFNd1g.js";import"./index-Bhe3Q7G8.js";import"./index-CUhgvN0_.js";import"./jb-calendar-CgnbmuUq.js";function f(r){var a;let t=n.useRef(null),{onInit:d,ref:h,children:x,onLoad:g,onIntentSubmit:F,onExtractDisplayValue:v,...H}=r;return n.useImperativeHandle(h,()=>(t==null?void 0:t.current)??void 0,[t]),i(t,"load",(a={onInit:d,onLoad:g,onIntentSubmit:F}).onLoad,!0),i(t,"init",a.onInit,!0),i(t,"intent-submit",a.onIntentSubmit),e.createElement("jb-extra-filter",{extractDisplayValue:r.onExtractDisplayValue,slot:"extra",ref:t,...H},x)}function k(r){var a;let t=n.useRef(null),{onInit:d,ref:h,children:x,onLoad:g,onSearch:F,...v}=r;return n.useImperativeHandle(h,()=>(t==null?void 0:t.current)??void 0,[t]),i(t,"load",(a={onInit:d,onLoad:g,onSearch:F}).onLoad,!0),i(t,"init",a.onInit,!0),i(t,"search",a.onSearch),e.createElement("jb-searchbar",{ref:t,...v},x)}const ne={title:"Components/JBSearchbar",component:k},m={args:{children:e.createElement(n.Fragment,null,e.createElement("div",{slot:"filter"},e.createElement(l,{placeholder:"text filter",name:"textFilter"}),e.createElement(E,{placeholder:"number filter",name:"numberFilter",showControlButton:!0}),e.createElement(R,{placeholder:"Option filter",name:"optionFilter"},e.createElement(o,{value:"1"},"Option 1"),e.createElement(o,{value:"2"},"Option 2"),e.createElement(o,{value:"3"},"Option 3"))),e.createElement(f,{onExtractDisplayValue:r=>{switch(r.name){case"extraDateFilter":return r.dom.inputValue}return String(r.value)}},e.createElement(l,{name:"extraTextFilter","data-label":"text filter",placeholder:"Simple Text Filter"}),e.createElement(E,{name:"extraNumberFilter","data-label":"number filter",placeholder:"Simple Number Filter"}),e.createElement(l,{name:"extraMinimumFilter","data-label":"minimum 3 ",placeholder:"type 3 char and more to approve",validationList:[{validator:/.{3}/g,message:"you must enter 3 value"}]}),e.createElement(q,{name:"extraDateFilter","data-label":"date filter",placeholder:"Simple Date Filter",required:!0}),e.createElement(l,{name:"extraOneTime","data-label":"one time",placeholder:"you can only use this one time","data-max-count":1}))),onSearch:()=>{console.log("search happened")}}},s={args:{children:e.createElement(n.Fragment,null,e.createElement("div",{slot:"filter"},e.createElement(l,{placeholder:"text filter",name:"textFilter",size:"sm"}),e.createElement(R,{placeholder:"Option filter",name:"optionFilter",size:"sm"},e.createElement(o,{value:"1"},"Option 1"),e.createElement(o,{value:"2"},"Option 2"),e.createElement(o,{value:"3"},"Option 3"))),e.createElement(f,{size:"sm",onExtractDisplayValue:r=>{switch(r.name){case"extraDateFilter":return r.dom.inputValue}return String(r.value)}},e.createElement(l,{"data-label":"text filter",placeholder:"Simple Text Filter",size:"sm"}),e.createElement(l,{name:"extraMinimumFilter","data-label":"minimum 3 ",placeholder:"type 3 char and more to approve",size:"sm",validationList:[{validator:/.{3}/g,message:"you must enter 3 value"}]}),e.createElement(q,{name:"extraDateFilter","data-label":"date filter",placeholder:"Simple Date Filter",size:"sm",required:!0})),e.createElement("div",{slot:"divider"})),onSearch:()=>{console.log("search happened")},size:"sm",isLoading:!0}},c={args:{},parameters:{themes:{themeOverride:"rtl"}}},p={args:{...m.args,searchOnChange:!0}},u={render:()=>{const[r,a]=n.useState(!1);return e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"}},e.createElement(k,null,e.createElement(f,{placeholder:"choose on of the options"},e.createElement(l,{label:"Name",name:"name",required:!0,message:"enter your name"}),r&&e.createElement(E,{label:"Age",name:"age",message:"enter your age"}))),e.createElement("div",{style:{display:"flex",flexDirection:"row",gap:"0.5rem"}},e.createElement(B,{onClick:()=>a(!0)},"Add Age Filter"),e.createElement(B,{onClick:()=>a(!1)},"Hide Age Filter")))}};var b,S,J;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(J=(S=m.parameters)==null?void 0:S.docs)==null?void 0:J.source}}};var O,y,D;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(D=(y=s.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var I,z,w;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    // placeholder: 'نوع فیلتر را انتخاب کنید',
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...(w=(z=c.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var C,L,N;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    searchOnChange: true
  }
}`,...(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var V,T,A;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(A=(T=u.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const ie=["Normal","Size","RTLSample","SearchOnChange","ChangeExtraFields"];export{u as ChangeExtraFields,m as Normal,c as RTLSample,p as SearchOnChange,s as Size,ie as __namedExportsOrder,ne as default};
