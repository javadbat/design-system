import{j as t,M as o,o as a}from"./index-CJCalR8i.js";import{useMDXComponents as i}from"./index-B8rYRX2K.js";import"./iframe-rA0OgHHL.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const r=`# jb-switch React component

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-switch)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-switch/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-switch-react)](https://www.npmjs.com/package/jb-switch-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-switch)

switch react component.

> this component is a react wrapper for [jb-switch](https://github.com/javadbat/jb-switch)

sample:<https://codepen.io/javadbat/pen/jOyXKNJ>

## Demo

- [codeSandbox preview](https://3f63dj.csb.app/samples/jb-switch) for just see the demo and [codeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBSwitch.tsx) if you want to see and play with code

-[storybook](https://javadbat.github.io/design-system/?path=/story/components-form-elements-jbswitch)

## Installation
\`\`\`sh
npm install jb-switch
\`\`\`
## Usage
\`\`\`jsx
import {JBSwitch} from 'jb-switch/react'

<JBSwitch value={booleanValue} isLoading={isLoading} trueTitle='true caption' falseTitle='false caption' onChange={(e)=>onChange(e)} ></JBSwitch>
\`\`\`

as you can see in above example \`value\` is on-way binding like normal react forms input trueTitle is a title that place on true side of component and get bold on \`value == true\` onChange is standard too  
if you want to show loading in switch just make \`isLoading = true\`

\`\`\`javascript
 onChange(e){
     setIsLoading(true)
    return new Promise((resolve,reject)=>{
        fetch(request).then((response)=>return response.json).then((data)=>{
            setIsLoading(false)
            resolve();
        })
    })
}
\`\`\`

demo image:    
![](./demo-gif.gif)

## Shared Documentation

For web-component behavior, events, slots, and CSS variables, see [\`jb-switch\`](https://github.com/javadbat/jb-switch).
`;function s(e){return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Components/form elements/JBSwitch/React Readme"}),`
`,t.jsx(a,{children:r})]})}function u(e={}){const{wrapper:n}={...i(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(s,{...e})}):s()}export{u as default};
