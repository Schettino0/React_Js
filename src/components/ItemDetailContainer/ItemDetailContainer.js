import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { pedirDatosPorID } from "../../helpers/pedirDatosPorID"
import { ItemDetail } from "../ItemDetail/ItemDetail"



export const ItemDetailContainer = () => {

    const [item, SetItem] = useState(null)
    const { itemid } = useParams()
    useEffect(() => {
        pedirDatosPorID(Number(itemid))
            .then((data) => {
                SetItem(data)
            })
    }, [itemid])
    return (
        <div className="container">
            {
                item && <ItemDetail {...item} />
            }
        </div>
    )
}