import React from 'react'
import { InputAdornment, OutlinedInput } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

const SearchBar = () => {
    return (
        <OutlinedInput
            id="outlined-adornment-weight"
            startAdornment={
                <InputAdornment position="start">
                    <SearchOutlined  fontSize='medium'
                        sx={{
                            color:'#49454F'
                        }}
                    />
                </InputAdornment>
            }
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
            placeholder="Search here..."
        />
    )
}

export default SearchBar;