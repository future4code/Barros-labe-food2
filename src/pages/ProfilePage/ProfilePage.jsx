import React from "react";
import { Header } from "../../components/Header/Header";
import icon_edit from "../../images/edit.png"
import { ProfileStyle, AdressStyle, StyleHistory } from "./style";
import { CardHistory } from "../../components/CardHistory";
import { Footer } from "../../components/Footer/Footer";
import * as MyRoutes from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/constants";
import useProtectedPage from "../../hooks/useProtectedPage";

const ProfilePage = () => {

    useProtectedPage()

    const navigate = useNavigate()

    const [data, error, isLoading, reload] = useRequestData(`${BASE_URL}/profile`)

    data && localStorage.setItem("address", JSON.stringify(data.user.address))
    

    const Profile = data &&
            <ProfileStyle>
                <img onClick={() => MyRoutes.goToEditNamePage(navigate)} src={icon_edit} alt="Icone de edição"></img>
                <span>{data.user.name}</span>
                <span>{data.user.email}</span>
                <span>{data.user.cpf}</span>
            </ProfileStyle>

     const Address = data &&
            <AdressStyle>
                <img onClick={() => MyRoutes.goToEditAddressPage(navigate)} src={icon_edit} alt="Icone de edição"></img>
                <span>Endereço cadastrado</span>
                <span>{data.user.address}</span>
            </AdressStyle>
    
    
    return (
      
        <>
            <Header showArrow={'false'} showTitle={'true'} title={"Meu perfil"} />
            <>
                {isLoading && "Carregando..."}
                {!isLoading && data && Profile}
                {!isLoading && !data && error}
            </>
            <>
                {isLoading && "Carregando..."}
                {!isLoading && data && Address}
                {!isLoading && !data && error}
            </>
            <StyleHistory>
            <h4>Histórico de pedidos</h4>
                <CardHistory/>
            </StyleHistory>
            <Footer color1={'#B8B8B8'} color2={'#B8B8B8'} color3={'#5CB646'}/>  
        </>
        
    )
}

export default ProfilePage;