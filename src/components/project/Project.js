/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { motion } from "framer-motion";

const Project = () => {
  const immoWeb = {
    link: require("../../img/immo-web.png"),
    title: "ImmoMate Apartment Searching",
    text: "With React, Redux and Firebase, this Web App is for apartment searching and posting.",
    chips: ["React", "Redux", "Firebase", "JavaScript", "GoogleMaps API"],
    url: "https://immo-mate.firebaseapp.com/",
  };
  const immoApp = {
    link: require("../../img/immo-app.png"),
    title: "ImmoMate Mobile App",
    text: " This is mobile app version of ImmoMate Project with Expo and React Native.",
    chips: ["React Native", "Expo", "Redux", "Hooks & Context"],
    url: "https://expo.io/@wyd20/projects/ImmoMate",
  };
  const repo = {
    link: require("../../img/repo.png"),
    title: "Github Repositories",
    text: "This is a record of 'learning by doing', different kinds of learning and practicing projects.",
    chips: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Redux",
      "Hooks & Context",
      "Firebase",
    ],
    url: "https://github.com/Yandi2020?tab=repositories",
  };

  const projects = [immoWeb, immoApp, repo];

  const imgVariants = {
    hover: {
      scaleY: 1.1,
      transition: {
        type: "spring",
        stiffness: 600,
      },
    },
  };

  return (
    <Container sx={{ margin: "60px auto", maxWidth: "100%" }}>
      <Divider>
        <Chip
          label="Projects"
          sx={{
            fontSize: "22px",
            bgcolor: "#afb42b", // lime 700
            color: "white",
          }}
        />
      </Divider>

      {projects.map((project, index) => {
        const even = (index + 1) % 2 === 0;

        return (
          <Grid
            container
            key={index}
            sx={{
              margin: "60px auto 30px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {!even && (
              <Grid item sm={12} md={8}>
                <Tooltip
                  TransitionComponent={Zoom}
                  title={<Typography children="Click to View" />}
                  placement="bottom"
                >
                  <Paper elevation={5}>
                    <a href={project.url} target="_blank">
                      <motion.img
                        src={project.link}
                        alt="project"
                        className="project-img"
                        variants={imgVariants}
                        whileHover="hover"
                      />
                    </a>
                  </Paper>
                </Tooltip>
              </Grid>
            )}

            <Grid item sm={12} md={4}>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  margin: "30px",
                  fontSize: "1.2em",
                  fontWeight: 600,
                }}
              >
                {project.title}
              </Typography>

              <Typography
                align="justify"
                gutterBottom
                paragraph
                variant="body1"
                sx={{
                  fontSize: "1em",
                  fontWeight: 500,
                  color: "white",
                  bgcolor: "#8bc34a", // light green 500
                  borderRadius: "12px",
                  margin: "20px 10px 20px",
                  padding: "15px",
                }}
              >
                {project.text}
              </Typography>

              <Box>
                {project.chips.map((chip, index) => {
                  return (
                    <Chip
                      variant="outlined"
                      key={index}
                      label={chip}
                      sx={{
                        margin: "10px",
                        fontSize: "0.9em",
                        fontWeight: 600,
                        color: "#9e9d24", // lime 800
                        border: "2px solid #9e9d24",
                      }}
                    />
                  );
                })}
              </Box>
            </Grid>

            {even && (
              <Grid item sm={12} md={8}>
                <Tooltip
                  TransitionComponent={Zoom}
                  title={<Typography children="Click to View" />}
                  placement="bottom"
                >
                  <a href={project.url} target="_blank">
                    <motion.img
                      src={project.link}
                      alt="project"
                      className="project-img"
                      variants={imgVariants}
                      whileHover="hover"
                    />
                  </a>
                </Tooltip>
              </Grid>
            )}
          </Grid>
        );
      })}
    </Container>
  );
};

export default Project;
