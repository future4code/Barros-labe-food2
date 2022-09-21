import { InputStyle } from "./styled"

export const City = ( { value, onChange } ) => {

    return (
        <InputStyle>
        <label>Cidade*</label>
        <input name="city" value={value} onChange={onChange} placeholder="" type="text" 
        pattern="^[a-zA-Z][a-zA-Z-_\.]{3,20}$" required
        title="Digite o nome com pelo menos 3 carateres"/>
        </InputStyle>
    )
}