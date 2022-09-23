import styled from "styled-components";

export const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  
span{
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);

  :nth-child(2){
    margin: 16px 16px 8px;
  }
  :nth-child(3){
    margin: 2px 16px 8px;
  }
  :nth-child(4){
    margin: 8px 16px 16px;
  }
}

img{
  width: 24px;
  height: 24px;
  margin: 16px 16px 2px 320px;
  object-fit: contain;
}
`
export const AdressStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 76px;
  margin: 16px 0;
  padding: 16px;
  background-color: #eee;
    
  span:nth-child(1){
  width: 328px;
  height: 18px;
  margin: 0 0 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--greyish);
  }
 
img{
  width: 24px;
  height: 24px;
  margin: 10px 0 10px 304px;
  object-fit: contain;
}
`
export const StyleHistory = styled.div`
  width: 328px;
  height: 18px;
  padding: 0 16px; 
  width: 328px;
  height: 1px;

span{
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
  border-bottom: solid 1px var(--black);
}
`