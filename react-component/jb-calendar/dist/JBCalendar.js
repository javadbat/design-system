import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import 'jb-calendar';
import PropTypes from 'prop-types';

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
const JBCalendar = React.forwardRef((props, ref) => {
    let element = useRef(null);
    const [refChangeCount, refChangeCountSetter] = useState(0);
    useImperativeHandle(ref, () => (element ? element.current : {}), [element]);
    useEffect(() => {
        refChangeCountSetter(refChangeCount + 1);
    }, [element.current]);
    useEffect(() => {
        if (props.inputType) {
            element.current.inputType = props.inputType;
        }
    }, [props.inputType]);
    useEffect(() => {
        element.current.setAttribute('direction', props.direction);
    }, [props.direction]);
    useEffect(() => {
        if (props.jalaliMonthList) {
            element.current.setMonthList('JALALI', props.jalaliMonthList);
        }
    }, [props.jalaliMonthList]);
    function onSelect(e) {
        if (props.onSelect && e instanceof CustomEvent) {
            props.onSelect(e);
        }
    }
    useEvent(element.current, 'select', onSelect);
    return (React.createElement("jb-calendar", { ref: element }));
});
JBCalendar.propTypes = {
    onSelect: PropTypes.func,
    value: PropTypes.string,
    jalaliMonthList: PropTypes.array,
    inputType: PropTypes.oneOf(['GREGORIAN', 'JALALI'])
};

export { JBCalendar };
//# sourceMappingURL=JBCalendar.js.map
