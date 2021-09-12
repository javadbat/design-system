import React , {useEffect, useRef, useState, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import 'jb-date-input';
import { useEvent } from '../custom-hooks/UseEvent';
const JBDateInput = React.forwardRef((props, ref)=>{
    const element = useRef();
    const [refChangeCount, refChangeCountSetter] = useState(0);
    useImperativeHandle(
        ref,
        () => (element?element.current:{}),
        [element],
    );
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
    useEffect(()=>{
        if(props.format){
            element.current.value = props.value;
        }
    },[props.value]);
    useEffect(()=>{
        if(props.direction){
            element.current.setAttribute('direction', props.direction);
        }
    },
    [props.direction]);
    return (
        <jb-date-input label={props.label} value-type={props.valueType?props.valueType:'GREGORIAN'} min={props.min} max={props.max} ref={element} input-type={props.inputType?props.inputType:'JALALI'}></jb-date-input>
    );
});
JBDateInput.displayName = "JBDateInput";
JBDateInput.propTypes = {
    label: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    format: PropTypes.string,
    onKeyup: PropTypes.func,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    valueType: PropTypes.oneOf(['GREGORIAN','JALALI','TIME_STAMP']),
    inputType: PropTypes.oneOf(['GREGORIAN','JALALI']),
    direction: PropTypes.oneOf(['ltr','rtl']),
    value: PropTypes.string
};
export default JBDateInput;
