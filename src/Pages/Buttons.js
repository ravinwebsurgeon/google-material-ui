import { Add } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import React from 'react'
import Button from '../components/Button/Button';

const Buttons = () => {
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
            >Buttons</Box>

            <Box 
                sx={{
                    marginBottom: "10px",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0.1px"
                }}
            >1) Filled Buttons</Box>

            <Grid container spacing="20px">
                <Grid item>
                    <Button 
                        variant="contained" 
                        label="Text Only"
                    />
                </Grid>
                <Grid item>
                    <Button 
                        variant="contained" 
                        label="Text With Icon"
                        icon={<Add/>}
                    />
                </Grid>
                <Grid item>
                    <Button 
                        variant="contained" 
                        // label="Focused"
                        icon={<Add/>}
                    />
                </Grid>
                <Grid item>
                    <Button 
                        variant="contained" 
                        label="Disabled"
                        disabled
                    />
                </Grid>
            </Grid>

            <Box
                sx={{
                    marginBottom: "10px",
                    marginTop: "30px",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0.1px"
                }}
            >2) Outlined Buttons</Box>

            <Grid container spacing="20px">
                <Grid item>
                    <Button 
                        variant="outlined" 
                        label="Text Only"
                    />
                </Grid>
                <Grid item>
                    <Button 
                        variant="outlined" 
                        label="Text With Icon"
                        icon={<Add/>}
                    />
                </Grid>
                <Grid item>
                    <Button 
                        variant="outlined" 
                        icon={<Add/>}
                    />
                </Grid>
                <Grid item>
                    <Button 
                        variant="outlined" 
                        label="Disabled"
                        disabled
                    />
                </Grid>
            </Grid>

            <Box 
                sx={{
                    marginBottom: "10px",
                    marginTop: "30px",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0.1px"
                }}
            >3) Text Buttons</Box>

            <Grid container spacing="20px">
                <Grid item>
                    <Button 
                        variant="text" 
                        label="Text Only"
                    />
                </Grid>
                <Grid item>
                    <Button 
                        variant="text" 
                        label="Text With Icon"
                        icon={<Add/>}
                    />
                </Grid>
                <Grid item>
                    <Button 
                        variant="text" 
                        // label="Focused"
                        icon={<Add/>}
                    />
                </Grid>
                <Grid item>
                    <Button 
                        variant="text" 
                        label="Disabled"
                        disabled
                    />
                </Grid>
            </Grid>

            <Box 
                sx={{
                    marginBottom: "10px",
                    marginTop: "30px",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0.1px"
                }}
            >3) Elevated Buttons</Box>

            <Grid container spacing="20px">
                <Grid item>
                    <Button 
                        variant="elevated" 
                        label="Text Only"
                    />
                </Grid>
                <Grid item>
                    <Button 
                        variant="elevated" 
                        label="Text With Icon"
                        icon={<Add/>}
                    />
                </Grid>
                <Grid item>
                    <Button 
                        variant="elevated" 
                        // label="Focused"
                        icon={<Add/>}
                    />
                </Grid>
                <Grid item>
                    <Button 
                        variant="elevated" 
                        label="Disabled"
                        disabled
                    />
                </Grid>
            </Grid>

            <Box 
                sx={{
                    marginBottom: "10px",
                    marginTop: "30px",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0.1px"
                }}
            >4) Tonal Buttons</Box>

            <Grid container spacing="20px">
                <Grid item>
                    <Button 
                        variant="tonal" 
                        label="Text Only"
                    />
                </Grid>
                <Grid item>
                    <Button 
                        variant="tonal" 
                        label="Text With Icon"
                        icon={<Add/>}
                    />
                </Grid>
                <Grid item>
                    <Button 
                        variant="tonal" 
                        // label="Focused"
                        icon={<Add/>}
                    />
                </Grid>
                <Grid item>
                    <Button 
                        variant="tonal" 
                        label="Disabled"
                        disabled
                    />
                </Grid>
            </Grid>

        </Box>
    )
}

export default Buttons;