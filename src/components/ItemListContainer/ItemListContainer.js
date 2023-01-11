import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { Carrousel } from "../Carrousel/Carrousel"
import ItemList from "../ItemList/ItemList"
import "../ItemListContainer/ItemListContainer.scss"
import { useParams } from "react-router-dom"


export const ItemListContainer = () => {
    const [productos, SetProductos] = useState([])
    const parametros = useParams()
    console.log(parametros)

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                SetProductos(res)
                console.log(productos)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className="ItemListContainer">
            <Carrousel/>
            <ItemList productos={productos} />
        </div>
    )
}
export default ItemListContainer