import React, { useRef,useEffect } from "react";
import { JBDateInput } from "jb-date-input-react";
import { JBInput } from "jb-input-react";
import { JBButton } from "jb-button-react";
import { JBSelect } from "jb-select-react";
import { JBTextarea } from "jb-textarea-react";
import { JBImageInput } from "jb-image-input-react";
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
const genderList = ["male","female"];
const defaultFormValue = {
  name:"ali",
  birthDate:'2024-10-26',
  applyDate:new Date().toISOString(),
  gender:"male",
  description:"i'm ali"
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
        <form is="jb-form" ref={ref} {...args} style={{display:'flex', flexDirection:"column", gap:'1rem'}}>
          <JBInput name="name" required label="نام" />
          <JBDateInput name="birthDate" required label="تاریخ تولد" format="YYYY-MM-DD" />
          <JBDateInput name="applyDate" required label="apply date" />
          <JBSelect name="gender" optionList={genderList} label="جنسیت" required />
          <JBImageInput name="avatar" label="نمایه" required maxFileSize={500*1024} />
          <JBTextarea label="توضیحات" name="description" required />
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

