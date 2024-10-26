import React, { useRef,useEffect } from "react";
import { JBDateInput } from "jb-date-input-react";
import { JBInput } from "jb-input-react";
import { JBButton } from "jb-button-react";
import 'jb-form';
export default {
  title: "Example/JBForm",
  component: JBDateInput,
};

const Template = (args) => <jb-form {...args}></jb-form>;
export const Normal = Template.bind({});
Normal.args = {
  name:"testForm"
};

const defaultFormValue = {
  name:"ali",
  birthDate:'2024-10-26',
  applyDate:new Date().toISOString()
}
export const FormTest = {
  render:
    (args) => {
      const ref = useRef(null);
      /**@type {HTMLFormElement} */
      const form = ref.current;
      const onSubmit = ()=>{
        alert("submit");
      };
      useEffect(()=>{
        if(form){
          form.addEventListener('submit',onSubmit);
        }
      },[ref]);
      return (
        <form is="jb-form" ref={ref} {...args}>
          <JBInput name="name" required label="name" />
          <JBDateInput name="birthDate" required label="birth date" format="YYYY-MM-DD" />
          <JBDateInput name="applyDate" required label="apply date" />
          <div style={{display:'flex', gap:'1rem'}}>
            <JBButton type="submit">submit</JBButton>
            <JBButton onClick={()=>alert(ref.current.checkValidity())}>check validity</JBButton>
            <JBButton onClick={()=>alert(ref.current.reportValidity())}>report validity</JBButton>
            <JBButton onClick={()=>console.debug(ref.current.getValidationMessages())}>getValidationMessages</JBButton>
            <JBButton onClick={()=>console.debug(ref.current.getValidationSummary())}>getValidationSummary</JBButton>
            <JBButton onClick={()=>console.debug(ref.current.getValidationResult())}>getValidationResult</JBButton>
            <JBButton onClick={()=>console.debug(ref.current.getFormValues())}>getFormValues</JBButton>
            <JBButton onClick={()=>console.debug(ref.current.setFormValues(defaultFormValue,true))}>setFormDefaultValue</JBButton>
            <JBButton onClick={()=>console.debug(ref.current.getFormDirtyStatus())}>getFormDirtyStatus</JBButton>
          </div>
        </form>

      );
    },
};
FormTest.args = {
  name: "test-form",
};
