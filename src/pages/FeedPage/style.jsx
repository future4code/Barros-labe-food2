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

    select{
        display: table-row;
        width: 360px;
        height: 42px;
        margin: 8px 0 0;
        border: 0;
        overflow: auto;
        scroll-margin-top: 50px;   
       
        ::-webkit-scrollbar{
            background-color: white;
        }
    }

    option{ 
        display: table-cell;
        margin-left: 15px;
        margin-right: 15px;

        :hover{
            color: var(--mid-green);
        }      
    }
`

export const RestaurantCard = styled.button`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 328px;
    height: 188px;
    margin-top: 8px;
    border-radius: 8px;
    border: solid 1px var(--greyish);
    text-align: start;
    white-space: nowrap;

    img{
        width: 326px;
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
                margin-right: 140px;
                margin-bottom: 15px;
            }
        }
    }
    
`
