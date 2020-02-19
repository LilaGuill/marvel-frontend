import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
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
            <Link to="/connexion">
              <li>Se connecter</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
