import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-kacJPVKr.js";import{A as n,_ as r,d as i,m as a,o,v as s}from"./blocks-GMI-_iQo.js";import{t as c}from"./mdx-react-shim-BnxG2iIe.js";import{Headless as l,n as u}from"./JBDateInput.stories-BvlSk1tl.js";function d(e){let t={a:`a`,code:`code`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{title:`Components/form elements/Inputs/JBDateInput/Headless`}),`
`,(0,p.jsx)(r,{children:`Headless`}),`
`,(0,p.jsx)(o,{of:l,children:`turn every input to jb-date-input`}),`
`,(0,p.jsx)(`p`,{children:`turn every input to jb-date-input`}),`
`,(0,p.jsx)(`p`,{children:`to make this happen we have several way. if you are using ReactJS it's quite easy with just simple hook, but if you are in other frameworks or in pure js or you just want more flexibility you can use or helper functions.`}),`
`,(0,p.jsx)(`h2`,{children:`Headless in ReactJS`}),`
`,(0,p.jsxs)(`p`,{children:[`you can use `,(0,p.jsx)(t.code,{children:`useJBDateInput`}),` hook to make every input to jb-date-input`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-jsx`,children:`import {useJBDateInput } from "jb-date-input/react";

export function YourDateInput(){
  const ref = useRef<HTMLInputElement>(null);
  const { value, onChange, onClick, onFocus } = useJBDateInput({ dateInputType: "JALALI", ref, showPersianNumber: false })
  return (
    <input ref={ref} value={value} onChange={onChange} onClick={onClick} onFocus={onFocus} />
  )
}
`})}),`
`,(0,p.jsx)(t.p,{children:`here is the sample:`}),`
`,(0,p.jsx)(a,{of:l}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`What about calendar?`}),`
jb-date-input headless module intended to control date-input typing and caret pos ,... as light as possible
if you need calendar, you can use `,(0,p.jsx)(t.a,{href:`?path=/docs/components-jbcalendar--overview`,children:`jb-calendar`}),` and add calendar to your own date input`]}),`
`,(0,p.jsx)(`h2`,{children:`Headless in Other tools`}),`
`,(0,p.jsxs)(`p`,{children:[`import our headless helpers function from `,(0,p.jsx)(t.code,{children:`jb-date-input/module`}),` then use these functions inside your code to control what user type`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-typescript`,children:`import { type InputType, type BeforeInputHandlerResponse, handleBeforeInput, emptyInputValueString, getFixedCaretPos} from 'jb-date-input/module';

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
`})})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),s(),u()}))();export{f as default};