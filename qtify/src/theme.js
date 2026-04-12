import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Poppins",
    },
    palette: {
        primary: {
            main: "#34C94B",
            dark: "#121212",
            light: "#FFFFFF",
            // contrastText: "#fff",
        },
    },
});

export default theme;
