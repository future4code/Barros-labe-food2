import { StyleCardHistory } from "./style"
import {BASE_URL, token} from "../../constants/constants"
import useRequestData from "../../hooks/useRequestData"

export function CardHistory() {
    
    const [data, error, isLoading, reload ] = useRequestData(`${BASE_URL}/orders/history`)   

     const ListHistory = data && data.order.map((item, index) => {

      if (ListHistory="") {
        return "Você não realizou nenhum pedido"
      } else {      
        return (
            <StyleCardHistory key={index}>
              <p>{item.restaurantName}</p>
              <p>{item.createdAt}</p>
              <p>{item.totalPrice}</p>
            </StyleCardHistory>
          )
        }
      })

  return (
    <>
        {isLoading && "Carregando..."}
        {!isLoading && data && ListHistory}
        {!isLoading && !data && error}
    </>
     
  )
}

   