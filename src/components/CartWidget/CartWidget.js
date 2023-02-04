import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import "../CartWidget/CartWidget.scss"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"


export const CartWidget = ({ contador }) => {
    const { totalCantidad, cart } = useContext(CartContext)



    return (
        <div className={`cartWidget ${cart.length > 0 ? 'cartWidget-active' : ''}`} >
            <FontAwesomeIcon icon= {faCartShopping} />
            <span className="contador">{totalCantidad()}</span>
        </div >
    )
}
