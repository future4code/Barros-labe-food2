import { ButtonStyle } from "./styled"

export const Button = ( {color, buttonTitle} ) => {

    return (
        <ButtonStyle color={color}><p>{buttonTitle}</p></ButtonStyle>
    )

}