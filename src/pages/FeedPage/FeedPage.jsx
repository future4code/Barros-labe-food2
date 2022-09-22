import React, { useContext, useState } from "react";
import {Header} from '../../components/Header/Header'
import {ButtonSearch, FeedPageStyle, FiltersContainer} from './style'
import search from '../../images/search.png'
import {Loading} from '../../components/Loading/Loading'
import GlobalContext from '../../context/GlobalContext'
import { goToSearchPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer"
import RestaurantButtonCard from "../../components/RestaurantButtonCard/RestaurantButtonCard";

const FeedPage = () => {

    const {dataRestaurants, errorRestaurants, isLoadingRestaurants} = useContext(GlobalContext)
    const [category, setCategory] = useState("Hamburguer")
    const navigate = useNavigate()    

    const restaurantsList = dataRestaurants && dataRestaurants.restaurants.map((restaurant) =>{
        if(restaurant.category === category){
        return <RestaurantButtonCard restaurant={restaurant} key={restaurant.id}/>            
        }
    })
  
    return(        
        <FeedPageStyle>

            <Header showArrow={'false'} showTitle={'true'} title={'FutureEats'}/>

            <ButtonSearch onClick={()=>{goToSearchPage(navigate)}}><img src={search}/><p>Restaurante</p></ButtonSearch>

                <FiltersContainer>
                    
                    <button onClick={()=>{setCategory("Hamburguer")}}>Burger</button>
                    <button onClick={()=>{setCategory("Asiática")}}>Asiática</button>
                    <button onClick={()=>{setCategory("Árabe")}}>Árabe</button>
                    <button onClick={()=>{setCategory("Italiana")}}>Italiana</button>
                    <button onClick={()=>{setCategory("Sorvetes")}}>Sorvetes</button>
                    <button onClick={()=>{setCategory("Carnes")}}>Carnes</button>
                    <button onClick={()=>{setCategory("Baiana")}}>Baiana</button>
                    <button onClick={()=>{setCategory("Petiscos")}}>Petiscos</button>
                    <button onClick={()=>{setCategory("Mexicana")}}>Mexicana</button>               

                </FiltersContainer>           
            
                {isLoadingRestaurants && <Loading/>}

                {!isLoadingRestaurants&&errorRestaurants&&<p>{errorRestaurants}</p>}

                {!isLoadingRestaurants&&dataRestaurants&&restaurantsList}

                <Footer color1={'#5CB646'} color2={'#B8B8B8'} color3={'#B8B8B8'}/>                  

        </FeedPageStyle>
    )
}

export default FeedPage;