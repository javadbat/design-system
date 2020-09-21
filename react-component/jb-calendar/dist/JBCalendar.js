import React, { useRef, useEffect } from 'react';
import '../../../web-component/jb-calendar';
import PropTypes from 'prop-types';

var JBCalendar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var element;

  if (ref) {
    element = ref;
  } else {
    element = useRef();
  }

  useEffect(function () {
    element.current.addEventListener('select', props.onSelect);
  }, []); // useEffect(() => {
  //     let value = props.value;
  //     if(props.value == null || props.value === undefined){
  //         value = '';
  //     }
  //     element.current.value = value;
  // }, [props.value]);

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("jb-calendar", {
    ref: element
  }));
});
JBCalendar.propTypes = {
  onSelect: PropTypes.func,
  value: PropTypes.string
};

export default JBCalendar;
//# sourceMappingURL=JBCalendar.js.map
