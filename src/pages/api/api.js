import axios from "axios";
import { Md5Crypto } from "./crypto/crypto";


const apiHOST = "http://localhost:3000/"; 
const apiROUTES = {
    get: "get",
    get_only: "get_only",
    create: "create",
    login: "login",
    auth: "auth",
}

//USER RELATED
const handleLogin = (name, pass) => {
    return axios.get(`${apiHOST}${apiROUTES.login}`, 
        {
            crossDomain: true,
            params: {
                name: name,
                pass: Md5Crypto(pass)
            }
        });     
}

// autentica o token recebido pelo servidor no login e adicionado aos cookies
const handleAuth = (token) => {
    return axios.post(`${apiHOST}${apiROUTES.auth}?token=${token}`, 
        {
            crossDomain: true,
        });     
}

const verifyToken = () => {
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    handleAuth(getCookie("token"))
        .then(response => {
            // se houver erro ao verificar o token
            if (response.data.error) {
                return false;
            }
            return true;
        })
        .catch(err => {
            console.log(err);
        })
    // se não conseguiu conexão com o servidor, então não está autenticado o login
    return false; 
}

// POST RELATED
const handleGet = () => {
    return axios.get(`${apiHOST}${apiROUTES.get}`, 
        {
            crossDomain: true,
        });     
}

const handleGetOnly = (id) => {
    return axios.get(`${apiHOST}${apiROUTES.get_only}`, 
        { 
            crossDomain: true,
            params: {
                _id: id
            }
        });     
}

const handleCreate = (title, content) => {
    return axios.post(`${apiHOST}${apiROUTES.create}?title=${title}&content=${content}`, 
        {
            crossDomain: true,
        });     
}


export { handleGet, handleCreate, handleGetOnly, handleLogin, handleAuth, verifyToken};


