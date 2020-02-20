import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Signin = ({ setToken }) => {
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
      Cookies.set("token", token, { expires: 7 });

      //mise a jour du state
      setToken(token);
      //redirection vers la page home
      history.push("/");
    } else {
      setMessage("Veuillez indiquer votre email et mot de passe ");
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <hr></hr>
      <form onSubmit={handleSubmit}>
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
        <div>{message}</div>
      </form>
      <div>
        <span>Vous n'avez pas de compte ?</span>

        <button>
          <Link to="/signup">Créer un compte</Link>
        </button>
      </div>
    </div>
  );
};

export default Signin;
