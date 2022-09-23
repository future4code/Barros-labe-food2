import { InputStyle } from "./styled"

export const City = ( { value, onChange, color } ) => {

    return (
        <InputStyle color={color}>
        <label>Cidade*</label>
        <input name="city" value={value} onChange={onChange} placeholder="Cidade" type="text"
        pattern="^[a-zA-Z][a-zA-Z-_\.]{3,20}$" required
        title="Digite o nome com pelo menos 3 carateres"/>
        </InputStyle>
    )
}