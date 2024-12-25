import React from 'react';
import JBButton from 'jb-button/react';
import JBMessage from '../../../../../modules/jb-message/dist/JBMessage';
import './JBMessageCustomStylesTest.css';

function JBMessageTest() {
    const message = new JBMessage();
    
    React.useEffect(() => {
        const listWrapper = document.querySelector('.jb-message-list-wrapper');
        listWrapper.classList.add('custom-styled-jb-message');
        return () => {
            listWrapper.classList.remove('custom-styled-jb-message');
        }
    }, []);

    function showSuccessMessage() {
        message.show({ message: 'completed successfully', type: 'success' });
    }
    function showErrorMessage() {
        const errorMessage = message.show({ message: 'operation failed', type: 'error' });
        errorMessage.dom.addEventListener('close',(e)=>{console.log('errorClosed',e);});
    }
    function showWarningMessage() {
        message.show({ message: 'operation is not safe', type: 'warning' });
    }
    function showInformationMessage() {
        message.show({ message: 'operation is good', type: 'information' });
    }
    return (
        <div className='custom-styled-jb-message'>
            <JBButton onClick={showSuccessMessage}>success message</JBButton>
            <JBButton onClick={showErrorMessage}>error message</JBButton>
            <JBButton onClick={showWarningMessage}>warning message</JBButton>
            <JBButton onClick={showInformationMessage}>information message</JBButton>
        </div>
    )
}

export default JBMessageTest;
