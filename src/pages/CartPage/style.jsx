import styled from "styled-components";

export const Container = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Address = styled.div `
    height: 76px;
    width: 395px;
    margin-top: 2px;
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
    position: fixed;
    bottom: 0;
    button {
        display: block;
        margin: 0 auto;
        width: 328px;
        height: 42px;
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
            width: 132px;
            height: 60px;
            padding: 12px 40px;
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