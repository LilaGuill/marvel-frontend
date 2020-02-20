import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ setToken, setUsername, token, username }) => {
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
            <Link to="/favorites">
              <li>Favoris</li>
            </Link>
            <Link to="/login">
              <div>
                {token ? (
                  <li onClick={handleDeConnexion}>
                    <span>{username}</span>
                    Se déconnecter
                  </li>
                ) : (
                  <>
                    <FontAwesomeIcon icon="user" />
                    <li>Se connecter</li>
                  </>
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
