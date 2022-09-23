import styled from "styled-components";

export const DivModal = styled.div`
 width: 100vw;
  /* height: 100vh; */
  position: absolute; 
  padding: 30%;
  /* top: 0; */
  left: 0;
  z-index: 20000;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DivContainer = styled.div`
  position: relative;
  width: 80vw;
  height: 35vh;
  /* margin: 29px 16px 29px; */
  /* padding: 11px 0 68px; */
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    width: 296px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
  }
  button {
    position: absolute;
    bottom: 10%;
    right: 10%;
    border: none;
    color: var(--mid-green);
    background-color: transparent;
  }

  select {
    
    margin-top: 10%; 
    font-size: 16px;
    width: 70vw;
    height: 8vh;
    border-radius: 5px;
  }
`;
