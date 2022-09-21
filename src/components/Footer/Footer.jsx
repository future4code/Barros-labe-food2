import iconAvatar from "../../images/avatar.png"
import iconCart from "../../images/cart.png"
import iconHome from "../../images/homepage.png"
import * as MyRoutes from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"

export function Footer () {

    const navigate = useNavigate()

    return(
        <div>
            <img src={iconHome} onClick={()=>MyRoutes.goToFeedPage(navigate)}></img>
            <img src={iconCart} onClick={()=>MyRoutes.goToCartPage(navigate)}></img>
            <img src={iconAvatar}></img>
        </div>
    )
}