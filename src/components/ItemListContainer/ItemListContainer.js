import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { Carrousel } from "../Carrousel/Carrousel"
import ItemList from "../ItemList/ItemList"
import "../ItemListContainer/ItemListContainer.scss"
import { useParams } from "react-router-dom"


export const ItemListContainer = () => {
    const [productos, SetProductos] = useState([])

    const { categoriaid } = useParams()

    console.log(categoriaid)

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                console.log(res)
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