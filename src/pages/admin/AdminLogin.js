import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../assets/css/adminlogin.css";
import { handleLogin } from "../api/api";

// Essa é o login para ativar a opção de admin
// ou seja, o caminho "/login" do website

const AdminLogin = () => {
  const [userData, setUserData] = useState({
    Nome: null,
    Senha: null,
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // faz alguma coisa com os dados do usuário
    handleLogin(userData.Nome, userData.Senha)
      .then((response) => {
        // recebe o token e adiciona aos cookies
        document.cookie = `token=${response.data.token}`;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="page-bg">
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="form-field">
            <p>Nome</p>
            <input name="Nome" onChange={handleChange} />
          </div>
          <div className="form-field">
            <p>Senha</p>
            <input type="password" name="Senha" onChange={handleChange} />
          </div>
          <button onClick={handleSubmit}> Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
