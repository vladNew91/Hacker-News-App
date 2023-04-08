import { experimental_extendTheme } from '@mui/material/styles';
import { orange, blue, grey } from "@mui/material/colors";

export const theme = experimental_extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: orange[600],
                },
                secondary: {
                    main: blue[700],
                },
                background: {
                    default: grey[50],
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: "#251800",
                },
                secondary: {
                    main: orange[300],
                },
                background: {
                    default: "#392400",
                },
                text: {
                    primary: orange[300],
                    secondary: orange[100],
                },
            },
        }
    },
});
