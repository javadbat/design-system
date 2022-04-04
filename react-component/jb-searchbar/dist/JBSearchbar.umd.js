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
	  React.useEffect(function () {
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

	var HTML = "<div class=\"jb-searchbar-web-component\">\r\n    <div class=\"search-dynamic-wrapper\">\r\n        <section class=\"filter-list-section\"></section>\r\n        <section class=\"filter-input-section\">\r\n            <div class=\"column-select-wrapper\">\r\n                 <jb-select class=\"column-select\" placeholder=\"\"></jb-select>\r\n            </div>\r\n            <div class=\"intent-wrapper --hide\">\r\n                <div class=\"intent-column\"></div>\r\n                <div class=\"intent-input-wrapper\"></div>\r\n                <div class=\"intent-submit-button\">\r\n                    <svg x=\"0px\" y=\"0px\" viewBox=\"0 0 493.464 493.464\" space=\"preserve\">\r\n                        <g>\r\n                            <g>\r\n                                <path d=\"M246.736,0C110.692,0,0.004,110.68,0.004,246.732c0,136.06,110.688,246.732,246.732,246.732    c136.048,0,246.724-110.672,246.724-246.732C493.456,110.68,382.78,0,246.736,0z M360.524,208.716L230.98,338.268    c-2.82,2.824-7.816,2.824-10.64,0l-86.908-86.912c-1.412-1.416-2.192-3.3-2.192-5.324c0.004-2.016,0.784-3.912,2.192-5.336    l11.108-11.104c1.412-1.408,3.3-2.18,5.328-2.18c2.016,0,3.908,0.772,5.316,2.18l67.752,67.752c1.5,1.516,3.94,1.516,5.444,0    l110.392-110.392c2.824-2.824,7.828-2.824,10.644,0l11.108,11.124c1.412,1.4,2.208,3.304,2.208,5.308    C362.732,205.412,361.936,207.3,360.524,208.716z\"/>\r\n                            </g>\r\n                        </g>\r\n                    </svg>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <div class=\"search-button-wrapper\">\r\n        <svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <circle cx=\"255\" cy=\"255\" r=\"170\"></circle>\r\n            <g class=\"spin-line-group\">\r\n                <rect x=\"0\" y=\"0\" width=\"512\" height=\"512\"/>\r\n                <path class=\"convertable-line\" d=\"M400 400 L 450 450\"></path>\r\n            </g>\r\n        </svg>\r\n    </div>\r\n</div>";

	var css_248z = ".jb-searchbar-web-component {\n  width: 100%;\n  height: auto;\n  min-height: 48px;\n  display: flex; }\n  .jb-searchbar-web-component .search-dynamic-wrapper {\n    width: calc(100% - 48px);\n    height: auto;\n    min-height: 48px;\n    display: inline-flex;\n    flex-wrap: wrap; }\n    .jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section {\n      display: inline-flex;\n      align-items: center;\n      flex-wrap: wrap;\n      row-gap: 8px;\n      column-gap: 8px; }\n      .jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item {\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        margin: 0px 0px;\n        padding: 4px 8px;\n        background-color: #408cff;\n        color: #fff;\n        border-radius: 36px; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item .delete-btn {\n          cursor: pointer;\n          display: block;\n          padding: 4px 8px 0px 8px;\n          box-sizing: border-box; }\n          .jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item .delete-btn svg {\n            fill: #fff;\n            width: 12px;\n            height: 12px; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-list-section .filter-item .filter-label {\n          display: block;\n          box-sizing: border-box; }\n    .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section {\n      --jb-select-margin: 0 0;\n      --jb-select-border-radius: 24px;\n      --jb-select-border-color: transparent;\n      --jb-select-border-color-selected: transparent;\n      --jb-select-bgcolor: #fff;\n      --jb-select-list-box-shadow: 0px 15px 20px -6px #d8d8d8;\n      display: inline-block; }\n      .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .column-select-wrapper {\n        width: 240px; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .column-select-wrapper.--hide {\n          display: none; }\n      .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper {\n        display: flex;\n        align-items: center; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-input-wrapper {\n          width: 180px;\n          --jb-input-margin: 0 0;\n          --jb-input-border-radius: 0px;\n          --jb-input-border-color: transparent;\n          --jb-input-border-color-focus: transparent;\n          --jb-input-bgcolor: #fff;\n          --jb-input-message-box-display:none;\n          --jb-select-margin: 0 0;\n          --jb-select-border-radius: 24px;\n          --jb-select-border-color: transparent;\n          --jb-select-border-color-selected: transparent;\n          --jb-select-bgcolor: #fff;\n          --jb-date-input-margin: 0 0;\n          --jb-date-input-border-radius: 0px;\n          --jb-date-input-border-color: transparent;\n          --jb-date-input-border-color-focus: transparent;\n          --jb-date-input-bgcolor: #fff;\n          --jb-date-input-message-box-display: none; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button {\n          width: 32px;\n          height: 32px;\n          float: right;\n          padding: 4px 0 4px 0;\n          cursor: not-allowed; }\n          .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button.--active {\n            cursor: pointer; }\n            .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button.--active svg {\n              fill: #28BD48; }\n          .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper .intent-submit-button svg {\n            fill: #929292; }\n        .jb-searchbar-web-component .search-dynamic-wrapper .filter-input-section .intent-wrapper.--hide {\n          display: none; }\n  .jb-searchbar-web-component .search-button-wrapper {\n    width: 48px;\n    height: auto;\n    min-height: 48px;\n    cursor: pointer; }\n    .jb-searchbar-web-component .search-button-wrapper svg {\n      width: 36px;\n      height: 36px;\n      margin: 4px 8px;\n      box-sizing: border-box;\n      background-color: transparent; }\n      .jb-searchbar-web-component .search-button-wrapper svg circle {\n        stroke: #7b7b7b;\n        fill: white;\n        stroke-width: 25px; }\n      .jb-searchbar-web-component .search-button-wrapper svg .spin-line-group {\n        transform-origin: center;\n        fill: transparent; }\n        .jb-searchbar-web-component .search-button-wrapper svg .spin-line-group rect {\n          fill: transparent; }\n        .jb-searchbar-web-component .search-button-wrapper svg .spin-line-group path {\n          fill: none;\n          stroke: #9b9b9b;\n          stroke-linecap: round;\n          stroke-linejoin: round;\n          transition: 0.2s;\n          stroke-width: 35px;\n          transform-origin: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkpCU2VhcmNoYmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhLEVBQUU7RUFDZjtJQUNFLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixlQUFlLEVBQUU7SUFDakI7TUFDRSxvQkFBb0I7TUFDcEIsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixZQUFZO01BQ1osZUFBZSxFQUFFO01BQ2pCO1FBQ0Usb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsV0FBVztRQUNYLG1CQUFtQixFQUFFO1FBQ3JCO1VBQ0UsZUFBZTtVQUNmLGNBQWM7VUFDZCx3QkFBd0I7VUFDeEIsc0JBQXNCLEVBQUU7VUFDeEI7WUFDRSxVQUFVO1lBQ1YsV0FBVztZQUNYLFlBQVksRUFBRTtRQUNsQjtVQUNFLGNBQWM7VUFDZCxzQkFBc0IsRUFBRTtJQUM5QjtNQUNFLHVCQUF1QjtNQUN2QiwrQkFBK0I7TUFDL0IscUNBQXFDO01BQ3JDLDhDQUE4QztNQUM5Qyx5QkFBeUI7TUFDekIsdURBQXVEO01BQ3ZELHFCQUFxQixFQUFFO01BQ3ZCO1FBQ0UsWUFBWSxFQUFFO1FBQ2Q7VUFDRSxhQUFhLEVBQUU7TUFDbkI7UUFDRSxhQUFhO1FBQ2IsbUJBQW1CLEVBQUU7UUFDckI7VUFDRSxZQUFZO1VBQ1osc0JBQXNCO1VBQ3RCLDZCQUE2QjtVQUM3QixvQ0FBb0M7VUFDcEMsMENBQTBDO1VBQzFDLHdCQUF3QjtVQUN4QixtQ0FBbUM7VUFDbkMsdUJBQXVCO1VBQ3ZCLCtCQUErQjtVQUMvQixxQ0FBcUM7VUFDckMsOENBQThDO1VBQzlDLHlCQUF5QjtVQUN6QiwyQkFBMkI7VUFDM0Isa0NBQWtDO1VBQ2xDLHlDQUF5QztVQUN6QywrQ0FBK0M7VUFDL0MsNkJBQTZCO1VBQzdCLHlDQUF5QyxFQUFFO1FBQzdDO1VBQ0UsV0FBVztVQUNYLFlBQVk7VUFDWixZQUFZO1VBQ1osb0JBQW9CO1VBQ3BCLG1CQUFtQixFQUFFO1VBQ3JCO1lBQ0UsZUFBZSxFQUFFO1lBQ2pCO2NBQ0UsYUFBYSxFQUFFO1VBQ25CO1lBQ0UsYUFBYSxFQUFFO1FBQ25CO1VBQ0UsYUFBYSxFQUFFO0VBQ3ZCO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFFO0lBQ2pCO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixlQUFlO01BQ2Ysc0JBQXNCO01BQ3RCLDZCQUE2QixFQUFFO01BQy9CO1FBQ0UsZUFBZTtRQUNmLFdBQVc7UUFDWCxrQkFBa0IsRUFBRTtNQUN0QjtRQUNFLHdCQUF3QjtRQUN4QixpQkFBaUIsRUFBRTtRQUNuQjtVQUNFLGlCQUFpQixFQUFFO1FBQ3JCO1VBQ0UsVUFBVTtVQUNWLGVBQWU7VUFDZixxQkFBcUI7VUFDckIsc0JBQXNCO1VBQ3RCLGdCQUFnQjtVQUNoQixrQkFBa0I7VUFDbEIsd0JBQXdCLEVBQUUiLCJmaWxlIjoiSkJTZWFyY2hiYXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qYi1zZWFyY2hiYXItd2ViLWNvbXBvbmVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIGRpc3BsYXk6IGZsZXg7IH1cbiAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDhweCk7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwOyB9XG4gICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItbGlzdC1zZWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIHJvdy1nYXA6IDhweDtcbiAgICAgIGNvbHVtbi1nYXA6IDhweDsgfVxuICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItbGlzdC1zZWN0aW9uIC5maWx0ZXItaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4O1xuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA4Y2ZmO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzZweDsgfVxuICAgICAgICAuamItc2VhcmNoYmFyLXdlYi1jb21wb25lbnQgLnNlYXJjaC1keW5hbWljLXdyYXBwZXIgLmZpbHRlci1saXN0LXNlY3Rpb24gLmZpbHRlci1pdGVtIC5kZWxldGUtYnRuIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDhweCAwcHggOHB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgICAgICAgICAuamItc2VhcmNoYmFyLXdlYi1jb21wb25lbnQgLnNlYXJjaC1keW5hbWljLXdyYXBwZXIgLmZpbHRlci1saXN0LXNlY3Rpb24gLmZpbHRlci1pdGVtIC5kZWxldGUtYnRuIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7IH1cbiAgICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItbGlzdC1zZWN0aW9uIC5maWx0ZXItaXRlbSAuZmlsdGVyLWxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItaW5wdXQtc2VjdGlvbiB7XG4gICAgICAtLWpiLXNlbGVjdC1tYXJnaW46IDAgMDtcbiAgICAgIC0tamItc2VsZWN0LWJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgICAtLWpiLXNlbGVjdC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgLS1qYi1zZWxlY3QtYm9yZGVyLWNvbG9yLXNlbGVjdGVkOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tamItc2VsZWN0LWJnY29sb3I6ICNmZmY7XG4gICAgICAtLWpiLXNlbGVjdC1saXN0LWJveC1zaGFkb3c6IDBweCAxNXB4IDIwcHggLTZweCAjZDhkOGQ4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAuamItc2VhcmNoYmFyLXdlYi1jb21wb25lbnQgLnNlYXJjaC1keW5hbWljLXdyYXBwZXIgLmZpbHRlci1pbnB1dC1zZWN0aW9uIC5jb2x1bW4tc2VsZWN0LXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogMjQwcHg7IH1cbiAgICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItaW5wdXQtc2VjdGlvbiAuY29sdW1uLXNlbGVjdC13cmFwcGVyLi0taGlkZSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItaW5wdXQtc2VjdGlvbiAuaW50ZW50LXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgICAgIC5qYi1zZWFyY2hiYXItd2ViLWNvbXBvbmVudCAuc2VhcmNoLWR5bmFtaWMtd3JhcHBlciAuZmlsdGVyLWlucHV0LXNlY3Rpb24gLmludGVudC13cmFwcGVyIC5pbnRlbnQtaW5wdXQtd3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgIC0tamItaW5wdXQtbWFyZ2luOiAwIDA7XG4gICAgICAgICAgLS1qYi1pbnB1dC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgLS1qYi1pbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIC0tamItaW5wdXQtYm9yZGVyLWNvbG9yLWZvY3VzOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAtLWpiLWlucHV0LWJnY29sb3I6ICNmZmY7XG4gICAgICAgICAgLS1qYi1pbnB1dC1tZXNzYWdlLWJveC1kaXNwbGF5Om5vbmU7XG4gICAgICAgICAgLS1qYi1zZWxlY3QtbWFyZ2luOiAwIDA7XG4gICAgICAgICAgLS1qYi1zZWxlY3QtYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgICAtLWpiLXNlbGVjdC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIC0tamItc2VsZWN0LWJvcmRlci1jb2xvci1zZWxlY3RlZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLS1qYi1zZWxlY3QtYmdjb2xvcjogI2ZmZjtcbiAgICAgICAgICAtLWpiLWRhdGUtaW5wdXQtbWFyZ2luOiAwIDA7XG4gICAgICAgICAgLS1qYi1kYXRlLWlucHV0LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICAtLWpiLWRhdGUtaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAtLWpiLWRhdGUtaW5wdXQtYm9yZGVyLWNvbG9yLWZvY3VzOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAtLWpiLWRhdGUtaW5wdXQtYmdjb2xvcjogI2ZmZjtcbiAgICAgICAgICAtLWpiLWRhdGUtaW5wdXQtbWVzc2FnZS1ib3gtZGlzcGxheTogbm9uZTsgfVxuICAgICAgICAuamItc2VhcmNoYmFyLXdlYi1jb21wb25lbnQgLnNlYXJjaC1keW5hbWljLXdyYXBwZXIgLmZpbHRlci1pbnB1dC1zZWN0aW9uIC5pbnRlbnQtd3JhcHBlciAuaW50ZW50LXN1Ym1pdC1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDAgNHB4IDA7XG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuICAgICAgICAgIC5qYi1zZWFyY2hiYXItd2ViLWNvbXBvbmVudCAuc2VhcmNoLWR5bmFtaWMtd3JhcHBlciAuZmlsdGVyLWlucHV0LXNlY3Rpb24gLmludGVudC13cmFwcGVyIC5pbnRlbnQtc3VibWl0LWJ1dHRvbi4tLWFjdGl2ZSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgICAgICAgIC5qYi1zZWFyY2hiYXItd2ViLWNvbXBvbmVudCAuc2VhcmNoLWR5bmFtaWMtd3JhcHBlciAuZmlsdGVyLWlucHV0LXNlY3Rpb24gLmludGVudC13cmFwcGVyIC5pbnRlbnQtc3VibWl0LWJ1dHRvbi4tLWFjdGl2ZSBzdmcge1xuICAgICAgICAgICAgICBmaWxsOiAjMjhCRDQ4OyB9XG4gICAgICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtZHluYW1pYy13cmFwcGVyIC5maWx0ZXItaW5wdXQtc2VjdGlvbiAuaW50ZW50LXdyYXBwZXIgLmludGVudC1zdWJtaXQtYnV0dG9uIHN2ZyB7XG4gICAgICAgICAgICBmaWxsOiAjOTI5MjkyOyB9XG4gICAgICAgIC5qYi1zZWFyY2hiYXItd2ViLWNvbXBvbmVudCAuc2VhcmNoLWR5bmFtaWMtd3JhcHBlciAuZmlsdGVyLWlucHV0LXNlY3Rpb24gLmludGVudC13cmFwcGVyLi0taGlkZSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAuamItc2VhcmNoYmFyLXdlYi1jb21wb25lbnQgLnNlYXJjaC1idXR0b24td3JhcHBlciB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtYnV0dG9uLXdyYXBwZXIgc3ZnIHtcbiAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgbWFyZ2luOiA0cHggOHB4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gICAgICAuamItc2VhcmNoYmFyLXdlYi1jb21wb25lbnQgLnNlYXJjaC1idXR0b24td3JhcHBlciBzdmcgY2lyY2xlIHtcbiAgICAgICAgc3Ryb2tlOiAjN2I3YjdiO1xuICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyNXB4OyB9XG4gICAgICAuamItc2VhcmNoYmFyLXdlYi1jb21wb25lbnQgLnNlYXJjaC1idXR0b24td3JhcHBlciBzdmcgLnNwaW4tbGluZS1ncm91cCB7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgZmlsbDogdHJhbnNwYXJlbnQ7IH1cbiAgICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtYnV0dG9uLXdyYXBwZXIgc3ZnIC5zcGluLWxpbmUtZ3JvdXAgcmVjdCB7XG4gICAgICAgICAgZmlsbDogdHJhbnNwYXJlbnQ7IH1cbiAgICAgICAgLmpiLXNlYXJjaGJhci13ZWItY29tcG9uZW50IC5zZWFyY2gtYnV0dG9uLXdyYXBwZXIgc3ZnIC5zcGluLWxpbmUtZ3JvdXAgcGF0aCB7XG4gICAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgICBzdHJva2U6ICM5YjliOWI7XG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICBzdHJva2Utd2lkdGg6IDM1cHg7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyOyB9XG4iXX0= */";

	class InputFactory {
	    constructor() {
	        
	    }
	    createTextInput({ onIntentSubmited, setIntentColumnValue, setIntentActive }) {
	        const input = document.createElement('jb-input');
	        input.addEventListener('keydown', (e) => {
	            if (e.keyCode == 13 && e.target.value.trim() != "") {
	                onIntentSubmited();
	            }
	        });
	        input.addEventListener('keyup', (e) => {
	            setIntentColumnValue(e.target.value, e.target.value);
	            if (e.target.validation.isValid) {
	                setIntentActive(true);
	            } else {
	                setIntentActive(false, e.target.validation.message);
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
	            if (e.keyCode == 13 && e.target.value.trim() != "") {
	                onIntentSubmited();
	            }
	        });
	        input.addEventListener('keyup', (e) => {
	            const value = parseInt(e.target.value);
	            setIntentColumnValue(value, e.target.value);
	            if (e.target.validation.isValid) {
	                setIntentActive(true);
	            } else {
	                setIntentActive(false, e.target.validation.message);
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
	            let label = "";
	            label = e.target.textValue;
	            setIntentColumnValue(e.target.value, label);
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
	            if (e.target.validation.isValid) {
	                setIntentActive(true);
	                const value = e.target.value;
	                const label = e.target.inputValue;
	                setIntentColumnValue(value, label);
	            } else {
	                setIntentActive(false, e.target.validation.message);
	            }
	        });
	        dateInput.addEventListener('select', (e) => {
	            setIntentActive(true);
	            const value = e.target.value;
	            const label = e.target.inputValue;
	            setIntentColumnValue(value, label);
	            onIntentSubmited();
	        });
	        return dateInput;
	    }
	}

	class JBSearchbarWebComponent extends HTMLElement {
	    get isLoading() {
	        return this._isLoading;
	    }
	    set isLoading(value) {
	        if ((!this._isLoading) && value) {
	            this.playSearchIconAnimation();
	        }
	        this._isLoading = value;

	    }
	    get inputState() {
	        return this._inputState;
	    }
	    set inputState(value) {
	        if (value == "SELECT_COLUMN") {
	            this.elements.columnSelect.value = null;
	            this.elements.intent.wrapper.classList.add('--hide');
	            this.elements.columnSelect.parentElement.classList.remove('--hide');
	            this.elements.columnSelect.focus();
	        } else if (value == "FILL_VALUE") {
	            this.elements.intent.wrapper.classList.remove('--hide');
	            this.elements.intent.input.wrapper.innerHTML = "";
	            this.elements.columnSelect.parentElement.classList.add('--hide');
	        }
	        this._inputState = value;
	    }
	    get value() {
	        return this.filterList.map(x => ({ column: x.column, value: x.value }));
	    }
	    get columnList() {
	        return this._columnList;
	    }
	    set columnList(value) {
	        //TODO: check validation of column to be array ind has neccessary prop
	        this.setColumnList(value);
	    }
	    constructor() {
	        super();
	        this.initWebComponent();
	        this._inputFactory = new InputFactory();
	    }
	    registerEventListener() {
	        this.elements.columnSelect.addEventListener('change', this.onColumnSelected.bind(this));
	        this.elements.intent.submitButton.addEventListener('click', this.onIntentSubmited.bind(this));
	        this.elements.columnSelect.addEventListener('init', () => {
	            this.setColumnList();
	            this.elements.columnSelect.focus();
	        });
	        this.elements.searchButton.wrapper.addEventListener('click', this.search.bind(this));

	    }
	    initProp() {
	        this.intentColumn = {
	            column: null,
	            value: null,
	            label: null,
	            active: false
	        };
	        this._columnList = [];
	        this._inputState = "SELECT_COLUMN";
	        this.filterList = this.createFilterList();

	    }
	    createFilterList() {
	        const flProxy = new Proxy([], {
	            get: (target, property, receiver) => {
	                if (property == "splice") {
	                    const origMethod = target[property];
	                    const customSplice = (...args) => {
	                        this.elements.filterListWrapper.children[args[0]].remove();
	                        //becuase we apply function like this the get wont call again in proxy
	                        //we apply into proxy not orginal obj so setter hooks for splice in setter do their job
	                        return origMethod.apply(receiver, args);
	                    };
	                    return customSplice;
	                }
	                return target[property];
	            },
	            set: (target, property, value, receiver) => {
	                if (!(property == "length")) {
	                    if (parseInt(property) == target.length) {
	                        //when push
	                        const dom = this.createFilterDOM(value);
	                        value.dom = dom;
	                        this.elements.filterListWrapper.appendChild(dom);
	                    }
	                    if (!isNaN(property) && parseInt(property) < target.length) {
	                        //when splice
	                        //we do dom delete in proxy getter
	                        value.dom.filterIndex = parseInt(property);
	                    }
	                }
	                target[property] = value;
	                return true;

	            }
	        });
	        return flProxy;
	    }
	    createFilterDOM({ label, column }) {
	        const dom = document.createElement('div');
	        dom.classList.add('filter-item');
	        const deleteButtonDom = document.createElement('div');
	        deleteButtonDom.classList.add('delete-btn');
	        deleteButtonDom.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 298.667 298.667" style="enable-background:new 0 0 298.667 298.667;" xml:space="preserve"><g><polygon points="298.667,30.187 268.48,0 149.333,119.147 30.187,0 0,30.187 119.147,149.333 0,268.48 30.187,298.667     149.333,179.52 268.48,298.667 298.667,268.48 179.52,149.333   "/></g></svg>`;
	        const labelDom = document.createElement('div');
	        labelDom.classList.add('filter-label');
	        labelDom.innerHTML = `${column.label}: ${label}`;
	        const filterIndex = this.filterList.length;
	        dom.filterIndex = filterIndex;
	        deleteButtonDom.addEventListener('click', (e) => {
	            this.deleteFilter(e.currentTarget.parentElement.filterIndex);
	        });
	        dom.appendChild(deleteButtonDom);
	        dom.appendChild(labelDom);
	        return dom;

	    }
	    deleteFilter(filterIndex) {
	        this.filterList.splice(filterIndex, 1);
	        this.setColumnListSelectOptionList();
	    }
	    connectedCallback() {
	        // standard web component event that called when all of dom is binded
	        this.callOnLoadEvent();
	        this.initProp();

	    }
	    callOnLoadEvent() {
	        var event = new CustomEvent('load', { bubbles: true, composed: true });
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

	            columnSelect: this.shadowRoot.querySelector('.column-select'),
	            intent: {
	                column: this.shadowRoot.querySelector('.intent-wrapper .intent-column'),
	                input: {
	                    wrapper: this.shadowRoot.querySelector('.intent-wrapper .intent-input-wrapper'),
	                    input: null
	                },
	                submitButton: this.shadowRoot.querySelector('.intent-wrapper .intent-submit-button'),
	                wrapper: this.shadowRoot.querySelector('.intent-wrapper')
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
	        this._columnList = columnList;
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
	            this.elements.columnSelect.callbacks.getOptionTitle = (column) => { return column.label };
	            this.elements.columnSelect.optionList = columnList;
	        }

	    }
	    onColumnSelected(e) {
	        const column = e.target.value;
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
	            } else {
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
	                return this._inputFactory.createTextInput({ onIntentSubmited: this.onIntentSubmited.bind(this), setIntentActive: setIntentActive, setIntentColumnValue });
	            case 'NUMBER':
	                return this._inputFactory.createNumberInput({ onIntentSubmited: this.onIntentSubmited.bind(this), setIntentActive: setIntentActive, setIntentColumnValue });
	            case 'SELECT':
	                return this._inputFactory.createSelectInput({ column, onIntentSubmited: this.onIntentSubmited.bind(this), setIntentActive: setIntentActive, setIntentColumnValue });
	            case 'DATE':
	                return this._inputFactory.createDateInput({ column, onIntentSubmited: this.onIntentSubmited.bind(this), setIntentActive: setIntentActive, setIntentColumnValue });
	        }
	    }
	    onIntentSubmited() {
	        if (this.intentColumn.active) {
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
	    }
	    playSearchIconAnimation() {
	        const spinnerLine = this.elements.searchButton.svg.spinnerLine;
	        const spinnerBox = this.elements.searchButton.svg.spinnerBox;
	        var self = this;
	        var ShrinkLineAnimation = spinnerLine.animate([{ d: 'path("M400 400 L 450 450")' }, { d: 'path("M410 410 L 415 415")' }], { id: 'ShrinkLine', duration: 400 });
	        ShrinkLineAnimation.cancel();
	        var shrinkLineFunction = function (animation) {
	            spinnerLine.setAttribute("d", "M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794");
	            curveLineAnimation.play();
	        };
	        ShrinkLineAnimation.onfinish = shrinkLineFunction;
	        var curveLineAnimation = spinnerLine.animate([{ d: 'path("M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794")' }, { d: 'path("M 255 475 A 220 220 0 0 0 475 255")' }], { id: 'CurveLine', duration: 400 });
	        curveLineAnimation.cancel();
	        var curveLineFunction = function (animation) {
	            spinnerLine.setAttribute("d", "M 255 475 A 220 220 0 0 0 475 255");
	            spinAnimation.play();
	        };
	        curveLineAnimation.onfinish = curveLineFunction;
	        var spinAnimation = spinnerBox.animate([{ transform: 'rotate(0deg)' }, { transform: 'rotate(180deg)' }, { transform: 'rotate(360deg)' }], { id: 'Spin', duration: 1000, iterations: 1 });
	        spinAnimation.cancel();
	        var spinFunction = function (animation) {
	            if (self.isLoading == true) {
	                spinAnimation.play();
	            } else {
	                ReversecurveLineAnimation.play();
	            }
	        };
	        spinAnimation.onfinish = spinFunction;
	        var growLineAnimation = spinnerLine.animate([{ d: 'path("M410 410 L 415 415")' }, { d: 'path("M400 400 L 450 450")' }], { id: 'GrowLine', uration: 400 });
	        growLineAnimation.cancel();
	        var growLineFunction = function (animation) {
	            spinnerLine.setAttribute("d", "M400 400 L 450 450");
	        };
	        growLineAnimation.onfinish = growLineFunction;

	        var ReversecurveLineAnimation = spinnerLine.animate([{ d: 'path("M 255 475 A 220 220 0 0 0 475 255")' }, { d: 'path("M 407.82484150097946 413.25475607450323 A 220 220 0 0 0 413.25475607450323 407.8248415009794")' }], { id: 'ReverseCurveLine', duration: 400 });
	        ReversecurveLineAnimation.cancel();
	        let ReversecurveLineFunction = function (animation) {
	            spinnerLine.setAttribute("d", "M410 410 L 415 415");
	            growLineAnimation.play();
	        };
	        ReversecurveLineAnimation.onfinish = ReversecurveLineFunction;
	        ShrinkLineAnimation.play();
	    }
	    search() {
	        const event = new CustomEvent('search');
	        this.dispatchEvent(event);
	    }
	}
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
