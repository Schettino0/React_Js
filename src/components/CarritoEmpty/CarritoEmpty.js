import { Navigate, Route } from 'react-router'
import Swal from 'sweetalert2'



export const CarritoEmpty = () => {

    Swal.fire({
        icon: 'error',
        title: 'No tienes productos en tu carro de compras!',
        showConfirmButton: false,
        timer: 2500
    })


    return (
        <Navigate to="/" />
    )
}