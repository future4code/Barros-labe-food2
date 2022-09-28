import { InputStyle } from "./styled"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/constants"

export const Street = ({ value, onChange, color }) => {

    const [data, error, isLoading, reload] = useRequestData(`${BASE_URL}/profile/address`)

        data && localStorage.setItem("street", JSON.stringify(data.address.street))

    return (
        <InputStyle color={color}>
            <label>Logradouro*</label>
            <input name="street" defaultValue={JSON.parse(localStorage.getItem("street"))} onChange={onChange} placeholder="Rua / Av." type="text"
                title="Digite o nome com pelo menos 3 carateres" />
        </InputStyle>
    )
}