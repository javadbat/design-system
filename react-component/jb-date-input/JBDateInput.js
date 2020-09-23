import React , {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import '../../web-component/jb-date-input';
function JBDateInput(props) {
    const element = useRef();
    useEffect(()=>{
        element.current.addEventListener('change',props.onChange);
        element.current.addEventListener('change',props.onKeyup);
    },[]);
    useEffect(()=>{
        element.current.addEventListener('select',props.onSelect);
    },[]);
    return (
        <jb-date-input label={props.label} value-type={props.valueType?props.valueType:'GREGORIAN'} min={props.min} max={props.max} ref={element} ></jb-date-input>
    );
}
JBDateInput.propTypes = {
    label: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
    onKeyup: PropTypes.func,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    valueType: PropTypes.string
};
export default JBDateInput;
