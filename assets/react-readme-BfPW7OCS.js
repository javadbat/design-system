import{j as e,M as a,k as s}from"./index-CZZwWaK1.js";import{useMDXComponents as i}from"./index-BHm8jGRy.js";import"./iframe-DV6G9lxb.js";import"./index-CMhrCaxv.js";import"./index-C0lhrmtH.js";import"./index-J8MwVo-_.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const c=`# jb-checkbox React component
jb-checkbox React component wrapper

codepen demo: <https://codepen.io/javadbat/pen/GRrzJeP>
in codeSandBox: [codeSandbox preview](https://3f63dj.csb.app/samples/jb-checkbox) for just see the demo and [codeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBCheckbox.tsx) if you want to see and play with code
## usage

\`\`\`sh
npm i jb-checkbox
\`\`\`

\`\`\`jsx
import {JBCheckbox} from 'jb-checkbox/react';
 <JBCheckbox label="checkbox sample" />
//  or if you want more customization:
 <JBCheckbox ><div slot="label">checkbox sample</div></JBCheckbox>
\`\`\`
## get and set value

\`\`\`jsx
const [value,setValue] = useState(false);
<JBCheckbox value={value} onChange={(e)=>setValue(e.target.value)}/>
\`\`\`
## disable checkbox

\`\`\`jsx
<JBCheckbox disabled />
\`\`\`

## validation

jb-checkbox implement  [jb-validation](https://github.com/javadbat/jb-validation) inside to handle validation. so for more information you can read [jb-validation](https://github.com/javadbat/jb-validation) documentation.  
for simple usage you can set validation to your input:

\`\`\`js
    const validationList = [
        {
            validator:(value)=>{
              //value is boolean
             return value == true;
            },
            message: 'you must check mark before continue'
        }
    ]
    const element = useRef();
    //return boolean of if all validation return true
  const result = element.current?.checkValidity()

  <JBCheckbox validationList={validationList} ref={element}/>
    
\`\`\`
unlike other \`jb design system\` web-components \`jb-checkbox\` dont have any native wat to show validation error to the user and will only validate and return result for you to take an action as you like.
## Sizes
you can adjust different sizes for check box by size prop.

\`\`\`jsx
<JBCheckbox size="sm" />
\`\`\`
size value are \`xl, lg, md, sm, xs\`.

## customize styles:

Read [\`jb-checkbox\`](https://github.com/javadbat/jb-checkbox/) document for styling doc.

## Other Related Docs:

- see [jb-checkbox](https://github.com/javadbat/jb-checkbox/) if you want to use this component in react.

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components.

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.


`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Components/form elements/JBCheckbox/React Readme"}),`
`,e.jsx(s,{children:c})]})}function x(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{x as default};
