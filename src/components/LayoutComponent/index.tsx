import { AppBarContainer } from '../../containers';
import { Box } from '@mui/material';

export interface LayoutComponentProps {
    children: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutComponentProps> = ({
    children
}: LayoutComponentProps): JSX.Element => {
    return (
        <>
            <AppBarContainer />

            <Box
                sx={{
                    height: "calc(100vh - 48px)",
                    overflowY: "auto",
                    mt: "48px",
                }}
            >
                {children}
            </Box>
        </>
    );
};
