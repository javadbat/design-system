import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-Cb2Q_UG-.js";import{r as a,t as o}from"./react-CwQebMD0.js";var s=e({ArrowKeyParameters:()=>b,Disabled:()=>S,ImperativePicker:()=>w,InvalidColor:()=>C,LockedOKLCH:()=>v,LockedRGB:()=>_,Normal:()=>g,RadiusAndCornerShapes:()=>E,Required:()=>D,SizeVariants:()=>x,WithoutAlpha:()=>y,__namedExportsOrder:()=>O,default:()=>h});function c(e){return e.querySelector(`jb-color-input`)}var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k=t((()=>{o(),l=n(r(),1),u=i(),{expect:d,fn:f,userEvent:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/form elements/Inputs/JBColorInput`,component:a,args:{label:`Color`,value:`#3b66f5`,alphaEnabled:!0,onInput:f(),onChange:f()},argTypes:{colorSpace:{control:`inline-radio`,options:[null,`rgb`,`oklch`]},size:{control:`inline-radio`,options:[`xs`,`sm`,`md`,`lg`,`xl`]},alphaEnabled:{control:`boolean`},disabled:{control:`boolean`}}},g={play:async({canvasElement:e,args:t})=>{let n=c(e),r=n.shadowRoot.querySelector(`input`),i=n.shadowRoot.querySelector(`.color-trigger`);await p.click(i),await m(()=>d(n.isOpen).toBe(!0)),d(n.colorInputElements.popover.isOpen).toBe(!0);let a=n.elements.inputBox.getBoundingClientRect(),o=n.colorInputElements.popover.elements.componentWrapper.getBoundingClientRect();d(Math.abs(o.left-a.left)).toBeLessThan(1),d(Math.abs(o.top-a.bottom)).toBeLessThan(1),r.focus(),await p.keyboard(`{Control>}a{/Control}`),await p.keyboard(`oklch(0.7 0.15 250)`),d(n.valueObject?.colorSpace).toBe(`oklch`),d(t.onInput).toHaveBeenCalled(),n.colorInputElements.picker.shadowRoot.querySelector(`.surface`).focus(),d(n.isOpen).toBe(!0);let s=document.createElement(`button`);e.append(s),s.focus(),await m(()=>d(n.isOpen).toBe(!1)),s.remove()}},_={args:{colorSpace:`rgb`,value:`oklch(0.72 0.16 250 / 0.8)`},play:async({canvasElement:e})=>{let t=c(e);await m(()=>d(t.colorInputElements.picker.colorSpace).toBe(`rgb`))}},v={args:{colorSpace:`oklch`,value:`rgb(59 102 245 / 0.8)`},play:async({canvasElement:e})=>{let t=c(e);await m(()=>d(t.colorInputElements.picker.colorSpace).toBe(`oklch`)),d(t.colorSpace).toBe(`oklch`),d(t.valueObject?.colorSpace).toBe(`rgb`)}},y={args:{alphaEnabled:!1},play:async({canvasElement:e})=>{let t=c(e);await m(()=>d(t.colorInputElements.picker.alphaEnabled).toBe(!1))}},b={args:{value:`rgb(10 20 30 / 0.5)`},play:async({canvasElement:e,args:t})=>{let n=c(e),r=n.shadowRoot.querySelector(`input`);r.focus(),r.setSelectionRange(n.value.indexOf(`20`)+1,n.value.indexOf(`20`)+1),await p.keyboard(`{ArrowUp}`),d(n.value).toBe(`rgb(10 21 30 / 0.5)`),r.setSelectionRange(n.value.indexOf(`0.5`)+2,n.value.indexOf(`0.5`)+2),await p.keyboard(`{ArrowDown}`),d(n.value).toBe(`rgb(10 21 30 / 0.4)`),d(t.onInput).toHaveBeenCalledTimes(2),n.value=`oklch(0.7 0.15 250 / 0.5)`,r.setSelectionRange(n.value.indexOf(`0.15`)+2,n.value.indexOf(`0.15`)+2),await p.keyboard(`{ArrowUp}`),d(n.value).toBe(`oklch(0.7 0.151 250 / 0.5)`),r.setSelectionRange(n.value.indexOf(`250`)+1,n.value.indexOf(`250`)+1),await p.keyboard(`{ArrowDown}`),d(n.value).toBe(`oklch(0.7 0.151 249 / 0.5)`)}},x={render:e=>(0,u.jsx)(`div`,{style:{display:`grid`,gap:`1rem`,maxWidth:`24rem`},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(t=>(0,l.createElement)(a,{...e,key:t,label:t.toUpperCase(),size:t}))}),play:async({canvasElement:e})=>{let t=Array.from(e.querySelectorAll(`jb-color-input`));await m(()=>d(t).toHaveLength(5)),d(t.map(e=>e.getAttribute(`size`))).toEqual([`xs`,`sm`,`md`,`lg`,`xl`]);let n=t.map(e=>parseFloat(getComputedStyle(e.colorInputElements.trigger).height));d(n).toEqual([...n].sort((e,t)=>e-t)),d(new Set(n).size).toBe(5);for(let e of t){let t=e.elements.input.getBoundingClientRect(),n=e.colorInputElements.trigger.getBoundingClientRect(),r=e.colorInputElements.preview.getBoundingClientRect(),i=t.top+t.height/2,a=n.top+n.height/2,o=r.top+r.height/2;d(Math.abs(a-i)).toBeLessThan(1),d(Math.abs(o-i)).toBeLessThan(1),d(n.width).toBeCloseTo(n.height,1)}}},S={args:{disabled:!0,label:`Disabled color`,value:`#94a3b8`},play:async({canvasElement:e})=>{let t=c(e),n=t.shadowRoot.querySelector(`input`),r=t.colorInputElements.trigger;await m(()=>d(r.disabled).toBe(!0)),d(t.disabled).toBe(!0),d(n.disabled).toBe(!0),d(t.colorInputElements.picker.disabled).toBe(!0),d(t.isOpen).toBe(!1),await p.click(r),d(t.isOpen).toBe(!1)}},C={args:{label:`CSS color`,value:`not-a-color`},play:async({canvasElement:e})=>{let t=c(e);await m(()=>d(t.value).toBe(`not-a-color`)),d(t.valueObject).toBeNull(),d(t.reportValidity()).toBe(!1),d(t.validationMessage.length).toBeGreaterThan(0)}},w={play:async({canvasElement:e})=>{let t=c(e);t.openPicker(),await m(()=>d(t.isOpen).toBe(!0)),d(t.colorInputElements.trigger.getAttribute(`aria-expanded`)).toBe(`true`),t.closePicker(),await m(()=>d(t.isOpen).toBe(!1)),d(t.colorInputElements.trigger.getAttribute(`aria-expanded`)).toBe(`false`)}},T=[{label:`Square`,radius:`0`,shape:`round`},{label:`Rounded`,radius:`0.75rem`,shape:`round`},{label:`Scoop`,radius:`1.25rem`,shape:`scoop`},{label:`Bevel`,radius:`1.25rem`,shape:`bevel`},{label:`Squircle`,radius:`1.5rem`,shape:`squircle`}],E={render:e=>(0,u.jsx)(`div`,{style:{display:`grid`,gap:`1rem`,gridTemplateColumns:`repeat(auto-fit, minmax(16rem, 1fr))`},children:T.map(({label:t,radius:n,shape:r})=>(0,l.createElement)(a,{...e,key:t,label:`${t} · ${n}`,style:{"--jb-input-border-radius":n,"--jb-input-corner-shape":r}}))})},D={args:{value:``,required:!0},play:async({canvasElement:e})=>{let t=c(e);t.shadowRoot.querySelector(`input`).focus(),await p.tab(),await m(()=>d(t.checkValidity()).toBe(!1))}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const colorInput = getColorInput(canvasElement);
    const nativeInput = colorInput.shadowRoot!.querySelector<HTMLInputElement>("input")!;
    const trigger = colorInput.shadowRoot!.querySelector<HTMLButtonElement>(".color-trigger")!;
    await userEvent.click(trigger);
    await waitFor(() => expect(colorInput.isOpen).toBe(true));
    expect(colorInput.colorInputElements.popover.isOpen).toBe(true);
    const inputBoxBounds = colorInput.elements.inputBox.getBoundingClientRect();
    const popoverBounds = colorInput.colorInputElements.popover.elements.componentWrapper.getBoundingClientRect();
    expect(Math.abs(popoverBounds.left - inputBoxBounds.left)).toBeLessThan(1);
    expect(Math.abs(popoverBounds.top - inputBoxBounds.bottom)).toBeLessThan(1);
    nativeInput.focus();
    await userEvent.keyboard("{Control>}a{/Control}");
    await userEvent.keyboard("oklch(0.7 0.15 250)");
    expect(colorInput.valueObject?.colorSpace).toBe("oklch");
    expect(args.onInput).toHaveBeenCalled();
    const pickerSurface = colorInput.colorInputElements.picker.shadowRoot!.querySelector<HTMLElement>(".surface")!;
    pickerSurface.focus();
    expect(colorInput.isOpen).toBe(true);
    const outsideButton = document.createElement("button");
    canvasElement.append(outsideButton);
    outsideButton.focus();
    await waitFor(() => expect(colorInput.isOpen).toBe(false));
    outsideButton.remove();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    colorSpace: "rgb",
    value: "oklch(0.72 0.16 250 / 0.8)"
  },
  play: async ({
    canvasElement
  }) => {
    const colorInput = getColorInput(canvasElement);
    await waitFor(() => expect(colorInput.colorInputElements.picker.colorSpace).toBe("rgb"));
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    colorSpace: "oklch",
    value: "rgb(59 102 245 / 0.8)"
  },
  play: async ({
    canvasElement
  }) => {
    const colorInput = getColorInput(canvasElement);
    await waitFor(() => expect(colorInput.colorInputElements.picker.colorSpace).toBe("oklch"));
    expect(colorInput.colorSpace).toBe("oklch");
    expect(colorInput.valueObject?.colorSpace).toBe("rgb");
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    alphaEnabled: false
  },
  play: async ({
    canvasElement
  }) => {
    const colorInput = getColorInput(canvasElement);
    await waitFor(() => expect(colorInput.colorInputElements.picker.alphaEnabled).toBe(false));
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    value: "rgb(10 20 30 / 0.5)"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const colorInput = getColorInput(canvasElement);
    const nativeInput = colorInput.shadowRoot!.querySelector<HTMLInputElement>("input")!;
    nativeInput.focus();
    nativeInput.setSelectionRange(colorInput.value.indexOf("20") + 1, colorInput.value.indexOf("20") + 1);
    await userEvent.keyboard("{ArrowUp}");
    expect(colorInput.value).toBe("rgb(10 21 30 / 0.5)");
    nativeInput.setSelectionRange(colorInput.value.indexOf("0.5") + 2, colorInput.value.indexOf("0.5") + 2);
    await userEvent.keyboard("{ArrowDown}");
    expect(colorInput.value).toBe("rgb(10 21 30 / 0.4)");
    expect(args.onInput).toHaveBeenCalledTimes(2);
    colorInput.value = "oklch(0.7 0.15 250 / 0.5)";
    nativeInput.setSelectionRange(colorInput.value.indexOf("0.15") + 2, colorInput.value.indexOf("0.15") + 2);
    await userEvent.keyboard("{ArrowUp}");
    expect(colorInput.value).toBe("oklch(0.7 0.151 250 / 0.5)");
    nativeInput.setSelectionRange(colorInput.value.indexOf("250") + 1, colorInput.value.indexOf("250") + 1);
    await userEvent.keyboard("{ArrowDown}");
    expect(colorInput.value).toBe("oklch(0.7 0.151 249 / 0.5)");
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: "1rem",
    maxWidth: "24rem"
  }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map(size => <JBColorInput {...args} key={size} label={size.toUpperCase()} size={size} />)}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const colorInputs = Array.from(canvasElement.querySelectorAll<JBColorInputWebComponent>("jb-color-input"));
    await waitFor(() => expect(colorInputs).toHaveLength(5));
    expect(colorInputs.map(input => input.getAttribute("size"))).toEqual(["xs", "sm", "md", "lg", "xl"]);
    const triggerSizes = colorInputs.map(input => parseFloat(getComputedStyle(input.colorInputElements.trigger).height));
    expect(triggerSizes).toEqual([...triggerSizes].sort((a, b) => a - b));
    expect(new Set(triggerSizes).size).toBe(5);
    for (const colorInput of colorInputs) {
      const nativeInputBounds = colorInput.elements.input.getBoundingClientRect();
      const triggerBounds = colorInput.colorInputElements.trigger.getBoundingClientRect();
      const previewBounds = colorInput.colorInputElements.preview.getBoundingClientRect();
      const inputCenter = nativeInputBounds.top + nativeInputBounds.height / 2;
      const triggerCenter = triggerBounds.top + triggerBounds.height / 2;
      const previewCenter = previewBounds.top + previewBounds.height / 2;
      expect(Math.abs(triggerCenter - inputCenter)).toBeLessThan(1);
      expect(Math.abs(previewCenter - inputCenter)).toBeLessThan(1);
      expect(triggerBounds.width).toBeCloseTo(triggerBounds.height, 1);
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: "Disabled color",
    value: "#94a3b8"
  },
  play: async ({
    canvasElement
  }) => {
    const colorInput = getColorInput(canvasElement);
    const nativeInput = colorInput.shadowRoot!.querySelector<HTMLInputElement>("input")!;
    const trigger = colorInput.colorInputElements.trigger;
    await waitFor(() => expect(trigger.disabled).toBe(true));
    expect(colorInput.disabled).toBe(true);
    expect(nativeInput.disabled).toBe(true);
    expect(colorInput.colorInputElements.picker.disabled).toBe(true);
    expect(colorInput.isOpen).toBe(false);
    await userEvent.click(trigger);
    expect(colorInput.isOpen).toBe(false);
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: "CSS color",
    value: "not-a-color"
  },
  play: async ({
    canvasElement
  }) => {
    const colorInput = getColorInput(canvasElement);
    await waitFor(() => expect(colorInput.value).toBe("not-a-color"));
    expect(colorInput.valueObject).toBeNull();
    expect(colorInput.reportValidity()).toBe(false);
    expect(colorInput.validationMessage.length).toBeGreaterThan(0);
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const colorInput = getColorInput(canvasElement);
    colorInput.openPicker();
    await waitFor(() => expect(colorInput.isOpen).toBe(true));
    expect(colorInput.colorInputElements.trigger.getAttribute("aria-expanded")).toBe("true");
    colorInput.closePicker();
    await waitFor(() => expect(colorInput.isOpen).toBe(false));
    expect(colorInput.colorInputElements.trigger.getAttribute("aria-expanded")).toBe("false");
  }
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))"
  }}>
      {cornerVariants.map(({
      label,
      radius,
      shape
    }) => <JBColorInput {...args} key={label} label={\`\${label} · \${radius}\`} style={{
      "--jb-input-border-radius": radius,
      "--jb-input-corner-shape": shape
    } as React.CSSProperties} />)}
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    value: "",
    required: true
  },
  play: async ({
    canvasElement
  }) => {
    const colorInput = getColorInput(canvasElement);
    const nativeInput = colorInput.shadowRoot!.querySelector<HTMLInputElement>("input")!;
    nativeInput.focus();
    await userEvent.tab();
    await waitFor(() => expect(colorInput.checkValidity()).toBe(false));
  }
}`,...D.parameters?.docs?.source}}},O=[`Normal`,`LockedRGB`,`LockedOKLCH`,`WithoutAlpha`,`ArrowKeyParameters`,`SizeVariants`,`Disabled`,`InvalidColor`,`ImperativePicker`,`RadiusAndCornerShapes`,`Required`]}));k();export{b as ArrowKeyParameters,S as Disabled,w as ImperativePicker,C as InvalidColor,v as LockedOKLCH,_ as LockedRGB,g as Normal,E as RadiusAndCornerShapes,D as Required,x as SizeVariants,y as WithoutAlpha,O as __namedExportsOrder,h as default,k as n,s as t};