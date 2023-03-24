import React from 'react'
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import BasicTable from '../components/Grids/Grids';
import CustomizedTables from '../components/Grids/ColorGrid';
import EnhancedTable from '../components/Grids/SortSelectGrid';

const Grids = () => {
    return (
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
            >Basic Grid</Box>
            {/* <Grid container spacing={4} columns={12}>
                <Grid item lg={6}
                    sx={{
                        '@media screen and (max-width: 1199px)': {
                            width: '100%',
                        },
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                marginBottom: "10px",
                                fontWeight: "500",
                                fontSize: "14px",
                                lineHeight: "20px",
                                letterSpacing: "0.1px"
                            }}
                        >1) A simple example with no frills.</Box>
                        <BasicTable />
                    </Box>
                </Grid>
                <Grid item lg={6}
                    sx={{
                        '@media screen and (max-width: 1199px)': {
                            width: '100%',
                        },
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                marginBottom: "10px",
                                fontWeight: "500",
                                fontSize: "14px",
                                lineHeight: "20px",
                                letterSpacing: "0.1px"
                            }}
                        >2) A simple example with color customization.</Box>
                        <CustomizedTables />
                    </Box>
                </Grid>
            </Grid> */}


            <Grid container lg={12}>
                <Grid
                    item
                    sm={12}
                >
                    <Box
                        sx={{
                            marginBottom: "10px",
                            fontWeight: "500",
                            fontSize: "14px",
                            lineHeight: "20px",
                            letterSpacing: "0.1px"
                        }}
                    >
                        2) A simple table example with searchable dropdown and pagination.
                    </Box>
                    <EnhancedTable />
                </Grid>
            </Grid>

        </Box>
    )
}

export default Grids
