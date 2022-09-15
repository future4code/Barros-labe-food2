import { InputStyle } from "./styled"

export const Email = ( { value, onChange } ) => {

    return (
        <InputStyle>
        <label>E-mail*</label>
        <input name="email" value={value} onChange={onChange} placeholder="email@email.com" type="e-mail" />
        </InputStyle>
    )
}