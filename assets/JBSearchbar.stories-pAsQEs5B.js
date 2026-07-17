import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-CxfI9dM7.js";import{r as a,t as o}from"./react-BsidYpTV.js";import{r as s,t as c}from"./react-Dyd6Om8U.js";import{r as l,t as u}from"./react-DHYupWMP.js";import{n as d,t as f}from"./main-Bwyhkydt.js";import{a as p,r as m,t as h}from"./react-CI_BILsO.js";import{n as g,r as _,t as v}from"./react-GY60dSUV.js";function y(e){let t=e.querySelector(`jb-searchbar`);return A(t).toBeTruthy(),A(t.shadowRoot).toBeTruthy(),t}function b(e){let t=e.querySelector(`jb-extra-filter`);return A(t).toBeTruthy(),A(t.shadowRoot).toBeTruthy(),t}function x(e){let t=e.shadowRoot?.querySelector(`.filter-select`);return A(t).toBeTruthy(),t}function S(e){let t=e.shadowRoot?.querySelector(`#ColumnSelectOptionList`);return A(t).toBeTruthy(),t}function C(e){let t=e.shadowRoot?.querySelector(`.intent-submit-button`);return A(t).toBeTruthy(),t}function w(e,t){let n=e.shadowRoot?.querySelector(`.intent-input-wrapper ${t}`);return A(n).toBeTruthy(),n}function T(e){let t=e.shadowRoot?.querySelector(`input`);return A(t).toBeTruthy(),t}function E(e,t=0){let n=e.shadowRoot?.querySelectorAll(`.filter-item`)[t];return A(n).toBeTruthy(),n}async function D(e,t){let n=S(e);return await M(()=>{A(n.optionList.map(e=>e.key)).toEqual(t)}),n.optionList}function O(e,t){let n=x(e),r=S(e).optionList.find(e=>e.key===t);A(r).toBeTruthy(),n.value=r,n.dispatchEvent(new Event(`change`,{bubbles:!0}))}async function k(e,t,n,r=n){let i=w(e,t),a=T(i);return await j.type(a,n),await M(()=>{A(i.value).toBe(r)}),i}var A,j,M,N=t((()=>{({expect:A,userEvent:j,waitFor:M}=__STORYBOOK_MODULE_TEST__)})),P=e({ChangeExtraFields:()=>G,Normal:()=>V,RTLSample:()=>U,SearchOnChange:()=>W,Size:()=>H,__namedExportsOrder:()=>K,default:()=>B}),F,I,L,R,z,B,V,H,U,W,G,K,q=t((()=>{F=n(r(),1),v(),c(),o(),u(),f(),h(),N(),I=i(),{expect:L,userEvent:R,waitFor:z}=__STORYBOOK_MODULE_TEST__,B={title:`Components/JBSearchbar`,component:_},V={args:{children:(0,I.jsxs)(F.Fragment,{children:[(0,I.jsxs)(`div`,{slot:`filter`,children:[(0,I.jsx)(s,{placeholder:`text filter`,name:`textFilter`}),(0,I.jsx)(l,{placeholder:`number filter`,name:`numberFilter`,showControlButton:!0}),(0,I.jsxs)(p,{placeholder:`Option filter`,name:`optionFilter`,children:[(0,I.jsx)(m,{value:`1`,children:`Option 1`}),(0,I.jsx)(m,{value:`2`,children:`Option 2`}),(0,I.jsx)(m,{value:`3`,children:`Option 3`})]})]}),(0,I.jsxs)(g,{onExtractDisplayValue:e=>{switch(e.name){case`extraDateFilter`:return e.dom.inputValue}return String(e.value)},children:[(0,I.jsx)(s,{name:`extraTextFilter`,"data-label":`text filter`,placeholder:`Simple Text Filter`}),(0,I.jsx)(l,{name:`extraNumberFilter`,"data-label":`number filter`,placeholder:`Simple Number Filter`}),(0,I.jsx)(s,{name:`extraMinimumFilter`,"data-label":`minimum 3 `,placeholder:`type 3 char and more to approve`,validationList:[{validator:/.{3}/g,message:`you must enter 3 value`}]}),(0,I.jsx)(d,{name:`extraDateFilter`,"data-label":`date filter`,placeholder:`Simple Date Filter`,required:!0}),(0,I.jsx)(s,{name:`extraOneTime`,"data-label":`one time`,placeholder:`you can only use this one time`,"data-max-count":1})]})]}),onSearch:()=>{console.log(`search happened`)}},play:async({canvasElement:e})=>{let t=y(e),n=b(e);await D(n,[`extraTextFilter`,`extraNumberFilter`,`extraMinimumFilter`,`extraDateFilter`,`extraOneTime`]),O(n,`extraMinimumFilter`),await z(()=>{L(n.inputState).toBe(`FILL_VALUE`),L(w(n,`jb-input[name="extraMinimumFilter"]`)).toBeTruthy(),L(C(n).classList.contains(`--active`)).toBe(!1)}),await k(n,`jb-input[name="extraMinimumFilter"]`,`ab`),await z(()=>{L(C(n).classList.contains(`--active`)).toBe(!1)}),await k(n,`jb-input[name="extraMinimumFilter"]`,`c`,`abc`),await z(()=>{L(C(n).classList.contains(`--active`)).toBe(!0)}),await R.click(C(n)),await z(()=>{L(n.inputState).toBe(`SELECT_COLUMN`),L(t.value).toContainEqual({name:`extraMinimumFilter`,label:`minimum 3 `,value:`abc`,displayValue:`abc`}),L(E(t).textContent).toContain(`minimum 3 : abc`)})}},H={args:{children:(0,I.jsxs)(F.Fragment,{children:[(0,I.jsxs)(`div`,{slot:`filter`,children:[(0,I.jsx)(s,{placeholder:`text filter`,name:`textFilter`,size:`sm`}),(0,I.jsxs)(p,{placeholder:`Option filter`,name:`optionFilter`,size:`sm`,children:[(0,I.jsx)(m,{value:`1`,children:`Option 1`}),(0,I.jsx)(m,{value:`2`,children:`Option 2`}),(0,I.jsx)(m,{value:`3`,children:`Option 3`})]})]}),(0,I.jsxs)(g,{size:`sm`,onExtractDisplayValue:e=>{switch(e.name){case`extraDateFilter`:return e.dom.inputValue}return String(e.value)},children:[(0,I.jsx)(s,{"data-label":`text filter`,placeholder:`Simple Text Filter`,size:`sm`}),(0,I.jsx)(s,{name:`extraMinimumFilter`,"data-label":`minimum 3 `,placeholder:`type 3 char and more to approve`,size:`sm`,validationList:[{validator:/.{3}/g,message:`you must enter 3 value`}]}),(0,I.jsx)(d,{name:`extraDateFilter`,"data-label":`date filter`,placeholder:`Simple Date Filter`,size:`sm`,required:!0})]}),(0,I.jsx)(`div`,{slot:`divider`})]}),onSearch:()=>{console.log(`search happened`)},size:`sm`,isLoading:!0}},U={args:{},parameters:{themes:{themeOverride:`rtl`}}},W={args:{...V.args,searchOnChange:!0}},G={render:()=>{let[e,t]=(0,F.useState)(!1);return(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,I.jsx)(_,{children:(0,I.jsxs)(g,{placeholder:`choose on of the options`,children:[(0,I.jsx)(s,{label:`Name`,name:`name`,required:!0,message:`enter your name`}),e&&(0,I.jsx)(l,{label:`Age`,name:`age`,message:`enter your age`})]})}),(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,gap:`0.5rem`},children:[(0,I.jsx)(a,{onClick:()=>t(!0),children:`Add Age Filter`}),(0,I.jsx)(a,{onClick:()=>t(!1),children:`Hide Age Filter`})]})]})},play:async({canvasElement:e})=>{let t=b(e),n=Array.from(e.querySelectorAll(`jb-button`)),r=n.find(e=>e.textContent?.includes(`Add Age Filter`)),i=n.find(e=>e.textContent?.includes(`Hide Age Filter`));L(r).toBeTruthy(),L(i).toBeTruthy(),await D(t,[`name`]),await R.click(r),await D(t,[`name`,`age`]),await R.click(i),await D(t,[`name`])}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    // placeholder: 'نوع فیلتر را انتخاب کنید',
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    searchOnChange: true
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K=[`Normal`,`Size`,`RTLSample`,`SearchOnChange`,`ChangeExtraFields`]}));q();export{G as ChangeExtraFields,V as Normal,U as RTLSample,W as SearchOnChange,H as Size,K as __namedExportsOrder,B as default,q as n,P as t};