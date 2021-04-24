(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('../../../web-component/jb-button/dist/JBButton')) :
    typeof define === 'function' && define.amd ? define(['react', 'prop-types', '../../../web-component/jb-button/dist/JBButton'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.JBButton = factory(global.React, global.PropTypes));
}(this, (function (React, PropTypes) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

    function JBButton(props) {
      var buttonElement = React.useRef();
      React.useEffect(function () {
        if (typeof props.onClick == "function") {
          buttonElement.current.addEventListener('click', props.onClick, {});
        }

        return function () {
        };
      }, []);
      React.useEffect(function () {
        buttonElement.current.isLoading = props.isLoading;
      }, [props.isLoading]);
      return /*#__PURE__*/React__default['default'].createElement("jb-button", {
        ref: buttonElement,
        "loading-text": props.loadingText ? props.loadingText : '',
        type: props.type ? props.type : 'primary',
        "class": props.className
      }, props.children);
    }

    JBButton.propTypes = {
      type: PropTypes__default['default'].string,
      onClick: PropTypes__default['default'].func,
      isLoading: PropTypes__default['default'].bool,
      className: PropTypes__default['default'].string,
      loadingText: PropTypes__default['default'].string
    };

    return JBButton;

})));
//# sourceMappingURL=JBButton.umd.js.map
