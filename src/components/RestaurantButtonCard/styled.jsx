import styled from "styled-components";

export const RestaurantButtonCardStyle = styled.button`
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
<<<<<<< HEAD
                margin-right: 140px;
                margin-bottom: 15px;
                font-size: 16px;

=======
                margin-bottom: 15px;
                font-size: 16px;

                :nth-child(2){
                    margin-left: 155px;
                }
>>>>>>> ea3ffe7a2f2be707948029e837c0962eac56304e
            }
        }
    }    
`