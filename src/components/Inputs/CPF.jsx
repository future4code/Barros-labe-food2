import { InputStyle } from "./styled"

export const CPF = ( { value, onChange } ) => {

    return (
        <InputStyle>
        <label>CPF*</label>
        <input name="cpf" value={value} onChange={onChange} placeholder="000.000.000-00" type="text"
        pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required
        title="Digite o CPF no formato 000.000.000-00"/>
        </InputStyle>
    )
}