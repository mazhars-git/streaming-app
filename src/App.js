import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Movies from "./Components/Movies/Movies";
import AllSeries from "./Components/Series/AllSeries";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/movies">
              <Movies />
          </Route>
          <Route path="/series">
              <AllSeries />
          </Route>
          <Route path="/">
           
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
