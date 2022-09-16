import styled from "styled-components";

export const ContainerDetailsRestaurants = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  width: 100vw;
  .imageProduct{
    width: 90%;
    height: 150px;
    /* object-fit: contain; */
  }
 
`;

export const SpanDetailsRestaurants = styled.div`
    margin: 1% 0;
    color: var(--greyish);
    font-family: Roboto;
    font-size: 12px;
`;

export const DivDetailsRestaurants = styled.div`
   
    width: 90%;
    margin: 2% 0;
   
    h4 {
       color: var(--mid-green);
       font-family: Roboto;
    }
    h5 {
      margin: 2% 0;
      border-bottom: 1px solid black;
    }
  
`;
