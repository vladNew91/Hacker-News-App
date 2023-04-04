import { experimental_extendTheme } from '@mui/material/styles';
import { blue, indigo, orange } from "@mui/material/colors";

export const theme = experimental_extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: indigo,
            },
        },
        dark: {
            palette: {
                // primary: indigo,
                secondary: orange,
            },
        },
    },
});
