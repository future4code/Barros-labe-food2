import { StyleCardHistory } from "./style"
import {BASE_URL, token} from "../../constants/constants"
import useRequestData from "../../hooks/useRequestData"

export function CardHistory() {
    
    const [data, error, isLoading, reload ] = useRequestData(`${BASE_URL}/orders/history`)   

     const ListHistory = data && data.map((item, index) => {
        return (
            <StyleCardHistory key={index}>
              <p>{item.name}</p>
              <p>{item.data}</p>
              <p>{item.subtotal}</p>
            </StyleCardHistory>
            
        )
        
    })

  return (
    <>
        {isLoading && "Carregando..."}
        {!isLoading && data && ListHistory}
        {!isLoading && !data && error}
    </>
     
  )
}

   