import React, { useContext, useState } from "react";
import {Header} from '../../components/Header/Header'
import {ButtonSearch, FeedPageStyle, FiltersContainer, RestaurantCard} from './style'
import search from '../../images/search.png'
import {Loading} from '../../components/Loading/Loading'
import GlobalContext from '../../context/GlobalContext'

const FeedPage = () => {

    const {dataRestaurants, errorRestaurants, isLoadingRestaurants} = useContext(GlobalContext)
    const [category, setCategory] = useState("Hamburguer")

    const restaurantsList = dataRestaurants && dataRestaurants.restaurants.map((restaurant) =>{
        if(restaurant.category === category){
        return <RestaurantCard key={restaurant.id}>
                <img src={restaurant.logoUrl} alt="Logo do Restaurante"></img>
                <div>
                    <p>{restaurant.name}</p>
                    <article>
                        <span>{restaurant.deliveryTime} min</span>
                        <span>Frete R${restaurant.shipping},00</span>
                    </article>
                </div>
            </RestaurantCard>
        }
    })
  
    return(        
        <FeedPageStyle>

            <Header showArrow={'false'} showTitle={'true'} title={'FutureEats'}/>

            <ButtonSearch><img src={search}/><p>Restaurante</p></ButtonSearch>

            <FiltersContainer>

                <select size="9" onChange={(e)=>{setCategory(e.target.value)}}>
                    <option value="Hamburguer">Burger</option>
                    <option value="Asiática">Asiática</option>
                    <option value="Árabe">Árabe</option>
                    <option value="Italiana">Italiana</option>
                    <option value="Sorvetes">Sorvetes</option>
                    <option value="Carnes">Carnes</option>
                    <option value="Baiana">Baiana</option>
                    <option value="Petiscos">Petiscos</option>
                    <option value="Mexicana">Mexicana</option>
                </select>

            </FiltersContainer>           

            
                {isLoadingRestaurants && <Loading/>}

                {!isLoadingRestaurants&&errorRestaurants&&<p>{errorRestaurants}</p>}

                {!isLoadingRestaurants&&dataRestaurants&&restaurantsList}           
            
           

        </FeedPageStyle>
    )
}

export default FeedPage;