import styled from "styled-components";

interface InputProps {
    label?: string
}

export const Label = styled.label<InputProps>`
    display: flex;
    flex-direction: column;
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #3A3C3F;
    width: 80%;
`

export const InputComponent = styled.input<InputProps>`
    margin-top: 2px;
    height: 55px;
    background: #EEF1F4;
    border-radius: 8px;
    outline: none;
    padding: 10px;
    font-size: 14px;
    border: none;
    font-family: 'Karla';
`