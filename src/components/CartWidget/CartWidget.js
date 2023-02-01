import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import  {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import "../CartWidget/CartWidget.scss"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"


export const CartWidget = ({contador}) => {
const {totalCantidad} = useContext(CartContext)
    


    return (
        <div className='cartWidget btn btn-dark'>
            <FontAwesomeIcon icon= {faCartShopping} />
            <span className="contador">{totalCantidad()}</span>
        </div>
    )
}
