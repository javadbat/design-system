import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import '../../web-component/jb-image-input';
import { useEvent } from '../custom-hooks/UseEvent';
// eslint-disable-next-line react/display-name
const JBImageInput = React.forwardRef((props, ref) => {
    const element = useRef();
    const [refChangeCount, refChangeCountSetter] = useState(0);
    useImperativeHandle(
        ref,
        () => (element ? element.current : {}),
        [element],
    );
    useEffect(() => {
        refChangeCountSetter(refChangeCount + 1);
    }, [element.current]);
    useEffect(() => {
        if (props.config) {
            element.current.config = props.config;
        }
    }, [props.config]);

    useEffect(() => {
        if (props.bridge) {
            element.current.bridge = props.bridge;
        }
    }, [props.bridge]);

    useEffect(() => {
        if (props.multiple) {
            element.current.setAttribute('multiple', 'true');
        } else {
            element.current.removeAttribute('multiple');
        }
    }, [props.multiple]);
    useEffect(() => {
        if (props.value !== undefined) {
            element.current.value = props.value;
        }
    }, [props.value]);
    useEffect(() => {
        if (props.file) {
            element.current.selectImageByFile(props.file);
        }
    }, [props.file]);
    useEffect(() => {
        if (props.acceptTypes) {
            element.current.acceptTypes = props.acceptTypes;
        }
    }, [props.acceptTypes]);
    function onChange(e) {
        if (typeof props.onChange == "function") {
            props.onChange(e);
        }
    }
    function onImageSelected(e) {
        if (typeof props.onImageSelected == "function") {
            props.onImageSelected(e);
        }
    }
    useEvent(element.current, 'change', onChange);
    useEvent(element.current, 'imageSelected', onImageSelected);
    return (
        <jb-image-input ref={element} class={props.className || ''} placeholder-title={props.placeholderTitle} upload-type={props.uploadType || 'AUTO'} required={props.required}>
            {props.children}
        </jb-image-input>
    );
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
};
JBImageInput.displayName = "JBImageInput";
export default JBImageInput;

