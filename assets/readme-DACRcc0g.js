import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BHkX38Rj.js";import{A as n,d as r,u as i,v as a}from"./blocks-snfHwyPU.js";import{t as o}from"./mdx-react-shim-JlVf9zgf.js";var s,c=e((()=>{s=`# JBValidation\r
\r
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-validation)\r
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-validation/main/LICENSE)\r
[![NPM Version](https://img.shields.io/npm/v/jb-validation)](https://www.npmjs.com/package/jb-validation)\r
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-validation)\r
\r
standard validation module that enables you to implement high interactive
validation web-components and framework components with zero effort. Try the [interactive validation demos](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--sync-validation).
\r
- Modular so it can be used anywhere. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--sync-validation)
- Support regex & custom validation function. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--sync-validation)
- Reactive and customizable. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--dynamic-validation-getter)
- Support async validations. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--async-validation)
- Fast & reliable.\r
- Integrate with [jb-form](https://github.com/javadbat/jb-form) to make zero. [Validation demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--manual-error)
- Config form with highly customizable validation methods.\r
\r
## Installation
\`\`\`sh
npm install jb-validation
\`\`\`

## React

\`jb-validation\` is framework-agnostic and does not ship a separate React wrapper. Import \`ValidationHelper\` from \`jb-validation\` in a hook or service and connect its callbacks to component state. The [interactive demos](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--sync-validation) show the same API used from a React story.

## Demo

- [Synchronous validation](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--sync-validation)
- [Async and deferred validation](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--async-validation)
- [Dynamic validation getter](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--dynamic-validation-getter)
- [Manual/server error](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--manual-error)
- [Reset validation state](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--reset)
## Architecture\r
\r
jb-validation is a universal validation module that let you simplify validations process. [Architecture demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--sync-validation)
to achieve our goal we make jb-validation **Async** first mean checkValidation return \`Promise\` by default, despite all your validations were sync or not.  \r
in \`90%\` of front-end use cases we just need sync Validation in our component or in our apps so we recommend you to use sync methods for your default useCases in front-end components and add some async methods beside them for more complex use cases. but in other scenario like web-services and etc please use \`Async\` first approach.    \r
\r
here we have \`ValidationHelper\` class that is a base class of our validation system. in every component or module that want to implement jb-validation first we have to create a instance of \`ValidationHelper\` class and then infract with it.\r
this document have 2 sections:\r
1. how to interact with already implemented module inside any component.\r
2. how to implement jb-validation in a new component.\r
\r
before we start to see how to use validations methods we must get familiar with some types in jb-validation:\r
### validator:\r
a regex or function that test value and return \`true/false\` or \`string\` or \`Promise<boolean \r
| >\`.\r
### ValidationItem:\r
single validation item with validator AND A  default error message in case of invalidity and other meta data like validation type & defer.\r
### ValidationList:\r
list of validation Item to validate your value with. if value pass all the list validators it's considered as a valid value.\r
### ValidationValue\r
validation value is the value you need for your validator functions parameter. it's may be the same with component value or it may be different with it. for example in jb-date-input value is date ISO string like \`2024-05-11\` but in our validator we need more data to validate the date like \`Date\` object so we define it in our \`ValidationValue\` type.   \r
\r
## getting started
\r
in every web-component that support jb-validation as a validation method you\r
must follow 3 step 1- provide a validation list(contain validator and message)\\\r
2- call check validation method\\\r
3- check the result\r
its easy and straight forward like the [synchronous validation example](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--sync-validation):
\r
\`\`\`js\r
component.validation.list = [\r
  {\r
    validator: /.{3}/g,\r
    message: "your value must have at least 3 char",\r
  },\r
];\r
//check validity and get the result\r
//sync result will ignore async validator or async value\r
const result = component.validation.checkValiditySync({showError:true});\r
//async validator that also support async validation getter and async validator function. will return promise\r
const asyncResult = component.validation.checkValidity({showError:true});\r
//do whatever you want with the result\r
console.log("isInputValid:", result.isAllValid);\r
asyncResult.then((asyncResultData)=>{console.log("isInputValid:", asyncResultData.isAllValid);})\r
\r
\`\`\`\r
\r
## providing validation
\r
there is 2 way to provide a validation to the module 1- provide a validation\r
list directly by an array of validator\r
\r
\`\`\`js\r
component.validation.list = [\r
  {\r
    validator: /.{3}/g,\r
    message: "your value must have at least 3 char",\r
  },\r
];\r
\`\`\`\r
\r
2- register a function that return validation list:\r
\r
\`\`\`js\r
const getValidations = () => {\r
  return [\r
    {\r
      validator: /.{3}/g,\r
      message: "your value must have at least 3 char",\r
    },\r
  ];\r
};\r
component.validation.addValidationListGetter(getValidations);\r
\`\`\`\r
\r
in the second method \`getValidations\` is called on each validation check; see the [dynamic getter demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--dynamic-validation-getter). If you have complex validation logic that may change based on your app states
or component states it's better to use second way to make sure everything is\r
controlled.\\\r
remember both way can be used together and you can even add multiple\r
\`ValidationListGetter\` in more complex situations.\r
\r
## validators\r
\r
validations in jb-validation follow this typescript type:\r
\r
\`\`\`typescript\r
//ValidationValue will be different based on the implementor component\r
export type ValidatorFunction<ValidationValue> = (\r
  value: ValidationValue,\r
) => boolean | string | Promise<boolean | string>;\r
export type ValidationItem<ValidationValue> = {\r
  /**\r
   * @property validation function or regex to match value with\r
   */\r
  validator: RegExp | ValidatorFunction<ValidationValue>;\r
  /**\r
   * @property error message that will be shown if validator return false or regex failed\r
   */\r
  message: string;\r
  /**\r
   *  @property type of error (category) its optional\r
   */\r
  stateType?: keyof ValidityStateFlags;\r
  /**\r
   * @property defer validator execution until all non-deferred validation executed.(good for async validator)\r
   */\r
  defer?: boolean;\r
};\r
\`\`\`\r
\r
it means you can pass a regex or function as a validator and there is a optional\r
[stateType](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) that\r
indicate which standard has been violated.\r
\r
### function validator

Use a function when validation depends on application state or needs a custom message. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--dynamic-validation-getter)
\r
function validator have many benefits one of them is that they may be defined in\r
a scope that contain your app states and variables (like in react components or\r
hooks or angular class). it means that you can access your own app variables and\r
write a logic in your function based on your need. for example:\r
\r
\`\`\`js\r
function setValidations(validStudentList = []) {}\r
component.validation.list = [{\r
  validator: (student) => validStudentList.includes(student),\r
  message: "this student is not in our valid student list",\r
}];\r
\`\`\`\r
\r
the other benefits is that you can have very complex logic for your input\r
because its just a plain function and if you return \`string\` instead of\r
\`boolean\` we assume it as an Error message and show it to the user.\r
\r
\`\`\`js\r
function setValidations(blackList = []) {}\r
component.validation.list = [{\r
  validator: (studentName) => {\r
    if (blackList.includes(studentName)) {\r
      return \`\${studentName} is in the black list try someone else\`;\r
    }\r
    return true;\r
  },\r
  message: "this message will shown if you return false",\r
}];\r
\`\`\`\r
\r
### async validator

Return a promise for server checks or expensive validation and use \`defer: true\` when it should run only after synchronous rules pass. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--async-validation)
\r
you can also set async validator function to check validation with your server or doing heavy search. to achieve this you just have to return promise in your validator function.\r
\r
\`\`\`js\r
function setValidations(validStudentList = []) {}\r
component.validation.list = [{\r
  validator: ({ displayValue, value }) => {\r
    return new Promise((resolve) => {\r
      isEmailTaken(value).then(({ isTaken, suggestionMail }) => {\r
        if (isTaken) {\r
          if (suggestionMail) {\r
            //invalid value with custom message\r
            resolve(\`\${value} is taken. but you can pick \${suggestionMail}\`);\r
          } else {\r
            //invalid value with default message\r
            resolve(false);\r
            //we don't support promise reject so please always resolve your promise. \r
          }\r
        } else {\r
            // valid value\r
          resolve(true);\r
        }\r
      });\r
    });\r
  },\r
  message: "email is already taken",\r
  // will wait for all non async validation to be valid then execute. if not set it may cause delay in validation display even for sync validation\r
  defer:true,\r
}];\r
\`\`\`\r
remember all async validator will be executed after sync one and deferred validation will only execute when all non-deferred one were valid. so if you want your async validator does not execute until all other validator passes, set \`defer:true\` so it will execute when all other validation is passed.\r
\r
### undefined validator

Leave \`validator\` undefined to represent a manual or server-side error. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--manual-error)
\r
if you leave validator undefined it means value is always \`invalid\` this could help you when you want to show error message based on a external reason (server side error or to showing other validation libraries error).\r
\r
\`\`\`js\r
component.validation.list = [{\r
  message:'server cant respond now',\r
}]\r
\`\`\`\r
\r
## implement in new a web-component
\r
if you have a web-component and you want to ad jb-validation support to it you just have to create a instance of \`ValidationHelper\` in your component. See the [validation demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--sync-validation) for the complete interaction.
after that just pas some callbacks function that jb-validation need to interact with your component and then you will have the validation support into your web-component.\r
\`\`\`js
\`\`\`

## API reference

\`ValidationHelper\` is framework-agnostic and can be used directly from React, Vue, Angular, or a custom element. The [interactive examples](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--sync-validation) use the same public API.

| member | type | description |
| --- | --- | --- |
| \`list\` | \`ValidationItem[]\` | Explicit validation rules. Assigning a list immediately starts a silent validation pass. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--sync-validation) |
| \`result\` | \`ValidationResult \\| null\` | Most recent full validation result. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--async-validation) |
| \`resultSummary\` | \`{ isValid: boolean \\| null; message: string \\| null }\` | Compact status and first error message. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--manual-error) |
| \`checkValidity(parameters?)\` | \`Promise<ValidationResult>\` | Runs synchronous and asynchronous rules. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--async-validation) |
| \`checkValiditySync(parameters?)\` | \`ValidationResult\` | Runs only synchronous rules. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--sync-validation) |
| \`addValidationListGetter(getter)\` | \`void\` | Adds rules generated at validation time. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--dynamic-validation-getter) |
| \`setCallbacks(callbacks)\` | \`void\` | Registers value, result, and error-display callbacks. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--sync-validation) |
| \`reset()\` | \`void\` | Clears the last result, summary, and displayed error. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbvalidation--reset) |

Set \`showError: false\` when the caller wants to inspect a result without displaying the first validation message. Pass \`value\` to validate a value other than the callback-provided current value.

## Related Docs
- see [jb-form](https://github.com/javadbat/jb-form) if you want to manage a group of inputs with jb-validation integrated component.\r
\r
- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components\r
\r
- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.\r
`}));function l(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{title:`Components/JBValidation/Readme`}),`
`,(0,d.jsx)(i,{children:s})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),a(),c()}))();export{u as default};