import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Reset from "./Reset";
import Normalize from "./Normalize";

const Styles = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			<Reset />
			<Normalize />
			{children}
		</ThemeProvider>
	);
};

export default Styles;
