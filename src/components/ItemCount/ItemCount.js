import { Link } from "react-router-dom"
import { useState } from "react"
import "./ItemCount.scss"

export const ItemCount = ({ stock,cantidad,setCantidad,handleAgregar }) => {

    const aumentar = () => {
        if (cantidad !== stock) {
            setCantidad(cantidad + 1)
        }
    }
    const disminuir = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }
    return (
        <div className=" my-5 text-center">
            
            <button className="btn btn-danger" onClick={disminuir}>-</button>
            <span className="p-4 fa-2x">{cantidad}</span>
            <button className="btn btn-primary my-2" onClick={aumentar}>+</button>
            <br/>
            <button className="btn btn-outline-success m-2" onClick={handleAgregar} >Agregar al Carro</button>
            <Link to={"/"} className="btn btn-outline-primary">Volver</Link>

        </div>
    )
}

export default ItemCount