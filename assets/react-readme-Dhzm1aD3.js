import{j as e,M as a,k as i}from"./index-CSKg4GO5.js";import{useMDXComponents as l}from"./index-DVgGKjXv.js";import"./iframe-DUf3GCZ6.js";import"./index-DwQS_Y10.js";import"./index-BrB0Fkit.js";import"./index-Bls5tne7.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const s=`# jb-select-react

select component for react 

> this component is a react wrapper for [jb-select](https://github.com/javadbat/jb-select)

Demo :  Demo: [codeSandbox preview](https://3f63dj.csb.app/samples/jb-select) for just see the demo and [codeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBSelect.tsx) if you want to see and play with code

## installation

\`\`\`sh
npm install jb-select
\`\`\`

## usage

use below syntax in your render function.
\`\`\`jsx
import {JBSelect} from 'jb-select/react';

<JBSelect></JBSelect>
\`\`\`

## label
use label property to describe your select component.

\`\`\`jsx
<JBSelect label='your label name' ></JBSelect>
\`\`\`

## option list
if you want to add option to jb-select, you have 2 way:

- use \`<JBOption>\`
- use \`<jbOptionList>\`

### using \`JBOption\`:

using \`JBOption\` is quite an easy job:

\`\`\`jsx
import {JBSelect,JBOption} from 'jb-select/react';

  <JBSelect label="gender">
      <JBOption value="male">Male</JBOption>
      <JBOption value="female">Female</JBOption>
      <JBOption value="0">Other</JBOption>
  </JBSelect>
  //or
  const optionList = ["1","2","3"]
  <JBSelect { ...args}>
    {
      optionList.map((option)=>(<JBOption key={option} value={option}>{option}</JBOption>))
    }
  </JBSelect>
\`\`\`
you can also set object or any other data type as an value
\`\`\`jsx
const [colorList] = useState([
    {
      id: 1,
      name: "Red",
      value: "#f00",
    },
    {
      id: 2,
      name: "Green",
      value: "#0f0",
    },
    {
      id: 3,
      name: "Blue",
      value: "#00f",
    },
    {
      id: 4,
      name: "Yellow",
      value: "#ff0",
    },
  ]);
  //this function is used to create selected value dom and can be styled using jb-select::part.
function getSelectedValueDOM(option) {
    const optionElement = document.createElement("div");
    optionElement.classList.add("selected-value");
    optionElement.innerHTML =
      '<span part="color-box" style="background-color:' + option.value +
      ';width:16px;height:16px;display:inline-block;"></span>' + "&nbsp;" +
      option.name;
    return optionElement;
}
return(
    <JBSelect label="normal" getSelectedValueDOM={getSelectedValueDOM}>
        {
          colorList.map((color)=>{
            return (<JBOption key={color.value} value={color}><span className="color-circle" style={{backgroundColor:color.value}}></span>{color.name}</JBOption>);
          })
        }
    </JBSelect>
)
\`\`\`
### using \`jbOptionList\`:
\`JBOptionList\` will create options for you and it's good for when you want some easy to use options without complexity of update & manage JSX and it's a little faster for high performance app

example:

\`\`\`jsx
import {JBSelect,JBOptionList} from 'jb-select/react';

render(){
    const list = [{name:'reza',family:'asadi',userId:1},{name:'peter',family:'peterson',userId:2}];
    getOptionTitle:(option)=>{
        return \`\${option.name} \${option.family}\`;
    },
    getOptionValue:(option)=>{
        return option.userId;
    }
    return(
        <JBSelect label='your label name' >
            <JBOptionList optionList={list} getTitle={getOptionTitle} getValue={getOptionValue}/>
        </JBSelect>;
    );
}
\`\`\`

## Add Icon or Any Element into box

sometimes you want to add icon into the select box before value box.
you can customize this entire section by adding a div or any other Tag with the \`slot="start-section"\`

like the example the below:

\`\`\`jsx
<JBSelect>
    <div slot="start-section">
        <img class="your-custom-icon" src="./path/to/file.svg">
    </div>
</JBSelect>
\`\`\`

## validation

since select has a limited value options, validation have different story here. the only validation i really necessary here is required that indicate if user must select a value before he can move on. so pass \`required\` prop, then call \`checkValidity\` function like all other jb web component family. but if you need more customize validation just read [jb-validation](https://github.com/javadbat/jb-validation)

you can also set \`error\` attribute to pass error directly to the component

\`\`\`jsx
<JBSelect error="your error message"></JBSelect>
\`\`\`

## set custom style

please read [jb-select](https://github.com/javadbat/jb-select) custom style section.`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/form elements/JBSelect/React Readme"}),`
`,e.jsx(i,{children:s})]})}function h(n={}){const{wrapper:t}={...l(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{h as default};
