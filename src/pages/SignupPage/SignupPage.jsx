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
import axios from "axios";
import { BASE_URL } from "../../constants/constants";
import { goToAddressPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";


const SignupPage = () => {

    const navigate = useNavigate()

    const [form, onChange] = useForm({
        name: "",
        email: "",
        cpf: "",
        password: "",
    })

    const SignUp = () => {
        axios.post(`${BASE_URL}/signup`, form)
        .then((response) => {
            localStorage.setItem("token", response.token)
            goToAddressPage(navigate)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        SignUp()
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
                <Name name="name" value={form.name} onChange={onChange}/>
                <Email name="email" value={form.email} onChange={onChange}/>
                <CPF name="cpf" value={form.cpf} onChange={onChange}/>
                <Password name="password" value={form.password} onChange={onChange} label="Senha*" placeholder="Mínimo 6 caracteres"/>
                <Password name="password-check" value="" label="Confirmar*" placeholder="Confirme a senha anterior"/>
                <Button type="submit" buttonTitle="Criar"/>
            </form>
        </SignupPageStyle>
        </>
    )
}

export default SignupPage;