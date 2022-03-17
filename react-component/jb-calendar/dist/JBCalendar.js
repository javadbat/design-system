import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import 'jb-calendar';
import PropTypes from 'prop-types';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var arrayWithHoles = createCommonjsModule(function (module) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var iterableToArrayLimit = createCommonjsModule(function (module) {
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var arrayLikeToArray = createCommonjsModule(function (module) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var unsupportedIterableToArray = createCommonjsModule(function (module) {
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var nonIterableRest = createCommonjsModule(function (module) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var slicedToArray = createCommonjsModule(function (module) {
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _slicedToArray = /*@__PURE__*/getDefaultExportFromCjs(slicedToArray);

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

var JBCalendar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var element = useRef();

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
  inputType: PropTypes.oneOf(['GREGORIAN', 'JALALI'])
};

export { JBCalendar as default };
//# sourceMappingURL=JBCalendar.js.map
