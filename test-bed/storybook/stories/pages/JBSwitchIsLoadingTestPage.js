import React, { useState } from 'react';
import JBSwitch from '../../../../react-component/jb-switch';
function JBSwitchIsLoadingTest (props){
    const [value, inputValueSetter] = useState(false);
    const [isLoading, isLoadingSetter] = useState(false);
    function onChangeInput(e){
        isLoadingSetter(true);
        setTimeout(() => {
            inputValueSetter(e.target.value);
            isLoadingSetter(false);
        }, 1500);
    }
    return (
        <JBSwitch trueTitle={props.trueTitle} falseTitle={props.falseTitle} value={value} onChange={e => {onChangeInput(e);}} isLoading={isLoading}></JBSwitch>
    );
}
export default JBSwitchIsLoadingTest;