import { InputPassword, InputStyle } from "./styled"
import { useState } from "react"
import password1 from '../../images/password1.png';
import password2 from '../../images/password2.png';

export const Password = ( { value, onChange } ) => {

    const [showPassword, setShowPassword] = useState(false)
    const clickShowPassword = () => setShowPassword(!showPassword)

    return (
        <InputPassword>
            <label>Senha*</label>
            <div>
                <input name="password" value={value} onChange={onChange} placeholder="Mínimo 6 caracteres" type={showPassword ? "text" : "password"} />
                <button onClick={clickShowPassword}>
                    {showPassword ? <img src={password2} alt="Mostrar senha"/> : <img src={password1} alt="Esconder senha"/>}
                </button>
            </div>
        </InputPassword>
    )
}