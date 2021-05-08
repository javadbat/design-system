import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import 'jb-searchbar';
function JBSearchbar(props) {
    const element = useRef();
    useEffect(() => {
        element.current.columnList = props.columnList;
    }, [props.columnList]);
    return (
        <jb-searchbar placeholder={props.placeholder} ref={element}></jb-searchbar>
    );
}
JBSearchbar.propTypes = {
    placeholder: PropTypes.string
};
export default JBSearchbar;
