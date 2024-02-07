(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('jb-select'), require('jb-input'), require('jb-date-input')) :
	typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'jb-select', 'jb-input', 'jb-date-input'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.JBSearchbar = factory(global.React, global.PropTypes));
})(this, (function (React, PropTypes) { 'use strict';

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
	function _iterableToArrayLimit(arr, i) {
	  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
	  if (null != _i) {
	    var _s,
	      _e,
	      _x,
	      _r,
	      _arr = [],
	      _n = !0,
	      _d = !1;
	    try {
	      if (_x = (_i = _i.call(arr)).next, 0 === i) {
	        if (Object(_i) !== _i) return;
	        _n = !1;
	      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
	    } catch (err) {
	      _d = !0, _e = err;
	    } finally {
	      try {
	        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	    return _arr;
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

	function __classPrivateFieldGet(receiver, state, kind, f) {
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
	}

	function __classPrivateFieldSet(receiver, state, value, kind, f) {
	    if (kind === "m") throw new TypeError("Private method is not writable");
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
	}

	var HTML = "<div class=\"jb-searchbar-web-component\">\r\n    <div class=\"search-dynamic-wrapper\">\r\n        <section class=\"filter-list-section\"></section>\r\n        <section class=\"filter-input-section\">\r\n            <div class=\"column-select-wrapper\">\r\n                 <jb-select class=\"column-select\" placeholder=\"\"></jb-select>\r\n            </div>\r\n            <div class=\"intent-wrapper --hide\">\r\n                <div class=\"intent-column\"></div>\r\n                <div class=\"intent-input-wrapper\"></div>\r\n                <div class=\"intent-submit-button\">\r\n                    <svg x=\"0px\" y=\"0px\" viewBox=\"0 0 493.464 493.464\" space=\"preserve\">\r\n                        <g>\r\n                            <g>\r\n                                <path d=\"M246.736,0C110.692,0,0.004,110.68,0.004,246.732c0,136.06,110.688,246.732,246.732,246.732    c136.048,0,246.724-110.672,246.724-246.732C493.456,110.68,382.78,0,246.736,0z M360.524,208.716L230.98,338.268    c-2.82,2.824-7.816,2.824-10.64,0l-86.908-86.912c-1.412-1.416-2.192-3.3-2.192-5.324c0.004-2.016,0.784-3.912,2.192-5.336    l11.108-11.104c1.412-1.408,3.3-2.18,5.328-2.18c2.016,0,3.908,0.772,5.316,2.18l67.752,67.752c1.5,1.516,3.94,1.516,5.444,0    l110.392-110.392c2.824-2.824,7.828-2.824,10.644,0l11.108,11.124c1.412,1.4,2.208,3.304,2.208,5.308    C362.732,205.412,361.936,207.3,360.524,208.716z\"/>\r\n                            </g>\r\n                        </g>\r\n                    </svg>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"search-button-wrapper\">\r\n        <svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <circle cx=\"255\" cy=\"255\" r=\"170\"></circle>\r\n            <g class=\"spin-line-group\">\r\n                <rect x=\"0\" y=\"0\" width=\"512\" height=\"512\"/>\r\n                <path class=\"convertable-line\" d=\"M400 400 L 450 450\"></path>\r\n            </g>\r\n        </svg>\r\n    </div>\r\n</div>";

	var css_248z = ".jb-searchbar-web-component {\n  width: 100%;\n  height: auto;\n  min-height: 48px;\n  display: flex; }\n  .jb-searchbar-web-component .search-dynamic-wrapper {\n    width: calc(100% - 48px);\n    height: auto;\n    min-height: 48px;\n    display: inline-flex;\n    flex-wrap: wrap; }\n    .jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section {\n      display: inline-flex;\n      align-items: center;\n      flex-wrap: wrap;\n      row-gap: 8px;\n      column-gap: 8px; }\n      .jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item {\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        margin: 0px 0px;\n        padding: 4px 8px;\n        background-color: #408cff;\n        color: #fff;\n        border-radius: 36px; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item .delete-btn {\n          cursor: pointer;\n          display: block;\n          padding: 4px 8px 0px 8px;\n          box-sizing: border-box; }\n          .jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item .delete-btn svg {\n            fill: #fff;\n            width: 12px;\n            height: 12px; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item .filter-label {\n          display: block;\n          box-sizing: border-box; }\n    .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section {\n      --jb-select-margin: 0 0;\n      --jb-select-border-radius: 24px;\n      --jb-select-border-color: transparent;\n      --jb-select-border-color-selected: transparent;\n      --jb-select-bgcolor: #fff;\n      --jb-select-list-box-shadow: 0px 15px 20px -6px #d8d8d8;\n      display: inline-block; }\n      .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .column-select-wrapper {\n        width: 240px; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .column-select-wrapper.--hide {\n          display: none; }\n      .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper {\n        display: flex;\n        align-items: center; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-input-wrapper {\n          width: 180px;\n          --jb-input-margin: 0 0;\n          --jb-input-border-radius: 0px;\n          --jb-input-border-color: transparent;\n          --jb-input-border-color-focus: transparent;\n          --jb-input-bgcolor: #fff;\n          --jb-input-message-box-display:none;\n          --jb-select-margin: 0 0;\n          --jb-select-border-radius: 24px;\n          --jb-select-border-color: transparent;\n          --jb-select-border-color-selected: transparent;\n          --jb-select-bgcolor: #fff;\n          --jb-date-input-margin: 0 0;\n          --jb-date-input-border-radius: 0px;\n          --jb-date-input-border-color: transparent;\n          --jb-date-input-border-color-focus: transparent;\n          --jb-date-input-bgcolor: #fff;\n          --jb-date-input-message-box-display: none; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button {\n          width: 32px;\n          height: 32px;\n          float: right;\n          padding: 4px 0 4px 0;\n          cursor: not-allowed; }\n          .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button.--active {\n            cursor: pointer; }\n            .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button.--active svg {\n              fill: #28BD48; }\n          .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button svg {\n            fill: #929292; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper.--hide {\n          display: none; }\n  .jb-searchbar-web-component .search-button-wrapper {\n    width: 48px;\n    height: auto;\n    min-height: 48px;\n    cursor: pointer; }\n    .jb-searchbar-web-component .search-button-wrapper svg {\n      width: 36px;\n      height: 36px;\n      margin: 4px 8px;\n      box-sizing: border-box;\n      background-color: transparent; }\n      .jb-searchbar-web-component .search-button-wrapper svg circle {\n        stroke: #7b7b7b;\n        fill: white;\n        stroke-width: 25px; }\n      .jb-searchbar-web-component .search-button-wrapper svg .spin-line-group {\n        transform-origin: center;\n        fill: transparent; }\n        .jb-searchbar-web-component .search-button-wrapper svg .spin-line-group rect {\n          fill: transparent; }\n        .jb-searchbar-web-component .search-button-wrapper svg .spin-line-group path {\n          fill: none;\n          stroke: #9b9b9b;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          transition: 0.2s;\n          stroke-width: 35px;\n          transform-origin: center; }\n";

	/* eslint-disable no-duplicate-imports */
	class InputFactory {
	    createTextInput({ onIntentSubmited, setIntentColumnValue, setIntentActive }) {
	        const input = document.createElement('jb-input');
	        input.addEventListener('keydown', (e) => {
	            const target = e.target;
	            if (e.keyCode == 13 && target.value.trim() != "") {
	                onIntentSubmited();
	            }
	        });
	        input.addEventListener('keyup', (e) => {
	            var _a, _b;
	            const target = e.target;
	            setIntentColumnValue(target.value, target.value);
	            if ((_a = target.validation) === null || _a === void 0 ? void 0 : _a.isValid) {
	                setIntentActive(true);
	            }
	            else {
	                setIntentActive(false, (_b = target.validation) === null || _b === void 0 ? void 0 : _b.message);
	            }
	        });
	        input.addEventListener('init', () => {
	            input.focus();
	            input.validationList = [
	                {
	                    validator: /.{1}/g,
	                    message: 'پر کردن فیلد اجباری است'
	                },
	            ];
	        });
	        input.addEventListener('init', () => {
	            input.focus();
	        });
	        return input;
	    }
	    createNumberInput({ onIntentSubmited, setIntentColumnValue, setIntentActive }) {
	        const input = document.createElement('jb-input');
	        input.addEventListener('keydown', (e) => {
	            const target = e.target;
	            if (e.keyCode == 13 && target.value.trim() != "") {
	                onIntentSubmited();
	            }
	        });
	        input.addEventListener('keyup', (e) => {
	            var _a;
	            const target = e.target;
	            const value = parseInt(target.value);
	            setIntentColumnValue(value, target.value);
	            if (target.validation && target.validation.isValid) {
	                setIntentActive(true);
	            }
	            else {
	                setIntentActive(false, (_a = target.validation) === null || _a === void 0 ? void 0 : _a.message);
	            }
	        });
	        input.addEventListener('init', () => {
	            input.focus();
	            input.validationList = [
	                {
	                    validator: /.{1}/g,
	                    message: 'پر کردن فیلد اجباری است'
	                },
	                {
	                    validator: /^[0-9]*$/g,
	                    message: 'تنها میتوانید عدد وارد نمایید'
	                },
	            ];
	        });
	        return input;
	    }
	    createSelectInput({ column, onIntentSubmited, setIntentColumnValue, setIntentActive }) {
	        const select = document.createElement('jb-select');
	        select.callbacks.getOptionTitle = column.config.getOptionTitle;
	        select.callbacks.getOptionValue = column.config.getOptionValue;
	        select.optionList = column.config.optionList;
	        select.addEventListener('change', (e) => {
	            const target = e.target;
	            let label = "";
	            label = target.selectedOptionTitle;
	            setIntentColumnValue(target.value, label);
	            setIntentActive(true);
	            onIntentSubmited();
	        });
	        select.addEventListener('init', () => {
	            select.focus();
	        });
	        return select;
	    }
	    createDateInput({ column, onIntentSubmited, setIntentColumnValue, setIntentActive }) {
	        const dateInput = document.createElement('jb-date-input');
	        dateInput.required = true;
	        dateInput.addEventListener('init', () => {
	            dateInput.focus();
	        });
	        dateInput.addEventListener('keyup', (e) => {
	            const target = e.target;
	            if (target.validation.isValid) {
	                setIntentActive(true);
	                const value = target.value;
	                const label = target.inputValue;
	                setIntentColumnValue(value, label);
	            }
	            else {
	                setIntentActive(false, target.validation.message);
	            }
	        });
	        dateInput.addEventListener('select', (e) => {
	            const target = e.target;
	            setIntentActive(true);
	            const value = target.value;
	            const label = target.inputValue;
	            setIntentColumnValue(value, label);
	            onIntentSubmited();
	        });
	        return dateInput;
	    }
	}

	var _JBSearchbarWebComponent_isLoading, _JBSearchbarWebComponent_inputState, _JBSearchbarWebComponent_columnList, _JBSearchbarWebComponent_inputFactory, _JBSearchbarWebComponent_searchOnChange;
	class JBSearchbarWebComponent extends HTMLElement {
	    get isLoading() {
	        return __classPrivateFieldGet(this, _JBSearchbarWebComponent_isLoading, "f");
	    }
	    set isLoading(value) {
	        if ((!__classPrivateFieldGet(this, _JBSearchbarWebComponent_isLoading, "f")) && value) {
	            this.playSearchIconAnimation();
	        }
	        __classPrivateFieldSet(this, _JBSearchbarWebComponent_isLoading, value, "f");
	    }
	    get inputState() {
	        return __classPrivateFieldGet(this, _JBSearchbarWebComponent_inputState, "f");
	    }
	    set inputState(value) {
	        var _a, _b;
	        if (value == "SELECT_COLUMN") {
	            this.elements.columnSelect.value = null;
	            this.elements.intent.wrapper.classList.add('--hide');
	            (_a = this.elements.columnSelect.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove('--hide');
	            this.elements.columnSelect.focus();
	        }
	        else if (value == "FILL_VALUE") {
	            this.elements.intent.wrapper.classList.remove('--hide');
	            this.elements.intent.input.wrapper.innerHTML = "";
	            (_b = this.elements.columnSelect.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add('--hide');
	        }
	        __classPrivateFieldSet(this, _JBSearchbarWebComponent_inputState, value, "f");
	    }
	    get value() {
	        return this.filterList.map(x => ({ column: x.column, value: x.value }));
	    }
	    get columnList() {
	        return __classPrivateFieldGet(this, _JBSearchbarWebComponent_columnList, "f");
	    }
	    set columnList(value) {
	        //TODO: check validation of column to be array ind has neccessary prop
	        this.setColumnList(value);
	    }
	    get searchOnChange() {
	        return __classPrivateFieldGet(this, _JBSearchbarWebComponent_searchOnChange, "f");
	    }
	    set searchOnChange(value) {
	        if (typeof value == "boolean") {
	            __classPrivateFieldSet(this, _JBSearchbarWebComponent_searchOnChange, value, "f");
	        }
	    }
	    constructor() {
	        super();
	        _JBSearchbarWebComponent_isLoading.set(this, false);
	        _JBSearchbarWebComponent_inputState.set(this, "SELECT_COLUMN");
	        _JBSearchbarWebComponent_columnList.set(this, []);
	        _JBSearchbarWebComponent_inputFactory.set(this, new InputFactory());
	        this.intentColumn = {
	            column: null,
	            value: null,
	            label: null,
	            active: false
	        };
	        this.filterList = [];
	        _JBSearchbarWebComponent_searchOnChange.set(this, false);
	        this.initWebComponent();
	    }
	    registerEventListener() {
	        this.elements.columnSelect.addEventListener('change', this.onColumnSelected.bind(this));
	        this.elements.intent.submitButton.addEventListener('click', this.onIntentSubmited.bind(this));
	        this.elements.columnSelect.addEventListener('init', () => {
	            this.elements.columnSelect.focus();
	        });
	        this.elements.searchButton.wrapper.addEventListener('click', this.search.bind(this));
	    }
	    initProp() {
	        this.filterList = this.createFilterList();
	    }
	    createFilterList() {
	        const flProxy = new Proxy([], {
	            get: (target, property, receiver) => {
	                if (property == "splice") {
	                    //when we remove filter
	                    const origMethod = target[property];
	                    const customSplice = (...args) => {
	                        const domIndex = args[0];
	                        this.elements.filterListWrapper.children[domIndex].remove();
	                        //becuase we apply function like this the get wont call again in proxy
	                        //we apply into proxy not orginal obj so setter hooks for splice in setter do their job
	                        return origMethod.apply(receiver, args);
	                    };
	                    return customSplice;
	                }
	                return target[property];
	            },
	            set: (target, property, value) => {
	                if (!(property == "length") && typeof property == "string") {
	                    if (parseInt(property) == target.length) {
	                        //when push
	                        const dom = this.createFilterDOM(value.value, value.label);
	                        value.dom = dom;
	                        this.elements.filterListWrapper.appendChild(dom);
	                    }
	                    if (!Number.isNaN(Number(property)) && parseInt(property) < target.length) {
	                        //when splice
	                        //we do dom delete in proxy getter
	                        value.dom.dataset.filterIndex = property;
	                    }
	                }
	                target[property] = value;
	                return true;
	            }
	        });
	        return flProxy;
	    }
	    createFilterDOM(label, columnLabel) {
	        const dom = document.createElement('div');
	        dom.classList.add('filter-item');
	        const deleteButtonDom = document.createElement('div');
	        deleteButtonDom.classList.add('delete-btn');
	        deleteButtonDom.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 298.667 298.667" style="enable-background:new 0 0 298.667 298.667;" xml:space="preserve"><g><polygon points="298.667,30.187 268.48,0 149.333,119.147 30.187,0 0,30.187 119.147,149.333 0,268.48 30.187,298.667     149.333,179.52 268.48,298.667 298.667,268.48 179.52,149.333   "/></g></svg>`;
	        const labelDom = document.createElement('div');
	        labelDom.classList.add('filter-label');
	        labelDom.innerHTML = `${columnLabel}: ${label}`;
	        const filterIndex = this.filterList.length;
	        dom.dataset.filterIndex = filterIndex.toString();
	        deleteButtonDom.addEventListener('click', (e) => {
	            const currentTarget = e.currentTarget;
	            const filterIndex = parseInt(currentTarget.parentElement.dataset.filterIndex);
	            this.deleteFilter(filterIndex);
	        });
	        dom.appendChild(deleteButtonDom);
	        dom.appendChild(labelDom);
	        return dom;
	    }
	    deleteFilter(filterIndex) {
	        this.filterList.splice(filterIndex, 1);
	        this.triggerOnChange();
	        this.setColumnListSelectOptionList();
	    }
	    connectedCallback() {
	        // standard web component event that called when all of dom is binded
	        this.callOnLoadEvent();
	        this.initProp();
	    }
	    callOnLoadEvent() {
	        const event = new CustomEvent('load', { bubbles: true, composed: true });
	        this.dispatchEvent(event);
	    }
	    initWebComponent() {
	        const shadowRoot = this.attachShadow({ mode: 'open' });
	        const html = `<style>${css_248z}</style>` + '\n' + HTML;
	        const element = document.createElement('template');
	        element.innerHTML = html;
	        shadowRoot.appendChild(element.content.cloneNode(true));
	        this.elements = {
	            filterListWrapper: shadowRoot.querySelector('.filter-list-section'),
	            searchButton: {
	                wrapper: shadowRoot.querySelector('.search-button-wrapper'),
	                svg: {
	                    spinnerLine: shadowRoot.querySelector('.search-button-wrapper .convertable-line'),
	                    spinnerBox: shadowRoot.querySelector('.search-button-wrapper .spin-line-group')
	                }
	            },
	            columnSelect: shadowRoot.querySelector('.column-select'),
	            intent: {
	                column: shadowRoot.querySelector('.intent-wrapper .intent-column'),
	                input: {
	                    wrapper: shadowRoot.querySelector('.intent-wrapper .intent-input-wrapper'),
	                    input: null
	                },
	                submitButton: shadowRoot.querySelector('.intent-wrapper .intent-submit-button'),
	                wrapper: shadowRoot.querySelector('.intent-wrapper')
	            }
	        };
	        this.registerEventListener();
	    }
	    static get observedAttributes() {
	        return ['placeholder'];
	    }
	    attributeChangedCallback(name, oldValue, newValue) {
	        // do something when an attribute has changed
	        this.onAttributeChange(name, newValue);
	    }
	    onAttributeChange(name, value) {
	        switch (name) {
	            case 'placeholder':
	                this.elements.columnSelect.setAttribute('placeholder', value);
	                break;
	        }
	    }
	    setColumnList(columnList) {
	        __classPrivateFieldSet(this, _JBSearchbarWebComponent_columnList, columnList, "f");
	        this.setColumnListSelectOptionList();
	    }
	    setColumnListSelectOptionList() {
	        const currentFilterKeys = this.filterList.map((filter) => {
	            return filter.column.key;
	        });
	        if (this.columnList) {
	            const columnList = this.columnList.filter((column) => {
	                const maxUsageCount = column.maxUsageCount || 1;
	                const usedCount = currentFilterKeys.filter(key => key == column.key).length;
	                if (usedCount >= maxUsageCount) {
	                    return false;
	                }
	                return true;
	            });
	            this.elements.columnSelect.callbacks.getOptionTitle = (column) => { return column.label; };
	            this.elements.columnSelect.optionList = columnList;
	        }
	    }
	    onColumnSelected(e) {
	        const target = e.target;
	        const column = target.value;
	        this.intentColumn.column = column;
	        this.inputState = "FILL_VALUE";
	        this.elements.intent.column.innerHTML = column.label;
	        const inputDom = this.createIntentInputDom(column);
	        this.elements.intent.input.input = inputDom;
	        this.elements.intent.input.wrapper.appendChild(inputDom);
	    }
	    createIntentInputDom(column) {
	        const setIntentActive = (value, err = "") => {
	            this.intentColumn.active = value;
	            if (value) {
	                this.elements.intent.submitButton.classList.add('--active');
	                this.elements.intent.submitButton.setAttribute('title', 'ثبت فیلتر');
	            }
	            else {
	                this.elements.intent.submitButton.classList.remove('--active');
	                this.elements.intent.submitButton.setAttribute('title', err);
	            }
	        };
	        const setIntentColumnValue = (value, label) => {
	            this.intentColumn.value = value;
	            this.intentColumn.label = label;
	        };
	        switch (column.type) {
	            case 'TEXT':
	                return __classPrivateFieldGet(this, _JBSearchbarWebComponent_inputFactory, "f").createTextInput({ onIntentSubmited: this.onIntentSubmited.bind(this), setIntentActive: setIntentActive, setIntentColumnValue });
	            case 'NUMBER':
	                return __classPrivateFieldGet(this, _JBSearchbarWebComponent_inputFactory, "f").createNumberInput({ onIntentSubmited: this.onIntentSubmited.bind(this), setIntentActive: setIntentActive, setIntentColumnValue });
	            case 'SELECT':
	                return __classPrivateFieldGet(this, _JBSearchbarWebComponent_inputFactory, "f").createSelectInput({ column, onIntentSubmited: this.onIntentSubmited.bind(this), setIntentActive: setIntentActive, setIntentColumnValue });
	            case 'DATE':
	                return __classPrivateFieldGet(this, _JBSearchbarWebComponent_inputFactory, "f").createDateInput({ column, onIntentSubmited: this.onIntentSubmited.bind(this), setIntentActive: setIntentActive, setIntentColumnValue });
	        }
	    }
	    onIntentSubmited() {
	        if (this.intentColumn.column && this.intentColumn.value && this.intentColumn.label && this.intentColumn.active) {
	            this.submitIntent(this.intentColumn.column, this.intentColumn.value, this.intentColumn.label);
	            this.inputState = "SELECT_COLUMN";
	            this.intentColumn = {
	                column: null,
	                value: null,
	                label: null,
	                active: false
	            };
	            this.elements.intent.submitButton.classList.remove('--active');
	        }
	    }
	    submitIntent(column, value, label) {
	        this.filterList.push({
	            column: column,
	            value: value,
	            label: label
	        });
	        this.setColumnListSelectOptionList();
	        this.triggerOnChange();
	    }
	    playSearchIconAnimation() {
	        const spinnerLine = this.elements.searchButton.svg.spinnerLine;
	        const spinnerBox = this.elements.searchButton.svg.spinnerBox;
	        const self = this;
	        const ShrinkLineAnimation = spinnerLine.animate([{ d: 'path("M400 400 L 450 450")' }, { d: 'path("M410 410 L 415 415")' }], { id: 'ShrinkLine', duration: 400 });
	        ShrinkLineAnimation.cancel();
	        const shrinkLineFunction = function () {
	            spinnerLine.setAttribute("d", "M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794");
	            curveLineAnimation.play();
	        };
	        ShrinkLineAnimation.onfinish = shrinkLineFunction;
	        const curveLineAnimation = spinnerLine.animate([{ d: 'path("M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794")' }, { d: 'path("M 255 475 A 220 220 0 0 0 475 255")' }], { id: 'CurveLine', duration: 400 });
	        curveLineAnimation.cancel();
	        const curveLineFunction = function () {
	            spinnerLine.setAttribute("d", "M 255 475 A 220 220 0 0 0 475 255");
	            spinAnimation.play();
	        };
	        curveLineAnimation.onfinish = curveLineFunction;
	        const spinAnimation = spinnerBox.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(180deg)' }, { transform: 'rotate(360deg)' }], { id: 'Spin', duration: 1000, iterations: 1 });
	        spinAnimation.cancel();
	        const spinFunction = function () {
	            if (self.isLoading == true) {
	                spinAnimation.play();
	            }
	            else {
	                ReversecurveLineAnimation.play();
	            }
	        };
	        spinAnimation.onfinish = spinFunction;
	        const growLineAnimation = spinnerLine.animate([{ d: 'path("M410 410 L 415 415")' }, { d: 'path("M400 400 L 450 450")' }], { id: 'GrowLine', duration: 400 });
	        growLineAnimation.cancel();
	        const growLineFunction = function () {
	            spinnerLine.setAttribute("d", "M400 400 L 450 450");
	        };
	        growLineAnimation.onfinish = growLineFunction;
	        const ReversecurveLineAnimation = spinnerLine.animate([{ d: 'path("M 255 475 A 220 220 0 0 0 475 255")' }, { d: 'path("M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794")' }], { id: 'ReverseCurveLine', duration: 400 });
	        ReversecurveLineAnimation.cancel();
	        const ReversecurveLineFunction = function () {
	            spinnerLine.setAttribute("d", "M410 410 L 415 415");
	            growLineAnimation.play();
	        };
	        ReversecurveLineAnimation.onfinish = ReversecurveLineFunction;
	        ShrinkLineAnimation.play();
	    }
	    triggerOnChange() {
	        const event = new CustomEvent('change');
	        this.dispatchEvent(event);
	        if (this.searchOnChange) {
	            this.search();
	        }
	    }
	    search() {
	        const event = new CustomEvent('search');
	        this.dispatchEvent(event);
	    }
	}
	_JBSearchbarWebComponent_isLoading = new WeakMap(), _JBSearchbarWebComponent_inputState = new WeakMap(), _JBSearchbarWebComponent_columnList = new WeakMap(), _JBSearchbarWebComponent_inputFactory = new WeakMap(), _JBSearchbarWebComponent_searchOnChange = new WeakMap();
	const myElementNotExists = !customElements.get('jb-searchbar');
	if (myElementNotExists) {
	    window.customElements.define('jb-searchbar', JBSearchbarWebComponent);
	}

	function JBSearchbar(props) {
	  var element = React.useRef();
	  var _useState = React.useState(0),
	    _useState2 = _slicedToArray(_useState, 2),
	    refChangeCount = _useState2[0],
	    refChangeCountSetter = _useState2[1];
	  React.useEffect(function () {
	    refChangeCountSetter(refChangeCount + 1);
	  }, [element.current]);
	  React.useEffect(function () {
	    element.current.columnList = props.columnList;
	  }, [props.columnList]);
	  React.useEffect(function () {
	    if (props.searchOnChange) {
	      element.current.searchOnChange = true;
	    } else {
	      element.current.searchOnChange = false;
	    }
	  }, [props.searchOnChange]);
	  var onSearch = React.useCallback(function () {
	    if (typeof props.onSearch === 'function') {
	      props.onSearch();
	    }
	  });
	  useEvent(element.current, 'search', onSearch);
	  return /*#__PURE__*/React__default["default"].createElement("jb-searchbar", {
	    placeholder: props.placeholder,
	    ref: element
	  });
	}
	JBSearchbar.propTypes = {
	  placeholder: PropTypes__default["default"].string,
	  searchOnChange: PropTypes__default["default"].bool,
	  onSearch: PropTypes__default["default"].func
	};

	return JBSearchbar;

}));
//# sourceMappingURL=JBSearchbar.umd.js.map
