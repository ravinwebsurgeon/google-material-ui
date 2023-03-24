import { MoreVert } from "@mui/icons-material";
import { Avatar, Card as CardMui, CardContent, CardHeader, CardMedia, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../Button/Button";

const Card = ({ header = "", title = "", subTitle = "", media = '', description = "", type = "outlined", actionLabel = "", action = null }) => {
    return (
        <CardMui
            sx={{
                borderRadius: "12px",
                margin: "10px",
                boxShadow: "none",
                bgcolor: "#fffbfe",
                ...type === "elevated" && {
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
                    bgcolor: "linear-gradient(0deg, rgba(103, 80, 164, 0.05), rgba(103, 80, 164, 0.05)), #FFFBFE"
                },
                ...type === "outlined" && {
                    border: "1px solid #CAC4D0"
                },
                ...type === "filled" && {
                    bgcolor: "var(--primary-color)"
                },
                '@media screen and (max-width: 599px)': {
                    margin: "0 0 24px 0",
                },
            }}
        >
            <CardHeader
                avatar={
                    <Avatar
                        sx={{
                            bgcolor: 'var(--primary-color)',
                            color: "#49454F",
                            ...type === "filled" && {
                                bgcolor: '#49454F',
                                color: "#ffffff",
                            }
                        }}
                    >
                        A
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={header}
                titleTypographyProps={{
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '0.15px'
                }}
                subheader={subTitle}
            />
            {media && (
                <CardMedia
                    component="img"
                    height="200"
                    image={media}
                    alt="Paella dish"
                />
            )}
            <CardContent>
                <Typography
                    variant="body2"
                    color="#1C1B1F"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="24px"
                    letterSpacing="0.5px"
                >
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {subTitle}
                </Typography>
                <Typography variant="body2" color="#49454F" marginTop="32px" marginBottom={actionLabel && "32px"}>
                    {description}
                </Typography>
                {actionLabel && (
                    <Stack 
                    direction="row" 
                    gap="8px" 
                    justifyContent="flex-end"
                    sx={{
                        '@media (min-width:600px) and (max-width: 1199px)': {
                            flexDirection:'column'
                        },
                    }}
                    >
                        <Button
                            variant="outlined"
                            label={actionLabel}
                            action={action}
                        />
                        <Button
                            variant="contained"
                            label={actionLabel}
                            action={action}
                        />
                    </Stack>
                )}
            </CardContent>
        </CardMui>
    )
}

export default Card;