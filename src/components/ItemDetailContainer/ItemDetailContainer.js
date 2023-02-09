import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Loading } from "../Loading/Loading"
import { doc, getDoc, getDocs } from "firebase/firestore/lite";
import { db } from "../../firebase/config"
import { Link } from "react-router-dom";



export const ItemDetailContainer = () => {



    const [loading, setLoading] = useState(true)
    const [item, SetItem] = useState(null)
    const { itemid } = useParams()
    const docRef = doc(db, "productos", itemid)
    const [itemExist, setItemExist] = useState(true)




    useEffect(() => {
        // referencia
        // peticion
        getDoc(docRef)
            .then(doc => {
                console.log(doc.data())
                if (doc.data() === undefined) {
                    setItemExist(false)
                    console.log("Producto no existe")

                } else {
                    setItemExist(true)
                    SetItem({ ...doc.data(), id: doc.id })
                }
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
                    :
                    itemExist
                        ? item && <ItemDetail {...item} />
                        : <>
                            <div className="container my-5 text-center">
                                <h2>El producto solicitado no existe!</h2>
                                <Link to={"/"} className="btn btn-danger my-5">Volver</Link>
                            </div>
                        </>

            }
        </div>
    )
}