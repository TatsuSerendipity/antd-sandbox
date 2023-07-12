import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";
import ButtonSample from "./pages/ButtonaSample";
import TableSample from "./pages/TableSamle";
import MapSample from "./pages/MapSamle";

const App = () => (
  <BrowserRouter>
    <Route path="/">
      <Navigation />
    </Route>
    <Route path="/ButtonSample">
      <ButtonSample />
    </Route>
    <Route path="/TableSample">
      <TableSample />
    </Route>
    <Route path="/MapSample">
      <MapSample />
    </Route>
  </BrowserRouter>
);

export default App;
