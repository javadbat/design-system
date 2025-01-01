import React from "react";
import { JBImageInput } from "jb-image-input/react";
import Axios from "axios";
const bridge = {
  uploader: (file, config) => {
    return new Promise((resolve, reject) => {
      var formData = new FormData();
      formData.append("image", file);
      Axios.post("http://localhost:3200/image/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((response) => {
        resolve(response.data.fileName.path);
      }).catch((err) => {
        console.error(err);
      });
    });
  },
  downloader: (value, config) => {
    return new Promise((resolve, reject) => {
      Axios.get("http://localhost:3200/image/download", {
        params: { imagePath: value },
        responseType: "blob",
      }).then((response) => {
        var reader = new window.FileReader();
        reader.readAsDataURL(response.data);
        reader.onload = function () {
          var imageDataUrl = reader.result;
          resolve(imageDataUrl);
        };
      }).catch((err) => {
        console.error(err);
      });
    });
  },
};
function JBImageInputActionTest(props) {
  function onchange(e) {
    console.log("image changed");
  }
  function onMaxSizeExceed(e) {
    console.error(
      `your file size   is not valid your size is:${e.detail.file.size}`,
    );
  }
  return (
    <div>
      <JBImageInput bridge={bridge} onChange={onchange} config={{}}>
      </JBImageInput>
      <h3>with 2MB max size limit</h3>
      <JBImageInput
        bridge={bridge}
        onChange={onchange}
        config={{}}
        maxFileSize={2 * 1024 * 1024}
        onMaxSizeExceed={onMaxSizeExceed}
      >
      </JBImageInput>
    </div>
  );
}

JBImageInputActionTest.propTypes = {};

export default JBImageInputActionTest;
