import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import { Avatar, Button, FormControl, Link, ListItemIcon, MenuItem, Select, Stack } from '@mui/material';
import SideDrawer from './Drawer';
import { Menu, Settings } from '@mui/icons-material';
import SearchBar from './SearchBar';
import ThemeSwitch from './ThemeSwitch';
import useWindowDimensions from "../../hooks/useWindowDimensions";

const drawerWidth = 300;

export default function Navigation({ children }) {

    const { width } = useWindowDimensions();

    const [open, setOpen] = useState(width < 1200 ? false : true);
    const [language, setLanguage] = useState("English");

    const handleDrawer = () => {
        setOpen(prev => !prev);
    };

    console.log(".>>>>", width);

    return (
        <Box >
            <AppBar
                position="sticky"
                open={open}
                sx={{
                    backgroundColor: '#ffffff',
                    boxShadow: 'none',
                    borderBottom:'1px solid var(--grey-border)',
                }}
            >
                <Stack
                    justifyContent="space-between"
                    alignItems="center"
                    paddingX="24px"
                    paddingY="8px"
                    flexDirection="row"
                    sx={{
                        '@media screen and (max-width: 1199px)': {
                            paddingX: '16px',
                        },
                    }}
                >
                    <Stack flexDirection="row" justifyContent="start" alignItems="center" >
                        <Button
                            variant='text'
                            sx={{
                                marginRight: '24px',
                                height: '44px',
                                width: '44px',
                                minWidth: '44px',
                                borderRadius: '44px',
                                backgroundColor: 'rgba(28, 27, 31, 0.08)',
                                '&:hover': {
                                    backgroundColor: 'var(--primary-color)',
                                },
                                '@media screen and (max-width: 1199px)': {
                                    height: '34px',
                                    width: '34px',
                                    minWidth: '34px',
                                    borderRadius: '34px',
                                },
                            }}
                            onClick={handleDrawer}
                        >
                            <Menu fontSize='medium'
                                sx={{
                                    color: '#49454F',
                                }}
                            />
                        </Button>
                        <Box
                        sx={{
                            display:'block',
                            '@media screen and (max-width: 1199px)': {
                                display:'none',
                            },
                        }}
                        >
                        <SearchBar />
                        </Box>

                    </Stack>

                    <Box
                        sx={{
                            display: 'none',
                            '@media screen and (max-width: 1199px)': {
                                display: 'block',
                            },
                        }}
                    >
                        <Link to="/">
                            <ListItemIcon>
                                <img
                                    src="/static/logo.svg"
                                    alt="logo"
                                    className='App-logo'
                                />
                            </ListItemIcon>
                        </Link>
                    </Box>

                    <Stack
                        flexDirection="row"
                        justifyContent="start"
                        alignItems="center"
                        gap="24px"
                        sx={{
                            '@media screen and (max-width: 1199px)': {
                                gap: '8px',
                            },
                        }}
                    >
                        <ThemeSwitch />
                        <FormControl
                            sx={{
                                minWidth: '150px',
                                border: 'none',
                                height: '44px',
                                '@media screen and (max-width: 1199px)': {
                                    height: '34px',
                                    display: 'none',
                                },
                            }}
                        >
                            <Select
                                labelId="language-label"
                                id="language"
                                value={language}
                                // label="language"
                                onChange={(e) => setLanguage(e.target.value)}
                                sx={{
                                    borderRadius: "44px",
                                    border: 'none',
                                    height: '44px',
                                }}
                            >
                                <MenuItem value="English">English</MenuItem>
                                <MenuItem value="Spanish">Spanish</MenuItem>
                                <MenuItem value="French">French</MenuItem>
                            </Select>
                        </FormControl>
                        <Avatar
                            sx={{
                                bgcolor: 'var(--primary-color)',
                                color: "#21005D",
                                fontWeight: '500',
                                fontSize: '16px',
                                height: '44px',
                                width: '44px',
                                cursor: "pointer",
                                '@media screen and (max-width: 1199px)': {
                                    height: '34px',
                                    width: '34px',
                                },
                            }}
                        >A</Avatar>
                        <Settings
                            fontSize="medium"
                            sx={{
                                color: '#000',
                                cursor: 'pointer',
                                '@media screen and (max-width: 599px)': {
                                    display: 'none',
                                },
                            }}
                        />
                    </Stack>
                </Stack>
            </AppBar>

            {/*---side drawer started---*/}
            <SideDrawer open={open} setOpen={setOpen} width={width}/>
            {/*---side drawer ended---*/}

            {/*---pages will be shown inside children on navigation---*/}
            <Component
                open={open}
                component="main"
                sx={{
                    display: "block",
                    backgroundColor: "#fafafb",
                    padding: '30px',
                    minHeight: '100vh',
                    '@media screen and (max-width: 1199px)': {
                        padding: '32px 16px',
                    },
                }}
            >
                {children}
            </Component>
        </Box>
    );
}



// Top NavBar css
const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    marginLeft: "auto",
    width: `calc(100% - 79px)`,
    [theme.breakpoints.down('lg')]: {
        width: `calc(100% - 0px)`,
    },
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: "auto",
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

// Navigated Page Component Wrapper css
const Component = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    marginLeft: "auto",
    width: `calc(100% - 79px)`,
    [theme.breakpoints.down('lg')]: {
        width: `calc(100% - 0px)`,
    },
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: "auto",
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));