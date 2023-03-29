import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { ThemeSwitcherContainer } from '../../containers';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import {
    IconButton,
    Tooltip,
    Box,
    AppBar,
    Toolbar,
    Typography,
} from '@mui/material';

export interface LayoutComponentProps {
    children: React.ReactNode;
}

const prewPage: number = -1;

export const LayoutComponent: React.FC<LayoutComponentProps> = ({
    children
}: LayoutComponentProps): JSX.Element => {
    const navigate = useNavigate();

    const handlePageBack = useCallback(() => navigate(prewPage), [navigate]);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Tooltip title="Hacker News">
                            <IconButton onClick={handlePageBack}>
                                <AltRouteIcon />
                            </IconButton>
                        </Tooltip>

                        <Typography variant="h6" component="div" mr={3}>
                            Hacker News
                        </Typography>

                        <ThemeSwitcherContainer />
                    </Toolbar>
                </AppBar>
            </Box>

            <Box
                sx={{
                    height: 'calc(100vh - 64px)',
                    overflowY: 'auto',
                    mt: '64px',
                }}
            >
                {children}
            </Box>
        </>
    );
};
