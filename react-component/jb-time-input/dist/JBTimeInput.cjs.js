'use strict';

var React = require('react');
var PropTypes = require('prop-types');
require('jb-time-input');

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function useEvent(dom, event, handler) {
  var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  React.useEffect(function () {
    if (dom) {
      // initiate the event handler
      dom.addEventListener(event, handler, passive);
    }
    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      if (dom) {
        dom.removeEventListener(event, handler, passive);
      }
    };
  });
}

// eslint-disable-next-line react/display-name
var JBTimeInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var element = React.useRef();
  var _useState = React.useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    refChangeCount = _useState2[0],
    refChangeCountSetter = _useState2[1];
  React.useImperativeHandle(ref, function () {
    return element ? element.current : {};
  }, [element]);
  React.useEffect(function () {
    refChangeCountSetter(refChangeCount + 1);
  }, [element.current]);
  function onChange(e) {
    if (props.onChange) {
      props.onChange(e);
    }
  }
  function onKeydown(e) {
    if (props.onKeydown) {
      props.onKeydown(e);
    }
  }
  function onKeyup(e) {
    if (props.onKeyup) {
      props.onKeyup(e);
    }
  }
  function onEnter(e) {
    if (props.onEnter) {
      props.onEnter(e);
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
  React.useEffect(function () {
    var value = props.value;
    if (props.value == null || props.value === undefined) {
      value = '00:00:00';
    }
    element.current.value = value;
  }, [props.value]);
  React.useEffect(function () {
    element.current.setAttribute('direction', props.direction);
  }, [props.direction]);
  React.useEffect(function () {
    element.current.validationList = props.validationList;
  }, [props.validationList]);
  React.useEffect(function () {
    if (props.secondEnabled !== null && props.secondEnabled !== undefined) {
      element.current.secondEnabled = props.secondEnabled;
    }
  }, [props.secondEnabled]);
  React.useEffect(function () {
    if (typeof props.frontalZero == "boolean") {
      element.current.frontalZero = props.frontalZero;
    }
  }, [props.frontalZero]);
  React.useEffect(function () {
    if (Array.isArray(props.optionalUnits)) {
      element.current.optionalUnits = props.optionalUnits;
    }
  }, [props.optionalUnits]);
  useEvent(element.current, 'change', onChange);
  useEvent(element.current, 'keydown', onKeydown);
  useEvent(element.current, 'keyup', onKeyup);
  useEvent(element.current, 'focus', onFocus);
  useEvent(element.current, 'blur', onBlur);
  useEvent(element.current, 'enter', onEnter);
  return /*#__PURE__*/React.createElement("jb-time-input", {
    placeholder: props.placeholder,
    ref: element,
    "class": props.className,
    label: props.label,
    message: props.message,
    "close-button-text": props.closeButtonText
  });
});
JBTimeInput.propTypes = {
  label: PropTypes.string,
  closeButtonText: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onEnter: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  direction: PropTypes.string,
  validationList: PropTypes.array,
  secondEnabled: PropTypes.bool,
  frontalZero: PropTypes.bool,
  optionalUnits: PropTypes.array
};

module.exports = JBTimeInput;
//# sourceMappingURL=JBTimeInput.cjs.js.map
