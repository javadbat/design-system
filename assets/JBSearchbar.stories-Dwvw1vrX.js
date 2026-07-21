import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-DyWnM0Wh.js";import{r as a,t as o}from"./react-BGH4lIeG.js";import{r as s,t as c}from"./react-BMgD39it.js";import{r as l,t as u}from"./react-Qy7FRSMl.js";import{n as d,t as f}from"./main-BnHzNRVQ.js";import{a as p,r as m,t as h}from"./react-BZHr15i9.js";import{n as g,t as _}from"./react-BP_UaANx.js";import{n as v,t as y}from"./dist-C5DUfNXn.js";import{n as b,r as x,t as S}from"./react-Wfbwmb5y.js";function C(e){let t=e.querySelector(`jb-searchbar`);return P(t).toBeTruthy(),P(t.shadowRoot).toBeTruthy(),t}function w(e){let t=e.querySelector(`jb-extra-filter`);return P(t).toBeTruthy(),P(t.shadowRoot).toBeTruthy(),t}function T(e){let t=e.shadowRoot?.querySelector(`.filter-select`);return P(t).toBeTruthy(),t}function E(e){let t=e.shadowRoot?.querySelector(`#ColumnSelectOptionList`);return P(t).toBeTruthy(),t}function D(e){let t=e.shadowRoot?.querySelector(`.intent-submit-button`);return P(t).toBeTruthy(),t}function O(e,t){let n=e.shadowRoot?.querySelector(`.intent-input-wrapper ${t}`);return P(n).toBeTruthy(),n}function k(e){let t=e.shadowRoot?.querySelector(`input`);return P(t).toBeTruthy(),t}function A(e,t=0){let n=e.shadowRoot?.querySelectorAll(`.filter-item`)[t];return P(n).toBeTruthy(),n}async function j(e,t){let n=E(e);return await I(()=>{P(n.optionList.map(e=>e.key)).toEqual(t)}),n.optionList}function M(e,t){let n=T(e),r=E(e).optionList.find(e=>e.key===t);P(r).toBeTruthy(),n.value=r,n.dispatchEvent(new Event(`change`,{bubbles:!0}))}async function N(e,t,n,r=n){let i=O(e,t),a=k(i);return await F.type(a,n),await I(()=>{P(i.value).toBe(r)}),i}var P,F,I,L=t((()=>{({expect:P,userEvent:F,waitFor:I}=__STORYBOOK_MODULE_TEST__)})),R=e({ChangeExtraFields:()=>X,Normal:()=>K,RTLSample:()=>J,SearchOnChange:()=>Y,Size:()=>q,__namedExportsOrder:()=>Z,default:()=>W}),z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q=t((()=>{z=n(r(),1),S(),c(),o(),u(),f(),h(),L(),y(),_(),B=i(),{expect:V,userEvent:H,waitFor:U}=__STORYBOOK_MODULE_TEST__,W={title:`Components/JBSearchbar`,component:x},G=v.helpers.multiple(()=>v.company.name(),{count:50}),K={args:{children:(0,B.jsxs)(z.Fragment,{children:[(0,B.jsxs)(`div`,{slot:`filter`,children:[(0,B.jsx)(s,{placeholder:`text filter`,name:`textFilter`}),(0,B.jsx)(l,{placeholder:`number filter`,name:`numberFilter`,showControlButton:!0}),(0,B.jsxs)(p,{placeholder:`Option filter`,name:`optionFilter`,children:[(0,B.jsx)(m,{value:`1`,children:`Option 1`}),(0,B.jsx)(m,{value:`2`,children:`Option 2`}),(0,B.jsx)(m,{value:`3`,children:`Option 3`})]}),(0,B.jsx)(p,{placeholder:`Multi select`,name:`multiSelectFilter`,multiple:!0,children:G.map(e=>(0,B.jsxs)(m,{value:e,children:[(0,B.jsx)(g,{}),e]}))})]}),(0,B.jsxs)(b,{onExtractDisplayValue:e=>{switch(e.name){case`extraDateFilter`:return e.dom.inputValue}return String(e.value)},children:[(0,B.jsx)(s,{name:`extraTextFilter`,"data-label":`text filter`,placeholder:`Simple Text Filter`}),(0,B.jsx)(l,{name:`extraNumberFilter`,"data-label":`number filter`,placeholder:`Simple Number Filter`}),(0,B.jsx)(s,{name:`extraMinimumFilter`,"data-label":`minimum 3 `,placeholder:`type 3 char and more to approve`,validationList:[{validator:/.{3}/g,message:`you must enter 3 value`}]}),(0,B.jsx)(d,{name:`extraDateFilter`,"data-label":`date filter`,placeholder:`Simple Date Filter`,required:!0}),(0,B.jsx)(s,{name:`extraOneTime`,"data-label":`one time`,placeholder:`you can only use this one time`,"data-max-count":1})]})]}),onSearch:()=>{console.log(`search happened`)}},play:async({canvasElement:e})=>{let t=C(e),n=w(e);await j(n,[`extraTextFilter`,`extraNumberFilter`,`extraMinimumFilter`,`extraDateFilter`,`extraOneTime`]),M(n,`extraMinimumFilter`),await U(()=>{V(n.inputState).toBe(`FILL_VALUE`),V(O(n,`jb-input[name="extraMinimumFilter"]`)).toBeTruthy(),V(D(n).classList.contains(`--active`)).toBe(!1)}),await N(n,`jb-input[name="extraMinimumFilter"]`,`ab`),await U(()=>{V(D(n).classList.contains(`--active`)).toBe(!1)}),await N(n,`jb-input[name="extraMinimumFilter"]`,`c`,`abc`),await U(()=>{V(D(n).classList.contains(`--active`)).toBe(!0)}),await H.click(D(n)),await U(()=>{V(n.inputState).toBe(`SELECT_COLUMN`),V(t.value).toContainEqual({name:`extraMinimumFilter`,label:`minimum 3 `,value:`abc`,displayValue:`abc`}),V(A(t).textContent).toContain(`minimum 3 : abc`)})}},q={args:{children:(0,B.jsxs)(z.Fragment,{children:[(0,B.jsxs)(`div`,{slot:`filter`,children:[(0,B.jsx)(s,{placeholder:`text filter`,name:`textFilter`,size:`sm`}),(0,B.jsxs)(p,{placeholder:`Option filter`,name:`optionFilter`,size:`sm`,children:[(0,B.jsx)(m,{value:`1`,children:`Option 1`}),(0,B.jsx)(m,{value:`2`,children:`Option 2`}),(0,B.jsx)(m,{value:`3`,children:`Option 3`})]})]}),(0,B.jsxs)(b,{size:`sm`,onExtractDisplayValue:e=>{switch(e.name){case`extraDateFilter`:return e.dom.inputValue}return String(e.value)},children:[(0,B.jsx)(s,{"data-label":`text filter`,placeholder:`Simple Text Filter`,size:`sm`}),(0,B.jsx)(s,{name:`extraMinimumFilter`,"data-label":`minimum 3 `,placeholder:`type 3 char and more to approve`,size:`sm`,validationList:[{validator:/.{3}/g,message:`you must enter 3 value`}]}),(0,B.jsx)(d,{name:`extraDateFilter`,"data-label":`date filter`,placeholder:`Simple Date Filter`,size:`sm`,required:!0})]}),(0,B.jsx)(`div`,{slot:`divider`})]}),onSearch:()=>{console.log(`search happened`)},size:`sm`,isLoading:!0}},J={args:{},parameters:{themes:{themeOverride:`rtl`}}},Y={args:{...K.args,searchOnChange:!0}},X={render:()=>{let[e,t]=(0,z.useState)(!1);return(0,B.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,B.jsx)(x,{children:(0,B.jsxs)(b,{placeholder:`choose on of the options`,children:[(0,B.jsx)(s,{label:`Name`,name:`name`,required:!0,message:`enter your name`}),e&&(0,B.jsx)(l,{label:`Age`,name:`age`,message:`enter your age`})]})}),(0,B.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,gap:`0.5rem`},children:[(0,B.jsx)(a,{onClick:()=>t(!0),children:`Add Age Filter`}),(0,B.jsx)(a,{onClick:()=>t(!1),children:`Hide Age Filter`})]})]})},play:async({canvasElement:e})=>{let t=w(e),n=Array.from(e.querySelectorAll(`jb-button`)),r=n.find(e=>e.textContent?.includes(`Add Age Filter`)),i=n.find(e=>e.textContent?.includes(`Hide Age Filter`));V(r).toBeTruthy(),V(i).toBeTruthy(),await j(t,[`name`]),await H.click(r),await j(t,[`name`,`age`]),await H.click(i),await j(t,[`name`])}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
          <JBSelect placeholder='Multi select' name="multiSelectFilter" multiple>
            {companyList.map(x => <JBOption value={x}><JBCheckbox />{x}</JBOption>)}
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
}`,...X.parameters?.docs?.source}}},Z=[`Normal`,`Size`,`RTLSample`,`SearchOnChange`,`ChangeExtraFields`]}));Q();export{X as ChangeExtraFields,K as Normal,J as RTLSample,Y as SearchOnChange,q as Size,Z as __namedExportsOrder,W as default,Q as n,R as t};