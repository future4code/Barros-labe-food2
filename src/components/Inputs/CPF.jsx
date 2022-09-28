import { InputStyle } from "./styled"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/constants"

export const CPF = ({ value, onChange, color, isValid }) => {

    const [data, error, isLoading, reload] = useRequestData(`${BASE_URL}/profile`)

        data && localStorage.setItem("cpf", JSON.stringify(data.user.cpf))

    return (
        <>
            <InputStyle color={color}>
                <label>CPF*</label>
                <input name="cpf" defaultValue={JSON.parse(localStorage.getItem("cpf"))} onChange={onChange} placeholder="000.000.000-00" type="text" />
            </InputStyle>

            {isValid ? undefined :
                <p>CPF em formato inválido.</p>}
        </>

    )
}