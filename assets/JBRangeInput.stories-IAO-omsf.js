import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-BWNGhEti.js";import{r as a,t as o}from"./react-6HkkU_B32.js";var s=e({AttributeAndFormSynchronization:()=>F,ControlledRange:()=>N,CustomStep:()=>b,DecimalStep:()=>y,Disabled:()=>D,InForm:()=>P,MajorAndMinorTicks:()=>C,NegativeMin:()=>k,NegativeRange:()=>A,Normal:()=>h,PersianNumber:()=>S,Range:()=>T,RangeDecimalStep:()=>E,Required:()=>j,SizeVariants:()=>v,StartPoint:()=>g,WithError:()=>M,WithMessage:()=>O,WithTickLabels:()=>x,WithoutBalloonRotation:()=>_,WithoutTickLabels:()=>w,__namedExportsOrder:()=>I,default:()=>m});function c(e){let t=(0,u.useRef)(null);return(0,u.useEffect)(()=>{t.current?.reportValidity()},[]),(0,d.jsx)(a,{...e,ref:t})}function l(){let[e,t]=(0,u.useState)([2,8]);return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(a,{mode:`range`,min:0,max:10,value:e,onChange:e=>t(e.currentTarget.value)}),(0,d.jsxs)(`output`,{children:[`Selected range: `,Array.isArray(e)?e.join(` - `):e]})]})}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=t((()=>{u=n(r(),1),o(),d=i(),{expect:f,waitFor:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/form elements/JBRangeInput`,component:a,decorators:[e=>(0,d.jsx)(`div`,{style:{marginBlock:`4rem`},children:(0,d.jsx)(e,{})})],args:{label:`Range value`,min:0,max:10,step:1,tickStep:1,startPoint:0},argTypes:{label:{control:`text`},min:{control:`number`},max:{control:`number`},step:{control:`number`},tickStep:{control:`number`},startPoint:{control:`number`},minorTickStep:{control:`number`},showTickLabels:{control:`boolean`},showPersianNumber:{control:`boolean`},disableBalloonRotation:{control:`boolean`},size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},mode:{control:`inline-radio`,options:[`single`,`range`]},disabled:{control:`boolean`},required:{control:`boolean`},message:{control:`text`},error:{control:`text`}}},h={play:async({canvasElement:e})=>{let t=e.querySelector(`jb-range-input`),n=t.shadowRoot.querySelector(`[part='label']`),r=t.shadowRoot.querySelector(`[part='range']`),i=t.shadowRoot.querySelector(`[part~='range-handle']`);await p(()=>f(n.textContent).toBe(`Range value`)),f(r.getAttribute(`aria-labelledby`)).toBe(`range-label`),n.click(),f(t.shadowRoot.activeElement).toBe(i)}},g={name:`Start Point`,args:{min:-10,max:20,step:5,startPoint:-5,value:10},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-range-input`),n=t.shadowRoot.querySelector(`[part='range-active-line']`),r=t.shadowRoot.querySelector(`[part='range-line']`);await p(()=>f(t.getAttribute(`start-point`)).toBe(`-5`)),f(t.value).toBe(10);let i=Number(r.getAttribute(`x1`)),a=i+5/30*(Number(r.getAttribute(`x2`))-i);f(Number(n.getAttribute(`x1`))).toBeCloseTo(a,5)}},_={args:{value:5,disableBalloonRotation:!0}},v={args:{tickStep:5,value:5,showTickLabels:!0},render:e=>(0,d.jsx)(`div`,{style:{display:`grid`,gap:`2rem`},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(t=>(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`span`,{children:t}),(0,d.jsx)(a,{...e,size:t})]},t))})},y={args:{max:3,step:.1,tickStep:1,value:1.2}},b={args:{max:50,step:5,tickStep:5,value:10}},x={args:{max:100,step:5,tickStep:25,showTickLabels:!0,value:50}},S={args:{max:10,tickStep:5,showTickLabels:!0,showPersianNumber:!0,value:5},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-range-input`),n=t.shadowRoot.querySelectorAll(`[part='tick-label']`),r=t.shadowRoot.querySelector(`[part~='range-handle']`);await p(()=>f([...n].map(e=>e.textContent)).toEqual([`۰`,`۵`,`۱۰`])),f(r.getAttribute(`aria-valuetext`)).toBe(`۵`),f(t.value).toBe(5)}},C={args:{max:100,step:5,tickStep:25,minorTickStep:5,showTickLabels:!0,tickLabelFormatter:e=>`${e}%`,value:50}},w={args:{max:100,tickStep:25,value:50}},T={args:{mode:`range`,value:[2,8]}},E={args:{mode:`range`,value:[2,8],step:.1}},D={args:{value:4,disabled:!0},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-range-input`),n=t.shadowRoot.querySelector(`.range-handle`);await p(()=>f(t.disabled).toBe(!0)),f(t.hasAttribute(`disabled`)).toBe(!0),f(n.getAttribute(`tabindex`)).toBe(`-1`),n.dispatchEvent(new KeyboardEvent(`keydown`,{key:`ArrowRight`,bubbles:!0})),f(t.value).toBe(4)}},O={args:{value:4,message:`Choose a value between 0 and 10`}},k={args:{min:-10,max:10,value:-4}},A={args:{mode:`range`,min:-100,max:100,step:10,tickStep:20,value:[-40,60]}},j={args:{name:`score`,required:!0,message:`Select a score`},render:e=>(0,d.jsxs)(`form`,{onSubmit:e=>e.preventDefault(),children:[(0,d.jsx)(`p`,{id:`required-range-label`,children:`Required score`}),(0,d.jsx)(a,{...e,"aria-labelledby":`required-range-label`}),(0,d.jsx)(`button`,{type:`submit`,children:`Submit`})]})},M={args:{value:4,message:`Choose a value between 0 and 10`,error:`This value is not available`},render:e=>(0,d.jsx)(c,{...e})},N={render:()=>(0,d.jsx)(l,{})},P={render:()=>(0,d.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let t=new FormData(e.currentTarget);alert(`Submitted price: ${t.get(`price`)}`)},children:[(0,d.jsx)(`p`,{id:`price-range-label`,children:`Price range`}),(0,d.jsx)(a,{"aria-labelledby":`price-range-label`,name:`price`,mode:`range`,min:0,max:100,step:5,initialValue:[20,80]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`button`,{type:`reset`,children:`Reset`}),(0,d.jsx)(`button`,{type:`submit`,children:`Submit`})]})]})},F={render:()=>(0,d.jsx)(`div`,{dangerouslySetInnerHTML:{__html:`<form><jb-range-input name="range" value="2,8" mode="range"></jb-range-input></form>`}}),play:async({canvasElement:e})=>{let t=e.querySelector(`form`),n=t.querySelector(`jb-range-input`);await p(()=>f(n.value).toEqual([2,8])),n.setAttribute(`max`,`5`),f(n.value).toEqual([2,5]),f(n.getAttribute(`value`)).toBe(`2,5`),f(new FormData(t).get(`range`)).toBe(`2,5`),n.setAttribute(`mode`,`single`),f(n.value).toBe(5),f(new FormData(t).get(`range`)).toBe(`5`)}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const rangeInput = canvasElement.querySelector<JBRangeInputWebComponent>("jb-range-input")!;
    const label = rangeInput.shadowRoot!.querySelector<HTMLLabelElement>("[part='label']")!;
    const range = rangeInput.shadowRoot!.querySelector<SVGSVGElement>("[part='range']")!;
    const firstHandle = rangeInput.shadowRoot!.querySelector<SVGCircleElement>("[part~='range-handle']")!;
    await waitFor(() => expect(label.textContent).toBe("Range value"));
    expect(range.getAttribute("aria-labelledby")).toBe("range-label");
    label.click();
    expect(rangeInput.shadowRoot!.activeElement).toBe(firstHandle);
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Start Point",
  args: {
    min: -10,
    max: 20,
    step: 5,
    startPoint: -5,
    value: 10
  },
  play: async ({
    canvasElement
  }) => {
    const rangeInput = canvasElement.querySelector<JBRangeInputWebComponent>("jb-range-input")!;
    const line = rangeInput.shadowRoot!.querySelector<SVGLineElement>("[part='range-active-line']")!;
    const track = rangeInput.shadowRoot!.querySelector<SVGLineElement>("[part='range-line']")!;
    await waitFor(() => expect(rangeInput.getAttribute("start-point")).toBe("-5"));
    expect(rangeInput.value).toBe(10);
    const trackStart = Number(track.getAttribute("x1"));
    const trackEnd = Number(track.getAttribute("x2"));
    const expectedStart = trackStart + (-5 - -10) / (20 - -10) * (trackEnd - trackStart);
    expect(Number(line.getAttribute("x1"))).toBeCloseTo(expectedStart, 5);
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: 5,
    disableBalloonRotation: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    tickStep: 5,
    value: 5,
    showTickLabels: true
  },
  render: args => <div style={{
    display: "grid",
    gap: "2rem"
  }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <div key={size}>
          <span>{size}</span>
          <JBRangeInput {...args} size={size} />
        </div>)}
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    max: 3,
    step: 0.1,
    tickStep: 1,
    value: 1.2
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    max: 50,
    step: 5,
    tickStep: 5,
    value: 10
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    max: 100,
    step: 5,
    tickStep: 25,
    showTickLabels: true,
    value: 50
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    max: 10,
    tickStep: 5,
    showTickLabels: true,
    showPersianNumber: true,
    value: 5
  },
  play: async ({
    canvasElement
  }) => {
    const rangeInput = canvasElement.querySelector<JBRangeInputWebComponent>("jb-range-input")!;
    const tickLabels = rangeInput.shadowRoot!.querySelectorAll<HTMLElement>("[part='tick-label']");
    const handle = rangeInput.shadowRoot!.querySelector<SVGCircleElement>("[part~='range-handle']")!;
    await waitFor(() => expect([...tickLabels].map(label => label.textContent)).toEqual(["۰", "۵", "۱۰"]));
    expect(handle.getAttribute("aria-valuetext")).toBe("۵");
    expect(rangeInput.value).toBe(5);
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    max: 100,
    step: 5,
    tickStep: 25,
    minorTickStep: 5,
    showTickLabels: true,
    tickLabelFormatter: value => \`\${value}%\`,
    value: 50
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    max: 100,
    tickStep: 25,
    value: 50
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "range",
    value: [2, 8]
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "range",
    value: [2, 8],
    step: 0.1
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    value: 4,
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const rangeInput = canvasElement.querySelector<JBRangeInputWebComponent>("jb-range-input")!;
    const handle = rangeInput.shadowRoot!.querySelector<SVGCircleElement>(".range-handle")!;
    await waitFor(() => expect(rangeInput.disabled).toBe(true));
    expect(rangeInput.hasAttribute("disabled")).toBe(true);
    expect(handle.getAttribute("tabindex")).toBe("-1");
    handle.dispatchEvent(new KeyboardEvent("keydown", {
      key: "ArrowRight",
      bubbles: true
    }));
    expect(rangeInput.value).toBe(4);
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    value: 4,
    message: "Choose a value between 0 and 10"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    min: -10,
    max: 10,
    value: -4
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "range",
    min: -100,
    max: 100,
    step: 10,
    tickStep: 20,
    value: [-40, 60]
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    name: "score",
    required: true,
    message: "Select a score"
  },
  render: args => <form onSubmit={event => event.preventDefault()}>
      <p id="required-range-label">Required score</p>
      <JBRangeInput {...args} aria-labelledby="required-range-label" />
      <button type="submit">Submit</button>
    </form>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    value: 4,
    message: "Choose a value between 0 and 10",
    error: "This value is not available"
  },
  render: args => <ErrorExample {...args} />
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExample />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <form onSubmit={event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    alert(\`Submitted price: \${formData.get("price")}\`);
  }}>
      <p id="price-range-label">Price range</p>
      <JBRangeInput aria-labelledby="price-range-label" name="price" mode="range" min={0} max={100} step={5} initialValue={[20, 80]} />
      <div>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </div>
    </form>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div dangerouslySetInnerHTML={{
    __html: '<form><jb-range-input name="range" value="2,8" mode="range"></jb-range-input></form>'
  }} />,
  play: async ({
    canvasElement
  }) => {
    const form = canvasElement.querySelector("form")!;
    const rangeInput = form.querySelector<JBRangeInputWebComponent>("jb-range-input")!;
    await waitFor(() => expect(rangeInput.value).toEqual([2, 8]));
    rangeInput.setAttribute("max", "5");
    expect(rangeInput.value).toEqual([2, 5]);
    expect(rangeInput.getAttribute("value")).toBe("2,5");
    expect(new FormData(form).get("range")).toBe("2,5");
    rangeInput.setAttribute("mode", "single");
    expect(rangeInput.value).toBe(5);
    expect(new FormData(form).get("range")).toBe("5");
  }
}`,...F.parameters?.docs?.source}}},I=[`Normal`,`StartPoint`,`WithoutBalloonRotation`,`SizeVariants`,`DecimalStep`,`CustomStep`,`WithTickLabels`,`PersianNumber`,`MajorAndMinorTicks`,`WithoutTickLabels`,`Range`,`RangeDecimalStep`,`Disabled`,`WithMessage`,`NegativeMin`,`NegativeRange`,`Required`,`WithError`,`ControlledRange`,`InForm`,`AttributeAndFormSynchronization`]}));L();export{F as AttributeAndFormSynchronization,N as ControlledRange,b as CustomStep,y as DecimalStep,D as Disabled,P as InForm,C as MajorAndMinorTicks,k as NegativeMin,A as NegativeRange,h as Normal,S as PersianNumber,T as Range,E as RangeDecimalStep,j as Required,v as SizeVariants,g as StartPoint,M as WithError,O as WithMessage,x as WithTickLabels,_ as WithoutBalloonRotation,w as WithoutTickLabels,I as __namedExportsOrder,m as default,L as n,s as t};