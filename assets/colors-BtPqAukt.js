import{j as e,M as i,H as c,b as n,c as d,d as l}from"./index-Tqxgz1FO.js";import{useMDXComponents as a}from"./index-CpNkpSEJ.js";import{b as r}from"./index-BkvPMclf.js";import"./iframe--EDVr8RP.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function t(s){const o={br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Theme/Colors"}),`
`,e.jsx(c,{children:"Color Palette"}),`
`,e.jsx(n,{children:"all color are based on oklch() color space"}),`
`,e.jsx("br",{}),`
`,e.jsxs(d,{children:[e.jsx(l,{title:"single",description:"",colors:{black:r.single.black.value,white:r.single.white.value,highlight:r.single.highlight.value}}),e.jsx(l,{title:"neutral",description:"",colors:{main:r.neutral[0].value,d1:r.neutral[1].value,d2:r.neutral[2].value,d3:r.neutral[3].value,d4:r.neutral[4].value,d5:r.neutral[5].value,d6:r.neutral[6].value,d7:r.neutral[7].value,d8:r.neutral[8].value,d9:r.neutral[9].value,d10:r.neutral[10].value}}),e.jsx(l,{title:"primary",description:"",colors:{main:r.primary.main.value,lighter:r.primary.light.value,dark:r.primary.dark.value,subtle:r.primary.subtle.value,contrast:r.primary.contrast.value,hover:r.primary.hover.value,pressed:r.primary.pressed.value}}),e.jsx(l,{title:"secondary",description:"",colors:{main:r.secondary.main.value,lighter:r.secondary.light.value,dark:r.secondary.dark.value,subtle:r.secondary.subtle.value,contrast:r.secondary.contrast.value,hover:r.secondary.hover.value,pressed:r.secondary.pressed.value}}),e.jsx(l,{title:"success",description:"",colors:{main:r.green.main.value,lighter:r.green.light.value,dark:r.green.dark.value,subtle:r.green.subtle.value,contrast:r.green.contrast.value,hover:r.green.hover.value,pressed:r.green.pressed.value}}),e.jsx(l,{title:"error",description:"",colors:{main:r.red.main.value,lighter:r.red.light.value,dark:r.red.dark.value,subtle:r.red.subtle.value,contrast:r.red.contrast.value,hover:r.red.hover.value,pressed:r.red.pressed.value}}),e.jsx(l,{title:"warning",description:"",colors:{main:r.yellow.main.value,lighter:r.yellow.light.value,dark:r.yellow.dark.value,subtle:r.yellow.subtle.value,contrast:r.yellow.contrast.value,hover:r.yellow.hover.value,pressed:r.yellow.pressed.value}})]}),`
`,e.jsx(n,{children:"Customize Component colors"}),`
`,e.jsx("p",{children:"in jb design system you have 3 way to change the components parts colors"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[`
`,e.jsxs("p",{children:["1. ",e.jsx(o.strong,{children:"general approach:"})," set the color palette variables base on your app design."]}),`
`]}),`
`,e.jsxs(o.li,{children:[`
`,e.jsxs("p",{children:["2. ",e.jsx(o.strong,{children:"specific part approach:"})," set the color variables of specific part of the component."]}),`
`]}),`
`,e.jsxs(o.li,{children:[`
`,e.jsxs("p",{children:["3. ",e.jsx(o.strong,{children:"component approach:"})," set the color variables of specific component."]}),`
`]}),`
`]}),`
`,e.jsxs("p",{children:[" for the first approach you can use the ",e.jsx(o.code,{children:"--jb-*"})," variables of the color palette in your css. for example:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`:root{
  --jb-primary: oklch(0.6 0.26 256);
  --jb-secondary: oklch(0.6 0.26 286);
  --jb-green: oklch(0.6 0.26 120);
  --jb-red: oklch(0.6 0.26 0);
  --jb-yellow: oklch(0.6 0.26 60);
}
`})}),`
`,e.jsx("p",{children:"in this approach all components part that use primary color will use your primary color instead."}),`
`,e.jsx("p",{children:" remember you can set this variable in every scope in your app like in your app root or in your page root. this will allow you to have multiple palette ot theme in one app."}),`
`,e.jsxs("p",{children:["for the second approach you can use the ",e.jsx(o.code,{children:"--jb-component-name-*"})," variables"]}),`
`,e.jsx("p",{children:"in this case component will override it's default color value for that specific parts. for example jb-input dont have any border by default but you can set it like this"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`:root{
  --jb-input-border-color: oklch(0.6 0.26 256);
  /*or*/
  --jb-input-border-color: var(--jb-primary);
}
`})}),`
`,e.jsx("p",{children:"this will set the border color of the jb-input component to your primary color."}),`
`,e.jsxs("p",{children:["for the third approach you can use the ",e.jsx(o.code,{children:"component-name"})," selector and set direct variable within"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`  jb-input{
    --border-color: oklch(0.6 0.26 256);
    /*or*/
    --border-color: var(--jb-primary);
  }
`})}),`
`,e.jsx("p",{children:"this will be most useful when you want to set the variable or style in some specific state"}),`
`,e.jsx("p",{children:"for example you can set the border color of the jb-input component to your primary color when it is focused."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-css",children:`  jb-input:focus{
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
`,e.jsx(n,{children:"Color Rules"}),`
`,e.jsxs(o.p,{children:["we use ",e.jsx(o.code,{children:"oklch()"})," color space for all colors in our design system. This allows us to create a consistent and harmonious color palette that is easy to use and understand."]}),`
`,e.jsxs("p",{children:[e.jsxs(o.p,{children:["for example primary color is ",e.jsx(o.code,{children:"oklch(0.6 0.26 256)"})," which is a blue color with a lightness of 60%, chroma of 0.26, and hue of 256 degrees."]}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["for hover state we add ",e.jsx(o.code,{children:"0.07"})," to lightness and ",e.jsx(o.code,{children:"0.07"})," to chroma so it gets a little lighter and brighter."]}),`
`,e.jsxs(o.li,{children:["for pressed state we subtract ",e.jsx(o.code,{children:"0.1"})," to lightness and ",e.jsx(o.code,{children:"0.05"})," to chroma so it gets a little darker and dimmer."]}),`
`,e.jsxs(o.li,{children:["for disabled state we use ",e.jsx(o.code,{children:"hsl(from var(--non-disable-color) h 12% 66.1)"})," css value to make it dim and neutral."]}),`
`]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n,{children:"Define custom colors"}),`
`,e.jsx("br",{}),`
`,e.jsx("p",{children:e.jsxs(o.p,{children:["we use ",e.jsx(o.code,{children:"JBColor"}),` type for all colors in our design system. This allows us to create a consistent and harmonious color palette that is easy to use and understand.
to creating your own custom color you must use `,e.jsx(o.code,{children:"oklch()"}),` color space for all colors in our design system. This allows us to create a consistent and harmonious color palette that is easy to use and understand.
for example primary color is `,e.jsx(o.code,{children:"oklch(0.6 0.26 256)"})," which is a blue color with a lightness of 60%, chroma of 0.26, and hue of 256 degrees."]})}),`
`,e.jsxs("p",{children:[e.jsxs(o.p,{children:["after you define your color create a instance of ",e.jsx(o.code,{children:"JBColor"})," class by providing the color you want to use. for example:"]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`const primary = new JBColor({lightness:0.6,chroma:0.26,hue:256},'--jb-primary');
`})}),e.jsx(o.p,{children:"after you all your base colors you can create a color variants base on your base color. for example:"})]}),`
`,e.jsxs("p",{children:[e.jsx(o.p,{children:"there are several function that will give you the color you want:"}),e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"getNeutralColor(lightness:number)"})," will give you a neutral color based on the lightness value you provide. it will return a color that is in the range of 0 to 10."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"getHoverColor(color:JBColor)"})," will give you a hover color based on the color you provide. it will return a color that is a little lighter and brighter than the original color."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"getPressedColor(color:JBColor)"})," will give you a pressed color based on the color you provide. it will return a color that is a little darker and dimmer than the original color."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"getLighterColor(color:JBColor)"})," will give you a lighter color based on the color you provide. it will return a color that is a little lighter than the original color."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"getDarkerColor(color:JBColor)"})," will give you a darker color based on the color you provide. it will return a color that is a little darker than the original color."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"getSubtleColor(color:JBColor)"})," will give you a subtle color based on the color you provide. it will return a color that is a more like pastel color for quieter tone."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"getContrastColor(color:JBColor)"})," will give you a contrast color based on the color you provide. it will give you a most contrast color based on your background color in light mode it is Dark and in light mode its light."]}),`
`]})]}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"set-color-in-javascript",children:"set color in javascript"}),`
`,e.jsxs(o.p,{children:["jb-design system use css variables for colors and you can set this css variables in your app whenever you want. but beside that we put some easier way to set these variables using ",e.jsx(o.code,{children:"createThemeColor"})," and ",e.jsx(o.code,{children:"setColors"})," functions."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-javascript",children:`// you just pass each color base oklch color parameters and createThemeColor will give you the whole color group (includes lighter, darker ,...)
const colors = createThemeColor({
  //all colors are optional just set the colors you want to change if you not set it will use the default color.
  primary: {lightness:0.6,chroma:0.26,hue:256},
  secondary: {lightness:0.6,chroma:0.26,hue:286},
  yellow:{lightness:0.75,chroma:0.18,hue:70},
  green:{lightness:0.68,chroma:0.1484,hue:162.1},
  red:{lightness:0.6,chroma:0.22,hue:23.21}
}); 
// set the generated color in project root
setColors(colors);
`})}),`
`,e.jsxs(o.p,{children:["base on above example you can modify the ",e.jsx(o.code,{children:"colors"})," variable base on your need after creation and then pass them to ",e.jsx(o.code,{children:"setColors"})," to actually setting it into your app.",e.jsx(o.br,{}),`
`,"this method currently only support ",e.jsx(o.code,{children:"JBColorGroup"})," color types. for single or neutral colors just use css variables."]})]})}function b(s={}){const{wrapper:o}={...a(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(t,{...s})}):t(s)}export{b as default};
