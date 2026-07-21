import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-DyWnM0Wh.js";import{A as n,d as r,u as i,v as a}from"./blocks-C21yMPAO.js";import{t as o}from"./mdx-react-shim-r49eUm_3.js";var s,c=e((()=>{s=`# jb-grid

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-grid)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-grid/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-grid)](https://www.npmjs.com/package/jb-grid)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-grid)

> currently jb-grid web-component is a separated web-components related to the grid layout data table that you can combine them together to create your own grid data table. 

## Using With JS Frameworks
<a href="https://github.com/javadbat/jb-grid/tree/main/react" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/React.js-jb--grid%2Freact-000.svg?logo=react&logoColor=%2361DAFB" height="30" /></a>

Other integrations: <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#angular" target="_blank" rel="noopener noreferrer">Angular</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#vue" target="_blank" rel="noopener noreferrer">Vue</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#nuxt" target="_blank" rel="noopener noreferrer">Nuxt</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#svelte" target="_blank" rel="noopener noreferrer">Svelte</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#sveltekit" target="_blank" rel="noopener noreferrer">SvelteKit</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#solidjs" target="_blank" rel="noopener noreferrer">SolidJS</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#lit" target="_blank" rel="noopener noreferrer">Lit</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#nextjs" target="_blank" rel="noopener noreferrer">Next.js</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#astro" target="_blank" rel="noopener noreferrer">Astro</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#blazor" target="_blank" rel="noopener noreferrer">Blazor</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#server-rendered-templates" target="_blank" rel="noopener noreferrer">Server-rendered templates</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#wordpress" target="_blank" rel="noopener noreferrer">WordPress</a> · <a href="https://javadbat.github.io/design-system/?path=/docs/getting-started-framework-integration--docs#alpinejs-and-htmx" target="_blank" rel="noopener noreferrer">Alpine.js and HTMX</a>

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

## Grid Layout and Body States

\`jb-grid-layout\` provides named slots for assembling a grid. Its default body
layout supports these slots:

| Slot | Description |
| --- | --- |
| \`table-header\` | Header row shown above the scrollable content. |
| \`body-content\` | Normal grid rows or other main content. |
| \`body-error\` | Error view positioned over the body. |
| \`body-loading\` | Loading view positioned above all other body views. |

Loading and error slot elements are hidden by default. Add the boolean \`show\`
attribute to the root slotted element to display that state. Removing \`show\`
hides it again without removing the element from the DOM.

\`\`\`html
<jb-grid-layout>
  <jb-table-header slot="table-header"></jb-table-header>
  <div slot="body-content" class="table-content-wrapper">
    <!-- grid rows -->
  </div>

  <div slot="body-error" show>
    Could not load the grid data.
  </div>

  <jb-grid-loading slot="body-loading"></jb-grid-loading>
</jb-grid-layout>
\`\`\`

Toggle a state with JavaScript:

\`\`\`js
const loading = document.querySelector('[slot="body-loading"]');
loading.toggleAttribute("show", isLoading);
\`\`\`

If loading and error both have \`show\`, loading appears above error. The React
\`JBGrid\` component manages these attributes from its \`isLoading\` and
\`isErrorOccurred\` props.

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

Cells clip horizontal overflow to stay inside their grid column. If long text should show an ellipsis, add the \`ellipsis\` attribute to \`jb-cell\`; use \`ellipsis="max line"\` for multiline truncation.
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

The grid uses \`jb-icon/refresh\` for its refresh control. \`jb-fullscreen-icon\`
remains a grid-owned standalone icon.

\`\`\`html
<jb-icon-refresh></jb-icon-refresh>
<jb-fullscreen-icon state="enter"></jb-fullscreen-icon>
\`\`\`

### jb-icon-refresh API

| name | type | description |
| --- | --- | --- |
| \`isLoading\` | property | Starts rotation when \`true\`. When changed to \`false\`, the active rotation finishes before repetition stops. |

Import it directly from the icon package when using it outside the grid:

\`\`\`js
import "jb-icon/refresh";
\`\`\`

### jb-fullscreen-icon API

| name | type | description |
| --- | --- | --- |
| \`state\` | attribute/property | Icon state. Accepts \`enter\` or \`exit\`. |
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBGrid/Readme`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};