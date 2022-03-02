import React from 'react';
import JBInput from '../../../../../react-component/jb-input';
import "./JBInputNumberTest.css";

const JBInputNumberTest = () => {
    return (
        <div className='input-wrapper'>
            <JBInput type="number" label="تست" message="این متن تست می باشد"></JBInput>
        </div>
    );
};

export default JBInputNumberTest;