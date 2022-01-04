(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('jb-calendar'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['react', 'jb-calendar', 'prop-types'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.JBCalendar = factory(global.React, null, global.PropTypes));
}(this, (function (React, jbCalendar, PropTypes) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

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
    React.useEffect(function () {
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

  var JBCalendar = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
    var element = React.useRef();

    var _useState = React.useState(0),
        _useState2 = slicedToArray(_useState, 2),
        refChangeCount = _useState2[0],
        refChangeCountSetter = _useState2[1];

    React.useImperativeHandle(ref, function () {
      return element ? element.current : {};
    }, [element]);
    React.useEffect(function () {
      refChangeCountSetter(refChangeCount + 1);
    }, [element.current]);
    React.useEffect(function () {
      if (props.inputType) {
        element.current.inputType = props.inputType;
      }
    }, [props.inputType]);
    React.useEffect(function () {
      element.current.setAttribute('direction', props.direction);
    }, [props.direction]);

    function onSelect(e) {
      if (props.onSelect && e instanceof CustomEvent) {
        props.onSelect(e);
      }
    }

    useEvent(element.current, 'select', onSelect);
    return /*#__PURE__*/React__default['default'].createElement("jb-calendar", {
      ref: element
    });
  });
  JBCalendar.propTypes = {
    onSelect: PropTypes__default['default'].func,
    value: PropTypes__default['default'].string,
    inputType: PropTypes__default['default'].oneOf(['GREGORIAN', 'JALALI'])
  };

  return JBCalendar;

})));
//# sourceMappingURL=JBCalendar.umd.js.map
