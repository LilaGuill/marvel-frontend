import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Signin = ({ setToken, setUsername }) => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    if (email && password) {
      const body = {
        email: email,
        password: password
      };
      const response = await axios.post(
        "http://localhost:3000/user/login",
        body
      );

      //enregistrement du token dans les cookies
      const token = response.data.token;
      const username = response.data.account.username;
      Cookies.set("token", token, { expires: 7 });
      Cookies.set("username", username, { expires: 7 });

      //mise a jour du state
      setToken(token);
      setUsername(username);
      console.log(username);
      //redirection vers la page home
      history.push("/");
    } else {
      setMessage("Veuillez indiquer votre email et mot de passe ");
    }
  };

  return (
    <div className="container-form">
      <h2>Connectez-vous</h2>
      <form className="wrapper-form-login" onSubmit={handleSubmit}>
        <input
          placeholder="Votre email"
          id="email"
          type="email"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
            setMessage("");
          }}
        />

        <input
          placeholder="Votre mot de passe"
          type="password"
          autoComplete="off"
          value={password}
          onChange={event => {
            setPassword(event.target.value);
            setMessage("");
          }}
        />

        <button type="submit">Se connecter</button>
        <div className="form-message">{message}</div>
      </form>
      <hr></hr>
      <span>Vous n'avez pas de compte ?</span>

      <button className="form-second-btn">
        <Link to="/signup">Créer un compte</Link>
      </button>
    </div>
  );
};

export default Signin;
