import { StyleCardHistory } from "./style"
import {BASE_URL, token} from "../../constants/constants"
import useRequestData from "../../hooks/useRequestData"
import { useState } from "react"

export function CardHistory() {
    
    const [data, error, isLoading] = useRequestData(`${BASE_URL}/orders/history`)

    const ListHistory = data && data.orders.map((item, index) => {

    let subtotal = item.totalPrice.toFixed(2)
    
    return (

            <StyleCardHistory key={index}>
              <p>{item.restaurantName}</p>
              <p>{item.createdAt}</p>
              <p>SUBTOTAL R${subtotal}</p>
            </StyleCardHistory> )
      })
      console.log(data)
  return (
    <>
        {isLoading && "Carregando..."}
        {!isLoading && data && data.orders.length > 0 && ListHistory}
        {!isLoading && data && data.orders.length === 0 && <p>Você não realizou nenhum pedido.</p>}
        {!isLoading && error && <p>Erro</p>}
    </>
     
  )

}

   