import{j as n,M as a,k as i}from"./index-CZZwWaK1.js";import{useMDXComponents as r}from"./index-BHm8jGRy.js";import"./iframe-DV6G9lxb.js";import"./index-CMhrCaxv.js";import"./index-C0lhrmtH.js";import"./index-J8MwVo-_.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const l=`# jb-grid

> currently this component only available in react in full mode and web-component is only support parts of the data grid like pagination adn Row, Cell.

## using with JS frameworks

to use this component in **react** see [\`jb-grid/react\`](https://github.com/javadbat/jb-grid/tree/main/react);

## Pagination
for pagination we use \`jb-pagination\` web-component
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

## Row & Cells
\`jb-row\` is a row web-component that imply a grid template base on given config to below cells. it also accept expand row that you can open and close it.

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
\`\`\``;function t(e){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Components/JBGrid/Readme"}),`
`,n.jsx(i,{children:l})]})}function g(e={}){const{wrapper:o}={...r(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t()}export{g as default};
