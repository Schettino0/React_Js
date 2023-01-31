import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import "../Carrito/Carrito.scss"
import { FaTrashAlt } from 'react-icons/fa'

export const Carrito = () => {


    const { cart, emptyCart, totalCart } = useContext(CartContext)
    return (

        <div className="container my-5">
            <h2>Productos en tu carro</h2>
            {
                cart.map(item => (
                    <div className="caja border border-3 p-4 d-flex justify-content-between align-items-center" key={item.id}>
                        <div className="d-flex align-items-center">
                            <div>
                                <h3>{item.name}</h3>
                                <h5><strong>Cantidad:</strong>  {item.cantidad} </h5>
                                <h5><strong>Precio</strong> ${item.cantidad * item.price} </h5>
                            </div>
                        </div>
                        <div>
                            <img className=" img-fluid" src={item.img} alt="{name}"></img>
                        </div>
                            <div>
                                <button className="btn btn-outline-danger"> <FaTrashAlt /> </button>
                            </div>
                    </div>

                ))
            }
            <h3>Total: ${totalCart()}</h3>
            <button className="btn btn-danger my-3" onClick={emptyCart}>Vaciar Carrito</button>
            <Link to={"/"} className="btn btn-outline-primary m-lg-4">Volver</Link>


        </div>
    )
}