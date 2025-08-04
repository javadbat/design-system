import{j as n,M as a,m as s}from"./index-CLcJJyit.js";import{useMDXComponents as i}from"./index-CpNkpSEJ.js";import"./iframe-BVcLzCML.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const r=`# jb-switch React component

switch react component.

> this component is a react wrapper for [jb-switch](https://github.com/javadbat/jb-switch)

sample:<https://codepen.io/javadbat/pen/jOyXKNJ>


Demo :  Demo: [codeSandbox preview](https://3f63dj.csb.app/samples/jb-switch) for just see the demo and [codeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBSwitch.tsx) if you want to see and play with code

## installation

run \`npm install jb-switch\` to install package with npm

## usage

import component in your page \`import {JBSwitch} from 'jb-switch/react'\`  

use below syntax in your render function

\`\`\`jsx
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
![](./demo-gif.gif)`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Components/form elements/JBSwitch/React Readme"}),`
`,n.jsx(s,{children:r})]})}function w(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{w as default};
