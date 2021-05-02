
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header/Header";
import Navbar from "./Components/Header/Navbar/Navbar";
import Home from "./Components/Home/Home";

import NoMatch from "./Components/NoMatch/NoMatch";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="">
          <Home />
        </Route>
        <Route path="/about">
          <Header />
        </Route>
        <Route path="/">

        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
