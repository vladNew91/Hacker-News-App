import { Typography, styled } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

const Box = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
    padding: theme.spacing(2),
}));

export const ErrorPage: React.FC = (): JSX.Element => {
    return (
        <Box>
            <ErrorIcon />

            <Typography variant="h6" m={1}>
                Something went wrong
            </Typography>
        </Box>
    );
};
