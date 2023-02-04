import { Link } from "react-router-dom"
import AOS from 'aos';
import "../Item/Item.scss"
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
// ..
AOS.init();


export const Item = ({ id, name, img, price }) => {

    const { currencyFormatter } = useContext(CartContext)
    const value = price 
    console.log()
    return (
        <div className="col-4 col-lg-2 text-center border border-secondary rounded-4 item" data-aos="fade-down">
            <img className="mw-100 p-2" src={img} alt="{name}"></img>
            <h5>{name}</h5>
            <p>Precio : $ <strong>{currencyFormatter({currency: "CLP" , value})}</strong></p>
            <Link to={`/item/${id}`} className="btn btn-dark mb-2 ">Ver Mas</Link>
        </div>
    )
}
export default Item 
