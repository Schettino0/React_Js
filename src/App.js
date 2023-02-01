import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Carrito } from "./components/Carrito/Carrito";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContext, CartProvider } from "./components/context/CartContext";
import { useState } from "react";


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/productos/:categoriaid" element={<ItemListContainer />} />
          <Route path="item/:itemid" element={<ItemDetailContainer />} />
          <Route path="/React_Js" element={<Navigate to={"/"} />} />
          <Route path="/carrito" element={<Carrito />} />

        </Routes>
      </BrowserRouter>
    </CartProvider>

  )
}
export default App;

