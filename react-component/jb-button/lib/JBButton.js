import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../../web-component/jb-button/dist/JBButton';
function JBButton(props) {
    const buttonElement = useRef();
    useEffect(() => {
        if (typeof props.onClick == "function") {
            buttonElement.current.addEventListener('click', props.onClick,{});
        }
        return () => {
            ()=>buttonElement.current.removeEventListener('click',props.onClick,);
        };
    }, []);
    useEffect(()=>{
        buttonElement.current.isLoading = props.isLoading;
    },[props.isLoading]);
    return (
        <jb-button ref={buttonElement} loading-text={props.loadingText ? props.loadingText : ''} type={props.type ? props.type : 'primary'} class={props.className}>{props.children}</jb-button>
    );
}
JBButton.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    isLoading:PropTypes.bool,
    className: PropTypes.string,
    loadingText: PropTypes.string
};
export default JBButton;

