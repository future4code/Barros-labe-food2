import { InputStyle } from "./styled"

export const Name = ( { value, onChange } ) => {

    return (
        <InputStyle>
        <label>Nome*</label>
        <input name="name" value={value} onChange={onChange} placeholder="seu nome" type="text" 
        pattern="^[a-zA-Z][a-zA-Z-_\.]{3,20}$" required
        title="Digite o nome com pelo menos 3 carateres"/>
        </InputStyle>
    )
}