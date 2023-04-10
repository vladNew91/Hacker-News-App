import { ThemeSwitcherContainer } from '../../containers';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import {
    IconButton,
    Box,
    AppBar,
    Toolbar,
    Typography,
    ButtonGroup,
    Button,
} from '@mui/material';

interface AppBarComponentProps {
    goToPage: (url: string) => void;
}

export const AppBarComponent: React.FC<AppBarComponentProps> = ({
    goToPage,
}: AppBarComponentProps): JSX.Element => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" enableColorOnDark>
                <Toolbar variant="dense">
                    <IconButton onClick={() => goToPage("/")}>
                        <NewspaperIcon />
                    </IconButton>

                    <Typography variant="h6" component="div">
                        Hacker News
                    </Typography>

                    <Box mr={3} ml={3}>
                        <ThemeSwitcherContainer />
                    </Box>

                    <ButtonGroup variant="text" color="inherit">
                        <Button onClick={() => goToPage("/")}>Top</Button>
                        <Button onClick={() => goToPage("/newest")}>Newest</Button>
                        <Button onClick={() => goToPage("/jobs")}>Jobs</Button>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
