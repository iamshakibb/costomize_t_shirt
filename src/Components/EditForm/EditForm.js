import React, { useRef, useState } from "react";
import { Button, FormGroup } from "react-bootstrap";
import EditingBox from "../EditingBox/EditingBox";
import { open } from "../../Redux/Action";
import { useDispatch } from "react-redux";

const EditForm = () => {
  const [output, setOutput] = useState("");
  const dispatch = useDispatch();
  const input = useRef();

  //   On submit update the state
  const onSubmit = (e) => {
    e.preventDefault();
    setOutput(input.current.value);
    e.target.reset();
  };
  return (
    <>
      <div className="col-sm-4  d-flex justify-content-center align-items-center box">
        <form className="w-75" onSubmit={onSubmit}>
          <FormGroup>
            <label>Enter Text</label>
            <input ref={input} name="textField" className="form-control" placeholder="Enter text" />
          </FormGroup>
          <FormGroup>
            <Button className="mr-4" onClick={() => dispatch(open())}>
              Cancel
            </Button>
            <Button type="submit">Ok</Button>
          </FormGroup>
        </form>
      </div>
      <div className="col-sm-12 text-center box">
        <EditingBox output={output} />
      </div>
    </>
  );
};
export default EditForm;
