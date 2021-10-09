import React from "react";

import { Box, Typography, IconButton } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { DarkMode, LightMode, GitHub, LinkedIn, YouTube, Instagram } from "@mui/icons-material";

import ProfileImage from "../static/images/josette_profile_pic.jpeg";

const useStyles = makeStyles((theme) => {
  return ({
    nameBox: {
      [theme.breakpoints.down('md')]: {
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.up('md')]: {
        alignItems: "flex-end",
        paddingBottom: 6,
      },
      justifyContent: "center",
      display: "flex",
      height: "65vh",
      width: "100vw",
      backgroundColor: theme.palette.primary.main
    },
    textBox: {
      [theme.breakpoints.down('md')]: {
        width: 250,
      },
      [theme.breakpoints.up('md')]: {
        width: 500,
      },
    },
    josetteText: {
      [theme.breakpoints.down('md')]: {
        textAlign: "center",
        fontSize: 80,
        flexDirection: "column"

      },
      [theme.breakpoints.up('md')]: {
        textAlign: "right",
        fontSize: 170,
        flexDirection: "row"
      },
      color: "text.primary",
      fontFamily: "cookie",
    },
    grinsladeText: {
      [theme.breakpoints.down('md')]: {
        textAlign: "center",
        fontSize: 80,
        flexDirection: "column"
      },
      [theme.breakpoints.up('md')]: {
        textAlign: "left",
        fontSize: 170,
        flexDirection: "row"
      },
      color: "text.primary",
      fontFamily: "cookie",
    },
    profileBox: {
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(1),
      },
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(4),
      },
    },
    profilePic: {
      [theme.breakpoints.down('md')]: {
        width: 200,
      },
      [theme.breakpoints.up('md')]: {
        width: 400,
      },
      borderRadius: "50%"
    },
  })
});

const SocialButton = ({ Icon, href }) => {
  return (
    <IconButton
      href={href}
      target={"_blank"}
      rel={"noopener"}
      color="secondary"
    >
      <Icon sx={{ fontSize: 60 }} />
    </IconButton>
  );
};

const DarkModeButton = ({ isDarkMode }) => {
  return isDarkMode ? <LightMode sx={{ fontSize: 30 }} /> : <DarkMode sx={{ fontSize: 30 }} />;
};

const Layout = (props) => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.nameBox}>
        <Box className={classes.textBox}>
          <Typography
            className={classes.josetteText}
          >
            Josette
          </Typography>
        </Box>
        <Box className={classes.profileBox}>
          <img
            className={classes.profilePic}
            src={ProfileImage}
            alt={"Josette"}
          />
        </Box>
        <Box className={classes.textBox}>
          <Typography
            className={classes.grinsladeText}
          >
            Grinslade
          </Typography>
        </Box>

      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        sx={{ width: "100vw" }}
        pt={5}
      >
        <SocialButton Icon={GitHub} href={"https://github.com/jhgrins"} />
        <SocialButton Icon={LinkedIn} href={"https://www.linkedin.com/in/josette-grinslade/"} />
        <SocialButton Icon={Instagram} href={"https://www.instagram.com/jojogrin/"} />
        <SocialButton Icon={YouTube} href={"https://www.youtube.com/channel/UCplZPrdYG0-bXWngzPiDwgQ"} />
      </Box>
      <Box position={"absolute"} top={20} right={20}>
        <IconButton
          color="secondary"
          onClick={() => props.setDarkMode(!props.darkMode)}
        >
          <DarkModeButton isDarkMode={props.darkMode} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Layout;
