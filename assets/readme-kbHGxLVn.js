import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-Sdk7KWEq.js";import{_ as n,d as r,k as i,u as a}from"./blocks-C8_8gXbV.js";import{t as o}from"./mdx-react-shim-BbFg_QFP.js";var s,c=e((()=>{s=`# jb-grid

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-grid)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-grid/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-grid)](https://www.npmjs.com/package/jb-grid)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-grid)

> currently this component only available in react in full mode and web-component is only support parts of the data grid like pagination and Row, Cell.

## Using With JS Frameworks
- [<img src="https://img.shields.io/badge/React.js-jb--grid%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" />](https://github.com/javadbat/jb-grid/tree/main/react)

## Pagination
for pagination we use \`jb-pagination\` web-component

### jb-pagination API

| name | type | description |
| --- | --- | --- |
| \`pageIndex\` | property | Current page index. |
| \`min\` | property | Minimum page index. |
| \`max\` | property | Maximum page index. |

\`\`\`html
<jb-pagination />
\`\`\`
\`jb-pagination\` have some config into it here is how to config it:

\`\`\`javascript
import \`jb-pagination\`;
//change current page index
document.querySelector(\`jb-pagination\`).pageIndex = 5;
//max page number default is infinite
document.querySelector(\`jb-pagination\`).max = 10;
//min page number default is 1
document.querySelector(\`jb-pagination\`).min = 0;
\`\`\`

For the standalone pagination API and CSS variables, see [jb-pagination README](https://javadbat.github.io/design-system/?path=/docs/components-jbgrid-jbpagination-readme--docs).

### jb-pagination CSS variables

| CSS variable name | description |
| --- | --- |
| --jb-pagination-index-width | Width of each page index button. |

## Row & Cells
\`jb-row\` is a row web-component that imply a grid template based on given config to below cells. it also accept expand row that you can open and close it.

here is a code overview:
\`\`\`html
<jb-row>
  <jb-cell name="id">123<jb-cell>
  <jb-cell name="name">Joe<jb-cell>
  <jb-cell name="age">10<jb-cell>
  <jb-cell name="operation"><jb-expand-toggle><button>toggle</button></jb-expand-toggle><jb-cell>
  <div slot="expand">expand window content</div>
</jb-row>
\`\`\`

### Set Column Size

to set column size of the row you can pass a config that tell each column size. remember size is optional(default is \`1fr\`) but name is mandatory.
\`\`\`js
document.querySelector(""jb-row).rowTemplate = [
  {name:"id",size:"1fr"},
  {name:"name",size:"400px"},
  {name:"age",size:200},
  {name:"operation",size:20%},
]
\`\`\`

### expand row

each row can contain a expand panel that open by user choice to show more data about that row.
you must set \`slot="expand"\`in a div to make it as a expand div and set \`isOpen\` of row to open and close it or use \`jb-expand-toggle\` to do it automatically for you.

\`\`\`html
<jb-row>
  <jb-cell name="id">123<jb-cell>
  <jb-cell name="operation"><jb-expand-toggle><button>toggle</button></jb-expand-toggle><jb-cell>
  <div slot="expand">expand window content</div>
</jb-row>
\`\`\`
> \`<jb-expand-toggle>\`has a arrow icon designed to be put in first cell by default but you can customize it by passing children to it as you wish
if you want to close and open by js you can use js mode:
\`\`\`js
//to open it
document.querySelector(\`jb-row\`).isOpen = true;
// to close it
document.querySelector(\`jb-row\`).isOpen = false;
\`\`\`

### Ellipses Cell

if your cell content is a long text need to get ellipses on overflow add \`ellipsis\` attribute to the \`jb-cell\` and \`ellipsis="max line"\` for multiline
\`\`\`html
<jb-cell ellipsis>Put Long Text Here</jb-cell>
<!-- Limited Browser Support for Multiline -->
<jb-cell ellipsis="3">Put Long Text Here</jb-cell>
\`\`\``}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBGrid/Readme`}),`
`,(0,d.jsx)(a,{children:s})]})}function u(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),n(),c()}))();export{u as default};