import styled from "styled-components";

export const ContainerProductsRestaurant = styled.div`
  display: flex;
  height: 113px;
  border-radius: 8px;
  border: solid 1px var(--greyish);
  margin: 3% 0;
`;
export const DivImg = styled.div`
  .ImgProduct {
    width: 96px;
    height: 112px;
    border-radius: 8px 0px 0 8px;
    overflow: hidden;
  }

  .ImgProduct img {
    object-fit: cover;
    width: 100%;
  }
`;
export const DivSpan = styled.div`
  margin-bottom: 2%;
  width: 100%;
  height: 30px;
  font-family: Roboto;
  font-size: 12px;
  letter-spacing: -0.29px;
  color: var(--greyish);
  span {
    font-family: Roboto;
    font-size: 12px;
  }
`;

export const DivDetails = styled.div`
  width: 90%;
  display: inline;
  flex-direction: column;
  margin-left: 2%;
  /* justify-content: space-around; */

  .divButton {
    position: absolute;
    /* button {
      position: absolute;

      font-size: 12px;
      margin-left: 100%;
      width: 100%;
      color: var(--mid-green);
      border-radius: 8px 0 8px 0;
      background: transparent;
    } */
  }
`;

export const PAmount = styled.p`
  text-align: center;
  margin-left: 85%;
  height: 25%;
  width: 15%;
  border: 0.3px solid;
  border-radius: 0px 5px 0px 5px;
  color: var(--mid-green);
  background: transparent;
  font-family: Roboto;
`;
export const ButtonAdd = styled.button`
  text-align: center;
  margin-left: 65%;
  height: 28%;
  width: 35%;
  border: 0.3px solid;
  border-radius: 5px 0px 8px 0px;
  color: var(--mid-green);
  background: transparent;
  font-family: Roboto;
  font-size: 12px;
`;
