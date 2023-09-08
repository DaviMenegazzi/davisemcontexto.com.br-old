import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { handleAuth } from "./pages/api/api";
import './assets/css/App.css';

import Home from "./pages/Home";
import LoginContext from "./pages/admin/Admin";
import AdminLogin from "./pages/admin/AdminLogin";
import Expanded from "./pages/Expanded";
import Create from "./pages/Create";


const Rotas = () => {
    const [isAuth, setAuth] = React.useState(null);
    React.useEffect(() => {
        handleAuth()
            .then((response) => {
                console.log(response.data.code);
                setAuth(response.data.code);
            })
            .catch(err => { console.log(err) })
    });
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element = { 
                        <LoginContext.Provider value={{isAuth}}>
                            <Home />
                        </LoginContext.Provider>
                    } path = "/" exact />
                    
                    <Route element = { 
                        <LoginContext.Provider value={{isAuth}}>
                            <Create />
                        </LoginContext.Provider>
                    } path = "/create" />

                    <Route element = { <AdminLogin /> } path = "/login" />
                    <Route element = { <Expanded /> } path = "/:id" />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Rotas;