import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutUs from "./components/Home/AboutUs/AboutUs";
import ExploreByCities from "./components/Home/ExploreByCities/ExploreByCities";
import Home from "./components/Home/Home/Home";
import NoMatch from "./components/Home/NoMatch/NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="*">
            <NoMatch></NoMatch>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
