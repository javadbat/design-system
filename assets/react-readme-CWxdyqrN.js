import{j as n,M as a,m as s}from"./index-uLC8VMdW.js";import{useMDXComponents as l}from"./index-CpNkpSEJ.js";import"./iframe-D3OTXEMF.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const d=`# JBModal

a react component modal that open different in mobile and desktop
this component is React.js wrapper for [jb-modal](https://www.npmjs.com/package/jb-modal) web component.

- open like bottomsheet in mobile and open in center position in desktop

- customizable layout with css variable

- support typescript

- support custom url to adapt "back to close" on android and "auto open modal on refresh"

## installation 

\`\`\`command
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
    <JBModal id={MYMODAL}></JBModal>
\`\`\`

- onUrlOpen
when the react copmonent first renders the default state of isModalOpen is false.
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
`,n.jsx(s,{children:d})]})}function M(o={}){const{wrapper:e}={...l(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t()}export{M as default};
