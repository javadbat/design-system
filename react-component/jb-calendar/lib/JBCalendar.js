import React, { useRef, useEffect, useState, useImperativeHandle } from 'react';
import 'jb-calendar';
import { useEvent } from '../../custom-hooks/UseEvent';
import PropTypes from 'prop-types';
// eslint-disable-next-line react/display-name
const JBCalendar = React.forwardRef((props, ref) => {
    let element = useRef();
    const [refChangeCount, refChangeCountSetter] = useState(0);
    useImperativeHandle(
        ref,
        () => (element ? element.current : {}),
        [element],
    );
    useEffect(() => {
        refChangeCountSetter(refChangeCount + 1);
    }, [element.current]);
    useEffect(() => {
        if (props.inputType) {
            element.current.inputType = props.inputType;
        }
    }, [props.inputType]);
    function onSelect(e) {
        if (props.onSelect && e instanceof FocusEvent) {
            props.onSelect(e);
        }
    }
    useEvent(element.current, 'select', onSelect);
    return (
        <jb-calendar ref={element}></jb-calendar>
    );
});
JBCalendar.propTypes = {
    onSelect: PropTypes.func,
    value: PropTypes.string,
    inputType: PropTypes.oneOf(['GREGORIAN', 'JALALI'])
};
export default JBCalendar;
