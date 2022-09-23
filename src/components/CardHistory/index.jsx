import { StyleCardHistory } from "./style"
import {BASE_URL, token} from "../../constants/constants"
import useRequestData from "../../hooks/useRequestData"
import { useState } from "react"

export function CardHistory() {
    
    const [data, error, isLoading] = useRequestData(`${BASE_URL}/orders/history`)

    const ListHistory = data && data.orders.map((item, index) => {

      return (
            <StyleCardHistory key={index}>
              <p>{item.restaurantName}</p>
              <p>{item.createdAt}</p>
              <p>{item.totalPrice}</p>
            </StyleCardHistory> )
      })

  return (
    <>
        {isLoading && "Carregando..."}
        {!isLoading && data && data.orders.length > 0 && ListHistory}
        {!isLoading && data && data.orders.length === 0 && <p>Você não realizou nenhum pedido.</p>}
        {!isLoading && error && <p>Erro</p>}
    </>
     
  )
}

   