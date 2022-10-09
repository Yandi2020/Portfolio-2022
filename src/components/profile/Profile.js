import React from "react";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const Profile = () => {
  const img = require("../../img/cv-img-3.jpg");

  return (
    <Container sx={{ margin: "30px auto", maxWidth: "100%" }}>
      <Divider>
        <Chip 
          label="Profile"  
          sx={{
            fontSize: "22px", 
            bgcolor: "#afb42b", // lime 700
            color: "white"
          }} 
        />
      </Divider>

      <Avatar src={img} sx={{ width: 150, height: 150, margin: "15px auto" }} />

      <Typography
        variant="body1"
        align="justify"
        component="div"
        sx={{
          color: "black",
          fontSize: "1.2em",
          fontWeight: 500,
          lineHeight: "1.5em",
        }}
      >
        Since 2019 I have been learning and practicing web development. I have
        worked as a frontend developer for one year in a venture team of BASF
        and meanwhile learnt MERN stack skills. As I grow as a developer, 
        I intend to write clean, reusable and readable code.
      </Typography>
    </Container>
  );
};

export default Profile;
