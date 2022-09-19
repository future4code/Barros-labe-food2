import React from "react";
import { DivContainer, DivModal } from "./styled";

const ModalScreen = (data) => {
  const handleAddCart = (e) => {
    
    data.setQuantidade("1")
    data.setVisibleModal(false);
    data.setVisibleAmout(true)
    
  };

  return (
    <DivModal className="modal">
      <DivContainer className="container">
        
          <span>Selecione a quantidade desejada </span>
          <form action="">
            <input type="number" min="0" oninput="this.value = Math.abs(this.value)"/>
          </form>
          <button onClick={()=>{handleAddCart()}}>ADICIONAR AO CARRINHO</button>
        
      </DivContainer>
    </DivModal>
  );
};

export default ModalScreen;
