import React from "react";
import {Header} from '../../components/Header/Header'
import {ButtonSearch, CardsContainer, FeedPageStyle, FiltersContainer, RestaurantCard} from './style'
import search from '../../images/search.png'

const FeedPage = ({dataRestaurants, errorRestaurants, isLoadingRestaurants}) => {

    console.log(dataRestaurants)
  
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
                <RestaurantCard>
                    <img src="https://i2.wp.com/3talheres.com.br/wp-content/uploads/2019/02/beirute_habibs.jpg?fit=850%2C600&ssl=1"></img>
                    <div>
                        <p>Habibs</p>
                        <article>
                            <span>60 min</span>
                            <span>Frete R$6,00</span>
                        </article>
                    </div>
                </RestaurantCard>
            </CardsContainer>
        </FeedPageStyle>
    )
}

export default FeedPage;