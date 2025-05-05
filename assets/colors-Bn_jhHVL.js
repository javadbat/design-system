var N=Object.defineProperty;var M=(o,r,s)=>r in o?N(o,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[r]=s;var p=(o,r,s)=>M(o,typeof r!="symbol"?r+"":r,s);import{j as e,M as $,k as B,l as y,m as J,n as i}from"./index-Bgbycu6M.js";import{useMDXComponents as f}from"./index-B8rYRX2K.js";import"./iframe-T7q0WQ_X.js";import"./index-D4lIrffr.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";var n=class{constructor(o,r){p(this,"lightness");p(this,"chroma");p(this,"hue");p(this,"variableName");this.variableName=r,this.lightness=o.lightness,this.chroma=o.chroma,this.hue=o.hue}get value(){return`oklch(${this.lightness} ${this.chroma} ${this.hue})`}};function t(o){return new n({lightness:6*(3+1.3*o)*.01,chroma:.001*(14+.09*o),hue:258.36},`--jb-neutral-${o}`)}function m(o){return new n({lightness:o.lightness+.07,chroma:o.chroma+.07,hue:o.hue},`${o.variableName}-hover`)}function g(o){return new n({lightness:o.lightness-.1,chroma:o.chroma-.05,hue:o.hue},`${o.variableName}-pressed`)}function j(o){const r=Math.min(o.lightness+.12*(1-o.lightness),.985),s=o.chroma*(1-.15*(r-o.lightness));return new n({lightness:r,chroma:Number(s.toFixed(3)),hue:o.hue},`${o.variableName}-l`)}function v(o){const r=Math.max(o.lightness-.12*o.lightness,.02),s=o.chroma*(1-.15*(r-o.lightness));return new n({lightness:r,chroma:s,hue:o.hue},`${o.variableName}-d`)}function b(o){const r=Math.min(o.lightness+.65*(1-o.lightness),.93),s=.55*o.chroma*(1-.08*(r-o.lightness)),k=o.hue>=70&&o.hue<=162?5:-3,C=o.hue+k;return new n({lightness:r,chroma:Number(s.toFixed(3)),hue:C},`${o.variableName}-subtle`)}function x(o){const r=Math.max(o.lightness-.35,.22),s=Math.min(1.6*o.chroma,.28);return new n({lightness:Number(r.toFixed(3)),chroma:Number(s.toFixed(3)),hue:o.hue},`${o.variableName}-contrast`)}const a=new n({lightness:.6,chroma:.26,hue:256},"--jb-primary"),c=new n({lightness:.6,chroma:.26,hue:286},"--jb-secondary"),h=new n({lightness:.75,chroma:.18,hue:70},"--jb-yellow"),d=new n({lightness:.68,chroma:.1484,hue:162.1},"--jb-green"),u=new n({lightness:.6,chroma:.22,hue:23.21},"--jb-red"),l={single:{black:new n({lightness:.14,chroma:0,hue:0},"--jb-black"),white:new n({lightness:1,chroma:0,hue:0},"--jb-white"),highlight:new n({lightness:.93,chroma:.2302,hue:125.18},"--jb-highlight")},neutral:[t(0),t(1),t(2),t(3),t(4),t(5),t(6),t(7),t(8),t(9),t(10)],primary:{main:a,hover:m(a),pressed:g(a),light:j(a),dark:v(a),subtle:b(a),contrast:x(a)},secondary:{main:c,hover:m(c),pressed:g(c),light:j(c),dark:v(c),subtle:b(c),contrast:x(c)},yellow:{main:h,hover:m(h),pressed:g(h),light:j(h),dark:v(h),subtle:b(h),contrast:x(h)},green:{main:d,hover:m(d),pressed:g(d),light:j(d),dark:v(d),subtle:b(d),contrast:x(d)},red:{main:u,hover:m(u),pressed:g(u),light:j(u),dark:v(u),subtle:b(u),contrast:x(u)}};function w(o){const r={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...f(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx($,{title:"Theme/Colors"}),`
`,e.jsx(B,{children:"Color Palette"}),`
`,e.jsx(y,{children:"all color are based on oklch() color space"}),`
`,e.jsx("br",{}),`
`,e.jsxs(J,{children:[e.jsx(i,{title:"single",description:"",colors:{black:l.single.black.value,white:l.single.white.value,highlight:l.single.highlight.value}}),e.jsx(i,{title:"neutral",description:"",colors:{main:l.neutral[0].value,d1:l.neutral[1].value,d2:l.neutral[2].value,d3:l.neutral[3].value,d4:l.neutral[4].value,d5:l.neutral[5].value,d6:l.neutral[6].value,d7:l.neutral[7].value,d8:l.neutral[8].value,d9:l.neutral[9].value,d10:l.neutral[10].value}}),e.jsx(i,{title:"primary",description:"",colors:{main:l.primary.main.value,lighter:l.primary.light.value,dark:l.primary.dark.value,subtle:l.primary.subtle.value,contrast:l.primary.contrast.value,hover:l.primary.hover.value,pressed:l.primary.pressed.value}}),e.jsx(i,{title:"secondary",description:"",colors:{main:l.secondary.main.value,lighter:l.secondary.light.value,dark:l.secondary.dark.value,subtle:l.secondary.subtle.value,contrast:l.secondary.contrast.value,hover:l.secondary.hover.value,pressed:l.secondary.pressed.value}}),e.jsx(i,{title:"success",description:"",colors:{main:l.green.main.value,lighter:l.green.light.value,dark:l.green.dark.value,subtle:l.green.subtle.value,contrast:l.green.contrast.value,hover:l.green.hover.value,pressed:l.green.pressed.value}}),e.jsx(i,{title:"error",description:"",colors:{main:l.red.main.value,lighter:l.red.light.value,dark:l.red.dark.value,subtle:l.red.subtle.value,contrast:l.red.contrast.value,hover:l.red.hover.value,pressed:l.red.pressed.value}}),e.jsx(i,{title:"warning",description:"",colors:{main:l.yellow.main.value,lighter:l.yellow.light.value,dark:l.yellow.dark.value,subtle:l.yellow.subtle.value,contrast:l.yellow.contrast.value,hover:l.yellow.hover.value,pressed:l.yellow.pressed.value}})]}),`
`,e.jsx(y,{children:"Customize Component colors"}),`
`,e.jsx("p",{children:"in jb design system you have 3 way to change the components parts colors"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsxs("p",{children:["1. ",e.jsx(r.strong,{children:"general approach:"})," set the color palette variables base on your app design."]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs("p",{children:["2. ",e.jsx(r.strong,{children:"specific part approach:"})," set the color variables of specific part of the component."]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs("p",{children:["3. ",e.jsx(r.strong,{children:"component approach:"})," set the color variables of specific component."]}),`
`]}),`
`]}),`
`,e.jsxs("p",{children:[" for the first approach you can use the ",e.jsx(r.code,{children:"--jb-*"})," variables of the color palette in your css. for example:"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`:root{
  --jb-primary: oklch(0.6 0.26 256);
  --jb-secondary: oklch(0.6 0.26 286);
  --jb-green: oklch(0.6 0.26 120);
  --jb-red: oklch(0.6 0.26 0);
  --jb-yellow: oklch(0.6 0.26 60);
}
`})}),`
`,e.jsx("p",{children:"in this approach all components part that use primary color will use your primary color instead."}),`
`,e.jsx("p",{children:" remember you can set this variable in every scope in your app like in your app root or in your page root. this will allow you to have multiple palette ot theme in one app."}),`
`,e.jsxs("p",{children:["for the second approach you can use the ",e.jsx(r.code,{children:"--jb-component-name-*"})," variables"]}),`
`,e.jsx("p",{children:"in this case component will override it's default color value for that specific parts. for example jb-input dont have any border by default but you can set it like this"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`:root{
  --jb-input-border-color: oklch(0.6 0.26 256);
  /*or*/
  --jb-input-border-color: var(--jb-primary);
}
`})}),`
`,e.jsx("p",{children:"this will set the border color of the jb-input component to your primary color."}),`
`,e.jsxs("p",{children:["for the third approach you can use the ",e.jsx(r.code,{children:"component-name"})," selector and set direct variable within"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`  jb-input{
    --border-color: oklch(0.6 0.26 256);
    /*or*/
    --border-color: var(--jb-primary);
  }
`})}),`
`,e.jsx("p",{children:"this will be most useful when you want to set the variable or style in some specific state"}),`
`,e.jsx("p",{children:"for example you can set the border color of the jb-input component to your primary color when it is focused."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`  jb-input:focus{
    --border-color: oklch(0.6 0.26 256);
    /*or*/
    --border-color: var(--jb-primary);
  }
  /*or show red border when input is in invalid state*/
  jb-input:state(invalid){
    --border-color: oklch(0.6 0.26 0);
    /*or*/
    --border-color: var(--jb-red);
  }
`})}),`
`,e.jsx(y,{children:"Color Rules"}),`
`,e.jsxs(r.p,{children:["we use ",e.jsx(r.code,{children:"oklch()"})," color space for all colors in our design system. This allows us to create a consistent and harmonious color palette that is easy to use and understand."]}),`
`,e.jsx("p",{children:e.jsxs(r.p,{children:["for example primary color is ",e.jsx(r.code,{children:"oklch(0.6 0.26 256)"}),` which is a blue color with a lightness of 60%, chroma of 0.26, and hue of 256 degrees.
for hover state we add `,e.jsx(r.code,{children:"0.07"})," to lightness and ",e.jsx(r.code,{children:"0.07"}),` to chroma so it gets a little lighter and brighter.
for pressed state we subtract `,e.jsx(r.code,{children:"0.1"})," to lightness and ",e.jsx(r.code,{children:"0.05"})," to chroma so it gets a little darker and dimmer."]})}),`
`,e.jsx("br",{}),`
`,e.jsx(y,{children:"Define custom colors"}),`
`,e.jsx("br",{}),`
`,e.jsx("p",{children:e.jsxs(r.p,{children:["we use ",e.jsx(r.code,{children:"JBColor"}),` type for all colors in our design system. This allows us to create a consistent and harmonious color palette that is easy to use and understand.
to creating your own custom color you must use `,e.jsx(r.code,{children:"oklch()"}),` color space for all colors in our design system. This allows us to create a consistent and harmonious color palette that is easy to use and understand.
for example primary color is `,e.jsx(r.code,{children:"oklch(0.6 0.26 256)"})," which is a blue color with a lightness of 60%, chroma of 0.26, and hue of 256 degrees."]})}),`
`,e.jsxs("p",{children:[e.jsxs(r.p,{children:["after you define your color create a instance of ",e.jsx(r.code,{children:"JBColor"})," class by providing the color you want to use. for example:"]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`const primary = new JBColor({lightness:0.6,chroma:0.26,hue:256},'--jb-primary');
`})}),e.jsx(r.p,{children:"after you all your base colors you can create a color variants base on your base color. for example:"})]}),`
`,e.jsxs("p",{children:[e.jsx(r.p,{children:"there are several function that will give you the color you want:"}),e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"getNeutralColor(lightness:number)"})," will give you a neutral color based on the lightness value you provide. it will return a color that is in the range of 0 to 10."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"getHoverColor(color:JBColor)"})," will give you a hover color based on the color you provide. it will return a color that is a little lighter and brighter than the original color."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"getPressedColor(color:JBColor)"})," will give you a pressed color based on the color you provide. it will return a color that is a little darker and dimmer than the original color."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"getLighterColor(color:JBColor)"})," will give you a lighter color based on the color you provide. it will return a color that is a little lighter than the original color."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"getDarkerColor(color:JBColor)"})," will give you a darker color based on the color you provide. it will return a color that is a little darker than the original color."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"getSubtleColor(color:JBColor)"})," will give you a subtle color based on the color you provide. it will return a color that is a more like pastel color for quieter tone."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"getContrastColor(color:JBColor)"})," will give you a contrast color based on the color you provide. it will give you a most contrast color based on your background color in light mode it is Dark and in light mode its light."]}),`
`]})]}),`
`,e.jsx("br",{}),`
`]})}function _(o={}){const{wrapper:r}={...f(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(w,{...o})}):w(o)}export{_ as default};
