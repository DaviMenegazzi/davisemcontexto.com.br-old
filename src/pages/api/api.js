import axios from "axios";
import { Md5Crypto } from "src/pages/api/crypto/crypto";
import React from "react";

const apiHOST = "http://localhost:3000/";
const apiROUTES = {
  get: "get",
  get_only: "get_only",
  create: "create",
  login: "login",
  auth: "auth",
  update_rating: "update_rating",
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
  });
};

// POST RELATED
const handleGet = () => {
  return axios.get(`${apiHOST}${apiROUTES.get}`, {
    crossDomain: true,
  });
};

const handleGetOnly = (key, value) => {
  return axios.get(`${apiHOST}${apiROUTES.get_only}`, {
    crossDomain: true,
    params: {
      key: key,
      value: value,
    },
  });
};

const handleCreate = (title, content) => {
  let str_query = `?title=${title}&content=${content}`;
  return axios.post(`${apiHOST}${apiROUTES.create}${str_query}`, {
    crossDomain: true,
  });
};

const handleRating = (id, type) => {
  let rating_query = `?_id=${id}&type=${type}`;
  return axios.post(`${apiHOST}${apiROUTES.update_rating}${rating_query}`, {
    crossDomain: true,
  });
};

export {
  handleGet,
  handleCreate,
  handleGetOnly,
  handleLogin,
  handleAuth,
  handleRating,
};
