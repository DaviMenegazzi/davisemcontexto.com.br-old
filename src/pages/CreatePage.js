import React from "react";

import "../assets/css/create.css";
import { LoginContext } from "./LoginPage";
import { NotFound } from "./errors/NotFound";
import Create from "../components/Create";

const CreatePage = () => {

  const CreateForm = () => {
    const isAuth = React.useContext(LoginContext);
    if (!isAuth.isAuth) {
      return <NotFound />
    }
    return (     
      <Create />
    )
  }
  
  return ( 
    <div className="page">
      <h1>Criar</h1>
      <CreateForm />
    </div>
  );
};

export default CreatePage;
