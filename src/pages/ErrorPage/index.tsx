import { Box, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

export const ErrorPage: React.FC = (): JSX.Element => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100%',
                padding: 2,
            }}
        >
            <ErrorIcon />
            <Typography variant="h6" m={1}>
                Something went wrong. Refetch data
            </Typography>
        </Box>
    );
};
