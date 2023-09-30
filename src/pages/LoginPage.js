import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "src/assets/css/adminlogin.css";
import { handleLogin } from "src/pages/api/api";

// Essa é o login para ativar a opção de admin
// ou seja, o caminho "/login" do website

const LoginContext = React.createContext();

const LoginPage = () => {
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

  const navigate = useNavigate();

  /* NOTE: Adicionar refresh quando a página mudar. */
  const handleNavigate = (path) => {
      navigate(path);
  }

  const useHandleSubmit = (event) => {
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
      handleNavigate('/');
  };

  return (
    <div className="text-center m-5-auto">
      <h2>Entrar</h2>
      <form>
        <p>
          <label>Nome</label>
          <br />
          <input onChange={handleChange} type="text" name="Nome" required />
        </p>
        <p>
          <label>Senha</label>
          <Link to="/forget-password">
            <label className="right-label">Esqueceu a senha?</label>
          </Link>
          <br />
          <input
            onChange={handleChange}
            type="password"
            name="Senha"
            required
          />
        </p>
        <p>
          <button onClick={useHandleSubmit} id="sub_btn" type="submit">
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export { LoginPage, LoginContext };
