import{j as n,M as i,m as o}from"./index-Tqxgz1FO.js";import{useMDXComponents as s}from"./index-CpNkpSEJ.js";import"./iframe--EDVr8RP.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const l=`# JBValidation

[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-validation-input/main/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dw/jb-validation)](https://www.npmjs.com/package/jb-validation)

standard validation module that enables you to implement high interactive
validation web-components and framework components with zero effort.

- modular so it can be used anywhere.
- support regex & custom validation function.
- reactive and customizable.
- support async validations.
- fast & reliable
- integrate with [jb-form](https://github.com/javadbat/jb-form) to make zero
  config form with highly customizable validation methods

## installation

\`\`\`bash
npm install jb-validation
\`\`\`
## Architecture

jb-validation is a universal validation module that let you simplify validations process.   
to achieve our goal we make jb-validation **Async** first mean checkValidation return \`Promise\` by default, despite all your validations were sync or not.  
in \`90%\` of front-end use cases we just need sync Validation in our component or in our apps so we recommend you to use sync methods for your default useCases in front-end components and add some async methods beside them for more complex use cases. but in other scenario like web-services and etc please use \`Async\` first approach.    

here we have \`ValidationHelper\` class that is a base class of our validation system. in every component or module that want to implement jb-validation first we have to create a instance of \`ValidationHelper\` class and then infract with it.
this document have 2 sections:
1. how to interact with already implemented module inside any component.
2. how to implement jb-validation in a new component.

before we start to see how to use validations methods we must get familiar with some types in jb-validation:
### validator:
a regex or function that test value and return \`true/false\` or \`string\` or \`Promise<boolean 
| >\`.
### ValidationItem:
single validation item with validator AND A  default error message in case of invalidity and other meta data like validation type & defer.
### ValidationList:
list of validation Item to validate your value with. if value pass all the list validators it's considered as a valid value.
### ValidationValue
validation value is the value you need for your validator functions parameter. it's may be the same with component value or it may be different with it. for example in jb-date-input value is date ISO string like \`2024-05-11\` but in our validator we need more data to validate the date like \`Date\` object so we define it in our \`ValidationValue\` type.   

## getting started

in every web-component that support jb-validation as a validation method you
must follow 3 step 1- provide a validation list(contain validator and message)\\
2- call check validation method\\
3- check the result
its easy and straight forward like the example:

\`\`\`js
component.validation.list = [
  {
    validator: /.{3}/g,
    message: "your value must have at least 3 char",
  },
];
//check validity and get the result
//sync result will ignore async validator or async value
const result = component.validation.checkValiditySync({showError:true});
//async validator that also support async validation getter and async validator function. will return promise
const asyncResult = component.validation.checkValidity({showError:true});
//do whatever you want with the result
console.log("isInputValid:", result.isAllValid);
asyncResult.then((asyncResultData)=>{console.log("isInputValid:", asyncResultData.isAllValid);})

\`\`\`

## providing validation

there is 2 way to provide a validation to the module 1- provide a validation
list directly by an array of validator

\`\`\`js
component.validation.list = [
  {
    validator: /.{3}/g,
    message: "your value must have at least 3 char",
  },
];
\`\`\`

2- register a function that return validation list:

\`\`\`js
const getValidations = () => {
  return [
    {
      validator: /.{3}/g,
      message: "your value must have at least 3 char",
    },
  ];
};
component.validation.addValidationListGetter(getValidations);
\`\`\`

in the second method getValidations will be called on each validation check so
if you have a complex validation logic that may change base on your app states
or component states it's better to use second way to make sure everything is
controlled.\\
remember both way can be used together and you can even add multiple
\`ValidationListGetter\` in more complex situations.

## validators

validations in jb-validation follow this typescript type:

\`\`\`typescript
//ValidationValue will be different base on the implementor component
export type ValidatorFunction<ValidationValue> = (
  value: ValidationValue,
) => boolean | string | Promise<boolean | string>;
export type ValidationItem<ValidationValue> = {
  /**
   * @property validation function or regex to match value with
   */
  validator: RegExp | ValidatorFunction<ValidationValue>;
  /**
   * @property error message that will be shown if validator return false or regex failed
   */
  message: string;
  /**
   *  @property type of error (category) its optional
   */
  stateType?: keyof ValidityStateFlags;
  /**
   * @property defer validator execution until all non-deferred validation executed.(good for async validator)
   */
  defer?: boolean;
};
\`\`\`

it means you can pass a regex or function as a validator and there is a optional
[stateType](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) that
indicate which standard has been violated.

### function validator

function validator have many benefits one of them is that they may be defined in
a scope that contain your app states and variables (like in react components or
hooks or angular class). it means that you can access your own app variables and
write a logic in your function base on your need. for example:

\`\`\`js
function setValidations(validStudentList = []) {}
component.validation.list = [{
  validator: (student) => validStudentList.includes(student),
  message: "this student is not in our valid student list",
}];
\`\`\`

the other benefits is that you can have very complex logic for your input
because its just a plain function and if you return \`string\` instead of
\`boolean\` we assume it as an Error message and show it to the user.

\`\`\`js
function setValidations(blackList = []) {}
component.validation.list = [{
  validator: (studentName) => {
    if (blackList.includes(studentName)) {
      return \`\${studentName} is in the black list try someone else\`;
    }
    return true;
  },
  message: "this message will shown if you return false",
}];
\`\`\`

### async validator

you can also set async validator function to check validation with your server or doing heavy search. to achieve this you just have to return promise in your validator function.

\`\`\`js
function setValidations(validStudentList = []) {}
component.validation.list = [{
  validator: ({ displayValue, value }) => {
    return new Promise((resolve) => {
      isEmailTaken(value).then(({ isTaken, suggestionMail }) => {
        if (isTaken) {
          if (suggestionMail) {
            //invalid value with custom message
            resolve(\`\${value} is taken. but you can pick \${suggestionMail}\`);
          } else {
            //invalid value with default message
            resolve(false);
            //we dont support promise reject so please always resolve your promise. 
          }
        } else {
            // valid value
          resolve(true);
        }
      });
    });
  },
  message: "email is already taken",
  // will wait for all non async validation to be valid then execute. if not set it may cause delay in validation display even for sync validation
  defer:true,
}];
\`\`\`
remember all async validator will be executed after sync one and deferred validation will only execute when all non-deferred one were valid. so if you want your async validator does not execute until all other validator passes, set \`defer:true\` so it will execute when all other validation is passed.

### undefined validator

if you leave validator undefined it means value is always \`invalid\` this could help you when you want to show error message base on a external reason (server side error or to showing other validation libraries error).

\`\`\`js
component.validation.list = [{
  message:'server cant respond now',
}]
\`\`\`

## implement in new a web-component

if you have a web-component and you want to ad jb-validation support to it you just have to create a instance of \`ValidationHelper\` in your component.    
after that just pas some callbacks function that jb-validation need to interact with your component and then you will have the validation support into your web-component.
\`\`\`js
\`\`\`

## Other Related Docs:

- see [jb-form](https://github.com/javadbat/jb-form) if you want to manage a group of inputs with jb-validation integrated component.

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.`;function a(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Components/JBValidation/Readme"}),`
`,n.jsx(o,{children:l})]})}function y(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(a,{...e})}):a()}export{y as default};
