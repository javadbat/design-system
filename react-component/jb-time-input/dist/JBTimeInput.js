import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import 'jb-time-input';

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

// eslint-disable-next-line react/display-name
const JBTimeInput = React.forwardRef((props, ref) => {
    const element = useRef(null);
    const [refChangeCount, refChangeCountSetter] = useState(0);
    useImperativeHandle(ref, () => (element ? element.current : {}), [element]);
    useEffect(() => {
        refChangeCountSetter(refChangeCount + 1);
    }, [element.current]);
    function onChange(e) {
        if (typeof props.onChange == "function") {
            props.onChange(e);
        }
    }
    function onKeydown(e) {
        if (typeof props.onKeyDown == "function") {
            props.onKeyDown(e);
        }
    }
    function onKeyup(e) {
        if (typeof props.onKeyUp == "function") {
            props.onKeyUp(e);
        }
    }
    function onKeyPress(e) {
        if (typeof props.onKeyPress == "function") {
            props.onKeyPress(e);
        }
    }
    function onEnter(e) {
        if (typeof props.onEnter == "function") {
            props.onEnter(e);
        }
    }
    function onInput(e) {
        if (typeof props.onInput == "function") {
            props.onInput(e);
        }
    }
    function onBeforeinput(e) {
        if (typeof props.onInput == "function") {
            props.onInput(e);
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
    useEffect(() => {
        let value = props.value;
        if (props.value == null || props.value === undefined) {
            value = '00:00:00';
        }
        element.current.value = value;
    }, [props.value]);
    useEffect(() => {
        element.current?.setAttribute('direction', props.direction);
    }, [props.direction]);
    useEffect(() => {
        if (Array.isArray(props.validationList) && element.current) {
            element.current.validation.list = props.validationList;
        }
    }, [props.validationList]);
    useEffect(() => {
        if (element.current, props.secondEnabled !== null && props.secondEnabled !== undefined) {
            element.current.secondEnabled = props.secondEnabled;
        }
    }, [props.secondEnabled]);
    useEffect(() => {
        if (typeof props.frontalZero == "boolean") {
            element.current.frontalZero = props.frontalZero;
        }
    }, [props.frontalZero]);
    useEffect(() => {
        if (Array.isArray(props.optionalUnits)) {
            element.current.optionalUnits = props.optionalUnits;
        }
    }, [props.optionalUnits]);
    useEffect(() => {
        if (props.showPersianNumber !== null && props.showPersianNumber !== undefined) {
            element.current.showPersianNumber = props.showPersianNumber;
        }
    }, [props.showPersianNumber]);
    useEvent(element.current, 'change', onChange);
    useEvent(element.current, 'keydown', onKeydown);
    useEvent(element.current, 'keypress', onKeyPress);
    useEvent(element.current, 'keyup', onKeyup);
    useEvent(element.current, 'focus', onFocus);
    useEvent(element.current, 'blur', onBlur);
    useEvent(element.current, 'input', onInput);
    useEvent(element.current, 'beforeinput', onBeforeinput);
    useEvent(element.current, 'enter', onEnter);
    return (React.createElement("jb-time-input", { placeholder: props.placeholder, ref: element, class: props.className, label: props.label, message: props.message, "close-button-text": props.closeButtonText }));
});

export { JBTimeInput as default };
//# sourceMappingURL=JBTimeInput.js.map
