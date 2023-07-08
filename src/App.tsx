import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";
import ButtonSample from "./pages/ButtonaSample";

const App = () => (
  <BrowserRouter>
    <Route path="/">
      <Navigation />
    </Route>
    <Route path="/ButtonSample">
      <ButtonSample />
    </Route>
  </BrowserRouter>
);

export default App;
