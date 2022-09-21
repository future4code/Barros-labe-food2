import { InputStyle } from "./styled"

export const Number = ( { value, onChange } ) => {

    return (
        <InputStyle>
        <label>Número*</label>
        <input name="number" value={value} onChange={onChange} placeholder="" type="text" 
        pattern="^[0-9999]{1,6}$" required
        title="Digite o nome com pelo menos 3 carateres"/>
        </InputStyle>
    )
}