import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#43A047",
      main: "#68B36B",
      dark: "#2E7031",
      contrastText: "#fff",
    },
    secondary: {
      light: "#E57373",
      main: "#E57373",
      dark: "#A05050",
      contrastText: "#000",
    },
  },
});
export default theme;
