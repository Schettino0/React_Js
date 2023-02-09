import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({ children }) => {

    const currencyFormatter = ({ currency, value }) => {
        const formatter = new Intl.NumberFormat('ES', {
            style: 'currency',
            minimumFractionDigits: 0,
            currency
        })
        return formatter.format(value)
    }



    const [cart, setCart] = useState(init)

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
        const cantidad = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0)
        return currencyFormatter({currency: "CLP" , value:cantidad})

    }
    const removeCarrito = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }
    const totalCantidad = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cambiarCantidad = (id, cambio) => {
        const newcart = cart.slice()
        for (let i = 0; i < newcart.length; i++) {
            if (newcart[i].id === id) {
                newcart[i].cantidad = Number(cambio)
                setCart(newcart)
                console.log(cart)
            }
        }

    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, agregarCarrito, isInCart, emptyCart, totalCart, removeCarrito, totalCantidad, cambiarCantidad, currencyFormatter, setCart }} >
            {children}
        </CartContext.Provider>
    )

}