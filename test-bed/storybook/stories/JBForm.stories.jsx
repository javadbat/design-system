import React, { useRef,useEffect, useState } from "react";
import { JBDateInput } from "jb-date-input-react";
import { JBButton } from "jb-button-react";

import 'jb-form';
import {JBForm} from 'jb-form/react';
import { PersonForm, BankForm } from "./pages/jb-form/TestForms";
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
  applyDate:new Date().toISOString(),
  gender:"male",
  description:"i'm ali",
  avatar:"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"
}
export const FormTest = {
  render:
    (args) => {
      const ref = useRef(null);
      const [isDirty,setIsDirty] = useState(false);
      const [isValid,setIsValid] = useState(true);
      const onSubmit = ()=>{
        alert("submit");
      };
      const onDirtyChange = (e)=>{
        setIsDirty(e.detail.isDirty);
      };
      const onValidityChange = (e)=>{
        setIsValid(e.detail.isValid);
      };
      useEffect(()=>{
        if(ref.current){
          setIsValid(ref.current.checkValidity());
        }
      },[ref]);
      return (
        <JBForm ref={ref} {...args} style={{display:'flex', flexDirection:"column", gap:'1rem'}} onSubmit={onSubmit} onDirtyChange={onDirtyChange} onValidityChange={onValidityChange}>
          <PersonForm />
          <div style={{display:'flex', gap:'1rem'}}>
            <JBButton disabled={!isDirty} type="submit">submit</JBButton>
            <JBButton onClick={()=>alert(ref.current.checkValidity())}>check validity({isValid?'valid':'invalid'})</JBButton>
            <JBButton onClick={()=>alert(ref.current.reportValidity())}>report validity</JBButton>
            <JBButton onClick={()=>console.debug(ref.current.getValidationMessages())}>getValidationMessages</JBButton>
            <JBButton onClick={()=>console.debug(ref.current.getValidationSummary())}>getValidationSummary</JBButton>
            <JBButton onClick={()=>console.debug(ref.current.getValidationResult())}>getValidationResult</JBButton>
            <JBButton onClick={()=>console.debug(ref.current.getFormValues())}>getFormValues</JBButton>
            <JBButton onClick={()=>console.debug(ref.current.setFormValues(defaultFormValue,true))}>setFormDefaultValue</JBButton>
            <JBButton onClick={()=>console.debug(ref.current.getFormDirtyStatus())}>getFormDirtyStatus</JBButton>
          </div>
        </JBForm>

      );
    },
};
FormTest.args = {
  name: "test-form",
};

export const FormTreeTest = {
  render:
    (args) => {
      const ref = useRef(null);
      const [isDirty,setIsDirty] = useState(false);
      const [isValid,setIsValid] = useState(true);
      const onSubmit = ()=>{
        alert("submit");
      };
      const onDirtyChange = (e)=>{
        setIsDirty(e.detail.isDirty);
      };
      const onValidityChange = (e)=>{
        setIsValid(e.detail.isValid);
      };
      useEffect(()=>{
        if(ref.current){
          setIsValid(ref.current.checkValidity());
          ref.current.addEventListener('submit',onSubmit);
          ref.current.addEventListener('dirty-change',onDirtyChange);
          ref.current.addEventListener('validity-change',onValidityChange);
        }
      },[ref]);
      return (
        <form is="jb-form" ref={ref} {...args} style={{display:'flex', flexDirection:"column", gap:'1rem'}}>
          <form is="jb-form" name="personForm">
            <PersonForm></PersonForm>
          </form>
          <hr></hr>
          <form is="jb-form" name="bank-form">
            <BankForm />
          </form>
          <div>isDirty:{isDirty?'dirty':'clean'}</div>
          <div>isValid:{isValid?'valid':'invalid'}</div>
        </form>

      );
    },
};
FormTreeTest.args = {
  name: "parent-form",
};