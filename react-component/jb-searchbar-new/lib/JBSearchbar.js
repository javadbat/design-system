import React, {useEffect, useRef} from 'react'
import '../../../web-component/jb-searchbar'
function JBSearchBar(props) {
    const element = useRef();
    useEffect(() => {
      element.current.columnList = props.columnList;  
    },[props.columnList])
    return (
        <jb-searchbar ref={element}></jb-searchbar>
    )
}

export default JBSearchBar
