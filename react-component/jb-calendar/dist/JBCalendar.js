import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import dayjs from 'dayjs';
import jalaliday from 'jalaliday';
import PropTypes from 'prop-types';

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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

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

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

var isNativeFunction = _isNativeFunction;

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var isNativeReflectConstruct = _isNativeReflectConstruct;

var construct = createCommonjsModule(function (module) {
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
});

var wrapNativeSuper = createCommonjsModule(function (module) {
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
});

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var HTML = "<div class=\"jb-calendar-web-component\">\r\n    <section class=\"navigator-section\">\r\n        <div class=\"prev-btn\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fit=\"\" preserveAspectRatio=\"xMidYMid meet\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path></svg>\r\n        </div>\r\n        <div class=\"navigator-title\">\r\n            <span class=\"month\"></span>    \r\n            <span class=\"year\"></span>\r\n            <span class=\"year-range\"></span>\r\n        </div>\r\n        <div class=\"next-btn\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fit=\"\" preserveAspectRatio=\"xMidYMid meet\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path></svg>\r\n        </div>\r\n       \r\n    </section>\r\n    <section class=\"calendar-section\">\r\n        <div class=\"day-selection-section\">\r\n            <div class=\"week-day-wrapper\">\r\n            </div>\r\n            <div class=\"month-day-wrapper\">\r\n                \r\n            </div>\r\n        </div>\r\n        <div class=\"month-selection-section\">\r\n            \r\n        </div>\r\n        <div class=\"year-selection-section\">\r\n            \r\n        </div>\r\n    </section>\r\n</div>";
var css_248z = ".jb-calendar-web-component {\n  width: 272px;\n  height: auto;\n  color: #2a2d30;\n  font-size: 16px;\n  direction: rtl; }\n  .jb-calendar-web-component .navigator-section {\n    height: 32px;\n    width: 100%;\n    margin-bottom: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer; }\n    .jb-calendar-web-component .navigator-section .prev-btn {\n      background-color: #f6f8f9;\n      width: 32px;\n      height: 32px;\n      border-radius: 12px;\n      cursor: pointer;\n      display: flex;\n      justify-content: center;\n      align-items: center; }\n      .jb-calendar-web-component .navigator-section .prev-btn svg {\n        fill: #97999a; }\n    .jb-calendar-web-component .navigator-section .next-btn {\n      background-color: #f6f8f9;\n      width: 32px;\n      height: 32px;\n      border-radius: 12px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      cursor: pointer; }\n      .jb-calendar-web-component .navigator-section .next-btn svg {\n        fill: #97999a; }\n    .jb-calendar-web-component .navigator-section .navigator-title .month {\n      display: none; }\n      .jb-calendar-web-component .navigator-section .navigator-title .month.--show {\n        display: inline; }\n    .jb-calendar-web-component .navigator-section .navigator-title .year {\n      display: none; }\n      .jb-calendar-web-component .navigator-section .navigator-title .year.--show {\n        display: inline; }\n    .jb-calendar-web-component .navigator-section .navigator-title .year-range {\n      display: none; }\n      .jb-calendar-web-component .navigator-section .navigator-title .year-range.--show {\n        display: inline; }\n  .jb-calendar-web-component .calendar-section {\n    height: auto;\n    width: 100%; }\n    .jb-calendar-web-component .calendar-section .day-selection-section {\n      display: none; }\n      .jb-calendar-web-component .calendar-section .day-selection-section.--show {\n        display: block; }\n      .jb-calendar-web-component .calendar-section .day-selection-section .week-day-wrapper {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n        grid-template-rows: 1fr;\n        gap: 4px;\n        height: 32px;\n        width: 100%;\n        margin-bottom: 16px; }\n        .jb-calendar-web-component .calendar-section .day-selection-section .week-day-wrapper .week-day {\n          height: 32px;\n          text-align: center;\n          font-weight: 800;\n          font-variation-settings: \"wght\" 800;\n          font-size: 1em; }\n      .jb-calendar-web-component .calendar-section .day-selection-section .month-day-wrapper {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n        grid-auto-rows: 1fr;\n        gap: 8px 4px;\n        height: auto;\n        width: 100%; }\n        .jb-calendar-web-component .calendar-section .day-selection-section .month-day-wrapper .day-wrapper {\n          width: 32px;\n          height: 32px;\n          border-radius: 12px;\n          color: #868990;\n          position: relative;\n          cursor: pointer;\n          display: flex;\n          align-items: center;\n          justify-content: center; }\n          .jb-calendar-web-component .calendar-section .day-selection-section .month-day-wrapper .day-wrapper.--disable {\n            color: #ddd;\n            cursor: not-allowed; }\n          .jb-calendar-web-component .calendar-section .day-selection-section .month-day-wrapper .day-wrapper.--today {\n            color: #28BD48; }\n            .jb-calendar-web-component .calendar-section .day-selection-section .month-day-wrapper .day-wrapper.--today .status-point {\n              display: block; }\n          .jb-calendar-web-component .calendar-section .day-selection-section .month-day-wrapper .day-wrapper.--selected {\n            color: #fff;\n            background-color: #1e2832; }\n            .jb-calendar-web-component .calendar-section .day-selection-section .month-day-wrapper .day-wrapper.--selected:hover {\n              background-color: #1e2832; }\n          .jb-calendar-web-component .calendar-section .day-selection-section .month-day-wrapper .day-wrapper:hover {\n            background-color: #f6f8f9; }\n          .jb-calendar-web-component .calendar-section .day-selection-section .month-day-wrapper .day-wrapper .day-number {\n            display: flex;\n            align-items: center;\n            justify-content: center; }\n          .jb-calendar-web-component .calendar-section .day-selection-section .month-day-wrapper .day-wrapper .status-point {\n            position: absolute;\n            width: 10px;\n            height: 10px;\n            background-color: #28BD48;\n            border-radius: 6px;\n            bottom: -6px;\n            left: calc(50% - 5px);\n            display: none;\n            z-index: 1;\n            border: 1px solid #fff;\n            box-sizing: border-box; }\n    .jb-calendar-web-component .calendar-section .month-selection-section {\n      display: none;\n      grid-template-columns: 1fr 1fr 1fr;\n      grid-template-rows: 1fr 1fr 1fr 1fr;\n      gap: 12px 8px; }\n      .jb-calendar-web-component .calendar-section .month-selection-section.--show {\n        display: grid; }\n      .jb-calendar-web-component .calendar-section .month-selection-section .month-wrapper {\n        width: 100%;\n        height: 32px;\n        cursor: pointer;\n        border-radius: 12px; }\n        .jb-calendar-web-component .calendar-section .month-selection-section .month-wrapper:hover {\n          background-color: #f6f8f9; }\n        .jb-calendar-web-component .calendar-section .month-selection-section .month-wrapper .month-name {\n          width: 100%;\n          height: 100%;\n          display: flex;\n          justify-content: center;\n          align-items: center; }\n    .jb-calendar-web-component .calendar-section .year-selection-section {\n      display: none;\n      grid-template-columns: 1fr 1fr 1fr;\n      grid-template-rows: 1fr 1fr 1fr 1fr;\n      gap: 12px 8px; }\n      .jb-calendar-web-component .calendar-section .year-selection-section.--show {\n        display: grid; }\n      .jb-calendar-web-component .calendar-section .year-selection-section .year-wrapper {\n        width: 100%;\n        height: 32px;\n        cursor: pointer;\n        border-radius: 12px; }\n        .jb-calendar-web-component .calendar-section .year-selection-section .year-wrapper:hover {\n          background-color: #f6f8f9; }\n        .jb-calendar-web-component .calendar-section .year-selection-section .year-wrapper .year-number {\n          width: 100%;\n          height: 100%;\n          display: flex;\n          justify-content: center;\n          align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,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c2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qYi1jYWxlbmRhci13ZWItY29tcG9uZW50IHtcbiAgd2lkdGg6IDI3MnB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjMmEyZDMwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpcmVjdGlvbjogcnRsOyB9XG4gIC5qYi1jYWxlbmRhci13ZWItY29tcG9uZW50IC5uYXZpZ2F0b3Itc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAuamItY2FsZW5kYXItd2ViLWNvbXBvbmVudCAubmF2aWdhdG9yLXNlY3Rpb24gLnByZXYtYnRuIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY4Zjk7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgICAuamItY2FsZW5kYXItd2ViLWNvbXBvbmVudCAubmF2aWdhdG9yLXNlY3Rpb24gLnByZXYtYnRuIHN2ZyB7XG4gICAgICAgIGZpbGw6ICM5Nzk5OWE7IH1cbiAgICAuamItY2FsZW5kYXItd2ViLWNvbXBvbmVudCAubmF2aWdhdG9yLXNlY3Rpb24gLm5leHQtYnRuIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY4Zjk7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAuamItY2FsZW5kYXItd2ViLWNvbXBvbmVudCAubmF2aWdhdG9yLXNlY3Rpb24gLm5leHQtYnRuIHN2ZyB7XG4gICAgICAgIGZpbGw6ICM5Nzk5OWE7IH1cbiAgICAuamItY2FsZW5kYXItd2ViLWNvbXBvbmVudCAubmF2aWdhdG9yLXNlY3Rpb24gLm5hdmlnYXRvci10aXRsZSAubW9udGgge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgICAgLmpiLWNhbGVuZGFyLXdlYi1jb21wb25lbnQgLm5hdmlnYXRvci1zZWN0aW9uIC5uYXZpZ2F0b3ItdGl0bGUgLm1vbnRoLi0tc2hvdyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTsgfVxuICAgIC5qYi1jYWxlbmRhci13ZWItY29tcG9uZW50IC5uYXZpZ2F0b3Itc2VjdGlvbiAubmF2aWdhdG9yLXRpdGxlIC55ZWFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgICAgIC5qYi1jYWxlbmRhci13ZWItY29tcG9uZW50IC5uYXZpZ2F0b3Itc2VjdGlvbiAubmF2aWdhdG9yLXRpdGxlIC55ZWFyLi0tc2hvdyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTsgfVxuICAgIC5qYi1jYWxlbmRhci13ZWItY29tcG9uZW50IC5uYXZpZ2F0b3Itc2VjdGlvbiAubmF2aWdhdG9yLXRpdGxlIC55ZWFyLXJhbmdlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgICAgIC5qYi1jYWxlbmRhci13ZWItY29tcG9uZW50IC5uYXZpZ2F0b3Itc2VjdGlvbiAubmF2aWdhdG9yLXRpdGxlIC55ZWFyLXJhbmdlLi0tc2hvdyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTsgfVxuICAuamItY2FsZW5kYXItd2ViLWNvbXBvbmVudCAuY2FsZW5kYXItc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgLmpiLWNhbGVuZGFyLXdlYi1jb21wb25lbnQgLmNhbGVuZGFyLXNlY3Rpb24gLmRheS1zZWxlY3Rpb24tc2VjdGlvbiB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgICAuamItY2FsZW5kYXItd2ViLWNvbXBvbmVudCAuY2FsZW5kYXItc2VjdGlvbiAuZGF5LXNlbGVjdGlvbi1zZWN0aW9uLi0tc2hvdyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgICAuamItY2FsZW5kYXItd2ViLWNvbXBvbmVudCAuY2FsZW5kYXItc2VjdGlvbiAuZGF5LXNlbGVjdGlvbi1zZWN0aW9uIC53ZWVrLWRheS13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDsgfVxuICAgICAgICAuamItY2FsZW5kYXItd2ViLWNvbXBvbmVudCAuY2FsZW5kYXItc2VjdGlvbiAuZGF5LXNlbGVjdGlvbi1zZWN0aW9uIC53ZWVrLWRheS13cmFwcGVyIC53ZWVrLWRheSB7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcIndnaHRcIiA4MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxZW07IH1cbiAgICAgIC5qYi1jYWxlbmRhci13ZWItY29tcG9uZW50IC5jYWxlbmRhci1zZWN0aW9uIC5kYXktc2VsZWN0aW9uLXNlY3Rpb24gLm1vbnRoLWRheS13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XG4gICAgICAgIGdhcDogOHB4IDRweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgICAuamItY2FsZW5kYXItd2ViLWNvbXBvbmVudCAuY2FsZW5kYXItc2VjdGlvbiAuZGF5LXNlbGVjdGlvbi1zZWN0aW9uIC5tb250aC1kYXktd3JhcHBlciAuZGF5LXdyYXBwZXIge1xuICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOiAjODY4OTkwO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gICAgICAgICAgLmpiLWNhbGVuZGFyLXdlYi1jb21wb25lbnQgLmNhbGVuZGFyLXNlY3Rpb24gLmRheS1zZWxlY3Rpb24tc2VjdGlvbiAubW9udGgtZGF5LXdyYXBwZXIgLmRheS13cmFwcGVyLi0tZGlzYWJsZSB7XG4gICAgICAgICAgICBjb2xvcjogI2RkZDtcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cbiAgICAgICAgICAuamItY2FsZW5kYXItd2ViLWNvbXBvbmVudCAuY2FsZW5kYXItc2VjdGlvbiAuZGF5LXNlbGVjdGlvbi1zZWN0aW9uIC5tb250aC1kYXktd3JhcHBlciAuZGF5LXdyYXBwZXIuLS10b2RheSB7XG4gICAgICAgICAgICBjb2xvcjogIzI4QkQ0ODsgfVxuICAgICAgICAgICAgLmpiLWNhbGVuZGFyLXdlYi1jb21wb25lbnQgLmNhbGVuZGFyLXNlY3Rpb24gLmRheS1zZWxlY3Rpb24tc2VjdGlvbiAubW9udGgtZGF5LXdyYXBwZXIgLmRheS13cmFwcGVyLi0tdG9kYXkgLnN0YXR1cy1wb2ludCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgICAgICAgLmpiLWNhbGVuZGFyLXdlYi1jb21wb25lbnQgLmNhbGVuZGFyLXNlY3Rpb24gLmRheS1zZWxlY3Rpb24tc2VjdGlvbiAubW9udGgtZGF5LXdyYXBwZXIgLmRheS13cmFwcGVyLi0tc2VsZWN0ZWQge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyODMyOyB9XG4gICAgICAgICAgICAuamItY2FsZW5kYXItd2ViLWNvbXBvbmVudCAuY2FsZW5kYXItc2VjdGlvbiAuZGF5LXNlbGVjdGlvbi1zZWN0aW9uIC5tb250aC1kYXktd3JhcHBlciAuZGF5LXdyYXBwZXIuLS1zZWxlY3RlZDpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTI4MzI7IH1cbiAgICAgICAgICAuamItY2FsZW5kYXItd2ViLWNvbXBvbmVudCAuY2FsZW5kYXItc2VjdGlvbiAuZGF5LXNlbGVjdGlvbi1zZWN0aW9uIC5tb250aC1kYXktd3JhcHBlciAuZGF5LXdyYXBwZXI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmOTsgfVxuICAgICAgICAgIC5qYi1jYWxlbmRhci13ZWItY29tcG9uZW50IC5jYWxlbmRhci1zZWN0aW9uIC5kYXktc2VsZWN0aW9uLXNlY3Rpb24gLm1vbnRoLWRheS13cmFwcGVyIC5kYXktd3JhcHBlciAuZGF5LW51bWJlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gICAgICAgICAgLmpiLWNhbGVuZGFyLXdlYi1jb21wb25lbnQgLmNhbGVuZGFyLXNlY3Rpb24gLmRheS1zZWxlY3Rpb24tc2VjdGlvbiAubW9udGgtZGF5LXdyYXBwZXIgLmRheS13cmFwcGVyIC5zdGF0dXMtcG9pbnQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhCRDQ4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgYm90dG9tOiAtNnB4O1xuICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSA1cHgpO1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAgIC5qYi1jYWxlbmRhci13ZWItY29tcG9uZW50IC5jYWxlbmRhci1zZWN0aW9uIC5tb250aC1zZWxlY3Rpb24tc2VjdGlvbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xuICAgICAgZ2FwOiAxMnB4IDhweDsgfVxuICAgICAgLmpiLWNhbGVuZGFyLXdlYi1jb21wb25lbnQgLmNhbGVuZGFyLXNlY3Rpb24gLm1vbnRoLXNlbGVjdGlvbi1zZWN0aW9uLi0tc2hvdyB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7IH1cbiAgICAgIC5qYi1jYWxlbmRhci13ZWItY29tcG9uZW50IC5jYWxlbmRhci1zZWN0aW9uIC5tb250aC1zZWxlY3Rpb24tc2VjdGlvbiAubW9udGgtd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDsgfVxuICAgICAgICAuamItY2FsZW5kYXItd2ViLWNvbXBvbmVudCAuY2FsZW5kYXItc2VjdGlvbiAubW9udGgtc2VsZWN0aW9uLXNlY3Rpb24gLm1vbnRoLXdyYXBwZXI6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY4Zjk7IH1cbiAgICAgICAgLmpiLWNhbGVuZGFyLXdlYi1jb21wb25lbnQgLmNhbGVuZGFyLXNlY3Rpb24gLm1vbnRoLXNlbGVjdGlvbi1zZWN0aW9uIC5tb250aC13cmFwcGVyIC5tb250aC1uYW1lIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgLmpiLWNhbGVuZGFyLXdlYi1jb21wb25lbnQgLmNhbGVuZGFyLXNlY3Rpb24gLnllYXItc2VsZWN0aW9uLXNlY3Rpb24ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcbiAgICAgIGdhcDogMTJweCA4cHg7IH1cbiAgICAgIC5qYi1jYWxlbmRhci13ZWItY29tcG9uZW50IC5jYWxlbmRhci1zZWN0aW9uIC55ZWFyLXNlbGVjdGlvbi1zZWN0aW9uLi0tc2hvdyB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7IH1cbiAgICAgIC5qYi1jYWxlbmRhci13ZWItY29tcG9uZW50IC5jYWxlbmRhci1zZWN0aW9uIC55ZWFyLXNlbGVjdGlvbi1zZWN0aW9uIC55ZWFyLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7IH1cbiAgICAgICAgLmpiLWNhbGVuZGFyLXdlYi1jb21wb25lbnQgLmNhbGVuZGFyLXNlY3Rpb24gLnllYXItc2VsZWN0aW9uLXNlY3Rpb24gLnllYXItd3JhcHBlcjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmOTsgfVxuICAgICAgICAuamItY2FsZW5kYXItd2ViLWNvbXBvbmVudCAuY2FsZW5kYXItc2VjdGlvbiAueWVhci1zZWxlY3Rpb24tc2VjdGlvbiAueWVhci13cmFwcGVyIC55ZWFyLW51bWJlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuIl19 */";

if (typeof dayjs.calendar !== "function") {
  dayjs.extend(jalaliday);
}

var JalaliMonthList = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
var GregorianMonthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var InputTypes = {
  jalali: 'JALALI',
  gregorian: 'GREGORIAN'
};

var JBCalendarWebComponent = /*#__PURE__*/function (_HTMLElement) {
  inherits(JBCalendarWebComponent, _HTMLElement);

  var _super = _createSuper(JBCalendarWebComponent);

  createClass(JBCalendarWebComponent, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "activeSection",
    get: function get() {
      // determine we want to see day picker or month picker ,...
      return this._activeSection;
    },
    set: function set(value) {
      if (value == this._activeSection) {
        return;
      }

      if (this._activeSection) {
        //if we have active section before
        this._selectionSections[this._activeSection.toLocaleLowerCase()].classList.remove('--show');
      }

      if (value == "DAY") {
        this._selectionSections.day.classList.add('--show');

        this._shadowRoot.querySelector('.navigator-title .month').classList.add('--show');

        this._shadowRoot.querySelector('.navigator-title .year').classList.add('--show');

        this._shadowRoot.querySelector('.navigator-title .year-range').classList.remove('--show');
      }

      if (value == "MONTH") {
        this._selectionSections.month.classList.add('--show');

        this._shadowRoot.querySelector('.navigator-title .month').classList.remove('--show');

        this._shadowRoot.querySelector('.navigator-title .year').classList.add('--show');

        this._shadowRoot.querySelector('.navigator-title .year-range').classList.remove('--show');
      }

      if (value == "YEAR") {
        this._selectionSections.year.classList.add('--show');

        this._shadowRoot.querySelector('.navigator-title .month').classList.remove('--show');

        this._shadowRoot.querySelector('.navigator-title .year').classList.remove('--show');

        this._shadowRoot.querySelector('.navigator-title .year-range').classList.add('--show');
      }

      this._activeSection = value;
    }
  }, {
    key: "inputType",
    get: function get() {
      return this._inputType;
    },
    set: function set(value) {
      this._inputType = value;
      this.onInputTypeChange();
    }
  }]);

  function JBCalendarWebComponent() {
    var _this;

    classCallCheck(this, JBCalendarWebComponent);

    _this = _super.call(this);

    _this.initWebComponent();

    _this.initProps();

    _this.initCalendar();

    return _this;
  }

  createClass(JBCalendarWebComponent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      // standard web component event that called when all of dom is binded
      this.fillDayOfWeek();
      this.setCalendarData();
      this.callOnLoadEvent();
    }
  }, {
    key: "fillDayOfWeek",
    value: function fillDayOfWeek() {
      //fill day of week bas on input type
      var gregorianDayOfWeekArray = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
      var jalaliDayOfWeekArray = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'چ'];
      var dayOfWeekArray = this.inputType == InputTypes.jalali ? jalaliDayOfWeekArray : gregorianDayOfWeekArray;
      this._dayOfWeekWrapper.innerHTML = '';

      for (var i = 0; i <= 6; i++) {
        //day of week dom
        var dowDom = document.createElement('div');
        dowDom.classList.add('week-day');
        dowDom.innerHTML = dayOfWeekArray[i];

        this._dayOfWeekWrapper.appendChild(dowDom);
      }
    }
  }, {
    key: "setCalendarData",
    value: function setCalendarData() {
      // we set default value for selected year and month here becuase we want user config value and min max date ,... in on init so we update our dom and calendar base on them
      var today = dayjs();
      var jalaliToday = today.calendar('jalali');

      if (this.inputType == InputTypes.jalali) {
        this.data.selectedYear = this.value.year || jalaliToday.year();
        this.data.selectedMonth = this.value.month || jalaliToday.month() + 1;
        this.data.yearSelectionRange = [this.data.selectedYear - 4, this.data.selectedYear + 7];
      } else {
        this.data.selectedYear = this.value.year || today.year();
        this.data.selectedMonth = this.value.month || today.month() + 1;
        this.data.yearSelectionRange = [this.data.selectedYear - 4, this.data.selectedYear + 7];
      }
    }
  }, {
    key: "callOnLoadEvent",
    value: function callOnLoadEvent() {
      var event = new CustomEvent('load', {
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "callOnInitEvent",
    value: function callOnInitEvent() {
      var event = new CustomEvent('init', {
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "initWebComponent",
    value: function initWebComponent() {
      this._shadowRoot = this.attachShadow({
        mode: 'open'
      });
      this._html = "<style>".concat(css_248z, "</style>") + '\n' + HTML;
      this._element = document.createElement('template');
      this._element.innerHTML = this._html;

      this._shadowRoot.appendChild(this._element.content.cloneNode(true));

      this._selectionSections = {
        day: this._shadowRoot.querySelector('.day-selection-section'),
        month: this._shadowRoot.querySelector('.month-selection-section'),
        year: this._shadowRoot.querySelector('.year-selection-section')
      };
      this._monthDayWrapper = this._selectionSections.day.querySelector('.month-day-wrapper');
      this._dayOfWeekWrapper = this.shadowRoot.querySelector('.week-day-wrapper');
      this.registerEventHandlers();
    }
  }, {
    key: "registerEventHandlers",
    value: function registerEventHandlers() {
      this._shadowRoot.querySelector('.next-btn').addEventListener('click', this.onNextButtonClicked.bind(this));

      this._shadowRoot.querySelector('.prev-btn').addEventListener('click', this.onPrevButtonClicked.bind(this));

      this._shadowRoot.querySelector('.navigator-title').addEventListener('click', this.onNavigatorTitleClicked.bind(this));
    }
  }, {
    key: "createDataHandler",
    value: function createDataHandler() {
      var _this2 = this;

      var onYearChanged = function onYearChanged(newYear, prevYear) {
        _this2._shadowRoot.querySelector('.navigator-title .year').innerHTML = newYear;
      };

      var onMonthChanged = function onMonthChanged(newMonth, prevMonth) {
        var monthName = _this2.inputType == InputTypes.jalali ? JalaliMonthList[newMonth - 1] : GregorianMonthList[newMonth - 1];
        _this2._shadowRoot.querySelector('.navigator-title .month').innerHTML = monthName;

        _this2.fillMonthDays();
      };

      var onYearSelectionRangeChanged = function onYearSelectionRangeChanged(newRange) {
        _this2._shadowRoot.querySelector('.navigator-title .year-range').innerHTML = "".concat(newRange[0], " - ").concat(newRange[1]);

        _this2.fillYearList();
      };

      var dataHandler = {
        set: function set(obj, prop, value) {
          if (prop == "selectedYear") {
            onYearChanged(value, obj.selectedYear);
            obj[prop] = value;
          }

          if (prop == "selectedMonth") {
            obj[prop] = value;
            onMonthChanged(value, obj.selectedMonth);
          }

          if (prop == "yearSelectionRange") {
            obj[prop] = value;
            onYearSelectionRangeChanged(value);
          }

          return true;
        }
      };
      return dataHandler;
    }
  }, {
    key: "createDateRestrictionHandler",
    value: function createDateRestrictionHandler() {
      var _this3 = this;

      var restrictionHandler = {
        set: function set(obj, prop, value) {
          obj[prop] = value;

          switch (prop) {
            case 'min':
              if (_this3.activeSection == "DAY") {
                _this3.fillMonthDays();
              }

              break;

            case 'max':
              if (_this3.activeSection == "DAY") {
                _this3.fillMonthDays();
              }

              break;
          }

          return true;
        }
      };
      return restrictionHandler;
    }
  }, {
    key: "initProps",
    value: function initProps() {
      //default input type of this component is jalali
      this._inputType = InputTypes.jalali;
      this._activeSection = null;
      this.dateRestrictions = new Proxy({
        min: null,
        max: null
      }, this.createDateRestrictionHandler());
      this.data = new Proxy({
        selectedYear: 0,
        selectedMonth: 0,
        yearSelectionRange: [0, 0]
      }, this.createDataHandler());
      this._value = {
        year: null,
        month: null,
        day: null
      };
      this.callOnInitEvent();
    }
  }, {
    key: "selectToday",
    value: function selectToday() {
      var today = dayjs();
      var jalaliToday = today.calendar('jalali');

      if (this.inputType == InputTypes.jalali) {
        this.select(jalaliToday.year(), jalaliToday.month() + 1, jalaliToday.date());
      } else {
        this.select(today.year(), today.month() + 1, today.date());
      }
    }
  }, {
    key: "select",
    value: function select(year, month, day) {
      this._value.year = year;
      this._value.month = month;
      this._value.day = day;
      this.data.selectedYear = year;
      this.data.selectedMonth = month;

      var prevSelectedDayDom = this._shadowRoot.querySelector(".--selected");

      if (prevSelectedDayDom) {
        prevSelectedDayDom.classList.remove('--selected');
      }

      if (this.data.selectedYear == year && this.data.selectedMonth == month) {
        var dayDom = this._shadowRoot.querySelector(".day-wrapper[day-number=\"".concat(day, "\"]"));

        dayDom.classList.add('--selected');
      }
    }
  }, {
    key: "initCalendar",
    value: function initCalendar() {
      if (!this.activeSection) {
        this.activeSection = "DAY";
      }

      this.fillMonthList();
    }
  }, {
    key: "mapgaregorianDayofWeekToJalali",
    value: function mapgaregorianDayofWeekToJalali(dayNumber) {
      // for example sunday is 0 so 2(yekshanbe) will return
      var mapper = [2, 3, 4, 5, 6, 7, 1];
      return mapper[dayNumber];
    }
  }, {
    key: "fillYearList",
    value: function fillYearList() {
      this._selectionSections.year.innerHTML = "";

      for (var i = this.data.yearSelectionRange[0]; i <= this.data.yearSelectionRange[1]; i++) {
        var yearDom = this.createYearDom(i);

        this._selectionSections.year.appendChild(yearDom);
      }
    }
  }, {
    key: "createYearDom",
    value: function createYearDom(year) {
      var _this4 = this;

      var monthDom = document.createElement('div');
      monthDom.classList.add('year-wrapper');
      var monthTextDom = document.createElement('div');
      monthTextDom.classList.add('year-number');
      monthTextDom.innerHTML = year;
      monthDom.appendChild(monthTextDom);
      monthDom.addEventListener('click', function () {
        _this4.data.selectedYear = year;
        _this4.activeSection = 'MONTH';
      });
      return monthDom;
    }
  }, {
    key: "fillMonthList",
    value: function fillMonthList() {
      this._selectionSections.month.innerHTML = '';

      for (var i = 1; i < 13; i++) {
        var monthDom = this.createMonthDom(i);

        this._selectionSections.month.appendChild(monthDom);
      }
    }
  }, {
    key: "createMonthDom",
    value: function createMonthDom(monthIndex) {
      var _this5 = this;

      var monthDom = document.createElement('div');
      monthDom.classList.add('month-wrapper');
      var monthTextDom = document.createElement('div');
      monthTextDom.classList.add('month-name');
      var monthName = this.inputType == InputTypes.jalali ? JalaliMonthList[monthIndex - 1] : GregorianMonthList[monthIndex - 1];
      monthTextDom.innerHTML = monthName;
      monthDom.appendChild(monthTextDom);
      monthDom.addEventListener('click', function () {
        _this5.data.selectedMonth = monthIndex;
        _this5.activeSection = 'DAY';
      });
      return monthDom;
    }
  }, {
    key: "fillMonthDays",
    value: function fillMonthDays() {
      var firstDayOfMonthdate = dayjs("".concat(this.data.selectedYear, "-").concat(this.data.selectedMonth, "-1"), {
        jalali: this.inputType == InputTypes.jalali
      });
      var jalaliFirstDayOfMonthdate = firstDayOfMonthdate.calendar('jalali');
      var firstDayInWeek = this.inputType == InputTypes.jalali ? this.mapgaregorianDayofWeekToJalali(firstDayOfMonthdate.day()) : firstDayOfMonthdate.day() + 1;
      var gregorianToday = dayjs();
      var jalaliToday = gregorianToday.calendar('jalali');
      var today = this.inputType == InputTypes.jalali ? jalaliToday : gregorianToday;
      this._monthDayWrapper.innerHTML = "";

      for (var i = 1; i < firstDayInWeek; i++) {
        var emptyDayDom = this.createEmptyDayDom();

        this._monthDayWrapper.appendChild(emptyDayDom);
      }

      var dayInMonth = this.inputType == InputTypes.jalali ? jalaliFirstDayOfMonthdate.daysInMonth() : firstDayOfMonthdate.daysInMonth();

      for (var _i = 1; _i <= dayInMonth; _i++) {
        var dayDate = dayjs("".concat(this.data.selectedYear, "-").concat(this.data.selectedMonth, "-").concat(_i), {
          jalali: this.inputType == InputTypes.jalali
        });
        var isToday = today.date() == _i && this.data.selectedMonth == today.month() + 1 && this.data.selectedYear == today.year();
        var isSelected = this.value.year == this.data.selectedYear && this.value.month == this.data.selectedMonth && this.value.day == _i;
        var isDisable = !this.checkIsDayDisable(dayDate).isAllValid;
        var dayDom = this.createDayDom(_i, this.data.selectedYear, this.data.selectedMonth, isToday, isSelected, isDisable);

        this._monthDayWrapper.appendChild(dayDom);
      }
    }
  }, {
    key: "checkIsDayDisable",
    value: function checkIsDayDisable(dayDate) {
      var result = {
        min: true,
        max: true,

        get isAllValid() {
          return this.min && this.max;
        }

      };

      if (this.dateRestrictions.min) {
        result.min = dayDate.isAfter(this.dateRestrictions.min) || dayDate.isSame(this.dateRestrictions.min);
      }

      if (this.dateRestrictions.max) {
        result.max = dayDate.isBefore(this.dateRestrictions.max) || dayDate.isSame(this.dateRestrictions.max);
      }

      return result;
    }
  }, {
    key: "createEmptyDayDom",
    value: function createEmptyDayDom() {
      var dayDom = document.createElement('div');
      dayDom.classList.add('empty-day');
      return dayDom;
    }
  }, {
    key: "createDayDom",
    value: function createDayDom(dayNumber, year, month, isToday, isSelected, isDisable) {
      var _this6 = this;

      //create dom
      var dayDom = document.createElement('div');
      dayDom.classList.add('day-wrapper');
      dayDom.setAttribute('day-number', dayNumber);

      if (isToday) {
        dayDom.classList.add('--today');
      }

      if (isSelected) {
        dayDom.classList.add('--selected');
      }

      var dayNumberDom = document.createElement('div');
      dayNumberDom.classList.add('day-number');
      dayNumberDom.innerHTML = dayNumber;
      var statusPoint = document.createElement('div');
      statusPoint.classList.add('status-point');
      dayDom.appendChild(statusPoint);
      dayDom.appendChild(dayNumberDom);

      if (!isDisable) {
        // add event listeners
        dayDom.addEventListener('click', function () {
          _this6.onDayClicked(year, month, dayNumber);
        });
      } else {
        dayDom.classList.add('--disable');
      }

      return dayDom;
    }
  }, {
    key: "onDayClicked",
    value: function onDayClicked(year, month, dayNumber) {
      this.select(year, month, dayNumber);
      var event = new CustomEvent('select');
      this.dispatchEvent(event);
    }
  }, {
    key: "onNextButtonClicked",
    value: function onNextButtonClicked() {
      if (this.activeSection == "DAY") {
        var selectedMonth = this.data.selectedMonth;

        if (selectedMonth < 12) {
          this.data.selectedMonth = selectedMonth + 1;
        } else {
          this.data.selectedYear = this.data.selectedYear + 1;
          this.data.selectedMonth = 1;
        }
      }

      if (this.activeSection == "MONTH") {
        this.data.selectedYear = this.data.selectedYear + 1;
      }

      if (this.activeSection == "YEAR") {
        var minYear = this.data.yearSelectionRange[0] + 12;
        var maxYear = this.data.yearSelectionRange[1] + 12;
        this.data.yearSelectionRange = [minYear, maxYear];
      }
    }
  }, {
    key: "onPrevButtonClicked",
    value: function onPrevButtonClicked() {
      if (this.activeSection == "DAY") {
        var selectedMonth = this.data.selectedMonth;

        if (selectedMonth > 1) {
          this.data.selectedMonth = selectedMonth - 1;
        } else {
          this.data.selectedYear = this.data.selectedYear - 1;
          this.data.selectedMonth = 12;
        }
      }

      if (this.activeSection == "MONTH") {
        this.data.selectedYear = this.data.selectedYear - 1;
      }

      if (this.activeSection == "YEAR") {
        var minYear = this.data.yearSelectionRange[0] - 12;
        var maxYear = this.data.yearSelectionRange[1] - 12;

        if (minYear > 0) {
          this.data.yearSelectionRange = [minYear, maxYear];
        }
      }
    }
  }, {
    key: "onNavigatorTitleClicked",
    value: function onNavigatorTitleClicked() {
      if (this.activeSection == "DAY") {
        this.activeSection = "MONTH";
      } else if (this.activeSection == "MONTH") {
        this.activeSection = "YEAR";
      }
    }
  }, {
    key: "onInputTypeChange",
    value: function onInputTypeChange() {
      // when date input type change this function get called
      this.setCalendarData();
      this.fillDayOfWeek();
      this.fillMonthList();
    }
  }]);

  return JBCalendarWebComponent;
}( /*#__PURE__*/wrapNativeSuper(HTMLElement));

var myElementNotExists = !customElements.get('jb-calendar');

if (myElementNotExists) {
  window.customElements.define('jb-calendar', JBCalendarWebComponent);
}

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
      _useState2 = slicedToArray(_useState, 2),
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

  function onSelect(e) {
    if (props.onSelect && e instanceof FocusEvent) {
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

export default JBCalendar;
//# sourceMappingURL=JBCalendar.js.map
