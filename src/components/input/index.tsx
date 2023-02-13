import React from "react";
import { InputComponent, Label } from "./styles";
 
interface InputProps {
    placeholder: string
    label: string
    type: string;
}

const Input: React.FC<InputProps> = (props) => {
    console.log(props)
    return (
        <Label>{props.label}
            <InputComponent />
        </Label>
    )
}

export default Input