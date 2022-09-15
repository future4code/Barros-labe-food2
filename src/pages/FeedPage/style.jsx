import styled from "styled-components";

export const FeedPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 184px;
    justify-content: center;
    align-items: center;
`

export const ButtonSearch = styled.button`
    display: flex;
    align-items: center;
    background-color: white;
    height: 56px;
    width: 328px;
    padding: 19px 48px 19px 16px;
    border-radius: 2px;
    border: solid 1px var(--greyish);
    margin-top: 10px;

    img{
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }

    p{
        color: var(--greyish);;
    }
`

export const FiltersContainer = styled.section`
    width: 360px;
    height: 42px;
    margin: 8px 0 8px;
    padding: 12px 0 12px 16px;

    nav{
       overflow: auto;
       scroll-margin-top: 50px;   
       
       ::-webkit-scrollbar{
            background-color: white;
       }
    }

    a{
        margin-right: 25px;
        margin-left: 20px;
        margin-bottom: 10px;
        cursor: pointer;

        :hover{
            color: var(--mid-green);
        }        
    }
`

export const CardsContainer = styled.section`

`

export const RestaurantCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 328px;
    height: 188px;
    border-radius: 8px;
    border: solid 1px var(--greyish);

    img{
        width: 328px;
        height: 120px;
        border-radius: 8px;
    }

    div{
        display: flex;
        flex-direction: column;

        p{
            color: var(--mid-green);
            margin-top: 12px;
            margin-bottom: 5px;
            margin-left: 17px;
        }

        article{
            display: flex;
            justify-content: space-between;
            color: var(--greyish);

            span{
                margin-left: 17px;
                margin-right: 17px;
            }
        }
    }
`
