import React, { useState } from "react";

import { useGenerateFeed } from "./feed/generate";
import { Header } from "../components/Header";

// Essa é a home page, ou seja, o caminho "/" do website
// É essa página que será renderizada no App.js

const Home = () => {

  let postList = useGenerateFeed();

  return (
    <div className="App">
      <header className="app-header">
        <Header />
      </header>
      <div className="post-base"> 
        {postList}
      </div>
    </div>
  );
};

export default Home;
