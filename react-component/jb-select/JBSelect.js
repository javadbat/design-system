/* eslint-disable react/display-name */
import React, {useEffect, useRef, useState, useImperativeHandle} from 'react';
import '../../web-component/jb-select';
import PropTypes from 'prop-types';
import { useEvent } from '../custom-hooks/UseEvent';

const JBSelect = React.forwardRef((props, ref)=>{
    let element = useRef();
    const [refChangeCount, refChangeCountSetter] = useState(0);
    useImperativeHandle(
        ref,
        () => (element?element.current:{}),
        [element],
    );
    useEffect(() => {
        refChangeCountSetter(refChangeCount + 1);
    }, [element.current]);
    useEffect(() => {
        element.current.value = props.value ;
    }, [props.value]);
    useEffect(() => {
        if(typeof props.getOptionTitle =="function"){
            element.current.callbacks.getOptionTitle = props.getOptionTitle;
        }
    }, [props.getOptionTitle]);
    useEffect(() => {
        if(typeof props.getOptionValue =="function"){
            element.current.callbacks.getOptionValue = props.getOptionValue;
        }
    }, [props.getOptionValue]);
    useEffect(() => {
        element.current.optionList = props.optionList;
    }, [props.optionList]);
    function onKeyup(e) {
        if (props.onKeyup) {
            props.onKeyup(e);
        }
    }
    function onChange(e) {
        if (props.onChange) {
            props.onChange(e);
        }
    }
    useEvent(element.current,'keyup',onKeyup);
    useEvent(element.current,'change',onChange);
    return (
        <jb-select label={props.label} ref={element} required={props.required||false}></jb-select>
    );
});


JBSelect.propTypes = {
    label: PropTypes.string,
    optionList: PropTypes.array,
    getOptionTitle: PropTypes.func, 
    getOptionValue: PropTypes.func,
    value: PropTypes.any,
    onChange: PropTypes.func,
    onKeyup: PropTypes.func,
    required: PropTypes.bool,
};
JBSelect.displayName = 'JBSelect';
export default JBSelect;

