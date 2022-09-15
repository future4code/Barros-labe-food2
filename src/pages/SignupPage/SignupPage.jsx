import React from "react";
import {Header} from '../../components/Header/Header'
import { Email } from "../../components/Inputs/Email";
import { Name } from "../../components/Inputs/Name";
import { CPF } from "../../components/Inputs/CPF";
import logo from '../../images/logo.png';
import { SignupPageStyle, TextContainer } from "./style";
import { Password } from "../../components/Inputs/Password";
import { Button } from "../../components/Button/Button";
import { useForm } from "../../hooks/useForm";


const SignupPage = () => {

    const [form, onChange] = useForm({
        name: "",
        password: "",
        cpf: "",
        password: "",
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Olá")
    }
    return(
        <>
        <Header showArrow={'true'} showTitle={'false'} title={'Cadastro'}/>
        <SignupPageStyle>
            <img src={logo} alt="Future Eats"/>
            <TextContainer>
                <p>Cadastrar</p>
            </TextContainer>
            <form onSubmit={onSubmit}>
                <Name name={form.name} onChange={onChange}/>
                <Email name={form.email} onChange={onChange}/>
                <CPF name={form.cpf} onChange={onChange}/>
                <Password name={form.password} onChange={onChange} label="Senha*" placeholder="Mínimo 6 caracteres"/>
                <Password name="password-check" label="Confirmar*" placeholder="Confirme a senha anterior"/>
                <Button type="submit" buttonTitle="Criar"/>
            </form>
        </SignupPageStyle>
        </>
    )
}

export default SignupPage;