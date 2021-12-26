import React from 'react';

import { TextField } from '@mui/material';

export default function MainTextField(props) {
    const { onChange, value, type, className, label, name } = props;
    return (
        <div>
            <TextField 
                id="outlined-basic" 
                name={name}
                label={label} 
                variant="outlined" 
                onChange={onChange}
                className={className}
                value={value}
                type={type ? type : 'text'}
            />
            {/* <TextF 
                onChange={onChange}
                value={value}
                className={className}
            /> */}
        </div>
    )
}
