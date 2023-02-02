import "../LoginScreen/LoginScreen.scss"
import { useState } from "react";


export const LoginScreen = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        name:''
    });

    const handleInputChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)

    }

    return (
        <div className="loginScreen">
            <div>
                <h2>Login</h2>
            </div>
            <div className="container text-center">
                <form onSubmit={handleSubmit}>
                <input
                        className="form-control my-3"
                        type='text'
                        value={values.name}
                        onChange={handleInputChange}
                        name="name"
                    />
                    <input
                        className="form-control my-3"
                        type='email'
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"
                    />


                    <input
                        className="form-control my-3"
                        type='password'
                        value={values.password}
                        onChange={handleInputChange}
                        name="password"
                    />
                    <button className="btn btn-primary" >Ingresar</button>

                </form>
            </div>
        </div>
    )
}