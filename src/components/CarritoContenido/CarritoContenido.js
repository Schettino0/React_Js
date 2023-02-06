import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { CambiarCantidad } from "../CambiarCantidad/CambiarCantidad"


export const CarritoContenido = () => {
    let value = 0
    const { cart, emptyCart, totalCart, removeCarrito, currencyFormatter } = useContext(CartContext)
    return (

        <div className="container my-5">
            <h2>Productos en tu carro</h2>
            {
                cart.map(item => (
                    <div className="caja border border-3 p-4 d-flex justify-content-between align-items-center" key={item.id}>
                        <div className="d-flex align-items-center largo">
                            <div>
                                <h3>{item.name}</h3>
                                <h5><strong>Cantidad:</strong>  {item.cantidad} </h5>
                                <h5><strong>Precio</strong> {currencyFormatter({ currency: "CLP", value: item.cantidad*item.price})}</h5>
                            </div>
                        </div>
                        <div>
                            <img className=" img-fluid" src={item.img} alt="{name}"></img>
                        </div>
                        <div>
                            <CambiarCantidad value={item}>

                            </CambiarCantidad>

                            {/* <label>Cantidad:</label>
                            <input 
                                onChange={e => { cambiarCantidad(item.id, e.target.value) }}
                                className="form-control number"
                                type='number'
                                name="cantidad"
                                max={item.stock}
                                min={1}
                                placeholder={item.cantidad}
                            /> */}
                        </div>
                        <div>
                            <button onClick={() => removeCarrito(item.id)} className="btn btn-outline-danger"> <FaTrashAlt /> </button>
                        </div>
                    </div>

                ))
            }
            <h3>Total: ${totalCart()}</h3>
            <Link to="/finalizar" className="btn btn-success me-4" >Finaliar compra</Link>
            <button className="btn btn-danger my-3" onClick={emptyCart}>Vaciar Carrito</button>
            <Link to={"/"} className="btn btn-outline-primary m-lg-4">Volver</Link>
        </div>
    )
}