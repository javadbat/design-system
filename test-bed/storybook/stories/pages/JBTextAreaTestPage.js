import React from 'react';
import PropTypes from 'prop-types';
import JBTextarea from '../../../../react-component/jb-textarea/JBTextarea';
import './JBTextAreaTestPage.css';
function JBTextAreaTestPage(props) {
    return (
        <div>
            <h2>test grow ability</h2>
            <JBTextarea label="type to grow" autoHeight={true}></JBTextarea>
            <h3>grow with min and max height</h3>
            <div className="grow-with-custom-limit">
                <JBTextarea label="48 to 120" autoHeight={true}></JBTextarea>
            </div>
        </div>
    );
}

JBTextAreaTestPage.propTypes = {

};

export default JBTextAreaTestPage;

