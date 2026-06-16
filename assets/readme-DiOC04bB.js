import{j as e,M as a,o as s}from"./index-CJCalR8i.js";import{useMDXComponents as d}from"./index-B8rYRX2K.js";import"./iframe-rA0OgHHL.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const i=`# jb-modal

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-modal)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-modal/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-modal)](https://www.npmjs.com/package/jb-modal)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-modal)

modal web component with features:

- Responsive, open as Bottom-sheet in mobile device.
- Framework free so you can use it anywhere.
- Customizable content & style.
- Pre-styled header and footer. 
- Support typescript.
- Auto close on background click.
- You can add custom route history in browser.
- Back button handler to just close the modal instead of real back.
- Keep modal open in case of page refresh (by just provide an id).

## Demo

- [github pages](https://javadbat.github.io/jb-modal)    
- [storybook](https://javadbat.github.io/design-system/?path=/story/components-jbmodal)

## Using With JS Frameworks
- [<img src="https://img.shields.io/badge/React.js-jb--modal%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-modal/tree/main/react)

## Installation
\`\`\`sh
npm i jb-modal
\`\`\`

## Usage

## Attributes/Properties

| name | type | description |
| --- | --- | --- |
| \`is-open\` | attribute | Opens the modal from markup. |
| \`open\` | property | Opens or closes the modal from JavaScript. |
| \`closeOnBackgroundClick\` | property | Allows the modal to close when the backdrop is clicked. |
| \`keepState\` | property | Keeps modal content mounted between open and close states. |
| \`close\` | event | Fired when the modal closes. |
| \`header\` | slot | Header content. |
| \`content\` | slot | Main modal content. |
| \`footer\` | slot | Footer content. |

\`\`\`html
<jb-modal is-open="true">
    <div>modal content</div>
</jb-modal>
<!-- OR -->
<jb-modal is-open="true">
    <div slot="header">modal header</div>
    <div slot="content">modal content</div>
    <div slot="footer">modal footer</div>
</jb-modal>
\`\`\`
## auto close on background click
\`\`\`js
document.querySelector('jb-modal').config.autoCloseOnBackgroundClick = true;
\`\`\`

## keep modal state

if you want your modal to keep open when user refresh the page or you want capture back button in mobile when modal is open you just need to provide an \`id\` attribute.

\`\`\`html
<jb-modal is-open="true" id="Something">
</jb-modal>
\`\`\`
## Events
\`\`\`js
//when web-component load and you can access modal logic
document.querySelector('jb-modal').addEventListener("load",(e)=>{/*your function*/});
// when modal load and initiated completely 
document.querySelector('jb-modal').addEventListener("init",(e)=>{/*your function*/});
// when page refresh and modal open by default because of url 
document.querySelector('jb-modal').addEventListener("urlOpen",(e)=>{/*your function*/});
// when modal closed
document.querySelector('jb-modal').addEventListener("close",(e)=>{
    // could be "BACKGROUND_CLICK"  "HISTORY_BACK_EVENT" "CLOSE_BUTTON_CLICK"
    const closeType = e.detail.eventType 
    /*your function*/
});

\`\`\`

## customize modal look

you can customize modal look by following css properties
| CSS variable name                  | description                                                                                   |
| -------------                      | -------------                                                                                 |
| --jb-modal-bg-color                | modal content background color default is black \`#fff\`                                        |
| --jb-modal-back-bg-color           | modal back background color                                                                   |
| --jb-modal-border-radius           | modal border-radius default \`24px\`                                                            |
| --jb-modal-z-index | Customize z index. |

## Related Docs
- see [\`jb-modal/react\`](https://github.com/javadbat/jb-modal/tree/main/react); if you want to use this component in react

- see [All JB Design system Component List](https://javadbat.github.io/design-system/

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.
`;function t(o){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/JBModal/Readme"}),`
`,e.jsx(s,{children:i})]})}function g(o={}){const{wrapper:n}={...d(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t()}export{g as default};
