import { InputStyle } from "./styled"

export const CPF = ( { value, onChange } ) => {

    return (
        <InputStyle>
        <label>CPF*</label>
        <input name="cpf" value={value} onChange={onChange} placeholder="000.000.000-00" type="text" />
        </InputStyle>
    )
}