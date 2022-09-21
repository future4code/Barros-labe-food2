import { InputStyle } from "./styled"

export const District = ( { value, onChange, color } ) => {

    return (
        <InputStyle color={color}>
        <label>Bairro*</label>
        <input name="district" value={value} onChange={onChange} placeholder="Bairro" type="text" 
        pattern="^[a-zA-Z][a-zA-Z-_\.]{3,20}$" required
        title="Digite o nome com pelo menos 3 carateres"/>
        </InputStyle>
    )
}