import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Support from "./pages/Support";
import Team from "./pages/Team";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/team" component={Team} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
