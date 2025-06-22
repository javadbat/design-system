import{j as t,M as s,m as a}from"./index-CjzcavKa.js";import{useMDXComponents as i}from"./index-B8rYRX2K.js";import"./iframe-CzLSn7Zw.js";import"./index-D4lIrffr.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const p=`# jb-password-input-react
password input react component
this component props and functionality are all come from [jb-input-react](https://github.com/javadbat/jb-input-react) just for password input so for doc just read jb-input-react document
in jb-time-input you can create a input special for time the advantage is:

- all jb-input benefits include customizations, validation,...
- show password toggle button to let user see inputted password


 Demo: [codeSandbox preview](https://3f63dj.csb.app/samples/jb-password-input) for just see the demo and [codeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBPasswordInput.tsx) if you want to see and play with code
## Demo image:    
![](pass.png)
![](passShow.png)

### set password level

jb-password has some default validation check series that you can set by just set the \`level\` prop of the component

\`\`\`ts
//level list
type PasswordValidationLevel ="NONE" | "BASIC" | "PRO"
//NONE is no default validation
//BASIC just check for password length
//PRO check password length + numeric and special char included
\`\`\`
\`\`\`jsx
<JBPasswordInput level="PRO"></JBPasswordInput>
\`\`\`
you may not set the level and just set your own validation but we put this option for ease of use.

## Other Related Docs:

- see [jb-password-input](https://github.com/javadbat/jb-password-input) if you want to use this as a web-component in a pure-js app or any other framework.

- see [All JB Design system Component List](https://github.com/javadbat/design-system/blob/main/docs/component-list.md) for more components.

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.`;function o(n){return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Components/form elements/Inputs/JBPasswordInput/React Readme"}),`
`,t.jsx(a,{children:p})]})}function j(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o()}export{j as default};
