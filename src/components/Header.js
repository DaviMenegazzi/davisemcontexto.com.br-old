import { useContext } from "react";
import React from "react";
import "../assets/css/header.css"

import LoginContext from "../pages/admin/Admin";
import { NotFound } from "../pages/errors/NotFound";

const Header = () => {
    const ShowsPostButtonWhenUserLoggedIn = () => {
        const isAuth = React.useContext(LoginContext);
        if (isAuth.isAuth) {
            return (
                <div id="header-options">
                    <div id="create-bttn">
                        <a href="/create">
                            Criar
                        </a>
                    </div>
                    <div id="user-profile">
                        Usuário Logado.
                    </div>
                </div>
            )
        } else return;
        
    } 
    
    return (
        <div className="header-base">
            <a href="/" className="fill-div">
                <p id="header-title">davisemcontexto.com.br</p>
            </a>
            <ShowsPostButtonWhenUserLoggedIn />
        </div>
    );
};

export {
    Header
}