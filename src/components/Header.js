import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import logo from "../images/logo.png";

const Header = ({ setToken, setUsername, token, username }) => {
  const handleDeConnexion = () => {
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
              {token ? (
                <li onClick={handleDeConnexion}>Déconnexion</li>
              ) : (
                <li>Se connecter</li>
              )}
            </Link>
            <li className="header-user">{username}</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
