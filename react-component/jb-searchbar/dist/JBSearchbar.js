import React, { useEffect, useRef, useState, useCallback } from 'react';
import 'jb-select';
import 'jb-input';
import 'jb-date-input';

function useEvent(dom, event, handler, passive = false) {
    useEffect(() => {
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

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}

function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}

function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}

function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}

function _isNativeReflectConstruct$1() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct() {
    return !!t;
  })();
}

function _construct(t, e, r) {
  if (_isNativeReflectConstruct$1()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}

function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper(t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}

function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r );
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}

function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return state.set(receiver, value), value;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var HTML = "<div class=\"jb-searchbar-web-component\">\r\n    <div class=\"search-dynamic-wrapper\">\r\n        <section class=\"filter-list-section\"></section>\r\n        <section class=\"filter-input-section\">\r\n            <div class=\"column-select-wrapper\">\r\n                 <jb-select class=\"column-select\" placeholder=\"\"></jb-select>\r\n            </div>\r\n            <div class=\"intent-wrapper --hide\">\r\n                <div class=\"intent-column\"></div>\r\n                <div class=\"intent-input-wrapper\"></div>\r\n                <div class=\"intent-submit-button\">\r\n                    <svg x=\"0px\" y=\"0px\" viewBox=\"0 0 493.464 493.464\" space=\"preserve\">\r\n                        <g>\r\n                            <g>\r\n                                <path d=\"M246.736,0C110.692,0,0.004,110.68,0.004,246.732c0,136.06,110.688,246.732,246.732,246.732    c136.048,0,246.724-110.672,246.724-246.732C493.456,110.68,382.78,0,246.736,0z M360.524,208.716L230.98,338.268    c-2.82,2.824-7.816,2.824-10.64,0l-86.908-86.912c-1.412-1.416-2.192-3.3-2.192-5.324c0.004-2.016,0.784-3.912,2.192-5.336    l11.108-11.104c1.412-1.408,3.3-2.18,5.328-2.18c2.016,0,3.908,0.772,5.316,2.18l67.752,67.752c1.5,1.516,3.94,1.516,5.444,0    l110.392-110.392c2.824-2.824,7.828-2.824,10.644,0l11.108,11.124c1.412,1.4,2.208,3.304,2.208,5.308    C362.732,205.412,361.936,207.3,360.524,208.716z\"/>\r\n                            </g>\r\n                        </g>\r\n                    </svg>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"search-button-wrapper\">\r\n        <svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <circle cx=\"255\" cy=\"255\" r=\"170\"></circle>\r\n            <g class=\"spin-line-group\">\r\n                <rect x=\"0\" y=\"0\" width=\"512\" height=\"512\"/>\r\n                <path class=\"convertable-line\" d=\"M400 400 L 450 450\"></path>\r\n            </g>\r\n        </svg>\r\n    </div>\r\n</div>";
var css_248z = ".jb-searchbar-web-component {\n  width: 100%;\n  height: auto;\n  min-height: 48px;\n  display: flex;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper {\n  width: calc(100% - 48px);\n  height: auto;\n  min-height: 48px;\n  display: inline-flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section {\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: wrap;\n  row-gap: 8px;\n  column-gap: 8px;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 0px;\n  background-color: var(--jb-searchbar-filter-item-bg-color, #408cff);\n  color: var(--jb-searchbar-filter-item-color, #fff);\n  border-radius: 36px;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item .delete-btn {\n  cursor: pointer;\n  display: block;\n  box-sizing: border-box;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item .delete-btn svg {\n  fill: #fff;\n  height: 0.75rem;\n  display: block;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item .filter-label {\n  display: block;\n  box-sizing: border-box;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section {\n  --jb-select-margin: 0 0;\n  --jb-select-border-radius: 24px;\n  --jb-select-border-color: transparent;\n  --jb-select-border-color-selected: transparent;\n  --jb-select-bgcolor: #fff;\n  --jb-select-list-box-shadow: 0px 15px 20px -6px #d8d8d8;\n  display: inline-block;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .column-select-wrapper {\n  width: 240px;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .column-select-wrapper.--hide {\n  display: none;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper {\n  display: flex;\n  align-items: center;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-input-wrapper {\n  width: 180px;\n  --jb-input-margin: 0 0;\n  --jb-input-border-radius: 0px;\n  --jb-input-border-color: transparent;\n  --jb-input-border-color-focus: transparent;\n  --jb-input-bgcolor: #fff;\n  --jb-input-message-box-display:none;\n  --jb-select-margin: 0 0;\n  --jb-select-border-radius: 24px;\n  --jb-select-border-color: transparent;\n  --jb-select-border-color-selected: transparent;\n  --jb-select-bgcolor: #fff;\n  --jb-date-input-margin: 0 0;\n  --jb-date-input-border-radius: 0px;\n  --jb-date-input-border-color: transparent;\n  --jb-date-input-border-color-focus: transparent;\n  --jb-date-input-bgcolor: #fff;\n  --jb-date-input-message-box-display: none;\n  --jb-date-input-calendar-trigger-display:none;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button {\n  width: 32px;\n  height: 32px;\n  float: right;\n  padding: 4px 0 4px 0;\n  cursor: not-allowed;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button.--active {\n  cursor: pointer;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button.--active svg {\n  fill: #28BD48;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button svg {\n  fill: #929292;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper.--hide {\n  display: none;\n}\n.jb-searchbar-web-component .search-button-wrapper {\n  width: 48px;\n  height: auto;\n  min-height: 48px;\n  cursor: pointer;\n}\n.jb-searchbar-web-component .search-button-wrapper svg {\n  width: 36px;\n  height: 36px;\n  margin: 4px 8px;\n  box-sizing: border-box;\n  background-color: transparent;\n}\n.jb-searchbar-web-component .search-button-wrapper svg circle {\n  stroke: #7b7b7b;\n  fill: white;\n  stroke-width: 25px;\n}\n.jb-searchbar-web-component .search-button-wrapper svg .spin-line-group {\n  transform-origin: center;\n  fill: transparent;\n}\n.jb-searchbar-web-component .search-button-wrapper svg .spin-line-group rect {\n  fill: transparent;\n}\n.jb-searchbar-web-component .search-button-wrapper svg .spin-line-group path {\n  fill: none;\n  stroke: #9b9b9b;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  transition: 0.2s;\n  stroke-width: 35px;\n  transform-origin: center;\n}";

/* eslint-disable no-duplicate-imports */
var InputFactory = /*#__PURE__*/function () {
  function InputFactory() {
    _classCallCheck(this, InputFactory);
  }
  return _createClass(InputFactory, [{
    key: "createTextInput",
    value: function createTextInput(args) {
      var column = args.column,
        onIntentSubmitted = args.onIntentSubmitted,
        setIntentActive = args.setIntentActive,
        setIntentColumnValue = args.setIntentColumnValue;
      var input = document.createElement('jb-input');
      input.addEventListener('keydown', function (e) {
        var target = e.target;
        if (e.keyCode == 13 && target.value.trim() != "") {
          onIntentSubmitted();
        }
      });
      input.addEventListener('keyup', function (e) {
        var _target$validation;
        var target = e.target;
        setIntentColumnValue(target.value, target.value, column.label);
        if ((_target$validation = target.validation) !== null && _target$validation !== void 0 && _target$validation.resultSummary.isValid) {
          setIntentActive(true);
        } else {
          setIntentActive(false, target.validation.resultSummary.message || undefined);
        }
      });
      input.addEventListener('init', function () {
        input.focus();
        input.validation.list = [{
          validator: /.{1}/g,
          message: 'پر کردن فیلد اجباری است'
        }];
      });
      input.addEventListener('init', function () {
        input.focus();
      });
      return input;
    }
  }, {
    key: "createNumberInput",
    value: function createNumberInput(args) {
      var column = args.column,
        onIntentSubmitted = args.onIntentSubmitted,
        setIntentActive = args.setIntentActive,
        setIntentColumnValue = args.setIntentColumnValue;
      var input = document.createElement('jb-input');
      input.addEventListener('keydown', function (e) {
        var target = e.target;
        if (e.keyCode == 13 && target.value.trim() != "") {
          onIntentSubmitted();
        }
      });
      input.addEventListener('keyup', function (e) {
        var target = e.target;
        var value = parseInt(target.value);
        setIntentColumnValue(value, target.value, column.label);
        if (target.validation && target.validation.resultSummary.isValid) {
          setIntentActive(true);
        } else {
          var _target$validation2;
          setIntentActive(false, ((_target$validation2 = target.validation) === null || _target$validation2 === void 0 ? void 0 : _target$validation2.resultSummary.message) || undefined);
        }
      });
      input.addEventListener('init', function () {
        input.focus();
        input.validation.list = [{
          validator: /.{1}/g,
          message: 'پر کردن فیلد اجباری است'
        }, {
          validator: /^[0-9]*$/g,
          message: 'تنها میتوانید عدد وارد نمایید'
        }];
      });
      return input;
    }
  }, {
    key: "createSelectInput",
    value: function createSelectInput(args) {
      var column = args.column,
        onIntentSubmitted = args.onIntentSubmitted,
        setIntentActive = args.setIntentActive,
        setIntentColumnValue = args.setIntentColumnValue;
      var select = document.createElement('jb-select');
      var columnConfig = column.config;
      select.callbacks.getOptionTitle = columnConfig.getOptionTitle;
      select.callbacks.getOptionValue = columnConfig.getOptionValue;
      select.optionList = columnConfig.optionList;
      select.addEventListener('change', function (e) {
        var target = e.target;
        var title = "";
        title = target.selectedOptionTitle;
        setIntentColumnValue(target.value, title, column.label);
        setIntentActive(true);
        onIntentSubmitted();
      });
      select.addEventListener('init', function () {
        select.focus();
      });
      return select;
    }
  }, {
    key: "createDateInput",
    value: function createDateInput(args) {
      var column = args.column,
        onIntentSubmitted = args.onIntentSubmitted,
        setIntentActive = args.setIntentActive,
        setIntentColumnValue = args.setIntentColumnValue;
      var dateInput = document.createElement('jb-date-input');
      dateInput.required = true;
      dateInput.valueType = "JALALI";
      dateInput.setAttribute("format", "YYYY/MM/DD");
      dateInput.addEventListener('init', function () {
        dateInput.focus();
      });
      dateInput.addEventListener('keyup', function (e) {
        var target = e.target;
        if (target.validation.resultSummary.isValid) {
          setIntentActive(true);
          var value = target.valueInDate;
          var valueString = target.value;
          setIntentColumnValue(value, valueString, column.label);
        } else {
          setIntentActive(false, target.validation.resultSummary.message || undefined);
        }
      });
      dateInput.addEventListener('select', function (e) {
        var target = e.target;
        setIntentActive(true);
        var value = target.valueInDate;
        var valueString = target.value;
        setIntentColumnValue(value, valueString, column.label);
        onIntentSubmitted();
      });
      return dateInput;
    }
  }]);
}();
var _JBSearchbarWebComponent_instances, _JBSearchbarWebComponent_isLoading, _JBSearchbarWebComponent_inputState, _JBSearchbarWebComponent_columnList, _JBSearchbarWebComponent_inputFactory, _JBSearchbarWebComponent_searchOnChange, _JBSearchbarWebComponent_showColumnSelect;
var JBSearchbarWebComponent = /*#__PURE__*/function (_HTMLElement) {
  function JBSearchbarWebComponent() {
    var _this;
    _classCallCheck(this, JBSearchbarWebComponent);
    _this = _callSuper(this, JBSearchbarWebComponent);
    _JBSearchbarWebComponent_instances.add(_this);
    _JBSearchbarWebComponent_isLoading.set(_this, false);
    _JBSearchbarWebComponent_inputState.set(_this, "SELECT_COLUMN");
    _JBSearchbarWebComponent_columnList.set(_this, []);
    _JBSearchbarWebComponent_inputFactory.set(_this, new InputFactory());
    _this.intentColumn = {
      column: null,
      value: null,
      valueString: null,
      label: null,
      active: false
    };
    _this.filterList = [];
    _JBSearchbarWebComponent_searchOnChange.set(_this, false);
    _this.initWebComponent();
    return _this;
  }
  _inherits(JBSearchbarWebComponent, _HTMLElement);
  return _createClass(JBSearchbarWebComponent, [{
    key: "isLoading",
    get: function get() {
      return __classPrivateFieldGet(this, _JBSearchbarWebComponent_isLoading, "f");
    },
    set: function set(value) {
      if (!__classPrivateFieldGet(this, _JBSearchbarWebComponent_isLoading, "f") && value) {
        this.playSearchIconAnimation();
      }
      __classPrivateFieldSet(this, _JBSearchbarWebComponent_isLoading, value);
    }
  }, {
    key: "inputState",
    get: function get() {
      return __classPrivateFieldGet(this, _JBSearchbarWebComponent_inputState, "f");
    },
    set: function set(value) {
      if (value == "SELECT_COLUMN") {
        this.elements.columnSelect.value = null;
        this.elements.intent.wrapper.classList.add("--hide");
        if (this.elements.columnSelect.optionList.length) {
          __classPrivateFieldGet(this, _JBSearchbarWebComponent_instances, "m", _JBSearchbarWebComponent_showColumnSelect).call(this);
          this.elements.columnSelect.focus();
        }
      } else if (value == "FILL_VALUE") {
        var _this$elements$column;
        this.elements.intent.wrapper.classList.remove("--hide");
        this.elements.intent.input.wrapper.innerHTML = "";
        (_this$elements$column = this.elements.columnSelect.parentElement) === null || _this$elements$column === void 0 || _this$elements$column.classList.add("--hide");
      }
      __classPrivateFieldSet(this, _JBSearchbarWebComponent_inputState, value);
    }
  }, {
    key: "value",
    get: function get() {
      return this.filterList.map(function (x) {
        return {
          column: x.column,
          value: x.value
        };
      });
    }
  }, {
    key: "columnList",
    get: function get() {
      return __classPrivateFieldGet(this, _JBSearchbarWebComponent_columnList, "f");
    },
    set: function set(value) {
      //TODO: check validation of column to be array ind has necessary prop
      this.setColumnList(value);
    }
  }, {
    key: "searchOnChange",
    get: function get() {
      return __classPrivateFieldGet(this, _JBSearchbarWebComponent_searchOnChange, "f");
    },
    set: function set(value) {
      if (typeof value == "boolean") {
        __classPrivateFieldSet(this, _JBSearchbarWebComponent_searchOnChange, value);
      }
    }
  }, {
    key: "registerEventListener",
    value: function registerEventListener() {
      var _this2 = this;
      this.elements.columnSelect.addEventListener("change", this.onColumnSelected.bind(this));
      this.elements.intent.submitButton.addEventListener("click", this.onIntentSubmitted.bind(this));
      this.elements.columnSelect.addEventListener("init", function () {
        _this2.elements.columnSelect.focus();
      });
      this.elements.searchButton.wrapper.addEventListener("click", this.search.bind(this));
    }
  }, {
    key: "initProp",
    value: function initProp() {
      this.filterList = this.createFilterList();
    }
  }, {
    key: "createFilterList",
    value: function createFilterList() {
      var _this3 = this;
      var flProxy = new Proxy([], {
        get: function get(target, property, receiver) {
          if (property == "splice") {
            //when we remove filter
            var origMethod = target[property];
            var customSplice = function customSplice() {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              var domIndex = args[0];
              _this3.elements.filterListWrapper.children[domIndex].remove();
              setTimeout(function () {
                if (_this3.elements.columnSelect.optionList.length && _this3.inputState == "SELECT_COLUMN") {
                  __classPrivateFieldGet(_this3, _JBSearchbarWebComponent_instances, "m", _JBSearchbarWebComponent_showColumnSelect).call(_this3);
                }
              }, 0);
              //because we apply function like this the get wont call again in proxy
              //we apply into proxy not original obj so setter hooks for splice in setter do their job
              return origMethod.apply(receiver, args);
            };
            return customSplice;
          }
          //@ts-ignore
          return target[property];
        },
        set: function set(target, property, value) {
          if (!(property == "length") && typeof property == "string") {
            if (parseInt(property) == target.length) {
              //when push
              var dom = _this3.createFilterDOM(value.valueString, value.label);
              value.dom = dom;
              _this3.elements.filterListWrapper.appendChild(dom);
            }
            if (!Number.isNaN(Number(property)) && parseInt(property) < target.length) {
              //when splice
              //we do dom delete in proxy getter
              value.dom.dataset.filterIndex = property;
            }
          }
          //@ts-ignore
          target[property] = value;
          return true;
        }
      });
      return flProxy;
    }
  }, {
    key: "createFilterDOM",
    value: function createFilterDOM(label, columnLabel) {
      var _this4 = this;
      var dom = document.createElement("div");
      dom.classList.add("filter-item");
      var deleteButtonDom = document.createElement("div");
      deleteButtonDom.classList.add("delete-btn");
      deleteButtonDom.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 298.667 298.667\" style=\"enable-background:new 0 0 298.667 298.667;\" xml:space=\"preserve\"><g><polygon points=\"298.667,30.187 268.48,0 149.333,119.147 30.187,0 0,30.187 119.147,149.333 0,268.48 30.187,298.667     149.333,179.52 268.48,298.667 298.667,268.48 179.52,149.333   \"/></g></svg>";
      var labelDom = document.createElement("div");
      labelDom.classList.add("filter-label");
      labelDom.innerHTML = "".concat(columnLabel, ": ").concat(label);
      var filterIndex = this.filterList.length;
      dom.dataset.filterIndex = filterIndex.toString();
      deleteButtonDom.addEventListener("click", function (e) {
        var currentTarget = e.currentTarget;
        var filterIndex = parseInt(currentTarget.parentElement.dataset.filterIndex);
        _this4.deleteFilter(filterIndex);
      });
      dom.appendChild(deleteButtonDom);
      dom.appendChild(labelDom);
      return dom;
    }
  }, {
    key: "deleteFilter",
    value: function deleteFilter(filterIndex) {
      this.filterList.splice(filterIndex, 1);
      this.triggerOnChange();
      this.setColumnListSelectOptionList();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      // standard web component event that called when all of dom is binded
      this.callOnLoadEvent();
      this.initProp();
    }
  }, {
    key: "callOnLoadEvent",
    value: function callOnLoadEvent() {
      var event = new CustomEvent("load", {
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "initWebComponent",
    value: function initWebComponent() {
      var shadowRoot = this.attachShadow({
        mode: "open"
      });
      var html = "<style>".concat(css_248z, "</style>") + "\n" + HTML;
      var element = document.createElement("template");
      element.innerHTML = html;
      shadowRoot.appendChild(element.content.cloneNode(true));
      this.elements = {
        filterListWrapper: shadowRoot.querySelector(".filter-list-section"),
        searchButton: {
          wrapper: shadowRoot.querySelector(".search-button-wrapper"),
          svg: {
            spinnerLine: shadowRoot.querySelector(".search-button-wrapper .convertable-line"),
            spinnerBox: shadowRoot.querySelector(".search-button-wrapper .spin-line-group")
          }
        },
        columnSelect: shadowRoot.querySelector(".column-select"),
        intent: {
          column: shadowRoot.querySelector(".intent-wrapper .intent-column"),
          input: {
            wrapper: shadowRoot.querySelector(".intent-wrapper .intent-input-wrapper"),
            input: null
          },
          submitButton: shadowRoot.querySelector(".intent-wrapper .intent-submit-button"),
          wrapper: shadowRoot.querySelector(".intent-wrapper")
        }
      };
      this.registerEventListener();
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
        case "placeholder":
          this.elements.columnSelect.setAttribute("placeholder", value);
          break;
      }
    }
  }, {
    key: "setColumnList",
    value: function setColumnList(columnList) {
      __classPrivateFieldSet(this, _JBSearchbarWebComponent_columnList, columnList);
      this.setColumnListSelectOptionList();
    }
  }, {
    key: "setColumnListSelectOptionList",
    value: function setColumnListSelectOptionList() {
      var currentFilterKeys = this.filterList.map(function (filter) {
        return filter.column.key;
      });
      if (this.columnList) {
        var columnList = this.columnList.filter(function (column) {
          var maxUsageCount = column.maxUsageCount || 1;
          var usedCount = currentFilterKeys.filter(function (key) {
            return key == column.key;
          }).length;
          if (usedCount >= maxUsageCount) {
            return false;
          }
          return true;
        });
        this.elements.columnSelect.callbacks.getOptionTitle = function (column) {
          return column.label;
        };
        this.elements.columnSelect.optionList = columnList;
      }
    }
  }, {
    key: "onColumnSelected",
    value: function onColumnSelected(e) {
      var target = e.target;
      var column = target.value;
      this.intentColumn.column = column;
      this.inputState = "FILL_VALUE";
      this.elements.intent.column.innerHTML = column.label;
      var inputDom = this.createIntentInputDom(column);
      this.elements.intent.input.input = inputDom;
      this.elements.intent.input.wrapper.appendChild(inputDom);
    }
  }, {
    key: "createIntentInputDom",
    value: function createIntentInputDom(column) {
      var _this5 = this;
      var setIntentActive = function setIntentActive(value) {
        var err = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        _this5.intentColumn.active = value;
        if (value) {
          _this5.elements.intent.submitButton.classList.add("--active");
          _this5.elements.intent.submitButton.setAttribute("title", "ثبت فیلتر");
        } else {
          _this5.elements.intent.submitButton.classList.remove("--active");
          _this5.elements.intent.submitButton.setAttribute("title", err);
        }
      };
      var setIntentColumnValue = function setIntentColumnValue(value, valueString, label) {
        _this5.intentColumn.value = value;
        _this5.intentColumn.label = label;
        _this5.intentColumn.valueString = valueString;
      };
      switch (column.type) {
        case "TEXT":
          return __classPrivateFieldGet(this, _JBSearchbarWebComponent_inputFactory, "f").createTextInput({
            column: column,
            onIntentSubmitted: this.onIntentSubmitted.bind(this),
            setIntentActive: setIntentActive,
            setIntentColumnValue: setIntentColumnValue
          });
        case "NUMBER":
          return __classPrivateFieldGet(this, _JBSearchbarWebComponent_inputFactory, "f").createNumberInput({
            column: column,
            onIntentSubmitted: this.onIntentSubmitted.bind(this),
            setIntentActive: setIntentActive,
            setIntentColumnValue: setIntentColumnValue
          });
        case "SELECT":
          return __classPrivateFieldGet(this, _JBSearchbarWebComponent_inputFactory, "f").createSelectInput({
            column: column,
            onIntentSubmitted: this.onIntentSubmitted.bind(this),
            setIntentActive: setIntentActive,
            setIntentColumnValue: setIntentColumnValue
          });
        case "DATE":
          return __classPrivateFieldGet(this, _JBSearchbarWebComponent_inputFactory, "f").createDateInput({
            column: column,
            onIntentSubmitted: this.onIntentSubmitted.bind(this),
            setIntentActive: setIntentActive,
            setIntentColumnValue: setIntentColumnValue
          });
      }
    }
  }, {
    key: "onIntentSubmitted",
    value: function onIntentSubmitted() {
      if (this.intentColumn.column && this.intentColumn.value && this.intentColumn.valueString && this.intentColumn.label && this.intentColumn.active) {
        this.submitIntent(this.intentColumn.column, this.intentColumn.value, this.intentColumn.valueString, this.intentColumn.label);
        this.inputState = "SELECT_COLUMN";
        this.intentColumn = {
          column: null,
          value: null,
          valueString: null,
          label: null,
          active: false
        };
        this.elements.intent.submitButton.classList.remove("--active");
      }
    }
  }, {
    key: "submitIntent",
    value: function submitIntent(column, value, valueString, label) {
      this.filterList.push({
        column: column,
        valueString: valueString,
        value: value,
        label: label
      });
      this.setColumnListSelectOptionList();
      this.triggerOnChange();
    }
  }, {
    key: "playSearchIconAnimation",
    value: function playSearchIconAnimation() {
      var spinnerLine = this.elements.searchButton.svg.spinnerLine;
      var spinnerBox = this.elements.searchButton.svg.spinnerBox;
      var self = this;
      var ShrinkLineAnimation = spinnerLine.animate([{
        d: 'path("M400 400 L 450 450")'
      }, {
        d: 'path("M410 410 L 415 415")'
      }], {
        id: "ShrinkLine",
        duration: 400
      });
      ShrinkLineAnimation.cancel();
      var shrinkLineFunction = function shrinkLineFunction() {
        spinnerLine.setAttribute("d", "M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794");
        curveLineAnimation.play();
      };
      ShrinkLineAnimation.onfinish = shrinkLineFunction;
      var curveLineAnimation = spinnerLine.animate([{
        d: 'path("M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794")'
      }, {
        d: 'path("M 255 475 A 220 220 0 0 0 475 255")'
      }], {
        id: "CurveLine",
        duration: 400
      });
      curveLineAnimation.cancel();
      var curveLineFunction = function curveLineFunction() {
        spinnerLine.setAttribute("d", "M 255 475 A 220 220 0 0 0 475 255");
        spinAnimation.play();
      };
      curveLineAnimation.onfinish = curveLineFunction;
      var spinAnimation = spinnerBox.animate([{
        transform: "rotate(0deg)"
      }, {
        transform: "rotate(180deg)"
      }, {
        transform: "rotate(360deg)"
      }], {
        id: "Spin",
        duration: 1000,
        iterations: 1
      });
      spinAnimation.cancel();
      var spinFunction = function spinFunction() {
        if (self.isLoading == true) {
          spinAnimation.play();
        } else {
          ReverseCurveLineAnimation.play();
        }
      };
      spinAnimation.onfinish = spinFunction;
      var growLineAnimation = spinnerLine.animate([{
        d: 'path("M410 410 L 415 415")'
      }, {
        d: 'path("M400 400 L 450 450")'
      }], {
        id: "GrowLine",
        duration: 400
      });
      growLineAnimation.cancel();
      var growLineFunction = function growLineFunction() {
        spinnerLine.setAttribute("d", "M400 400 L 450 450");
      };
      growLineAnimation.onfinish = growLineFunction;
      var ReverseCurveLineAnimation = spinnerLine.animate([{
        d: 'path("M 255 475 A 220 220 0 0 0 475 255")'
      }, {
        d: 'path("M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794")'
      }], {
        id: "ReverseCurveLine",
        duration: 400
      });
      ReverseCurveLineAnimation.cancel();
      var ReverseCurveLineFunction = function ReverseCurveLineFunction() {
        spinnerLine.setAttribute("d", "M410 410 L 415 415");
        growLineAnimation.play();
      };
      ReverseCurveLineAnimation.onfinish = ReverseCurveLineFunction;
      ShrinkLineAnimation.play();
    }
  }, {
    key: "triggerOnChange",
    value: function triggerOnChange() {
      var event = new CustomEvent("change");
      this.dispatchEvent(event);
      if (this.searchOnChange) {
        this.search();
      }
    }
  }, {
    key: "search",
    value: function search() {
      var event = new CustomEvent("search");
      this.dispatchEvent(event);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["placeholder"];
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
_JBSearchbarWebComponent_isLoading = new WeakMap(), _JBSearchbarWebComponent_inputState = new WeakMap(), _JBSearchbarWebComponent_columnList = new WeakMap(), _JBSearchbarWebComponent_inputFactory = new WeakMap(), _JBSearchbarWebComponent_searchOnChange = new WeakMap(), _JBSearchbarWebComponent_instances = new WeakSet(), _JBSearchbarWebComponent_showColumnSelect = function _JBSearchbarWebComponent_showColumnSelect() {
  var _this$elements$column2;
  (_this$elements$column2 = this.elements.columnSelect.parentElement) === null || _this$elements$column2 === void 0 || _this$elements$column2.classList.remove("--hide");
};
var myElementNotExists = !customElements.get("jb-searchbar");
if (myElementNotExists) {
  window.customElements.define("jb-searchbar", JBSearchbarWebComponent);
}

function JBSearchbar(props) {
    const element = useRef();
    const [refChangeCount, refChangeCountSetter] = useState(0);
    useEffect(() => {
        refChangeCountSetter(refChangeCount + 1);
    }, [element.current]);
    useEffect(() => {
        element.current.columnList = props.columnList;
    }, [props.columnList]);
    useEffect(() => {
        if (props.searchOnChange) {
            element.current.searchOnChange = true;
        }
        else {
            element.current.searchOnChange = false;
        }
    }, [props.searchOnChange]);
    const onSearch = useCallback(() => {
        if (typeof props.onSearch === 'function') {
            props.onSearch();
        }
    }, [props.onSearch]);
    useEvent(element.current, 'search', onSearch);
    return (React.createElement("jb-searchbar", { placeholder: props.placeholder, ref: element }));
}

export { JBSearchbar };
//# sourceMappingURL=JBSearchbar.js.map
