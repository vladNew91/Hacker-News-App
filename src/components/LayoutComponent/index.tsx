import { styled } from '@mui/material';
import { AppBarContainer } from '../../containers';

const Box = styled("div")(({ theme }) => ({
    height: "calc(100vh - 48px)",
    overflowY: "auto",
    marginTop: theme.spacing(6),
}));

export interface LayoutComponentProps {
    children: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutComponentProps> = ({
    children
}: LayoutComponentProps): JSX.Element => {
    return (
        <>
            <AppBarContainer />
            <Box>{children}</Box>
        </>
    );
};
