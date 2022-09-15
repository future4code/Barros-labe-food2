import styled from "styled-components";

export const ButtonStyle = styled.button`
    width: 328px;
    height: 42px;
    background-color: var(--mid-green);
    padding: 12px 16px;
    border-radius: 2px;
    border: none;
    transition: 0.2s;
    margin: 8px 16px;

    p {
        width: 296px;
        height: 18px;
        text-align: center;
        color: var(--black);
    }

    :active {
        transform: scale(0.98)
    }
`