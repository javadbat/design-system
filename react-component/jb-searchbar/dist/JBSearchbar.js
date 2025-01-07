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

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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
    var i = e.call(t, r);
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
function e(e, t, n, i) {
  if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
  if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
}
function t(e, t, n, i, r) {
  if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
"function" == typeof SuppressedError && SuppressedError;
var n, i, r, s, a, l, o;
var c = /*#__PURE__*/function () {
  function c() {
    _classCallCheck(this, c);
  }
  return _createClass(c, [{
    key: "createTextInput",
    value: function createTextInput(e) {
      var t = e.column,
        n = e.onIntentSubmitted,
        i = e.setIntentActive,
        r = e.setIntentColumnValue,
        s = document.createElement("jb-input");
      return s.addEventListener("keydown", function (e) {
        var t = e.target;
        13 == e.keyCode && "" != t.value.trim() && n();
      }), s.addEventListener("keyup", function (e) {
        var _n$validation;
        var n = e.target;
        r(n.value, n.value, t.label), (_n$validation = n.validation) !== null && _n$validation !== void 0 && _n$validation.resultSummary.isValid ? i(!0) : i(!1, n.validation.resultSummary.message || void 0);
      }), s.addEventListener("init", function () {
        s.focus(), s.validation.list = [{
          validator: /.{1}/g,
          message: "پر کردن فیلد اجباری است"
        }];
      }), s.addEventListener("init", function () {
        s.focus();
      }), s;
    }
  }, {
    key: "createNumberInput",
    value: function createNumberInput(e) {
      var t = e.column,
        n = e.onIntentSubmitted,
        i = e.setIntentActive,
        r = e.setIntentColumnValue,
        s = document.createElement("jb-input");
      return s.addEventListener("keydown", function (e) {
        var t = e.target;
        13 == e.keyCode && "" != t.value.trim() && n();
      }), s.addEventListener("keyup", function (e) {
        var _n$validation2;
        var n = e.target,
          s = parseInt(n.value);
        r(s, n.value, t.label), n.validation && n.validation.resultSummary.isValid ? i(!0) : i(!1, ((_n$validation2 = n.validation) === null || _n$validation2 === void 0 ? void 0 : _n$validation2.resultSummary.message) || void 0);
      }), s.addEventListener("init", function () {
        s.focus(), s.validation.list = [{
          validator: /.{1}/g,
          message: "پر کردن فیلد اجباری است"
        }, {
          validator: /^[0-9]*$/g,
          message: "تنها میتوانید عدد وارد نمایید"
        }];
      }), s;
    }
  }, {
    key: "createSelectInput",
    value: function createSelectInput(e) {
      var t = e.column,
        n = e.onIntentSubmitted,
        i = e.setIntentActive,
        r = e.setIntentColumnValue,
        s = document.createElement("jb-select"),
        a = document.createElement("jb-option-list");
      s.appendChild(a);
      var l = t.config;
      return a.callbacks.getTitle = l.getOptionTitle, a.callbacks.getValue = l.getOptionValue, a.optionList = l.optionList, s.addEventListener("change", function (e) {
        var s = e.target;
        var a = "";
        a = s.selectedOptionTitle, r(s.value, a, t.label), i(!0), n();
      }), s.addEventListener("init", function () {
        s.focus();
      }), s;
    }
  }, {
    key: "createDateInput",
    value: function createDateInput(e) {
      var t = e.column,
        n = e.onIntentSubmitted,
        i = e.setIntentActive,
        r = e.setIntentColumnValue,
        s = document.createElement("jb-date-input");
      return s.required = !0, s.valueType = "JALALI", s.setAttribute("format", "YYYY/MM/DD"), s.addEventListener("init", function () {
        s.focus();
      }), s.addEventListener("keyup", function (e) {
        var n = e.target;
        if (n.validation.resultSummary.isValid) {
          i(!0);
          var _e = n.valueInDate,
            _s = n.value;
          r(_e, _s, t.label);
        } else i(!1, n.validation.resultSummary.message || void 0);
      }), s.addEventListener("select", function (e) {
        var s = e.target;
        i(!0);
        var a = s.valueInDate,
          l = s.value;
        r(a, l, t.label), n();
      }), s;
    }
  }]);
}();
var p = /*#__PURE__*/function (_HTMLElement) {
  function p() {
    var _this;
    _classCallCheck(this, p);
    _this = _callSuper(this, p), n.add(_assertThisInitialized(_this)), i.set(_assertThisInitialized(_this), !1), r.set(_assertThisInitialized(_this), "SELECT_COLUMN"), s.set(_assertThisInitialized(_this), []), a.set(_assertThisInitialized(_this), new c()), _this.intentColumn = {
      column: null,
      value: null,
      valueString: null,
      label: null,
      active: !1
    }, _this.filterList = [], l.set(_assertThisInitialized(_this), !1), _this.initWebComponent();
    return _this;
  }
  _inherits(p, _HTMLElement);
  return _createClass(p, [{
    key: "isLoading",
    get: function get() {
      return e(this, i, "f");
    },
    set: function set(n) {
      !e(this, i, "f") && n && this.playSearchIconAnimation(), t(this, i, n);
    }
  }, {
    key: "inputState",
    get: function get() {
      return e(this, r, "f");
    },
    set: function set(i) {
      var _this$elements$column;
      "SELECT_COLUMN" == i ? (this.elements.columnSelect.value = null, this.elements.intent.wrapper.classList.add("--hide"), this.elements.columnSelectOptionList.optionList.length && (e(this, n, "m", o).call(this), this.elements.columnSelect.focus())) : "FILL_VALUE" == i && (this.elements.intent.wrapper.classList.remove("--hide"), this.elements.intent.input.wrapper.innerHTML = "", (_this$elements$column = this.elements.columnSelect.parentElement) === null || _this$elements$column === void 0 ? void 0 : _this$elements$column.classList.add("--hide")), t(this, r, i);
    }
  }, {
    key: "value",
    get: function get() {
      return this.filterList.map(function (e) {
        return {
          column: e.column,
          value: e.value
        };
      });
    }
  }, {
    key: "columnList",
    get: function get() {
      return e(this, s, "f");
    },
    set: function set(e) {
      this.setColumnList(e);
    }
  }, {
    key: "searchOnChange",
    get: function get() {
      return e(this, l, "f");
    },
    set: function set(e) {
      "boolean" == typeof e && t(this, l, e);
    }
  }, {
    key: "registerEventListener",
    value: function registerEventListener() {
      var _this2 = this;
      this.elements.columnSelect.addEventListener("change", this.onColumnSelected.bind(this)), this.elements.intent.submitButton.addEventListener("click", this.onIntentSubmitted.bind(this)), this.elements.columnSelect.addEventListener("init", function () {
        _this2.elements.columnSelect.focus();
      }), this.elements.searchButton.wrapper.addEventListener("click", this.search.bind(this));
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
      return new Proxy([], {
        get: function get(t, i, r) {
          if ("splice" == i) {
            var _s2 = t[i];
            return function () {
              for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
                t[_key] = arguments[_key];
              }
              var i = t[0];
              return _this3.elements.filterListWrapper.children[i].remove(), setTimeout(function () {
                _this3.elements.columnSelectOptionList.optionList.length && "SELECT_COLUMN" == _this3.inputState && e(_this3, n, "m", o).call(_this3);
              }, 0), _s2.apply(r, t);
            };
          }
          return t[i];
        },
        set: function set(e, t, n) {
          if ("length" != t && "string" == typeof t) {
            if (parseInt(t) == e.length) {
              var _e2 = _this3.createFilterDOM(n.valueString, n.label);
              n.dom = _e2, _this3.elements.filterListWrapper.appendChild(_e2);
            }
            !Number.isNaN(Number(t)) && parseInt(t) < e.length && (n.dom.dataset.filterIndex = t);
          }
          return e[t] = n, !0;
        }
      });
    }
  }, {
    key: "createFilterDOM",
    value: function createFilterDOM(e, t) {
      var _this4 = this;
      var n = document.createElement("div");
      n.classList.add("filter-item");
      var i = document.createElement("div");
      i.classList.add("delete-btn"), i.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 298.667 298.667" style="enable-background:new 0 0 298.667 298.667;" xml:space="preserve"><g><polygon points="298.667,30.187 268.48,0 149.333,119.147 30.187,0 0,30.187 119.147,149.333 0,268.48 30.187,298.667     149.333,179.52 268.48,298.667 298.667,268.48 179.52,149.333   "/></g></svg>';
      var r = document.createElement("div");
      r.classList.add("filter-label"), r.innerHTML = "".concat(t, ": ").concat(e);
      var s = this.filterList.length;
      return n.dataset.filterIndex = s.toString(), i.addEventListener("click", function (e) {
        var t = e.currentTarget,
          n = parseInt(t.parentElement.dataset.filterIndex);
        _this4.deleteFilter(n);
      }), n.appendChild(i), n.appendChild(r), n;
    }
  }, {
    key: "deleteFilter",
    value: function deleteFilter(e) {
      this.filterList.splice(e, 1), this.triggerOnChange(), this.setColumnListSelectOptionList();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.callOnLoadEvent(), this.initProp();
    }
  }, {
    key: "callOnLoadEvent",
    value: function callOnLoadEvent() {
      var e = new CustomEvent("load", {
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(e);
    }
  }, {
    key: "initWebComponent",
    value: function initWebComponent() {
      var e = this.attachShadow({
          mode: "open"
        }),
        t = document.createElement("template");
      t.innerHTML = '<style>.jb-searchbar-web-component {\n  width: 100%;\n  height: auto;\n  min-height: 48px;\n  display: flex;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper {\n  width: calc(100% - 48px);\n  height: auto;\n  min-height: 48px;\n  display: inline-flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section {\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: wrap;\n  row-gap: 8px;\n  column-gap: 8px;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 0px;\n  background-color: var(--jb-searchbar-filter-item-bg-color, #408cff);\n  color: var(--jb-searchbar-filter-item-color, #fff);\n  border-radius: 36px;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item .delete-btn {\n  cursor: pointer;\n  display: block;\n  box-sizing: border-box;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item .delete-btn svg {\n  fill: #fff;\n  height: 0.75rem;\n  display: block;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item .filter-label {\n  display: block;\n  box-sizing: border-box;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section {\n  --jb-select-margin: 0 0;\n  --jb-select-border-radius: 24px;\n  --jb-select-border-color: transparent;\n  --jb-select-border-color-selected: transparent;\n  --jb-select-bgcolor: #fff;\n  --jb-select-list-box-shadow: 0px 15px 20px -6px #d8d8d8;\n  display: inline-block;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .column-select-wrapper {\n  width: 240px;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .column-select-wrapper.--hide {\n  display: none;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper {\n  display: flex;\n  align-items: center;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-input-wrapper {\n  width: 180px;\n  --jb-input-margin: 0 0;\n  --jb-input-border-radius: 0px;\n  --jb-input-border-color: transparent;\n  --jb-input-border-color-focus: transparent;\n  --jb-input-bgcolor: #fff;\n  --jb-input-message-box-display:none;\n  --jb-select-margin: 0 0;\n  --jb-select-border-radius: 24px;\n  --jb-select-border-color: transparent;\n  --jb-select-border-color-selected: transparent;\n  --jb-select-bgcolor: #fff;\n  --jb-date-input-margin: 0 0;\n  --jb-date-input-border-radius: 0px;\n  --jb-date-input-border-color: transparent;\n  --jb-date-input-border-color-focus: transparent;\n  --jb-date-input-bgcolor: #fff;\n  --jb-date-input-message-box-display: none;\n  --jb-date-input-calendar-trigger-display:none;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button {\n  width: 32px;\n  height: 32px;\n  float: right;\n  padding: 4px 0 4px 0;\n  cursor: not-allowed;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button.--active {\n  cursor: pointer;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button.--active svg {\n  fill: #28BD48;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button svg {\n  fill: #929292;\n}\n.jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper.--hide {\n  display: none;\n}\n.jb-searchbar-web-component .search-button-wrapper {\n  width: 48px;\n  height: auto;\n  min-height: 48px;\n  cursor: pointer;\n}\n.jb-searchbar-web-component .search-button-wrapper svg {\n  width: 36px;\n  height: 36px;\n  margin: 4px 8px;\n  box-sizing: border-box;\n  background-color: transparent;\n}\n.jb-searchbar-web-component .search-button-wrapper svg circle {\n  stroke: #7b7b7b;\n  fill: white;\n  stroke-width: 25px;\n}\n.jb-searchbar-web-component .search-button-wrapper svg .spin-line-group {\n  transform-origin: center;\n  fill: transparent;\n}\n.jb-searchbar-web-component .search-button-wrapper svg .spin-line-group rect {\n  fill: transparent;\n}\n.jb-searchbar-web-component .search-button-wrapper svg .spin-line-group path {\n  fill: none;\n  stroke: #9b9b9b;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  transition: 0.2s;\n  stroke-width: 35px;\n  transform-origin: center;\n}</style>\n<div class="jb-searchbar-web-component">\r\n    <div class="search-dynamic-wrapper">\r\n        <section class="filter-list-section"></section>\r\n        <section class="filter-input-section">\r\n            <div class="column-select-wrapper">\r\n                 <jb-select class="column-select" placeholder="">\r\n                    <jb-option-list id="ColumnSelectOptionList">\r\n                 </jb-select>\r\n            </div>\r\n            <div class="intent-wrapper --hide">\r\n                <div class="intent-column"></div>\r\n                <div class="intent-input-wrapper"></div>\r\n                <div class="intent-submit-button">\r\n                    <svg x="0px" y="0px" viewBox="0 0 493.464 493.464" space="preserve">\r\n                        <g>\r\n                            <g>\r\n                                <path d="M246.736,0C110.692,0,0.004,110.68,0.004,246.732c0,136.06,110.688,246.732,246.732,246.732    c136.048,0,246.724-110.672,246.724-246.732C493.456,110.68,382.78,0,246.736,0z M360.524,208.716L230.98,338.268    c-2.82,2.824-7.816,2.824-10.64,0l-86.908-86.912c-1.412-1.416-2.192-3.3-2.192-5.324c0.004-2.016,0.784-3.912,2.192-5.336    l11.108-11.104c1.412-1.408,3.3-2.18,5.328-2.18c2.016,0,3.908,0.772,5.316,2.18l67.752,67.752c1.5,1.516,3.94,1.516,5.444,0    l110.392-110.392c2.824-2.824,7.828-2.824,10.644,0l11.108,11.124c1.412,1.4,2.208,3.304,2.208,5.308    C362.732,205.412,361.936,207.3,360.524,208.716z"/>\r\n                            </g>\r\n                        </g>\r\n                    </svg>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class="search-button-wrapper">\r\n        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">\r\n            <circle cx="255" cy="255" r="170"></circle>\r\n            <g class="spin-line-group">\r\n                <rect x="0" y="0" width="512" height="512"/>\r\n                <path class="convertable-line" d="M400 400 L 450 450"></path>\r\n            </g>\r\n        </svg>\r\n    </div>\r\n</div>', e.appendChild(t.content.cloneNode(!0)), this.elements = {
        filterListWrapper: e.querySelector(".filter-list-section"),
        searchButton: {
          wrapper: e.querySelector(".search-button-wrapper"),
          svg: {
            spinnerLine: e.querySelector(".search-button-wrapper .convertable-line"),
            spinnerBox: e.querySelector(".search-button-wrapper .spin-line-group")
          }
        },
        columnSelect: e.querySelector(".column-select"),
        columnSelectOptionList: e.querySelector("#ColumnSelectOptionList"),
        intent: {
          column: e.querySelector(".intent-wrapper .intent-column"),
          input: {
            wrapper: e.querySelector(".intent-wrapper .intent-input-wrapper"),
            input: null
          },
          submitButton: e.querySelector(".intent-wrapper .intent-submit-button"),
          wrapper: e.querySelector(".intent-wrapper")
        }
      }, this.registerEventListener();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(e, t, n) {
      this.onAttributeChange(e, n);
    }
  }, {
    key: "onAttributeChange",
    value: function onAttributeChange(e, t) {
      if ("placeholder" === e) this.elements.columnSelect.setAttribute("placeholder", t);
    }
  }, {
    key: "setColumnList",
    value: function setColumnList(e) {
      t(this, s, e), this.setColumnListSelectOptionList();
    }
  }, {
    key: "setColumnListSelectOptionList",
    value: function setColumnListSelectOptionList() {
      var e = this.filterList.map(function (e) {
        return e.column.key;
      });
      if (this.columnList) {
        var _t = this.columnList.filter(function (t) {
          var n = t.maxUsageCount || 1;
          return !(e.filter(function (e) {
            return e == t.key;
          }).length >= n);
        });
        this.elements.columnSelectOptionList.callbacks.getTitle = function (e) {
          return e.label;
        }, this.elements.columnSelectOptionList.optionList = _t;
      }
    }
  }, {
    key: "onColumnSelected",
    value: function onColumnSelected(e) {
      var t = e.target.value;
      this.intentColumn.column = t, this.inputState = "FILL_VALUE", this.elements.intent.column.innerHTML = t.label;
      var n = this.createIntentInputDom(t);
      this.elements.intent.input.input = n, this.elements.intent.input.wrapper.appendChild(n);
    }
  }, {
    key: "createIntentInputDom",
    value: function createIntentInputDom(t) {
      var _this5 = this;
      var n = function n(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          _this5.intentColumn.active = e, e ? (_this5.elements.intent.submitButton.classList.add("--active"), _this5.elements.intent.submitButton.setAttribute("title", "ثبت فیلتر")) : (_this5.elements.intent.submitButton.classList.remove("--active"), _this5.elements.intent.submitButton.setAttribute("title", t));
        },
        i = function i(e, t, n) {
          _this5.intentColumn.value = e, _this5.intentColumn.label = n, _this5.intentColumn.valueString = t;
        };
      switch (t.type) {
        case "TEXT":
          return e(this, a, "f").createTextInput({
            column: t,
            onIntentSubmitted: this.onIntentSubmitted.bind(this),
            setIntentActive: n,
            setIntentColumnValue: i
          });
        case "NUMBER":
          return e(this, a, "f").createNumberInput({
            column: t,
            onIntentSubmitted: this.onIntentSubmitted.bind(this),
            setIntentActive: n,
            setIntentColumnValue: i
          });
        case "SELECT":
          return e(this, a, "f").createSelectInput({
            column: t,
            onIntentSubmitted: this.onIntentSubmitted.bind(this),
            setIntentActive: n,
            setIntentColumnValue: i
          });
        case "DATE":
          return e(this, a, "f").createDateInput({
            column: t,
            onIntentSubmitted: this.onIntentSubmitted.bind(this),
            setIntentActive: n,
            setIntentColumnValue: i
          });
      }
    }
  }, {
    key: "onIntentSubmitted",
    value: function onIntentSubmitted() {
      this.intentColumn.column && this.intentColumn.value && this.intentColumn.valueString && this.intentColumn.label && this.intentColumn.active && (this.submitIntent(this.intentColumn.column, this.intentColumn.value, this.intentColumn.valueString, this.intentColumn.label), this.inputState = "SELECT_COLUMN", this.intentColumn = {
        column: null,
        value: null,
        valueString: null,
        label: null,
        active: !1
      }, this.elements.intent.submitButton.classList.remove("--active"));
    }
  }, {
    key: "submitIntent",
    value: function submitIntent(e, t, n, i) {
      this.filterList.push({
        column: e,
        valueString: n,
        value: t,
        label: i
      }), this.setColumnListSelectOptionList(), this.triggerOnChange();
    }
  }, {
    key: "playSearchIconAnimation",
    value: function playSearchIconAnimation() {
      var e = this.elements.searchButton.svg.spinnerLine,
        t = this.elements.searchButton.svg.spinnerBox,
        n = this,
        i = e.animate([{
          d: 'path("M400 400 L 450 450")'
        }, {
          d: 'path("M410 410 L 415 415")'
        }], {
          id: "ShrinkLine",
          duration: 400
        });
      i.cancel();
      i.onfinish = function () {
        e.setAttribute("d", "M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794"), r.play();
      };
      var r = e.animate([{
        d: 'path("M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794")'
      }, {
        d: 'path("M 255 475 A 220 220 0 0 0 475 255")'
      }], {
        id: "CurveLine",
        duration: 400
      });
      r.cancel();
      r.onfinish = function () {
        e.setAttribute("d", "M 255 475 A 220 220 0 0 0 475 255"), s.play();
      };
      var s = t.animate([{
        transform: "rotate(0deg)"
      }, {
        transform: "rotate(180deg)"
      }, {
        transform: "rotate(360deg)"
      }], {
        id: "Spin",
        duration: 1e3,
        iterations: 1
      });
      s.cancel();
      s.onfinish = function () {
        1 == n.isLoading ? s.play() : l.play();
      };
      var a = e.animate([{
        d: 'path("M410 410 L 415 415")'
      }, {
        d: 'path("M400 400 L 450 450")'
      }], {
        id: "GrowLine",
        duration: 400
      });
      a.cancel();
      a.onfinish = function () {
        e.setAttribute("d", "M400 400 L 450 450");
      };
      var l = e.animate([{
        d: 'path("M 255 475 A 220 220 0 0 0 475 255")'
      }, {
        d: 'path("M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794")'
      }], {
        id: "ReverseCurveLine",
        duration: 400
      });
      l.cancel();
      l.onfinish = function () {
        e.setAttribute("d", "M410 410 L 415 415"), a.play();
      }, i.play();
    }
  }, {
    key: "triggerOnChange",
    value: function triggerOnChange() {
      var e = new CustomEvent("change");
      this.dispatchEvent(e), this.searchOnChange && this.search();
    }
  }, {
    key: "search",
    value: function search() {
      var e = new CustomEvent("search");
      this.dispatchEvent(e);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["placeholder"];
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
i = new WeakMap(), r = new WeakMap(), s = new WeakMap(), a = new WeakMap(), l = new WeakMap(), n = new WeakSet(), o = function o() {
  var _this$elements$column2;
  (_this$elements$column2 = this.elements.columnSelect.parentElement) === null || _this$elements$column2 === void 0 || _this$elements$column2.classList.remove("--hide");
};
!customElements.get("jb-searchbar") && window.customElements.define("jb-searchbar", p);

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
