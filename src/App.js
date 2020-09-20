import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/home";
import Category from './components/category/category'

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
