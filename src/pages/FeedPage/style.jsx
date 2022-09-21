import styled from "styled-components";

export const FeedPageStyle = styled.div`
    display: flex;
    flex-direction: column;
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
    margin-bottom: 15px;
    font-size: 16px;

    img{
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }

    p{
        color: var(--greyish);
        font-size: 16px;
    }

`

export const FiltersContainer = styled.div`
    display: flex;
    align-items: center;
    width: 360px;
    height: 42px;
    overflow: auto;    
       
    ::-webkit-scrollbar{
         background-color: white;
    }

    button{
        width: 87px;
        height: 18px;
        background-color: white;
        border: 0 solid white;
        margin: 15px 10px 10px 33px;
        font-size: 16px;

        :active {
            color: var(--mid-green);
        }
        :hover{
            color: var(--mid-green);
        }
        :focus{
            color: var(--mid-green);
        }
    }
`

export const RestaurantButtonCard = styled.button`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 328px;
    height: 188px;
    border-radius: 8px;
    border: solid 1px var(--greyish);
    text-align: start;
    white-space: nowrap;
    margin-bottom: 10px;

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
            font-size: 16px;
        }

        article{
            display: flex;
            justify-content: space-between;
            color: var(--greyish);

            span{
                margin-left: 17px;
                margin-right: 140px;
                margin-bottom: 15px;
                font-size: 16px;
            }
        }
    }    
`
