import React, {useRef, useEffect, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import '../../../web-component/jb-input/dist/JBInput';
// eslint-disable-next-line react/display-name
const JBInput = React.forwardRef((props, ref)=>{
    const element = useRef();
    useImperativeHandle(
        ref,
        () => (element?element.current:{}),
        [element],
    );
    function onChange(e){
        if(props.onChange){
            props.onChange(e);
        }
    }
    function onKeyUp(e){
        if(props.onKeyUp){
            props.onKeyUp(e);
        }
    }
    useEffect(()=>{
        element.current.addEventListener('change',onChange);
        element.current.addEventListener('keyup',onKeyUp);
    },[]);
    useEffect(() => {
        let value = props.value;
        if(props.value == null || props.value === undefined){
            value = '';
        }
        element.current.value = value;
    }, [props.value]);
    useEffect(() => {
        element.current.setAttribute('type',props.type);
    }, [props.type]);
    useEffect(()=>{
        element.current.validationList = props.validationList || [];
    },[props.validationList]);
    return (
        <jb-input placeholder={props.placeholder} ref={element} class={props.className} label={props.label} message={props.message}></jb-input>
    );
});

JBInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    onKeyUp: PropTypes.func,
    className: PropTypes.string,
    validationList: PropTypes.array,
    placeholder: PropTypes.string
};

export default JBInput;

