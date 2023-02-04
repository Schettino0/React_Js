import { useEffect, useState } from "react"
import { Carrousel } from "../Carrousel/Carrousel"
import ItemList from "../ItemList/ItemList"
import "../ItemListContainer/ItemListContainer.scss"
import { useParams } from "react-router-dom"
import { Loading } from "../Loading/Loading"
import { collection, query, where, getDocs } from 'firebase/firestore/lite'
import { db } from "../../firebase/config"




export const ItemListContainer = () => {
    const [productos, SetProductos] = useState([])
    const { categoriaid } = useParams()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        //1. referecnai
        const productosRef = collection(db, 'productos')
        const q = categoriaid
            ? query(productosRef, where("category", "==", categoriaid))
            : productosRef
        //2. Peticion asincronica
        getDocs(q)
            .then((resp) => {
                SetProductos(resp.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                }))

            })
            .finally(() => {
                setLoading(false)
            })


        console.log(productos)

    }, [categoriaid]);

    return (
        <div className="ItemListContainer">
            {
                loading
                    ? <Loading />
                    : <>
                        <Carrousel />
                        <ItemList productos={productos} />
                    </>
            }
        </div>

    )
}
