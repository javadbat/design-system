import{j as e,M as t}from"./index-s6gxATVP.js";import{useMDXComponents as s}from"./index-CKD13vE0.js";import"./iframe-BTiFIOaZ.js";import"./index-CC6F48bw.js";import"./index-w8ShHWsj.js";import"./index-qiR4Kxfn.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function o(a){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"General/Package Structure"}),`
`,e.jsx(n.h1,{id:"package-structure",children:"Package structure"}),`
`,e.jsx(n.p,{children:"All JB Design System package has the same build process and file structure for ease of use."}),`
`,e.jsx(n.h2,{id:"folder-structure",children:"Folder structure"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`jb-package-name
│   README.md  //document of the package
│   index.js   // entry point of package when you import that package    
│   build-config.ts   // build config of that package needed by jb-design-system monorepo to build the package    
│
└───lib   // contain source code of the package (almost web-component)
│   │   jb-package-name.ts   // web-component main file
│   │   jb-package-name.css  // style of the web-component
│   │   render.ts            // contain HTML of the web-component
│   │   types.ts             // typescript types needed in component
│   │   variables.css        // define css variables that can be used and changes by user from outside
│   
└───dist  // build file of the component
|   │   jb-package-name.cjs.js // cjs build of the package used in legacy project
|   │   jb-package-name.cjs.js.br // brotli compressed version of the cjs package
|   |   jb-package-name.cjs.js.gz // gzip version of the cjs package
|   |   jb-package-name.d.ts // typescript definition of the package
|   |   jb-package-name.js  // ESM main build file of the package
|   |   jb-package-name.js.br // brotli compressed version of the ESM package
|   |   jb-package-name.js.gz // gzip version of the ESM package
|   |   jb-package-name.js.map // map file for ESM build
|   |   jb-package-name.umd.js // universal version of the package that contain all dependencies used when import as an standalone module in non-npm compatible environment
|   |   jb-package-name.umd.js.br
|   |   jb-package-name.umd.js.gz
|   |   jb-package-name.umd.js.map
└───react     // contain react component version of the package (inner folder structure is the same as web-component)  
└───stories   // contain storybook example of the web-component
`})}),`
`,e.jsx(n.h3,{id:"builded-version",children:"Builded Version"}),`
`,e.jsx(n.p,{children:"each package have 3 build"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"ESM - main ecma script build of the package"}),`
`,e.jsx(n.li,{children:"CJS - common js build of the package"}),`
`,e.jsx(n.li,{children:"UMD - Universal Module Definition of the package this version is used to be import directly in browser in some environment that dont support nodejs packaging system to resolve dependencies. use this when you are in wordpress codepen ,... and you need to load the package on the fly."}),`
`]}),`
`,e.jsx(n.h2,{id:"compression",children:"Compression"}),`
`,e.jsxs(n.p,{children:[`in most cases compression isn't needed in packages and each app has it's own bundler to compress app but it helps in some cases like when you want to use the package in simple and small project that dont use complicated build system or in single app or form builder ,...
The other case is it show you how much package will take space in your production build (`,e.jsx(n.code,{children:"/dist/jb-package-name.js.br"})," size will inform you about the size of package in your build)"]}),`
`,e.jsx(n.h2,{id:"react-version",children:"React Version"}),`
`,e.jsxs(n.p,{children:["Most Packages also have a react wrapper version or some package like ",e.jsx(n.code,{children:"jb-core"}),` have more that just wrapper react tools ,...
to access these file import them from `,e.jsx(n.code,{children:"package-name/react"})," and see ",e.jsx(n.code,{children:"react"})," folder to see the react component source code."]})]})}function u(a={}){const{wrapper:n}={...s(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(o,{...a})}):o(a)}export{u as default};
