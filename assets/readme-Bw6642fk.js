import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-kacJPVKr.js";import{A as n,d as r,u as i,v as a}from"./blocks-GMI-_iQo.js";import{t as o}from"./mdx-react-shim-BnxG2iIe.js";var s,c=e((()=>{s=`# jb-grid

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
| --jb-pagination-arrow-button-fill-color | Fill color of pagination arrow buttons. |
| --jb-pagination-arrow-button-fill-color-disabled | Fill color of disabled pagination arrow buttons. |
| --jb-pagination-index-width | Width of each page index button. |
| --jb-pagination-page-index-color | Color of page index buttons. |
| --jb-pagination-page-index-color-current | Color of the current page index button. |

### jb-row CSS variables

| CSS variable name | description |
| --- | --- |
| --jb-row-bg-color | Row background color. |
| --jb-row-bg-color-even | Even row background color. |
| --jb-row-bg-color-even-tablet | Even row background color in tablet layout. |
| --jb-row-border-radius | Row border radius in tablet layout. |
| --jb-row-expand-border-color | Expand panel bottom border color. |
| --jb-row-expand-padding-block | Expand panel block padding. |
| --jb-row-expand-padding-inline | Expand panel inline padding. |
| --jb-row-shadow-color | Row shadow color in tablet layout. |

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
  {name:"name",size:"25rem"},
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
\`\`\`

## Table Header

\`jb-table-header\` is a grid header wrapper for \`jb-col-header\` cells. Set \`headerTemplate\` to the same column template shape used by \`jb-row\`.

\`\`\`html
<jb-table-header>
  <jb-col-header name="id">
    <span slot="title">ID</span>
  </jb-col-header>
  <jb-col-header name="name" sortable>
    <span slot="title">Name</span>
  </jb-col-header>
</jb-table-header>
\`\`\`

\`\`\`js
import 'jb-grid';

document.querySelector('jb-table-header').headerTemplate = [
  { name: 'id', size: '5rem' },
  { name: 'name', size: '1fr' },
];
\`\`\`

### jb-table-header API

| name | type | description |
| --- | --- | --- |
| \`headerTemplate\` | property | Column template config for the header grid. |

### jb-col-header API

| name | type | description |
| --- | --- | --- |
| \`name\` | attribute/property | Column name. It is used as the grid-area name. |
| \`sortable\` | attribute/property | Enables click sorting for this column. |
| \`sort\` | attribute/property | Current sort direction. Accepts \`asc\`, \`desc\`, or no value. |
| \`sort\` | event | Fired when a sortable header is clicked. Event detail is \`{ name, sort }\`. |
| \`title\` | slot | Header caption content. |

\`\`\`js
document.querySelector('jb-col-header').addEventListener('sort', (event) => {
  console.log(event.detail.name, event.detail.sort);
});
\`\`\`

## Pagination Info

\`jb-pagination-info\` shows page-size selection and the current item range.

\`\`\`html
<jb-pagination-info></jb-pagination-info>
\`\`\`

\`\`\`js
const paginationInfo = document.querySelector('jb-pagination-info');

paginationInfo.pageSize = 20;
paginationInfo.pageSizes = [10, 20, 50, 100];
paginationInfo.startItemIndex = 1;
paginationInfo.endItemIndex = 20;
paginationInfo.totalItemsCount = 124;
paginationInfo.pageItemCountTitle = 'Items per page';
paginationInfo.fromLabel = 'of';
paginationInfo.currentAvailableItemTitle = 'Available items';
paginationInfo.showPersianNumber = false;

paginationInfo.addEventListener('page-size-change', (event) => {
  console.log(event.detail.pageSize);
});
\`\`\`

### jb-pagination-info API

| name | type | description |
| --- | --- | --- |
| \`pageSize\` | property | Current selected page size. |
| \`pageSizes\` | property | Available page-size options. Default is \`[20, 30, 50, 100]\`. |
| \`startItemIndex\` | property | First visible item index. |
| \`endItemIndex\` | property | Last visible item index. |
| \`totalItemsCount\` | property | Total item count. |
| \`pageItemCountTitle\` | property | Tooltip text for the page-size section. |
| \`fromLabel\` | property | Label rendered before the total count. |
| \`currentAvailableItemTitle\` | property | Tooltip text for the total count. |
| \`showPersianNumber\` | property | Converts displayed numbers to Persian digits when \`true\`. |
| \`page-size-change\` | event | Fired when the selected page size changes. Event detail is \`{ pageSize }\`. |

## Utility Icons

\`jb-refresh-icon\` and \`jb-fullscreen-icon\` are standalone icons used by the grid controls.

\`\`\`html
<jb-refresh-icon></jb-refresh-icon>
<jb-fullscreen-icon state="enter"></jb-fullscreen-icon>
\`\`\`

### jb-refresh-icon API

| name | type | description |
| --- | --- | --- |
| \`play()\` | method | Starts the refresh rotation animation. |
| \`pause()\` | method | Pauses the refresh rotation animation. |
| \`stop()\` | method | Stops the animation after the current rotation finishes. |

### jb-fullscreen-icon API

| name | type | description |
| --- | --- | --- |
| \`state\` | attribute/property | Icon state. Accepts \`enter\` or \`exit\`. |
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBGrid/Readme`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};