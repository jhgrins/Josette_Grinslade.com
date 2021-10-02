import React, { useEffect, useMemo, useState } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightGreen, deepPurple, purple, blueGrey } from "@mui/material/colors";
import { SnackbarProvider } from "notistack";

import Layout from "./Layout";

const App = (props) => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [darkMode, setDarkMode] = useState();

	useEffect(() => setDarkMode(prefersDarkMode), [prefersDarkMode]);
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: darkMode ? "dark" : "light",
					...(darkMode
						? {
								primary: { main: "#343531" },
								secondary: { main: "#c8deba" },
								background: {
									// default: "#593f5d"
									default: "#725d75"
								},
								text: {
									primary: "#FFFFFF",
									secondary: blueGrey[500]
								}
						  }
						: {
								primary: { main: "#b59ac8" },
								secondary: { main: "#415036" },
								background: {
									default: "#f0f7f2"
								},
								text: {
									primary: "#393939",
									secondary: lightGreen[800]
								}
						  })
				}
			}),
		[darkMode]
	);

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<SnackbarProvider maxSnack={3} preventDuplicate>
					<Layout darkMode={darkMode} setDarkMode={setDarkMode} />
				</SnackbarProvider>
			</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default App;