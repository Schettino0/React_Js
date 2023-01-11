import { Link } from "react-router-dom"

export const Item = ({ id,name, img, price }) => {

    return (

        <div className="col-4 col-lg-2  text-center border border-secondary rounded-4">
            <img className="mw-100 p-2" src={img} alt="{name}"></img>
            <h5>{name}</h5>
            <p><strong>Precio :</strong> {price}</p>
            <Link to={`/detail/${id}`} className="btn btn-dark mb-2 ">Ver Mas</Link>


        </div>
    )
}
export default Item 
