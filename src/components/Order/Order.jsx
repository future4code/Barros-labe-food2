import React from "react";
import {OrderStyle} from './style'
import {AiOutlineClockCircle} from 'react-icons/ai'

export function Order() {
    return (
        <OrderStyle>
            <AiOutlineClockCircle/>
            <div>
                <p>Pedido em andamento</p>
                <p>{localStorage.getItem("restaurantName")}</p>
                <strong>SUBTOTAL {localStorage.getItem("price")}</strong>
            </div>
        </OrderStyle>
    )
}