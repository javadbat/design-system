import{j as o,M as r,o as s}from"./index-CJCalR8i.js";import{useMDXComponents as i}from"./index-B8rYRX2K.js";import"./iframe-rA0OgHHL.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const a=`# jb-qrcode

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-qrcode)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-qrcode/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-qrcode)](https://www.npmjs.com/package/jb-qrcode)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-qrcode)

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

## Using With JS Frameworks
- [<img src="https://img.shields.io/badge/React.js-jb--qrcode%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-qrcode/tree/main/react)

## Usage

## Attributes/Properties

| name | type | description |
| --- | --- | --- |
| \`value\` | attribute/property | QR code value. |
| \`logo\` | attribute/property | Optional center logo URL. |
| \`dotsOption\` | property | Dot rendering options passed to \`qr-code-styling\`. |
| \`cornersSquareOptions\` | property | Corner square rendering options passed to \`qr-code-styling\`. |
| \`cornersDotOptions\` | property | Corner dot rendering options passed to \`qr-code-styling\`. |

first install the package

\`\`\`sh
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
## Styling
you have 2 ways of customizing style in \`jb-qrcode\`

1- use CSS variable
2- set render options

### CSS variable
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

## Related Docs
- see [\`jb-qrcode/react\`](https://github.com/javadbat/jb-qrcode/tree/main/react); if you want to use this component in react

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.
`;function t(n){return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Components/JBQRCode/Readme"}),`
`,o.jsx(s,{children:a})]})}function u(n={}){const{wrapper:e}={...i(),...n.components};return e?o.jsx(e,{...n,children:o.jsx(t,{...n})}):t()}export{u as default};
