import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { handleAuth } from "./pages/api/api";
import "./assets/css/App.css";

import HomePage from "./pages/HomePage";
import { LoginPage, LoginContext } from "./pages/LoginPage";
import DetailsPage from "./pages/DetailsPage";
import CreatePage from "./pages/CreatePage";

const Rotas = () => {
  const [isAuth, setAuth] = React.useState(null);
  React.useEffect(() => {
    handleAuth()
      .then((response) => {
        setAuth(response.data.code);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <LoginContext.Provider value={{ isAuth }}>
                <HomePage />
              </LoginContext.Provider>
            }
            path="/"
            exact
          />

          <Route
            element={
              <LoginContext.Provider value={{ isAuth }}>
                <CreatePage />
              </LoginContext.Provider>
            }
            path="/create"
          />

          <Route element={<LoginPage />} path="/login" />
          <Route element={<DetailsPage />} path="/:slug" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Rotas;
