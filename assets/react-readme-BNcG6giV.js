import{j as n,M as a,l as s}from"./index-v1EKRNhS.js";import{useMDXComponents as l}from"./index-DVgGKjXv.js";import"./iframe-ryFCSExe.js";import"./index-DwQS_Y10.js";import"./index-CRFEHIza.js";import"./index-Bls5tne7.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const d=`# JBModal

React component modal
this component is React.js wrapper for [jb-modal](https://www.npmjs.com/package/jb-modal) web component.

- Responsive, open as Bottom-sheet in mobile device.
- Framework free so you can use it anywhere.
- Customizable content & style.
- Pre-styled header and footer. 
- Support typescript.
- Auto close on background click.
- You can add custom route history in browser.
- Back button handler to just close the modal instead of real back.
- Keep modal open in case of page refresh (by just provide an id).

## Demo

- [github pages](https://javadbat.github.io/jb-modal)    
- [storybook](https://javadbat.github.io/design-system/?path=/story/components-jbmodal)

## installation 

\`\`\`sh
    npm i jb-modal
\`\`\`

in your jsx file

\`\`\`js
    import {JBModal} from 'jb-modal/react'
\`\`\`
\`\`\` jsx
    <JBModal></JBModal>
\`\`\`

## use

you can place your modal content in \` <JBModal></JBModal>\` like:
\`\`\`jsx
    <JBModal>
        <div>
            <p>this is the modal content<p>
        </div>
    </JBModal>
 \`\`\`

 ### props
- onClose
you can pass a function to onClose props so that when a user click outside of the modal, the modal closes.

\`\`\` jsx
    const [isOpen, setIsOpen] = useState(false);
    <JBModal onClose={() => setIsOpen(false)}></JBModal>

\`\`\`

- isOpen
you can pass true or false to this props,this way the modal will be open based on the isOpen props.

\`\`\` jsx
    <JBModal isOpen={isOpen}></JBModal>
    // the modal is open
\`\`\`

- id
you can set a specific id for each one of your modals,this way when the modal is open the id of the modal will be in your url.    
when you set id modal will add \`#your-id\` to the url when open so when you refresh the page, modal will open automatically.

\`\`\` jsx
    <JBModal id={MyModal}></JBModal>
\`\`\`

- onUrlOpen
when the react component first renders the default state of isModalOpen is false.
when the url contains the id of the modal the function passed to onUrlOpen will update the react state and set the isModalOpen state to true.
example: 

\`\`\`jsx
    [isModalOpen, setOpen] = useState(false);
    <JBModal onUrlOpen={() => setOpen(true)}></JBModal>
\`\`\`
## customize modal look

you can customize modal look by following css properties
| css variable name                  | description                                                                                   |
| -------------                      | -------------                                                                                 |
| --jb-modal-bg-color                | modal background color                                                                        |
| --jb-modal-back-bg-color           | modal background background color                                                             |
| --jb-modal-border-radius           | modal border-radius                                                                           |
`;function t(o){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Components/JBModal/React Readme"}),`
`,n.jsx(s,{children:d})]})}function f(o={}){const{wrapper:e}={...l(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t()}export{f as default};
