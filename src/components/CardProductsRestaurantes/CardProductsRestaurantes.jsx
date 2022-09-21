import imgProduct from "../../images/image.jpg";
import {
  ButtonAdd,
  ButtonRemove,
  ContainerProductsRestaurant,
  DivDetails,
  DivImg,
  DivSpan,
  } from "./styled";
function CardProductsRestaurantes(data) {
  const {
    imgProduct,
    addAmount,
    nameProduct,
    ingredients,
    cost,
    titleButton,
    handleButton,
  } = data;

  return (
    <ContainerProductsRestaurant>
      <DivImg>
        <img src={imgProduct} alt="Produto" className="ImgProduct" />
      </DivImg>
      <DivDetails>
        {addAmount}
        <h4 className="TitleProduct">{nameProduct}</h4>
        <DivSpan>
          <span>{ingredients}</span>
        </DivSpan>
        <div className="divButton">
          <span>{cost}</span>
        </div>
        {data.button}
      </DivDetails>
    </ContainerProductsRestaurant>
  );
}

export default CardProductsRestaurantes;
