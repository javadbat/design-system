import{j as o,M as r,m as p}from"./index-D6aehRQK.js";import{useMDXComponents as s}from"./index-B8rYRX2K.js";import"./iframe-CUASWiWS.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const i=`# jb-popover

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-popover)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-popover/main/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dw/jb-popover)](https://www.npmjs.com/package/jb-popover)

sometimes you need a to open a small window next to a element to show more detail or more available actions. jb-popover will be doing that for you with some benefits:

- handle overflow if popover could not fit into it's designed place.
- show popover as a small window next to element in desktop and show it as a bottom-sheet in mobile
- handle animations in standard manner with overflow handler

## usage

install:
\`\`\`cmd
npm i jb-popover
\`\`\`
usage:
\`\`\`js
import 'jb-popover'
\`\`\`
\`\`\`html
<jb-popover>
  <!-- put your content here   -->
   <div>my custom content</div>
<jb-popover>
\`\`\`
## open & close popover

by just calling \`open\` and \`close\` method:

\`\`\`javascript
document.querySelector('jb-popover').open();
document.querySelector('jb-popover').close();
\`\`\`
<!-- in mobile view we close popover on back click and prevent real back click event -->
## overflow

we can handle overflow by set 2 \`overflowHandler\`, \`overflowDom\` property
\`\`\`javascript
//popover will slide soothly up if it overflow the page or any other assigned container
document.querySelector('jb-popover').overflowHandler = "SLIDE";
// popover would check overflow status with window by default if you set overflowDom to any other DOM Element it will check overflow by it for example if ypu use it in a modal you can set it to modal dom. set this property is optional
document.querySelector('jb-popover').overflowDom= document.querySelector('jb-modal');
\`\`\`
## prevent close on mobile by back button

in some cases you want to prevent popover from closing in mobile. for doing so, just add id attribute to the popover element

## set custom style

you can customize jb-popover styles by just set some css variable. here is the variable list:    

| css variable name                       | description                                                                     |
| -------------                           | -------------                                                                   |
| --jb-popover-z-index                    | z-index of opened popover                                                       |
| --jb-popover-bg-color                   | background color of popover content                                             |
| --jb-popover-border-radius              | border-radius of popover (must be single like 24px and not 24px 24px 24px 24px) |`;function t(e){return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"Components/JBPopover/Readme"}),`
`,o.jsx(p,{children:i})]})}function w(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(t,{...e})}):t()}export{w as default};
