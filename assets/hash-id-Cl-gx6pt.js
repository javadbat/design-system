import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-DVw22un9.js";import{_ as n,d as r,f as i,g as a,k as o,m as s}from"./blocks-BYAqQagk.js";import{t as c}from"./mdx-react-shim-Cmn7oA1H.js";import{HashIdAndAutoClose as l,n as u}from"./JBModal.stories-hfuwhuDz.js";function d(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{title:`Components/JBModal/Hash Id`}),`
`,(0,p.jsx)(a,{children:`Hash Id`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`jb-modal`}),` can be connected to the browser URL by giving it an `,(0,p.jsx)(t.code,{children:`id`}),`.
When the modal opens, the component writes that id to `,(0,p.jsx)(t.code,{children:`location.hash`}),`.
For example, a modal with `,(0,p.jsx)(t.code,{children:`id="HashLinkedModal"`}),` opens the URL hash `,(0,p.jsx)(t.code,{children:`#HashLinkedModal`}),`.`]}),`
`,(0,p.jsxs)(`div`,{style:{border:`2px solid #f59e0b`,background:`#fffbeb`,color:`#78350f`,borderRadius:`0.5rem`,padding:`1rem`,margin:`1rem 0 1.25rem`},children:[(0,p.jsx)(`strong`,{style:{display:`block`,marginBottom:`0.5rem`},children:`Open the demo in a new window to test hash behavior`}),(0,p.jsx)(`p`,{style:{margin:`0 0 0.875rem`},children:(0,p.jsxs)(t.p,{children:[`Storybook renders docs and stories inside its manager page, and the story itself runs in an iframe.
The modal reads `,(0,p.jsx)(`code`,{children:`window.location.hash`}),` from the iframe window, not from the Storybook manager URL, so the hash demo must be opened directly in `,(0,p.jsx)(`code`,{children:`iframe.html`}),`.`]})}),(0,p.jsx)(`a`,{href:`./iframe.html?globals=&id=components-jbmodal--hash-id-and-auto-close&viewMode=story`,target:`_blank`,rel:`noopener`,style:{display:`inline-flex`,alignItems:`center`,justifyContent:`center`,minHeight:`2.5rem`,padding:`0 1rem`,borderRadius:`0.375rem`,background:`#d97706`,color:`#ffffff`,fontWeight:700,textDecoration:`none`},children:(0,p.jsx)(t.p,{children:`Open isolated hash demo`})})]}),`
`,(0,p.jsx)(s,{of:l,inline:!1,height:`32rem`}),`
`,(0,p.jsx)(i,{of:l}),`
`,(0,p.jsx)(t.h2,{id:`what-the-id-does`,children:`What the id does`}),`
`,(0,p.jsxs)(t.p,{children:[`The `,(0,p.jsx)(t.code,{children:`id`}),` has three jobs:`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`When `,(0,p.jsx)(t.code,{children:`open()`}),` runs, the modal calls `,(0,p.jsx)(t.code,{children:`history.pushState`}),` and changes the URL to `,(0,p.jsx)(t.code,{children:`#id`}),`.`]}),`
`,(0,p.jsxs)(t.li,{children:[`When the modal is initialized while `,(0,p.jsx)(t.code,{children:`location.hash`}),` already matches the modal id, the modal opens itself and dispatches `,(0,p.jsx)(t.code,{children:`urlOpen`}),`.`]}),`
`,(0,p.jsxs)(t.li,{children:[`When `,(0,p.jsx)(t.code,{children:`close()`}),` runs while the current hash is `,(0,p.jsx)(t.code,{children:`#id`}),`, the modal calls `,(0,p.jsx)(t.code,{children:`history.go(-1)`}),` so the hash is removed by browser history.`]}),`
`]}),`
`,(0,p.jsxs)(t.p,{children:[`Without an `,(0,p.jsx)(t.code,{children:`id`}),`, the modal still opens and closes normally, but it does not create a URL hash and browser back cannot target that modal.`]}),`
`,(0,p.jsx)(t.h2,{id:`react-state-sync`,children:`React state sync`}),`
`,(0,p.jsxs)(t.p,{children:[`In React, keep `,(0,p.jsx)(t.code,{children:`isOpen`}),` in your own state and listen to `,(0,p.jsx)(t.code,{children:`onUrlOpen`}),`.
This matters because the web component can open itself from the URL hash before your React state knows about it.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`const [isOpen, setIsOpen] = useState(false);

<JBModal
  id="HashLinkedModal"
  isOpen={isOpen}
  onUrlOpen={() => setIsOpen(true)}
  onClose={(event) => {
    console.log(event.detail.eventType);
  }}
>
  Modal content
</JBModal>
`})}),`
`,(0,p.jsx)(t.h2,{id:`close-event-types`,children:`Close event types`}),`
`,(0,p.jsxs)(t.p,{children:[`The modal dispatches `,(0,p.jsx)(t.code,{children:`close`}),` with `,(0,p.jsx)(t.code,{children:`event.detail.eventType`}),`.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`BACKGROUND_CLICK`}),` means the user clicked the modal backdrop.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`HISTORY_BACK_EVENT`}),` means the user pressed the browser or Android back button while the modal was open.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`CLOSE_BUTTON_CLICK`}),` is reserved for close-button driven closing.`]}),`
`,(0,p.jsx)(t.h2,{id:`auto-close`,children:`Auto close`}),`
`,(0,p.jsx)(t.p,{children:`Auto close is configured on the web component instance:`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`const modalRef = useRef<JBModalWebComponent>(null);

useEffect(() => {
  if (modalRef.current) {
    modalRef.current.config.autoCloseOnBackgroundClick = true;
  }
}, []);

<JBModal
  ref={modalRef}
  id="HashLinkedModal"
  isOpen={isOpen}
  onUrlOpen={() => setIsOpen(true)}
  onClose={() => setIsOpen(false)}
>
  Modal content
</JBModal>
`})}),`
`,(0,p.jsxs)(t.p,{children:[`When `,(0,p.jsx)(t.code,{children:`autoCloseOnBackgroundClick`}),` is `,(0,p.jsx)(t.code,{children:`true`}),`, backdrop clicks close the modal after the `,(0,p.jsx)(t.code,{children:`close`}),` event is dispatched.
The same flag is also used for browser back handling: when the modal receives a `,(0,p.jsx)(t.code,{children:`HISTORY_BACK_EVENT`}),`, it closes itself if this config is enabled.`]}),`
`,(0,p.jsxs)(t.p,{children:[`Even with auto close enabled, React users should still update `,(0,p.jsx)(t.code,{children:`isOpen`}),` in `,(0,p.jsx)(t.code,{children:`onClose`}),`.
That keeps React state and the web component state aligned.`]}),`
`,(0,p.jsx)(t.h2,{id:`direct-hash-urls`,children:`Direct hash URLs`}),`
`,(0,p.jsx)(t.p,{children:`The modal checks the hash during initialization.
That means this kind of URL can open the modal as the page or isolated Storybook iframe loads:`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-html`,children:`https://example.com/page#HashLinkedModal
`})}),`
`,(0,p.jsx)(t.p,{children:`A hash-only link clicked after the modal is already mounted does not reopen the modal by itself.
For normal in-page buttons, use React state or the modal instance API to open the modal.`}),`
`,(0,p.jsx)(t.p,{children:`In Storybook, browser-back behavior is easiest to test in the isolated iframe view because the story is normally nested inside Storybook's manager UI.`})]})}function f(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),n(),u()}))();export{f as default};