import React from "react";
import { Header } from "../../components/Header/Header";
import CardProductsRestaurantes from "../../components/CardProductsRestaurantes/CardProductsRestaurantes";
import {
  ContainerDetailsRestaurants,
  DivDetailsRestaurants,
  SpanDetailsRestaurants,
} from "./style";
import imgProduct from "../../images/image.jpg";
import { PAmount } from "../../components/CardProductsRestaurantes/styled";
import { useState } from "react";
import ModalScreen from "../../components/ModalAmout/ModalAmout";

const RestaurantPage = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  const handleAdd = (e) => {
    setVisibleModal(true);
    return <>alert("Add sucesso!");</>;
  };

  return (
    <>
      <Header showArrow={"true"} showTitle={"true"} title={"Restaurante"} />
      <ContainerDetailsRestaurants>
        {visibleModal ? <ModalScreen visibleModal={visibleModal} setVisibleModal={setVisibleModal}/> : null}
        <img className="imageProduct" src={imgProduct} alt="Restaurante" />
        <DivDetailsRestaurants>
          <h4>Bullguer Vila Madalena</h4>
          <SpanDetailsRestaurants>Burger</SpanDetailsRestaurants>
          <div>
            <SpanDetailsRestaurants>50-60 min</SpanDetailsRestaurants>
            <SpanDetailsRestaurants>Frete R$6,00</SpanDetailsRestaurants>
          </div>
          <SpanDetailsRestaurants>
            R. Fradique Coutinho, 1136 - Vila Madalena
          </SpanDetailsRestaurants>
          <h5>Principais</h5>
          <CardProductsRestaurantes
            imgProduct={imgProduct}
            /* addAmount={<PAmount>3</PAmount>} */
            nameProduct={"Burguer"}
            ingredients={"pão,ovo,coentro,queijo,presunto"}
            cost={"R$20,00"}
            titleButton={"adicionar"}
            handleButton={handleAdd}
          />
          <CardProductsRestaurantes
            imgProduct={imgProduct}
            addAmount={<PAmount>3</PAmount>}
            nameProduct={"Burguer"}
            ingredients={"pão,ovo,coentro,queijo,presunto"}
            cost={"R$20,00"}
            titleButton={"adicionar"}
            handleButton={handleAdd}
          />

          <h5>Acompanhamentos</h5>
        </DivDetailsRestaurants>
      </ContainerDetailsRestaurants>
    </>
  );
};

export default RestaurantPage;
