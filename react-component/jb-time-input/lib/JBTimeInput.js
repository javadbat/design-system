import React, {useRef, useEffect, useImperativeHandle, useState} from 'react';
import PropTypes from 'prop-types';
import 'jb-time-input';
import {useEvent} from '../../custom-hooks/UseEvent';
// eslint-disable-next-line react/display-name
const JBTimeInput = React.forwardRef((props, ref)=>{
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
    function onChange(e) {
        if (props.onChange) {
            props.onChange(e);
        }
    }
    function onKeydown(e) {
        if (props.onKeydown) {
            props.onKeydown(e);
        }
    }
    function onKeyup(e) {
        if (props.onKeyup) {
            props.onKeyup(e);
        }
    }
    function onEnter(e) {
        if (props.onEnter) {
            props.onEnter(e);
        }
    }
    function onFocus(e) {
        if (props.onFocus && e instanceof FocusEvent) {
            props.onFocus(e);
        }
    }
    function onBlur(e) {
        if (props.onBlur && e instanceof FocusEvent) {
            props.onBlur(e);
        }
    }
    useEffect(() => {
        let value = props.value;
        if(props.value == null || props.value === undefined){
            value = '00:00:00';
        }
        element.current.value = value;
    }, [props.value]);
    useEffect(()=>{
        element.current.setAttribute('direction',props.direction);
    },[props.direction]);
    useEffect(()=>{
        element.current.validationList = props.validationList;
    },[props.validationList]);
    useEffect(()=>{
        if(props.secondEnabled !== null && props.secondEnabled !== undefined){
            element.current.secondEnabled = props.secondEnabled;
        }
    },[props.secondEnabled]);
    useEffect(() => {
        if(typeof props.frontalZero == "boolean"){
            element.current.frontalZero = props.frontalZero;
        }
    }, [props.frontalZero]);
    useEffect(() => {
        if(Array.isArray(props.optionalUnits)){
            element.current.optionalUnits = props.optionalUnits;
        }
    }, [props.optionalUnits]);
    useEvent(element.current, 'change', onChange);
    useEvent(element.current, 'keydown', onKeydown);
    useEvent(element.current, 'keyup', onKeyup);
    useEvent(element.current, 'focus', onFocus);
    useEvent(element.current, 'blur', onBlur);
    useEvent(element.current, 'enter', onEnter);
    return (
        <jb-time-input placeholder={props.placeholder} ref={element} class={props.className} label={props.label} message={props.message} close-button-text={props.closeButtonText}></jb-time-input>
    );
});

JBTimeInput.propTypes = {
    label: PropTypes.string,
    closeButtonText: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onKeyUp: PropTypes.func,
    onEnter: PropTypes.func,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    direction: PropTypes.string,
    validationList: PropTypes.array,
    secondEnabled: PropTypes.bool,
    frontalZero: PropTypes.bool,
    optionalUnits: PropTypes.array
};

export default JBTimeInput;

