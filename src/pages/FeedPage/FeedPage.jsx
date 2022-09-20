import React from "react";
import {Header} from '../../components/Header/Header'
import {ButtonSearch, CardsContainer, FeedPageStyle, FiltersContainer, RestaurantCard} from './style'
import search from '../../images/search.png'
import {Loading} from '../../components/Loading/Loading'

const FeedPage = ({dataRestaurants, errorRestaurants, isLoadingRestaurants}) => {

    console.log(dataRestaurants)

    const restaurantsList = dataRestaurants && dataRestaurants.restaurants.map((restaurant) =>{
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
    })
  
    return(        
        <FeedPageStyle>

            <Header showArrow={'false'} showTitle={'true'} title={'FutureEats'}/>

            <ButtonSearch><img src={search}/><p>Restaurante</p></ButtonSearch>

            <FiltersContainer>

                <nav>
                    <a>Burger</a>
                    <a>Asiática</a>
                    <a>Árabe</a>
                    <a>Italiana</a>
                    <a>Sorvetes</a>
                    <a>Carnes</a>
                    <a>Baiana</a>
                    <a>Petiscos</a>
                    <a>Mexicana</a>
                </nav>

            </FiltersContainer>           

            <CardsContainer>

                {isLoadingRestaurants && <Loading/>}

                {!isLoadingRestaurants&&errorRestaurants&&<p>{errorRestaurants}</p>}

                {!isLoadingRestaurants&&dataRestaurants&&restaurantsList}           
            
            </CardsContainer> 

        </FeedPageStyle>
    )
}

export default FeedPage;