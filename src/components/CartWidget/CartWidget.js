import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import  {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import "../CartWidget/CartWidget.scss"

export const CartWidget = ({contador}) => {
    return (
        <div className='cartWidget'>
            <FontAwesomeIcon icon= {faCartShopping} />
            <span className="contador">{contador}</span>
        </div>
    )
}
