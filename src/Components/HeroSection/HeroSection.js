import { Row } from "react-bootstrap";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <Row className="mt-5 align-items-center justify-content-center">
      <div className="col-md-6 hero_text">
        <h1>Customize Your own T-shirt</h1>
        <p>T is a clothing company. We provide you world class cloths that suits with your personality </p>
      </div>
      <div className="col-md-6 hero_img d-flex align-items-center justify-content-center">
        <img className="img-fluid" src="https://i.ibb.co/xC0WV5F/4-white-t-shirt-png-image-1.png" alt="T-shirt" />
      </div>
    </Row>
  );
}
