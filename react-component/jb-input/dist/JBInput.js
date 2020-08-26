import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../../web-component/jb-input';

var JBInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var element;

  if (ref) {
    element = ref;
  } else {
    element = useRef();
  }

  useEffect(function () {
    element.current.addEventListener('change', props.onChange);
  }, []);
  useEffect(function () {
    var value = props.value;

    if (props.value == null || props.value === undefined) {
      value = '';
    }

    element.current.value = value;
  }, [props.value]);
  useEffect(function () {
    element.current.validationList = props.validationList || [];
  }, [props.validationList]);
  return /*#__PURE__*/React.createElement("jb-input", {
    "class": props.className,
    ref: element,
    label: props.label,
    message: props.message
  });
});
JBInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  validationList: PropTypes.array
};

export default JBInput;
//# sourceMappingURL=JBInput.js.map
