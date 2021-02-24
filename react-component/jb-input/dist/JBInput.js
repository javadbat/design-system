import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
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

var HTML = "<div class=\"jb-input-web-component\">\r\n    <label class=\"--hide\"><span class=\"label-value\"></span><span>:</span></label>\r\n    <div class=\"input-box\">\r\n        <input class=\"input-box\">\r\n        <div class=\"password-trigger\">\r\n            <svg viewBox=\"0 0 120 120\">\r\n                <path class=\"eye-line\" stroke-linecap=\"round\"></path>\r\n                <circle cx=\"60\" cy=\"60\" r=\"20\"></circle>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n    <div class=\"message-box\"></div>\r\n</div>";
var css_248z = ".jb-input-web-component {\n  width: 100%;\n  margin: var(--jb-input-margin, 12px 0);\n  direction: rtl; }\n  .jb-input-web-component label {\n    width: 100%;\n    margin: 4px 0px;\n    display: block;\n    font-size: var(--jb-input-label-font-size, 0.8em);\n    color: #1f1735; }\n    .jb-input-web-component label.--hide {\n      display: none; }\n  .jb-input-web-component .input-box {\n    width: 100%;\n    box-sizing: border-box;\n    height: var(--jb-input-height, 40px);\n    border: solid 1px var(--jb-input-border-color, #f7f6f6);\n    background-color: var(--jb-input-bgcolor, #f7f6f6);\n    border-bottom: solid var(--jb-input-border-botton-width, 3px) var(--jb-input-border-color, #f7f6f6);\n    border-radius: var(--jb-input-border-radius, 16px);\n    margin: 4px 0px;\n    display: block;\n    transition: ease 0.3s all;\n    overflow: hidden;\n    display: flex;\n    justify-content: space-between; }\n    .jb-input-web-component .input-box:focus-within {\n      border-color: var(--jb-input-border-color-focus, #1e2832); }\n    .jb-input-web-component .input-box.type-password input {\n      width: calc(100% - 36px); }\n    .jb-input-web-component .input-box.type-password .password-trigger {\n      display: block;\n      height: 28px;\n      width: 28px;\n      margin: 4px 0 4px 8px;\n      cursor: pointer; }\n      .jb-input-web-component .input-box.type-password .password-trigger svg {\n        width: 100%;\n        height: 100%;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        transition: 0.2s; }\n        .jb-input-web-component .input-box.type-password .password-trigger svg.password-visible .eye-line {\n          stroke: #00b600;\n          d: path(\"M 10 60 C 30 20 100 20 110 60\"); }\n        .jb-input-web-component .input-box.type-password .password-trigger svg.password-visible circle {\n          opacity: 1;\n          transition: 0.2s 0.2s;\n          transform: translateX(8px); }\n        .jb-input-web-component .input-box.type-password .password-trigger svg .eye-line {\n          stroke-width: 14px;\n          stroke: #bbb;\n          fill: none;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          transition: 0.3s;\n          d: path(\"M 0 60 C 40 100 80 100 120 60\"); }\n        .jb-input-web-component .input-box.type-password .password-trigger svg circle {\n          fill: #00b600;\n          opacity: 0;\n          transition: 0.3s 0s; }\n    .jb-input-web-component .input-box .password-trigger {\n      display: none; }\n    .jb-input-web-component .input-box input {\n      border: none;\n      width: 100%;\n      box-sizing: border-box;\n      height: 100%;\n      background-color: transparent;\n      padding: var(--jb-input-input-padding, 2px 12px 0 12px);\n      display: block;\n      font-family: inherit;\n      font-size: var(--jb-input-value-font-size, 1.1em);\n      color: var(--jb-input-value-color, #1f1735);\n      margin: 0;\n      border-radius: 0; }\n      .jb-input-web-component .input-box input:focus {\n        outline: none; }\n      .jb-input-web-component .input-box input::placeholder {\n        color: var(--jb-input-placeholder-color, initial);\n        font-size: var(--jb-input-placeholder-font-size, 1.1em); }\n  .jb-input-web-component .message-box {\n    font-size: var(--jb-input-message-font-size, 0.7em);\n    padding: 2px 8px;\n    color: #929292;\n    display: var(--jb-input-message-box-display, block); }\n    .jb-input-web-component .message-box:empty {\n      padding: 0; }\n    .jb-input-web-component .message-box.error {\n      color: var(--jb-input-message-error-color, red); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkpCSW5wdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsY0FBYyxFQUFFO0VBQ2hCO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsaURBQWlEO0lBQ2pELGNBQWMsRUFBRTtJQUNoQjtNQUNFLGFBQWEsRUFBRTtFQUNuQjtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLHVEQUF1RDtJQUN2RCxrREFBa0Q7SUFDbEQsbUdBQW1HO0lBQ25HLGtEQUFrRDtJQUNsRCxlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QixFQUFFO0lBQ2hDO01BQ0UseURBQXlELEVBQUU7SUFDN0Q7TUFDRSx3QkFBd0IsRUFBRTtJQUM1QjtNQUNFLGNBQWM7TUFDZCxZQUFZO01BQ1osV0FBVztNQUNYLHFCQUFxQjtNQUNyQixlQUFlLEVBQUU7TUFDakI7UUFDRSxXQUFXO1FBQ1gsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsZ0JBQWdCLEVBQUU7UUFDbEI7VUFDRSxlQUFlO1VBQ2Ysd0NBQXdDLEVBQUU7UUFDNUM7VUFDRSxVQUFVO1VBQ1YscUJBQXFCO1VBQ3JCLDBCQUEwQixFQUFFO1FBQzlCO1VBQ0Usa0JBQWtCO1VBQ2xCLFlBQVk7VUFDWixVQUFVO1VBQ1YscUJBQXFCO1VBQ3JCLHNCQUFzQjtVQUN0QixnQkFBZ0I7VUFDaEIsd0NBQXdDLEVBQUU7UUFDNUM7VUFDRSxhQUFhO1VBQ2IsVUFBVTtVQUNWLG1CQUFtQixFQUFFO0lBQzNCO01BQ0UsYUFBYSxFQUFFO0lBQ2pCO01BQ0UsWUFBWTtNQUNaLFdBQVc7TUFDWCxzQkFBc0I7TUFDdEIsWUFBWTtNQUNaLDZCQUE2QjtNQUM3Qix1REFBdUQ7TUFDdkQsY0FBYztNQUNkLG9CQUFvQjtNQUNwQixpREFBaUQ7TUFDakQsMkNBQTJDO01BQzNDLFNBQVM7TUFDVCxnQkFBZ0IsRUFBRTtNQUNsQjtRQUNFLGFBQWEsRUFBRTtNQUNqQjtRQUNFLGlEQUFpRDtRQUNqRCx1REFBdUQsRUFBRTtFQUMvRDtJQUNFLG1EQUFtRDtJQUNuRCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1EQUFtRCxFQUFFO0lBQ3JEO01BQ0UsVUFBVSxFQUFFO0lBQ2Q7TUFDRSwrQ0FBK0MsRUFBRSIsImZpbGUiOiJKQklucHV0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuamItaW5wdXQtd2ViLWNvbXBvbmVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IHZhcigtLWpiLWlucHV0LW1hcmdpbiwgMTJweCAwKTtcbiAgZGlyZWN0aW9uOiBydGw7IH1cbiAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgbGFiZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogNHB4IDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IHZhcigtLWpiLWlucHV0LWxhYmVsLWZvbnQtc2l6ZSwgMC44ZW0pO1xuICAgIGNvbG9yOiAjMWYxNzM1OyB9XG4gICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgbGFiZWwuLS1oaWRlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLmlucHV0LWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IHZhcigtLWpiLWlucHV0LWhlaWdodCwgNDBweCk7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tamItaW5wdXQtYm9yZGVyLWNvbG9yLCAjZjdmNmY2KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1qYi1pbnB1dC1iZ2NvbG9yLCAjZjdmNmY2KTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCB2YXIoLS1qYi1pbnB1dC1ib3JkZXItYm90dG9uLXdpZHRoLCAzcHgpIHZhcigtLWpiLWlucHV0LWJvcmRlci1jb2xvciwgI2Y3ZjZmNik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tamItaW5wdXQtYm9yZGVyLXJhZGl1cywgMTZweCk7XG4gICAgbWFyZ2luOiA0cHggMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IGVhc2UgMC4zcyBhbGw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3g6Zm9jdXMtd2l0aGluIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tamItaW5wdXQtYm9yZGVyLWNvbG9yLWZvY3VzLCAjMWUyODMyKTsgfVxuICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3gudHlwZS1wYXNzd29yZCBpbnB1dCB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzZweCk7IH1cbiAgICAuamItaW5wdXQtd2ViLWNvbXBvbmVudCAuaW5wdXQtYm94LnR5cGUtcGFzc3dvcmQgLnBhc3N3b3JkLXRyaWdnZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICB3aWR0aDogMjhweDtcbiAgICAgIG1hcmdpbjogNHB4IDAgNHB4IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLmlucHV0LWJveC50eXBlLXBhc3N3b3JkIC5wYXNzd29yZC10cmlnZ2VyIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4yczsgfVxuICAgICAgICAuamItaW5wdXQtd2ViLWNvbXBvbmVudCAuaW5wdXQtYm94LnR5cGUtcGFzc3dvcmQgLnBhc3N3b3JkLXRyaWdnZXIgc3ZnLnBhc3N3b3JkLXZpc2libGUgLmV5ZS1saW5lIHtcbiAgICAgICAgICBzdHJva2U6ICMwMGI2MDA7XG4gICAgICAgICAgZDogcGF0aChcIk0gMTAgNjAgQyAzMCAyMCAxMDAgMjAgMTEwIDYwXCIpOyB9XG4gICAgICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3gudHlwZS1wYXNzd29yZCAucGFzc3dvcmQtdHJpZ2dlciBzdmcucGFzc3dvcmQtdmlzaWJsZSBjaXJjbGUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyAwLjJzO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpOyB9XG4gICAgICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3gudHlwZS1wYXNzd29yZCAucGFzc3dvcmQtdHJpZ2dlciBzdmcgLmV5ZS1saW5lIHtcbiAgICAgICAgICBzdHJva2Utd2lkdGg6IDE0cHg7XG4gICAgICAgICAgc3Ryb2tlOiAjYmJiO1xuICAgICAgICAgIGZpbGw6IG5vbmU7XG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgICBkOiBwYXRoKFwiTSAwIDYwIEMgNDAgMTAwIDgwIDEwMCAxMjAgNjBcIik7IH1cbiAgICAgICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLmlucHV0LWJveC50eXBlLXBhc3N3b3JkIC5wYXNzd29yZC10cmlnZ2VyIHN2ZyBjaXJjbGUge1xuICAgICAgICAgIGZpbGw6ICMwMGI2MDA7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIDBzOyB9XG4gICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLmlucHV0LWJveCAucGFzc3dvcmQtdHJpZ2dlciB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLmlucHV0LWJveCBpbnB1dCB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIHBhZGRpbmc6IHZhcigtLWpiLWlucHV0LWlucHV0LXBhZGRpbmcsIDJweCAxMnB4IDAgMTJweCk7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1qYi1pbnB1dC12YWx1ZS1mb250LXNpemUsIDEuMWVtKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1qYi1pbnB1dC12YWx1ZS1jb2xvciwgIzFmMTczNSk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAwOyB9XG4gICAgICAuamItaW5wdXQtd2ViLWNvbXBvbmVudCAuaW5wdXQtYm94IGlucHV0OmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLmlucHV0LWJveCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tamItaW5wdXQtcGxhY2Vob2xkZXItY29sb3IsIGluaXRpYWwpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWpiLWlucHV0LXBsYWNlaG9sZGVyLWZvbnQtc2l6ZSwgMS4xZW0pOyB9XG4gIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5tZXNzYWdlLWJveCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1qYi1pbnB1dC1tZXNzYWdlLWZvbnQtc2l6ZSwgMC43ZW0pO1xuICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgY29sb3I6ICM5MjkyOTI7XG4gICAgZGlzcGxheTogdmFyKC0tamItaW5wdXQtbWVzc2FnZS1ib3gtZGlzcGxheSwgYmxvY2spOyB9XG4gICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLm1lc3NhZ2UtYm94OmVtcHR5IHtcbiAgICAgIHBhZGRpbmc6IDA7IH1cbiAgICAuamItaW5wdXQtd2ViLWNvbXBvbmVudCAubWVzc2FnZS1ib3guZXJyb3Ige1xuICAgICAgY29sb3I6IHZhcigtLWpiLWlucHV0LW1lc3NhZ2UtZXJyb3ItY29sb3IsIHJlZCk7IH1cbiJdfQ== */";

var JBInputWebComponent = /*#__PURE__*/function (_HTMLElement) {
  inherits(JBInputWebComponent, _HTMLElement);

  var _super = _createSuper(JBInputWebComponent);

  createClass(JBInputWebComponent, [{
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      this._value = value;

      if (this.internals_) {
        this.internals_.setFormValue(value);
      }

      this._shadowRoot.querySelector('.input-box input').value = value;
    }
  }, {
    key: "validationList",
    get: function get() {
      return this._validationList;
    },
    set: function set(value) {
      this._validationList = value;
      this.triggerInputValidation(false);
    }
  }], [{
    key: "formAssociated",
    get: function get() {
      return true;
    }
  }]);

  function JBInputWebComponent() {
    var _this;

    classCallCheck(this, JBInputWebComponent);

    _this = _super.call(this);

    if (typeof _this.attachInternals == "function") {
      //some browser dont support attachInternals
      _this.internals_ = _this.attachInternals();
    }

    _this.initWebComponent();

    return _this;
  }

  createClass(JBInputWebComponent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      // standard web component event that called when all of dom is binded
      this.callOnLoadEvent();
      this.initProp();
      this.callOnInitEvent();
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

      this.inputElement = this._shadowRoot.querySelector('.input-box input');
      this.registerEventListener();
    }
  }, {
    key: "registerEventListener",
    value: function registerEventListener() {
      this.inputElement.addEventListener('change', this.onInputChange.bind(this));
      this.inputElement.addEventListener('keypress', this.onInputKeyPress.bind(this));
      this.inputElement.addEventListener('keyup', this.onInputKeyup.bind(this));
      this.inputElement.addEventListener('keydown', this.onInputKeyDown.bind(this));
    }
  }, {
    key: "initProp",
    value: function initProp() {
      this._validationList = [];
      this.value = this.getAttribute('value') || '';
      this.validation = {
        isValid: null,
        message: null
      };
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      // do something when an attribute has changed
      this.onAttributeChange(name, newValue);
    }
  }, {
    key: "onAttributeChange",
    value: function onAttributeChange(name, value) {
      switch (name) {
        case 'label':
          this._shadowRoot.querySelector('label .label-value').innerHTML = value;

          if (value == null || value == undefined || value == "") {
            this._shadowRoot.querySelector('label').classList.add('--hide');
          } else {
            this._shadowRoot.querySelector('label').classList.remove('--hide');
          }

          break;

        case 'type':
          this.inputElement.setAttribute('type', value);

          if (value == "password") {
            this.initPassword();
          }

          break;

        case 'message':
          this._shadowRoot.querySelector('.message-box').innerHTML = value;
          break;

        case 'value':
          this.value = value;
          break;

        case 'name':
          this.inputElement.setAttribute('name', value);
          break;

        case 'autocomplete':
          this.inputElement.setAttribute('autocomplete', value);
          break;

        case 'placeholder':
          this.inputElement.placeholder = value;
          break;
      }
    }
  }, {
    key: "initPassword",
    value: function initPassword() {
      this._shadowRoot.querySelector('.input-box').classList.add('type-password');

      this.isPasswordvisible = false;

      this._shadowRoot.querySelector('.password-trigger').addEventListener('click', this.onPasswordTriggerClicked.bind(this));
    }
  }, {
    key: "onPasswordTriggerClicked",
    value: function onPasswordTriggerClicked() {
      this.isPasswordvisible = !this.isPasswordvisible;

      var textField = this._shadowRoot.querySelector('.input-box input');

      if (this.isPasswordvisible) {
        this._shadowRoot.querySelector('.password-trigger svg').classList.add('password-visible');

        textField.setAttribute('type', 'text');
      } else {
        this._shadowRoot.querySelector('.password-trigger svg').classList.remove('password-visible');

        textField.setAttribute('type', 'password');
      }
    }
  }, {
    key: "onInputKeyDown",
    value: function onInputKeyDown(e) {
      var keyDownnInitObj = {
        key: e.key,
        keyCode: e.keyCode,
        code: e.code,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        charCode: e.charCode,
        which: e.which
      };
      var event = new KeyboardEvent("keydown", keyDownnInitObj);
      this.dispatchEvent(event);
    }
  }, {
    key: "onInputKeyPress",
    value: function onInputKeyPress(e) {
      //TODO: raise keypress event
      var event = new CustomEvent('keypress');
      this.dispatchEvent(event);
    }
  }, {
    key: "onInputKeyup",
    value: function onInputKeyup(e) {
      var inputText = e.target.value; //here is the rare  time we update _value directly becuase we want trigger event that may read value directly from dom

      this._value = inputText;
      this.triggerInputValidation(false);
      var keyUpInitObj = {
        key: e.key,
        keyCode: e.keyCode,
        code: e.code,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        charCode: e.charCode,
        which: e.which
      };
      var event = new KeyboardEvent('keyup', keyUpInitObj);
      this.dispatchEvent(event);

      if (e.keyCode == 13) {
        this.onInputEnter();
      }
    }
  }, {
    key: "onInputEnter",
    value: function onInputEnter() {
      var event = new CustomEvent('enter');
      this.dispatchEvent(event);
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(e) {
      var inputText = e.target.value;
      this.triggerInputValidation(true); //here is the rare  time we update _value directly becuase we want trigger event that may read value directly from dom

      this._value = inputText;
      var validationObject = this.checkInputValidation(inputText);
      var event = new CustomEvent('change', {
        detail: {
          isValid: validationObject.isAllValid,
          validationObject: validationObject
        }
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "triggerInputValidation",
    value: function triggerInputValidation() {
      var showError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      // this method is for use out of component  for example if user click on submit button and developer want to check if all fields are valid
      //takeAction determine if we want to show user error in web component difualtManner or developer will handle it by himself
      var inputText = this._shadowRoot.querySelector('.input-box input').value;

      var validationResult = this.checkInputValidation(inputText);
      this.validation = {
        isValid: validationResult.isAllValid,
        message: null
      };

      if (!validationResult.isAllValid) {
        var firstFault = validationResult.validationList.find(function (x) {
          return !x.isValid;
        });
        this.validation.message = firstFault.message;

        if (showError == true) {
          this.showValidationError(firstFault.message);
        }
      } else {
        this.clearValidationError();
      }

      return validationResult;
    }
  }, {
    key: "checkInputValidation",
    value: function checkInputValidation(value) {
      var _this2 = this;

      var validationResult = {
        validationList: [],
        isAllValid: true
      };
      this.validationList.forEach(function (validation) {
        var res = _this2.checkValidation(value, validation);

        validationResult.validationList.push(res);

        if (!res.isValid) {
          validationResult.isAllValid = false;
        }
      });
      return validationResult;
    }
  }, {
    key: "checkValidation",
    value: function checkValidation(text, validation) {
      var testRes;

      if (validation.validator instanceof RegExp) {
        testRes = validation.validator.test(text);
        validation.validator.lastIndex = 0;
      }

      if (typeof validation.validator == "function") {
        testRes = validation.validator(text);
      }

      if (!testRes) {
        return {
          isValid: false,
          message: validation.message,
          validation: validation
        };
      }

      return {
        isValid: true,
        message: '',
        validation: validation
      };
    }
  }, {
    key: "showValidationError",
    value: function showValidationError(error) {
      this._shadowRoot.querySelector('.message-box').innerHTML = error;

      this._shadowRoot.querySelector('.message-box').classList.add('error');
    }
  }, {
    key: "clearValidationError",
    value: function clearValidationError() {
      var text = this.getAttribute('message') || '';
      this._shadowRoot.querySelector('.message-box').innerHTML = text;

      this._shadowRoot.querySelector('.message-box').classList.remove('error');
    }
    /**
     * @public
     */

  }, {
    key: "focus",
    value: function focus() {
      //public method
      this.inputElement.focus();
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['label', 'type', 'message', 'value', 'name', 'autocomplete', 'placeholder'];
    }
  }]);

  return JBInputWebComponent;
}( /*#__PURE__*/wrapNativeSuper(HTMLElement));

var myElementNotExists = !customElements.get('jb-input');

if (myElementNotExists) {
  window.customElements.define('jb-input', JBInputWebComponent);
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

var JBInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
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

  useEffect(function () {
    var value = props.value;

    if (props.value == null || props.value === undefined) {
      value = '';
    }

    element.current.value = value;
  }, [props.value]);
  useEffect(function () {
    element.current.setAttribute('type', props.type);
  }, [props.type]);
  useEffect(function () {
    element.current.validationList = props.validationList || [];
  }, [props.validationList]);
  useEffect(function () {
    element.current.setAttribute('direction', props.direction);
  }, [props.direction]);
  useEvent(element.current, 'change', onChange);
  useEvent(element.current, 'keydown', onKeydown);
  useEvent(element.current, 'keyup', onKeyup);
  useEvent(element.current, 'focus', onFocus);
  useEvent(element.current, 'blur', onBlur);
  useEvent(element.current, 'enter', onEnter);
  return /*#__PURE__*/React.createElement("jb-input", {
    placeholder: props.placeholder,
    ref: element,
    "class": props.className,
    label: props.label,
    message: props.message
  });
});
JBInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onEnter: PropTypes.func,
  className: PropTypes.string,
  validationList: PropTypes.array,
  placeholder: PropTypes.string,
  direction: PropTypes.string
};

export default JBInput;
//# sourceMappingURL=JBInput.js.map
