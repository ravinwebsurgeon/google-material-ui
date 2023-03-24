import { Menu, SearchOutlined } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import React from "react";
import Search from "../components/Search";

const SearchBar = () => {
    return(
        <Box>
            <Box 
            sx={{
                fontSize: '30px', 
                fontWeight: "700", 
                marginBottom: "30px",
                '@media screen and (max-width: 1199px)': {
                    fontSize: '24px',
                },
            }}
            >Search Bars</Box>   
            <Grid spacing="30px" container>
                <Grid item>
                    <Search 
                        placeholder="Search here..."
                        startIcon={                
                            <SearchOutlined  
                                fontSize='medium'
                                sx={{
                                    color:'#49454F'
                                }}
                            />
                        }
                    />
                </Grid>
                <Grid item>
                    <Search 
                        placeholder="Search here..."
                        startIcon={                
                            <Menu  
                                fontSize='medium'
                                sx={{
                                    color:'#49454F'
                                }}
                            />
                        }
                        endIcon={                
                            <SearchOutlined  
                                fontSize='medium'
                                sx={{
                                    color:'#49454F'
                                }}
                            />
                        }
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default SearchBar;