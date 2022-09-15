import { BrowserRouter, Route, Routes } from "react-router-dom"
import EditAddressPage from "../pages/EditAddressPage/EditAddressPage"
import CartPage from "../pages/CartPage/CartPage"
import EditNamePage from "../pages/EditNamePage/EditNamePage"
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage"
import SearchPage from "../pages/SearchPage/SearchPage"
import SignupPage from "../pages/SignupPage/SignupPage"


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element= {<LoginPage/>}/>
                <Route path={"/editar-endereco"} element= {<EditAddressPage/>}/>
                <Route path={"/carrinho"} element= { <CartPage/> }/>
                <Route path={"/editar-nome"} element= {<EditNamePage/>}/>
                <Route path={"/home"} element= {<FeedPage/>}/>
                <Route path={"/meu-perfil"} element= {<ProfilePage/>}/>
                <Route path={"/restaurante/:restauranteId"} element= {<RestaurantPage/>}/>
                <Route path={"/busca"} element= {<SearchPage/>}/>
                <Route path={"/cadastro"} element= {<SignupPage/>}/>
            </Routes>        
        </BrowserRouter>
    )
}

export default Router;