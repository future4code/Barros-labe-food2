import styled from "styled-components";

export const Container = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Address = styled.div `
    height: 80px;
    width: 100vw;
    margin-top: 2px;
    padding: 16px 25px;
    background-color: #eee;
    p {
        line-height: 25px;
        :nth-child(1) {
            color: var(--greyish);
        }
        :nth-child(2) {
            color: black;
        }
    }
`

export const Paragraph = styled.p `
    text-align: center;
    padding: 10px 0;
`

export const Payment = styled.section `
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 20px;
    span {
        text-align: right;
        margin: 5px 20px 0 0;
    }
    section {
        display: flex;
        justify-content: space-between;
        margin: 5px 20px;
        p {
            font-size: 18px;
            margin: 10px 0;
            :nth-child(2) {
                font-weight: bold;
                color: var(--mid-green);
            }
        }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin: 0 25px;
        p {
            margin-top: 15px;
            line-height: 33px;
            border-bottom: 1px solid var(--black);
        }
        div {
            display: flex;
            gap: 10px;
        }
    }
`

export const Restaurant = styled.section `
    width: 100vw;
    padding: 16px 20px;
    p {
        font-size: 16px;
        line-height: 25px;
        :nth-child(1) {
            color: var(--mid-green);
        }
        :nth-child(2), :nth-child(3) {
            color: var(--greyish);
        }
    }
`

export const ButtonSection = styled.div `
    position: absolute;
    bottom: 65px;
`