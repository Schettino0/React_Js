import { collection, doc, documentId, getDoc, getDocs, query, where } from "firebase/firestore/lite"
import { useState } from "react"
import { useContext, useEffect } from "react"
import { db } from "../../firebase/config"
import { LoginContext } from "../context/LoginContext"
import { Loading } from "../Loading/Loading"
export const MyOrders = () => {

    const { user, loading, setLoading } = useContext(LoginContext)
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setLoading(true)
        const orderRef = collection(db, 'orders')
        const busqueda = query(orderRef, where('email', "==", user.email))
        getDocs(busqueda)
            .then((resp) => {
                setOrders(resp.docs.map((doc) => {
                    return {
                        ...doc.data(), id: doc.id
                    }
                }))
            })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        loading
            ? <Loading />
            : <>
                <div className="container my-5">
                    <h2>Mis ordenes anteriores</h2>
                    <hr />
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Orden de compra</th>
                                {/* <th>Productos</th> */}
                                <th scope="col">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((orden) => {
                                    console.log(orden)
                                    return (
                                        <tr>
                                            <td>{orden.id}</td>
                                            <td>{orden.total}</td>
                                            <td>Ver mas (proximamente)</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </>
    )
}