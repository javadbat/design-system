import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BgTYBwyO.js";import{A as n,d as r,u as i,v as a}from"./blocks-D5BSbCx1.js";import{t as o}from"./mdx-react-shim-D5WWw0qZ.js";var s,c=e((()=>{s=`# jb-grid React component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-grid)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-grid/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-grid-react)](https://www.npmjs.com/package/jb-grid-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-grid)

react table grid with pagination, filtering and sorting functionality.

- responsive
- React state ready
- easy filter implementation (customizable)
- customizable column templates
- flexible column size
- stateless data, pagination, loading, and error handling

## instructions

### install the package

\`\`\`sh
npm i jb-grid
\`\`\`

### import and use in your component
\`\`\`JSX
import {JBCell, JBRow, JBGrid} from 'jb-grid/react';
import {Searchbar} from './Searchbar';

<JBGrid
  data={data}
  pageIndex={pageIndex}
  pageSize={pageSize}
  totalItemsCount={totalItemsCount}
  title="user list"
  searchbarComponent={<Searchbar />}
  onPageIndexChange={setPageIndex}
  onPageSizeChange={setPageSize}
  onRefresh={refreshData}
></JBGrid>
\`\`\`

### state

\`JBGrid\` is stateless. Keep data, pagination, loading, error, filtering, sorting, columns, and row expansion in your own component/store and pass the current values to the grid.

\`\`\`tsx
<JBGrid
  data={data}
  pageIndex={pageIndex}
  pageSize={pageSize}
  totalItemsCount={totalItemsCount}
  totalPages={totalPages}
  isLoading={isLoading}
  isErrorOccurred={isErrorOccurred}
  onPageIndexChange={(newPageIndex) => setPageIndex(newPageIndex)}
  onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
  onRefresh={() => loadData()}
  title="user list"
/>
\`\`\`

### table header and rows

The grid does not own column definitions. If you need a table header, render it yourself with \`tableHeader\`. Pass row layout directly to \`JBRow\`.

\`\`\`ts
const rowTemplate = [
  { name: "name", size: "1fr" },
  { name: "age", size: "6.25rem" },
  { name: "operation", size: "10rem" }
];
\`\`\`
\`\`\`tsx
  <JBTableHeader headerTemplate={rowTemplate}>
    <JBColumnHeader name="id">ID</JBColumnHeader>
    <JBColumnHeader name="name" sortable>Name</JBColumnHeader>
    <JBColumnHeader name="family" sortable>Family</JBColumnHeader>
    <JBColumnHeader name="age">Age</JBColumnHeader>
  </JBTableHeader>
\`\`\`
\`\`\`tsx
<JBGrid
  tableHeader={<YourTableHeader />}
  data={data}
  pageIndex={pageIndex}
  pageSize={pageSize}
  totalItemsCount={totalItemsCount}
  title="user list"
>
  {(data) => data.map((item) => (
    <JBRow key={item.id} rowTemplate={rowTemplate}>
      <JBCell name="name" label="name:">{item.name}</JBCell>
      <JBCell name="age" label="age:">{item.age}</JBCell>
      <JBCell name="operation" label="operations:"><button>detail</button></JBCell>
    </JBRow>
  ))}
</JBGrid>
\`\`\`

### i18n
Grid web components use their own dictionaries and the global \`jb-core/i18n\` locale by default. You can still pass an i18n config to override error and pagination text for one React grid instance.
\`\`\`tsx
const i18nMessages:JBGridI18nMessage = {
  serverErrorText:"متاسفانه در هنگام بارگذاری اطلاعات خطایی رخ داده است",
  serverErrorTitle:"خطا",
  serverErrorRefreshButtonTitle:"تلاش مجدد",
  currentAvailableItem:"تعداد کل ایتم های موجود",
  pageItemCount:"تعداد آیتم در هر صفحه",
  from:"از"
};
export const i18n:JBGridI18nConfig = {
  messages: i18nMessages,
  showPersianNumber:false
};
<JBGrid i18n={i18n} data={data} pageIndex={pageIndex} pageSize={pageSize} totalItemsCount={totalItemsCount}></JBGrid>

\`\`\`

### filter

### show list

### custom error page

if you want to show customized error page instead of default one use \`contentError\` prop
\`\`\`jsx
<JBGrid {...gridProps} contentError={<CustomErrorComponent />} isErrorOccurred={isErrorOccurred}></JBGrid>
\`\`\`

### full-screen grid

jb-grid has a fullscreenable feature and you can activate that by set \`isFullscreen={value:bool}\` for example

\`\`\`jsx
    const [isFullscreen,setIsFullscreen] = useState(false);
    <JBGrid {...gridProps} isFullscreen={isFullscreen} onFullscreen={()=>setIsFullscreen(true)} onExitFullscreen={()=>setIsFullscreen(false)}></JBGrid>

\`\`\`
### expandable row
you can add expandable row so user can expand row to see more info about a row in detail

\`\`\`jsx
<JBGrid data={data} pageIndex={pageIndex} pageSize={pageSize} totalItemsCount={totalItemsCount} title="general list" searchbarComponent={<Searchbar />}>
    {
        (data) => data.map(
            (item) => {
                return (
                    <React.Fragment key={item.id}>
                        <JBRow isOpen={expandedRowIds.has(item.id)}>
                            <JBCell name="name">{item.name}</JBCell>
                            <JBCell name="age">{item.age}</JBCell>
                            <JBCell name="operation"><button onClick={()=>toggleRowExpanded(item.id)}>detail</button></JBCell>
                            <div slot="expand">
                            <YourExpandedData></YourExpandedData>
                            </div>
                        </JBRow>
                    </React.Fragment>

                );
            }
        )
    }
</JBGrid>

\`\`\`

## make it mobile friendly

jb-grid by default is mobile friendly but when it turns to mobile view it show row as cards. this cards show the table fields in themselves but without any label. to show label of columns beside the cell in mobile just add \`label\` property to each cell like this:
\`\`\`jsx
            <JBRow>
                <JBCell name="name" label="name:">{item.name}</JBCell>
                <JBCell name="age" label="age:">{item.age}</JBCell>
                <JBCell name="operation" label="operations:"><button onClick={()=>toggleRowExpanded(item.id)}>detail</button></JBCell>
            </JBRow>
\`\`\`

## Pagination

The full React grid shows pagination from \`pageIndex\`, \`pageSize\`, \`totalItemsCount\`, and \`totalPages\`, and reports changes with \`onPageIndexChange\` and \`onPageSizeChange\`. If you need the standalone web-component pagination primitive, import and use \`jb-pagination\` from the web-component package directly.

\`\`\`jsx
import 'jb-grid/web-component/lib/pagination';
\`\`\`

See the web-component README for the standalone \`pageIndex\`, \`min\`, and \`max\` API.

## Row & Cells

The React package exports \`Row\`, \`Cell\`, and \`ExpandRow\` wrappers for the underlying row/cell primitives.

\`\`\`jsx
<Row>
  <Cell label="Name">Sara</Cell>
  <Cell label="Age">32</Cell>
</Row>
\`\`\`

Use \`Cell\` for normal content, \`ExpandRow\` for expandable detail panels, and \`label\` on cells for the mobile card view.

## Styling
| CSS variable name                          | description                                                            |
| -------------                              | -------------                                                          |
| --jb-grid-footer-icon-fill-color-hover     | footer icon hover fill color                                           |
| --jb-grid-loading-color                    | list loading color                                                     |
| --jb-grid-page-color-active                | color of active page                                                   |

## Shared Documentation

For web-component behavior, events, slots, and CSS variables, see [\`jb-grid\`](https://github.com/javadbat/jb-grid).
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBGrid/React Readme`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};