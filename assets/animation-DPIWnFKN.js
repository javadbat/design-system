import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-DRUIHCJR.js";import{f as n,h as r,j as i,p as a,v as o,y as s}from"./blocks-DhrBk0Pl.js";import{t as c}from"./mdx-react-shim-Ne3X4DXq.js";import{DesktopAnimation as l,DesktopEnterAnimation as u,n as d}from"./JBModal.stories-8rRCPkjZ.js";function f(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n,{title:`Components/JBModal/Animation`}),`
`,(0,m.jsx)(o,{children:`Animation`}),`
`,(0,m.jsxs)(t.p,{children:[(0,m.jsx)(t.code,{children:`jb-modal`}),` exposes `,(0,m.jsx)(t.code,{children:`background`}),` and `,(0,m.jsx)(t.code,{children:`content`}),` parts, so desktop animations can be added from outside the component.`]}),`
`,(0,m.jsx)(t.h2,{id:`open-animation-only`,children:`Open animation only`}),`
`,(0,m.jsxs)(t.p,{children:[`This is the shortest version. It uses `,(0,m.jsx)(t.code,{children:`@starting-style`}),` to define the first rendered frame when the modal enters `,(0,m.jsx)(t.code,{children:`:state(open)`}),`.`]}),`
`,(0,m.jsx)(r,{of:u,inline:!1,height:`30rem`}),`
`,(0,m.jsx)(a,{of:u}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-css`,children:`@media (min-width: 48.0625rem) {
    .desktop-enter-animation-modal::part(background) {
        opacity: 1;
        transition: opacity 300ms ease;
    }

    .desktop-enter-animation-modal::part(content) {
        opacity: 1;
        transform: translateY(0) scale(1);
        transition:
            opacity 300ms ease,
            transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    .desktop-enter-animation-modal:state(open)::part(background) {
        @starting-style {
            opacity: 0;
        }
    }

    .desktop-enter-animation-modal:state(open)::part(content) {
        @starting-style {
            opacity: 0;
            transform: translateY(1rem) scale(0.5);
        }
    }
}
`})}),`
`,(0,m.jsxs)(t.p,{children:[`This version does not animate close, because the modal host returns to `,(0,m.jsx)(t.code,{children:`display: none`}),` immediately when the `,(0,m.jsx)(t.code,{children:`open`}),` state is removed.`]}),`
`,(0,m.jsx)(t.h2,{id:`open-and-close-animation`,children:`Open and close animation`}),`
`,(0,m.jsxs)(t.p,{children:[`This version adds a discrete `,(0,m.jsx)(t.code,{children:`display`}),` transition to the modal host. That keeps the host rendered long enough for the backdrop and content box to animate back to their closed styles.`]}),`
`,(0,m.jsx)(r,{of:l,inline:!1,height:`30rem`}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:`language-css`,children:`@media (min-width: 48.0625rem) {
    @property --anime-duration {
        syntax: "<time>";
        inherits: false;
        initial-value: 300ms;
    }

    .desktop-starting-style-modal {
        transition: display var(--anime-duration) allow-discrete;
    }

    .desktop-starting-style-modal::part(background) {
        opacity: 0;
        transition: opacity var(--anime-duration) ease;
    }

    .desktop-starting-style-modal:state(open)::part(background) {
        opacity: 1;

        @starting-style {
            opacity: 0;
            backdrop-filter: blur(0px);
        }
    }

    .desktop-starting-style-modal::part(content) {
        opacity: 0;
        transform: translateY(1rem) scale(0.5);
        transition:
            opacity var(--anime-duration) ease,
            transform var(--anime-duration) cubic-bezier(0.16, 1, 0.3, 1);
        will-change: opacity, transform;
    }

    .desktop-starting-style-modal:state(open)::part(content) {
        opacity: 1;
        transform: translateY(0) scale(1);

        @starting-style {
            opacity: 0;
            transform: translateY(1rem) scale(0.5);
        }
    }
}
`})})]})}function p(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),c(),s(),d()}))();export{p as default};