import{j as e,M as p,k as r}from"./index-Bv8zhEsk.js";import{useMDXComponents as s}from"./index-DVgGKjXv.js";import"./iframe-CIgGA-FX.js";import"./index-DwQS_Y10.js";import"./index-BrB0Fkit.js";import"./index-Bls5tne7.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const i=`# jb-popover

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-popover)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-popover/main/LICENSE)
[![NPM Version](hpopovere)](https://www.npmjs.com/package/jb-popover)

sometimes you need a to open a small window next to a element to show more detail or more available actions. jb-popover will be doing that for you with some benefits:

- handle overflow if popover could not fit into it's designed place.
- show popover as a small window next to element in desktop and show it as a bottom-sheet in mobile
- handle animations in standard manner with overflow handler

## demo

jb-popover doesn't have any Demo right now but you can see it's usage in [jb-date-input](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-inputs-jbdateinput-) and[ jb-time-input](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-inputs-jbtimeinput) ot [jb-select](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect)

## usage

install:

\`\`\`sh
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
## Bind to element

jb-popover use absolute positioning by default because it more performant and easier to manage. but in some scenario you may prefer \`fixed\` position with top & left over absolute like when popover open in a modal.    
for this situation we have method called \`bindTarget\`. this method get an element and open popover base on that element position in page in \`fixed\` to make sure popover is always on top.

\`\`\`typescript

const yourElement = document.querySelector("input")
document.querySelector("jb-popover").bindTarget(yourElement);

\`\`\`
## prevent close on mobile by back button

in some cases you want to prevent popover from closing in mobile. for doing so, just add id attribute to the popover element

## set custom style

you can customize jb-popover styles by just set some css variable. here is the variable list:    

| css variable name                       | description                                                                     |
| -------------                           | -------------                                                                   |
| --jb-popover-z-index                    | z-index of opened popover                                                       |
| --jb-popover-bg-color                   | background color of popover content                                             |
| --jb-popover-border-radius              | border-radius of popover (must be single like 24px and not 24px 24px 24px 24px) |
| --jb-popover-top                        | top of the popover in desktop mode.                                             |`;function t(o){return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Components/JBPopover/Readme"}),`
`,e.jsx(r,{children:i})]})}function h(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t()}export{h as default};
