import React, { useContext, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import CardProductsRestaurantes from "../../components/CardProductsRestaurantes/CardProductsRestaurantes";
import {
  ContainerDetailsRestaurants,
  ContainerImg,
  DivDetailsRestaurants,
  DivShipping,
  SpanDetailsRestaurants,
} from "./style";
import { BASE_URL } from "../../constants/constants";
import useRequestData from "../../hooks/useRequestData";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import GlobalContext from "../../context/GlobalContext";
import useProtectedPage from "../../hooks/useProtectedPage";

const RestaurantPage = () => {

  useProtectedPage()

  const { restauranteId } = useParams();
  const {arrayProducts, setArrayProducts} = useContext(GlobalContext);
  const [data, error, isLoading, reload, setReload] = useRequestData(
    `${BASE_URL}/restaurants/${restauranteId}`, localStorage.getItem("token")
  );
  
  const handleAddProduct = (product, quantity) => {
    const newCart = [...arrayProducts];
    newCart.push({ ...product, quantity: quantity, restaurantId: restauranteId, restaurant: data.restaurant.name, address: data.restaurant.address, time: data.restaurant.deliveryTime, shipping: data.restaurant.shipping });
    setArrayProducts(newCart);
  };

  const handleRemoveProduct = (product) => {
    const indexProduct = arrayProducts.findIndex(
      (item) => item.id === product.id
    );
    const newCard = [...arrayProducts];
    newCard.splice(indexProduct, 1);
    setArrayProducts(newCard);
  };

  useEffect(() => {
    let store = JSON.parse(localStorage.getItem("ProductCart"));
    {
      store && setArrayProducts(store);
    }
  }, []);

  let categories = []
  if (data) {
    let equal
    for (let i = 0; i < data.restaurant.products.length; i++) {
      if (i === 0) {
        categories.push(data.restaurant.products[0].category)
      } else {
        for(let c = 0; c < categories.length; c++) {
          if(data.restaurant.products[i].category !== categories[c]) {
            equal = false
          } else {
            equal = true
            break
          }
        }
        !equal && categories.push(data.restaurant.products[i].category)
      }
    }
  }

  const renderData = () => {
    let result = []
    for (let i = 0; i < categories.length; i++) {
      let productsByCategory = data.restaurant.products.filter(product => product.category === categories[i])
      
      result.push(<div key={categories[i]}>
        <h5>{categories[i]}</h5>
        {productsByCategory.map(item => {
        return <CardProductsRestaurantes
          key={item.id}
          product={item}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
        />})}
      </div>)
    }
    return result
  }

  return (
    <>
      <Header showArrow={"true"} showTitle={"true"} title={"Restaurante"} />
      {isLoading && <Loading />}
      {data && (
        <ContainerDetailsRestaurants>
          <ContainerImg>
            <img
              className="imageProduct"
              src={data.restaurant.logoUrl}
              alt="Logo Restaurante"
            />
          </ContainerImg>
          <DivDetailsRestaurants>
            <h4>{data.restaurant.name}</h4>
            <SpanDetailsRestaurants>
              {data.restaurant.category}
            </SpanDetailsRestaurants>
            <DivShipping>
              <SpanDetailsRestaurants>
                {data.restaurant.deliveryTime} min
              </SpanDetailsRestaurants>
              <SpanDetailsRestaurants>
                Frete{" "}
                {data.restaurant.shipping.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </SpanDetailsRestaurants>
            </DivShipping>
            <SpanDetailsRestaurants>
              {data.restaurant.address}
            </SpanDetailsRestaurants>
            {data && renderData()}
            </DivDetailsRestaurants>
        </ContainerDetailsRestaurants>
      )}
    </>
  );
};

export default RestaurantPage;