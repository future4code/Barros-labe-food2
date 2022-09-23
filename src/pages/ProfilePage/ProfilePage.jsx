import React, {useState} from "react";
import { Header } from "../../components/Header/Header";
import icon_edit from "../../images/edit.png"
import { ProfileStyle, AdressStyle, StyleHistory } from "./style";
import { CardHistory } from "../../components/CardHistory";
import { Footer } from "../../components/Footer/Footer";
import * as MyRoutes from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/constants";

const ProfilePage = () => {

    const navigate = useNavigate()

    const [data, error, isLoading, reload] = useRequestData(`${BASE_URL}/profile`)

    const Profile = data && data.user.map((item, id) => {
        return (
            <ProfileStyle key={id}>
                <span>{item.name}</span>
                <span>{item.email}</span>
                <span>{item.cpf}</span>
            </ProfileStyle>

        )
       
    })
   

    const Address = data && data.map((item, id) => {
        return (
            <AdressStyle key={index}>
                <span>{item.address}</span>
            </AdressStyle>
        )
    })
    
    
    return (
        <>
            <Header showArrow={'false'} showTitle={'true'} title={"Meu Perfil"} />
            <>
                <img onClick={() => MyRoutes.goToEditNamePage(navigate)} src={icon_edit} alt="Icone de edição"></img>
                {isLoading && "Carregando..."}
                {!isLoading && data && Profile}
                {!isLoading && !data && error}
            </>
            <>
                <span>Endereço Cadastrado</span>
                <img onClick={() => MyRoutes.goToEditAddressPage(navigate)} src={icon_edit} alt="Icone de edição"></img>
                {isLoading && "Carregando..."}
                {!isLoading && data && Address}
                {!isLoading && !data && error}
            </>
            <StyleHistory>
            <span>Histórico de pedidos</span>
                <CardHistory/>
            </StyleHistory>
            <Footer color1={'#B8B8B8'} color2={'#B8B8B8'} color3={'#5CB646'}/>
        </>
    )
}

export default ProfilePage;