import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddressPage from "../pages/AddressPage/AddressPage"
import CartPage from "../pages/CartPage/CartPage"
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage"
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import OrderHistoryPage from "../pages/OrderHistoryPage/OrderHistoryPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage"
import SearchPage from "../pages/SearchPage/SearchPage"
import SignupPage from "../pages/SignupPage/SignupPage"


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/endereco"} element= {<AddressPage/>}/>
                <Route path={"/carrinho"} element= { <CartPage/> }/>
                <Route path={"/editar-perfil"} element= {<EditProfilePage/>}/>
                <Route path={"/home"} element= {<FeedPage/>}/>
                <Route path={"/login"} element= {<LoginPage/>}/>
                <Route path={"/historico-pedidos"} element= {<OrderHistoryPage/>}/>
                <Route path={"/meu-perfil"} element= {<ProfilePage/>}/>
                <Route path={"/restaurant/:restaurantId"} element= {<RestaurantPage/>}/>
                <Route path={"/busca"} element= {<SearchPage/>}/>
                <Route path={"/cadastro"} element= {<SignupPage/>}/>
            </Routes>        
        </BrowserRouter>
    )
}

export default Router;