import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { motion } from "framer-motion"

const MyNavbar = () => {
  const variants = {
    hidden: {
      opacity: 0,
      y: "-100px",
    },
    visible : {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      }
    }
  }

  // grey 50
  return (
    <AppBar position="static" sx={{ bgcolor: "#fafafa" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              display: { xs: "flex" },
              color: "black",
              fontSize: "1.3em",
              fontWeight: 700,
            }}
            component={motion.div}
            variants={variants}
            initial="hidden"
            animate="visible"
          >
            Yandi Wang
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MyNavbar;
