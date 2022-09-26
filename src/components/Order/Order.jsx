import React from "react";
import {OrderStyle} from './style'
import {AiOutlineClockCircle} from 'react-icons/ai'

export function Order() {
    const price = localStorage.getItem("price").toString().replace(".", ",")
    return (
        <OrderStyle>
            <AiOutlineClockCircle/>
            <div>
                <p>Pedido em andamento</p>
                <p>{localStorage.getItem("restaurantName")}</p>
                <strong>SUBTOTAL R${price}</strong>
            </div>
        </OrderStyle>
    )
}