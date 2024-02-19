(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('jb-calendar'), require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['react', 'jb-calendar', 'prop-types'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.JBCalendar = factory(global.React, null, global.PropTypes));
})(this, (function (React, jbCalendar, PropTypes) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
	var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

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
	      if (i = (t = t.call(r)).next, 0 === l) {
	        if (Object(t) !== t) return;
	        f = !1;
	      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
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
	module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var arrayLikeToArray = createCommonjsModule(function (module) {
	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;
	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
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
	var JBCalendar = /*#__PURE__*/React__default["default"].forwardRef(function (props, ref) {
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
	  return /*#__PURE__*/React__default["default"].createElement("jb-calendar", {
	    ref: element
	  });
	});
	JBCalendar.propTypes = {
	  onSelect: PropTypes__default["default"].func,
	  value: PropTypes__default["default"].string,
	  jalaliMonthList: PropTypes__default["default"].array,
	  inputType: PropTypes__default["default"].oneOf(['GREGORIAN', 'JALALI'])
	};

	return JBCalendar;

}));
//# sourceMappingURL=JBCalendar.umd.js.map
