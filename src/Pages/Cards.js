import { Box, Grid} from '@mui/material';
import React from 'react'
import Card from '../components/Cards';
import { useNavigate } from "react-router-dom";

const Cards = () => {
    const navigate = useNavigate();
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
                >Cards</Box>
            <Grid container lg={12}>
                <Grid item sm={6} md={4}>
                    <Box
                        sx={{
                            marginBottom: "10px",
                            fontWeight: "500",
                            fontSize: "14px",
                            lineHeight: "20px",
                            letterSpacing: "0.1px"
                        }}
                    >1) Outlined Card</Box>
                    <Card 
                        header="Shrimp and Chorizo Paella"
                        title="Shrimp and Chorizo Paella"
                        subTitle="September 14, 2016"
                        media='https://source.unsplash.com/random/900x700/?fruit'
                        description='This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.'
                        type="outlined"
                        actionLabel="Read More"
                    />
                </Grid>
                <Grid item sm={6} md={4}>
                    <Box
                        sx={{
                            marginBottom: "10px",
                            fontWeight: "500",
                            fontSize: "14px",
                            lineHeight: "20px",
                            letterSpacing: "0.1px"
                        }}
                    >2) Elevated Card</Box>
                    <Card 
                        header="Shrimp and Chorizo Paella"
                        title="Shrimp and Chorizo Paella"
                        subTitle="September 14, 2016"
                        media='https://source.unsplash.com/random'
                        description='This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.'
                        type="elevated"
                        actionLabel="Read More"
                        action={() => navigate("/buttons")}
                    />
                </Grid>
                <Grid item sm={6} md={4}>
                    <Box
                        sx={{
                            marginBottom: "10px",
                            fontWeight: "500",
                            fontSize: "14px",
                            lineHeight: "20px",
                            letterSpacing: "0.1px"
                        }}
                    >3) Filled Card</Box>
                    <Card 
                        header="Shrimp and Chorizo Paella"
                        title="Shrimp and Chorizo Paella"
                        subTitle="September 14, 2016"
                        media='https://source.unsplash.com/random/?city,night'
                        description='This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.'
                        type="filled"
                        actionLabel='Read More'
                        action={() => alert("It's working!")}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Cards;