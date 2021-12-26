import { Button } from '@mui/material'
import React from 'react'

export default function CommonButton(props) {
    const { variant, onClick, text, className}  = props;
    return (
        <Button 
            variant={variant}
            className={className}
            onClick={onClick}
        >
            {text}
        </Button>
    )
}
