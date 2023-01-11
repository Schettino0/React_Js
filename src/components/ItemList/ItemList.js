import Item from "../Item/Item"

const ItemList = ({ productos }) => {

    return (


        <div className="container-md my-4">
                <section className="row gap-3 justify-content-center ">
                    {
                        productos.map((item)=> <Item key={item.id} {...item}/>)
                    }
                </section>
        </div>


    )
}

export default ItemList