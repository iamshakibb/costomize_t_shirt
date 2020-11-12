import { FormGroup, Row } from "react-bootstrap";
import React, { useState } from "react";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function UploadImage() {
  const [files, setFiles] = useState([]);
  return (
    <>
      <Row style={{ height: "90vh" }} className="text-center justify-content-center align-items-center">
        <div className="col-sm-12 uploadImg">
          <h1 className="">Upload Image!</h1>
          <form>
            <div className="col-sm-12">
              <FormGroup>
                <FilePond files={files} allowMultiple={true} maxFiles={50} name="files" labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>' />
              </FormGroup>
            </div>
          </form>
        </div>
        <div className="col-sm-12 uploadBtn"></div>
      </Row>
    </>
  );
}
