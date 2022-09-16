import styled from "styled-components";

export const Container = styled.section `
    display: grid;
    grid-template-columns: 25% 75%;
    gap: 2vw;
    border: 1px solid #b8b8b8;
    border-radius: 8px;
    width: 350px;
    height: 112px;
    margin-top: 15px;
    img {
        width: 96px;
        height: 112px;
        border-radius: 10px 0 0 10px;
    }
    section {
        display: flex;
        flex-direction: column;
        gap: .5vh;
        padding: 15px;
        div {
            display: flex;
            justify-content: space-between;
            p {
                font-size: 16px;
                :nth-child(1) {
                    color: #5cb646;
                }
                :nth-child(2) {
                    color: #5cb646;
                    border: 1px solid #5cb646;
                    width: 33px;
                    height: 33px;
                    padding: 7px 12px;
                    border-radius: 0 8px 0 8px;
                    margin-top: -16px;
                    margin-right: -8px;
                }
            }
            :nth-child(3) {
                button {
                    width: 90px;
                    height: 31px;
                    padding: 8px 23px 9px 24px;
                    border-radius: 8px 0 8px 0;
                    border: solid 1px #e02020;
                    color: #e02020;
                    margin-right: -8px;
                    margin-bottom: 2px;
                    background-color: transparent;
                }
            }
        }
        span {
            font-size: 12px;
            color: #b8b8b8;
            padding: 5px 0;
        }
    }
`