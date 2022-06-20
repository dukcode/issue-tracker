import "styled-components";
import { ThemeType } from "./theme";

declare module "styled-components" {
	interface DefaultTheme extends ThemeType {}
}
