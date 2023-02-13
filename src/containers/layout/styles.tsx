import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2d2e4a;

    @media (max-width: 600px) {
        background-color: #ffffff;
    }
`

export const ContainerInternoDesktop = styled.div`
    display: flex;
    background-color: #ffffff;;
    width: 430px;
    height: 70%;
    border-radius: 20px;

    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 600px) {
        display: none;
    }
`

export const ContainerInternoMobile = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;


    @media (min-width: 600px) {
        display: none;
    }
`

export const Description = styled.div`
    width: 208px;
    height: 42px;
    font-family: 'Karla';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #3A3C3F;
`