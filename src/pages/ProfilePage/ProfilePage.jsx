import React from "react";
import { Header } from "../../components/Header/Header";
import icon_edit from "../../images/edit.png"
import { ProfileStyle, AdressStyle, StyleHistory } from "./style";
import { CardHistory } from "../../components/CardHistory";
import { Footer } from "../../components/Footer/Footer";
import { StyleFooter } from "../../components/Footer/style";


const ProfilePage = () => {
    return (
        <>
            <Header showArrow={'false'} showTitle={'true'} title={'Meu perfil'} />
            <ProfileStyle>
                <span>Bruna Oliveira<img src={icon_edit}></img></span>
                <span>bruna_o@gmail.com</span>
                <span>333.3333.333-33</span>
            <AdressStyle>
                <span>Endereço Cadastrado<img src={icon_edit}></img></span>
                <span>Rua Alessandra Vieira, 42 - Santana</span>
            </AdressStyle>
            <StyleHistory>
            <span>Histórico de pedidos</span>
                <CardHistory/>
                <CardHistory/>
                <CardHistory/>
                <CardHistory/>
            </StyleHistory>
               
            </ProfileStyle>
            <StyleFooter>
                <Footer/>
            </StyleFooter>
        </>
    )
}

export default ProfilePage;