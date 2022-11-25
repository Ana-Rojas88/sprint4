import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../componentes/Home/Home";
import Search from "../componentes/Home/Search";
import Restaurant from "../componentes/Home/Restaurant";
import Details from "../componentes/Home/Details";
import Profile from "../componentes/Home/profile/Profile";
import AddRestaurant from "../componentes/Home/profile/admin/AddRestaurant";
import Accountedit from "../componentes/Home/profile/Accountedit";
import AdminRestaurant from "../componentes/Home/profile/admin/AdminRestaurant";
import AddFood from "../componentes/Home/profile/admin/AddFood";
import DeleteRestaurant from "../componentes/Home/profile/admin/DeleteRestaurant";
import DeleteFood from "../componentes/Home/profile/admin/DeleteFood";
import Order from "../componentes/Home/Order";

const DashboardRouter = (isAutentication) => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/adminRestaurant" element={<AdminRestaurant />} />
      <Route path="/restaurant/:name" element={<Restaurant />} />
      <Route path="/addRestaurant" element={<AddRestaurant />} />
      <Route path="/addFood" element={<AddFood />} />
      <Route path="/details/:name" element={<Details />} />
      <Route path="/accountedit" element={<Accountedit />} />
      <Route path="/deleteRestaurant" element={<DeleteRestaurant />} />
      <Route path="/deleteFood" element={<DeleteFood />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
};

export default DashboardRouter;
