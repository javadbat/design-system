import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{K as r,t as i}from"./iframe-DIBpeuX4.js";import{a,i as o,t as s}from"./jb-color-picker-BFfuiZmz.js";function c(e,t,n,r=!1){let i=(0,l.useCallback)((t=>{e.current&&typeof n==`function`&&n(t)}),[e,n]);(0,l.useEffect)((()=>{let n=e.current;return n&&n.addEventListener(t,i,{passive:r,capture:!1}),function(){n&&n.removeEventListener(t,i,{passive:r,capture:!1})}}),[e,t,n,r])}var l,u,d=t((()=>{l=n(r(),1),s(),u=l.forwardRef(((e,t)=>{let n=(0,l.useRef)(null);(0,l.useImperativeHandle)(t,(()=>n.current),[]);let{value:r,colorSpace:i,alphaEnabled:a,disabled:o,onInput:s,onChange:u,...d}=e;return(0,l.useEffect)((()=>{n.current&&r!==void 0&&(n.current.value=r)}),[r]),(0,l.useEffect)((()=>{n.current&&i!==void 0&&(n.current.colorSpace=i)}),[i]),(0,l.useEffect)((()=>{n.current&&a!==void 0&&(n.current.alphaEnabled=a)}),[a]),(0,l.useEffect)((()=>{n.current&&o!==void 0&&(n.current.disabled=o)}),[o]),c(n,`input`,s),c(n,`change`,u),l.createElement(`jb-color-picker`,{ref:n,...d})})),u.displayName=`JBColorPicker`})),f=t((()=>{d()})),p=e({CSSColorStrings:()=>w,CustomTheme:()=>O,Disabled:()=>E,LockedOKLCH:()=>C,LockedRGB:()=>S,OKLCH:()=>x,RGB:()=>b,SizeVariants:()=>D,WithoutAlpha:()=>T,__namedExportsOrder:()=>k,default:()=>y}),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A=t((()=>{s(),f(),m=i(),{expect:h,fn:g,userEvent:_,waitFor:v}=__STORYBOOK_MODULE_TEST__,y={title:`Components/JBColorPicker`,component:u,args:{value:{colorSpace:`rgb`,r:59,g:102,b:245,alpha:1},alphaEnabled:!0,disabled:!1,onInput:g(),onChange:g()},argTypes:{colorSpace:{control:`inline-radio`,options:[`rgb`,`oklch`]},alphaEnabled:{control:`boolean`},disabled:{control:`boolean`}}},b={play:async({canvasElement:e,args:t})=>{let n=e.querySelector(`jb-color-picker`);await v(()=>h(n.valueObject.colorSpace).toBe(`rgb`)),h(n.value).toBe(`rgb(59 102 245 / 1)`),h(n.colorSpace).toBeNull();let r=n.shadowRoot.querySelector(`jb-number-input[data-channel='r']`),i=r.shadowRoot.querySelector(`input`);i.focus(),await _.keyboard(`{Control>}a{/Control}1`);for(let e of[`2`,`3`]){if(n.valueObject.colorSpace!==`rgb`)throw Error(`Expected RGB value`);n.value={...n.valueObject,r:Number(r.value)},h(n.shadowRoot.querySelector(`jb-number-input[data-channel='r']`)).toBe(r),h(i.getRootNode()).toHaveProperty(`activeElement`,i),await _.keyboard(e)}if(n.valueObject.colorSpace!==`rgb`)throw Error(`Expected RGB value`);n.value={...n.valueObject,r:Number(r.value)},h(n.shadowRoot.querySelector(`jb-number-input[data-channel='r']`)).toBe(r),h(i.getRootNode()).toHaveProperty(`activeElement`,i);let o=n.valueObject,s=n.shadowRoot.querySelector(`[data-space='oklch']`);if(await _.click(s),h(n.colorSpace).toBeNull(),h(n.valueObject.colorSpace).toBe(`oklch`),h(t.onChange).toHaveBeenCalled(),o.colorSpace!==`rgb`)throw Error(`Expected RGB value`);let c=a(o),l=n.valueObject;if(l.colorSpace!==`oklch`)throw Error(`Expected OKLCH value`);h(l.l).toBeCloseTo(c.l,5),h(l.c).toBeCloseTo(c.c,5)}},x={args:{value:{colorSpace:`oklch`,l:.72,c:.16,h:250,alpha:.8}},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-color-picker`);await v(()=>h(t.valueObject.colorSpace).toBe(`oklch`));let n=t.valueObject.colorSpace===`oklch`?t.valueObject.c:0;t.shadowRoot.querySelector(`.surface`).focus(),await _.keyboard(`{ArrowRight}`),h(t.valueObject.colorSpace).toBe(`oklch`),t.valueObject.colorSpace===`oklch`&&h(t.valueObject.c).toBeGreaterThan(n),h(o(t.valueObject,`rgb`).colorSpace).toBe(`rgb`)}},S={args:{colorSpace:`rgb`,value:`oklch(0.72 0.16 250 / 0.8)`},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-color-picker`);await v(()=>h(t.colorSpace).toBe(`rgb`)),h(t.valueObject.colorSpace).toBe(`rgb`),h(t.shadowRoot.querySelector(`.space-switch`).hidden).toBe(!0),t.colorSpace=null,h(t.shadowRoot.querySelector(`.space-switch`).hidden).toBe(!1),t.colorSpace=`rgb`}},C={args:{colorSpace:`oklch`,value:`rgb(59 102 245 / 0.75)`},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-color-picker`);await v(()=>h(t.valueObject.colorSpace).toBe(`oklch`)),h(t.colorSpace).toBe(`oklch`),h(t.shadowRoot.querySelector(`.space-switch`).hidden).toBe(!0),h(t.valueObject.alpha).toBeCloseTo(.75,2)}},w={args:{value:`#3b66f580`},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-color-picker`);if(await v(()=>h(t.valueObject.colorSpace).toBe(`rgb`)),t.valueObject.colorSpace!==`rgb`)throw Error(`Expected RGB value`);h(t.valueObject.r).toBe(59),h(t.valueObject.g).toBe(102),h(t.valueObject.b).toBe(245),h(t.valueObject.alpha).toBeCloseTo(128/255,3)}},T={args:{alphaEnabled:!1},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-color-picker`);await v(()=>h(t.alphaEnabled).toBe(!1)),h(getComputedStyle(t.shadowRoot.querySelector(`.alpha-row`)).display).toBe(`none`),h(t.shadowRoot.querySelector(`input[data-channel='alpha']`)).toBeNull()}},E={args:{disabled:!0},play:async({canvasElement:e})=>{let t=e.querySelector(`jb-color-picker`);await v(()=>h(t.disabled).toBe(!0)),h(t.shadowRoot.querySelector(`.hue`).disabled).toBe(!0),h(t.shadowRoot.querySelector(`.alpha`).disabled).toBe(!0),h(t.shadowRoot.querySelector(`.surface`).tabIndex).toBe(-1),h(Array.from(t.shadowRoot.querySelectorAll(`button`)).every(e=>e.disabled)).toBe(!0),h(Array.from(t.shadowRoot.querySelectorAll(`jb-number-input`)).every(e=>e.disabled)).toBe(!0)}},D={render:()=>(0,m.jsx)(`div`,{style:{display:`flex`,alignItems:`flex-start`,flexWrap:`wrap`,gap:`2rem`},children:[{label:`Compact`,width:`14rem`,value:`#ef4444`},{label:`Default`,width:`18rem`,value:`#3b66f5`},{label:`Large`,width:`22rem`,value:`oklch(72% 0.16 150)`}].map(e=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h3`,{style:{marginBlockStart:0},children:e.label}),(0,m.jsx)(u,{"aria-label":`${e.label} color picker`,value:e.value,style:{"--jb-color-picker-width":e.width}})]},e.label))}),play:async({canvasElement:e})=>{let t=Array.from(e.querySelectorAll(`jb-color-picker`));await v(()=>h(t).toHaveLength(3));let n=t.map(e=>parseFloat(getComputedStyle(e.shadowRoot.querySelector(`.picker`)).width));h(n).toEqual([...n].sort((e,t)=>e-t)),h(new Set(n).size).toBe(3)}},O={args:{value:`oklch(72% 0.16 300 / 0.85)`,style:{"--jb-color-picker-background":`#111827`,"--jb-color-picker-color":`#f9fafb`,"--jb-color-picker-border-color":`#374151`,"--jb-color-picker-accent-color":`#a78bfa`,"--jb-color-picker-border-radius":`1.25rem`}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const picker = canvasElement.querySelector<JBColorPickerWebComponent>("jb-color-picker")!;
    await waitFor(() => expect(picker.valueObject.colorSpace).toBe("rgb"));
    expect(picker.value).toBe("rgb(59 102 245 / 1)");
    expect(picker.colorSpace).toBeNull();
    const redField = picker.shadowRoot!.querySelector<JBNumberInputWebComponent>("jb-number-input[data-channel='r']")!;
    const redInput = redField.shadowRoot!.querySelector<HTMLInputElement>("input")!;
    redInput.focus();
    await userEvent.keyboard("{Control>}a{/Control}1");
    for (const character of ["2", "3"]) {
      if (picker.valueObject.colorSpace !== "rgb") throw new Error("Expected RGB value");
      picker.value = {
        ...picker.valueObject,
        r: Number(redField.value)
      };
      expect(picker.shadowRoot!.querySelector("jb-number-input[data-channel='r']")).toBe(redField);
      expect(redInput.getRootNode()).toHaveProperty("activeElement", redInput);
      await userEvent.keyboard(character);
    }
    if (picker.valueObject.colorSpace !== "rgb") throw new Error("Expected RGB value");
    picker.value = {
      ...picker.valueObject,
      r: Number(redField.value)
    };
    expect(picker.shadowRoot!.querySelector("jb-number-input[data-channel='r']")).toBe(redField);
    expect(redInput.getRootNode()).toHaveProperty("activeElement", redInput);
    const rgbBeforeSwitch = picker.valueObject;
    const oklchButton = picker.shadowRoot!.querySelector<HTMLButtonElement>("[data-space='oklch']")!;
    await userEvent.click(oklchButton);
    expect(picker.colorSpace).toBeNull();
    expect(picker.valueObject.colorSpace).toBe("oklch");
    expect(args.onChange).toHaveBeenCalled();
    if (rgbBeforeSwitch.colorSpace !== "rgb") throw new Error("Expected RGB value");
    const expected = rgbToOklch(rgbBeforeSwitch);
    const oklchValue = picker.valueObject as JBColorPickerValue;
    if (oklchValue.colorSpace !== "oklch") throw new Error("Expected OKLCH value");
    expect(oklchValue.l).toBeCloseTo(expected.l, 5);
    expect(oklchValue.c).toBeCloseTo(expected.c, 5);
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: {
      colorSpace: "oklch",
      l: 0.72,
      c: 0.16,
      h: 250,
      alpha: 0.8
    }
  },
  play: async ({
    canvasElement
  }) => {
    const picker = canvasElement.querySelector<JBColorPickerWebComponent>("jb-color-picker")!;
    await waitFor(() => expect(picker.valueObject.colorSpace).toBe("oklch"));
    const before = picker.valueObject.colorSpace === "oklch" ? picker.valueObject.c : 0;
    const surface = picker.shadowRoot!.querySelector<HTMLCanvasElement>(".surface")!;
    surface.focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(picker.valueObject.colorSpace).toBe("oklch");
    if (picker.valueObject.colorSpace === "oklch") expect(picker.valueObject.c).toBeGreaterThan(before);
    const rgb = convertColor(picker.valueObject, "rgb");
    expect(rgb.colorSpace).toBe("rgb");
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    colorSpace: "rgb",
    value: "oklch(0.72 0.16 250 / 0.8)"
  },
  play: async ({
    canvasElement
  }) => {
    const picker = canvasElement.querySelector<JBColorPickerWebComponent>("jb-color-picker")!;
    await waitFor(() => expect(picker.colorSpace).toBe("rgb"));
    expect(picker.valueObject.colorSpace).toBe("rgb");
    expect(picker.shadowRoot!.querySelector<HTMLElement>(".space-switch")!.hidden).toBe(true);
    picker.colorSpace = null;
    expect(picker.shadowRoot!.querySelector<HTMLElement>(".space-switch")!.hidden).toBe(false);
    picker.colorSpace = "rgb";
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    colorSpace: "oklch",
    value: "rgb(59 102 245 / 0.75)"
  },
  play: async ({
    canvasElement
  }) => {
    const picker = canvasElement.querySelector<JBColorPickerWebComponent>("jb-color-picker")!;
    await waitFor(() => expect(picker.valueObject.colorSpace).toBe("oklch"));
    expect(picker.colorSpace).toBe("oklch");
    expect(picker.shadowRoot!.querySelector<HTMLElement>(".space-switch")!.hidden).toBe(true);
    expect(picker.valueObject.alpha).toBeCloseTo(0.75, 2);
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: "#3b66f580"
  },
  play: async ({
    canvasElement
  }) => {
    const picker = canvasElement.querySelector<JBColorPickerWebComponent>("jb-color-picker")!;
    await waitFor(() => expect(picker.valueObject.colorSpace).toBe("rgb"));
    if (picker.valueObject.colorSpace !== "rgb") throw new Error("Expected RGB value");
    expect(picker.valueObject.r).toBe(59);
    expect(picker.valueObject.g).toBe(102);
    expect(picker.valueObject.b).toBe(245);
    expect(picker.valueObject.alpha).toBeCloseTo(128 / 255, 3);
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    alphaEnabled: false
  },
  play: async ({
    canvasElement
  }) => {
    const picker = canvasElement.querySelector<JBColorPickerWebComponent>("jb-color-picker")!;
    await waitFor(() => expect(picker.alphaEnabled).toBe(false));
    expect(getComputedStyle(picker.shadowRoot!.querySelector(".alpha-row")!).display).toBe("none");
    expect(picker.shadowRoot!.querySelector("input[data-channel='alpha']")).toBeNull();
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const picker = canvasElement.querySelector<JBColorPickerWebComponent>("jb-color-picker")!;
    await waitFor(() => expect(picker.disabled).toBe(true));
    expect(picker.shadowRoot!.querySelector<HTMLInputElement>(".hue")!.disabled).toBe(true);
    expect(picker.shadowRoot!.querySelector<HTMLInputElement>(".alpha")!.disabled).toBe(true);
    expect(picker.shadowRoot!.querySelector<HTMLCanvasElement>(".surface")!.tabIndex).toBe(-1);
    expect(Array.from(picker.shadowRoot!.querySelectorAll<HTMLButtonElement>("button")).every(button => button.disabled)).toBe(true);
    expect(Array.from(picker.shadowRoot!.querySelectorAll<JBNumberInputWebComponent>("jb-number-input")).every(input => input.disabled)).toBe(true);
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const variants = [{
      label: "Compact",
      width: "14rem",
      value: "#ef4444"
    }, {
      label: "Default",
      width: "18rem",
      value: "#3b66f5"
    }, {
      label: "Large",
      width: "22rem",
      value: "oklch(72% 0.16 150)"
    }];
    return <div style={{
      display: "flex",
      alignItems: "flex-start",
      flexWrap: "wrap",
      gap: "2rem"
    }}>
        {variants.map(variant => <div key={variant.label}>
            <h3 style={{
          marginBlockStart: 0
        }}>{variant.label}</h3>
            <JBColorPicker aria-label={\`\${variant.label} color picker\`} value={variant.value} style={{
          "--jb-color-picker-width": variant.width
        } as PickerStyle} />
          </div>)}
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const pickers = Array.from(canvasElement.querySelectorAll<JBColorPickerWebComponent>("jb-color-picker"));
    await waitFor(() => expect(pickers).toHaveLength(3));
    const widths = pickers.map(picker => parseFloat(getComputedStyle(picker.shadowRoot!.querySelector<HTMLElement>(".picker")!).width));
    expect(widths).toEqual([...widths].sort((a, b) => a - b));
    expect(new Set(widths).size).toBe(3);
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    value: "oklch(72% 0.16 300 / 0.85)",
    style: {
      "--jb-color-picker-background": "#111827",
      "--jb-color-picker-color": "#f9fafb",
      "--jb-color-picker-border-color": "#374151",
      "--jb-color-picker-accent-color": "#a78bfa",
      "--jb-color-picker-border-radius": "1.25rem"
    } as PickerStyle
  }
}`,...O.parameters?.docs?.source}}},k=[`RGB`,`OKLCH`,`LockedRGB`,`LockedOKLCH`,`CSSColorStrings`,`WithoutAlpha`,`Disabled`,`SizeVariants`,`CustomTheme`]}));A();export{w as CSSColorStrings,O as CustomTheme,E as Disabled,C as LockedOKLCH,S as LockedRGB,x as OKLCH,b as RGB,D as SizeVariants,T as WithoutAlpha,k as __namedExportsOrder,y as default,A as n,p as t};