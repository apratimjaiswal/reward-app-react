import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/Customers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/customers" component={Customers} />
          <Redirect from="/" exact to="/customers" />
        </Switch>
      </header>
    </div>
  );
}

export default App;
