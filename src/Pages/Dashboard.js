import { Box, Grid } from '@mui/material';
import React from 'react';
import BarChart from '../components/Charts/BarChart';
import AreaChart from '../components/Charts/AreaChart';
import CurveAreaChart from '../components/Charts/CurveAreaChart';

const Dashboard = () => {
    return(
        <Box width="100%" marginX="auto">
            <Grid
                container
                spacing="24px"
                marginTop="10px"
                lg={12}
            >
                <Grid
                    item 
                    lg={4}
                    sm={6}
                    sx={{
                        '@media screen and (max-width: 899px)': {
                            width:'100%',
                        },
                    }}
                >
                    {/*---reusable Barchart.js Component with dynamic data---*/}
                    <BarChart 
                        //x-axis datasets
                        labels = {[1, 2, 3, 4, 5, 6, 7,8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]}
                        //y-axis datasets
                        dataset= {[220, 230, 240, 220, 225, 215, 205, 195, 185, 150, 185, 195, 80, 205, 215, 225, 240, 225, 215, 205, 80, 215, 225, 240, 215, 210, 119]}
                        backgroundColor= '#E8DEF8'
                        label="Users"
                        total="78,250"
                        profit="70.5%" //can add either profit or loss for graph 
                    />
                </Grid>


                <Grid
                    item 
                    lg={4}
                    sm={6}
                    sx={{
                        '@media screen and (max-width: 899px)': {
                            width:'100%',
                        },
                    }}
                >
                    {/*---reusable CurveAreaChart.js Component with dynamic data---*/}
                    <CurveAreaChart
                        //x-axis datasets
                        labels = {[1, 2, 3, 4, 5, 6, 7,8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]} 
                        //y-axis datasets
                        dataset= {[1800, 1500, 1800, 1700, 1400, 1200, 1000, 800, 600, 500, 600, 800, 500, 700, 400, 600, 500, 600]}  
                        backgroundColor= '#ffd9d9'
                        label="Order"
                        borderColor= '#ff4d4f'
                        total="18,800"
                        loss="27.4%" //can add either profit or loss for graph 
                    />
                </Grid>
                <Grid
                    item 
                    lg={4}
                    sm={6}
                    sx={{
                        '@media screen and (max-width: 899px)': {
                            width:'100%',
                        },
                    }}
                >
                    {/*---reusable AreaChart.js Component with dynamic data---*/}
                    <AreaChart 
                        //x-axis datasets
                        labels = {[1, 2, 3, 4, 5, 6, 7,8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
                        //y-axis datasets
                        dataset= {[100, 140, 100, 240, 115, 125, 90, 100, 80, 150, 160, 150, 170, 155, 150, 160, 145, 200, 140, 160]}
                        backgroundColor= '#E8DEF8'
                        label="Marketing"
                        borderColor= '#800080'
                        total="$1,12,083"
                        profit="70.5%" //can add either profit or loss for graph 
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dashboard;