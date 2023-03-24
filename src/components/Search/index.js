import { InputAdornment, OutlinedInput } from '@mui/material';
import React from 'react'

const Search = ({placeholder="", startIcon, endIcon}) => {
    return (
        <OutlinedInput
            id="outlined-adornment-weight"
            startAdornment={startIcon && (
                <InputAdornment position="start">
                    {startIcon}
                </InputAdornment>
            )}
            endAdornment={endIcon && (
                <InputAdornment position="start">
                    {endIcon}
                </InputAdornment>
            )}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
                'aria-label': 'weight',
            }}
            sx={{
                height: "44px", 
                borderRadius: "28px",
                background: 'var(--primary-color)',
                color: '#49454F',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '24px',
                border:'none',
                minWidth:'325px',
                '& fieldset': {
                    border:'none'
                },
                '& ::placeholder': {
                    opacity:'1',
                    color: '#49454F',
                },
                '@media screen and (max-width: 1199px)': {
                    minWidth:'100%',
                },
            }}
            placeholder={placeholder}
        />
    )
}

export default Search;