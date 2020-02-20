import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Personnages from "./containers/Personnages";
import Comics from "./containers/Comics";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import { library } from "@fortawesome/fontawesome-svg-core";
import Cookies from "js-cookie";
import {
  faChevronLeft,
  faChevronRight,
  faHeart,
  faUser
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
library.add(faChevronLeft, faChevronRight, faHeart, faUser);

const App = () => {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const myToken = Cookies.get("token");
    const myUsername = Cookies.get("username");
    setToken(myToken);
    setUsername(myUsername);
  }, []);

  return (
    <Router>
      <Header
        token={token}
        setToken={setToken}
        username={username}
        setUsername={setUsername}
      />
      <Switch>
        <Route path="/comics/:id">
          <Comics />
        </Route>
        <Route path="/login">
          <Login setToken={setToken} setUsername={setUsername} />
        </Route>
        <Route path="/signup">
          <Signup setToken={setToken} />
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
