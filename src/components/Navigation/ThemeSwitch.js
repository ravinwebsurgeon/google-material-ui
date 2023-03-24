import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Box, IconButton, useTheme } from '@mui/material';
import React, { useContext } from 'react'
import { ColorModeContext } from '../../App';

const ThemeSwitch = () => {
    const theme = useTheme();
    const { toggleColorMode } = useContext(ColorModeContext);

    return (
        <Box
            sx={{
                display: 'flex',
                width: '44px',
                height: '44px',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.mode === "dark" ? "#000000" : "#49454F",
                borderRadius: "50%",
                backgroundColor: "rgba(28, 27, 31, 0.08)",
                '&:hover': {
                    backgroundColor:'var(--primary-color)',
                },
                '@media screen and (max-width: 1199px)': {
                    width: '34px',
                    height: '34px',
                },
            }}
        >
            <IconButton  onClick={toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
        </Box>
    )
}

export default ThemeSwitch;