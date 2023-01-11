export const Item = ({ name, img, price }) => {

    return (

        <div className="col-4 col-lg-2  text-center border border-secondary rounded-4">
            <img className="mw-100 p-2" src={img} alt="{name}"></img>
            <h5>{name}</h5>
            <p><strong>Precio :</strong> {price}</p>
            <button className="btn btn-dark mb-2 ">Comprar</button>

        </div>
    )
}
export default Item 
