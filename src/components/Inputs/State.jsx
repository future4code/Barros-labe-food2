import { InputStyle } from "./styled"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/constants"

export const State = ({ value, onChange, color }) => {

    const [data, error, isLoading, reload] = useRequestData(`${BASE_URL}/profile/address`)

        data && localStorage.setItem("state", JSON.stringify(data.address.state))

    return (
        <InputStyle color={color}>
            <label>Estado*</label>
            <input name="state" defaultValue={JSON.parse(localStorage.getItem("state"))} onChange={onChange} placeholder="Estado" type="text"
                title="Digite o nome com pelo menos 2 carateres" />
        </InputStyle>
    )
}