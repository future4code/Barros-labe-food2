import React from "react";
import { Header } from "../../components/Header/Header";
import icon_edit from "../../images/edit.png"
import { ProfileStyle, AdressStyle, StyleHistory } from "./style";
import { CardHistory } from "../../components/CardHistory";
import { Footer } from "../../components/Footer/Footer";
import { StyleFooter } from "../../components/Footer/style";
import * as MyRoutes from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {

const navigate = useNavigate()

    return (
        <>
            <Header showArrow={'false'} showTitle={'true'} title={"Meu Perfil"}/>
            <ProfileStyle>
                <span><img onClick={()=>MyRoutes.goToEditNamePage(navigate)} src={icon_edit} alt="Icone de edição"></img>Bruna Oliveira</span>
                <span>bruna_o@gmail.com</span>
                <span>333.3333.333-33</span>
            <AdressStyle>
                <span><img onClick={()=>MyRoutes.goToEditAddressPage(navigate)} src={icon_edit} alt="Icone de edição"></img>Endereço Cadastrado</span>
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