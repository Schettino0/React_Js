import { useContext } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { useLoginContext } from "../context/LoginContext"
import { Loading } from "../Loading/Loading"



export const Finalizar = () => {

    const [loading, setLoading] = useState(true)
    const { cart, totalCart } = useContext(CartContext)
    console.log(cart)
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
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }

    return (
        loading
            ? <> <Loading/> </>
            : <>

                <div className="container border border-3 my-5 ">
                    <h3 className="text-center mb-5">Ingresa tus datos para proceder al pago.</h3>
                    <div className="d-flex  justify-content-around">
                        <div className="d-flex  flex-column ">
                            <h3>Tus productos:</h3>
                            {
                                cart.map((item) => {
                                    return (
                                        <h5 className="my-2 ">- {item.cantidad} {item.name}</h5>
                                    )
                                })
                            }
                            <h3>Total: ${totalCart()}</h3>
                        </div>
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
                                <input
                                    className="form-control"
                                    onChange={handleInputChange}
                                    type='email'
                                    value={values.emai}
                                    name="email"
                                    required
                                />
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