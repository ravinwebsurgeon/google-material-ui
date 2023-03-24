import { ListItemButton, ListItemIcon, ListSubheader, Stack } from '@mui/material';
import React from 'react'
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation } from 'react-router-dom'
import {
    ContactEmergencyOutlined,
    SearchOutlined,
    BarChartOutlined,
    ViewAgenda,
    SmartButton,
    AccountCircle,
    Settings,
    Badge,
    List,
    Menu,
    ToggleOff,
    TuneOutlined,
    CheckBox,
    GridViewOutlined,
} from "@mui/icons-material"
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import SearchBar from './SearchBar';
import { Box } from '@mui/system';

// const drawerWidth = 300;

const SideDrawer = ({ open, setOpen = () => { }, width }) => {
    const { pathname } = useLocation();
    return (
        <Drawer
            className='drawer'
            variant="permanent"
            open={open}
            sx={{
                '& > div': {
                    background: '#ffffff',
                    padding: open ? '0 12px 12px' : "0 8px 12px",
                    boxSizing: 'border-box',
                    width: '300px',
                    '@media screen and (max-width: 1199px)': {
                        padding: open ? '12px 12px 12px' : "0",
                        maxWidth: '400px',
                        width: '100%',
                        top: '60px',
                        border: 'none',
                        height: 'calc(100% - 60px)',
                    },
                }
            }}
        >
            <Box
                sx={{
                    display: 'none',
                    '@media screen and (max-width: 1199px)': {
                        display: 'block',
                    },
                }}
            >
                <SearchBar />
            </Box>

            <DrawerHeader // logo
                sx={{
                    display: "flex",
                    justifyContent: "left",
                    position: 'sticky',
                    top: 0,
                    zIndex: 22,
                    backgroundColor: '#fff',
                    paddingX: '0',
                    '@media screen and (max-width: 1199px)': {
                        display: 'none',
                    },
                }}
            >
                {open ? (
                    <Link to="/">
                        <ListItemIcon>
                            <img
                                src="/static/logo.svg"
                                alt="logo"
                                className='App-logo'
                            />
                        </ListItemIcon>
                    </Link>
                ) : (
                    <Link to="/">
                        <ListItemIcon>
                            <img
                                src="/static/logo-icon.png"
                                alt="logo"
                                className='App-logo-icon'
                            />
                        </ListItemIcon>
                    </Link>
                )}
            </DrawerHeader>

            {/*---drawer links started---*/}
            {sideBar.map((index, i) => (
                <Stack key={i}>
                    {open && (
                        <ListSubheader
                            component="div"
                            id="nested-list-subheader"
                            sx={{
                                fontFamily: 'var(--body-font)',
                                fontStyle: 'normal;',
                                fontWeight: '500',
                                fontSize: 'var(--body-size)',
                                lineHeight: '20px',
                                letterSpacing: '0.1px',
                                color: '#49454F',
                                padding: '18px 16px',
                                backgroundColor: 'transparent',
                                '@media screen and (max-width: 1199px)': {
                                    position: 'static',
                                },
                            }}
                        >
                            {index.title}
                        </ListSubheader>
                    )}
                    {index.links.map((ln, i) => (
                        <Link
                            key={i}
                            to={ln.handle}
                            className='links'
                            onClick={() => {
                                width < 1200 && setOpen(false);
                            }}
                        >
                            <ListItemButton
                                key={i}
                                sx={{
                                    minHeight: '56px',
                                    borderRadius: '100px',
                                    justifyContent: open ? 'initial' : 'center',
                                    px: '20px',
                                    '&:hover': {
                                        background: 'rgba(28, 27, 31, 0.08)',
                                    },
                                    background: pathname === ln.handle && "var(--primary-color) !important"
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        "svg": {
                                            color: "#262626",
                                        },
                                        minWidth: 0,
                                        mr: open ? '12px' : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {ln.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={ln.link}
                                    sx={{
                                        "span": {
                                            fontFamily: 'Roboto',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            lineHeight: '20px',
                                            letterSpacing: '0.1px',
                                            color: '#49454F',
                                        },
                                        opacity: open ? 1 : 0
                                    }}
                                />
                            </ListItemButton>
                        </Link>
                    ))}
                </Stack>
            ))}
            {/*---drawer links ended---*/}

        </Drawer>
    )
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    // width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

//drawer opening css
const openedMixin = (theme) => ({
    // width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

//drawer closing css
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: '79px',
    [theme.breakpoints.down('lg')]: {
        width: '0',
    },
});

// Drawer Logo Header css
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

//Drawer links data
const sideBar = [
    {
        title: "Welcome",
        links: [
            {
                link: "Dashboard",
                icon: <ContactEmergencyOutlined fontSize="small" />,
                handle: "/"
            }
        ]
    },
    {
        title: "Components",
        links: [
            {
                link: "Cards",
                icon: <ViewAgenda fontSize="small" />,
                handle: "/cards"
            },
            {
                link: "Grids",
                icon: <GridViewOutlined fontSize="small" />,
                handle: "/grids"
            },
            {
                link: "Buttons",
                icon: <SmartButton fontSize="small" />,
                handle: "/buttons"
            },
            {
                link: "Charts",
                icon: <BarChartOutlined fontSize="small" />,
                handle: "#"
            },
            {
                link: "Search",
                icon: <SearchOutlined fontSize="small" />,
                handle: "/search"
            },
            {
                link: "Badges",
                icon: <Badge fontSize="small" />,
                handle: "#"
            },
            {
                link: "List",
                icon: <List fontSize="small" />,
                handle: "#"
            },
            {
                link: "Menu",
                icon: <Menu fontSize="small" />,
                handle: "#"
            },
            {
                link: "Switch",
                icon: <ToggleOff fontSize="small" />,
                handle: "#"
            },
            {
                link: "Sliders",
                icon: <TuneOutlined fontSize="small" />,
                handle: "#"
            },
            {
                link: "Checkbox",
                icon: <CheckBox fontSize="small" />,
                handle: "#"
            },

        ]
    },
    {
        title: "Others",
        links: [
            {
                link: "Profile",
                icon: <AccountCircle fontSize="small" />,
                handle: "",
                subLinks: []
            },
            {
                link: "Settings",
                icon: <Settings fontSize="small" />,
                handle: ""
            }
        ]
    }
]

export default SideDrawer;