import "styled-components";
import { TTheme } from "./theme";

declare module "styled-components" {
	interface DefaultTheme extends TTheme {}
}
