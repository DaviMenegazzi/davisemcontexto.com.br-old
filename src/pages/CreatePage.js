import React from "react";

import "src/assets/css/create.css";
import { LoginContext } from "src/pages/LoginPage";
import { NotFound } from "src/pages/errors/NotFound";
import Create from "src/components/Create";

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
