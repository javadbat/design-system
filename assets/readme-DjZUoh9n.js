import{j as e,M as i,k as r}from"./index-CGK15UMW.js";import{useMDXComponents as s}from"./index-DVRRELxc.js";import"./iframe-CLLm-DdY.js";import"./index-CwcVQgaJ.js";import"./index-BEjDVx3I.js";import"./index-C8bfMtE3.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const u=`# jb-time-picker web component

this component is 24hour svg-base time picker web component that use wheel to get time from user.

## Demo

- [codepen](https://codepen.io/javadbat/pen/yLgjGdv)

## Usage

you just need to install it with npm and import it and use tag nothing more.

\`\`\`sh
npm i jb-time-picker
\`\`\`

import and load web component in any js file

\`\`\`javascript
import 'jb-time-picker'
\`\`\`

use it in your html or jsx or any other markup file:

\`\`\`html
<jb-time-picker></jb-time-picker>
\`\`\`

## set and get value

you can set or get component value by using standard value property object

\`\`\`javascript
//get value
console.log(document.querySelector('jb-time-picker').value)
//set value
document.querySelector('jb-time-picker').value = {hour:3,minute:10,second:20}

\`\`\`

## set time focus

you can focus in one of time unit like hour or minute with code when you need to. for example when you want user pay attention to hour and change it first to do that just call \`setTimeUnitFocus\` function:

\`\`\`javascript
//focus on hour
document.querySelector('jb-time-picker').setTimeUnitFocus('hour')
//focus on minute
document.querySelector('jb-time-picker').setTimeUnitFocus('minute')
//focus on second
document.querySelector('jb-time-picker').setTimeUnitFocus('second')

\`\`\`

## event

\`\`\`javascript
//on change
document.querySelector('jb-time-picker').addEventListener('change', (e)=>{console.log(e.target.value)});

\`\`\`

### disable second
if you want to just input minute and hour and disable second in picker and input just set \`secondEnabled\` to \`false\`
\`\`\`javascript
    document.querySelector('jb-time-picker').secondEnabled = false;
\`\`\`
### frontal zero
if you want picker to show \`02\` instead of \`2\` when number is less than 10 just set \`frontalZero\` of timepicker default is \`false\`.    
\`\`\`js
document.querySelector('jb-time-picker').frontalZero = true;
\`\`\`
### optional units
if you want to tell user some units is optional and greyout the numbers in picker you can set \`optionalUnits\`
\`\`\`js 
//it could be 'hour' or 'minute' or 'second'
document.querySelector('jb-time-picker').optionalUnits = ['hour'];
\`\`\`

### show persian number
if you want to show persian number instead of english number chars. you can set \`showPersianNumber\`:
\`\`\`js 
document.querySelector('jb-time-picker').showPersianNumber = true
\`\`\`

### text width align
different numbers have different width in monitor for example \`1\` is thinner than \`8\` or \`4\`. this width different is more visible when chars combined like \`11\` or \`44\`.    
in jb-time-input you can set text width base on your font you use with \`textWidth\` prop. so 11 and 44 both occupy same amount of width.
\`\`\`js 
//ideal number is between 150 - 300 base on your app font.
document.querySelector('jb-time-picker').textWidth = 150;
\`\`\`

## Other Related Docs:

- see [\`jb-time-picker/react\`](https://github.com/javadbat/jb-time-picker/tree/main/react) if you want to use this component in react.

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components.

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/JBTimePicker/Readme"}),`
`,e.jsx(r,{children:u})]})}function j(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{j as default};
