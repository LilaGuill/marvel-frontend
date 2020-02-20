import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Personnages from "./containers/Personnages";
import Comics from "./containers/Comics";
import Favorites from "./containers/Favorites";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Footer from "./components/Footer";
import Cookies from "js-cookie";
import TokenContext from "./contexts/TokenContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
  faHeart,
  faUser,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(faChevronLeft, faChevronRight, faHeart, faUser, faTimesCircle);

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
    <TokenContext.Provider value={token}>
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
          <Route path="/favorites">
            {!token ? (
              <Login setToken={setToken} setUsername={setUsername} />
            ) : (
              <Favorites />
            )}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </TokenContext.Provider>
  );
};

export default App;
