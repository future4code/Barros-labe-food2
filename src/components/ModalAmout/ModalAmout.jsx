import React from "react";
import { DivContainer, DivModal } from "./styled";
import { useForm } from "../../hooks/useForm";

const ModalScreen = ({
  setVisibleModal,
  handleAddProduct,
  product,
  arrayProducts,
}) => {
  const [form, onChange, clear] = useForm({
    quantity: "",
  });

  const handleQuantity = (event) => {
    event.preventDefault();
    setVisibleModal(false);
    handleAddProduct(product, form.quantity);
    };
    
  return (
    <DivModal className="modal">
      <DivContainer className="container">
        <span>Selecione a quantidade desejada </span>
        <form onSubmit={handleQuantity}>
          <select
            id="quantity"
            name="quantity"
            value={form.quantity}
            onChange={onChange}
          >
            <option>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
          <button>
            ADICIONAR AO CARRINHO
          </button>
        </form>
      </DivContainer>
    </DivModal>
  );
};

export default ModalScreen;
