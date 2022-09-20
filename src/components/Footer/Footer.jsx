import iconAvatar from "../../images/avatar.png"
import iconCart from "../../images/cart.png"
import iconHome from "../../images/homepage.png"

export function Footer () {
    return(
        <div>
            <img src={iconHome}></img>
            <img src={iconCart}></img>
            <img src={iconAvatar}></img>
        </div>
    )
}