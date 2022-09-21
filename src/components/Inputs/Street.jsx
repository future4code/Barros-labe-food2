import { InputStyle } from "./styled"

export const Street = ( { value, onChange, color} ) => {

    return (
        <InputStyle color={color}>
        <label>Logradouro*</label>
        <input name="street" value={value} onChange={onChange} placeholder="Rua / Av." type="text" 
        pattern="^[a-zA-Z][a-zA-Z-_\.]{3,20}$" required
        title="Digite o nome com pelo menos 3 carateres"/>
        </InputStyle>
    )
}