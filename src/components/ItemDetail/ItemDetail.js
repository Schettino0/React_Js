
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


export const ItemDetail = ({ id, name, price, category, stock, img, description }) => {

    const item = { id, name, price, category, stock, img, description }
    const [cantidad, setCantidad] = useState(1);
    const { agregarCarrito, isInCart } = useContext(CartContext)


    const handleAgregar = () => {
        Swal.fire({
            icon: 'success',
            title: 'Ha sido agregado al carrito!',
            showConfirmButton: false,
            timer: 2500
        })
        const item = {
            id,
            stock,
            name,
            cantidad,
            img,
            price
        }

        agregarCarrito(item)

    }

    return (
        <div className="container d-flex my-5 p-3 gap-5  rounded-3 border border-5 rounded-">
            <div className=" ">
                <img className="border border-white rounded-3 p-5" src={img} />
            </div>
            <div className="">
                <h1>{name}</h1>
                <h3> ${price}</h3>
                <h4><strong>Disponible: </strong> {stock}</h4>

                {
                    !isInCart(id)
                        ? <ItemCount
                            stock={stock}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            handleAgregar={handleAgregar}
                        />
                        :
                        <Link to="/carrito" className="btn btn-success mt-5"> Terminar mi Compra</Link>
                }


            </div>
        </div>
    )

}