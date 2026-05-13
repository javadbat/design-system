import{j as o,M as s,k as i}from"./index-BNEkn9M_.js";import{useMDXComponents as r}from"./index-CSke7xmO.js";import"./iframe-KBiU5G23.js";import"./index-CEK5zJnf.js";import"./index-C2vOwVL5.js";import"./index-CupGaPSm.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const p=`# JBPopover React Component
this component is a React wrapper around \`jb-popover\` web-component.

## demo

- standalone sample in [storybook](https://javadbat.github.io/design-system/?path=/story/components-jbpopover)

- You can also see in use demo, inside others component like: [jb-date-input](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-inputs-jbdateinput-) and[ jb-time-input](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-inputs-jbtimeinput) ot [jb-select](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbselect)

## usage

install:

\`\`\`sh
npm i jb-popover
\`\`\`
usage:

\`\`\`js
import {JBPopover} 'jb-popover/react'
\`\`\`

\`\`\`jsx
<JBPopover>
  <!-- put your content here   -->
   <div>my custom content</div>
<JBPopover>
\`\`\`

## open & close popover

setOopen and close with isOpen

\`\`\`jsx
//  in mobile view we close popover on back click and prevent real back click event
<JBPopover isOpen={isOpen} onClose={()=>{setIsOpen(false)}}>popover content</JBPopover>
\`\`\`


## overflow
we can handle overflow by set 2 \`overflowHandler\`, \`overflowDom\` property
\`\`\`jsx
//popover will slide soothly up if it overflow the page or any other assigned container
<JBPopover overflowHandler="SLIDE">popover content</JBPopover>
// popover would check overflow status with window by default if you set overflowDom to any other DOM Element it will check overflow by it for example if ypu use it in a modal you can set it to modal dom. set this property is optional
<JBPopover overflowHandler="SLIDE" overflowDom={someDomElement}>
\`\`\`

## Bind to element

jb-popover use absolute positioning by default because it more performant and easier to manage. but in some scenario you may prefer \`fixed\` position with top & left over absolute like when popover open in a modal.    
for this situation we have method called \`bindTarget\` in React we set \`anchor\` props to certain ref to call this method. this method get an element and open popover base on that element position in page in \`fixed\` to make sure popover is always on top.

\`\`\`tsx
const anchorRef = useRef<JBButtonWebComponent>(null);
return(
  <div style={{paddingInline:\`5rem\`,paddingBlock:\`5rem\`,}}>
    <JBButton ref={anchorRef} >Click me</JBButton>
    <JBPopover anchor={anchorRef} />
  </div>
)

\`\`\`
## anchor position
when you bind some element as an anchor to the popover, popover will position itself base on anchor position.
by default popover position itself in bottom and start of the anchor so in "ltr" left of the anchor = left of popover and in rtl right of popover = right of anchor.
if you want to change that you can set \`positionArea\` property like this:

\`\`\`jsx
// will adjust end of popover to end of anchor
<JBPopover anchor={anchorRef} positionArea={{block:"before",inline:"end"}}/>
\`\`\`

## prevent close on mobile by back button

in some cases you want to prevent popover from closing in mobile. for doing so, just add id attribute to the popover element

## set custom style

see [\`jb-popover\`](https://www.npmjs.com/package/jb-popover) documentation to see variable list`;function t(e){return o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"Components/JBPopover/React Readme"}),`
`,o.jsx(i,{children:p})]})}function f(e={}){const{wrapper:n}={...r(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(t,{...e})}):t()}export{f as default};
