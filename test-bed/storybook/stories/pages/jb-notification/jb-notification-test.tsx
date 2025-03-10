import React from 'react';
import {JBButton} from 'jb-button/react';
import './jb-notification-styles.css';
import {notificationManager} from 'jb-notification/manager/notification-manager.ts';

export function JBNotificationTest() {
  function showSuccessMessage() {
    const message:string | null = 'completed successfully';
    notificationManager.new(message,"SUCCESS");
  }
  function showErrorMessage() {
    notificationManager.new("error happen","ERROR");

  }
  function showWarningMessage() {
       
    notificationManager.new('operation is not safe',"WARNING");
  }
  function showInformationMessage() {
        
    notificationManager.new('operation is good',"INFO");
  }
  return (
    <div className="jb-notification-test-page">
      <JBButton onClick={showSuccessMessage}>success message</JBButton>
      <JBButton onClick={showErrorMessage}>error message</JBButton>
      <JBButton onClick={showWarningMessage}>warning message</JBButton>
      <JBButton onClick={showInformationMessage}>information message</JBButton>
    </div>
  );
}

