import{j as n,M as r,m as s}from"./index-uLC8VMdW.js";import{useMDXComponents as a}from"./index-CpNkpSEJ.js";import"./iframe-D3OTXEMF.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const i=`# jb-qrcode

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-qrcode)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-qrcode/main/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dw/jb-qrcode)](https://www.npmjs.com/package/jb-qrcode)

qrcode web component.    
this component use [qr-code-styling](https://www.npmjs.com/package/qr-code-styling) inside and handle renders and props set for you.

benefits:

- custom styling for color and roundness
- can load your logo in the center of the component
- works with zero config
- handle all life cycle without problem
- has ready to use overlay with download button 

## Demo

[storybook](https://javadbat.github.io/design-system/?path=/docs/components-jbqrcode)    

## using with JS frameworks

to use this component in **react** see [\`jb-qrcode/react\`](https://github.com/javadbat/jb-qrcode/tree/main/react);

## usage

first install the package

\`\`\`bash
npm i jb-qrcode
\`\`\`
then import js file

\`\`\`js
import 'jb-qrcode'
\`\`\`

then use in your html

\`\`\`HTML
<jb-qrcode value="http://www.google.com">
\`\`\`
## add logo

\`\`\`HTML
<jb-qrcode value="http://www.google.com" logo="put your logo url here">
\`\`\`
## styling
you have 2 ways of customizing style in \`jb-qrcode\`

1- use css variable
2- set render options

### css variable
here is the variable list:

| variable name                             | description |
|---------------                            |-------------|
| --image-color                             |             |
| --jb-qrcode-image-color                   |             |
| --jb-qrcode-overlay-bg-color              |             |
| --jb-qrcode-overlay-button-color          |             |
| --jb-qrcode-overlay-button-bg-color-hover |             |
| --jb-qrcode-overlay-button-color-hover    |             |

### set render option 

render option is the option of [qr-code-styling](https://www.npmjs.com/package/qr-code-styling) for render the qr code. here is how you can pass them to \`jb-qrcode\`:

\`\`\`js
const dom = document.querySelector("jb-qrcode");
   // add gradient color and make dots round 
    dom.dotsOption={
      color: "var(--jb-primary)",
      gradient: {
        type: "linear",
        rotation: 45,
        colorStops: [{ color: "var(--jb-primary)", offset: 0 }, { color: "var(--jb-secondary)", offset: 0.8 }, { color: "var(--jb-primary)", offset: 1 }]
      },
      type: "rounded"
    }
    // make corner box round and change their color
    dom.cornersSquareOptions ={
      type:"extra-rounded",
      color:"var(--jb-primary)"
    }
\`\`\`

## Other Related Docs:

- see [\`jb-qrcode/react\`](https://github.com/javadbat/jb-qrcode/tree/main/react); if you want to use this component in react

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.`;function t(o){return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Components/JBQRCode/Readme"}),`
`,n.jsx(s,{children:i})]})}function g(o={}){const{wrapper:e}={...a(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t()}export{g as default};
