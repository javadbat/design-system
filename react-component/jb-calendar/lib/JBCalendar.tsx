import React, { useRef, useEffect, useState, useImperativeHandle } from 'react';
import 'jb-calendar';
// eslint-disable-next-line no-duplicate-imports
import { JBCalendarWebComponent } from 'jb-calendar';
import { useEvent } from '../../../common/hooks/use-event';
import PropTypes from 'prop-types';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'jb-calendar': JBCalendarType;
    }
    interface JBCalendarType extends React.DetailedHTMLProps<React.HTMLAttributes<JBCalendarWebComponent>, JBCalendarWebComponent> {
      "class"?: string,
      "type"?: string,
      "label"?:string,
      "message"?:string,
      "placeholder"?:string,
    }
  }
}
// eslint-disable-next-line react/display-name
const JBCalendar = React.forwardRef((props:any, ref) => {
  const element = useRef<JBCalendarWebComponent>(null);
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
  useEffect(()=>{
    element.current.setAttribute('direction', props.direction);
  },[props.direction]);
  useEffect(()=>{
    if(props.jalaliMonthList){
      element.current.setMonthList('JALALI',props.jalaliMonthList);
    }
  },[props.jalaliMonthList]);
  function onSelect(e) {
    if (props.onSelect && e instanceof CustomEvent) {
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
  jalaliMonthList: PropTypes.array,
  inputType: PropTypes.oneOf(['GREGORIAN', 'JALALI'])
};
export {JBCalendar};
