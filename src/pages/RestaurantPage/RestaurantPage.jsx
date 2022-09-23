import React, { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import CardProductsRestaurantes from "../../components/CardProductsRestaurantes/CardProductsRestaurantes";
import {
  ContainerDetailsRestaurants,
  DivDetailsRestaurants,
  SpanDetailsRestaurants,
} from "./style";
import { useState } from "react";
import { BASE_URL } from "../../constants/constants";
import useRequestData from "../../hooks/useRequestData";

import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";

const RestaurantPage = () => {
  const {id} = useParams(); 
  console.log(id); 
  const [arrayProducts, setArrayProducts] = useState([]);
  const [data, error, isLoading, reload, setReload] = useRequestData(
    `${BASE_URL}/restaurants/1`
  );

  const handleAddProduct = (product, quantity) => {
    const newCart = [...arrayProducts];
    newCart.push({ ...product, quantity: quantity });
    setArrayProducts(newCart);
    localStorage.setItem("ProductCart", JSON.stringify(arrayProducts));
  };
  
  console.log(arrayProducts);
  
  const handleRemoveProduct = (product) => {
    const indexProduct = arrayProducts.findIndex(
      (item) => item.id === product.id
      );
      const newCard = [...arrayProducts];
      newCard.splice(indexProduct, 1);
      setArrayProducts(newCard);
    };
    
  return (
    <>
      <Header showArrow={"true"} showTitle={"true"} title={"Restaurante"} />
      {isLoading && <Loading />} 
      {data && (
        <ContainerDetailsRestaurants>
          <img
            className="imageProduct"
            src={data.restaurant.logoUrl}
            alt="Logo"
          />
          <DivDetailsRestaurants>
            <h4>{data.restaurant.name}</h4>
            <SpanDetailsRestaurants>
              {data.restaurant.category}
            </SpanDetailsRestaurants>
            <div>
              <SpanDetailsRestaurants>
                {data.restaurant.deliveryTime}min
              </SpanDetailsRestaurants>
              <SpanDetailsRestaurants>
                Frete R${data.restaurant.shipping},00
              </SpanDetailsRestaurants>
            </div>
            <SpanDetailsRestaurants>
              {data.restaurant.address}
            </SpanDetailsRestaurants>
            {data &&
              data.restaurant.products.map((product) => {
                return (
                  <CardProductsRestaurantes
                    key={product.id}
                    product={product}
                    arrayProducts={arrayProducts}
                    handleAddProduct={handleAddProduct}
                    handleRemoveProduct = {handleRemoveProduct}
                  />
                );
              })}
            <h5>Acompanhamentos</h5>
          </DivDetailsRestaurants>
        </ContainerDetailsRestaurants>
      )}
    </>
  );
};

export default RestaurantPage;
