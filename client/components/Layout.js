import React from "react";
import cat from "../static/images/cute_cat.gif";

import { Box, Typography, IconButton, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DarkMode, LightMode, GitHub, LinkedIn, YouTube, Instagram } from "@mui/icons-material";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";

import clsx from "clsx";

import ProfileImage from "../static/images/josette_profile_pic.jpeg";
import { height } from "@mui/system";

const useStyles = makeStyles((theme) => {
	return {
		nameBox: {
			[theme.breakpoints.up("xs")]: {
				flexDirection: "column",
				alignItems: "center",
				height: "40vh"
			},
			[theme.breakpoints.up("md")]: {
				flexDirection: "row",
				alignItems: "flex-end",
				paddingBottom: 6,
				height: "65vh",
			},
			display: "flex",
			justifyContent: "center",
			minHeight: "400px",
			width: "100vw",
			backgroundColor: theme.palette.primary.main
		},
		textBox: {
			[theme.breakpoints.up("xs")]: { width: 250 },
			[theme.breakpoints.up("md")]: { width: 300 },
			[theme.breakpoints.up("lg")]: { width: 400 },
			[theme.breakpoints.up("xl")]: { width: 500 }
		},
		nameText: {
			[theme.breakpoints.up("xs")]: { fontSize: 75, textAlign: "center" },
			[theme.breakpoints.up("sm")]: { fontSize: 80 },
			[theme.breakpoints.up("md")]: { fontSize: 100 },
			[theme.breakpoints.up("lg")]: { fontSize: 120 },
			[theme.breakpoints.up("xl")]: { fontSize: 150 },
			color: "text.primary",
			fontFamily: "cookie"
		},
		josetteText: {
			[theme.breakpoints.up("md")]: { textAlign: "right" }
		},
		grinsladeText: {
			[theme.breakpoints.up("md")]: { textAlign: "left" }
		},
		profileBox: {
			[theme.breakpoints.up("xs")]: { padding: theme.spacing(1) },
			[theme.breakpoints.up("md")]: { padding: theme.spacing(4) }
		},
		profilePic: {
			[theme.breakpoints.up("xs")]: { width: 150 },
			[theme.breakpoints.up("sm")]: { width: 200 },
			[theme.breakpoints.up("md")]: { width: 300 },
			[theme.breakpoints.up("lg")]: { width: 400 },
			[theme.breakpoints.up("xl")]: { width: 500 },
			borderRadius: "50%"
		},
		bioText: {
			[theme.breakpoints.up("xs")]: { fontSize: 30, textAlign: "center" },
			[theme.breakpoints.up("sm")]: { fontSize: 30 },
			[theme.breakpoints.up("md")]: { fontSize: 40 },
			[theme.breakpoints.up("lg")]: { fontSize: 50 },
			[theme.breakpoints.up("xl")]: { fontSize: 65 },

			fontFamily: "dongle",
			paddingLeft: theme.spacing(4),
			paddingRight: theme.spacing(4),
			
		},
		cat : {
			marginTop: theme.spacing(-4),
			marginLeft: theme.spacing(-4)
		}
	};
});

const Layout = (props) => {
	const classes = useStyles();
	const [showCat, setShowCat] = React.useState(false);
	return (
		<Box>
			<Box className={classes.nameBox}>
				<Box className={classes.textBox}>
					<Typography className={clsx(classes.nameText, classes.josetteText)}>
						Josette
					</Typography>
				</Box>
				<Box className={classes.profileBox}>
					<img className={classes.profilePic} src={ProfileImage} alt={"Josette"} />
				</Box>
				<Box className={classes.textBox}>
					<Typography className={clsx(classes.nameText, classes.grinsladeText)}>
						Grinslade
					</Typography>
				</Box>
			</Box>
			<Box
				display={"flex"}
				flexDirection={"column"}
				alignItems={"center"}
				justifyContent={"space-between"}
				sx={{ width: "100vw" }}
				pt={5}
			>
				<Box>
					<SocialButton Icon={GitHub} href={"https://github.com/jhgrins"} />
					<SocialButton Icon={LinkedIn} href={"https://www.linkedin.com/in/jhgrins/"} />
					<SocialButton
						Icon={Instagram}
						href={"https://www.instagram.com/josette.grinslade/"}
					/>
					<SocialButton
						Icon={YouTube}
						href={"https://www.youtube.com/channel/UCplZPrdYG0-bXWngzPiDwgQ"}
					/>
				</Box>
				<Box>

					<div className={clsx(classes.bioText)} sx={{ mt: 4 }}>
						I'm a software engineer passionate about games, crafts, and{" "}
						<a variant="text" onClick={() => setShowCat(!showCat)}>
							cats!
						</a>
					</div>
				</Box>
				{showCat && <img src={cat} alt="cute cat" height={100} className={clsx(classes.cat)}/>}
			</Box>
			
			<Box position={"absolute"} top={20} right={20}>
				<IconButton color="secondary" onClick={() => props.setDarkMode(!props.darkMode)}>
					{props.darkMode ? (
						<LightMode sx={{ fontSize: 30 }} />
					) : (
						<DarkMode sx={{ fontSize: 30 }} />
					)}
				</IconButton>
			</Box>
		</Box>
	);
};

const SocialButton = ({ Icon, href }) => {
	return (
		<IconButton href={href} target={"_blank"} rel={"noopener"} color="secondary">
			<Icon sx={{ fontSize: 60 }} />
		</IconButton>
	);
};

export default Layout;
