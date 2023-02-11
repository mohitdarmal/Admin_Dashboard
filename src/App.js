import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Products from "./Pages/Products";
import "./App.css";

const App = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="dashboard" element={<Dashboard/>}></Route>
                    <Route path="products" element={<Products/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App