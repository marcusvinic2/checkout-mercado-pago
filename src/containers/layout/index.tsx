import React, { useState } from "react";
import ButtonComponent from "../../components/button";
import Header from "../../components/header/input";
import InputComponent from "../../components/input";
import * as Component from './styles'

const Layout: React.FC = () => {

    return (
        <Component.Container>
            <Component.ContainerInternoDesktop>
                <Header />

                <InputComponent
                    placeholder="Nome"
                    label="Nome"
                    type="text"
                />

                <InputComponent
                    placeholder="Email"
                    label="Email"
                    type="text"
                />

                <InputComponent
                    placeholder="CPF"
                    label="CPF"
                    type="text"
                />

                <InputComponent
                    placeholder="Contato"
                    label="Contato"
                    type="text"
                />

                <Component.Description>
                    vamos enviar uma mensagem para seu e-mail assim que concluir o pagamento.
                </Component.Description>

                <ButtonComponent 
                    name="Pagar Agora" 
                />
            </Component.ContainerInternoDesktop>

            <Component.ContainerInternoMobile>

                <Header />

                <InputComponent
                    placeholder="Nome"
                    label="Nome"
                    type="text"
                />

                <InputComponent
                    placeholder="Email"
                    label="Email"
                    type="text"
                />

                <InputComponent
                    placeholder="CPF"
                    label="CPF"
                    type="text"
                />

                <InputComponent
                    placeholder="Contato"
                    label="Contato"
                    type="text"
                />

                <Component.Description>
                    vamos enviar uma mensagem para seu e-mail assim que concluir o pagamento.
                </Component.Description>

                <ButtonComponent 
                    name="Pagar Agora"
                />
            </Component.ContainerInternoMobile>
        </Component.Container>
    )
}

export default Layout