import styled from "styled-components"

interface InputProps {
    onClick?: any
}

export const Button = styled.button<InputProps>`
    margin-top: 10px;
    width: 80%;
    height: 55px;
    background: #5686E1;
    border-radius: 8px;
    border: none;

    font-family: 'Karla';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 23px;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    opacity: 0.9;

    &:active {
        opacity: 1.0;
    }
`