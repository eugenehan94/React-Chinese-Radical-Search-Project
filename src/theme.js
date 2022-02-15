import { createTheme, responsiveFontSizes } from "@mui/material/styles";
// direction set how the left sidebar transitions into screen - left to right
let theme = createTheme({ direction: "ltr" });
theme = responsiveFontSizes(theme);

export default theme;