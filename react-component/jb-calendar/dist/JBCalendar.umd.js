(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('jb-calendar'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'jb-calendar', 'prop-types'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.JBCalendar = {}, global.React, null, global.PropTypes));
})(this, (function (exports, React, jbCalendar, PropTypes) { 'use strict';

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
  var JBCalendar = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var element = React.useRef(null);
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
    React.useEffect(function () {
      if (props.inputType) {
        element.current.inputType = props.inputType;
      }
    }, [props.inputType]);
    React.useEffect(function () {
      element.current.setAttribute('direction', props.direction);
    }, [props.direction]);
    React.useEffect(function () {
      if (props.jalaliMonthList) {
        element.current.setMonthList('JALALI', props.jalaliMonthList);
      }
    }, [props.jalaliMonthList]);
    function onSelect(e) {
      if (props.onSelect && e instanceof CustomEvent) {
        props.onSelect(e);
      }
    }
    useEvent(element.current, 'select', onSelect);
    return /*#__PURE__*/React.createElement("jb-calendar", {
      ref: element
    });
  });
  JBCalendar.propTypes = {
    onSelect: PropTypes.func,
    value: PropTypes.string,
    jalaliMonthList: PropTypes.array,
    inputType: PropTypes.oneOf(['GREGORIAN', 'JALALI'])
  };

  exports.JBCalendar = JBCalendar;

}));
//# sourceMappingURL=JBCalendar.umd.js.map
