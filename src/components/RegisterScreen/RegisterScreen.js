import "../RegisterScreen/RegisterScreen.scss"
import { useState } from "react";
import { useLoginContext } from "../context/LoginContext";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from "react-router-dom";

// ..
AOS.init();

export const RegisterScreen = () => {

    const { user, loading, register } = useLoginContext()

    const [values, setValues] = useState({
        email: '',
        password: '',
        name: ''
    });

    const handleInputChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        register(values)

    }

    return (
        <div className="loginScreen">
            <div>
            </div>
            <div className="container login" data-aos="zoom-in">
                <h2>Ingresa tus datos: </h2>
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input
                        className="form-control my-3"
                        type='email'
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"
                    />
                    <label>Contraseña:</label>

                    <input
                        className="form-control my-3"
                        type='password'
                        value={values.password}
                        onChange={handleInputChange}
                        name="password"
                    />
                    {
                        user.error === "Firebase: Password should be at least 6 characters (auth/weak-password)." && <p className="error" data-aos="zoom-in">La Contraseña debe contener como minimo 6 caracteres.</p>
                    }
                    <button className="btn btn-primary" disabled={loading}>
                        {loading
                            ? "Creando cuenta..."
                            : "Crear Cuenta"
                        }
                    </button>


                </form>
                <Link to="/login" className="btn btn-outline-primary my-2">Ya tengo cuenta</Link>
            </div>
        </div>
    )
}