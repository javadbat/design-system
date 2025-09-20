import{j as e,M as o,m as i}from"./index-DeQF6Xxj.js";import{useMDXComponents as s}from"./index-CpNkpSEJ.js";import"./iframe-DGZhcEex.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";const l=`# jb-form

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-form)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-form/main/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dw/jb-form)](https://www.npmjs.com/package/jb-form)

jb design system special form with special feature like dirty check and validation

benefits:

- you can check validation of all form inputs and elements with just one command.
- you can check dirty status of all form inputs and elements with just one command.
- you can set value of all form inputs and elements with just one command.
- standard events for dirty change or validation change to notify you in real time.

## setup & install

run following command like any other npm packages

\`\`\`sh
npm i jb-form
\`\`\`
import component script into your project

\`\`\`js
import 'jb-form'
\`\`\`

## usage

jb-form is a little different form of web-component called \`Customized built-in elements\`  that mean it just extend the feature of \`form\` and change some of them so you have all \`form\` feature with a extra feature \`jb-form\` added.

\`\`\`html
<form>
  <jb-input name="name" />
  <jb-button type="submit">
</form>
\`\`\`

and for more feature just add \`is="jb-form"\`

\`\`\`html
<form is="jb-form">
  <jb-input name="name" />
  <jb-button type="submit">
</form>
\`\`\`

## validation

all jb design system form elements are supports form validation with [jb-validation](https://github.com/javadbat/jb-validation) way of providing them. you can check it by \`checkValidity\` or \`reportValidity\` function of form to see is input have a valid value or not.    
if you use \`jb-form\` you can also show validation message of each error.

\`\`\`html
<form is="jb-form">
  <jb-input name="name" required/>
  <jb-number-input name="age" required/>
  <jb-button type="submit">
</form>
\`\`\`
\`\`\`js
// isFormValid1 will be true if use fill all fields and false if one of them is empty
const isFormValid1 = document.querySelector('form').checkValidity();
// isFormValid2 will be true if use fill all fields and false if one of them is empty
// and it shows message below the inputs if they were empty
const isFormValid2 = document.querySelector('form').reportValidity();
\`\`\`
## get more detailed validation report

one of the \`jb-form\` extended feature is a more detailed validation report than standard form element.
here is the functions:

\`\`\`javascript
const form = document.querySelector('form');
// will return key value object of *named* element with error message ('' if element value is valid) works for all form standards element like HTML input
form.getValidationMessages();
// will return key value object of *named* element with error summary (null if element not implement jb-validation standard) works only for custom element that implement jb-validation standard
form.getValidationSummary();
// will return key value object of *named* element with error full report (null if element not implement jb-validation standard) works only for custom element that implement jb-validation standards
form.getValidationResult();
// this method will validate all your jb-validation compatible (web-components,virtual elements, jb-forms) with all their async validations. it has the most rich result and have tree data structure for tree forms and even validate elements without name.
// take care that this method don't validate non jb-validations element like form input or select and will only support jb-validations standard methods
const res = await form.jbCheckValidity({showError:true});
//this method will extract HTML Dom of invalid form elements (for virtual element you must provide dom when define it)
const elements = getInvalidElements(res);
\`\`\`
all jb design system support [jb-validation](https://github.com/javadbat/jb-validation) so don't worry about them. if you want to use \`getValidationSummary\` or \`getValidationResult\`.    
just check that your element must have \`name\` attribute in its HTML like: \`<jb-input name="something"/>\`.
if you have a form element that dont support [jb-validation](https://github.com/javadbat/jb-validation) you can easily create a custom element that implements \`WithValidation<ValidationValue>\` interface. for more detail read [jb-validation](https://github.com/javadbat/jb-validation) doc.
> [!IMPORTANT]
> \`jbCheckValidity\` is the only method that supports Async validations so if you have async validations in your form use this method. it also use \`Map<Element,Result>\` in it's results so you could access the elements DOM easier with this method. this method has the most complicated but most rich results for advance usages.

## value control

jb-design system components support some methods to manage values and state of themselves. things such as \`isDirty\` , \`initialValue\` are some of them.    
jb-form provide you some methods that let you manage them easier. here are the methods:
\`\`\`js
//return all named element values in a single object
form.getFormValues()
// return a object of named elements with their dirty status(read doc below the code for more information)
form.getFormDirtyStatus();
const formValue = {
  name:"joe",
  age:10
}
// set value of form elements.(elements match by their name)
form.setFormValues(formValue);
//if second argument is true or not provided setFormValues will also update initial value and if set to false it just update value
form.setFormValues(formValue,false);
// set initial value of form elements.(initial value is used to compare with value and set isDirty flag)
form.setFormInitialValues(formValue)
//if second argument is true or not provided setFormInitialValues will also update value and if set to false it just update value
form.setFormInitialValues(formValue,false)
\`\`\`
as you can see all elements have 2 values fields \`value\` & \`initialValue\`. value is a normal value of the fields but initial value is used just to be compared with value and set \`isDirty\` field.
\`isDirty\` will be true if user change the input value from a provided initial value.
remember \`setFormValues\` and \`setFormInitialValues\` second argument is \`shouldUpdateInitialValue\` that is \`true\` by default so when you call one it call the others so the get sync but if you want to just set one of them and not the other, just pass false in it

## virtual elements

you may have some custom inputs or form elements that's not quite implement jb-validation and jb-form standards but you need to put them in the form and validate them or control them like others.    
for doing so you just need to call \`addVirtualElement\` function:

\`\`\`typescript
// here is type of VirtualElement you need to build
//TValue is the component normal value you always want to get and TValidationValue is the value you want to pass to validation module validators. they may be the same type or not base on your component 
type VirtualElementConfig<TValue,TValidationValue> = {
  //name of the field in all result returns. it's required.
  name:string,
  //jb-validation standard ValidationHelper object. if not provided all validation methods will skip this input
  validation?:ValidationHelper<TValidationValue>,
  //the function that may return value of the component
  getValue?:()=>TValue,
  // a function that determine if component value changed in compare to provided initialValue
  getDirtyStatus?:()=>boolean,
  //called whenever form \`setFormValues\` called and set the component value
  setValue?:(value:TValue)=>void
  //called whenever form \`setFormInitialValues\` called and set the component initial value
  setInitialValue?:(value:TValue)=>void
}

const tagList:VirtualElement<string[],string[]> = {
  name:'tagList',
  validation:new ValidationHelper(...),
  getValue: ()=>{return list},
  //it's just an example write a real full compare function here.
  getDirtyStatus()=>{return list.length !== initialList.length },
  setValue(newValue)=>{ list= newValue },
  setInitialValue(newValue)=>{ initialList= newValue },
}

// adding virtualElements
form.virtualElements.add(tagList);

\`\`\`

## Events

jb-form add some new events to let you monitor your form in real time when something changes:
\`\`\`javascript
  //called when submit button clicked or form.requestSubmit called
  form.addEventListener('submit',onSubmit);
  // when form dirty status change (updated on input change event)
  form.addEventListener('dirty-change',onDirtyChange);
  // when form validity change (updated on input change event)
  form.addEventListener('validity-change',onValidityChange);
  // here is the example for callback function 
  const onSubmit = ()=>{
    alert("submit");
  };
  const onDirtyChange = (e)=>{
    //you can set react states or log its new status
    setIsDirty(e.detail.isDirty);
  };
  const onValidityChange = (e)=>{
    //you can set react states or log its new status
    setIsValid(e.detail.isValid);
  };
\`\`\`
## sub form

with jb-form you have ability to pace form tag inside another form and manage them individually or in overall.

\`\`\`html
<form is="jb-form">
  <form is="jb-form" name="form1">
    <jb-input name="input1" />
  </jb-form>
  <form is="jb-form" name="form2">
    <jb-input name="input2" />
  </jb-form>
</jb-form>
\`\`\`
this really help you to manage pages that contain wizard forms or let separate forms in different components so your reusable component can have it's own form and still can be managed by parent page form.

## Other Related Docs:

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components.

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.`;function a(t){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Components/form elements/JBForm/Readme"}),`
`,e.jsx(i,{children:l})]})}function b(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a()}export{b as default};
