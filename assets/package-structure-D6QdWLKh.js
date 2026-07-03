import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-uoF7cpi9.js";import{_ as n,d as r,k as i}from"./blocks-Dj_nyNSz.js";import{t as a}from"./mdx-react-shim-DOfCvuWp.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`General/Package Structure`}),`
`,(0,c.jsx)(t.h1,{id:`package-structure`,children:`Package structure`}),`
`,(0,c.jsx)(t.p,{children:`All JB Design System package has the same build process and file structure for ease of use.`}),`
`,(0,c.jsx)(t.h2,{id:`folder-structure`,children:`Folder structure`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`jb-package-name
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
`,(0,c.jsx)(t.h3,{id:`builded-version`,children:`Builded Version`}),`
`,(0,c.jsx)(t.p,{children:`each package have 3 build`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`ESM - main ecma script build of the package`}),`
`,(0,c.jsx)(t.li,{children:`CJS - common js build of the package`}),`
`,(0,c.jsx)(t.li,{children:`UMD - Universal Module Definition of the package this version is used to be import directly in browser in some environment that dont support nodejs packaging system to resolve dependencies. use this when you are in wordpress codepen ,... and you need to load the package on the fly.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`compression`,children:`Compression`}),`
`,(0,c.jsxs)(t.p,{children:[`in most cases compression isn't needed in packages and each app has it's own bundler to compress app but it helps in some cases like when you want to use the package in simple and small project that dont use complicated build system or in single app or form builder ,...
The other case is it show you how much package will take space in your production build (`,(0,c.jsx)(t.code,{children:`/dist/jb-package-name.js.br`}),` size will inform you about the size of package in your build)`]}),`
`,(0,c.jsx)(t.h2,{id:`react-version`,children:`React Version`}),`
`,(0,c.jsxs)(t.p,{children:[`Most Packages also have a react wrapper version or some package like `,(0,c.jsx)(t.code,{children:`jb-core`}),` have more that just wrapper react tools ,...
to access these file import them from `,(0,c.jsx)(t.code,{children:`package-name/react`}),` and see `,(0,c.jsx)(t.code,{children:`react`}),` folder to see the react component source code.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),n()}))();export{s as default};