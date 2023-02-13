import React from "react";
import ImagePix from '../../assets/pix.svg'

import * as Component from "./styles";

const Header: React.FC = () => {
    return (
        <Component.Container>
            <Component.TitleHeader>Checkout</Component.TitleHeader>

            <Component.OrderAmountHeader>
                <Component.ItemHeader>Valor Total:</Component.ItemHeader>
                <Component.ItemHeader>R$24.99</Component.ItemHeader>
            </Component.OrderAmountHeader>

            <Component.IconsHeader>
                <Component.MethodsPaymentHeader>
                    <div>
                        <img src={ImagePix} alt='pix imagem' />
                    </div>
                </Component.MethodsPaymentHeader>
            </Component.IconsHeader>
        </Component.Container>
    )
}

export default Header