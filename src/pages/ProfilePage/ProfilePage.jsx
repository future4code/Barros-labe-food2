import React from "react";
import { Header } from "../../components/Header/Header";
import icon_edit from "../../images/edit.png"
import { ProfileStyle, AdressStyle, StyleHistory } from "./style";
import { CardHistory } from "../../components/CardHistory";
import { Footer } from "../../components/Footer/Footer";
import { StyleFooter } from "../../components/Footer/style";
import * as MyRoutes from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/constants";

const ProfilePage = () => {

    const navigate = useNavigate()

    const [data, error, isLoading, reload] = useRequestData(`${BASE_URL}/orders/history`)

    const Profile = data && data.map((item, id) => {
        return (
            <ProfileStyle key={id}>
                <span>{item.name}</span>
                <span>{item.email}</span>
                <span>{item.cpf}</span>
            </ProfileStyle>

        )
       // console.log(Profile)
    })
    const Address = data && data.map((item, id) => {
        return (
            <AdressStyle key={index}>
                <span>{item.address}</span>
            </AdressStyle>
        )
      //  console.log(Profile)
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
                <CardHistory />
            </StyleHistory>
            <StyleFooter>
                <Footer />
            </StyleFooter>
        </>
    )
}

export default ProfilePage;