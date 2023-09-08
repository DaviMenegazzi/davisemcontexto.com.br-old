import React from "react";

import { Post } from "../pages/api/models";

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

    /** Cria o post */
    const post = new Post(created.title, created.content);
    post.create();
  };

  return (
		<form onSubmit={handleSubmit}>
			<div className="form-field">
				<p>Título</p>
				<input name="title" onChange={handleChange} />
			</div>
			<div className="form-field">
				<p>Conteúdo</p>
				<input name="content" onChange={handleChange} />
			</div>
			<button type="submit">ENVIAR</button>
		</form>
  );
};

export default Create;
