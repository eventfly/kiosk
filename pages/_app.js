import "../styles/styles.css";

import { ChakraProvider } from "@chakra-ui/react";
// import { ThemeProvider, createTheme } from "@mui/material/styles";

import DefaultLayout from "../layouts/DefaultLayout";

// const theme = createTheme();

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<DefaultLayout>
				<Component {...pageProps} />
			</DefaultLayout>
		</ChakraProvider>
	);
}

export default MyApp;