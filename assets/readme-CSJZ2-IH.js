import{j as n,M as o,m as a}from"./index-0Pd01vxM.js";import{useMDXComponents as r}from"./index-CpNkpSEJ.js";import"./iframe-Cg--1avl.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const s=`# jb-time-input web component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-time-input)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-time-input/main/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dw/jb-time-input)](https://www.npmjs.com/package/jb-time-input)

in jb-time-input you can create a input special for time the advantage is:

- validation so it only accept time value and not any other invalid format
- support arrow key to increase and decrease time value
- time picker
- support both rtl and ltr direction
- easy to use and can be used in any js framework like React, Vue, Angular,etc
- can be used in pure js without any other dependency
- has a touch friendly time-picker
- responsive and mobile friendly

Demo : [codepen](https://codepen.io/javadbat/pen/QWdxzKb);

## using with JS frameworks

to use this component in **react** see [\`jb-time-input/react\`](https://github.com/javadbat/jb-time-input/tree/main/react);

## instruction

### installation and usage

with npm:

\`\`\`command
    npm i jb-time-input
\`\`\`

\`\`\`javascript
    import 'jb-time-input'
\`\`\`

\`\`\`HTML
    <div>
        <jb-time-input/>
    <div>
\`\`\`

### event

like any other javascript DOM element you can bind event to web component with \`DOM.addEventListener\` the supported event is:

\`\`\`javascript
    //when default property are defined best time for impl your config
    document.querySelector('jb-date-input').addEventListener('init',this.onCalendarElementInitiated);

    //when calendar init all property and function and dom created and bind successully
    document.querySelector('jb-date-input').addEventListener('load',this.onCalendarElementLoaded);

    //keyboard event
    document.querySelector('jb-time-input').addEventListener('keydown',()=>{});
    document.querySelector('jb-time-input').addEventListener('keyup',()=>{});
    document.querySelector('jb-time-input').addEventListener('keypress',()=>{});
    document.querySelector('jb-time-input').addEventListener('change',()=>{});
    // when user press enter on type good for situation you want so submit form or call search function on user press enter. 
    document.querySelector('jb-time-input').addEventListener('enter',()=>{});
    //focus event
    document.querySelector('jb-time-input').addEventListener('focus',()=>{});
    document.querySelector('jb-time-input').addEventListener('blur',()=>{});
\`\`\`

### set value

to set value of time input you have 2 way:

- by html as a attribute:

\`\`\`html
<jb-time-input value="14:34:63">
\`\`\`

- by javascript

\`\`\`javascript
    document.querySelector('jb-date-input').value = "01:11:12";
\`\`\`

### validation
jb-time-input use [jb-validation](https://github.com/javadbat/jb-validation) inside to handle validation so for more information you can read it's documentation.  

jb time input will check validation automatically and show error on user blur the input and hide error on user type and blur to use this feature you just have to set validation list of component.

\`\`\`javascript
document.querySelector('jb-time-input').validationList = [
    //regex validator
    {
      validator: /^[1][1234].*$/g,
      message:"hour  must be between 11 and 14"
    },
    //callback function validator
    {
      validator:({displayValue,value,valueObject})=>{
        //display value is the value user see
        //value is the value developer get by dom.value
        //valueObject is the {hour:number,minute:number,second:number} object contain inputted value in number
        if(valueObject.minute<30){
          return false;
        }
        return true;
      },
      message:'minute must be 30 to 60'
    }
  ]
\`\`\`

you can trigger validation manually by calling \`checkValidity\` function. for example you can call it when submit button clicked and check if value is valid or not.

\`\`\`javascript
    // if you set showError false you can get validation result but component wont show error to user by itself its good when you want show error in your own way
    const showError = true;
    const validationResult =  document.querySelector('jb-time-input').validation.checkValidity(showError);
    if(validationResult.isAllValid){
        alert('all validation are passed')
    }else{
        alert('validation error!');
    }

\`\`\`

you can also get validation result of your time input by following way:

\`\`\`javascript
    document.querySelector('jb-time-input').validation.resultSummary

\`\`\`

### configurable attributes

you can change some attribute in html like label or message configurable attribute are:

\`\`\`HTML
<jb-time-input close-button-text="بستن"></jb-time-input>
\`\`\`

### disable second
if you want to just input minute and hour and disable second in picker and input just set \`secondEnabled\` to \`false\`
\`\`\`javascript
    document.querySelector('jb-time-input').secondEnabled = false;
\`\`\`
### frontal zero
if you want picker to show \`02\` instead of \`2\` when number is less than 10 just set \`frontalZero\` of time picker default is \`false\`.    
\`\`\`js
document.querySelector('jb-time-input').frontalZero = true;
\`\`\`
or
\`\`\`html
<jb-time-input frontal-zero="true"></jb-time-input>
\`\`\`
### optional units
if you want to tell user some units is optional and grey the numbers in picker, you can set \`optionalUnits\`
\`\`\`js
//it could be 'hour' or 'minute' or 'second'
document.querySelector('jb-time-input').optionalUnits = ['hour'];
\`\`\`
### show persian number
if you want to show persian number instead of english number chars. you can set \`showPersianNumber\`:
\`\`\`js 
document.querySelector('jb-time-input').showPersianNumber = true
\`\`\`

### set custom style

you can customize jb-time-input look  by setting css variable in your app.    
jb-time-input use [jb-input](https://github.com/javadbat/jb-input) and [jb-time-picker](https://github.com/javadbat/jb-time-picker) and [jb-popover](https://github.com/javadbat/jb-popover) underneath so to change the styles of your component read custom style section of these components and set their css variable.
more than above here is the css variable that we use in jb-time-input itself:

| css variable name                       | description                                                                                              |
| -------------                           | -------------                                                                                            |
| --jb-time-input-margin                  | outer margin of web component default is \`12px 0\`                                                        |

## Other Related Docs:

- see [\`jb-time-input/react\`](https://github.com/javadbat/jb-time-input/tree/main/react) if you want to use this component in ReactJS.

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components.

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.`;function i(e){return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Components/form elements/Inputs/JBTimeInput/Readme"}),`
`,n.jsx(a,{children:s})]})}function v(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(i,{...e})}):i()}export{v as default};
