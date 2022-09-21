import { InputStyle } from "./styled"

export const State = ( { value, onChange, color } ) => {

    return (
        <InputStyle color={color}>
        <label>Estado*</label>
        <input name="state" value={value} onChange={onChange} placeholder="Estado" type="text" 
        pattern="^[a-zA-Z][a-zA-Z-_\.]{3,20}$" required
        title="Digite o nome com pelo menos 3 carateres"/>
        </InputStyle>
    )
}