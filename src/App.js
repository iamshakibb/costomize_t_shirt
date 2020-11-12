import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UploadImage from "./Components/UploadImage/UploadImage";
import { Container } from "react-bootstrap";
import CustomTShirt from "./Components/CustomTShirt/CustomTShirt";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <Container>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/uploadImage" component={UploadImage} />
          <Route path="/customT-shirt" component={CustomTShirt} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
