import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {useEvent} from '../../custom-hooks/UseEvent';
import 'jb-searchbar';
function JBSearchbar(props) {
    const element = useRef();
    const [refChangeCount, refChangeCountSetter] = useState(0);
    useEffect(() => {
        refChangeCountSetter(refChangeCount + 1);
    }, [element.current]);
    useEffect(() => {
        element.current.columnList = props.columnList;
    }, [props.columnList]);
    useEffect(() => {
        if(props.searchOnChange){
            element.current.searchOnChange = true;
        }else{
            element.current.searchOnChange = false;
        }
    },[props.searchOnChange]);
    const onSearch = useCallback(()=>{
        if(typeof props.onSearch === 'function'){
            props.onSearch();
        }
    });
    useEvent(element.current, 'search', onSearch);
    return (
        <jb-searchbar placeholder={props.placeholder} ref={element}></jb-searchbar>
    );
}
JBSearchbar.propTypes = {
    placeholder: PropTypes.string,
    searchOnChange: PropTypes.bool,
    onSearch: PropTypes.func,
};
export default JBSearchbar;
