
import { ItemCount } from "../ItemCount/ItemCount"
import { useState } from "react";


export const ItemDetail = ({ id, name, price, category, stock, img, description }) => {
    const item= {id,name,price,category,stock,img,description}
    const [cantidad, setCantidad] = useState(1);



    const handleAgregar = () => {
        console.log({
            id,
            name,
            cantidad,
            img
        })
    }

    return (
        <div className="container d-flex my-5 p-3 gap-5  rounded-3 border border-5 rounded-">
            <div className=" ">
                <img className="border border-white rounded-3 p-5" src={img} />
            </div>
            <div className="">
                <h1>{name}</h1>
                <h3>{price}</h3>
                <h4><strong>Disponible: </strong> {stock}</h4>
                <ItemCount
                    stock={stock}
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    handleAgregar= {handleAgregar}
                />
            </div>
        </div>
    )

}