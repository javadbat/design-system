/* eslint-disable react/display-name */
import React, {useEffect, useRef} from 'react';
import '../../web-component/jb-select';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';

const JBSelect = React.forwardRef((props, ref)=>{
    let element;
    if(ref){
        element = ref;
    }else{
        element = useRef();
    }
   
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
        element.current.optionList = toJS(props.optionList) ;
    }, [props.optionList]);
    useEffect(() => {
        element.current.addEventListener('change',props.onChange);
    }, []);
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
    required: PropTypes.bool,
};

export default JBSelect;

