import styled from "styled-components";

export const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 640px;

  span{
  width: 328px;
  height: 18px;
  margin: 16px 16px 8px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
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
span:nth-child(2) {
  width: 328px;
  height: 18px;
  margin: 8px 0 0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
  
}
img{
  width: 24px;
  height: 24px;
  margin: 10px 0 10px 304px;
  object-fit: contain;
}
`
export const StyleHistory = styled.div`
  width: 360px;
  height: 110px;
  margin: 8px 0 0;
  padding: 0 16px;
   
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
  width: 328px;
}




`