import tShirt from "../../resourse/T-shirt.png";
import "./CustomTShirt.css";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { open } from "../../Redux/Action";
import EditForm from "../EditForm/EditForm";

export default function CustomTShirt() {
  // fetching data from redux is editor form open or not
  const isItOpen = useSelector((state) => state.Editor);
  const dispatch = useDispatch();
  return (
    <>
      <div className="row mt-5">
        <div className="col-sm-8 d-flex justify-content-center align-items-center text-center customTShirt-container">
          <img src={tShirt} alt="T-Shirt img" />
        </div>
        {isItOpen ? null : (
          <div className="col-sm-12 d-flex justify-content-end align-items-center text-center">
            <Button onClick={() => dispatch(open())}>Edit</Button>
          </div>
        )}
        {isItOpen ? <EditForm /> : null}
      </div>
    </>
  );
}
