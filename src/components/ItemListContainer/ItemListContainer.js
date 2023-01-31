import { useContext, useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { Carrousel } from "../Carrousel/Carrousel"
import ItemList from "../ItemList/ItemList"
import "../ItemListContainer/ItemListContainer.scss"
import { useParams } from "react-router-dom"
import { CartContext } from "../context/CartContext"


export const ItemListContainer = () => {
    const [productos, SetProductos] = useState([])
    const { categoriaid } = useParams()

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (categoriaid) {
                    SetProductos(res.filter(prod => prod.category == categoriaid))
                } else {
                    SetProductos(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [categoriaid])

    return (
        <div className="ItemListContainer">
            <Carrousel />
            <ItemList productos={productos} />
        </div>
    )
}
export default ItemListContainer