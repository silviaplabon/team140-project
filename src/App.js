import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
