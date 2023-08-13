import React, { useState } from "react";
import { Routes, Link, Route, useNavigate } from "react-router-dom";

import axios from "axios";
import Posts from "../components/Posts";

import { handleGet } from "./api/api";
import Create from "./Create";
import LoginContext from "./admin/Admin";
import { handleAuth } from "./api/api";

// Essa é a home page, ou seja, o caminho "/" do website
// É essa página que será renderizada no App.js

const Home = () => {
  // Renderiza os posts
  const [post, setPost] = React.useState("");

  React.useEffect(() => {
    handleGet()
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  let postList = [];

  for (let i = 0; i < post.length; i++) {
    let title = post[i].title;
    let content = post[i].content;
    let id = post[i]._id;
    postList.push(<Posts title={title} content={content} id={id} />);
  }

  const navigateCreate = () => {
    window.location.replace("http://localhost:3001/create");
  };

  function Button({ children }) {
    const isAuth = React.useContext(LoginContext);
    if (isAuth.isAuth) {
      return (
        <div>
          <button>POST!</button>
          { children }
        </div>
      )
    } else {
      return (
        <div>
          <a>nao ta logado D:</a>
          { children }
        </div>
      )
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <div> {postList} </div>
      </header>
    </div>
  );
};

export default Home;
