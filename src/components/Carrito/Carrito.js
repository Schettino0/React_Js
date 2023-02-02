import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import "../Carrito/Carrito.scss"
import { CarritoContenido } from "../CarritoContenido/CarritoContenido"
import { CarritoEmpty } from "../CarritoEmpty/CarritoEmpty"




export const Carrito = () => {

    const { cart } = useContext(CartContext)

    const isEmpty = (cart) => {
        return cart.length > 0 ? true : false
    }
    return (

        isEmpty(cart)
            ? <CarritoContenido />
            : <CarritoEmpty/>
    )
}