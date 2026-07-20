import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./react-DPL0mGV3.js";function i(e){let t=e.querySelector(`jb-qrcode`);return u(t).toBeTruthy(),u(t.shadowRoot).toBeTruthy(),t}function a(e){let t=e.shadowRoot?.querySelector(`.qrcode-wrapper`);return u(t).toBeTruthy(),t}async function o(e){let t=a(e);return await d(()=>{u(t.querySelector(`svg`)).toBeTruthy()}),t.querySelector(`svg`)}function s(e,t,n){u(e.getAttribute(`width`)).toBe(String(t)),u(e.getAttribute(`height`)).toBe(String(n)),u(e.getAttribute(`viewBox`)).toBe(`0 0 ${t} ${n}`)}function c(e){u(e.querySelectorAll(`rect, path, circle`).length).toBeGreaterThan(10)}async function l(e){let t=e.querySelector(`image`),n=t?.getAttribute(`href`)??t?.getAttribute(`xlink:href`)??``;t&&u(n.startsWith(`data:image/`)).toBe(!0)}var u,d,f=t((()=>{({expect:u,waitFor:d}=__STORYBOOK_MODULE_TEST__)})),p=e({CustomizedLook:()=>b,Normal:()=>_,WithCustomWidth:()=>y,WithLogo:()=>v,__namedExportsOrder:()=>x,default:()=>g}),m,h,g,_,v,y,b,x,S=t((()=>{r(),f(),{expect:m,waitFor:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/JBQRCode`,component:n},_={args:{value:`https://github.com/javadbat/design-system`},play:async({canvasElement:e,args:t})=>{let n=i(e),r=await o(n);m(n.value).toBe(t.value),s(r,240,240),c(r)}},v={args:{value:`https://github.com/javadbat/design-system`,logo:`https://javadbat.github.io/design-system/images/logo-square.svg`},play:async({canvasElement:e,args:t})=>{let n=i(e),r=await o(n);m(n.value).toBe(t.value),m(n.logo).toBe(t.logo),await l(r)}},y={args:{value:`https://github.com/javadbat/design-system`,width:420,height:420},play:async({canvasElement:e,args:t})=>{let n=i(e),r=await o(n);m(n.width).toBe(t.width),m(n.height).toBe(t.height),m(n.style.width).toBe(`${t.width}px`),m(n.style.height).toBe(`${t.height}px`),s(r,t.width,t.height)}},b={args:{value:`https://github.com/javadbat/design-system`,dotsOption:{color:`var(--jb-primary)`,gradient:{type:`linear`,rotation:45,colorStops:[{color:`var(--jb-primary)`,offset:0},{color:`var(--jb-secondary)`,offset:.8},{color:`var(--jb-primary)`,offset:1}]},type:`rounded`},cornersSquareOptions:{type:`extra-rounded`,color:`var(--jb-primary)`}},play:async({canvasElement:e,args:t})=>{let n=i(e),r=await o(n);await h(()=>{m(n.dotsOptions?.color).toBe(t.dotsOption?.color),m(n.dotsOptions?.type).toBe(t.dotsOption?.type),m(n.dotsOptions?.gradient).toEqual(t.dotsOption?.gradient),m(n.cornersSquareOptions?.color).toBe(t.cornersSquareOptions?.color),m(n.cornersSquareOptions?.type).toBe(t.cornersSquareOptions?.type)}),m(r.querySelector(`linearGradient`)).toBeTruthy(),m(r.querySelectorAll(`linearGradient stop`).length).toBe(t.dotsOption?.gradient?.colorStops.length)}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    });
    expect(svg.querySelector('linearGradient')).toBeTruthy();
    expect(svg.querySelectorAll('linearGradient stop').length).toBe(args.dotsOption?.gradient?.colorStops.length);
  }
}`,...b.parameters?.docs?.source}}},x=[`Normal`,`WithLogo`,`WithCustomWidth`,`CustomizedLook`]}));S();export{b as CustomizedLook,_ as Normal,y as WithCustomWidth,v as WithLogo,x as __namedExportsOrder,g as default,S as n,p as t};