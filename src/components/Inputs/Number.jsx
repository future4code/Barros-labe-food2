import { InputStyle } from "./styled"

export const Number = ( { value, onChange, color } ) => {

    return (
        <InputStyle color={color}>
        <label>Número*</label>
        <input name="number" value={value} onChange={onChange} placeholder="Número" type="text" 
        pattern="^[0-9999]{1,6}$" required
        title="Digite o nome com pelo menos 3 carateres"/>
        </InputStyle>
    )
}