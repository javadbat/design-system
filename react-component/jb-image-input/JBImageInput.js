import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import '../../web-component/jb-image-input'
// eslint-disable-next-line react/display-name
const JBImageInput = React.forwardRef((props, ref) => {
    let element;
    if (ref) {
        element = ref;
    } else {
        element = useRef();
    }
    const [onImageSelectedEvent, onImageSelectedEventSetter] = useState(null)
    useEffect(() => {
        element.current.addEventListener('change', props.onChange);
    }, [])
    useEffect(() => {
        element.current.config = props.config;
    }, [props.config]);

    useEffect(()=>{
        element.current.bridge = props.bridge;
    },[props.bridge]);
    useEffect(()=>{
        if(onImageSelectedEvent){
            element.current.removeEventListener('imageSelected',onImageSelectedEvent); 
        }
        if(typeof props.onImageSelected == "function"){
            onImageSelectedEventSetter(()=>{return props.onImageSelected});
            element.current.addEventListener('imageSelected',props.onImageSelected);
        }
    },[props.onImageSelected]);
    useEffect(()=>{
        if(props.multiple){
            element.current.setAttribute('multiple','true');
        }else{
            element.current.removeAttribute('multiple');
        }
    },[props.multiple]);
    useEffect(() => {
        if (props.value !== undefined) {
            element.current.value = props.value;
        }
    }, [props.value]);
    useEffect(()=>{
        if(props.file){
            element.current.selectImageByFile(props.file);
        }
    },[props.file])
    useEffect(() => {
       element.current.acceptTypes = props.acceptTypes;
    }, [props.acceptTypes])
    return (
        <jb-image-input ref={element} class={props.className || ''} placeholder-title={props.placeholderTitle} upload-type={props.uploadType || 'AUTO'} required={props.required}></jb-image-input>
    )
});
JBImageInput.propTypes = {
    className: PropTypes.string,
    placeholderTitle: PropTypes.string,
    required: PropTypes.bool,
    config: PropTypes.object,
    value: PropTypes.object,
    uploadType: PropTypes.string,
    onChange: PropTypes.func,
    onImageSelected: PropTypes.func,
    bridge: PropTypes.object,
    multiple: PropTypes.bool,
    file: PropTypes.object,
    acceptTypes: PropTypes.string
}
export default JBImageInput

