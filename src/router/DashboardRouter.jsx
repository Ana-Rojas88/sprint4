import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../componentes/Home/Home";
import Search from "../componentes/Home/Search";
import Restaurant from "../componentes/Home/Restaurant";
import Details from "../componentes/Home/Details";
import Profile from "../componentes/Home/Profile";
import AddRestaurant from "../componentes/Home/AddRestaurant";

const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/restaurant/:name" element={<Restaurant />} />
      <Route path="/addRestaurant" element={<AddRestaurant />} />
      <Route path="/details/:name" element={<Details />} />
    </Routes>
  );
};

export default DashboardRouter;
