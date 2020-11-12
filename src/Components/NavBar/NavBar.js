import { Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <Navbar expand="md" style={{ height: "50px", marginTop: "15px" }}>
      <Navbar.Brand as={Link} to="/">
        T
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/uploadImage">
            Upload Image
          </Nav.Link>
          <Nav.Link as={Link} to="/customT-shirt">
            Custom T-shirt
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
