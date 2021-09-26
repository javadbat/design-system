import React from 'react';
import PropTypes from 'prop-types';
import JBImageInput from '../../../../react-component/jb-image-input/JBImageInput';
import Axios from 'axios';
const bridge = {
    uploader: (file) => {
        return new Promise((resolve, reject) => {
            var formData = new FormData();
            formData.append("image",file);
            Axios.post('http://localhost:3200/image/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                resolve(response.data.fileName.filename);
            }).catch((err) => {
                debugger;
            });
        });
    },
    downloader: () => {
        debugger;
    }
}
function JBImageInputActionTest(props) {
    function onchange(e){
        debugger;
    }
    return (
        <div>
            <JBImageInput bridge={bridge} onChange={onchange}></JBImageInput>
        </div>
    );
}

JBImageInputActionTest.propTypes = {

};

export default JBImageInputActionTest;

