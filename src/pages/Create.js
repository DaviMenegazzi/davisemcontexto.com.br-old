import React from "react";
import axios from "axios";

import { handleCreate } from "./api/api";
import LoginContext from "./admin/Admin";
import { NotFound } from "./errors/NotFound";

const Create = () => {
  const [created, setCreate] = React.useState(null);

  const handleChange = (event) => {
    setCreate({
      ...created,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleCreate(created.title, created.content)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        return error;
      });
  };

  function CreateForm() {
    return (
      <form onSubmit={handleSubmit}>
        <a>informe um titulo</a>
        <input name="title" onChange={handleChange}></input>
        <input name="content" onChange={handleChange}></input>
        <button type="submit">ENVIAR</button>
      </form>
    )
  }

  function UserLoggedOrNot ({ children }) {
    const auth = React.useContext(LoginContext);
    if(auth.isAuth) {
      return(
        <div>
          <CreateForm />
          { children }
        </div>
      )
    } else { return ( <NotFound /> ) }
  }

  return ( <div> <UserLoggedOrNot /> </div> );
};

export default Create;
