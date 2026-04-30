import{j as e,M as r,k as i}from"./index-CkPYrGr3.js";import{useMDXComponents as o}from"./index-DVRRELxc.js";import"./iframe-DSbquyYE.js";import"./index-CwcVQgaJ.js";import"./index-BEjDVx3I.js";import"./index-C8bfMtE3.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const l=`
# jb-searchbar

minimalistic customizable search bar web-component for adding filter options in minimum space
sample:<https://codepen.io/javadbat/pen/rNjrZpy>

- support every form element as a filter element.

- normal filter beside extra filter.

- you can select a filter more than once.

- compact and user-friendly

- dom base so it's easy to initiate and you dont need to pass complicated config to make it work.


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
## How it works:

After version 3 JBSearchbar has a Major Refactor and now it support 2 kind of filters.
- filters: normal filters element just rendered inside a bar without any extra job.
- extra filters: filters that hidden by default. and listed in a drop down. if user choose them they will be rendered and value collected.

## filters

Easy, just put filter dom inside filter slot:

\`\`\`html
<jb-searchbar>
  <div slot="filter">
    <jb-input name="firstName" />
    <jb-input name="lastName" />
    <jb-number-input name="age" />
  </div>
</jb-searchbar>
\`\`\`

## Extra filter:

Extra filter are the filters that user choose to be added to the filter bar. in this type we analyze children dom of \`jb-extra-filter\` and extract labels and input dom from them.

\`\`\`html
<jb-searchbar>
  <jb-extra-filter>
    <jb-input name="firstName" label="first name" />
    <!-- or -->
    <jb-input name="firstName" data-label="first name" />
    <jb-input name="lastName" data-label="last name"/>
    <jb-number-input name="age" data-label="age"/>
  </jb-extra-filter>
</jb-searchbar>
\`\`\`
you can use \`label\` attribute or \`data-label\` attribute if you dont want to set real label attribute of the component.    

### data-max-count
this attribute define how many times user can select that filter. for example you may allow them to use some extra filter only once.

\`\`\`html
<jb-searchbar>
  <jb-extra-filter>
    <jb-number-input name="age" data-label="age" data-max-count="1"/>
  </jb-extra-filter>
</jb-searchbar>
\`\`\`

### placeholder
 
you can set placeholder of extra filter select in extra filter \`placeholder\` attribute.

\`\`\`html

<jb-extra-filter placeholder="please choose column"></jb-extra-filter>

\`\`\`

## set filter list

filter list is a list of your filter you want user choose filter from and set like this:

## search on change

you can trigger search by clicking on search button, if you want to trigger it on every change set \`searchOnChange\` like this:

\`\`\`javascript
document.querySelector('jb-searchbar').searchOnChange = true;
\`\`\`

## css variables
| Name                                | Description                                | Default Value  |
|-------------------------------------|--------------------------------------------|----------------|
| --jb-searchbar-filter-item-bg-color | background color of completed filter item  | #408cff      |
| --jb-searchbar-filter-item-color    | text color of completed filter item        | #fff         |`;function a(n){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Components/JBSearchbar/Readme"}),`
`,e.jsx(i,{children:l})]})}function p(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a()}export{p as default};
