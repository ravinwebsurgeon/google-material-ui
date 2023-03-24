import {
    Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const Welcome = ({ title = "", subTitle = "" }) => {
  return (
    <Card
      sx={{
        padding: "20px",
        background:
          "linear-gradient(250.38deg, rgb(230, 247, 255) 2.39%, rgb(105, 192, 255) 34.42%, rgb(24, 144, 255) 60.95%, rgb(9, 109, 217) 84.83%, rgb(0, 58, 140) 104.37%)", //gradient background colors
        color: "#fff",
        display: "flex",
        justifyContent: 'space-between',
        maxHeight: "274px"
      }}
    >
      <CardContent sx={{padding: "20px"}}>
        {/* title of banner */}
        <Typography
          sx={{
            margin: "0px",
            fontWeight: "600",
            fontSize: "1.875rem",
            lineHeight: "1.27",
            color: "rgb(255, 255, 255)",
          }}
        >
          {title}
        </Typography>

        {/* subtitle of banner below title */}
        <Typography
          sx={{
            marginY: "15px",
            fontSize: 14,
            maxWidth: "620px",
            width: "100%",
          }}
        >
          {subTitle}
        </Typography>

        {/* banner action button */}
        <CardActions sx={{padding: 0}}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              paddingX: "10px",
              paddingY: "5px",
              textTransform: "capitalize",
              borderColor: "#fff",
              color: "#fff",
              "&:hover": {
                borderColor: "#000",
                color: "rgb(38, 38, 38)",
              },
            }}
          >
            View Full Statistic
          </Button>
        </CardActions>
      </CardContent>
      <Box
        sx={{
          position: "relative",
          marginRight: '30px'
        }}
      >
        <CardMedia
          component="img"
          image="/static/welcome-banner.png"
          alt="banner"
          sx={{
            maxWidth: "267px",
            display: "block",
            marginLeft: "auto",
          }}
        />
        <Box
            sx={{
                position: "absolute",
                bottom: 0,
                right: 0
            }}
        >
            <CardMedia
                component="img"
                image="/static/banner-arrow.png"
                alt="banner"
                sx={{
                    maxWidth: "100px",
                    display: "block",
                    marginLeft: "auto",
                }}
            />
        </Box>
      </Box>
    </Card>
  );
};

export default Welcome;
