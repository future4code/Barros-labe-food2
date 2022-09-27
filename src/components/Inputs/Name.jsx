import { InputStyle } from "./styled"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/constants"
import { useEffect } from "react"

export const Name = ({ value, onChange, color, isValid }) => {

    const [data, error, isLoading, reload] = useRequestData(`${BASE_URL}/profile`)

    useEffect(() => {
        data && localStorage.setItem("name", JSON.stringify(data.user.name))
    }, [])

    return (
        <>
            <InputStyle color={color}>
                <label>Nome*</label>
                <input name="name" defaultValue={JSON.parse(localStorage.getItem("name"))} onChange={onChange} placeholder="Nome e sobrenome" type="text" />
            </InputStyle>

            {isValid ? undefined :
                <p>Nome deve possuir no mínimo 2 caracteres.</p>}

        </>

    )
}