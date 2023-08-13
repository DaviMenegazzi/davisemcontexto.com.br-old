import axios from "axios";
import { Md5Crypto } from "./crypto/crypto";
import React from "react";

const apiHOST = "http://localhost:3000/";
const apiROUTES = {
  get: "get",
  get_only: "get_only",
  create: "create",
  login: "login",
  auth: "auth",
};

//USER RELATED
const handleLogin = (name, pass) => {
  return axios.get(`${apiHOST}${apiROUTES.login}`, {
    crossDomain: true,
    params: {
      name: name,
      pass: Md5Crypto(pass),
    },
  });
};

// autentica o token recebido pelo servidor no login e adicionado aos cookies
const handleAuth = () => {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  return axios.post(`${apiHOST}${apiROUTES.auth}?token=${getCookie("token")}`, {
    crossDomain: true,
  })
};

// POST RELATED
const handleGet = () => {
  return axios.get(`${apiHOST}${apiROUTES.get}`, {
    crossDomain: true,
  });
};

const handleGetOnly = (id) => {
  return axios.get(`${apiHOST}${apiROUTES.get_only}`, {
    crossDomain: true,
    params: {
      _id: id,
    },
  });
};

const handleCreate = (title, content) => {
  return axios.post(
    `${apiHOST}${apiROUTES.create}?title=${title}&content=${content}`,
    {
      crossDomain: true,
    }
  );
};

export {
  handleGet,
  handleCreate,
  handleGetOnly,
  handleLogin,
  handleAuth,
};
