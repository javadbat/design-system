(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types'), require('jb-time-input')) :
  typeof define === 'function' && define.amd ? define(['react', 'prop-types', 'jb-time-input'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.JBTimeInput = factory(global.React, global.PropTypes));
})(this, (function (React, PropTypes) { 'use strict';

  function useEvent(dom, event, handler, passive = false) {
      React.useEffect(() => {
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
  const JBTimeInput = React.forwardRef((props, ref) => {
      const element = React.useRef(null);
      const [refChangeCount, refChangeCountSetter] = React.useState(0);
      React.useImperativeHandle(ref, () => (element ? element.current : {}), [element]);
      React.useEffect(() => {
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
      React.useEffect(() => {
          let value = props.value;
          if (props.value == null || props.value === undefined) {
              value = '00:00:00';
          }
          element.current.value = value;
      }, [props.value]);
      React.useEffect(() => {
          element.current?.setAttribute('direction', props.direction);
      }, [props.direction]);
      React.useEffect(() => {
          if (Array.isArray(props.validationList) && element.current) {
              element.current.validation.list = props.validationList;
          }
      }, [props.validationList]);
      React.useEffect(() => {
          if (element.current, props.secondEnabled !== null && props.secondEnabled !== undefined) {
              element.current.secondEnabled = props.secondEnabled;
          }
      }, [props.secondEnabled]);
      React.useEffect(() => {
          if (typeof props.frontalZero == "boolean") {
              element.current.frontalZero = props.frontalZero;
          }
      }, [props.frontalZero]);
      React.useEffect(() => {
          if (Array.isArray(props.optionalUnits)) {
              element.current.optionalUnits = props.optionalUnits;
          }
      }, [props.optionalUnits]);
      useEvent(element.current, 'change', onChange);
      useEvent(element.current, 'keydown', onKeydown);
      useEvent(element.current, 'keyup', onKeyup);
      useEvent(element.current, 'focus', onFocus);
      useEvent(element.current, 'blur', onBlur);
      useEvent(element.current, 'enter', onEnter);
      return (React.createElement("jb-time-input", { placeholder: props.placeholder, ref: element, class: props.className, label: props.label, message: props.message, "close-button-text": props.closeButtonText }));
  });
  JBTimeInput.propTypes = {
      label: PropTypes.string,
      closeButtonText: PropTypes.string,
      value: PropTypes.string,
      onChange: PropTypes.func,
      onKeyUp: PropTypes.func,
      onEnter: PropTypes.func,
      className: PropTypes.string,
      placeholder: PropTypes.string,
      direction: PropTypes.string,
      validationList: PropTypes.array,
      secondEnabled: PropTypes.bool,
      frontalZero: PropTypes.bool,
      optionalUnits: PropTypes.array
  };

  return JBTimeInput;

}));
//# sourceMappingURL=JBTimeInput.umd.js.map
