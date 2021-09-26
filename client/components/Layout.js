import React from "react";

import { Button, Container, Grid, Typography } from "@material-ui/core";

const Layout = () => {
	return (
		<Container>
			<Grid
				container
				direction={"column"}
				justify={"center"}
				alignContent={"center"}
				alignItems={"center"}
				spacing={2}
				style={{ height: "100vh" }}
			>
				<Grid item>
					<Typography variant={"h2"}>Hello, Welcome to my Website!</Typography>
				</Grid>
				<Grid item>
					<Button color={"primary"} onClick={() => alert("What's Cookin Good Lookin?")}>
						Click Me
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Layout;
