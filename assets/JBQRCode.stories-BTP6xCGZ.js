import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./react-CJmNgBHD.js";function i(e){let t=e.querySelector(`jb-qrcode`);return u(t).toBeTruthy(),u(t.shadowRoot).toBeTruthy(),t}function a(e){let t=e.shadowRoot?.querySelector(`.qrcode-wrapper`);return u(t).toBeTruthy(),t}async function o(e){let t=a(e);return await d(()=>{u(t.querySelector(`svg`)).toBeTruthy()}),t.querySelector(`svg`)}function s(e,t,n){u(e.getAttribute(`width`)).toBe(String(t)),u(e.getAttribute(`height`)).toBe(String(n)),u(e.getAttribute(`viewBox`)).toBe(`0 0 ${t} ${n}`)}function c(e){u(e.querySelectorAll(`rect, path, circle`).length).toBeGreaterThan(10)}async function l(e){let t=e.querySelector(`image`),n=t?.getAttribute(`href`)??t?.getAttribute(`xlink:href`)??``;t&&u(n.startsWith(`data:image/`)).toBe(!0)}var u,d,f=t((()=>{({expect:u,waitFor:d}=__STORYBOOK_MODULE_TEST__)})),p=e({CustomizedLook:()=>x,Download:()=>C,EmptyValue:()=>S,Events:()=>w,Normal:()=>v,WithCustomWidth:()=>b,WithLogo:()=>y,__namedExportsOrder:()=>T,default:()=>_}),m,h,g,_,v,y,b,x,S,C,w,T,E=t((()=>{r(),f(),{expect:m,fn:h,waitFor:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/JBQRCode`,component:n},v={args:{value:`https://github.com/javadbat/design-system`},play:async({canvasElement:e,args:t})=>{let n=i(e),r=await o(n);m(n.value).toBe(t.value),s(r,240,240),c(r)}},y={args:{value:`https://github.com/javadbat/design-system`,logo:`https://javadbat.github.io/design-system/images/logo-square.svg`},play:async({canvasElement:e,args:t})=>{let n=i(e),r=await o(n);m(n.value).toBe(t.value),m(n.logo).toBe(t.logo),await l(r)}},b={args:{value:`https://github.com/javadbat/design-system`,width:420,height:420},play:async({canvasElement:e,args:t})=>{let n=i(e),r=await o(n);m(n.width).toBe(t.width),m(n.height).toBe(t.height),m(n.style.width).toBe(`${t.width}px`),m(n.style.height).toBe(`${t.height}px`),s(r,t.width,t.height)}},x={args:{value:`https://github.com/javadbat/design-system`,dotsOption:{color:`var(--jb-primary)`,gradient:{type:`linear`,rotation:45,colorStops:[{color:`var(--jb-primary)`,offset:0},{color:`var(--jb-secondary)`,offset:.8},{color:`var(--jb-primary)`,offset:1}]},type:`rounded`},cornersSquareOptions:{type:`extra-rounded`,color:`var(--jb-primary)`},backgroundOptions:{color:`#fff`}},play:async({canvasElement:e,args:t})=>{let n=i(e),r=await o(n);await g(()=>{m(n.dotsOptions?.color).toBe(t.dotsOption?.color),m(n.dotsOptions?.type).toBe(t.dotsOption?.type),m(n.dotsOptions?.gradient).toEqual(t.dotsOption?.gradient),m(n.cornersSquareOptions?.color).toBe(t.cornersSquareOptions?.color),m(n.cornersSquareOptions?.type).toBe(t.cornersSquareOptions?.type),m(n.backgroundOptions?.color).toBe(t.backgroundOptions?.color)}),m(r.querySelector(`linearGradient`)).toBeTruthy(),m(r.querySelectorAll(`linearGradient stop`).length).toBe(t.dotsOption?.gradient?.colorStops.length)}},S={args:{value:``},play:async({canvasElement:e})=>{let t=i(e);await g(()=>{m(a(t).querySelector(`svg`)).toBeNull()})}},C={args:{value:`https://github.com/javadbat/design-system`,downloadFileName:`design-system`},play:async({canvasElement:e})=>{let t=i(e);await o(t),m(t.downloadFileName).toBe(`design-system`),m(t.shadowRoot?.querySelector(`[part="download-button"]`)).toBeTruthy();let n=t.download,r=h();t.download=r,t.download(`design-system`,`svg`),m(r).toHaveBeenCalledWith(`design-system`,`svg`),t.download=n}},w={args:{value:`https://github.com/javadbat/design-system`,onLoad:h(),onInit:h()},play:async({canvasElement:e,args:t})=>{let n=i(e);n.dispatchEvent(new CustomEvent(`load`)),n.dispatchEvent(new CustomEvent(`init`)),await g(()=>{m(t.onLoad).toHaveBeenCalled(),m(t.onInit).toHaveBeenCalled()})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: "https://github.com/javadbat/design-system"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const qrCode = getQRCode(canvasElement);
    const svg = await waitForRenderedSvg(qrCode);
    expect(qrCode.value).toBe(args.value);
    expectSvgSize(svg, 240, 240);
    expectSvgHasQRCodeContent(svg);
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: "https://github.com/javadbat/design-system",
    logo: "https://javadbat.github.io/design-system/images/logo-square.svg"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const qrCode = getQRCode(canvasElement);
    const svg = await waitForRenderedSvg(qrCode);
    expect(qrCode.value).toBe(args.value);
    expect(qrCode.logo).toBe(args.logo);
    await expectSvgHasLogo(svg);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    value: "https://github.com/javadbat/design-system",
    width: 420,
    height: 420
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const qrCode = getQRCode(canvasElement);
    const svg = await waitForRenderedSvg(qrCode);
    expect(qrCode.width).toBe(args.width);
    expect(qrCode.height).toBe(args.height);
    expect(qrCode.style.width).toBe(\`\${args.width}px\`);
    expect(qrCode.style.height).toBe(\`\${args.height}px\`);
    expectSvgSize(svg, args.width!, args.height!);
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: "https://github.com/javadbat/design-system",
    dotsOption: {
      color: "var(--jb-primary)",
      gradient: {
        type: "linear",
        rotation: 45,
        colorStops: [{
          color: "var(--jb-primary)",
          offset: 0
        }, {
          color: "var(--jb-secondary)",
          offset: 0.8
        }, {
          color: "var(--jb-primary)",
          offset: 1
        }]
      },
      type: "rounded"
    },
    cornersSquareOptions: {
      type: "extra-rounded",
      color: "var(--jb-primary)"
    },
    backgroundOptions: {
      color: "#fff"
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const qrCode = getQRCode(canvasElement);
    const svg = await waitForRenderedSvg(qrCode);
    await waitFor(() => {
      expect(qrCode.dotsOptions?.color).toBe(args.dotsOption?.color);
      expect(qrCode.dotsOptions?.type).toBe(args.dotsOption?.type);
      expect(qrCode.dotsOptions?.gradient).toEqual(args.dotsOption?.gradient);
      expect(qrCode.cornersSquareOptions?.color).toBe(args.cornersSquareOptions?.color);
      expect(qrCode.cornersSquareOptions?.type).toBe(args.cornersSquareOptions?.type);
      expect(qrCode.backgroundOptions?.color).toBe(args.backgroundOptions?.color);
    });
    expect(svg.querySelector('linearGradient')).toBeTruthy();
    expect(svg.querySelectorAll('linearGradient stop').length).toBe(args.dotsOption?.gradient?.colorStops.length);
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    value: ""
  },
  play: async ({
    canvasElement
  }) => {
    const qrCode = getQRCode(canvasElement);
    await waitFor(() => {
      expect(getQRCodeWrapper(qrCode).querySelector('svg')).toBeNull();
    });
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    value: "https://github.com/javadbat/design-system",
    downloadFileName: "design-system"
  },
  play: async ({
    canvasElement
  }) => {
    const qrCode = getQRCode(canvasElement);
    await waitForRenderedSvg(qrCode);
    expect(qrCode.downloadFileName).toBe("design-system");
    expect(qrCode.shadowRoot?.querySelector('[part="download-button"]')).toBeTruthy();
    const originalDownload = qrCode.download;
    const download = fn();
    qrCode.download = download;
    qrCode.download("design-system", "svg");
    expect(download).toHaveBeenCalledWith("design-system", "svg");
    qrCode.download = originalDownload;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: "https://github.com/javadbat/design-system",
    onLoad: fn(),
    onInit: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const qrCode = getQRCode(canvasElement);
    qrCode.dispatchEvent(new CustomEvent("load"));
    qrCode.dispatchEvent(new CustomEvent("init"));
    await waitFor(() => {
      expect(args.onLoad).toHaveBeenCalled();
      expect(args.onInit).toHaveBeenCalled();
    });
  }
}`,...w.parameters?.docs?.source}}},T=[`Normal`,`WithLogo`,`WithCustomWidth`,`CustomizedLook`,`EmptyValue`,`Download`,`Events`]}));E();export{x as CustomizedLook,C as Download,S as EmptyValue,w as Events,v as Normal,b as WithCustomWidth,y as WithLogo,T as __namedExportsOrder,_ as default,E as n,p as t};