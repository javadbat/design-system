import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BlaOm9nc.js";import{_ as n,d as r,f as i,g as a,k as o,m as s}from"./blocks-BAphiJOc.js";import{t as c}from"./mdx-react-shim-CJm47l1A.js";import{AsyncValidation as l,ChecksumValidation as u,ManualValidation as d,WithValidation as f,n as p}from"./JBPinInput.stories-BiavW0Qa.js";function m(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,pre:`pre`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r,{title:`Components/form elements/JBPinInput/Validation`}),`
`,(0,g.jsx)(a,{children:`Validation`}),`
`,(0,g.jsxs)(t.p,{children:[`Use `,(0,g.jsx)(t.code,{children:`required`}),` when every PIN cell must be filled, and use `,(0,g.jsx)(t.code,{children:`validationList`}),` in React or `,(0,g.jsx)(t.code,{children:`validation.list`}),` on the web component for custom validation rules.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`JBPinInput`}),` uses `,(0,g.jsx)(t.a,{href:`https://github.com/javadbat/jb-validation`,rel:`nofollow`,children:(0,g.jsx)(t.code,{children:`jb-validation`})}),` underneath. Read its docs for more advanced usage, including reusable validation lists, validation states, deferred rules, and async validators.`]}),`
`,(0,g.jsx)(t.h2,{id:`live-example`,children:`Live example`}),`
`,(0,g.jsxs)(t.p,{children:[`This example requires a complete PIN value and adds a custom rule: the PIN must start with `,(0,g.jsx)(t.code,{children:`1`}),`.`]}),`
`,(0,g.jsx)(s,{of:f}),`
`,(0,g.jsx)(i,{of:f}),`
`,(0,g.jsx)(t.h2,{id:`function-validation`,children:`Function validation`}),`
`,(0,g.jsxs)(t.p,{children:[`Use a function validator when the rule needs custom logic. This checksum example accepts a 4 digit PIN when the last digit equals the sum of the previous digits modulo `,(0,g.jsx)(t.code,{children:`10`}),`; for example, `,(0,g.jsx)(t.code,{children:`1236`}),` is valid because `,(0,g.jsx)(t.code,{children:`1 + 2 + 3 = 6`}),`.`]}),`
`,(0,g.jsx)(s,{of:u}),`
`,(0,g.jsx)(i,{of:u}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-js`,children:`pinInput.validation.list = [
  {
    validator: (value) => {
      if (value.includes('-')) {
        return true;
      }

      const digits = value.split('').map(Number);
      const checksum = digits.slice(0, -1).reduce((sum, digit) => sum + digit, 0) % 10;

      return checksum === digits[digits.length - 1];
    },
    message: 'Last digit must match the checksum',
  },
];
`})}),`
`,(0,g.jsx)(t.h2,{id:`async-validation`,children:`Async validation`}),`
`,(0,g.jsxs)(t.p,{children:[`Async validators return a promise. This example waits 3 seconds and accepts only `,(0,g.jsx)(t.code,{children:`1234`}),`. The `,(0,g.jsx)(t.code,{children:`defer`}),` flag keeps the async validation from running until the built-in required validation has passed.`]}),`
`,(0,g.jsx)(s,{of:l}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-js`,children:`pinInput.validation.list = [
  {
    validator: async (value) => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return value === '1234';
    },
    message: 'Only 1234 is accepted',
    defer: true,
  },
];
`})}),`
`,(0,g.jsx)(t.h2,{id:`trigger-validation-manually`,children:`Trigger validation manually`}),`
`,(0,g.jsxs)(t.p,{children:[`Call `,(0,g.jsx)(t.code,{children:`reportValidity()`}),` when validation should run from your own UI, such as a submit button or a "verify code" action. It returns `,(0,g.jsx)(t.code,{children:`true`}),` or `,(0,g.jsx)(t.code,{children:`false`}),` and shows the first validation error when the value is invalid.`]}),`
`,(0,g.jsx)(s,{of:d}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-js`,children:`const pinInput = document.querySelector('jb-pin-input');
const validateButton = document.querySelector('#validate-pin');

validateButton.addEventListener('click', () => {
  const isValid = pinInput.reportValidity();

  console.log(isValid);
  console.log(pinInput.validationMessage);
});
`})}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`import { useRef } from 'react';
import type { JBPinInputWebComponent } from 'jb-pin-input';
import { JBButton } from 'jb-button/react';
import { JBPinInput } from 'jb-pin-input/react';

export function ManualPinValidation() {
  const pinInputRef = useRef<JBPinInputWebComponent>(null);

  return (
    <>
      <JBPinInput ref={pinInputRef} required />
      <JBButton type="button" onClick={() => pinInputRef.current?.reportValidity()}>
        Validate PIN
      </JBButton>
    </>
  );
}
`})}),`
`,(0,g.jsx)(t.h2,{id:`web-component-usage`,children:`Web-component usage`}),`
`,(0,g.jsxs)(t.p,{children:[`Set `,(0,g.jsx)(t.code,{children:`required`}),` in markup for the built-in required rule, then assign custom rules through the `,(0,g.jsx)(t.code,{children:`validation.list`}),` property:`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-html`,children:`<jb-pin-input label="Verification code" required></jb-pin-input>
`})}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-js`,children:`const pinInput = document.querySelector('jb-pin-input');

pinInput.validation.list = [
  {
    validator: (value) => value.startsWith('1'),
    message: 'PIN must start with 1',
  },
];
`})}),`
`,(0,g.jsx)(t.h2,{id:`react-usage`,children:`React usage`}),`
`,(0,g.jsxs)(t.p,{children:[`Pass `,(0,g.jsx)(t.code,{children:`required`}),` and `,(0,g.jsx)(t.code,{children:`validationList`}),` to the React component:`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`import { JBPinInput } from 'jb-pin-input/react';

export function VerificationCode() {
  return (
    <JBPinInput
      label="Verification code"
      required
      validationList={[
        {
          validator: (value) => value.startsWith('1'),
          message: 'PIN must start with 1',
        },
        {
          validator: async (value) => {
            await new Promise((resolve) => setTimeout(resolve, 3000));
            return value === '1234';
          },
          message: 'Only 1234 is accepted',
          defer: true,
        },
      ]}
    />
  );
}
`})}),`
`,(0,g.jsxs)(t.p,{children:[`Use `,(0,g.jsx)(t.code,{children:`checkValidity()`}),` to validate without showing an error, or `,(0,g.jsx)(t.code,{children:`reportValidity()`}),` to validate and show the first visible error.`]})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=t(),c(),n(),p()}))();export{h as default};