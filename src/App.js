import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import './App.css';

import AuthContainer from './views/authPage/AuthContainer';
import HomeContainer from './views/homePage/HomeContainer';


function App() {

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/auth">
            <AuthContainer />
          </Route>
          <Route path="/home">
            <HomeContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
