import styled from "styled-components";

export const InputStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 72px;
    padding: 0 16px 8px;

    label {
        height: 18px;
        width: 78px;
        margin: 3px 234px -18px 30px;
        padding-left: 4px;
        font-size: 12px;
        letter-spacing: -0.29px;
        color: ${(props) => props.color};
        z-index: 2;
        background-color: white;
    }

    input {
        height: 56px;
        width: 328px;
        margin: 8px 0 0;
        padding: 19px 48px 19px 16px;
        border-radius: 2px;
        border: solid 1px ${(props) => props.color};
        color: var(--black);

        ::placeholder {
            color: #d0d0d0;
        }
    }

`

export const InputPassword = styled(InputStyle)`
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    button {
        background-color: white;
        border: none;
        margin: 0 0 0 -45px;
        width: 24px;
        height: 24px;

        img {
            width: 24px;
            height: 24px;
            margin: 5px 0 0 8px;
            object-fit: contain;
        }
    }
    
`

export const ErrorText = styled.p`
        margin: 0 32px;
        letter-spacing: -0.29px;
        font-size: 12px;
        color: #e02020;
`