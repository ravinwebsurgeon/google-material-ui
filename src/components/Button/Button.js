import { Button as ButtonMui } from '@mui/material';
import React from 'react'

const Button = ({variant="contained", label="", disabled=false, icon, action}) => {
    return (
        <ButtonMui 
            disabled={disabled}
            variant={variant}
            sx={{
                boxShadow:'none',
                minWidth: "99px",
                minHeight: "40px",
                fontWeight: '500',
                fontSize: '14px',
                lineHeight: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '0.1px',
                borderRadius: "100px",
                padding: "10px 24px",
                textTransform: "capitalize",
                transition:'all 0.3s ease',
                gap: "11px",
                ...variant === "contained" && {
                    background: "var(--tertiary-color)",
                    color: "#ffffff",
                    ":hover": {
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
                    },
                    ":focus, :active, :hover, :visited, :focus-within" : {
                        opacity: 0.8,
                        background: "var(--tertiary-color)",
                    }
                },
                ...variant === "text" && {
                    color: "var(--tertiary-color)",
                    ":focus, :active, :hover, :visited, :focus-within": {
                        bgcolor: "var(--light-color)"
                    }
                },
                ...variant === "outlined" && {
                    border: "1px solid ",
                    borderColor: "var(--tertiary-color)",
                    color: "#49454F",
                    bgcolor:'transparent',
                    ":focus, :active, :hover, :visited, :focus-within" : {
                        borderColor: "var(--tertiary-color)",
                        bgcolor: "var(--light-color)",
                    }
                },
                ...variant === "elevated" && {
                    background: "var(--light-color)",
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
                    color: "var(--tertiary-color)"
                },
                ...variant === "tonal" && {
                    background: "var(--primary-color)",
                    ":hover": {
                        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
                    },
                    ":hover, :focus": {
                        background: "#c3cfb6",
                    }
                },
            }}
            onClick={action}
        >
            {icon && (icon)}
            {label}
        </ButtonMui>
    )
}

export default Button;