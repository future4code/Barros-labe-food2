import React from "react";
import { Email } from "../../components/Inputs/Email";
import { Password } from "../../components/Inputs/Password";
import { Button } from "../../components/Button/Button";
import logo from '../../images/logo.png';
import logoblack from '../../images/logo-black.png';
import { LoginPageLoading, LoginPageStyle, TextContainer } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { goToSignupPage } from "../../routes/coordinator";
import { useForm } from "../../hooks/useForm";

const LoginPage = () => {

    const [form, onChange] = useForm({
        email: "",
        password: ""
    })

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return(
/*         <LoginPageLoading>
            <img src={logoblack} alt ="Future Eats"/>
        </LoginPageLoading> */
        
        <LoginPageStyle>
            <img src={logo} alt="Future Eats"/>
            <TextContainer>
                <p>Entrar</p>
            </TextContainer>
            <form onSubmit={onSubmit}>
                <Email value={form.email} onChange={onChange}/>
                <Password value={form.password} onChange={onChange}/>
                <Button buttonTitle="Entrar" />
            </form>
            <TextContainer>
               <Link to={goToSignupPage(useNavigate())}> <p>Não possui cadastro? Clique aqui.</p> </Link>
            </TextContainer>
        </LoginPageStyle>
    )
}

export default LoginPage;