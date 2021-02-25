import React , {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import 'jb-date-input';
import { useEvent } from '../custom-hooks/UseEvent';
function JBDateInput(props) {
    const element = useRef();
    const [refChangeCount, refChangeCountSetter] = useState(0);
    useEffect(() => {
        refChangeCountSetter(refChangeCount + 1);
    }, [element.current]);
    useEvent(element.current,'change',props.onChange,true);
    useEvent(element.current,'onKeyup',props.onKeyup,true);
    useEvent(element.current,'select',props.onSelect,true);
    useEffect(()=>{
        if(props.format){
            element.current.setAttribute('format',props.format);
        }
    },[props.format]);
    return (
        <jb-date-input label={props.label} value-type={props.valueType?props.valueType:'GREGORIAN'} min={props.min} max={props.max} ref={element} input-type={props.inputType?props.inputType:'JALALI'}></jb-date-input>
    );
}
JBDateInput.propTypes = {
    label: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    format: PropTypes.string,
    onKeyup: PropTypes.func,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    valueType: PropTypes.oneOf(['GREGORIAN','JALALI','TIME_STAMP']),
    inputType: PropTypes.oneOf(['GREGORIAN','JALALI'])
};
export default JBDateInput;
