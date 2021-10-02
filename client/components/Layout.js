import React from "react";

import { Box, Typography, IconButton } from "@mui/material";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from '@mui/icons-material/LightMode';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import Image from "../static/images/josette_profile_pic.jpeg";

const GitHubButton = () => {
  return (
    <IconButton
      href={"https://github.com/jhgrins"}
      target={"_blank"}
      rel={"noopener"}
      color="secondary"
    >
      <GitHubIcon sx={{ fontSize: 100 }} />
    </IconButton>
  );
};

const LinkedInButton = () => {
  return (
    <IconButton
      href={"https://www.linkedin.com/in/josette-grinslade/"}
      target={"_blank"}
      rel={"noopener"}
      color="secondary"
    >
      <LinkedInIcon sx={{ fontSize: 100 }} />
    </IconButton>
  );
};

const InstagramButton = () => {
  return (
    <IconButton
      href={"https://www.instagram.com/jojogrin/"}
      target={"_blank"}
      rel={"noopener"}
      color="secondary"
    >
      <InstagramIcon sx={{ fontSize: 100 }} />
    </IconButton>
  );
};

const YoutubeButton = () => {
  return (
    <IconButton
      href={"https://www.youtube.com/channel/UCplZPrdYG0-bXWngzPiDwgQ"}
      target={"_blank"}
      rel={"noopener"}
      color="secondary"
    >
      <YouTubeIcon sx={{ fontSize: 100 }} />
    </IconButton>
  );
};

const DarkModeButton = ({ isDarkMode }) => {
  return isDarkMode ? <LightModeIcon /> : <DarkModeIcon />;
};

const Layout = (props) => {
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"flex-end"}
        sx={{ height: "65vh", width: "100vw", bgcolor: "primary.main" }}
        p={1}
      >
        <Box width={500}>
          <Typography
            align={"right"}
            fontFamily={"cookie"}
            sx={{ fontSize: 140, color: "text.primary" }}
          >
            Josette
          </Typography>
        </Box>
        <Box pl={4} pr={4}>
          <img
            className={"circular--square"}
            src={Image}
            alt={"Josette"}
            style={{ width: 350 }}
          />
        </Box>
        <Box width={500}>
          <Typography
            align={"left"}
            fontFamily={"cookie"}
            sx={{ fontSize: 140, color: "text.primary" }}
          >
            Grinslade
          </Typography>
        </Box>
        <Box alignSelf={"flex-start"} pr={2} pt={1}>
          <IconButton
            color="secondary"
            size="large"
            onClick={() => props.setDarkMode(!props.darkMode)}
          >
            <DarkModeButton isDarkMode={props.darkMode} />
          </IconButton>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        sx={{ width: "100vw" }}
        pt={5}
        pr={7}
      >
        <GitHubButton />
        <LinkedInButton />
        <InstagramButton />
        <YoutubeButton />
      </Box>
    </Box>
  );
};

export default Layout;
