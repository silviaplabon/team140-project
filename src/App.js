import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import FeaturedProperties from './components/FeaturedProperties/FeaturedProperties';
import FeaturedPropertiesDetailShow from './components/FeturedPropertiesDetailShow/FeaturedPropertiesDetailShow';

function App() {
  return (
    <Router>
    <Switch> 
       <Route exact path="/">
        <FeaturedProperties></FeaturedProperties>
       </Route>
       <Route exact path="/apartment/feature/:id">
        <FeaturedPropertiesDetailShow></FeaturedPropertiesDetailShow>
       </Route>
    </Switch>
  </Router>
  );
}

export default App;
