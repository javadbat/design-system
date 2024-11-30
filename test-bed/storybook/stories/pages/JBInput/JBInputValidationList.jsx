import React, { useRef } from 'react';
import {JBInput} from '../../../../../react-component/jb-input';
import PropTypes from 'prop-types';
function JBInputValidationList(props) {
  var inputValidation=[
    {
      validator: props.inputRegex,
      message: props.inputMessage
    }
  ];
  var passwordValidation=[
    {
      validator: props.passwordRegex,
      message: props.passwordMessage
    }
  ];
  const emailValidation=[
    {
      validator: props.emailRegex,
      message: props.emailMessage
    },
    {
      validator:({displayValue,value})=>{
        if(value.includes('yahoo')){
          return 'you cant enter yahoo email9';
        }
        return true;
      },
      message:"email must be gmail"
    },
    {
      validator:({displayValue,value})=>{
        return new Promise((resolve)=>{
          setTimeout(()=>{
            if(value.includes('outlook')){
              resolve('you cant enter outlook email') ;
            }
            resolve(true);
          },3000);
          
        });

      },
      message:"outlook doesn't respond",
      defer:true
    }
  ];
  var mobileValidation=[
    {
      validator: props.mobileRegex,
      message: props.mobileMessage
    }
  ];
  const passwordInputDom = useRef();
  function onButtonClicked(){
    console.log(passwordInputDom.current.validation.result);   
  }
  return (
    <div style={{direction:'rtl'}}>
      <JBInput label='ورودی' validationList={inputValidation}></JBInput>
      <JBInput ref={passwordInputDom} label='رمز' validationList={passwordValidation}></JBInput>
      <JBInput label='ایمیل' validationList={emailValidation} message="enter outlook and see async validation result after 3sec"></JBInput>
      <JBInput label='شماره موبایل' validationList={mobileValidation}></JBInput>
      <JBInput label='پسورد' validationList={passwordValidation} type="password"></JBInput>
      <button onClick={onButtonClicked}>log password validation(see console)</button>
    </div>
  );
}
JBInputValidationList.propTypes = {
  inputRegex: PropTypes.string,
  inputMessage: PropTypes.string,
  passwordRegex: PropTypes.string,
  passwordMessage: PropTypes.string,
  emailRegex: PropTypes.string,
  emailMessage: PropTypes.string,
  mobileRegex: PropTypes.string,
  mobileMessage: PropTypes.string,
};


export default JBInputValidationList;