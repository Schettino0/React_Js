import "../ItemListContainer/ItemListContainer.scss"

export const ItemListContainer = ({saludo}) => {
    return (
        <div className="ItemListContainer">
            <h3>{saludo}</h3>
        </div>
    )
}