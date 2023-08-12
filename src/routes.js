import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import { AuthConsumer } from "./pages/admin/Admin";
import AdminLogin from "./pages/admin/AdminLogin";
import Expanded from "./pages/Expanded";
import Create from "./pages/Create";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = { <Home /> } path = "/" exact />
                <Route element = { <AdminLogin /> } path = "/login" />
                <Route element = { <Expanded /> } path = "/:id" />
                <Route element = { <Create /> } path = "/create" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;