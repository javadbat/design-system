import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-DVw22un9.js";import{_ as n,d as r,f as i,g as a,k as o,m as s}from"./blocks-BYAqQagk.js";import{t as c}from"./mdx-react-shim-Cmn7oA1H.js";import{charLength as l,n as u}from"./JBPinInput.stories-Cj7xREsc.js";function d(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...o(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{title:`Components/form elements/JBPinInput/CharLength`}),`
`,(0,p.jsx)(a,{children:`Character length`}),`
`,(0,p.jsxs)(t.p,{children:[`Use `,(0,p.jsx)(t.code,{children:`charLength`}),` to control how many PIN cells are rendered. The default is `,(0,p.jsx)(t.code,{children:`6`}),`, which matches common OTP flows, but shorter or longer codes can be configured when your product requires them.`]}),`
`,(0,p.jsx)(t.h2,{id:`live-example`,children:`Live example`}),`
`,(0,p.jsx)(t.p,{children:`This example renders an 8 digit PIN input.`}),`
`,(0,p.jsx)(s,{of:l}),`
`,(0,p.jsx)(i,{of:l}),`
`,(0,p.jsx)(t.h2,{id:`web-component-usage`,children:`Web-component usage`}),`
`,(0,p.jsxs)(t.p,{children:[`Set the `,(0,p.jsx)(t.code,{children:`char-length`}),` attribute in HTML:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-html`,children:`<jb-pin-input label="Verification code" char-length="8"></jb-pin-input>
`})}),`
`,(0,p.jsxs)(t.p,{children:[`Or assign the `,(0,p.jsx)(t.code,{children:`charLength`}),` property in JavaScript:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-js`,children:`const pinInput = document.querySelector('jb-pin-input');

pinInput.charLength = 8;
`})}),`
`,(0,p.jsx)(t.h2,{id:`react-usage`,children:`React usage`}),`
`,(0,p.jsxs)(t.p,{children:[`Pass `,(0,p.jsx)(t.code,{children:`charLength`}),` to the React component:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { JBPinInput } from 'jb-pin-input/react';

export function VerificationCode() {
  return <JBPinInput label="Verification code" charLength={8} />;
}
`})})]})}function f(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),n(),u()}))();export{f as default};