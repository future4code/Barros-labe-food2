import { InputStyle } from "./styled"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/constants"

export const City = ( { value, onChange, color } ) => {
    
    const [data, error, isLoading, reload] = useRequestData(`${BASE_URL}/profile/address`)

        data && localStorage.setItem("city", JSON.stringify(data.address.city))

    return (
        <InputStyle color={color}>
        <label>Cidade*</label>
        <input name="city" defaultValue={JSON.parse(localStorage.getItem("city"))} onChange={onChange} placeholder="Cidade" type="text"
        title="Digite o nome com pelo menos 3 carateres"/>
        </InputStyle>
    )
}