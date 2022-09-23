import { useEffect, useState } from "react";
import ModalScreen from "../ModalAmout/ModalAmout";
import {
  ButtonAdd,
  ButtonRemove,
  ContainerProductsRestaurant,
  DivDetails,
  DivImg,
  DivSpan,
  PAmount,
  } from "./styled";


function CardProductsRestaurantes({product, handleAddProduct,handleRemoveProduct,arrayProducts}) {
   const {
    photoUrl,
    name,
    description,
    price,
  } = product;
  const [visibleModal,setVisibleModal]=useState(false);
  const [quantity,setQuantity]=useState();
  
  const handleAdd = (product) => {
    setVisibleModal(true);
    };
  const handleRemove = (product) => {
    setVisibleModal(false);
    handleRemoveProduct(product);  
  };

  const visibleAmount = (product)=>{
    let condicion
    const indexProduct =arrayProducts&&arrayProducts.findIndex(
      (item) => item.id === product.id
      );
      if (indexProduct === -1) {
        condicion = false
      }else{
        condicion = true
      }
      return condicion
  }
        console.log(visibleAmount(product));    
  return (
    <>
     {visibleModal ? (
          <ModalScreen
            visibleModal={visibleModal}
            setVisibleModal={setVisibleModal} 
            setQuantity={setQuantity}
            handleAddProduct={handleAddProduct}
            product={product}            
          />
        ) : null}
    <h5>{product.category}</h5>
    <ContainerProductsRestaurant>
      <DivImg>
        <img src={photoUrl} alt="Produto" className="ImgProduct" />
      </DivImg>
      <DivDetails>
      {visibleAmount(product) ? <PAmount>{quantity}</PAmount> : null}
        <h4 className="TitleProduct">{name}</h4>
        <DivSpan>
          <span>{description}</span>
        </DivSpan>
        <div className="divButton">
          <span>{price}</span>
        </div>
        {visibleAmount(product)?<ButtonRemove onClick={()=>{handleRemove(product)}}>remover</ButtonRemove>:<ButtonAdd onClick={()=>{handleAdd(product)}}>adicionar</ButtonAdd>}
       {/*  {data.button} */}
      </DivDetails>
    </ContainerProductsRestaurant>
    </>
  );
}

export default CardProductsRestaurantes;
