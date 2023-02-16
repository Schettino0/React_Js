import "../LoginScreen/LoginScreen.scss"
import { useState } from "react";
import { useLoginContext } from "../context/LoginContext";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from "react-router-dom";
// ..
AOS.init();

export const LoginScreen = () => {

    const { login, user, loading, googleLogin } = useLoginContext()

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
        login(values)

    }

    return (
        <div className="loginScreen">
            <div>
            </div>
            <div className="container login" data-aos="zoom-in">
                <h2>Ingresa tus datos: </h2>
                <form onSubmit={handleSubmit} >
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
                        user.error === "Firebase: Error (auth/user-not-found)." && <p className="error" data-aos="zoom-in">Email no encontrado</p>
                    }
                    {
                        user.error === "Firebase: Error (auth/invalid-email)." && <p className="error" data-aos="zoom-in">Email Incorrecto</p>
                    }
                    {
                        user.error === "Firebase: Error (auth/wrong-password)."
                            ? <p className="error" data-aos="zoom-in">Contraseña Incorrecta</p>
                            : " "
                    }
                    <button className="btn btn-primary" disabled={loading}>
                        {loading
                            ? "Ingresando..."
                            : "Ingresar"
                        }
                    </button>


                </form>
                <button className="btn btn-primary me-2 " onClick={googleLogin}> Ingresar con Google</button>
                <Link to="/register" className="btn btn-outline-primary my-2">Registrarme...</Link>

            </div>
        </div>
    )
}