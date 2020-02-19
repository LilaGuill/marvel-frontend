import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Personnages from "./containers/Personnages";
import Comics from "./containers/Comics";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
library.add(faChevronLeft, faChevronRight);

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/comics/:id">
          <Comics />
        </Route>
        <Route exact={true} path="/">
          <Personnages />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
