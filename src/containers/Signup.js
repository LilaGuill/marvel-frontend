import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import url from "../utils/url";

const Signup = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  let history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();
    if (username && email && password && confirmPassword) {
      const body = {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword
      };

      const response = await axios.post(`${url}/user/signup`, body);
      //enregistrement du token dans les cookies
      const token = response.data.token;
      Cookies.set("token", token, { expires: 7 });
      setToken(token);

      Cookies.set("username", username, { expires: 7 });
      setUsername(username);
      history.push("/");
    } else {
      setMessage("Tous les champs sont obligatoires");
    }
  };
  return (
    <div className="container-form">
      <h2>Inscrivez-vous</h2>

      <form className="wrapper-form-signup" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Votre nom"
          value={username}
          onChange={event => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
        />

        <input
          autoComplete="false"
          type="password"
          placeholder="Votre mot de passe"
          value={password}
          onChange={event => {
            setPassword(event.target.value);
          }}
        />

        <input
          autoComplete="false"
          type="password"
          placeholder="Confirmez votre mot de passe"
          value={confirmPassword}
          onChange={event => {
            setConfirmPassword(event.target.value);
          }}
        />
        <button className="form-submit" type="submit">
          S'inscrire
        </button>
      </form>
      <div className="form-message">{message}</div>
    </div>
  );
};

export default Signup;
