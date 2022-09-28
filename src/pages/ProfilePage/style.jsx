import styled from "styled-components";

export const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 8px 0px;
  width: 100vw;

span{
  width: 88vw;
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
    margin: 8px 16px 8px;
  }
}

img{
  width: 24px;
  height: 24px;
  margin: 16px 16px 2px 320px;
  object-fit: contain;
  position:absolute;
}
`
export const AdressStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 76px;
  margin: 16px 0 16px;
  padding: 16px 26px;
  width: 100vw;
  background-color: #eee;
    
  span:nth-child(2){
  width: 88vw;
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
  margin: 10px 0 10px 320px;
  object-fit: contain;
  position:absolute;
}
`
export const StyleHistory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 60px;

span{
  width: 88vw;
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
h4 {
  width: 88vw;
  margin: 0 0 7px;
  font-family: Roboto;
  font-size: 16px;
  padding-bottom: 8px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  border-bottom: solid 1px var(--black);
}
p{
  margin: 2% 0;
  width: 88vw;
  margin: 28px 0px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
}
`