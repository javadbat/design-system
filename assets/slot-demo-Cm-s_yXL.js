import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-uoF7cpi9.js";import{_ as n,d as r,f as i,g as a,k as o,m as s}from"./blocks-Dj_nyNSz.js";import{t as c}from"./mdx-react-shim-DOfCvuWp.js";import{WithHeaderAndFooter as l,n as u}from"./JBModal.stories-_83pn6sp.js";function d(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{title:`Components/JBModal/Slot Demo`}),`
`,(0,p.jsx)(a,{children:`Slot Demo`}),`
`,(0,p.jsx)(t.p,{children:`JB Modal trying to be simple as possible and not dictate any design to the component user.
you can easily show any content by just put it inside the input`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-html`,children:`<jb-modal>hello world</jb-modal>
`})}),`
`,(0,p.jsx)(t.p,{children:`but you can also separate header and footer segment like this:`}),`
`,(0,p.jsx)(s,{of:l,inline:!1,height:`30rem`}),`
`,(0,p.jsx)(i,{of:l}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`each segment is optional and you can use any of them or none.`}),`
`,(0,p.jsx)(t.li,{children:`you can put any html content inside each slot.`}),`
`,(0,p.jsx)(t.li,{children:`each segment or slot have it's own styling, you can style each segment by your self.`}),`
`,(0,p.jsx)(t.li,{children:`default styling of each segment is minimal and simple.`}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`customizing-slots-style`,children:`Customizing Slots style`}),`
`,(0,p.jsx)(t.p,{children:`you can easily customize each slot by just provide your own style to each slot like this:`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-html`,children:`<jb-modal>
  <div slot="header" style="background-color: lightblue; padding: 1rem; font-size: 1.5rem;">
    Custom Header
  </div>
  <!-- you can also pass any class like tailwind class and it will replace default styles -->
  <div slot="content" class="p-4 bg-white">
    Custom Content
  </div>
  <div slot="footer" style="background-color: lightgray; padding: 1rem; text-align: right;">
    Custom Footer
  </div>
</jb-modal> 
`})}),`
`,(0,p.jsx)(t.p,{children:`you can also customizing slot style for you whole project for style unification by just targeting each slot in your css file like this:`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-css`,children:`jb-modal [slot="header"] {
  background-color: lightblue;
  padding: 1rem;
  font-size: 1.5rem;
}  
`})})]})}function f(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),n(),u()}))();export{f as default};