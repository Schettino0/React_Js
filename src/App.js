import { NavBar } from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Carrito } from "./components/Carrito/Carrito";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContext } from "./components/context/CartContext";
import { useState } from "react";


function App() {
  const [cart, setCart] = useState([])
  console.log(cart)


  const agregarCarrito = (item) => {
    setCart([...cart, (item)])
  }

  const isInCart = (id) => {
    return cart.some(item => item.id === id)
  }
  const emptyCart= ()=>{
    setCart([])
  }
  const totalCart= ()=>{
    return cart.reduce((acc, item)=> acc + item.price * item.cantidad,0)
  }

  return (
    <CartContext.Provider value={{ cart, agregarCarrito, isInCart,emptyCart,totalCart }} >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/productos/:categoriaid" element={<ItemListContainer />} />
          <Route path="item/:itemid" element={<ItemDetailContainer />} />
          <Route path="/React_Js" element={<Navigate to={"/"} />} />
          <Route path="/carrito" element={<Carrito/>}/>
          
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  )
}
export default App;

