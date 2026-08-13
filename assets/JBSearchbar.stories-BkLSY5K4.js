import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-D4DdPDUe.js";import{r as a,t as o}from"./react-Z8txRLwg.js";import{r as s,t as c}from"./react-DDVQ_ZD8.js";import{r as l,t as ee}from"./react-DsjY4nYg.js";import{n as u,t as d}from"./main-BDnm70Ga.js";import{r as f,t as p}from"./react-Ue9MzXZX.js";import{r as m,t as h}from"./react-DeAeFzVA.js";import{n as g,t as te}from"./react-lDJjkTpf.js";import{n as _,t as ne}from"./dist-C5DUfNXn.js";import{n as v,r as y,t as b}from"./react-CNnGX7qd.js";function x(e){let t=e.querySelector(`jb-searchbar`);return A(t).toBeTruthy(),A(t.shadowRoot).toBeTruthy(),t}function S(e){let t=e.querySelector(`jb-extra-filter`);return A(t).toBeTruthy(),A(t.shadowRoot).toBeTruthy(),t}function C(e){let t=e.shadowRoot?.querySelector(`.filter-select`);return A(t).toBeTruthy(),t}function w(e){let t=e.shadowRoot?.querySelector(`#ColumnSelectOptionList`);return A(t).toBeTruthy(),t}function T(e){let t=e.shadowRoot?.querySelector(`.intent-submit-button`);return A(t).toBeTruthy(),t}function E(e,t){let n=e.shadowRoot?.querySelector(`.intent-input-wrapper ${t}`);return A(n).toBeTruthy(),n}function re(e){let t=e.shadowRoot?.querySelector(`input`);return A(t).toBeTruthy(),t}function D(e,t=0){let n=e.shadowRoot?.querySelectorAll(`.filter-item`)[t];return A(n).toBeTruthy(),n}async function O(e,t){let n=w(e);return await M(()=>{A(n.optionList.map(e=>e.key)).toEqual(t)}),n.optionList}function ie(e,t){let n=C(e),r=w(e).optionList.find(e=>e.key===t);A(r).toBeTruthy(),n.value=r,n.dispatchEvent(new Event(`change`,{bubbles:!0}))}async function k(e,t,n,r=n){let i=E(e,t),a=re(i);return await j.type(a,n),await M(()=>{A(i.value).toBe(r)}),i}var A,j,M,N=t((()=>{({expect:A,userEvent:j,waitFor:M}=__STORYBOOK_MODULE_TEST__)})),P=e({ChangeExtraFields:()=>Z,Events:()=>X,FilterManagement:()=>Y,Normal:()=>W,RTLSample:()=>K,SearchInteraction:()=>J,SearchOnChange:()=>q,Size:()=>G,__namedExportsOrder:()=>Q,default:()=>V}),F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{F=n(r(),1),b(),c(),o(),ee(),d(),p(),h(),N(),ne(),te(),I=i(),{expect:L,fn:R,userEvent:z,waitFor:B}=__STORYBOOK_MODULE_TEST__,V={title:`Components/JBSearchbar`,component:y},H=_.helpers.multiple(()=>_.company.name(),{count:50}),U={searchbarLoad:R(),searchbarInit:R(),search:R(),extraFilterLoad:R(),extraFilterInit:R(),intentSubmit:R()},W={args:{children:(0,I.jsxs)(F.Fragment,{children:[(0,I.jsxs)(`div`,{slot:`filter`,children:[(0,I.jsx)(s,{placeholder:`text filter`,name:`textFilter`}),(0,I.jsx)(l,{placeholder:`number filter`,name:`numberFilter`,showControlButton:!0}),(0,I.jsxs)(f,{placeholder:`Option filter`,name:`optionFilter`,children:[(0,I.jsx)(m,{value:`1`,children:`Option 1`}),(0,I.jsx)(m,{value:`2`,children:`Option 2`}),(0,I.jsx)(m,{value:`3`,children:`Option 3`})]}),(0,I.jsx)(f,{placeholder:`Multi select`,name:`multiSelectFilter`,multiple:!0,children:H.map(e=>(0,I.jsxs)(m,{value:e,children:[(0,I.jsx)(g,{}),e]}))})]}),(0,I.jsxs)(v,{onExtractDisplayValue:e=>{switch(e.name){case`extraDateFilter`:return e.dom.inputValue}return String(e.value)},children:[(0,I.jsx)(s,{name:`extraTextFilter`,"data-label":`text filter`,placeholder:`Simple Text Filter`}),(0,I.jsx)(l,{name:`extraNumberFilter`,"data-label":`number filter`,placeholder:`Simple Number Filter`}),(0,I.jsx)(s,{name:`extraMinimumFilter`,"data-label":`minimum 3 `,placeholder:`type 3 char and more to approve`,validationList:[{validator:/.{3}/g,message:`you must enter 3 value`}]}),(0,I.jsx)(u,{name:`extraDateFilter`,"data-label":`date filter`,placeholder:`Simple Date Filter`,required:!0}),(0,I.jsx)(s,{name:`extraOneTime`,"data-label":`one time`,placeholder:`you can only use this one time`,"data-max-count":1})]})]}),onSearch:()=>{console.log(`search happened`)}},play:async({canvasElement:e})=>{let t=x(e),n=S(e);await O(n,[`extraTextFilter`,`extraNumberFilter`,`extraMinimumFilter`,`extraDateFilter`,`extraOneTime`]),ie(n,`extraMinimumFilter`),await B(()=>{L(n.inputState).toBe(`FILL_VALUE`),L(E(n,`jb-input[name="extraMinimumFilter"]`)).toBeTruthy(),L(T(n).classList.contains(`--active`)).toBe(!1)}),await k(n,`jb-input[name="extraMinimumFilter"]`,`ab`),await B(()=>{L(T(n).classList.contains(`--active`)).toBe(!1)}),await k(n,`jb-input[name="extraMinimumFilter"]`,`c`,`abc`),await B(()=>{L(T(n).classList.contains(`--active`)).toBe(!0)}),await z.click(T(n)),await B(()=>{L(n.inputState).toBe(`SELECT_COLUMN`),L(t.value).toContainEqual({name:`extraMinimumFilter`,label:`minimum 3 `,value:`abc`,displayValue:`abc`}),L(D(t).textContent).toContain(`minimum 3 : abc`)})}},G={args:{children:(0,I.jsxs)(F.Fragment,{children:[(0,I.jsxs)(`div`,{slot:`filter`,children:[(0,I.jsx)(s,{placeholder:`text filter`,name:`textFilter`,size:`sm`}),(0,I.jsxs)(f,{placeholder:`Option filter`,name:`optionFilter`,size:`sm`,children:[(0,I.jsx)(m,{value:`1`,children:`Option 1`}),(0,I.jsx)(m,{value:`2`,children:`Option 2`}),(0,I.jsx)(m,{value:`3`,children:`Option 3`})]})]}),(0,I.jsxs)(v,{size:`sm`,onExtractDisplayValue:e=>{switch(e.name){case`extraDateFilter`:return e.dom.inputValue}return String(e.value)},children:[(0,I.jsx)(s,{"data-label":`text filter`,placeholder:`Simple Text Filter`,size:`sm`}),(0,I.jsx)(s,{name:`extraMinimumFilter`,"data-label":`minimum 3 `,placeholder:`type 3 char and more to approve`,size:`sm`,validationList:[{validator:/.{3}/g,message:`you must enter 3 value`}]}),(0,I.jsx)(u,{name:`extraDateFilter`,"data-label":`date filter`,placeholder:`Simple Date Filter`,size:`sm`,required:!0})]}),(0,I.jsx)(`div`,{slot:`divider`})]}),onSearch:()=>{console.log(`search happened`)},size:`sm`,isLoading:!0}},K={args:{},parameters:{themes:{themeOverride:`rtl`}}},q={args:{...W.args,searchOnChange:!0}},J={args:{children:(0,I.jsx)(`div`,{slot:`filter`,children:(0,I.jsx)(s,{name:`query`,placeholder:`Search`})}),onSearch:R()},play:async({canvasElement:e,args:t})=>{let n=x(e);n.search(),await B(()=>{L(t.onSearch).toHaveBeenCalled(),L(n.value).toEqual([{name:`query`,label:`query`,value:``}])})}},Y={args:{children:(0,I.jsx)(`div`,{slot:`filter`,children:(0,I.jsx)(s,{name:`query`,placeholder:`Search`})})},play:async({canvasElement:e})=>{let t=x(e);t.filterList.push({name:`status`,label:`Status`,value:`active`,displayValue:`Active`}),await B(()=>{L(t.value).toContainEqual({name:`status`,label:`Status`,value:`active`,displayValue:`Active`}),L(D(t).textContent).toContain(`Status: Active`)}),t.deleteFilter(0),await B(()=>L(t.filterList).toHaveLength(0))}},X={render:()=>(0,I.jsx)(y,{onLoad:U.searchbarLoad,onInit:U.searchbarInit,onSearch:U.search,children:(0,I.jsx)(v,{onLoad:U.extraFilterLoad,onInit:U.extraFilterInit,onIntentSubmit:U.intentSubmit,children:(0,I.jsx)(s,{name:`status`,"data-label":`Status`})})}),play:async({canvasElement:e})=>{let t=x(e),n=S(e);t.dispatchEvent(new CustomEvent(`load`)),t.dispatchEvent(new CustomEvent(`init`)),t.dispatchEvent(new CustomEvent(`search`)),n.dispatchEvent(new CustomEvent(`load`)),n.dispatchEvent(new CustomEvent(`init`)),n.dispatchEvent(new CustomEvent(`intent-submit`,{detail:{name:`status`,label:`Status`,value:`active`,displayValue:`Active`}})),await B(()=>{L(U.searchbarLoad).toHaveBeenCalled(),L(U.searchbarInit).toHaveBeenCalled(),L(U.search).toHaveBeenCalled(),L(U.extraFilterLoad).toHaveBeenCalled(),L(U.extraFilterInit).toHaveBeenCalled(),L(U.intentSubmit).toHaveBeenCalled()})}},Z={render:()=>{let[e,t]=(0,F.useState)(!1);return(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,I.jsx)(y,{children:(0,I.jsxs)(v,{placeholder:`choose on of the options`,children:[(0,I.jsx)(s,{label:`Name`,name:`name`,required:!0,message:`enter your name`}),e&&(0,I.jsx)(l,{label:`Age`,name:`age`,message:`enter your age`})]})}),(0,I.jsxs)(`div`,{style:{display:`flex`,flexDirection:`row`,gap:`0.5rem`},children:[(0,I.jsx)(a,{onClick:()=>t(!0),children:`Add Age Filter`}),(0,I.jsx)(a,{onClick:()=>t(!1),children:`Hide Age Filter`})]})]})},play:async({canvasElement:e})=>{let t=S(e),n=Array.from(e.querySelectorAll(`jb-button`)),r=n.find(e=>e.textContent?.includes(`Add Age Filter`)),i=n.find(e=>e.textContent?.includes(`Hide Age Filter`));L(r).toBeTruthy(),L(i).toBeTruthy(),await O(t,[`name`]),await z.click(r),await O(t,[`name`,`age`]),await z.click(i),await O(t,[`name`])}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    // placeholder: 'نوع فیلتر را انتخاب کنید',
  },
  parameters: {
    themes: {
      themeOverride: 'rtl'
    }
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Normal.args,
    searchOnChange: true
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div slot="filter">
        <JBInput name="query" placeholder="Search" />
      </div>,
    onSearch: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const searchbar = getSearchbar(canvasElement);
    searchbar.search();
    await waitFor(() => {
      expect(args.onSearch).toHaveBeenCalled();
      expect(searchbar.value).toEqual([{
        name: 'query',
        label: 'query',
        value: ''
      }]);
    });
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div slot="filter"><JBInput name="query" placeholder="Search" /></div>
  },
  play: async ({
    canvasElement
  }) => {
    const searchbar = getSearchbar(canvasElement);
    searchbar.filterList.push({
      name: 'status',
      label: 'Status',
      value: 'active',
      displayValue: 'Active'
    });
    await waitFor(() => {
      expect(searchbar.value).toContainEqual({
        name: 'status',
        label: 'Status',
        value: 'active',
        displayValue: 'Active'
      });
      expect(getFilterChip(searchbar).textContent).toContain('Status: Active');
    });
    searchbar.deleteFilter(0);
    await waitFor(() => expect(searchbar.filterList).toHaveLength(0));
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <JBSearchbar onLoad={lifecycleCallbacks.searchbarLoad} onInit={lifecycleCallbacks.searchbarInit} onSearch={lifecycleCallbacks.search}>
      <JBExtraFilter onLoad={lifecycleCallbacks.extraFilterLoad} onInit={lifecycleCallbacks.extraFilterInit} onIntentSubmit={lifecycleCallbacks.intentSubmit}>
        <JBInput name="status" data-label="Status" />
      </JBExtraFilter>
    </JBSearchbar>,
  play: async ({
    canvasElement
  }) => {
    const searchbar = getSearchbar(canvasElement);
    const extraFilter = getExtraFilter(canvasElement);
    searchbar.dispatchEvent(new CustomEvent('load'));
    searchbar.dispatchEvent(new CustomEvent('init'));
    searchbar.dispatchEvent(new CustomEvent('search'));
    extraFilter.dispatchEvent(new CustomEvent('load'));
    extraFilter.dispatchEvent(new CustomEvent('init'));
    extraFilter.dispatchEvent(new CustomEvent('intent-submit', {
      detail: {
        name: 'status',
        label: 'Status',
        value: 'active',
        displayValue: 'Active'
      }
    }));
    await waitFor(() => {
      expect(lifecycleCallbacks.searchbarLoad).toHaveBeenCalled();
      expect(lifecycleCallbacks.searchbarInit).toHaveBeenCalled();
      expect(lifecycleCallbacks.search).toHaveBeenCalled();
      expect(lifecycleCallbacks.extraFilterLoad).toHaveBeenCalled();
      expect(lifecycleCallbacks.extraFilterInit).toHaveBeenCalled();
      expect(lifecycleCallbacks.intentSubmit).toHaveBeenCalled();
    });
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Normal`,`Size`,`RTLSample`,`SearchOnChange`,`SearchInteraction`,`FilterManagement`,`Events`,`ChangeExtraFields`]}));$();export{Z as ChangeExtraFields,X as Events,Y as FilterManagement,W as Normal,K as RTLSample,J as SearchInteraction,q as SearchOnChange,G as Size,Q as __namedExportsOrder,V as default,$ as n,P as t};