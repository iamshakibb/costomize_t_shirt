import Draggable from "react-draggable";
import "./EditingBox.css";
import { Resizable } from "re-resizable";

export default function EditingBox({ output }) {
  const style = {
    border: "3px solid #14b3cf",
    color: "black",
    position: "relative",
    top: "-250px",
    left: "300px",
    fontSize: "23px",
  };
  return (
    <>
      {/* this for draggable box/div */}
      <Draggable>
        {/* this for resizable box/div */}
        <Resizable
          style={style}
          defaultSize={{
            width: 100,
            height: 100,
          }}
          className="d-flex justify-content-center align-items-center"
        >
          {output.length === 0 ? "Hi" : output}
        </Resizable>
      </Draggable>
    </>
  );
}
