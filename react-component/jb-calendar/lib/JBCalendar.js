import React, {useRef, useEffect} from 'react';
import '../../../web-component/jb-calendar';
import PropTypes from 'prop-types';
// eslint-disable-next-line react/display-name
const JBCalendar = React.forwardRef((props, ref)=>{
    let element;
    if(ref){
        element = ref;
    }else{
        element = useRef();
    }
    
    useEffect(()=>{
        element.current.addEventListener('select',props.onSelect);
    },[]);
    return (
        <div>
            <jb-calendar ref={element}></jb-calendar>
        </div>
    );
});
JBCalendar.propTypes = {
    onSelect: PropTypes.func,
    value: PropTypes.string,
};
export default JBCalendar;
