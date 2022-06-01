import './App.css';
import React from "react";
import {Route, Switch} from "react-router-dom";
import NavBar from './components/NavBar';
import CatDisplay from './components/CatDisplay';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          home
        </Route>
        <Route exact path="/cats">
          <CatDisplay />
        </Route>
        <Route exact path="/dogs">
          Dogs
        </Route>
      </Switch>

      Comments
    </div>
  );
}

export default App;
