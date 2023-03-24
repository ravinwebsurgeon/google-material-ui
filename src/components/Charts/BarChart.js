import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box, Card, CardHeader, Chip, Stack } from '@mui/material';
import { TrendingDown, TrendingUp } from '@mui/icons-material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false //removes chart default title
        },
    },
    scales: {
        x: {
            display: false, //removes chart x-labels and grid scales

        },
        y: {
            display: false, //removes chart y-labels and grid scales
        }
    }
};

const BarChart = ({dataset, labels, backgroundColor , label, total, profit, loss}) => {
    
    const data = {
        labels,
        datasets: [
            {
                label: label,
                data: dataset,
                backgroundColor: backgroundColor,
            }
        ],
    };

    return (
        <Card sx={{boxShadow: "none"}}>
            <Box padding="18px">
                <Box color="#808080" fontSize="14px">Total {label}</Box>
                <Stack flexDirection="row" alignItems="center" marginTop= "5px">
                    <CardHeader title={total} sx={{fontWeight: "900", padding: 0}}/>
                    <Chip 
                        label={profit || loss} 
                        icon={profit 
                            ? <TrendingUp color="#fab937" sx={{width: "15px"}}/> 
                            : <TrendingDown color="#fab937" sx={{width: "15px"}} />
                        }
                        variant="outlined" 
                        sx={{
                            borderRadius: "4px", 
                            borderColor: profit ? '#40a3ff' : "#fab937", 
                            backgroundColor: profit ? "rgb(230, 247, 255);" : "rgb(255, 251, 230)", 
                            height: "24px",
                            color: profit ? '#40a3ff' : "#fab937", 
                            marginLeft: "10px"
                        }}
                    />
                </Stack>
            </Box>
            <Box paddingX="2px">
                <Bar options={options} data={data} height="90px" />
            </Box>
        </Card>
    )
}

export default BarChart;