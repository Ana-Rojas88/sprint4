import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from '../componentes/LoginAndRegister/Register';
import Home from "../componentes/Home/Home";
import Search from "../componentes/Home/Search";
import Login from '../componentes/LoginAndRegister/Login';

const Router = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router