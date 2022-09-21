import React from "react";
import {OrderStyle} from './style'
import {AiOutlineClockCircle} from 'react-icons/ai'

export function Order() {
    return (
        <OrderStyle>
            <AiOutlineClockCircle/>
            <div>
                <p>Pedido em andamento</p>
                <p>Bullguer Vila Madalena</p>
                <strong>SUBTOTAL R$67,90</strong>
            </div>
        </OrderStyle>
    )
}