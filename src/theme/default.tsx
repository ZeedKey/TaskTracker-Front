import { styled, createTheme, ThemeProvider } from "@mui/system";

const colors = {
  white: "#fffff",
  black: "#000000",
  primary: "#00618E",
};
const shapes = {
  borderRadius: 15,
};

export const defaultTheme = createTheme({
  palette: colors,
  shape: shapes,
});
