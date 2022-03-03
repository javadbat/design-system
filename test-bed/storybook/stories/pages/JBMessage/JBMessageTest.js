import React from 'react'
import JBButton from '../../../../../react-component/jb-button';
import JBMessage from '../../../../../modules/jb-message';
function JBMessageTest() {
    const message = new JBMessage();
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
        <div>
            <JBButton onClick={showSuccessMessage}>success message</JBButton>
            <JBButton onClick={showErrorMessage}>error message</JBButton>
            <JBButton onClick={showWarningMessage}>warning message</JBButton>
            <JBButton onClick={showInformationMessage}>information message</JBButton>
        </div>
    )
}

export default JBMessageTest;
