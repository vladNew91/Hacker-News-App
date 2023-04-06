import MoreIcon from '@mui/icons-material/MoreVert';
import { ThemeSwitcherContainer } from '../../containers';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { MobileMenuComponent, SettingsMenuComponent } from '../../components';
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
    anchorEl: HTMLElement | null;
    isMenuOpen: boolean;
    handleMenuClose: () => void;
    isMobileMenuOpen: boolean;
    mobileMoreAnchorEl: HTMLElement | null;
    handleCloseMenuItem: (path: string) => void;
    handleNestedMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
    handleMobileMenuClose: () => void;
}

export const AppBarComponent: React.FC<AppBarComponentProps> = ({
    goToPage,
    anchorEl,
    isMenuOpen,
    handleMenuClose,
    isMobileMenuOpen,
    mobileMoreAnchorEl,
    handleCloseMenuItem,
    handleNestedMenuOpen,
    handleMobileMenuOpen,
    handleMobileMenuClose,
}: AppBarComponentProps): JSX.Element => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" enableColorOnDark>
                <Toolbar variant="dense">
                    <IconButton onClick={() => goToPage("/")}>
                        <NewspaperIcon />
                    </IconButton>

                    <Typography variant="h6">
                        Hacker News
                    </Typography>

                    <Box
                        mr={2}
                        ml={2}
                        display={{ xs: 'none', sm: 'block' }}
                    >
                        <ThemeSwitcherContainer />
                    </Box>

                    <Box display={{ xs: 'none', sm: 'block' }}>
                        <ButtonGroup variant="text" color="inherit">
                            <Button onClick={() => goToPage("/top")}>Top</Button>
                            <Button onClick={() => goToPage("/best")}>Best</Button>
                            <Button onClick={() => goToPage("/newest")}>Newest</Button>
                            <Button onClick={() => goToPage("/jobs")}>Jobs</Button>
                        </ButtonGroup>
                    </Box>

                    <Box flexGrow={1}></Box>

                    <Box display={{ xs: 'flex', sm: 'none' }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <MobileMenuComponent
                isMobileMenuOpen={isMobileMenuOpen}
                mobileMoreAnchorEl={mobileMoreAnchorEl}
                handleCloseMenuItem={handleCloseMenuItem}
                handleNestedMenuOpen={handleNestedMenuOpen}
                handleMobileMenuClose={handleMobileMenuClose}
            />

            <SettingsMenuComponent
                anchorEl={anchorEl}
                isMenuOpen={isMenuOpen}
                handleMenuClose={handleMenuClose}
            />
        </Box>
    );
};
