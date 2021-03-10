import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import 'jb-time-input';
function JBTimeInputEventTestPage(props) {
    const element = useRef();
    const [value, setValue] = useState();
    useEffect(()=>{
        if(element.current){
            element.current.addEventListener("change",(e)=>{setValue(e.target.value);});
        }
    },[element.current]);
    return (
        <div>
            <jb-time-input ref={element} label="date"></jb-time-input>
            <span>value:{value}</span>
        </div>
    );
}

JBTimeInputEventTestPage.propTypes = {

};

export default JBTimeInputEventTestPage;

