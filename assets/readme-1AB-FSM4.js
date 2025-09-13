import{j as n,M as a,m as o}from"./index-C1bX0aOk.js";import{useMDXComponents as i}from"./index-CpNkpSEJ.js";import"./iframe-BTrbXZXE.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const s=`
# jb-searchbar

minimalistic customizable search bar web-component for adding filter options in minimum space
sample:<https://codepen.io/javadbat/pen/rNjrZpy>

## usage

\`\`\`sh
npm i jb-searchbar
\`\`\`

\`\`\`js
import 'jb-searchbar';
\`\`\`

\`\`\`html
<jb-searchbar></jb-searchbar>
\`\`\`

## attributes

### placeholder

\`\`\`html

<jb-searchbar placeholder="please choose column"></jb-searchbar>

\`\`\`

## set filter list

filter list is a list of your filter you want user choose filter from and set like this:

## search on change

you can trigger search by clicking on search button, if you want to trigger it on every change set \`searchOnChange\` like this:

\`\`\`javascript
document.querySelector('jb-searchbar').searchOnChange = true;
\`\`\`

\`\`\`js
document.querySelector('jb-searchbar').columnList = [
        {
            key: 'title',
            label: 'تیتر',
            type: 'TEXT'
        },
        {
            key: 'name',
            label: 'نام',
            type: 'TEXT',
            maxUsageCount: 3
        },
        {
            key: 'age',
            label: 'سن',
            type: 'TEXT'
        },
        {
            key: 'fromDate',
            label: 'از تاریخ',
            type: 'DATE'
        },
        {
            key: 'GENDER',
            label: 'جنسیت',
            type: 'SELECT',
            config: {
                optionList: [
                    {
                        title: 'آقا',
                        value: 'MALE'
                    },
                    {
                        title: 'خانم',
                        value: 'FEMALE'
                    }
                ],
                getOptionTitle: (option) => {
                    return option.title;
                },
                getOptionValue: (option) => {
                    return option.value;
                }
            }

        },
        {
            key: 'fromDate',
            label: 'تا تاریخ',
            type: 'DATE'
        }
    ]
\`\`\`
## css variables
| Name                                | Description                                | Default Value  |
|-------------------------------------|--------------------------------------------|----------------|
| --jb-searchbar-filter-item-bg-color | background color of completed filter item  | #408cff        |
| --jb-searchbar-filter-item-color    | text color of completed filter item         | #fff           |`;function r(e){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Components/JBSearchbar/Readme"}),`
`,n.jsx(o,{children:s})]})}function j(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r()}export{j as default};
