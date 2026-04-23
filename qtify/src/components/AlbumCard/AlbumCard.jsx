import React from "react";
import MuiCard from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function AlbumCard({ album }) {
    // console.log(styles);
    return (
        <Box sx={{ width: 159, textAlign: "left", overflow: "hidden" }}>
            <MuiCard elevation={0} sx={{ borderRadius: 3, overflow: "hidden" }}>
                <CardMedia component="img" height="100%" image={album.image} alt={album.title} sx={{ maxHeight: 170 }} />
                <Box sx={{ padding: 1 }}>
                    <Chip
                        sx={{
                            backgroundColor: "#000",
                            color: "#fff",
                        }}
                        label={`${album.follows} follows`}
                    />
                </Box>
            </MuiCard>
            <Typography
                sx={{
                    mt: 1,
                    color: "white",
                    fontWeight: 300,
                    fontSize: 14,
                }}
            >
                {album.title}
            </Typography>
        </Box>
    );
}

export default AlbumCard;
