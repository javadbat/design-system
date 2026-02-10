import{j as e,M as i,T as a,D as u,S as p}from"./index-C4Oci1u3.js";import{useMDXComponents as r}from"./index-DVgGKjXv.js";import{H as o}from"./JBDateInput.stories-fiM8ndMr.js";import"./iframe-CjcyCVia.js";import"./index-DwQS_Y10.js";import"./index-CRFEHIza.js";import"./index-Bls5tne7.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";import"./JBDateInput-BHgS0xeb.js";import"./jb-date-input-CWoheZDW.js";import"./jb-calendar-DVcp7v1k.js";import"./index-BsliqPsk.js";import"./index-bfIR6bpK.js";import"./index-_b1slotr.js";import"./index-Ds7_9gl2.js";import"./jb-validation-DPnsTO1v.js";import"./jb-popover-D43UoEAJ.js";import"./JBButton-DPDAiu7m.js";import"./jb-button-zHbWaroO.js";import"./jb-loading-CG_FOTv2.js";import"./index-BJ5IkxrY.js";function s(t){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Components/form elements/Inputs/JBDateInput/Headless"}),`
`,e.jsx(a,{children:"Headless"}),`
`,e.jsx(u,{of:o,children:"turn every input to jb-date-input"}),`
`,e.jsx("p",{children:"turn every input to jb-date-input"}),`
`,e.jsx("p",{children:"to make this happen we have several way. if you are using ReactJS it's quite easy with just simple hook, but if you are in other frameworks or in pure js or you just want more flexibility you can use or helper functions."}),`
`,e.jsx("h2",{children:"Headless in ReactJS"}),`
`,e.jsxs("p",{children:["you can use ",e.jsx(n.code,{children:"useJBDateInput"})," hook to make every input to jb-date-input"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import {useJBDateInput } from "jb-date-input/react";

export function YourDateInput(){
  const ref = useRef<HTMLInputElement>(null);
  const { value, onChange, onClick, onFocus } = useJBDateInput({ dateInputType: "JALALI", ref, showPersianNumber: false })
  return (
    <input ref={ref} value={value} onChange={onChange} onClick={onClick} onFocus={onFocus} />
  )
}
`})}),`
`,e.jsx(n.p,{children:"here is the sample:"}),`
`,e.jsx(p,{of:o}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"What about calendar?"}),`
jb-date-input headless module intended to control date-input typing and caret pos ,... as light as possible
if you need calendar, you can use `,e.jsx(n.a,{href:"?path=/docs/components-jbcalendar--overview",children:"jb-calendar"})," and add calendar to your own date input"]}),`
`,e.jsx("h2",{children:"Headless in Other tools"}),`
`,e.jsxs("p",{children:["import our headless helpers function from ",e.jsx(n.code,{children:"jb-date-input/module"})," then use these functions inside your code to control what user type"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { type InputType, type BeforeInputHandlerResponse, handleBeforeInput, emptyInputValueString, getFixedCaretPos} from 'jb-date-input/module';

//you input dom
const inputDom = document.querySelector('input');

// set initial value of the input. jb-date-input need this empty string to keep it's pattern and control input during the type
inputDom.value = emptyInputValueString;
//this will give the last index that caret should be placed.
// you can use this function in when user click or focus on the input
const newCaretPos = getFixedCaretPos({ inputValue: value, selectionStart: inputDom.selectionStart });

// main function that control input value when user type the value
// you better use this function inside \`beforeinput\` event
inputDom.addEventListener("beforeinput",(e)=>{
  const response:BeforeInputHandlerResponse = handleBeforeInput({
    dateInputType: 'JALALI', //or 'GREGORIAN'
    selection: {
      start: inputDom.selectionStart,
      end: inputDom.selectionEnd,
    },
    value: inputDom.value,
    showPersianNumber: true,
    event: {
      inputType: e.inputType,
      data: e.data
    }
  });
  // you should disable default value input and handle it yourself
  e.preventDefault();
  setValue(response.value);
  //we set it twice because in some scenario value dont change but selection range should be set
  params.ref.current.setSelectionRange(response.selectionStart, response.selectionEnd);
  // set the selection range after the value is set
})
`})})]})}function T(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{T as default};
