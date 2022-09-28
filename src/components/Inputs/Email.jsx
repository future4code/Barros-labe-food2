import { InputStyle } from "./styled"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/constants"

export const Email = ({ value, onChange, color, isValid }) => {

    const [data, error, isLoading, reload] = useRequestData(`${BASE_URL}/profile`)

        data && localStorage.setItem("email", JSON.stringify(data.user.email))
    
    return (
        <>
            <InputStyle color={color}>
                <label>E-mail*</label>
                <input name="email" defaultValue={JSON.parse(localStorage.getItem("email"))} onChange={onChange} placeholder="email@email.com" type="e-mail" />
            </InputStyle>


            {isValid ? undefined :
                <p>E-mail em formato inválido.</p>
            }
        </>
    )
}