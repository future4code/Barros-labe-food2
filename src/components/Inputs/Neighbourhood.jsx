import { InputStyle } from "./styled"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/constants"

export const Neighbourhood = ( { value, onChange, color } ) => {

    const [data, error, isLoading, reload] = useRequestData(`${BASE_URL}/profile/address`)

    data && localStorage.setItem("neighbourhood", JSON.stringify(data.address.neighbourhood))

    return (
        <InputStyle color={color}>
        <label>Bairro*</label>
        <input name="neighbourhood" value={data.address.neighbourhood} onChange={onChange} placeholder="Bairro" type="text" 
        title="Digite o nome com pelo menos 3 carateres"/>
        </InputStyle>
    )
}