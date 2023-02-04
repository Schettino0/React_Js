import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Loading } from "../Loading/Loading"
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../../firebase/config"



export const ItemDetailContainer = () => {



    const [loading, setLoading] = useState(true)
    const [item, SetItem] = useState(null)
    const { itemid } = useParams()

    console.log(db)
    useEffect(() => {
        // referencia
        const docRef = doc(db, "productos", itemid)
        // peticion
        getDoc(docRef)
            .then(doc => {
                SetItem({ ...doc.data() , id: doc.id})  
            })
        .finally(() => {
            setLoading(false)
        })
    }, [itemid])

    return (
        <div className="container">
            {
                loading
                    ? <Loading />
                    : item && <ItemDetail {...item}  />
            }
        </div>
    )
}