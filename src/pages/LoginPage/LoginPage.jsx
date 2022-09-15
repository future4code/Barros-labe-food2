import React, { useEffect, useState } from "react";
import { Email } from "../../components/Inputs/Email";
import { Password } from "../../components/Inputs/Password";
import { Button } from "../../components/Button/Button";
import logo from '../../images/logo.png';
import logoblack from '../../images/logo-black.png';
import { LoginPageLoading, LoginPageStyle, TextContainer } from "./style";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const LoginPage = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const [form, onChange] = useForm({
        email: "",
        password: ""
    })

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (

        <>
        {loading ? 

            <LoginPageLoading>
                <img src={logoblack} alt ="Future Eats"/>
            </LoginPageLoading>

            :

            <LoginPageStyle>
                <img src={logo} alt="Future Eats"/>
                <TextContainer>
                    <p>Entrar</p>
                </TextContainer>
                <form onSubmit={onSubmit}>
                    <Email value={form.email} onChange={onChange} />
                    <Password value={form.password} onChange={onChange} name="email" label="Senha*" placeholder="Mínimo 6 caracteres"/>
                    <Button buttonTitle="Entrar" />
                </form>
                <TextContainer>
                   <Link to="/cadastro"> <p>Não possui cadastro? Clique aqui.</p> </Link>
                </TextContainer>
            </LoginPageStyle>
        }
        </>

    )
}

export default LoginPage;