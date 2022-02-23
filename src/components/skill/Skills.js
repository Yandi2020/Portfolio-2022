import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

const Skills = () => {
  const html = { link: require("../../img/skills/html.png"), label: "HTML" };
  const css = { link: require("../../img/skills/css.png"), label: "CSS" };
  const javascript = { link: require("../../img/skills/js.png"), label: "JavaScript" };
  const react = { link: require("../../img/skills/react.png"), label: "React" };
  const redux = { link: require("../../img/skills/redux.png"), label: "Redux" };
  const mui = { link: require("../../img/skills/mui.png"), label: "MUI" };

  const node = { link: require("../../img/skills/node.png"), label: "Node" };
  const express = { link: require("../../img/skills/express.png"), label: "Express" };
  const mongodb = { link: require("../../img/skills/mongodb.png"), label: "MongoDB" };
  const mysql = { link: require("../../img/skills/mysql.png"), label: "MySQL" };
  const postgres = { link: require("../../img/skills/postgres.png"), label: "PostgreSQL" };
  const docker = { link: require("../../img/skills/docker.png"), label: "Docker" };
//   const sql = { link: require("../../img/skills/sql.png"), label: "SQL" };
  
  const reactQuery = { link: require("../../img/skills/rq.png"), label: "React Query" };
  const jest = { link: require("../../img/skills/jest.png"), label: "Jest" };
  const git = { link: require("../../img/skills/git.png"), label: "Git" };
  const github = { link: require("../../img/skills/github.png"), label: "Github" };
  const sass = { link: require("../../img/skills/sass.png"), label: "Sass" };
  const reactNative = { link: require("../../img/skills/react-native.png"), label: "React Native" };

//   const bootstrap = { link: require("../../img/skills/bootstrap.png"), label: "Bootstrap" };
//   const firebase = { link: require("../../img/skills/firebase.png"), label: "Firebase" };

  const skills = [html, css, javascript, react, redux, mui, node, express, mongodb, mysql, postgres, docker, reactQuery, jest, git, github, sass, reactNative ];

  return (
    <Container sx={{ margin: "50px auto" }}>
      <Divider>
        <Chip
          label="Skill List"
          sx={{ 
            fontSize: "22px", 
            bgcolor: "#afb42b", // lime 700
            color: "white" 
          }}
        />
      </Divider>

      <Grid container spacing={2}>
        {skills.map((skill, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={3} lg={2}>
              <Avatar
                src={skill.link}
                variant="rounded"
                sx={{ width: 50, height: 50, margin: "15px auto" }}
              />

              <Typography
                align="center"
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                }}
              >
                {skill.label}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Skills;
