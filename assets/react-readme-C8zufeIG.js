import{j as e,M as o,l as r}from"./index-Dgp7dT1Y.js";import{useMDXComponents as a}from"./index-DVgGKjXv.js";import"./iframe-Bd5vJ5qW.js";import"./index-DwQS_Y10.js";import"./index-CRFEHIza.js";import"./index-Bls5tne7.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const s=`# jb-grid React component

react mobx table grid with pagination, filtering and sorting functionality.

- responsive
- mobx ready
- easy filter implementation (customizable)
- customizable column templates
- flexible column size
- support for server side data fetching

## instructions

### install the package

\`\`\`sh
npm i jb-grid
\`\`\`

### import and use in your component
\`\`\`JSX
import {Cell, Row, JBGrid} from 'jb-grid/react';
//this file is a class that implement \`JBGridBridgeClassInterface\` interface to translate your server data to jb-grid data interface see Bridge section for more detail
import {JBGridBridge} from './my-bridge';
// grid config that impl JBGridConfig type see config section for more detail
import {yourConfig} from './your-grid-config-file';
//jb-search-bar config so you can filter your data
import {filterConfig} from './my-filter-config';

<JBGrid config={yourConfig} bridge={JBGridBridge} title="user list" searchbarConfig={vm.filterConfig}></JBGrid>
\`\`\`

### config

config is unique for each data table you want to show and contains information about columns,filters,sort,initData,...    
you can create your own config from scratch using Mobx class Stores that implements \`JBGridConfigInterface\` or just create instance of \`JBGridData\` and start to config it's fields base on your need.

\`\`\`js
import { JBGridData } from "jb-grid/react";

const yourConfig = new JBGridData();
\`\`\`
or in typescript: (in javascript you don't need to implements from \`JBGridConfigInterface\` but you have to check every detail manually to avoid errors)
\`\`\`ts
import {JBGridConfigInterface}  from "jb-grid/types"

class yourConfigClass implements JBGridConfigInterface{
    //put your config here. for sample code see /lib/JBGridData in package files
}
export const yourConfig = new yourConfigClass();
\`\`\`
you can config columns of table like this:    

\`\`\`js
yourConfig.table.columns = [
            {
                //uniq identifier of column
                id: 1,
                //will be used as a key in sort  object when sorting by column
                name: 'name',
                //showed in column header
                title: 'نام',
                //let us sort column default is false
                sortable: true,
            },
            {
                id: 2,                
                name: 'age',
                title: 'سن',
                sortable: false,
                //if you dont set width , it will be '1fr' mean it get 1 share of width from free space
                width: '1fr'
            },
            {
                id: 3,
                name: 'expand',
                title: 'باز کردن',
                sortable: false,
                //you can set px,em, auto, fr , % , ... in here 
                width: '200px'
            }
        ];

\`\`\`
to config backend service call config you can set \`\` like this:
\`\`\`js
        // your api endpoint
        yourConfig.data.requestParams.url = "http://localhost:3000/grid/user-list",
        //endpoint http method
        yourConfig.data.requestParams.method = "POST";
        // you can set any custom parameter your backend needs here. for example if you using grpc or graphql you can set any config they need
        yourConfig.data.requestParams.custom1 = {aa:""};
        yourConfig.data.requestParams.foo = "x";
\`\`\`
### i18n
you can pass a i18n config to set a text, number display and other localization config to jb-grid
\`\`\`tsx
const i18nMessages:JBGridI18nMessage = {
  EnterPageNumberMessage:"شماره صفحه ای که میخواهید وارد آن شوید را وارد کنید",
  serverErrorText:"متاسفانه در هنگام بارگذاری اطلاعات خطایی رخ داده است",
  serverErrorTitle:"すみません",
  serverErrorRefreshButtonTitle:"تلاش مجدد",
  currentAvailableItem:"تعداد کل ایتم های موجود",
  pageItemCount:"تعداد آیتم در هر صفحه",
  from:"از"
};
export const i18n:JBGridI18nConfig = {
  messages: i18nMessages,
  showPersianNumber:false
};
<JBGrid i18n={i18n}></JBGrid>

\`\`\`
### actions

there is some actions you may want to call inside a grid for example you need to refresh data by code after some entity insert/update or fullscreen grid by code. for doing so you just have to call \`actionDispatchers\` methods in your grid config after initialization process (after render of jb-grid finish grid will automatically extend your config and add this methods).
\`\`\`typescript
//action dispatcher type in typescript:
type ActionDispatchers = Readonly<{
    refreshData: () => Promise<void>,
    fullScreenGrid: () => void,
    exitFullScreenGrid: () => void
}>
// the call function:
    yourConfig.actionDispatchers.refreshData();
// 
\`\`\`

### bridge

bridge is a js/ts class, responsible for converting jb-grid standard data to your back-end standard data and reverse.
jb-grid doesn't send request by it self, instead it ask bridge to send request & and receive data. so you have freedom to use whatever standard and technology you may see fit.
the reason that we separate config & bridge is most of the time all tables of your project use  same request and response data structure so you don't need to repeat yourself. you code 1 bridge for all of project and config each list for endpoints url ,...

### filter

### show list

### custom error page

if you want to show customized error page instead of default one use \`contentError\` prop
\`\`\`jsx
<JBGrid contentError={<CustomErrorComponent />}></JBGrid>
\`\`\`

### full-screen grid

jb-grid has a fullscreenable feature and you can activate that by set \`isFullscreen={value:bool}\` for example

\`\`\`jsx
    const [isFullscreen,setIsFullscreen] = useState(false);
    <JBGrid isFullscreen={isFullscreen} onFullscreenChange={(newValue)=>setIsFullscreen(newValue)}></JBGrid>

\`\`\`
### expandable row
you can add expandable row so user can expand row to see more info about a row in detail

\`\`\`jsx
<JBGrid config={jbGridConfig} bridge={JBGridBridge} title="general list" searchbarConfig={filterConfig}>
    {
        jbGridConfig.data.data.map(
            (item) => {
                return (
                    <React.Fragment key={item.id}>
                        <Row>
                            <Cell>{item.name}</Cell>
                            <Cell>{item.age}</Cell>
                            <Cell><button onClick={()=>{item.jbGridDetail.isExpanded = !item.jbGridDetail.isExpanded;}}>detail</button></Cell>
                        </Row>
                        <ExpandRow show={item.jbGridDetail.isExpanded}>
                            <YourExpandedData></YourExpandedData>
                        </ExpandRow>
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
            <Row>
                <Cell label="name:">{item.name}</Cell>
                <Cell label="age:">{item.age}</Cell>
                <Cell label="operations:"><button onClick={()=>{item.jbGridDetail.isExpanded = !item.jbGridDetail.isExpanded;}}>detail</button></Cell>
            </Row>
\`\`\`

## styling
| css variable name                          | description                                                            |
| -------------                              | -------------                                                          |
| --jb-grid-loading-color                    | list loading color                                                     |
| --jb-grid-page-active-color                | color of active page                                                   |
`;function i(n){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/JBGrid/React Readme"}),`
`,e.jsx(r,{children:s})]})}function b(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i()}export{b as default};
