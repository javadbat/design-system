import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../../web-component/jb-button/dist/JBButton';

function JBButton(props) {
  var buttonElement = useRef();
  useEffect(function () {
    if (typeof props.onClick == "function") {
      buttonElement.current.addEventListener('click', props.onClick, {});
    }

    return function () {
    };
  }, []);
  useEffect(function () {
    buttonElement.current.isLoading = props.isLoading;
  }, [props.isLoading]);
  return /*#__PURE__*/React.createElement("jb-button", {
    ref: buttonElement,
    type: props.type ? props.type : 'primary',
    "class": props.className
  }, props.children);
}

JBButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  className: PropTypes.string
};

export default JBButton;
//# sourceMappingURL=JBButton.js.map
