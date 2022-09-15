import { InputStyle } from "./styled"

export const InputTeste = ( {inputLabel, inputValue, inputPlaceholder } ) => {

    return (
        <InputStyle>
        <label>{inputLabel}</label>
        <input placeholder={inputPlaceholder} value={inputValue}></input>
        </InputStyle>
    )
}