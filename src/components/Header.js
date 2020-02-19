import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="wrapper-header">
          <img src={logo} alt="logo-marvel" className="logo" />
          <ul>
            <li>Personnages</li>
            <li>Comics</li>
            <li>Favoris</li>
            <li>Se connecter</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
