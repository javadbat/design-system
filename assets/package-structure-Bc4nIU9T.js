import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BgTYBwyO.js";import{A as n,d as r,v as i}from"./blocks-D5BSbCx1.js";import{t as a}from"./mdx-react-shim-D5WWw0qZ.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`General/Package Structure`}),`
`,(0,c.jsx)(t.h1,{id:`package-structure`,children:`Package structure`}),`
`,(0,c.jsx)(t.p,{children:`All JB Design System packages use the same build process and a similar file structure for ease of use.`}),`
`,(0,c.jsx)(t.h2,{id:`folder-structure`,children:`Folder structure`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:`jb-package-name
│   README.md         // package documentation
│   index.js          // package entry point, exports the web-component build
│   build-config.ts   // build config used by the monorepo builder
│   package.json      // package metadata, published files, types, and customElements path
│
└───web-component     // contains the source and build output of the web component
│   │   custom-elements.json // custom elements manifest used by tools and package.json
│   │   tsconfig.json        // TypeScript config for the web-component build
│   │
│   └───lib           // source code of the web component
│   │   │   jb-package-name.ts   // web-component main file
│   │   │   jb-package-name.css  // styles of the web component
│   │   │   render.ts            // contains HTML template of the web component
│   │   │   types.ts             // TypeScript types used by the component
│   │   │   variables.css        // CSS variables that users can override from outside
│   
│   └───dist          // build files of the web component
│       │   jb-package-name.cjs.js    // CJS build, used in legacy projects
│       │   jb-package-name.cjs.js.br // Brotli compressed version of the CJS package
│       │   jb-package-name.cjs.js.gz // gzip version of the CJS package
│       │   jb-package-name.d.ts      // TypeScript definition of the package
│       │   jb-package-name.js        // ESM main build file of the package
│       │   jb-package-name.js.br     // Brotli compressed version of the ESM package
│       │   jb-package-name.js.gz     // gzip version of the ESM package
│       │   jb-package-name.js.map    // source map file for ESM build
│       │   jb-package-name.umd.js    // UMD build for standalone browser usage
│       │   jb-package-name.umd.js.br
│       │   jb-package-name.umd.js.gz
│       │   jb-package-name.umd.js.map
│
└───react             // contains the React wrapper version of the package
│   │   README.md
│   │   index.js
│   │   package.json
│   │   tsconfig.json
│   │
│   └───lib           // source code of the React wrapper
│   └───dist          // build files of the React wrapper
│
└───stories           // contains Storybook examples and docs for the package
`})}),`
`,(0,c.jsx)(t.h3,{id:`built-version`,children:`Built version`}),`
`,(0,c.jsxs)(t.p,{children:[`Each web component package has 3 builds under `,(0,c.jsx)(t.code,{children:`web-component/dist`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`ESM - main ecma script build of the package`}),`
`,(0,c.jsx)(t.li,{children:`CJS - common js build of the package`}),`
`,(0,c.jsx)(t.li,{children:`UMD - Universal Module Definition of the package. This version is used to import the component directly in browsers or environments that do not support the Node.js package resolution system. Use this when you are in WordPress, CodePen, or similar environments and you need to load the package on the fly.`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`The root `,(0,c.jsx)(t.code,{children:`index.js`}),` file imports/exports from `,(0,c.jsx)(t.code,{children:`web-component/dist`}),`, and `,(0,c.jsx)(t.code,{children:`package.json`}),` points `,(0,c.jsx)(t.code,{children:`types`}),` to `,(0,c.jsx)(t.code,{children:`web-component/dist/jb-package-name.d.ts`}),` and `,(0,c.jsx)(t.code,{children:`customElements`}),` to `,(0,c.jsx)(t.code,{children:`web-component/custom-elements.json`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`compression`,children:`Compression`}),`
`,(0,c.jsxs)(t.p,{children:[`In most cases compression is not needed in packages because each app has its own bundler to compress the final app. It helps in cases where you want to use the package in a simple or small project that does not use a complicated build system, or in single-page apps, form builders, and similar environments.
The other case is that it shows you how much space the package will take in your production build (`,(0,c.jsx)(t.code,{children:`/web-component/dist/jb-package-name.js.br`}),` size will inform you about the size of package in your build).`]}),`
`,(0,c.jsx)(t.h2,{id:`react-version`,children:`React Version`}),`
`,(0,c.jsxs)(t.p,{children:[`Most packages also have a React wrapper version. Some packages, like `,(0,c.jsx)(t.code,{children:`jb-core`}),`, have more than wrapper React tools.
To access these files, import them from `,(0,c.jsx)(t.code,{children:`package-name/react`}),` and see the `,(0,c.jsx)(t.code,{children:`react`}),` folder for the React component source code.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};