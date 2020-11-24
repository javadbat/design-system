/* eslint-disable no-inner-declarations */
import React, { useRef, useEffect, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import '../../web-component/jb-textarea';
// eslint-disable-next-line react/display-name
const JBTextarea = React.forwardRef((props, ref) => {
    {
        const element = useRef();
        useImperativeHandle(
            ref,
            () => (element ? element.current : {}),
            [element],
        );
        function onChange(e) {
            if (props.onChange) {
                props.onChange(e);
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
            element.current.addEventListener('change', onChange);
            element.current.addEventListener('focus', onFocus);
            element.current.addEventListener('blur', onBlur);
        }, []);
        useEffect(() => {
            let value = props.value;
            if (props.value == null || props.value === undefined) {
                value = '';
            }
            element.current.value = value;
        }, [props.value]);

        useEffect(() => {
            element.current.validationList = props.validationList || [];
        }, [props.validationList]);

        useEffect(() => {
            element.current.autoHeight = props.autoHeight;
        }, [props.autoHeight]);

        return (
            <jb-textarea placeholder={props.placeholder} class={props.className} ref={element} label={props.label} message={props.message}></jb-textarea>
        );
    }
});

JBTextarea.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    validationList: PropTypes.array,
    autoHeight: PropTypes.bool
};

export default JBTextarea;