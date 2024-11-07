import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Homepage from "../pages/Homepage";
import Todo from "../pages/Todo";
import ShoppingCart from "../pages/ShoppingCart";
import Complete from "../pages/Complete";
import Pokemon from "../pages/Pokemon";
import Pertemuan2 from "../pages/Pertemuan2";
import Pertemuan3 from "../pages/Pertemuan3";
import PokemonDetail from "../pages/PokemonDetail";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<Homepage />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/shopping_cart" element={<ShoppingCart />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/pertemuan2" element={<Pertemuan2 />} />
        <Route path="/pertemuan3" element={<Pertemuan3 />} />
        <Route path="/pokemon_detail/:name" element={<PokemonDetail />} />
      </Route>
        <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
