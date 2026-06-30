import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-CqEp92lC.js";import{r as a,t as o}from"./react-C0v9gDEe.js";import{r as s,t as c}from"./react-CKiQMucP.js";import{a as l,t as u}from"./react-qeRyTCYH.js";import{n as d,t as f}from"./react-O72j8ORv.js";import{n as p,t as m}from"./main-DNR8B-85.js";import{n as h,r as g,t as _}from"./react-jgIGaaU_.js";import{t as v}from"./jb-searchbar-DXvyuf9a.js";function y(e){let t=(0,x.useRef)(null),{onInit:n,ref:r,children:i,onLoad:o,onIntentSubmit:s,onExtractDisplayValue:c,...l}=e;return(0,x.useImperativeHandle)(r,(()=>t?.current??void 0),[t]),(0,x.useEffect)((()=>{t.current&&c&&(t.current.extractDisplayValue=c)}),[c,t.current]),function(e,t){a(e,`load`,t.onLoad,!0),a(e,`init`,t.onInit,!0),a(e,`intent-submit`,t.onIntentSubmit)}(t,{onInit:n,onLoad:o,onIntentSubmit:s}),x.createElement(`jb-extra-filter`,{slot:`extra`,ref:t,...l},i)}function b(e){let t=(0,x.useRef)(null),{isLoading:n,onInit:r,ref:i,children:o,onLoad:s,onSearch:c,searchOnChange:l,...u}=e;return(0,x.useImperativeHandle)(i,(()=>t?.current??void 0),[t]),(0,x.useEffect)((()=>{t.current&&typeof l==`boolean`&&(t.current.searchOnChange=l)}),[l,t.current]),(0,x.useEffect)((()=>{t.current&&typeof n==`boolean`&&(t.current.isLoading=n)}),[n,t.current]),function(e,t){a(e,`load`,t.onLoad,!0),a(e,`init`,t.onInit,!0),a(e,`search`,t.onSearch)}(t,{onInit:r,onLoad:s,onSearch:c}),x.createElement(`jb-searchbar`,{ref:t,...u},o)}var x,S=t((()=>{x=n(r(),1),v(),o()})),C=t((()=>{S()})),w=e({ChangeExtraFields:()=>M,Normal:()=>O,RTLSample:()=>A,SearchOnChange:()=>j,Size:()=>k,__namedExportsOrder:()=>N,default:()=>D}),T,E,D,O,k,A,j,M,N,P=t((()=>{T=n(r(),1),C(),u(),c(),f(),m(),_(),E=i(),D={title:`Components/JBSearchbar`,component:b},O={args:{children:(0,E.jsxs)(T.Fragment,{children:[(0,E.jsxs)(`div`,{slot:`filter`,children:[(0,E.jsx)(l,{placeholder:`text filter`,name:`textFilter`}),(0,E.jsx)(d,{placeholder:`number filter`,name:`numberFilter`,showControlButton:!0}),(0,E.jsxs)(h,{placeholder:`Option filter`,name:`optionFilter`,children:[(0,E.jsx)(g,{value:`1`,children:`Option 1`}),(0,E.jsx)(g,{value:`2`,children:`Option 2`}),(0,E.jsx)(g,{value:`3`,children:`Option 3`})]})]}),(0,E.jsxs)(y,{onExtractDisplayValue:e=>{switch(e.name){case`extraDateFilter`:return e.dom.inputValue}return String(e.value)},children:[(0,E.jsx)(l,{name:`extraTextFilter`,"data-label":`text filter`,placeholder:`Simple Text Filter`}),(0,E.jsx)(d,{name:`extraNumberFilter`,"data-label":`number filter`,placeholder:`Simple Number Filter`}),(0,E.jsx)(l,{name:`extraMinimumFilter`,"data-label":`minimum 3 `,placeholder:`type 3 char and more to approve`,validationList:[{validator:/.{3}/g,message:`you must enter 3 value`}]}),(0,E.jsx)(p,{name:`extraDateFilter`,"data-label":`date filter`,placeholder:`Simple Date Filter`,required:!0}),(0,E.jsx)(l,{name:`extraOneTime`,"data-label":`one time`,placeholder:`you can only use this one time`,"data-max-count":1})]})]}),onSearch:()=>{console.log(`search happened`)}}},k={args:{children:(0,E.jsxs)(T.Fragment,{children:[(0,E.jsxs)(`div`,{slot:`filter`,children:[(0,E.jsx)(l,{placeholder:`text filter`,name:`textFilter`,size:`sm`}),(0,E.jsxs)(h,{placeholder:`Option filter`,name:`optionFilter`,size:`sm`,children:[(0,E.jsx)(g,{value:`1`,children:`Option 1`}),(0,E.jsx)(g,{value:`2`,children:`Option 2`}),(0,E.jsx)(g,{value:`3`,children:`Option 3`})]})]}),(0,E.jsxs)(y,{size:`sm`,onExtractDisplayValue:e=>{switch(e.name){case`extraDateFilter`:return e.dom.inputValue}return String(e.value)},children:[(0,E.jsx)(l,{"data-label":`text filter`,placeholder:`Simple Text Filter`,size:`sm`}),(0,E.jsx)(l,{name:`extraMinimumFilter`,"data-label":`minimum 3 `,placeholder:`type 3 char and more to approve`,size:`sm`,validationList:[{validator:/.{3}/g,message:`you must enter 3 value`}]}),(0,E.jsx)(p,{name:`extraDateFilter`,"data-label":`date filter`,placeholder:`Simple Date Filter`,size:`sm`,required:!0})]}),(0,E.jsx)(`div`,{slot:`divider`})]}),onSearch:()=>{console.log(`search happened`)},size:`sm`,isLoading:!0}},A={args:{},parameters:{themes:{themeOverride:`rtl`}}},j={args:{...O.args,searchOnChange:!0}},M={render:()=>{let[e,t]=(0,T.useState)(!1);return(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,E.jsx)(b,{children:(0,E.jsxs)(y,{placeholder:`choose on of the options`,children:[(0,E.jsx)(l,{label:`Name`,name:`name`,required:!0,message:`enter your name`}),e&&(0,E.jsx)(d,{label:`Age`,name:`age`,message:`enter your age`})]})}),(0,E.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,gap:`0.5rem`},children:[(0,E.jsx)(s,{onClick:()=>t(!0),children:`Add Age Filter`}),(0,E.jsx)(s,{onClick:()=>t(!1),children:`Hide Age Filter`})]})]})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    // placeholder: 'نوع فیلتر را انتخاب کنید',
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    searchOnChange: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N=[`Normal`,`Size`,`RTLSample`,`SearchOnChange`,`ChangeExtraFields`]}));P();export{M as ChangeExtraFields,O as Normal,A as RTLSample,j as SearchOnChange,k as Size,N as __namedExportsOrder,D as default,P as n,w as t};