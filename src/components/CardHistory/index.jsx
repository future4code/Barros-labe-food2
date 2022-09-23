import { StyleCardHistory } from "./style"
import {BASE_URL, token} from "../../constants/constants"
import useRequestData from "../../hooks/useRequestData"
import { useState } from "react"

export function CardHistory() {
    
    const [data, error, isLoading, reload ] = useRequestData(`${BASE_URL}/orders/history`)   

    const [emptyHistory, setEmptyHistory] = useState(false)

    const ListHistory = data && data.order.map((item, index) => {

        {emptyHistory && <p>Você não realizou nenhum pedido</p>}

        {!emptyHistory && (
            <StyleCardHistory key={index}>
              <p>{item.restaurantName}</p>
              <p>{item.createdAt}</p>
              <p>{item.totalPrice}</p>
            </StyleCardHistory>
          )
        }
      })
console.log(`resultado ${[ListHistory]}`)
  return (
    <>
        {isLoading && "Carregando..."}
        {!isLoading && data && ListHistory}
        {!isLoading && !data && error}
    </>
     
  )
}

   