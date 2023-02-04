import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const CambiarCantidad = (item) => {
    const {cambiarCantidad} = useContext(CartContext)
    const aumentar = () => {
        if (item.value.cantidad !== item.value.stock) {
            cambiarCantidad(item.value.id,item.value.cantidad + 1)
        }
    }
    const disminuir = () => {
        if (item.value.cantidad > 1) {
            cambiarCantidad(item.value.id,item.value.cantidad - 1)
        }
    }

    return (
        <div>
            <button className="btn btn-danger" onClick={disminuir}>-</button>
            <span className="p-4 fa-2x">{item.value.cantidad}</span>
            <button className="btn btn-primary my-2" onClick={aumentar} >+</button>
        </div>
    )
}