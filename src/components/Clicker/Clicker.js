
import { useState } from "react"
import "./Clicker.scss"

export const Clicker = ({ stock }) => { 
    const [contador, setCounter] = useState(0)

    const aumentar = () => {
        if (contador !== stock) {
            setCounter(contador + 1)
        }
        console.log(contador)
    }
    const disminuir = () => {
        if (contador > 0) {
            setCounter(contador - 1)
        }
    }


    return (
        <div className=" my-5 box">
            <h1 className="contador">{contador}</h1>
            <button className="btn btn-danger" onClick={disminuir}>Disminuir</button>
            <button className="btn btn-primary my-2" onClick={aumentar}>Aumentar</button>
        </div>
    )
}

export default Clicker