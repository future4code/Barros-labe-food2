import React from "react";
import { Header } from "../../components/Header/Header";
import icon_edit from "../../images/edit.png"
import { ProfileStyle, AdressStyle, StyleHistory, ProfilePageStyle } from "./style";
import { CardHistory } from "../../components/CardHistory";
import { Footer } from "../../components/Footer/Footer";
import * as MyRoutes from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/constants";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Loading } from '../../components/Loading/Loading'

const ProfilePage = () => {

    useProtectedPage()

    const navigate = useNavigate()

    const [data, error, isLoading, reload] = useRequestData(`${BASE_URL}/profile`, localStorage.getItem("token"))

    data && localStorage.setItem("address", JSON.stringify(data.user.address))
    

    const Profile = data &&
            <ProfileStyle>
                <div>
                    <span>{data.user.name}</span>
                    <span>{data.user.email}</span>
                    <span>{data.user.cpf}</span>
                </div>
                <img onClick={() => MyRoutes.goToEditNamePage(navigate)} src={icon_edit} alt="Icone de edição"></img>
            </ProfileStyle>

     const Address = data &&
            <AdressStyle>
                <div>
                    <span>Endereço cadastrado</span>
                    <span>{data.user.address}</span>
                </div>
                <img onClick={() => MyRoutes.goToEditAddressPage(navigate)} src={icon_edit} alt="Icone de edição"></img>
            </AdressStyle>
    
    
    return (
        <ProfilePageStyle>
            <Header showArrow={'false'} showTitle={'true'} title={"Meu perfil"} />
            <>
                {isLoading && <Loading/>}
                {!isLoading && data && Profile}
                {!isLoading && !data && error}
            </>
            <>
                {isLoading && <Loading/>}
                {!isLoading && data && Address}
                {!isLoading && !data && error}
            </>

            <StyleHistory>
            <h4>Histórico de pedidos</h4>
                <CardHistory/>
            </StyleHistory>
            <Footer color1={'#B8B8B8'} color2={'#B8B8B8'} color3={'#5CB646'}/>  
        </ProfilePageStyle>
    )
}

export default ProfilePage;