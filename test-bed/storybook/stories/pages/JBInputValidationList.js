import React, { useRef } from 'react';
import JBInput from '../../../../react-component/jb-input';
import PropTypes, { func } from 'prop-types';
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
    var emailValidation=[
        {
            validator: props.emailRegex,
            message: props.emailMessage
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
        console.log(passwordInputDom.current.validation);   
    }
    return (
        <div style={{direction:'rtl'}}>
            <JBInput label='ورودی' validationList={inputValidation}></JBInput>
            <JBInput ref={passwordInputDom} label='رمز' validationList={passwordValidation}></JBInput>
            <JBInput label='ایمیل' validationList={emailValidation}></JBInput>
            <JBInput label='شماره موبایل' validationList={mobileValidation}></JBInput>
            <JBInput label='پسورد' validationList={mobileValidation} type="password"></JBInput>
            <button onClick={onButtonClicked}>check password validation</button>
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