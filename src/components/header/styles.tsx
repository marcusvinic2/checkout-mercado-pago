import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 80%;
    margin-bottom: 10px;
` 

export const TitleHeader = styled.div`
    display: flex;
    font-size: 20px;
    justify-content: center;
`

export const OrderAmountHeader = styled.div`
    display: flex;
    width: 100%;
    font-size: 18px;
    justify-content: space-between;
`

export const IconsHeader = styled.div`
    display: flex;
    align-items: center;
    display: none;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0.9;
        &:active {
            opacity: 1.0;
        }

            img {
                width: 80%;
                height: 35px;
            }
    }
`

export const ItemHeader = styled.div`
    display: flex;
`

export const MethodsPaymentHeader = styled.div`
    display: flex;
    width: 70px;
    height: 49px;
    background: #EEF1F4;
    border-radius: 8px;
`


