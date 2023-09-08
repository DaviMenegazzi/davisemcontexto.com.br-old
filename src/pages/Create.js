import React from "react";
import axios from "axios";

import { Post } from "./api/models";
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

    const post = new Post(created.title, created.content);
    post.create();
  };

  const isAuth = React.useContext(LoginContext);

  return (
    <div>
      {isAuth.isAuth && (
        <form onSubmit={handleSubmit}>
          <div>
            <div className="form-field">
              <p>Título</p>
              <input name="title" onChange={handleChange} />
            </div>
            <div className="form-field">
              <p>Conteúdo</p>
              <input name="content" onChange={handleChange} />
            </div>
            <button type="submit">ENVIAR</button>
          </div>
        </form>
      )}{" "}
      : {<NotFound />}
    </div>
  );
};

export default Create;
