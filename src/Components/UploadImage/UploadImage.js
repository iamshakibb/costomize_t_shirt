import { FormGroup, Row } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import React, { useState } from "react";
import "./UploadImage.css";
// Import React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function UploadImage() {
  const [files, setFiles] = useState([]);
  const formData = new FormData();
  if (files.length > 0) {
    // formData.append("file", files[0].file);
    // formData.append("title", service.title);
    // formData.append("description", service.description);
    console.log(files);
  }
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
