import { InputStyle } from "./styled"

export const State = ( { value, onChange } ) => {

    return (
        <InputStyle>
        <label>Estado*</label>
        <input name="state" value={value} onChange={onChange} placeholder="" type="text" 
        pattern="^[a-zA-Z][a-zA-Z-_\.]{3,20}$" required
        title="Digite o nome com pelo menos 3 carateres"/>
        </InputStyle>
    )
}