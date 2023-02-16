import { addDoc, collection, doc, documentId, getDoc, getDocs, query, updateDoc, where, writeBatch, WriteBatch } from "firebase/firestore/lite"
import { useContext } from "react"
import { useState } from "react"
import { Await, Link, Navigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { db } from "../../firebase/config"
import { Loading } from "../Loading/Loading"
import Swal from 'sweetalert2'
import "../Checkout/Checkout.scss"

import { LoginContext } from "../context/LoginContext"




export const Checkout = () => {

    const { cart, totalCart, setCart } = useContext(CartContext)
    const { user } = useContext(LoginContext)
    const [loading, setLoading] = useState(true)
    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        name: "",
        adress: "",
        phone: "",
        email: ""
    })

    setTimeout(() => {
        setLoading(false)
    }, 1000);

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        console.log(values)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        createOrder(values)
    }

    const orden = {
        cliente: values,
        email: user.email,
        items: cart,
        total: totalCart()
    }
    const createOrder = async (values) => {


        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productosRef = collection(db, 'productos')
        const outOfStock = []
        const itemsRef = query(productosRef, where(documentId(), 'in', cart.map(prod => prod.id)))
        const productos = await getDocs(itemsRef)

        productos.docs.forEach(doc => {
            const item = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            setCart([])

                            Swal.fire({
                                icon: 'success',
                                title: 'Orden de compra generada con exito!',
                                showConfirmButton: false,
                                timer: 2500
                            })

                        })
                        .catch((error) => console.log(error))
                })
        } else {
            alert("Hay items sin stock")
        }

    }

    if (orderId) {
        console.log(orderId)
        return (
            <div className="container my-5 text-center border border-2 ">
                <h2>Tu orden de compra se ha generado con exito!</h2>
                <h3>Numero de orden: {orderId}</h3>
                <Link to={"/"} className="btn btn-primary my-2">Volver</Link>
            </div>
        )
    }

    return (
        loading
            ? <> <Loading /> </>
            : <>

                <div className="container border border-3 my-5">
                    <h3 className="text-center mb-5">Ingresa tus datos para proceder al pago.</h3>
                    <div className="d-flex  justify-content-around flex-lg-row flex-column">
                        <div className="d-flex  flex-column productos ">
                            <h3>Tus productos:</h3>
                            {
                                cart.map((item) => {
                                    return (
                                        <h5 className="my-2 ">- {item.cantidad} {item.name}</h5>
                                    )
                                })
                            }
                        </div>
                        <h3>Total: ${totalCart()}</h3>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <label>Nombre:</label>
                                <input
                                    className="form-control"
                                    onChange={handleInputChange}
                                    type='text'
                                    name="name"
                                    value={values.name}
                                    required
                                />
                                <label>Email:</label>
                                {
                                    user.email
                                        ? <>
                                            <input
                                                placeholder={user.email}
                                                className="form-control"
                                                onChange={handleInputChange}
                                                type='email'
                                                value={user.email}
                                                name="email"
                                                required
                                            />
                                        </>
                                        : <>
                                            <input
                                                className="form-control"
                                                onChange={handleInputChange}
                                                type='email'
                                                value={values.email}
                                                name="email"
                                                required
                                            />
                                        </>
                                }

                                <label>Direccion:</label>
                                <input
                                    className="form-control"
                                    onChange={handleInputChange}
                                    value={values.adress}
                                    type='adress'
                                    name="adress"
                                    required
                                />
                                <label>Celular:</label>
                                <input
                                    className="form-control"
                                    onChange={handleInputChange}
                                    value={values.phone}
                                    type='tel'
                                    name="phone"
                                    required
                                />
                                <button className="btn btn-success my-3">Finalizar Compra</button>
                                <Link to="/carrito" className="btn btn-danger mx-3">Volver</Link>
                            </form>
                        </div>
                    </div>
                </div></>

    )
}
