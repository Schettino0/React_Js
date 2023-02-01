import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)


    const agregarCarrito = (item) => {
        setCart([...cart, (item)])
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }
    const emptyCart = () => {
        setCart([])
    }
    const totalCart = () => {
        return cart.reduce((acc, item) => acc + item.price * item.cantidad, 0)
    }
    const removeCarrito = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }
    const totalCantidad = ()=>{
        return cart.reduce((acc , item)=>acc + item.cantidad,0 )
    }
    return(
        <CartContext.Provider value={{ cart, agregarCarrito, isInCart, emptyCart, totalCart , removeCarrito, totalCantidad}} >
            {children}
        </CartContext.Provider>
    )

}