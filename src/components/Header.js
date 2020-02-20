import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ setToken, setUsername, token }) => {
  const handleDeConnexion = () => {
    //deconnexion
    Cookies.remove("token");
    Cookies.remove("username");
    setToken(null);
    setUsername(null);
  };
  return (
    <header>
      <div className="container">
        <div className="wrapper-header">
          <img src={logo} alt="logo-marvel" className="logo" />
          <ul>
            <Link to="/">
              <li>Personnages</li>
            </Link>
            <Link to={"/comics/" + 0}>
              <li>Comics</li>
            </Link>
            <Link to="/favorite">
              <li>Favoris</li>
            </Link>
            <Link to="/login">
              <div>
                <FontAwesomeIcon icon="user" />
                {token ? (
                  <span onClick={handleDeConnexion}>Se déconnecter</span>
                ) : (
                  <span>Se connecter</span>
                )}
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
