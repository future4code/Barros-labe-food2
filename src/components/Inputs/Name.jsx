import { InputStyle } from "./styled"

export const Name = ( { value, onChange } ) => {

    return (
        <InputStyle>
        <label>Nome*</label>
        <input name="name" value={value} onChange={onChange} placeholder="Nome e sobrenome" type="text" />
        </InputStyle>
    )
}