import React, { useState } from "react";
import { Button } from './styles'
import CircularProgress from '@mui/material/CircularProgress';

interface ButtonProps {
    name: string
    loading?: any
}

const ButtonComponent: React.FC<ButtonProps> = (props) => {

    const [loading, setLoading] = useState(false)

    const handlePayment = () => {
        setLoading(true)
    }

    return(
        <Button onClick={() => handlePayment()}>
            {loading === false ? (props.name) : (<CircularProgress color="secondary" style={{ width: 25, height: 25 }} />)}
        </Button>
    )
}

export default ButtonComponent