'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('jb-calendar');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

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
const JBCalendar = React__default["default"].forwardRef((props, ref) => {
    const element = React.useRef(null);
    const [refChangeCount, refChangeCountSetter] = React.useState(0);
    React.useImperativeHandle(ref, () => (element ? element.current : {}), [element]);
    React.useEffect(() => {
        refChangeCountSetter(refChangeCount + 1);
    }, [element.current]);
    React.useEffect(() => {
        if (props.inputType) {
            element.current.inputType = props.inputType;
        }
    }, [props.inputType]);
    React.useEffect(() => {
        element.current.setAttribute('direction', props.direction);
    }, [props.direction]);
    React.useEffect(() => {
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
    return (React__default["default"].createElement("jb-calendar", { ref: element }));
});
JBCalendar.propTypes = {
    onSelect: PropTypes__default["default"].func,
    value: PropTypes__default["default"].string,
    jalaliMonthList: PropTypes__default["default"].array,
    inputType: PropTypes__default["default"].oneOf(['GREGORIAN', 'JALALI'])
};

exports.JBCalendar = JBCalendar;
//# sourceMappingURL=JBCalendar.cjs.js.map
