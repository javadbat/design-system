import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';

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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _classPrivateFieldBase(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }

  return receiver;
}

var classPrivateFieldLooseBase = _classPrivateFieldBase;

var id = 0;

function _classPrivateFieldKey(name) {
  return "__private_" + id++ + "_" + name;
}

var classPrivateFieldLooseKey = _classPrivateFieldKey;

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

function createCommonjsModule$1(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function require(path, base) {
      return commonjsRequire$1(path, base === undefined || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}

function commonjsRequire$1() {
  throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var reactIs_development = createCommonjsModule$1(function (module, exports) {
  {
    (function () {
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof_1(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }

      function typeOf(object) {
        if (_typeof_1(object) === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode


      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return _typeof_1(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});
var reactIs = createCommonjsModule$1(function (module) {
  {
    module.exports = reactIs_development;
  }
});
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function printWarning() {};

{
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */

function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof_1(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof_1(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;
var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning$1 = function printWarning$1() {};

{
  printWarning$1 = function printWarning$1(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning$1('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      {
        if (arguments.length > 1) {
          printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning$1('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = objectAssign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof_1(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof_1(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var propTypes = createCommonjsModule$1(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  {
    var ReactIs = reactIs; // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod

    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  }
});
var HTML = "<div class=\"jb-input-web-component\">\r\n    <label class=\"--hide\"><span class=\"label-value\"></span></label>\r\n    <div class=\"input-box\">\r\n        <div class=\"jb-input-start-section-wrapper\">\r\n            <slot name=\"start-section\"></slot>\r\n        </div>\r\n        <input>\r\n        <div class=\"password-trigger\">\r\n            <svg viewBox=\"0 0 120 120\">\r\n                <path class=\"eye-line\" stroke-linecap=\"round\"></path>\r\n                <circle cx=\"60\" cy=\"60\" r=\"20\"></circle>\r\n            </svg>\r\n        </div>\r\n        <div class=\"jb-input-end-section-wrapper\">\r\n            <slot name=\"end-section\"></slot>\r\n        </div>\r\n    </div>\r\n    <div class=\"message-box\"></div>\r\n</div>";
var css_248z = ":host(:focus), :host(:focus-visible) {\n  outline: none; }\n\n.jb-input-web-component {\n  width: 100%;\n  margin: var(--jb-input-margin, 12px 0); }\n  .jb-input-web-component:focus-visible {\n    outline: none; }\n  .jb-input-web-component label {\n    width: 100%;\n    margin: 4px 0px;\n    display: block;\n    font-size: var(--jb-input-label-font-size, 0.8em);\n    color: var(--jb-input-label-color, #1f1735); }\n    .jb-input-web-component label.--hide {\n      display: none; }\n  .jb-input-web-component .input-box {\n    width: 100%;\n    box-sizing: border-box;\n    height: var(--jb-input-height, 40px);\n    border: solid 1px var(--jb-input-border-color, #f7f6f6);\n    background-color: var(--jb-input-bgcolor, #f7f6f6);\n    border-bottom: solid var(--jb-input-border-bottom-width, 3px) var(--jb-input-border-color, #f7f6f6);\n    border-radius: var(--jb-input-border-radius, 16px);\n    margin: 4px 0px;\n    transition: ease 0.3s all;\n    overflow: hidden;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    box-shadow: var(--jb-input-box-shadow, none); }\n    .jb-input-web-component .input-box:focus-within {\n      border-color: var(--jb-input-border-color-focus, #1e2832);\n      box-shadow: var(--jb-input-box-shadow-focus, none); }\n    .jb-input-web-component .input-box.--type-number {\n      grid-template-columns: auto 1fr auto auto; }\n      .jb-input-web-component .input-box.--type-number input {\n        width: 100%; }\n      .jb-input-web-component .input-box.--type-number .number-control-wrapper .number-control-buttons {\n        display: flex;\n        height: 100%; }\n        .jb-input-web-component .input-box.--type-number .number-control-wrapper .number-control-buttons .number-control-button {\n          width: var(--jb-input-number-button-width, 36px);\n          height: 100%;\n          text-align: center; }\n        .jb-input-web-component .input-box.--type-number .number-control-wrapper .number-control-buttons .increase-number-button {\n          background: var(--jb-input-increase-button-bg, transparent);\n          border: var(--jb-input-increase-button-border, none);\n          border-radius: var(--jb-input-increase-button-border-radius, 0);\n          box-sizing: border-box; }\n          .jb-input-web-component .input-box.--type-number .number-control-wrapper .number-control-buttons .increase-number-button .increase-icon {\n            stroke: var(--jb-input-increase-button-color, #bbb);\n            stroke-width: 14px;\n            height: 100%;\n            width: 100%;\n            display: block; }\n          .jb-input-web-component .input-box.--type-number .number-control-wrapper .number-control-buttons .increase-number-button:hover .increase-icon {\n            stroke: var(--jb-input-increase-button-color-hover, #00b600); }\n        .jb-input-web-component .input-box.--type-number .number-control-wrapper .number-control-buttons .decrease-number-button {\n          border: var(--jb-input-decrease-button-border, none);\n          border-radius: var(--jb-input-decrease-button-border-radius, 0);\n          background: var(--jb-input-decrease-button-bg, transparent);\n          box-sizing: border-box; }\n          .jb-input-web-component .input-box.--type-number .number-control-wrapper .number-control-buttons .decrease-number-button .decrease-icon {\n            stroke: var(--jb-input-decrease-button-color, #bbb);\n            stroke-width: 14px;\n            height: 100%;\n            width: 100%;\n            display: block; }\n          .jb-input-web-component .input-box.--type-number .number-control-wrapper .number-control-buttons .decrease-number-button:hover .decrease-icon {\n            stroke: var(--jb-input-decrease-button-color-hover, #FF1026); }\n    .jb-input-web-component .input-box.type-password {\n      grid-template-columns: auto 1fr auto auto; }\n      .jb-input-web-component .input-box.type-password .password-trigger {\n        display: block;\n        height: 28px;\n        width: 28px;\n        margin: 4px 0 4px 0px;\n        margin-inline-end: 8px;\n        cursor: pointer; }\n        .jb-input-web-component .input-box.type-password .password-trigger svg {\n          width: 100%;\n          height: 100%;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          transition: 0.2s; }\n          .jb-input-web-component .input-box.type-password .password-trigger svg.password-visible .eye-line {\n            stroke: #00b600;\n            d: path(\"M 10 60 C 30 20 100 20 110 60\"); }\n          .jb-input-web-component .input-box.type-password .password-trigger svg.password-visible circle {\n            opacity: 1;\n            transition: 0.2s 0.2s;\n            transform: translateX(8px); }\n            :host([direction=\"ltr\"]) .jb-input-web-component .input-box.type-password .password-trigger svg.password-visible circle {\n              transform: translateX(-8px); }\n          .jb-input-web-component .input-box.type-password .password-trigger svg .eye-line {\n            stroke-width: 14px;\n            stroke: #bbb;\n            fill: none;\n            stroke-linecap: round;\n            stroke-linejoin: round;\n            transition: 0.3s;\n            d: path(\"M 0 60 C 40 100 80 100 120 60\"); }\n          .jb-input-web-component .input-box.type-password .password-trigger svg circle {\n            fill: #00b600;\n            opacity: 0;\n            transition: 0.3s 0s; }\n    .jb-input-web-component .input-box .password-trigger {\n      display: none; }\n    .jb-input-web-component .input-box .number-control-buttons {\n      display: none; }\n    .jb-input-web-component .input-box input {\n      border: none;\n      width: 100%;\n      box-sizing: border-box;\n      height: 100%;\n      background-color: transparent;\n      padding: var(--jb-input-input-padding, 2px 12px 0 12px);\n      display: block;\n      font-family: inherit;\n      font-size: var(--jb-input-value-font-size, 1.1em);\n      color: var(--jb-input-value-color, #1f1735);\n      margin: 0;\n      border-radius: 0;\n      text-align: var(--jb-input-input-text-align, initial);\n      direction: var(--jb-input-input-direction, inherit);\n      /* Chrome, Safari, Edge, Opera */\n      /* Firefox */ }\n      .jb-input-web-component .input-box input:focus {\n        outline: none; }\n      .jb-input-web-component .input-box input::placeholder {\n        color: var(--jb-input-placeholder-color, initial);\n        font-size: var(--jb-input-placeholder-font-size, 1.1em); }\n      .jb-input-web-component .input-box input::-webkit-outer-spin-button, .jb-input-web-component .input-box input::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0; }\n      .jb-input-web-component .input-box input[type=\"number\"] {\n        -moz-appearance: textfield; }\n  .jb-input-web-component .message-box {\n    font-size: var(--jb-input-message-font-size, 0.7em);\n    padding: 2px 8px;\n    color: #929292;\n    display: var(--jb-input-message-box-display, block); }\n    .jb-input-web-component .message-box:empty {\n      padding: 0; }\n    .jb-input-web-component .message-box.error {\n      color: var(--jb-input-message-error-color, red); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkpCSW5wdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWEsRUFBRTs7QUFFakI7RUFDRSxXQUFXO0VBQ1gsc0NBQXNDLEVBQUU7RUFDeEM7SUFDRSxhQUFhLEVBQUU7RUFDakI7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCxpREFBaUQ7SUFDakQsMkNBQTJDLEVBQUU7SUFDN0M7TUFDRSxhQUFhLEVBQUU7RUFDbkI7SUFDRSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyx1REFBdUQ7SUFDdkQsa0RBQWtEO0lBQ2xELG1HQUFtRztJQUNuRyxrREFBa0Q7SUFDbEQsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyw0Q0FBNEMsRUFBRTtJQUM5QztNQUNFLHlEQUF5RDtNQUN6RCxrREFBa0QsRUFBRTtJQUN0RDtNQUNFLHlDQUF5QyxFQUFFO01BQzNDO1FBQ0UsV0FBVyxFQUFFO01BQ2Y7UUFDRSxhQUFhO1FBQ2IsWUFBWSxFQUFFO1FBQ2Q7VUFDRSxnREFBZ0Q7VUFDaEQsWUFBWTtVQUNaLGtCQUFrQixFQUFFO1FBQ3RCO1VBQ0UsMkRBQTJEO1VBQzNELG9EQUFvRDtVQUNwRCwrREFBK0Q7VUFDL0Qsc0JBQXNCLEVBQUU7VUFDeEI7WUFDRSxtREFBbUQ7WUFDbkQsa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixXQUFXO1lBQ1gsY0FBYyxFQUFFO1VBQ2xCO1lBQ0UsNERBQTRELEVBQUU7UUFDbEU7VUFDRSxvREFBb0Q7VUFDcEQsK0RBQStEO1VBQy9ELDJEQUEyRDtVQUMzRCxzQkFBc0IsRUFBRTtVQUN4QjtZQUNFLG1EQUFtRDtZQUNuRCxrQkFBa0I7WUFDbEIsWUFBWTtZQUNaLFdBQVc7WUFDWCxjQUFjLEVBQUU7VUFDbEI7WUFDRSw0REFBNEQsRUFBRTtJQUN0RTtNQUNFLHlDQUF5QyxFQUFFO01BQzNDO1FBQ0UsY0FBYztRQUNkLFlBQVk7UUFDWixXQUFXO1FBQ1gscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixlQUFlLEVBQUU7UUFDakI7VUFDRSxXQUFXO1VBQ1gsWUFBWTtVQUNaLHFCQUFxQjtVQUNyQixzQkFBc0I7VUFDdEIsZ0JBQWdCLEVBQUU7VUFDbEI7WUFDRSxlQUFlO1lBQ2Ysd0NBQXdDLEVBQUU7VUFDNUM7WUFDRSxVQUFVO1lBQ1YscUJBQXFCO1lBQ3JCLDBCQUEwQixFQUFFO1lBQzVCO2NBQ0UsMkJBQTJCLEVBQUU7VUFDakM7WUFDRSxrQkFBa0I7WUFDbEIsWUFBWTtZQUNaLFVBQVU7WUFDVixxQkFBcUI7WUFDckIsc0JBQXNCO1lBQ3RCLGdCQUFnQjtZQUNoQix3Q0FBd0MsRUFBRTtVQUM1QztZQUNFLGFBQWE7WUFDYixVQUFVO1lBQ1YsbUJBQW1CLEVBQUU7SUFDN0I7TUFDRSxhQUFhLEVBQUU7SUFDakI7TUFDRSxhQUFhLEVBQUU7SUFDakI7TUFDRSxZQUFZO01BQ1osV0FBVztNQUNYLHNCQUFzQjtNQUN0QixZQUFZO01BQ1osNkJBQTZCO01BQzdCLHVEQUF1RDtNQUN2RCxjQUFjO01BQ2Qsb0JBQW9CO01BQ3BCLGlEQUFpRDtNQUNqRCwyQ0FBMkM7TUFDM0MsU0FBUztNQUNULGdCQUFnQjtNQUNoQixxREFBcUQ7TUFDckQsbURBQW1EO01BQ25ELGdDQUFnQztNQUNoQyxZQUFZLEVBQUU7TUFDZDtRQUNFLGFBQWEsRUFBRTtNQUNqQjtRQUNFLGlEQUFpRDtRQUNqRCx1REFBdUQsRUFBRTtNQUMzRDtRQUNFLHdCQUF3QjtRQUN4QixTQUFTLEVBQUU7TUFDYjtRQUNFLDBCQUEwQixFQUFFO0VBQ2xDO0lBQ0UsbURBQW1EO0lBQ25ELGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbURBQW1ELEVBQUU7SUFDckQ7TUFDRSxVQUFVLEVBQUU7SUFDZDtNQUNFLCtDQUErQyxFQUFFIiwiZmlsZSI6IkpCSW5wdXQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0KDpmb2N1cyksIDpob3N0KDpmb2N1cy12aXNpYmxlKSB7XG4gIG91dGxpbmU6IG5vbmU7IH1cblxuLmpiLWlucHV0LXdlYi1jb21wb25lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiB2YXIoLS1qYi1pbnB1dC1tYXJnaW4sIDEycHggMCk7IH1cbiAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQ6Zm9jdXMtdmlzaWJsZSB7XG4gICAgb3V0bGluZTogbm9uZTsgfVxuICAuamItaW5wdXQtd2ViLWNvbXBvbmVudCBsYWJlbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiA0cHggMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tamItaW5wdXQtbGFiZWwtZm9udC1zaXplLCAwLjhlbSk7XG4gICAgY29sb3I6IHZhcigtLWpiLWlucHV0LWxhYmVsLWNvbG9yLCAjMWYxNzM1KTsgfVxuICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IGxhYmVsLi0taGlkZSB7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiB2YXIoLS1qYi1pbnB1dC1oZWlnaHQsIDQwcHgpO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWpiLWlucHV0LWJvcmRlci1jb2xvciwgI2Y3ZjZmNik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tamItaW5wdXQtYmdjb2xvciwgI2Y3ZjZmNik7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgdmFyKC0tamItaW5wdXQtYm9yZGVyLWJvdHRvbS13aWR0aCwgM3B4KSB2YXIoLS1qYi1pbnB1dC1ib3JkZXItY29sb3IsICNmN2Y2ZjYpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWpiLWlucHV0LWJvcmRlci1yYWRpdXMsIDE2cHgpO1xuICAgIG1hcmdpbjogNHB4IDBweDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuM3MgYWxsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG4gICAgYm94LXNoYWRvdzogdmFyKC0tamItaW5wdXQtYm94LXNoYWRvdywgbm9uZSk7IH1cbiAgICAuamItaW5wdXQtd2ViLWNvbXBvbmVudCAuaW5wdXQtYm94OmZvY3VzLXdpdGhpbiB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWpiLWlucHV0LWJvcmRlci1jb2xvci1mb2N1cywgIzFlMjgzMik7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1qYi1pbnB1dC1ib3gtc2hhZG93LWZvY3VzLCBub25lKTsgfVxuICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3guLS10eXBlLW51bWJlciB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0bzsgfVxuICAgICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLmlucHV0LWJveC4tLXR5cGUtbnVtYmVyIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3guLS10eXBlLW51bWJlciAubnVtYmVyLWNvbnRyb2wtd3JhcHBlciAubnVtYmVyLWNvbnRyb2wtYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTsgfVxuICAgICAgICAuamItaW5wdXQtd2ViLWNvbXBvbmVudCAuaW5wdXQtYm94Li0tdHlwZS1udW1iZXIgLm51bWJlci1jb250cm9sLXdyYXBwZXIgLm51bWJlci1jb250cm9sLWJ1dHRvbnMgLm51bWJlci1jb250cm9sLWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IHZhcigtLWpiLWlucHV0LW51bWJlci1idXR0b24td2lkdGgsIDM2cHgpO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAgICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLmlucHV0LWJveC4tLXR5cGUtbnVtYmVyIC5udW1iZXItY29udHJvbC13cmFwcGVyIC5udW1iZXItY29udHJvbC1idXR0b25zIC5pbmNyZWFzZS1udW1iZXItYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1qYi1pbnB1dC1pbmNyZWFzZS1idXR0b24tYmcsIHRyYW5zcGFyZW50KTtcbiAgICAgICAgICBib3JkZXI6IHZhcigtLWpiLWlucHV0LWluY3JlYXNlLWJ1dHRvbi1ib3JkZXIsIG5vbmUpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWpiLWlucHV0LWluY3JlYXNlLWJ1dHRvbi1ib3JkZXItcmFkaXVzLCAwKTtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gICAgICAgICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLmlucHV0LWJveC4tLXR5cGUtbnVtYmVyIC5udW1iZXItY29udHJvbC13cmFwcGVyIC5udW1iZXItY29udHJvbC1idXR0b25zIC5pbmNyZWFzZS1udW1iZXItYnV0dG9uIC5pbmNyZWFzZS1pY29uIHtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tamItaW5wdXQtaW5jcmVhc2UtYnV0dG9uLWNvbG9yLCAjYmJiKTtcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMTRweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICAgICAgICAuamItaW5wdXQtd2ViLWNvbXBvbmVudCAuaW5wdXQtYm94Li0tdHlwZS1udW1iZXIgLm51bWJlci1jb250cm9sLXdyYXBwZXIgLm51bWJlci1jb250cm9sLWJ1dHRvbnMgLmluY3JlYXNlLW51bWJlci1idXR0b246aG92ZXIgLmluY3JlYXNlLWljb24ge1xuICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1qYi1pbnB1dC1pbmNyZWFzZS1idXR0b24tY29sb3ItaG92ZXIsICMwMGI2MDApOyB9XG4gICAgICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3guLS10eXBlLW51bWJlciAubnVtYmVyLWNvbnRyb2wtd3JhcHBlciAubnVtYmVyLWNvbnRyb2wtYnV0dG9ucyAuZGVjcmVhc2UtbnVtYmVyLWJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyOiB2YXIoLS1qYi1pbnB1dC1kZWNyZWFzZS1idXR0b24tYm9yZGVyLCBub25lKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1qYi1pbnB1dC1kZWNyZWFzZS1idXR0b24tYm9yZGVyLXJhZGl1cywgMCk7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tamItaW5wdXQtZGVjcmVhc2UtYnV0dG9uLWJnLCB0cmFuc3BhcmVudCk7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAgICAgICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3guLS10eXBlLW51bWJlciAubnVtYmVyLWNvbnRyb2wtd3JhcHBlciAubnVtYmVyLWNvbnRyb2wtYnV0dG9ucyAuZGVjcmVhc2UtbnVtYmVyLWJ1dHRvbiAuZGVjcmVhc2UtaWNvbiB7XG4gICAgICAgICAgICBzdHJva2U6IHZhcigtLWpiLWlucHV0LWRlY3JlYXNlLWJ1dHRvbi1jb2xvciwgI2JiYik7XG4gICAgICAgICAgICBzdHJva2Utd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgICAgICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLmlucHV0LWJveC4tLXR5cGUtbnVtYmVyIC5udW1iZXItY29udHJvbC13cmFwcGVyIC5udW1iZXItY29udHJvbC1idXR0b25zIC5kZWNyZWFzZS1udW1iZXItYnV0dG9uOmhvdmVyIC5kZWNyZWFzZS1pY29uIHtcbiAgICAgICAgICAgIHN0cm9rZTogdmFyKC0tamItaW5wdXQtZGVjcmVhc2UtYnV0dG9uLWNvbG9yLWhvdmVyLCAjRkYxMDI2KTsgfVxuICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3gudHlwZS1wYXNzd29yZCB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0bzsgfVxuICAgICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLmlucHV0LWJveC50eXBlLXBhc3N3b3JkIC5wYXNzd29yZC10cmlnZ2VyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIG1hcmdpbjogNHB4IDAgNHB4IDBweDtcbiAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDhweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3gudHlwZS1wYXNzd29yZCAucGFzc3dvcmQtdHJpZ2dlciBzdmcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzOyB9XG4gICAgICAgICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLmlucHV0LWJveC50eXBlLXBhc3N3b3JkIC5wYXNzd29yZC10cmlnZ2VyIHN2Zy5wYXNzd29yZC12aXNpYmxlIC5leWUtbGluZSB7XG4gICAgICAgICAgICBzdHJva2U6ICMwMGI2MDA7XG4gICAgICAgICAgICBkOiBwYXRoKFwiTSAxMCA2MCBDIDMwIDIwIDEwMCAyMCAxMTAgNjBcIik7IH1cbiAgICAgICAgICAuamItaW5wdXQtd2ViLWNvbXBvbmVudCAuaW5wdXQtYm94LnR5cGUtcGFzc3dvcmQgLnBhc3N3b3JkLXRyaWdnZXIgc3ZnLnBhc3N3b3JkLXZpc2libGUgY2lyY2xlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIDAuMnM7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoOHB4KTsgfVxuICAgICAgICAgICAgOmhvc3QoW2RpcmVjdGlvbj1cImx0clwiXSkgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLmlucHV0LWJveC50eXBlLXBhc3N3b3JkIC5wYXNzd29yZC10cmlnZ2VyIHN2Zy5wYXNzd29yZC12aXNpYmxlIGNpcmNsZSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOHB4KTsgfVxuICAgICAgICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3gudHlwZS1wYXNzd29yZCAucGFzc3dvcmQtdHJpZ2dlciBzdmcgLmV5ZS1saW5lIHtcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMTRweDtcbiAgICAgICAgICAgIHN0cm9rZTogI2JiYjtcbiAgICAgICAgICAgIGZpbGw6IG5vbmU7XG4gICAgICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgICAgIGQ6IHBhdGgoXCJNIDAgNjAgQyA0MCAxMDAgODAgMTAwIDEyMCA2MFwiKTsgfVxuICAgICAgICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3gudHlwZS1wYXNzd29yZCAucGFzc3dvcmQtdHJpZ2dlciBzdmcgY2lyY2xlIHtcbiAgICAgICAgICAgIGZpbGw6ICMwMGI2MDA7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyAwczsgfVxuICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3ggLnBhc3N3b3JkLXRyaWdnZXIge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3ggLm51bWJlci1jb250cm9sLWJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3ggaW5wdXQge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1qYi1pbnB1dC1pbnB1dC1wYWRkaW5nLCAycHggMTJweCAwIDEycHgpO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tamItaW5wdXQtdmFsdWUtZm9udC1zaXplLCAxLjFlbSk7XG4gICAgICBjb2xvcjogdmFyKC0tamItaW5wdXQtdmFsdWUtY29sb3IsICMxZjE3MzUpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIHRleHQtYWxpZ246IHZhcigtLWpiLWlucHV0LWlucHV0LXRleHQtYWxpZ24sIGluaXRpYWwpO1xuICAgICAgZGlyZWN0aW9uOiB2YXIoLS1qYi1pbnB1dC1pbnB1dC1kaXJlY3Rpb24sIGluaGVyaXQpO1xuICAgICAgLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXG4gICAgICAvKiBGaXJlZm94ICovIH1cbiAgICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3ggaW5wdXQ6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAuamItaW5wdXQtd2ViLWNvbXBvbmVudCAuaW5wdXQtYm94IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1qYi1pbnB1dC1wbGFjZWhvbGRlci1jb2xvciwgaW5pdGlhbCk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tamItaW5wdXQtcGxhY2Vob2xkZXItZm9udC1zaXplLCAxLjFlbSk7IH1cbiAgICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3ggaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5pbnB1dC1ib3ggaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDsgfVxuICAgICAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLmlucHV0LWJveCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IH1cbiAgLmpiLWlucHV0LXdlYi1jb21wb25lbnQgLm1lc3NhZ2UtYm94IHtcbiAgICBmb250LXNpemU6IHZhcigtLWpiLWlucHV0LW1lc3NhZ2UtZm9udC1zaXplLCAwLjdlbSk7XG4gICAgcGFkZGluZzogMnB4IDhweDtcbiAgICBjb2xvcjogIzkyOTI5MjtcbiAgICBkaXNwbGF5OiB2YXIoLS1qYi1pbnB1dC1tZXNzYWdlLWJveC1kaXNwbGF5LCBibG9jayk7IH1cbiAgICAuamItaW5wdXQtd2ViLWNvbXBvbmVudCAubWVzc2FnZS1ib3g6ZW1wdHkge1xuICAgICAgcGFkZGluZzogMDsgfVxuICAgIC5qYi1pbnB1dC13ZWItY29tcG9uZW50IC5tZXNzYWdlLWJveC5lcnJvciB7XG4gICAgICBjb2xvcjogdmFyKC0tamItaW5wdXQtbWVzc2FnZS1lcnJvci1jb2xvciwgcmVkKTsgfVxuIl19 */";
var NumberInputButtonsHTML = "<div class=\"number-control-buttons\">\r\n    <div class=\"increase-number-button number-control-button\">\r\n        <svg class=\"increase-icon\" viewBox=\"0 0 120 120\">\r\n            <path stroke-linecap=\"round\" d=\"M60,40 L60,80\"></path>\r\n            <path stroke-linecap=\"round\" d=\"M40,60 L80,60\"></path>\r\n        </svg>\r\n    </div>\r\n    <div class=\"decrease-number-button number-control-button\">\r\n        <svg class=\"decrease-icon\" viewBox=\"0 0 120 120\">\r\n            <path stroke-linecap=\"round\" d=\"M40,60 L80,60\"></path>\r\n        </svg>\r\n    </div>\r\n</div>";
var HTML$1 = "<div class=\"jb-input-inbox-element-web-component\">\r\n    <slot></slot>\r\n</div>";
var css_248z$1 = ".jb-input-inbox-element-web-component {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-height: 100%;\n  overflow-y: hidden;\n  background-color: transparent;\n  padding: 0 8px;\n  width: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluYm94LWVsZW1lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsV0FBVyxFQUFFIiwiZmlsZSI6ImluYm94LWVsZW1lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qYi1pbnB1dC1pbmJveC1lbGVtZW50LXdlYi1jb21wb25lbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgd2lkdGg6IGF1dG87IH1cbiJdfQ== */";

var JBInputInboxElementWebComponent = /*#__PURE__*/function (_HTMLElement) {
  inherits(JBInputInboxElementWebComponent, _HTMLElement);

  var _super = _createSuper(JBInputInboxElementWebComponent);

  function JBInputInboxElementWebComponent() {
    var _this;

    classCallCheck(this, JBInputInboxElementWebComponent);

    _this = _super.call(this);

    _this.initWebComponent();

    return _this;
  }

  createClass(JBInputInboxElementWebComponent, [{
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
        mode: 'open',
        delegatesFocus: true
      });
      var html = "<style>".concat(css_248z$1, "</style>") + '\n' + HTML$1;
      var element = document.createElement('template');
      element.innerHTML = html;

      this._shadowRoot.appendChild(element.content.cloneNode(true));

      this.elements = {};
    }
  }, {
    key: "initProp",
    value: function initProp() {}
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      // do something when an attribute has changed
      this.onAttributeChange(name, newValue);
    }
  }, {
    key: "onAttributeChange",
    value: function onAttributeChange(name, value) {// switch (name) {
      // }
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return [];
    }
  }]);

  return JBInputInboxElementWebComponent;
}( /*#__PURE__*/wrapNativeSuper(HTMLElement));

var myElementNotExists = !customElements.get('jb-input-inbox-element');

if (myElementNotExists) {
  window.customElements.define('jb-input-inbox-element', JBInputInboxElementWebComponent);
}

var _disabled = classPrivateFieldLooseKey("disabled");

var JBInputWebComponent = /*#__PURE__*/function (_HTMLElement2) {
  inherits(JBInputWebComponent, _HTMLElement2);

  var _super2 = _createSuper(JBInputWebComponent);

  createClass(JBInputWebComponent, [{
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      var standardedValue = this.standardValue(value);
      this._value = standardedValue;

      if (this.internals_ && typeof this.internals_.setFormValue == "function") {
        this.internals_.setFormValue(standardedValue);
      }

      this.elements.input.value = standardedValue;
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
    var _this2;

    classCallCheck(this, JBInputWebComponent);

    _this2 = _super2.call(this);
    Object.defineProperty(assertThisInitialized(_this2), _disabled, {
      writable: true,
      value: void 0
    });

    if (typeof _this2.attachInternals == "function") {
      //some browser dont support attachInternals
      _this2.internals_ = _this2.attachInternals();
    }

    _this2.initWebComponent();

    return _this2;
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
        mode: 'open',
        delegatesFocus: true
      });
      var html = "<style>".concat(css_248z, "</style>") + '\n' + HTML;
      var element = document.createElement('template');
      element.innerHTML = html;

      this._shadowRoot.appendChild(element.content.cloneNode(true));

      this.elements = {
        input: this._shadowRoot.querySelector('.input-box input'),
        inputBox: this.shadowRoot.querySelector('.input-box')
      };
      this.registerEventListener();
    }
    /**
     * this function will get user inputed or pasted text and convert it to standard one base on developer config
     * @param {String} valueString 
     * @return {String} standard value
     */

  }, {
    key: "standardValue",
    value: function standardValue(valueString) {
      var standardedValue = valueString;

      if (this.getAttribute('type') == "number") {
        standardedValue = this.standardValueForNumberInput("".concat(standardedValue));
      }

      return standardedValue;
    }
    /**
     * 
     * @param {String} valueString 
     * @return {String} standard value
     */

  }, {
    key: "standardValueForNumberInput",
    value: function standardValueForNumberInput(valueString) {
      //if our input type is number and user want to set it to new value we do nececcery logic here
      var value = parseFloat(valueString);

      if (isNaN(value)) {
        //we change nothing
        valueString = this.numberFieldParameters.invalidNumberReplacement;
      } //TODO: add max and min checker to prevent bigger value assignment
      // if(value> this.numberFieldParameters.maxValue){
      //     return `${this.numberFieldParameters.maxValue}`;
      // }
      // if(value< this.numberFieldParameters.minValue){
      //     return `${this.numberFieldParameters.minValue}`;
      // }


      var decimalNums = valueString.split('.')[1];
      var decimalPrecisionCount = decimalNums ? decimalNums.length : 0;

      if (!(this.numberFieldParameters.decimalPrecision === null || this.numberFieldParameters.decimalPrecision == undefined) && decimalPrecisionCount && decimalPrecisionCount > this.numberFieldParameters.decimalPrecision) {
        // truncate extra decimal
        var checkRegex = new RegExp("^-?\\d+(?:\\.\\d{0,".concat(this.numberFieldParameters.decimalPrecision, "})?"));
        valueString = valueString.match(checkRegex)[0];
      }

      return valueString;
    }
  }, {
    key: "registerEventListener",
    value: function registerEventListener() {
      this.elements.input.addEventListener('change', this.onInputChange.bind(this));
      this.elements.input.addEventListener('beforeinput', this.onInputBeforeInput.bind(this));
      this.elements.input.addEventListener('input', this.onInputInput.bind(this));
      this.elements.input.addEventListener('keypress', this.onInputKeyPress.bind(this));
      this.elements.input.addEventListener('keyup', this.onInputKeyup.bind(this));
      this.elements.input.addEventListener('keydown', this.onInputKeyDown.bind(this));
    }
  }, {
    key: "initProp",
    value: function initProp() {
      classPrivateFieldLooseBase(this, _disabled)[_disabled] = false;
      this._validationList = [];
      this.value = this.getAttribute('value') || '';
      this.validation = {
        isValid: null,
        message: null
      }; //our config when user use type="number" and want more config

      this.numberFieldParameters = {
        //if input type is number we use this step to change value on +- clicks
        step: 1,
        //TODO: add min and max limit on type
        // maxValue:20,
        // minValue:10,
        //how many decimal  place we accept
        decimalPrecision: null,
        //if user type or paste something not a number, this char will be filled the replacement in most cases will be '0'
        invalidNumberReplacement: ''
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
          this.elements.input.setAttribute('type', value);

          if (value == "password") {
            this.initPassword();
          }

          if (value == "number") {
            this.initNumberField();
          }

          break;

        case 'message':
          this._shadowRoot.querySelector('.message-box').innerHTML = value;
          break;

        case 'value':
          this.value = value;
          break;

        case 'name':
          this.elements.input.setAttribute('name', value);
          break;

        case 'autocomplete':
          this.elements.input.setAttribute('autocomplete', value);
          break;

        case 'placeholder':
          this.elements.input.placeholder = value;
          break;

        case 'disabled':
          if (value == '' || value === "true") {
            classPrivateFieldLooseBase(this, _disabled)[_disabled] = true;
            this.elements.input.setAttribute('disabled', 'true');
          } else if (value == "false") {
            classPrivateFieldLooseBase(this, _disabled)[_disabled] = false;
            this.elements.input.removeAttribute('disabled');
          }

          break;

        case 'inputmode':
          this.elements.input.setAttribute("inputmode", value);
      }
    }
  }, {
    key: "initPassword",
    value: function initPassword() {
      this.elements.inputBox.classList.add('type-password');
      this.isPasswordvisible = false;

      this._shadowRoot.querySelector('.password-trigger').addEventListener('click', this.onPasswordTriggerClicked.bind(this));
    }
    /**
     * @public
     * change number input config base on developer need
     * @param {*} numberConfig 
     */

  }, {
    key: "setNumberFieldParameter",
    value: function setNumberFieldParameter(_ref) {
      var step = _ref.step,
          decimalPrecision = _ref.decimalPrecision,
          invalidNumberReplacement = _ref.invalidNumberReplacement;

      if (step && !isNaN(step)) {
        this.numberFieldParameters.step = step;
      }

      if (decimalPrecision && !isNaN(decimalPrecision)) {
        this.numberFieldParameters.decimalPrecision = decimalPrecision;
      }

      if (invalidNumberReplacement) {
        this.numberFieldParameters.invalidNumberReplacement = invalidNumberReplacement;
      }
    }
  }, {
    key: "onPasswordTriggerClicked",
    value: function onPasswordTriggerClicked() {
      this.isPasswordvisible = !this.isPasswordvisible;
      var textField = this.elements.input;

      if (this.isPasswordvisible) {
        this._shadowRoot.querySelector('.password-trigger svg').classList.add('password-visible');

        textField.setAttribute('type', 'text');
      } else {
        this._shadowRoot.querySelector('.password-trigger svg').classList.remove('password-visible');

        textField.setAttribute('type', 'password');
      }
    }
    /**
     * 
     * @param {KeyboardEvent} e 
     */

  }, {
    key: "onInputKeyDown",
    value: function onInputKeyDown(e) {
      //handle up and down on number key
      if (this.getAttribute('type') == "number") {
        var key = e.key;

        if (key == "ArrowUp") {
          this.increaseNumber();
          e.preventDefault();
        }

        if (key == "ArrowDown") {
          this.decreaseNumber();
          e.preventDefault();
        } //debugger;

      } //trigger componnet event


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
    /**
     * 
     * @param {InputEvent} e 
     */

  }, {
    key: "onInputInput",
    value: function onInputInput(e) {
      var inputText = e.target.value;
      this.value = inputText;
      this.triggerInputValidation(false);
      var eventInitDict = {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        data: e.data,
        isComposing: e.isComposing,
        inputType: e.inputType,
        dataTransfer: e.dataTransfer,
        view: e.view,
        detail: e.detail,
        key: e.key
      };
      var event = new InputEvent('input', eventInitDict);
      this.dispatchEvent(event);
    }
    /**
    * 
    * @param {InputEvent} e 
    */

  }, {
    key: "onInputBeforeInput",
    value: function onInputBeforeInput(e) {
      var eventInitDict = {
        bubbles: e.bubbles,
        cancelable: e.cancelable,
        composed: e.composed,
        data: e.data,
        isComposing: e.isComposing,
        inputType: e.inputType,
        dataTransfer: e.dataTransfer,
        view: e.view,
        detail: e.detail,
        key: e.key
      };
      var event = new InputEvent('beforeinput', eventInitDict);
      this.dispatchEvent(event);

      if (event.defaultPrevented) {
        e.preventDefault();
      }
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(e) {
      var inputText = e.target.value;
      this.triggerInputValidation(true); //here is the rare  time we update _value directly becuase we want trigger event that may read value directly from dom

      this.value = inputText;
      this.dispatchOnChangeEvent();
    }
  }, {
    key: "dispatchOnChangeEvent",
    value: function dispatchOnChangeEvent() {
      var validationObject = this.checkInputValidation(this.value);
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
      var inputText = this.elements.input.value;
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
      var _this3 = this;

      var validationResult = {
        validationList: [],
        isAllValid: true
      };
      this.validationList.forEach(function (validation) {
        var res = _this3.checkValidation(value, validation);

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
      this.elements.input.focus();
    }
  }, {
    key: "initNumberField",
    value: function initNumberField() {
      var _this4 = this;

      var addFloatNumber = function addFloatNumber(num1, num2) {
        var prec1 = "".concat(num1).split('.')[1];
        var prec2 = "".concat(num2).split('.')[1];
        var zarib1 = prec1 ? Math.pow(10, prec1.length + 1) : 1;
        var zarib2 = prec2 ? Math.pow(10, prec2.length + 1) : 1;
        var zarib = Math.max(zarib1, zarib2);
        var stNum1 = num1 * zarib;
        var stNum2 = num2 * zarib;
        var res = stNum1 + stNum2;
        return res / zarib;
      };

      this.increaseNumber = function () {
        var currentNumber = parseFloat(_this4.value);

        if (isNaN(currentNumber)) {
          return;
        }

        var newNumber = addFloatNumber(currentNumber, _this4.numberFieldParameters.step);
        _this4.value = newNumber;

        _this4.dispatchOnChangeEvent();
      };

      this.decreaseNumber = function () {
        var currentNumber = parseFloat(_this4.value);

        if (isNaN(currentNumber)) {
          return;
        }

        var newNumber = addFloatNumber(currentNumber, -1 * _this4.numberFieldParameters.step);
        _this4.value = newNumber;

        _this4.dispatchOnChangeEvent();
      }; //if user set type="number" attribute


      this.elements.inputBox.classList.add('--type-number');
      var buttonsElement = document.createElement('div');
      buttonsElement.classList.add("number-control-wrapper");
      buttonsElement.innerHTML = NumberInputButtonsHTML;
      buttonsElement.querySelector('.increase-number-button').addEventListener('click', this.increaseNumber.bind(this));
      buttonsElement.querySelector('.decrease-number-button').addEventListener('click', this.decreaseNumber.bind(this));
      this.elements.inputBox.appendChild(buttonsElement);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['label', 'type', 'message', 'value', 'name', 'autocomplete', 'placeholder', 'disabled', 'inputmode'];
    }
  }]);

  return JBInputWebComponent;
}( /*#__PURE__*/wrapNativeSuper(HTMLElement));

var myElementNotExists$1 = !customElements.get('jb-input');

if (myElementNotExists$1) {
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
  /**
   * @type {React.MutableRefObject<HTMLInputElement>}
   */
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

  function onInput(e) {
    if (typeof props.onInput == 'function' && e instanceof InputEvent) {
      props.onInput(e);
    }
  }

  function onBeforeInput(e) {
    if (typeof props.onBeforeInput == 'function' && e instanceof InputEvent) {
      props.onBeforeInput(e);
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
  useEffect(function () {
    if (_typeof_1(props.numberFieldParameter) == "object") {
      element.current.setNumberFieldParameter(props.numberFieldParameter);
    }
  }, [props.NumberFieldParameter]);
  useEffect(function () {
    if (typeof props.disabled == "boolean") {
      element.current.setAttribute('disabled', "".concat(props.disabled));
    }
  }, [props.disabled]);
  useEffect(function () {
    if (props.inputmode) {
      element.current.setAttribute('inputmode', props.inputmode);
    } else {
      element.current.removeAttribute('inputmode');
    }
  }, [props.inputmode]);
  useEvent(element.current, 'change', onChange);
  useEvent(element.current, 'keydown', onKeydown);
  useEvent(element.current, 'keyup', onKeyup);
  useEvent(element.current, 'focus', onFocus);
  useEvent(element.current, 'blur', onBlur);
  useEvent(element.current, 'enter', onEnter);
  useEvent(element.current, 'input', onInput);
  useEvent(element.current, 'beforeinput', onBeforeInput);
  return /*#__PURE__*/React.createElement("jb-input", {
    placeholder: props.placeholder,
    ref: element,
    "class": props.className,
    label: props.label,
    message: props.message
  }, props.children);
});
JBInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onEnter: PropTypes.func,
  onInput: PropTypes.func,
  onBeforeinput: PropTypes.func,
  className: PropTypes.string,
  validationList: PropTypes.array,
  placeholder: PropTypes.string,
  direction: PropTypes.string,
  numberFieldParameter: PropTypes.string,
  disabled: PropTypes.bool,
  inputmode: PropTypes.string
};
JBInput.displayName = "JBInput";

export default JBInput;
//# sourceMappingURL=JBInput.js.map
