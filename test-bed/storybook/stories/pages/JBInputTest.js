import React, { useState, useEffect, useRef}from 'react';
import JBInput from '../../../../react-component/jb-input/lib/JBInput';

function JBInputTest() {
    const input = useRef(null);
    const [value, setValue] = useState('09');
    useEffect(()=>{
        input.current.focus();
    },[]);
    return (
        <div style={{direction:'rtl'}}>
            <JBInput ref={input} value={value} onKeyUp={e=>setValue(e.target.value)} label="تست تایپ"></JBInput>
            <span>value:</span>
            <input value={value} onChange={e=>setValue(e.target.value)} />
            <h3>test events</h3>
            <JBInput onEnter={()=>{alert('you press Enter');}} label="تست تایپ"></JBInput>
        </div>
    )
}

export default JBInputTest;
