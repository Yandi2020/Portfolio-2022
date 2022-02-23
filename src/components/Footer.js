import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  // red 700
  return (
    <footer className="footer">
      <Container>
        <Typography
          align="center"
          variant="h5"
          component="div"
          sx={{
            color: "black",
            fontSize: "1em",
            fontWeight: 600,
          }}
        >
          Made with <FavoriteIcon sx={{color: "#d32f2f", marginTop: "10px", fontSize: "1.2em"}} /> · Yandi Wang 2022
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
