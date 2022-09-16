import styled from "styled-components";

export const Address = styled.div `
    height: 76px;
    margin: 1px 0 16px;
    padding: 16px;
    background-color: #eee;
    p {
        color: #b8b8b8;
    }
`

export const Paragraph = styled.p `
    text-align: center;
    padding: 10px 0;
`

export const Payment = styled.section `
    display: flex;
    flex-direction: column;
    span {
        margin: 30px 0 0 301px;
    }
    section {
        display: flex;
        justify-content: space-between;
        margin: 5px 16px;
        p {
            font-size: 18px;
            margin: 10px 0;
            :nth-child(2) {
                font-weight: bold;
                color: #5cb646;
            }
        }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin: 0 16px;
        p {
            margin-top: 15px;
            line-height: 33px;
            border-bottom: 1px solid black;
        }
        div {
            display: flex;
            gap: 10px;
        }
    }
`

export const Footer = styled.section `
    button {
        display: block;
        margin: 240px auto 0 auto;
        width: 328px;
        height: 42px;
        padding: 12px 16px;
        border: none;
        border-radius: 2px;
        background-color: rgba(92, 182, 70, 0.5);
    }
    div {
        display: flex;
        justify-content: center;
        border-top: 2px solid lightgrey;
        margin-top: 20px;
        svg {
            width: 150px;
            height: 60px;
            padding: 15px 46px 11px 47px;
            :nth-child(1) {
                color: #c2c1c1;
            }
            :nth-child(2) {
                color: rgb(92, 182, 70);
            }
            :nth-child(3) {
                color: #c2c1c1;
            }
        }
    }
`