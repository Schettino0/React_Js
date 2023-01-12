import { Link } from "react-router-dom"
import { Clicker } from "../Clicker/Clicker"

export const ItemDetail = ({ id, name, price, category, stock, img, description }) => {
    console.log(name)
    return (
        <div className="container d-flex my-5 p-3 gap-5  rounded-3 border border-5 rounded-">
            <div className=" ">
                <img className="border border-white rounded-3 p-5" src={img} />
            </div>
            <div className="">
                <h1>{name}</h1>
                <h3>{price}</h3>
                <h4><strong>Disponible: </strong> {stock}</h4>
                <Clicker stock={stock} />

                <button className="btn btn-outline-success m-2" >Agregar al Carro</button>
                <Link to={"/"} className="btn btn-outline-primary">Volver</Link>

            </div>




        </div>
    )

}