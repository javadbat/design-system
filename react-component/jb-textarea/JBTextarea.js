import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import '../../web-component/jb-textarea'
// eslint-disable-next-line react/display-name
const JBTextarea = React.forwardRef((props, ref)=>{
    {
        let element;
        if(ref){
            element = ref;
        }else{
            element =  useRef();
        }

        useEffect(()=>{
            element.current.addEventListener('change',props.onChange)
        },[])
        useEffect(() => {
            let value = props.value
            if(props.value == null || props.value === undefined){
                value = ''
            }
            element.current.value = value;
        }, [props.value]);
        useEffect(()=>{
            element.current.validationList = props.validationList || [];
        },[props.validationList])
        return (
            <jb-textarea class={props.className} ref={element} label={props.label} message={props.message}></jb-textarea>
        )
    }
})

JBTextarea.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    validationList: PropTypes.array
}

export default JBTextarea