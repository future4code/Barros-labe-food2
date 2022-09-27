import { InputStyle } from "./styled"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/constants"

export const Number = ( { value, onChange, color } ) => {

    const [data, error, isLoading, reload] = useRequestData(`${BASE_URL}/profile/address`)

    data && localStorage.setItem("number", JSON.stringify(data.address.number))
    

    return (
        <InputStyle color={color}>
        <label>Número*</label>
        <input name="number" value={data.address.number} onChange={onChange} placeholder="Número" type="text"
        title="Digite o nome com pelo menos 3 carateres"/>
        </InputStyle>
    )
}