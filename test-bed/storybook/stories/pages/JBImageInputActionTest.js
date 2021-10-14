import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import JBImageInput from '../../../../react-component/jb-image-input/JBImageInput';
import Axios from 'axios';
const bridge = {
    uploader: (file, config) => {
        debugger;
        return new Promise((resolve, reject) => {
            var formData = new FormData();
            formData.append("image", file);
            Axios.post('http://localhost:3200/image/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
                resolve(response.data.fileName.path);
            }).catch((err) => {
                debugger;
            });
        });
    },
    downloader: (value, config) => {
        return new Promise((resolve, reject) => {
            Axios.get('http://localhost:3200/image/download', { params: { imagePath: value }, responseType: "blob" }).then((response) => {

                var reader = new window.FileReader();
                reader.readAsDataURL(response.data);
                reader.onload = function () {
                    var imageDataUrl = reader.result;
                    resolve(imageDataUrl);
                };


            }).catch((err) => {
                debugger;
            });
        });
    }
}
function JBImageInputActionTest(props) {
    function onchange(e) {

    }
    return (
        <div>
            <JBImageInput bridge={bridge} onChange={onchange} config={{ ss: 10, vv: 20 }}></JBImageInput>
        </div>
    );
}

JBImageInputActionTest.propTypes = {

};

export default JBImageInputActionTest;

