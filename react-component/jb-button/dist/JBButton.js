import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import '../../../web-component/jb-button/dist/JBButton';

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray = _arrayLikeToArray;

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

var unsupportedIterableToArray = _unsupportedIterableToArray;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

function useEvent(dom, event, handler) {
  var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  useEffect(function () {
    if (dom) {
      // initiate the event handler
      dom.addEventListener(event, handler, passive);
    } // this will clean up the event every time the component is re-rendered


    return function cleanup() {
      if (dom) {
        dom.removeEventListener(event, handler);
      }
    };
  });
}

var JBButton = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var element = useRef();

  var _useState = useState(0),
      _useState2 = slicedToArray(_useState, 2),
      refChangeCount = _useState2[0],
      refChangeCountSetter = _useState2[1];

  useImperativeHandle(ref, function () {
    return element ? element.current : {};
  }, [element]);
  useEffect(function () {
    refChangeCountSetter(refChangeCount + 1);
  }, [element.current]);

  function handleClick(event) {
    if (typeof props.onClick == "function") {
      props.onClick(event);
    }
  }

  useEffect(function () {
    if (props.disabled) {
      element.current.setAttribute('disabled', 'disabled');
    } else {
      element.current.removeAttribute('disabled');
    }
  }, [props.disabled]);
  useEffect(function () {
    element.current.isLoading = props.isLoading;
  }, [props.isLoading]);
  useEvent(element.current, 'click', handleClick);
  return /*#__PURE__*/React.createElement("jb-button", {
    ref: element,
    "loading-text": props.loadingText ? props.loadingText : '',
    type: props.type ? props.type : 'primary',
    "class": props.className
  }, props.children);
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
//# sourceMappingURL=JBButton.js.map
