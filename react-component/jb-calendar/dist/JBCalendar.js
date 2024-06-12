import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import 'jb-calendar';
import PropTypes from 'prop-types';

function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
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

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

function useEvent(dom, event, handler) {
  var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  useEffect(function () {
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
  var element = useRef(null);
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    refChangeCount = _useState2[0],
    refChangeCountSetter = _useState2[1];
  useImperativeHandle(ref, function () {
    return element ? element.current : {};
  }, [element]);
  useEffect(function () {
    refChangeCountSetter(refChangeCount + 1);
  }, [element.current]);
  useEffect(function () {
    if (props.inputType) {
      element.current.inputType = props.inputType;
    }
  }, [props.inputType]);
  useEffect(function () {
    element.current.setAttribute('direction', props.direction);
  }, [props.direction]);
  useEffect(function () {
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

export { JBCalendar };
//# sourceMappingURL=JBCalendar.js.map
