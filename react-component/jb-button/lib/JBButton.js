import React, { useRef, useEffect, useImperativeHandle, useState } from 'react';
import PropTypes from 'prop-types';
import '../../../web-component/jb-button/dist/JBButton';
import { useEvent } from '../../custom-hooks/UseEvent';
const JBButton = React.forwardRef((props, ref) => {
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
    function handleClick(event) {
        if (typeof props.onClick == "function") {
            props.onClick(event);
        }
    }
    useEffect(() => {
        if (props.disabled) {
            element.current.setAttribute('disabled', 'disabled');
        } else {
            element.current.removeAttribute('disabled');
        }
    }, [props.disabled]);
    useEffect(() => {
        element.current.isLoading = props.isLoading;
    }, [props.isLoading]);
    useEvent(element.current, 'click', handleClick);
    return (
        <jb-button ref={element} loading-text={props.loadingText ? props.loadingText : ''} type={props.type ? props.type : 'primary'} class={props.className}>{props.children}</jb-button>
    );
});
JBButton.displayName = 'JBButton';
JBButton.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    isLoading: PropTypes.bool,
    className: PropTypes.string,
    loadingText: PropTypes.string,
    disabled: PropTypes.bool
};
export default JBButton;

