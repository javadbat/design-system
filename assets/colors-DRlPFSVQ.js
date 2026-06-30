import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CCmaC7-g.js";import{n,r}from"./dist-CSLcGHe3.js";import{_ as i,d as a,h as o,i as s,k as c,l,r as u}from"./blocks-C9d-vimo.js";import{t as d}from"./mdx-react-shim-Qa2OpQoC.js";function f(e){let t={br:`br`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...c(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{title:`Theme/Colors`}),`
`,(0,m.jsx)(l,{children:`Color Palette`}),`
`,(0,m.jsx)(o,{children:`all color are based on oklch() color space`}),`
`,(0,m.jsx)(`br`,{}),`
`,(0,m.jsxs)(s,{children:[(0,m.jsx)(u,{title:`single`,subtitle:`--jb-black,--jb-white,--jb-highlight`,colors:{black:n.single.black.value,white:n.single.white.value,highlight:n.single.highlight.value}}),(0,m.jsx)(u,{title:`neutral`,subtitle:`--jb-neutral,--jb-neutral-[index]`,colors:{main:n.neutral[0].value,d1:n.neutral[1].value,d2:n.neutral[2].value,d3:n.neutral[3].value,d4:n.neutral[4].value,d5:n.neutral[5].value,d6:n.neutral[6].value,d7:n.neutral[7].value,d8:n.neutral[8].value,d9:n.neutral[9].value,d10:n.neutral[10].value}}),(0,m.jsx)(u,{title:`primary`,subtitle:`--jb-primary,--jb-primary-[name]`,colors:{main:n.primary.main.value,"l(lighter)":n.primary.light.value,"d(dark)":n.primary.dark.value,subtle:n.primary.subtle.value,contrast:n.primary.contrast.value,hover:n.primary.hover.value,pressed:n.primary.pressed.value}}),(0,m.jsx)(u,{title:`secondary`,subtitle:`--jb-secondary,--jb-secondary-[name]`,colors:{main:n.secondary.main.value,"l(lighter)":n.secondary.light.value,"d(dark)":n.secondary.dark.value,subtle:n.secondary.subtle.value,contrast:n.secondary.contrast.value,hover:n.secondary.hover.value,pressed:n.secondary.pressed.value}}),(0,m.jsx)(u,{title:`success`,subtitle:`--jb-green,--jb-green-[name]`,colors:{main:n.green.main.value,"l(lighter)":n.green.light.value,"d(dark)":n.green.dark.value,subtle:n.green.subtle.value,contrast:n.green.contrast.value,hover:n.green.hover.value,pressed:n.green.pressed.value}}),(0,m.jsx)(u,{title:`error`,subtitle:`--jb-red,--jb-red-[name]`,colors:{main:n.red.main.value,"l(lighter)":n.red.light.value,"d(dark)":n.red.dark.value,subtle:n.red.subtle.value,contrast:n.red.contrast.value,hover:n.red.hover.value,pressed:n.red.pressed.value}}),(0,m.jsx)(u,{title:`warning`,subtitle:`--jb-yellow,--jb-yellow-[name]`,colors:{main:n.yellow.main.value,"l(lighter)":n.yellow.light.value,"d(dark)":n.yellow.dark.value,subtle:n.yellow.subtle.value,contrast:n.yellow.contrast.value,hover:n.yellow.hover.value,pressed:n.yellow.pressed.value}})]}),`
`,(0,m.jsx)(o,{children:`Customize Component colors`}),`
`,(0,m.jsx)(`p`,{children:`in jb design system you have 3 way to change the components parts colors`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(`p`,{children:[`1. `,(0,m.jsx)(t.strong,{children:`general approach:`}),` set the color palette variables base on your app design.`]}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(`p`,{children:[`2. `,(0,m.jsx)(t.strong,{children:`specific part approach:`}),` set the color variables of specific part of the component.`]}),`
`]}),`
`,(0,m.jsxs)(t.li,{children:[`
`,(0,m.jsxs)(`p`,{children:[`3. `,(0,m.jsx)(t.strong,{children:`component approach:`}),` set the color variables of specific component.`]}),`
`]}),`
`]}),`
`,(0,m.jsxs)(`p`,{children:[` for the first approach you can use the `,(0,m.jsx)(t.code,{children:`--jb-*`}),` variables of the color palette in your css. for example:`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-css`,children:`:root{
  --jb-primary: oklch(0.6 0.26 256);
  --jb-secondary: oklch(0.6 0.26 286);
  --jb-green: oklch(0.6 0.26 120);
  --jb-red: oklch(0.6 0.26 0);
  --jb-yellow: oklch(0.6 0.26 60);
}
`})}),`
`,(0,m.jsx)(`p`,{children:`in this approach all components part that use primary color will use your primary color instead.`}),`
`,(0,m.jsx)(`p`,{children:` remember you can set this variable in every scope in your app like in your app root or in your page root. this will allow you to have multiple palette ot theme in one app.`}),`
`,(0,m.jsxs)(`p`,{children:[`for the second approach you can use the `,(0,m.jsx)(t.code,{children:`--jb-component-name-*`}),` variables`]}),`
`,(0,m.jsx)(`p`,{children:`in this case component will override it's default color value for that specific parts. for example jb-input dont have any border by default but you can set it like this`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-css`,children:`:root{
  --jb-input-border-color: oklch(0.6 0.26 256);
  /*or*/
  --jb-input-border-color: var(--jb-primary);
}
`})}),`
`,(0,m.jsx)(`p`,{children:`this will set the border color of the jb-input component to your primary color.`}),`
`,(0,m.jsxs)(`p`,{children:[`for the third approach you can use the `,(0,m.jsx)(t.code,{children:`component-name`}),` selector and set direct variable within`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-css`,children:`  jb-input{
    --border-color: oklch(0.6 0.26 256);
    /*or*/
    --border-color: var(--jb-primary);
  }
`})}),`
`,(0,m.jsx)(`p`,{children:`this will be most useful when you want to set the variable or style in some specific state`}),`
`,(0,m.jsx)(`p`,{children:`for example you can set the border color of the jb-input component to your primary color when it is focused.`}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-css`,children:`  jb-input:focus{
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
`,(0,m.jsx)(o,{children:`Color Rules`}),`
`,(0,m.jsxs)(t.p,{children:[`we use `,(0,m.jsx)(t.code,{children:`oklch()`}),` color space for all colors in our design system. This allows us to create a consistent and harmonious color palette that is easy to use and understand.`]}),`
`,(0,m.jsxs)(`p`,{children:[(0,m.jsxs)(t.p,{children:[`for example primary color is `,(0,m.jsx)(t.code,{children:`oklch(0.6 0.26 256)`}),` which is a blue color with a lightness of 60%, chroma of 0.26, and hue of 256 degrees.`]}),(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`for hover state we add `,(0,m.jsx)(t.code,{children:`0.07`}),` to lightness and `,(0,m.jsx)(t.code,{children:`0.07`}),` to chroma so it gets a little lighter and brighter.`]}),`
`,(0,m.jsxs)(t.li,{children:[`for pressed state we subtract `,(0,m.jsx)(t.code,{children:`0.1`}),` to lightness and `,(0,m.jsx)(t.code,{children:`0.05`}),` to chroma so it gets a little darker and dimmer.`]}),`
`,(0,m.jsxs)(t.li,{children:[`for disabled state we use `,(0,m.jsx)(t.code,{children:`hsl(from var(--non-disable-color) h 12% 66.1)`}),` css value to make it dim and neutral.`]}),`
`]})]}),`
`,(0,m.jsx)(`br`,{}),`
`,(0,m.jsx)(o,{children:`Define custom colors`}),`
`,(0,m.jsx)(`br`,{}),`
`,(0,m.jsx)(`p`,{children:(0,m.jsxs)(t.p,{children:[`we use `,(0,m.jsx)(t.code,{children:`JBColor`}),` type for all colors in our design system. This allows us to create a consistent and harmonious color palette that is easy to use and understand.
to creating your own custom color you must use `,(0,m.jsx)(t.code,{children:`oklch()`}),` color space for all colors in our design system. This allows us to create a consistent and harmonious color palette that is easy to use and understand.
for example primary color is `,(0,m.jsx)(t.code,{children:`oklch(0.6 0.26 256)`}),` which is a blue color with a lightness of 60%, chroma of 0.26, and hue of 256 degrees.`]})}),`
`,(0,m.jsxs)(`p`,{children:[(0,m.jsxs)(t.p,{children:[`after you define your color create a instance of `,(0,m.jsx)(t.code,{children:`JBColor`}),` class by providing the color you want to use. for example:`]}),(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-ts`,children:`const primary = new JBColor({lightness:0.6,chroma:0.26,hue:256},'--jb-primary');
`})}),(0,m.jsx)(t.p,{children:`after you all your base colors you can create a color variants base on your base color. for example:`})]}),`
`,(0,m.jsxs)(`p`,{children:[(0,m.jsx)(t.p,{children:`there are several function that will give you the color you want:`}),(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`getNeutralColor(lightness:number)`}),` will give you a neutral color based on the lightness value you provide. it will return a color that is in the range of 0 to 10.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`getHoverColor(color:JBColor)`}),` will give you a hover color based on the color you provide. it will return a color that is a little lighter and brighter than the original color.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`getPressedColor(color:JBColor)`}),` will give you a pressed color based on the color you provide. it will return a color that is a little darker and dimmer than the original color.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`getLighterColor(color:JBColor)`}),` will give you a lighter color based on the color you provide. it will return a color that is a little lighter than the original color.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`getDarkerColor(color:JBColor)`}),` will give you a darker color based on the color you provide. it will return a color that is a little darker than the original color.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`getSubtleColor(color:JBColor)`}),` will give you a subtle color based on the color you provide. it will return a color that is a more like pastel color for quieter tone.`]}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`getContrastColor(color:JBColor)`}),` will give you a contrast color based on the color you provide. it will give you a most contrast color based on your background color in light mode it is Dark and in light mode its light.`]}),`
`]})]}),`
`,(0,m.jsx)(`br`,{}),`
`,(0,m.jsx)(t.h2,{id:`set-color-in-javascript`,children:`set color in javascript`}),`
`,(0,m.jsxs)(t.p,{children:[`jb-design system use css variables for colors and you can set this css variables in your app whenever you want. but beside that we put some easier way to set these variables using `,(0,m.jsx)(t.code,{children:`createThemeColor`}),` and `,(0,m.jsx)(t.code,{children:`setColors`}),` functions.`]}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-javascript`,children:`// you just pass each color base oklch color parameters and createThemeColor will give you the whole color group (includes lighter, darker ,...)
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
`,(0,m.jsxs)(t.p,{children:[`base on above example you can modify the `,(0,m.jsx)(t.code,{children:`colors`}),` variable base on your need after creation and then pass them to `,(0,m.jsx)(t.code,{children:`setColors`}),` to actually setting it into your app.`,(0,m.jsx)(t.br,{}),`
`,`this method currently only support `,(0,m.jsx)(t.code,{children:`JBColorGroup`}),` color types. for single or neutral colors just use css variables.`]})]})}function p(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),d(),i(),r()}))();export{p as default};