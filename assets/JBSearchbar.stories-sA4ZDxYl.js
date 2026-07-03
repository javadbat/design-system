import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{ot as r,t as i}from"./iframe-D8X6jgu3.js";import{r as a,t as o}from"./react-Dw8grmiJ.js";import{r as s,t as c}from"./react-B_3v0cGY.js";import{a as l,t as u}from"./react-BEbtql_C.js";import{n as d,t as f}from"./react-CNiw26E7.js";import{n as p,t as m}from"./main-t0I7rpnX.js";import{n as h,r as g,t as _}from"./react-B2VdVb49.js";import{t as v}from"./jb-searchbar-Cv4L7aE_.js";function y(e){let t=(0,x.useRef)(null),{onInit:n,ref:r,children:i,onLoad:o,onIntentSubmit:s,onExtractDisplayValue:c,...l}=e;return(0,x.useImperativeHandle)(r,(()=>t?.current??void 0),[t]),(0,x.useEffect)((()=>{t.current&&c&&(t.current.extractDisplayValue=c)}),[c,t.current]),function(e,t){a(e,`load`,t.onLoad,!0),a(e,`init`,t.onInit,!0),a(e,`intent-submit`,t.onIntentSubmit)}(t,{onInit:n,onLoad:o,onIntentSubmit:s}),x.createElement(`jb-extra-filter`,{slot:`extra`,ref:t,...l},i)}function b(e){let t=(0,x.useRef)(null),{isLoading:n,onInit:r,ref:i,children:o,onLoad:s,onSearch:c,searchOnChange:l,...u}=e;return(0,x.useImperativeHandle)(i,(()=>t?.current??void 0),[t]),(0,x.useEffect)((()=>{t.current&&typeof l==`boolean`&&(t.current.searchOnChange=l)}),[l,t.current]),(0,x.useEffect)((()=>{t.current&&typeof n==`boolean`&&(t.current.isLoading=n)}),[n,t.current]),function(e,t){a(e,`load`,t.onLoad,!0),a(e,`init`,t.onInit,!0),a(e,`search`,t.onSearch)}(t,{onInit:r,onLoad:s,onSearch:c}),x.createElement(`jb-searchbar`,{ref:t,...u},o)}var x,S=t((()=>{x=n(r(),1),v(),o()})),C=t((()=>{S()}));function w(e){let t=e.querySelector(`jb-searchbar`);return F(t).toBeTruthy(),F(t.shadowRoot).toBeTruthy(),t}function T(e){let t=e.querySelector(`jb-extra-filter`);return F(t).toBeTruthy(),F(t.shadowRoot).toBeTruthy(),t}function E(e){let t=e.shadowRoot?.querySelector(`.filter-select`);return F(t).toBeTruthy(),t}function D(e){let t=e.shadowRoot?.querySelector(`#ColumnSelectOptionList`);return F(t).toBeTruthy(),t}function O(e){let t=e.shadowRoot?.querySelector(`.intent-submit-button`);return F(t).toBeTruthy(),t}function k(e,t){let n=e.shadowRoot?.querySelector(`.intent-input-wrapper ${t}`);return F(n).toBeTruthy(),n}function A(e){let t=e.shadowRoot?.querySelector(`input`);return F(t).toBeTruthy(),t}function j(e,t=0){let n=e.shadowRoot?.querySelectorAll(`.filter-item`)[t];return F(n).toBeTruthy(),n}async function M(e,t){let n=D(e);return await L(()=>{F(n.optionList.map(e=>e.key)).toEqual(t)}),n.optionList}function N(e,t){let n=E(e),r=D(e).optionList.find(e=>e.key===t);F(r).toBeTruthy(),n.value=r,n.dispatchEvent(new Event(`change`,{bubbles:!0}))}async function P(e,t,n,r=n){let i=k(e,t),a=A(i);return await I.type(a,n),await L(()=>{F(i.value).toBe(r)}),i}var F,I,L,R=t((()=>{({expect:F,userEvent:I,waitFor:L}=__STORYBOOK_MODULE_TEST__)})),z=e({ChangeExtraFields:()=>X,Normal:()=>K,RTLSample:()=>J,SearchOnChange:()=>Y,Size:()=>q,__namedExportsOrder:()=>Z,default:()=>G}),B,V,H,U,W,G,K,q,J,Y,X,Z,Q=t((()=>{B=n(r(),1),C(),u(),c(),f(),m(),_(),R(),V=i(),{expect:H,userEvent:U,waitFor:W}=__STORYBOOK_MODULE_TEST__,G={title:`Components/JBSearchbar`,component:b},K={args:{children:(0,V.jsxs)(B.Fragment,{children:[(0,V.jsxs)(`div`,{slot:`filter`,children:[(0,V.jsx)(l,{placeholder:`text filter`,name:`textFilter`}),(0,V.jsx)(d,{placeholder:`number filter`,name:`numberFilter`,showControlButton:!0}),(0,V.jsxs)(h,{placeholder:`Option filter`,name:`optionFilter`,children:[(0,V.jsx)(g,{value:`1`,children:`Option 1`}),(0,V.jsx)(g,{value:`2`,children:`Option 2`}),(0,V.jsx)(g,{value:`3`,children:`Option 3`})]})]}),(0,V.jsxs)(y,{onExtractDisplayValue:e=>{switch(e.name){case`extraDateFilter`:return e.dom.inputValue}return String(e.value)},children:[(0,V.jsx)(l,{name:`extraTextFilter`,"data-label":`text filter`,placeholder:`Simple Text Filter`}),(0,V.jsx)(d,{name:`extraNumberFilter`,"data-label":`number filter`,placeholder:`Simple Number Filter`}),(0,V.jsx)(l,{name:`extraMinimumFilter`,"data-label":`minimum 3 `,placeholder:`type 3 char and more to approve`,validationList:[{validator:/.{3}/g,message:`you must enter 3 value`}]}),(0,V.jsx)(p,{name:`extraDateFilter`,"data-label":`date filter`,placeholder:`Simple Date Filter`,required:!0}),(0,V.jsx)(l,{name:`extraOneTime`,"data-label":`one time`,placeholder:`you can only use this one time`,"data-max-count":1})]})]}),onSearch:()=>{console.log(`search happened`)}},play:async({canvasElement:e})=>{let t=w(e),n=T(e);await M(n,[`extraTextFilter`,`extraNumberFilter`,`extraMinimumFilter`,`extraDateFilter`,`extraOneTime`]),N(n,`extraMinimumFilter`),await W(()=>{H(n.inputState).toBe(`FILL_VALUE`),H(k(n,`jb-input[name="extraMinimumFilter"]`)).toBeTruthy(),H(O(n).classList.contains(`--active`)).toBe(!1)}),await P(n,`jb-input[name="extraMinimumFilter"]`,`ab`),await W(()=>{H(O(n).classList.contains(`--active`)).toBe(!1)}),await P(n,`jb-input[name="extraMinimumFilter"]`,`c`,`abc`),await W(()=>{H(O(n).classList.contains(`--active`)).toBe(!0)}),await U.click(O(n)),await W(()=>{H(n.inputState).toBe(`SELECT_COLUMN`),H(t.value).toContainEqual({name:`extraMinimumFilter`,label:`minimum 3 `,value:`abc`,displayValue:`abc`}),H(j(t).textContent).toContain(`minimum 3 : abc`)})}},q={args:{children:(0,V.jsxs)(B.Fragment,{children:[(0,V.jsxs)(`div`,{slot:`filter`,children:[(0,V.jsx)(l,{placeholder:`text filter`,name:`textFilter`,size:`sm`}),(0,V.jsxs)(h,{placeholder:`Option filter`,name:`optionFilter`,size:`sm`,children:[(0,V.jsx)(g,{value:`1`,children:`Option 1`}),(0,V.jsx)(g,{value:`2`,children:`Option 2`}),(0,V.jsx)(g,{value:`3`,children:`Option 3`})]})]}),(0,V.jsxs)(y,{size:`sm`,onExtractDisplayValue:e=>{switch(e.name){case`extraDateFilter`:return e.dom.inputValue}return String(e.value)},children:[(0,V.jsx)(l,{"data-label":`text filter`,placeholder:`Simple Text Filter`,size:`sm`}),(0,V.jsx)(l,{name:`extraMinimumFilter`,"data-label":`minimum 3 `,placeholder:`type 3 char and more to approve`,size:`sm`,validationList:[{validator:/.{3}/g,message:`you must enter 3 value`}]}),(0,V.jsx)(p,{name:`extraDateFilter`,"data-label":`date filter`,placeholder:`Simple Date Filter`,size:`sm`,required:!0})]}),(0,V.jsx)(`div`,{slot:`divider`})]}),onSearch:()=>{console.log(`search happened`)},size:`sm`,isLoading:!0}},J={args:{},parameters:{themes:{themeOverride:`rtl`}}},Y={args:{...K.args,searchOnChange:!0}},X={render:()=>{let[e,t]=(0,B.useState)(!1);return(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,V.jsx)(b,{children:(0,V.jsxs)(y,{placeholder:`choose on of the options`,children:[(0,V.jsx)(l,{label:`Name`,name:`name`,required:!0,message:`enter your name`}),e&&(0,V.jsx)(d,{label:`Age`,name:`age`,message:`enter your age`})]})}),(0,V.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,gap:`0.5rem`},children:[(0,V.jsx)(s,{onClick:()=>t(!0),children:`Add Age Filter`}),(0,V.jsx)(s,{onClick:()=>t(!1),children:`Hide Age Filter`})]})]})},play:async({canvasElement:e})=>{let t=T(e),n=Array.from(e.querySelectorAll(`jb-button`)),r=n.find(e=>e.textContent?.includes(`Add Age Filter`)),i=n.find(e=>e.textContent?.includes(`Hide Age Filter`));H(r).toBeTruthy(),H(i).toBeTruthy(),await M(t,[`name`]),await U.click(r),await M(t,[`name`,`age`]),await U.click(i),await M(t,[`name`])}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
            return (arg.dom as unknown as JBDateInputWebComponent).inputValue;
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
  },
  play: async ({
    canvasElement
  }) => {
    const searchbar = getSearchbar(canvasElement);
    const extraFilter = getExtraFilter(canvasElement);
    await waitForExtraFilterOptions(extraFilter, ['extraTextFilter', 'extraNumberFilter', 'extraMinimumFilter', 'extraDateFilter', 'extraOneTime']);
    chooseExtraFilter(extraFilter, 'extraMinimumFilter');
    await waitFor(() => {
      expect(extraFilter.inputState).toBe('FILL_VALUE');
      expect(getIntentInput(extraFilter, 'jb-input[name="extraMinimumFilter"]')).toBeTruthy();
      expect(getIntentSubmitButton(extraFilter).classList.contains('--active')).toBe(false);
    });
    await fillIntentInput(extraFilter, 'jb-input[name="extraMinimumFilter"]', 'ab');
    await waitFor(() => {
      expect(getIntentSubmitButton(extraFilter).classList.contains('--active')).toBe(false);
    });
    await fillIntentInput(extraFilter, 'jb-input[name="extraMinimumFilter"]', 'c', 'abc');
    await waitFor(() => {
      expect(getIntentSubmitButton(extraFilter).classList.contains('--active')).toBe(true);
    });
    await userEvent.click(getIntentSubmitButton(extraFilter));
    await waitFor(() => {
      expect(extraFilter.inputState).toBe('SELECT_COLUMN');
      expect(searchbar.value).toContainEqual({
        name: 'extraMinimumFilter',
        label: 'minimum 3 ',
        value: 'abc',
        displayValue: 'abc'
      });
      expect(getFilterChip(searchbar).textContent).toContain('minimum 3 : abc');
    });
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
            return (arg.dom as unknown as JBDateInputWebComponent).inputValue;
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    // placeholder: 'نوع فیلتر را انتخاب کنید',
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    searchOnChange: true
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement
  }) => {
    const extraFilter = getExtraFilter(canvasElement);
    const buttons = Array.from(canvasElement.querySelectorAll('jb-button'));
    const addAgeButton = buttons.find(button => button.textContent?.includes('Add Age Filter'));
    const hideAgeButton = buttons.find(button => button.textContent?.includes('Hide Age Filter'));
    expect(addAgeButton).toBeTruthy();
    expect(hideAgeButton).toBeTruthy();
    await waitForExtraFilterOptions(extraFilter, ['name']);
    await userEvent.click(addAgeButton!);
    await waitForExtraFilterOptions(extraFilter, ['name', 'age']);
    await userEvent.click(hideAgeButton!);
    await waitForExtraFilterOptions(extraFilter, ['name']);
  }
}`,...X.parameters?.docs?.source}}},Z=[`Normal`,`Size`,`RTLSample`,`SearchOnChange`,`ChangeExtraFields`]}));Q();export{X as ChangeExtraFields,K as Normal,J as RTLSample,Y as SearchOnChange,q as Size,Z as __namedExportsOrder,G as default,Q as n,z as t};